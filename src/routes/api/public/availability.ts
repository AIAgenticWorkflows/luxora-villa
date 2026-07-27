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
        const urlConfig =
          process.env.BOOKING_ICAL_URL ||
          "https://ical.booking.com/v1/export?t=4946a405-b8c9-4524-a1d9-6cdd47d03e85";
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
          const res = await fetch(url, { headers: { "user-agent": "LuxoraVilla/1.0" } });
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

        // Automatically block the next two dates from the current date
        const now = new Date();
        const d1 = new Date(now);
        d1.setDate(now.getDate() + 1);
        const d2 = new Date(now);
        d2.setDate(now.getDate() + 2);
        const d3 = new Date(now);
        d3.setDate(now.getDate() + 3);

        const ymdStr = (d: Date) => {
          const y = d.getFullYear();
          const m = String(d.getMonth() + 1).padStart(2, "0");
          const day = String(d.getDate()).padStart(2, "0");
          return `${y}-${m}-${day}`;
        };

        const block1 = ymdStr(d1);
        const block3 = ymdStr(d3);

        fetchedRanges.push({ start: block1, end: block3 });

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
