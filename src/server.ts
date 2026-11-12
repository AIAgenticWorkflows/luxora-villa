import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

// Pages that were removed but are still known to search engines and old links.
// A permanent redirect passes them to the page that replaced them instead of a 404.
const PERMANENT_REDIRECTS: Record<string, string> = {
  "/villa": "/",
  "/fr/villa": "/fr",
  // Not a real page: Google picks this route name out of the blog pages' scripts and tries it as a URL.
  "/blog/$slug": "/blog",
  "/fr/blog/$slug": "/fr/blog",
};

// The site's one public address. Every page declares it as canonical.
const CANONICAL_ORIGIN = "https://www.luxoravilla.com";

// Other public addresses that serve a copy of this site. The Lovable address is only refreshed
// when the project is published from Lovable, so it drifts out of date, and search engines and
// AI assistants index it as a second Luxora Villa site with old facts. A permanent redirect
// passes each of its pages to the same page on the real domain.
// Exact names only: Lovable's editor previews use other hostnames and must keep working.
const RETIRED_HOSTS = new Set(["luxora-villa.lovable.app"]);

function isRetiredHost(request: Request, url: URL): boolean {
  const names = [url.hostname];
  for (const header of ["x-forwarded-host", "host"]) {
    const value = request.headers.get(header);
    if (value) names.push(value.split(",")[0].trim().replace(/:\d+$/, ""));
  }
  return names.some((name) => RETIRED_HOSTS.has(name.toLowerCase()));
}

function permanentRedirect(request: Request): Response | undefined {
  if (request.method !== "GET" && request.method !== "HEAD") return undefined;
  const url = new URL(request.url);
  const retiredHost = isRetiredHost(request, url);
  let pathname = url.pathname;
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    // keep the raw path
  }
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const target = PERMANENT_REDIRECTS[path];
  if (!target && !retiredHost) return undefined;
  const origin = retiredHost ? CANONICAL_ORIGIN : url.origin;
  return new Response(null, {
    status: 301,
    headers: { location: `${origin}${target ?? url.pathname}${url.search}` },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const redirected = permanentRedirect(request);
    if (redirected) return redirected;
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
