import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_NUMBER } from "./WhatsAppButton";

/**
 * Short band under the hero listing the periods still free this season, each with a
 * WhatsApp tap that already names the period. Remove a period as soon as it is booked;
 * remove the band when the list is empty.
 */
const PERIODS: { id: string; en: string; fr: string; msgEn: string; msgFr: string }[] = [
  {
    id: "dec1",
    en: "1 to 11 Dec",
    fr: "Du 1er au 11 déc.",
    msgEn: "between 1 and 11 December 2026",
    msgFr: "entre le 1er et le 11 décembre 2026",
  },
  {
    id: "dec21",
    en: "Christmas, 21 to 29 Dec",
    fr: "Noël, du 21 au 29 déc.",
    msgEn: "between 21 and 29 December 2026",
    msgFr: "entre le 21 et le 29 décembre 2026",
  },
  {
    id: "jan8",
    en: "From 8 Jan",
    fr: "Dès le 8 janvier",
    msgEn: "from 8 January 2027",
    msgFr: "à partir du 8 janvier 2027",
  },
];

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function FreeDatesBand() {
  const { t, lang } = useLang();
  if (PERIODS.length === 0) return null;
  return (
    <section
      id="free-dates"
      aria-label={t("Free dates", "Dates libres")}
      className="bg-luxury-dark text-white scroll-mt-16"
    >
      <div className="container mx-auto px-4 py-6 sm:py-7">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          <div className="lg:w-1/3">
            <p className="text-luxury-gold text-xs font-semibold tracking-widest uppercase mb-1">
              {t("Still free this season", "Encore libre cette saison")}
            </p>
            <h2 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
              {t("Free for Christmas and January", "Libre pour Noël et janvier")}
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              {t(
                "Minimum 5 nights. Tap a period and the host replies on WhatsApp, usually within the hour.",
                "Minimum 5 nuits. Touchez une période et l'hôte vous répond sur WhatsApp, généralement dans l'heure.",
              )}
            </p>
          </div>
          <ul className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PERIODS.map((p) => {
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
