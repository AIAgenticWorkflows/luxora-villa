import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton, { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/components/WhatsAppButton";
import QuoteForm from "@/components/QuoteForm";
import { Breadcrumbs } from "@/components/LandingPage";
import { useLang } from "@/i18n/LanguageContext";

export default function ContactPage() {
  const { t, localize, home } = useLang();
  return (
    <div className="min-h-screen bg-luxury-beige/40">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs current={t("Contact", "Contact")} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
                {t("Contact", "Contact")}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
                {t("Request a quote or ask a question", "Demandez un devis ou posez une question")}
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t(
                  "Rates depend on your dates and the length of your stay, so every booking is quoted individually. Send your details and the host replies personally on WhatsApp, usually within the hour.",
                  "Les tarifs dépendent de vos dates et de la durée du séjour, chaque réservation fait donc l'objet d'un devis individuel. Envoyez vos informations et l'hôte vous répond personnellement sur WhatsApp, généralement dans l'heure.",
                )}
              </p>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-luxury-dark">WhatsApp</dt>
                  <dd>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-luxury-blue hover:underline"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-luxury-dark">{t("Phone", "Téléphone")}</dt>
                  <dd>
                    <a href="tel:+23059226558" className="text-luxury-blue hover:underline">
                      {WHATSAPP_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-luxury-dark">{t("Address", "Adresse")}</dt>
                  <dd className="text-gray-700">
                    Pereybere, Grand Baie, {t("North Mauritius", "Nord de l'Île Maurice")}
                    <br />
                    <a
                      href="https://www.google.com/maps/place/20%C2%B000'13.7%22S+57%C2%B036'26.7%22E/@-20.003798,57.6067819,252m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-20.003798!4d57.607427"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-luxury-blue hover:underline"
                    >
                      {t("Open in Google Maps", "Ouvrir dans Google Maps")}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-luxury-dark">
                    {t("Check-in / check-out", "Arrivée / départ")}
                  </dt>
                  <dd className="text-gray-700">
                    {t("From 14:00 / by 10:00", "À partir de 14h / avant 10h")}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-luxury-dark">{t("Languages", "Langues")}</dt>
                  <dd className="text-gray-700">English, Français</dd>
                </div>
                <div>
                  <dt className="font-semibold text-luxury-dark">
                    {t("Prefer a platform?", "Vous préférez une plateforme ?")}
                  </dt>
                  <dd>
                    <a
                      href="https://www.booking.com/hotel/mu/3-bedrooms-villa-in-pereybere.en-gb.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-luxury-blue hover:underline"
                    >
                      {t("Luxora Villa on Booking.com", "Luxora Villa sur Booking.com")}
                    </a>
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-sm text-gray-600">
                {t("Before you write, you can", "Avant d'écrire, vous pouvez")}{" "}
                <Link to={home as any} hash="availability" className="text-luxury-blue hover:underline">
                  {t("check live availability", "vérifier les disponibilités")}
                </Link>{" "}
                {t("or read the", "ou lire la")}{" "}
                <Link to={home as any} hash="faq" className="text-luxury-blue hover:underline">
                  FAQ
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
