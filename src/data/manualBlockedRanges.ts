export type Range = { start: string; end: string };

export const manualBlockedRanges: Range[] = [
  // Manually blocked dates (e.g., direct bookings, maintenance, or other platform bookings)
  { start: "2025-07-24", end: "2025-07-26" }, // July 24 & 25, 2025
  { start: "2026-07-24", end: "2026-07-26" }, // July 24 & 25, 2026
];
