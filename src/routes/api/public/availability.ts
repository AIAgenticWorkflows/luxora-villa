import { createFileRoute } from "@tanstack/react-router";

type Range = { start: string; end: string };

function getEnvVar(name: string): string | undefined {
  if (typeof process !== "undefined" && process.env && process.env[name]) {
    return process.env[name];
  }
  if (typeof globalThis !== "undefined") {
    const g = globalThis as unknown as {
      process?: { env?: Record<string, string | undefined> };
      [key: string]: unknown;
    };
    if (g.process?.env?.[name]) return g.process.env[name];
    const val = g[name];
    if (typeof val === "string") return val;
  }
  return undefined;
}

function toISO(dt: string): string | null {
  // Accepts YYYYMMDD or YYYYMMDDTHHMMSSZ
  const m = dt.match(/^(\d{4})(\d{2})(\d{2})/);
  if (!m) return null;
  return `${m[1]}-${m[2]}-${m[3]}`;
}

function parseICal(text: string): Range[] {
  const ranges: Range[] = [];
  // Unfold lines (RFC5545: continuation lines start with space/tab)
  const unfolded = text.replace(/\r?\n[ \t]/g, "");
  const blocks = unfolded.split(/BEGIN:VEVENT/i).slice(1);
  for (const b of blocks) {
    const startMatch = b.match(/DTSTART[^:]*:([^\r\n]+)/i);
    const endMatch = b.match(/DTEND[^:]*:([^\r\n]+)/i);
    if (!startMatch || !endMatch) continue;
    const s = toISO(startMatch[1].trim());
    const e = toISO(endMatch[1].trim());
    if (s && e) ranges.push({ start: s, end: e });
  }
  return ranges;
}

export const Route = createFileRoute("/api/public/availability")({
  server: {
    handlers: {
      GET: async () => {
        const fallbackUrl =
          "https://ical.booking.com/v1/export?t=4946a405-b8c9-4524-a1d9-6cdd47d03e85";
        const urlConfig = getEnvVar("BOOKING_ICAL_URL") || fallbackUrl;

        const headers = {
          "content-type": "application/json",
          "cache-control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
        };

        if (!urlConfig) {
          return new Response(
            JSON.stringify({
              status: "unconfigured",
              ranges: [],
              updatedAt: new Date().toISOString(),
            }),
            { headers },
          );
        }

        // Support multiple comma/semicolon/whitespace separated URLs
        const urls = urlConfig
          .split(/[,;\s]+/)
          .map((u) => u.trim())
          .filter(Boolean);

        const fetchedRanges: Range[] = [];
        let hasErrors = false;

        const fetchPromises = urls.map(async (url) => {
          // Append cache buster to the external fetch to bypass any Booking.com/CDN caching
          const separator = url.includes("?") ? "&" : "?";
          const finalUrl = `${url}${separator}_cb=${Date.now()}`;
          const res = await fetch(finalUrl, { headers: { "user-agent": "LuxoraVilla/1.0" } });
          if (!res.ok) {
            throw new Error(`Failed to fetch ${url}: ${res.status}`);
          }
          const text = await res.text();
          return parseICal(text);
        });

        const results = await Promise.allSettled(fetchPromises);

        for (const result of results) {
          if (result.status === "fulfilled") {
            fetchedRanges.push(...result.value);
          } else {
            console.error("Error fetching iCal feed:", result.reason);
            hasErrors = true;
          }
        }

        // Deduplicate and sort ranges
        const uniqueRangesMap = new Map<string, Range>();
        for (const range of fetchedRanges) {
          const key = `${range.start}_${range.end}`;
          uniqueRangesMap.set(key, range);
        }
        const sortedRanges = Array.from(uniqueRangesMap.values()).sort((a, b) =>
          a.start.localeCompare(b.start),
        );

        return new Response(
          JSON.stringify({
            status: hasErrors && fetchedRanges.length === 0 ? "error" : "ok",
            ranges: sortedRanges,
            updatedAt: new Date().toISOString(),
          }),
          { headers },
        );
      },
    },
  },
});
