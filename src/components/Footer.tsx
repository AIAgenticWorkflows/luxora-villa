import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "./WhatsAppButton";

export default function Footer() {
  const { t, localize } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-luxury-dark text-white py-14" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-3">
              Luxora <span className="text-luxury-gold">Villa</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              {t(
                "Luxury 3 bedroom private pool villa in Pereybere, Grand Baie, one of the finest villa rentals in the north of Mauritius.",
                "Villa de luxe 3 chambres avec piscine privée à Pereybère, Grand Baie, l'une des plus belles locations de villa du nord de l'Île Maurice.",
              )}
            </p>
            <p className="text-gray-400 text-xs mt-3">
              {t("Available in English · Français", "Disponible en English · Français")}
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-3">{t("Explore", "Explorer")}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href={localize("/villa")} className="hover:text-luxury-gold">
                  {t("The Villa", "La Villa")}
                </a>
              </li>
              <li>
                <a href={localize("/pereybere-villa-rental")} className="hover:text-luxury-gold">
                  {t("Villa rental in Pereybere", "Location à Pereybère")}
                </a>
              </li>
              <li>
                <a href={localize("/grand-baie-villa-with-private-pool")} className="hover:text-luxury-gold">
                  {t("Grand Baie villa with pool", "Villa à Grand Baie avec piscine")}
                </a>
              </li>
              <li>
                <a href={localize("/contact")} className="hover:text-luxury-gold">
                  {t("Contact & quote", "Contact et devis")}
                </a>
              </li>
              <li>
                <a href={localize("/#gallery")} className="hover:text-luxury-gold">
                  {t("Gallery", "Galerie")}
                </a>
              </li>
              <li>
                <a href={localize("/#features")} className="hover:text-luxury-gold">
                  {t("Amenities", "Équipements")}
                </a>
              </li>
              <li>
                <a href={localize("/availability")} className="hover:text-luxury-gold">
                  {t("Availability", "Disponibilités")}
                </a>
              </li>
              <li>
                <a href={localize("/#reviews")} className="hover:text-luxury-gold">
                  {t("Reviews", "Avis")}
                </a>
              </li>
              <li>
                <a href={localize("/#location")} className="hover:text-luxury-gold">
                  {t("Location", "Emplacement")}
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-luxury-gold">
                  Blog
                </a>
              </li>
              <li>
                <a href={localize("/#faq")} className="hover:text-luxury-gold">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-3">
              {t("Book Direct", "Réserver en direct")}
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              {t(
                "Send your dates for a personalised quote. The host replies on WhatsApp, usually within the hour.",
                "Envoyez vos dates pour un devis personnalisé. L'hôte répond sur WhatsApp, généralement dans l'heure.",
              )}
            </p>
            <a
              href={localize("/contact")}
              className="inline-flex items-center rounded-md bg-luxury-gold px-4 py-2 text-sm font-semibold text-white hover:bg-luxury-gold/90 transition"
            >
              {t("Request a Quote", "Demander un devis")}
            </a>

            <div className="mt-4 space-y-1 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-luxury-gold"
              >
                <span aria-hidden>💬</span> WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <div>
                <a href="tel:+23059226558" className="text-gray-300 hover:text-luxury-gold">
                  {t("Call", "Appeler")} {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
            <address className="not-italic text-gray-400 text-xs mt-4 leading-relaxed">
              Pereybere, Grand Baie
              <br />
              {t("North Mauritius", "Nord de l'Île Maurice")}
            </address>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>
            &copy; {year} Luxora Villa. {t("All rights reserved.", "Tous droits réservés.")}
          </p>
          <p>
            {t(
              "Villa in Grand Baie · Villa in Mauritius · Villa in North Mauritius",
              "Villa à Grand Baie · Villa à l'Île Maurice · Villa dans le Nord de l'Île Maurice",
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
