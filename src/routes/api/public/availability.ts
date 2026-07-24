import { createFileRoute } from "@tanstack/react-router";

type Range = { start: string; end: string };

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
        const url =
          process.env.BOOKING_ICAL_URL ||
          "https://ical.booking.com/v1/export?t=4946a405-b8c9-4524-a1d9-6cdd47d03e85";
        const headers = {
          "content-type": "application/json",
          "cache-control": "public, max-age=1800, s-maxage=1800",
        };
        if (!url) {
          return new Response(JSON.stringify({ status: "unconfigured", ranges: [] }), { headers });
        }
        try {
          const res = await fetch(url, { headers: { "user-agent": "LuxoraVilla/1.0" } });
          if (!res.ok) {
            return new Response(JSON.stringify({ status: "error", ranges: [], code: res.status }), {
              headers,
            });
          }
          const text = await res.text();
          const ranges = parseICal(text);
          return new Response(
            JSON.stringify({ status: "ok", ranges, updatedAt: new Date().toISOString() }),
            { headers },
          );
        } catch (err) {
          return new Response(
            JSON.stringify({ status: "error", ranges: [], message: String(err) }),
            { headers },
          );
        }
      },
    },
  },
});
