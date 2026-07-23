import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "./WhatsAppButton";

type Range = { start: string; end: string }; // ISO YYYY-MM-DD, end exclusive

function ymd(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function isBooked(dateStr: string, ranges: Range[]) {
  return ranges.some((r) => dateStr >= r.start && dateStr < r.end);
}

function MonthGrid({ year, month, ranges, lang }: { year: number; month: number; ranges: Range[]; lang: "en" | "fr" }) {
  const first = new Date(year, month, 1);
  const startDay = (first.getDay() + 6) % 7; // Mon=0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = ymd(new Date());
  const monthName = first.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { month: "long", year: "numeric" });
  const dayLabels = lang === "fr"
    ? ["L", "M", "M", "J", "V", "S", "D"]
    : ["M", "T", "W", "T", "F", "S", "S"];

  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="font-serif font-bold text-luxury-dark text-center mb-3 capitalize">{monthName}</h3>
      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-500 mb-1">
        {dayLabels.map((d, i) => <div key={i}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const ds = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
          const past = ds < today;
          const booked = isBooked(ds, ranges);
          const cls = past
            ? "text-gray-300"
            : booked
            ? "bg-red-100 text-red-700 line-through"
            : "bg-green-50 text-green-800 font-semibold";
          return (
            <div key={i} className={`aspect-square flex items-center justify-center rounded ${cls}`}>
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar() {
  const { t, lang } = useLang();
  const [ranges, setRanges] = useState<Range[]>([]);
  const [status, setStatus] = useState<"loading" | "ok" | "unconfigured" | "error">("loading");
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/public/availability")
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
    return () => { alive = false; };
  }, []);

  const months = useMemo(() => {
    const now = new Date();
    return [0, 1, 2].map((i) => {
      const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }, []);

  return (
    <section id="availability" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
            {t("Availability", "Disponibilités")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            {t("Live availability, synced with Booking.com", "Disponibilités en direct, synchronisées avec Booking.com")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            {t(
              "Green dates are available. Red dates are already booked. Message us on WhatsApp to confirm your stay.",
              "Les dates en vert sont disponibles. Les dates en rouge sont déjà réservées. Écrivez-nous sur WhatsApp pour confirmer votre séjour."
            )}
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded bg-green-100 border border-green-300" />{t("Available", "Disponible")}</span>
            <span className="inline-flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded bg-red-100 border border-red-300" />{t("Booked", "Réservé")}</span>
          </div>
        </div>

        {status === "loading" && (
          <p className="text-center text-gray-500">{t("Loading calendar…", "Chargement du calendrier…")}</p>
        )}

        {status === "unconfigured" && (
          <div className="max-w-2xl mx-auto bg-luxury-beige/60 border border-luxury-beige rounded-xl p-6 text-center text-sm text-luxury-dark">
            {t(
              "Live calendar sync will activate as soon as the Booking.com iCal feed is connected. In the meantime, message us on WhatsApp to check dates.",
              "La synchronisation du calendrier s'activera dès que le flux iCal Booking.com sera connecté. En attendant, écrivez-nous sur WhatsApp pour vérifier les dates."
            )}
          </div>
        )}

        {status === "error" && (
          <p className="text-center text-red-600 text-sm">{t("Could not load availability right now.", "Impossible de charger les disponibilités pour l'instant.")}</p>
        )}

        {status === "ok" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {months.map((m) => (
                <MonthGrid key={`${m.year}-${m.month}`} year={m.year} month={m.month} ranges={ranges} lang={lang} />
              ))}
            </div>
            {updatedAt && (
              <p className="text-center text-xs text-gray-500 mt-4">
                {t("Last synced:", "Dernière synchronisation :")} {new Date(updatedAt).toLocaleString(lang === "fr" ? "fr-FR" : "en-GB")}
              </p>
            )}
          </>
        )}

        <div className="text-center mt-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-luxury-gold px-6 py-3 text-sm font-semibold text-white hover:bg-luxury-gold/90 transition"
          >
            {t("Book Now", "Réserver")}
          </a>
        </div>

      </div>
    </section>
  );
}
