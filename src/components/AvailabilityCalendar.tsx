import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_NUMBER } from "./WhatsAppButton";

type Range = { start: string; end: string }; // ISO YYYY-MM-DD, end exclusive

function ymd(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseYmd(s: string) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function isBooked(dateStr: string, ranges: Range[]) {
  return ranges.some((r) => dateStr >= r.start && dateStr < r.end);
}

function rangeHasBooked(startStr: string, endStr: string, ranges: Range[]) {
  // check nights: [start, end)
  const start = parseYmd(startStr);
  const end = parseYmd(endStr);
  for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
    if (isBooked(ymd(d), ranges)) return true;
  }
  return false;
}

function MonthGrid({
  year,
  month,
  ranges,
  lang,
  checkIn,
  checkOut,
  onPick,
}: {
  year: number;
  month: number;
  ranges: Range[];
  lang: "en" | "fr";
  checkIn: string | null;
  checkOut: string | null;
  onPick: (ds: string) => void;
}) {
  const first = new Date(year, month, 1);
  const startDay = (first.getDay() + 6) % 7; // Mon=0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = ymd(new Date());
  const monthName = first.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
    month: "long",
    year: "numeric",
  });
  const dayLabels =
    lang === "fr" ? ["L", "M", "M", "J", "V", "S", "D"] : ["M", "T", "W", "T", "F", "S", "S"];

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-serif font-bold text-luxury-dark text-center mb-3 capitalize">
        {monthName}
      </h3>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-600 mb-1">
        {dayLabels.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const ds = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
          const past = ds < today;
          const booked = isBooked(ds, ranges);
          const isCheckIn = checkIn === ds;
          const isCheckOut = checkOut === ds;
          const inRange = checkIn && checkOut && ds > checkIn && ds < checkOut;
          const disabled = past || booked;

          let cls = "";
          if (past) cls = "text-gray-300 cursor-not-allowed";
          else if (booked) cls = "bg-red-100 text-red-700 line-through cursor-not-allowed";
          else if (isCheckIn || isCheckOut) cls = "bg-luxury-gold text-white font-bold";
          else if (inRange) cls = "bg-luxury-gold/30 text-luxury-dark font-semibold";
          else
            cls =
              "bg-green-50 text-green-800 font-semibold hover:bg-luxury-gold hover:text-white cursor-pointer";

          return (
            <button
              type="button"
              key={i}
              disabled={disabled}
              onClick={() => !disabled && onPick(ds)}
              className={`aspect-square flex items-center justify-center rounded transition ${cls}`}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const MONTHS_TO_SHOW = 3;
const MAX_OFFSET = 21; // ~22 months into the future

export default function AvailabilityCalendar() {
  const { t, lang } = useLang();
  const [ranges, setRanges] = useState<Range[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "unconfigured" | "error">("loading");
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [checkIn, setCheckIn] = useState<string | null>(null);
  const [checkOut, setCheckOut] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(`/api/public/availability?t=${Date.now()}`)
      .then((r) => r.json())
      .then((j) => {
        if (!alive) return;
        if (j.status === "ok") {
          setRanges(j.ranges || []);
          setUpdatedAt(j.updatedAt || null);
          setStatus("ok");
        } else if (j.status === "unconfigured") {
          setStatus("unconfigured");
        } else {
          setStatus("error");
        }
      })
      .catch(() => alive && setStatus("error"));
    return () => {
      alive = false;
    };
  }, []);

  const months = useMemo(() => {
    const now = new Date();
    return Array.from({ length: MONTHS_TO_SHOW }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() + offset + i, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }, [offset]);

  const handlePick = (ds: string) => {
    setError(null);
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(ds);
      setCheckOut(null);
      return;
    }
    if (ds <= checkIn) {
      setCheckIn(ds);
      setCheckOut(null);
      return;
    }
    if (rangeHasBooked(checkIn, ds, ranges)) {
      setError(
        t(
          "Some nights in that range are already booked. Please pick different dates.",
          "Certaines nuits de cette période sont déjà réservées. Merci de choisir d'autres dates.",
        ),
      );
      setCheckIn(ds);
      setCheckOut(null);
      return;
    }
    setCheckOut(ds);
  };

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    return Math.round((parseYmd(checkOut).getTime() - parseYmd(checkIn).getTime()) / 86400000);
  }, [checkIn, checkOut]);

  const bookingHref = useMemo(() => {
    const locale = lang === "fr" ? "fr-FR" : "en-GB";
    if (checkIn && checkOut) {
      const inStr = parseYmd(checkIn).toLocaleDateString(locale, {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const outStr = parseYmd(checkOut).toLocaleDateString(locale, {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
      const msg =
        lang === "fr"
          ? `Bonjour, je souhaite réserver Luxora Villa du ${inStr} au ${outStr} (${nights} nuits). Est-ce disponible ?`
          : `Hi, I'd like to book Luxora Villa from ${inStr} to ${outStr} (${nights} nights). Is it available?`;
      return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    }
    const msg =
      lang === "fr"
        ? "Bonjour, je souhaite réserver Luxora Villa. Pouvez-vous me confirmer les disponibilités ?"
        : "Hi, I'd like to book Luxora Villa. Could you confirm availability?";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [checkIn, checkOut, nights, lang]);

  const canGoBack = offset > 0;
  const canGoForward = offset + MONTHS_TO_SHOW <= MAX_OFFSET;

  const locale = lang === "fr" ? "fr-FR" : "en-GB";
  const fmt = (s: string) =>
    parseYmd(s).toLocaleDateString(locale, { day: "numeric", month: "short", year: "numeric" });

  return (
    <section id="availability" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
            {t("Availability", "Disponibilités")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            {t("Check dates & request your stay", "Vérifiez les dates et demandez votre séjour")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            {t(
              "Live availability synced with Booking.com. Pick your check-in and check-out, then confirm on WhatsApp.",
              "Disponibilités en direct synchronisées avec Booking.com. Choisissez votre arrivée et votre départ, puis confirmez sur WhatsApp.",
            )}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded bg-green-100 border border-green-300" />
              {t("Available", "Disponible")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded bg-red-100 border border-red-300" />
              {t("Booked", "Réservé")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block w-3 h-3 rounded bg-luxury-gold" />
              {t("Your selection", "Votre sélection")}
            </span>
          </div>
        </div>

        {status === "loading" && (
          <p className="text-center text-gray-600">
            {t("Loading calendar…", "Chargement du calendrier…")}
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-red-600 text-sm">
            {t(
              "Could not load availability right now.",
              "Impossible de charger les disponibilités pour l'instant.",
            )}
          </p>
        )}

        {(status === "ok" || status === "unconfigured") && (
          <>
            {status === "unconfigured" && (
              <div className="max-w-2xl mx-auto bg-luxury-beige/60 border border-luxury-beige rounded-xl p-5 text-center text-sm text-luxury-dark mb-8">
                {t(
                  "Note: Live calendar sync is not fully active yet. You can still select your desired check-in/check-out dates below and verify availability with us on WhatsApp.",
                  "Note : La synchronisation du calendrier n'est pas encore totalement active. Vous pouvez tout de même sélectionner vos dates d'arrivée/départ ci-dessous et vérifier la disponibilité avec nous sur WhatsApp.",
                )}
              </div>
            )}

            <div className="flex items-center justify-between mb-4 max-w-md mx-auto">
              <button
                type="button"
                onClick={() => canGoBack && setOffset((o) => Math.max(0, o - MONTHS_TO_SHOW))}
                disabled={!canGoBack}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold text-luxury-dark hover:bg-luxury-beige/60 disabled:opacity-30 disabled:cursor-not-allowed transition"
                aria-label={t("Previous months", "Mois précédents")}
              >
                <ChevronLeft className="w-4 h-4" /> {t("Previous", "Précédent")}
              </button>
              <button
                type="button"
                onClick={() => canGoForward && setOffset((o) => o + MONTHS_TO_SHOW)}
                disabled={!canGoForward}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold text-luxury-dark hover:bg-luxury-beige/60 disabled:opacity-30 disabled:cursor-not-allowed transition"
                aria-label={t("Next months", "Mois suivants")}
              >
                {t("Next", "Suivant")} <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {months.map((m) => (
                <MonthGrid
                  key={`${m.year}-${m.month}`}
                  year={m.year}
                  month={m.month}
                  ranges={ranges}
                  lang={lang}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  onPick={handlePick}
                />
              ))}
            </div>

            <div className="mt-6 max-w-2xl mx-auto bg-luxury-beige/40 rounded-xl p-4 sm:p-5 text-center">
              {checkIn && checkOut ? (
                <p className="text-luxury-dark text-sm sm:text-base">
                  <span className="font-semibold">{fmt(checkIn)}</span> →{" "}
                  <span className="font-semibold">{fmt(checkOut)}</span>
                  <span className="text-gray-600">
                    {" "}
                    · {nights}{" "}
                    {t(nights === 1 ? "night" : "nights", nights === 1 ? "nuit" : "nuits")}
                  </span>
                </p>
              ) : checkIn ? (
                <p className="text-luxury-dark text-sm sm:text-base">
                  {t("Check-in:", "Arrivée :")}{" "}
                  <span className="font-semibold">{fmt(checkIn)}</span> ·{" "}
                  {t(
                    "now pick your check-out date.",
                    "choisissez maintenant votre date de départ.",
                  )}
                </p>
              ) : (
                <p className="text-gray-600 text-sm sm:text-base">
                  {t(
                    "Tap a green date to set your check-in.",
                    "Touchez une date verte pour choisir votre arrivée.",
                  )}
                </p>
              )}
              {(checkIn || checkOut) && (
                <button
                  type="button"
                  onClick={() => {
                    setCheckIn(null);
                    setCheckOut(null);
                    setError(null);
                  }}
                  className="mt-2 text-xs text-luxury-dark/70 underline hover:text-luxury-dark"
                >
                  {t("Clear selection", "Effacer la sélection")}
                </button>
              )}
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            {updatedAt && (
              <p className="text-center text-xs text-gray-600 mt-4">
                {t("Last synced:", "Dernière synchronisation :")}{" "}
                {new Date(updatedAt).toLocaleString(locale)}
              </p>
            )}
          </>
        )}

        <div className="text-center mt-8">
          <a
            href={bookingHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-luxury-gold px-6 py-3 text-sm font-semibold text-white hover:bg-luxury-gold/90 transition"
          >
            {checkIn && checkOut
              ? t("Request these dates on WhatsApp", "Demander ces dates sur WhatsApp")
              : t("Book Now", "Réserver")}
          </a>
        </div>
      </div>
    </section>
  );
}
