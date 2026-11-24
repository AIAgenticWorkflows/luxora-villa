import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_NUMBER } from "./WhatsAppButton";

/**
 * Short band under the hero listing the periods still available this season, each with a
 * WhatsApp tap that already names the period.
 *
 * WINDOWS are the periods we want to promote (end = departure day, exclusive).
 * Any nights booked on the Booking.com calendar (direct bookings are closed there too)
 * are removed automatically, plus anything in MANUAL_BLOCKS. Pieces shorter than the
 * minimum stay are hidden, and the band disappears when nothing is left.
 */
type PromoWindow = { id: string; start: string; end: string; openEnd?: boolean; en?: string; fr?: string };
type BookedRange = { start: string; end: string };

const MIN_NIGHTS = 5;

const WINDOWS: PromoWindow[] = [
  { id: "dec1", start: "2026-12-01", end: "2026-12-11" },
  {
    id: "dec21",
    start: "2026-12-21",
    end: "2026-12-27",
    en: "Christmas, 21 to 27 Dec",
    fr: "Noël, du 21 au 27 déc.",
  },
  { id: "jan8", start: "2027-01-08", end: "2027-02-01", openEnd: true },
];

/** Bookings to hide even before the live calendar loads. */
const MANUAL_BLOCKS: BookedRange[] = [{ start: "2026-12-04", end: "2026-12-07" }];

const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_FR = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
const MONTHS_EN_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MONTHS_FR_LONG = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m: m - 1, d };
}
function nights(a: string, b: string) {
  const pa = parts(a), pb = parts(b);
  return Math.round((Date.UTC(pb.y, pb.m, pb.d) - Date.UTC(pa.y, pa.m, pa.d)) / 86400000);
}
function today() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
}

/** Splits a window into the pieces not covered by any booked range. */
function availablePieces(w: PromoWindow, booked: BookedRange[]): BookedRange[] {
  let pieces: BookedRange[] = [{ start: w.start > today() ? w.start : today(), end: w.end }];
  for (const b of booked) {
    const next: BookedRange[] = [];
    for (const p of pieces) {
      if (b.end <= p.start || b.start >= p.end) {
        next.push(p);
        continue;
      }
      if (b.start > p.start) next.push({ start: p.start, end: b.start });
      if (b.end < p.end) next.push({ start: b.end, end: p.end });
    }
    pieces = next;
  }
  return pieces.filter((p) => nights(p.start, p.end) >= MIN_NIGHTS);
}

type Period = { id: string; en: string; fr: string; msgEn: string; msgFr: string };

function toPeriod(w: PromoWindow, p: BookedRange, i: number): Period {
  const s = parts(p.start), e = parts(p.end);
  const whole = p.start === w.start && p.end === w.end;
  const toEnd = w.openEnd && p.end === w.end;
  const sameMonth = s.m === e.m;
  const en =
    whole && w.en ? w.en
    : toEnd ? `From ${s.d} ${MONTHS_EN[s.m]}`
    : sameMonth ? `${s.d} to ${e.d} ${MONTHS_EN[s.m]}`
    : `${s.d} ${MONTHS_EN[s.m]} to ${e.d} ${MONTHS_EN[e.m]}`;
  const fr =
    whole && w.fr ? w.fr
    : toEnd ? `Dès le ${s.d === 1 ? "1er" : s.d} ${MONTHS_FR_LONG[s.m]}`
    : sameMonth ? `Du ${s.d === 1 ? "1er" : s.d} au ${e.d} ${MONTHS_FR[s.m]}`
    : `Du ${s.d === 1 ? "1er" : s.d} ${MONTHS_FR[s.m]} au ${e.d} ${MONTHS_FR[e.m]}`;
  const msgEn = toEnd
    ? `from ${s.d} ${MONTHS_EN_LONG[s.m]} ${s.y}`
    : `between ${s.d} ${MONTHS_EN_LONG[s.m]} and ${e.d} ${MONTHS_EN_LONG[e.m]} ${e.y}`;
  const msgFr = toEnd
    ? `à partir du ${s.d === 1 ? "1er" : s.d} ${MONTHS_FR_LONG[s.m]} ${s.y}`
    : `entre le ${s.d === 1 ? "1er" : s.d} ${MONTHS_FR_LONG[s.m]} et le ${e.d} ${MONTHS_FR_LONG[e.m]} ${e.y}`;
  return { id: `${w.id}-${i}`, en, fr, msgEn, msgFr };
}

function computePeriods(booked: BookedRange[]): Period[] {
  return WINDOWS.flatMap((w) => availablePieces(w, booked).map((p, i) => toPeriod(w, p, i)));
}

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function FreeDatesBand() {
  const { t, lang } = useLang();
  const [booked, setBooked] = useState<BookedRange[]>(MANUAL_BLOCKS);

  useEffect(() => {
    fetch(`/api/public/availability?t=${Date.now()}`)
      .then((r) => r.json())
      .then((data: { ranges?: BookedRange[] }) => {
        if (Array.isArray(data.ranges)) setBooked([...MANUAL_BLOCKS, ...data.ranges]);
      })
      .catch(() => {});
  }, []);

  const periods = useMemo(() => computePeriods(booked), [booked]);
  if (periods.length === 0) return null;
  return (
    <section
      id="free-dates"
      aria-label={t("Available dates", "Dates disponibles")}
      className="bg-luxury-dark text-white scroll-mt-16"
    >
      <div className="container mx-auto px-4 py-6 sm:py-7">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          <div className="lg:w-1/3">
            <p className="text-luxury-gold text-xs font-semibold tracking-widest uppercase mb-1">
              {t("Still available this season", "Encore disponible cette saison")}
            </p>
            <h2 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
              {t("Available for Christmas and January", "Disponible pour Noël et janvier")}
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              {t(
                "Minimum 5 nights. Tap a period and the host replies on WhatsApp, usually within the hour.",
                "Minimum 5 nuits. Touchez une période et l'hôte vous répond sur WhatsApp, généralement dans l'heure.",
              )}
            </p>
          </div>
          <ul className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {periods.map((p) => {
              const msg =
                lang === "fr"
                  ? `Bonjour Luxora Villa, je suis intéressé(e) par un séjour ${p.msgFr}. Pouvez-vous me confirmer la disponibilité et le tarif pour mes dates ?`
                  : `Hi Luxora Villa, I'm interested in a stay ${p.msgEn}. Could you confirm availability and the rate for my dates?`;
              return (
                <li key={p.id}>
                  <a
                    href={waLink(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-3 hover:bg-luxury-gold hover:border-luxury-gold transition group"
                  >
                    <span className="font-semibold">{lang === "fr" ? p.fr : p.en}</span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-luxury-gold group-hover:text-white whitespace-nowrap">
                      {t("Ask", "Demander")} →
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
