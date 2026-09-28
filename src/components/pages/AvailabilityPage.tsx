import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import QuoteForm from "@/components/QuoteForm";
import { Breadcrumbs } from "@/components/LandingPage";
import { useLang } from "@/i18n/LanguageContext";

export default function AvailabilityPage() {
  const { t, localize, home } = useLang();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <header className="pt-28 pb-6 bg-luxury-beige/40">
          <div className="container mx-auto px-4">
            <Breadcrumbs current={t("Availability", "Disponibilités")} />
            <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
              {t("Live calendar", "Calendrier en temps réel")}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
              {t("Luxora Villa availability", "Disponibilités de Luxora Villa")}
            </h1>
            <p className="text-gray-600 max-w-2xl text-base sm:text-lg">
              {t(
                "The calendar below is synced with our booking channels. Pick your dates to see if the villa is free, then request a quote; rates depend on the season and length of stay.",
                "Le calendrier ci-dessous est synchronisé avec nos canaux de réservation. Choisissez vos dates pour vérifier si la villa est libre, puis demandez un devis ; les tarifs dépendent de la saison et de la durée du séjour.",
              )}
            </p>
          </div>
        </header>

        <AvailabilityCalendar />

        <section className="py-16 sm:py-20 bg-luxury-dark">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
                {t("Book direct", "Réserver en direct")}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
                {t("Found your dates? Ask for a quote", "Vos dates sont libres ? Demandez un devis")}
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                {t(
                  "Send your dates and the number of guests. The host replies personally on WhatsApp, usually within the hour.",
                  "Envoyez vos dates et le nombre de voyageurs. L'hôte vous répond personnellement sur WhatsApp, généralement dans l'heure.",
                )}
              </p>
              <ul className="flex flex-wrap gap-3 text-sm">
                <li>
                  <Link to={home as any} hash="features" className="inline-block rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
                    {t("Amenities", "Équipements")}
                  </Link>
                </li>
                <li>
                  <Link to={localize("/contact") as any} className="inline-block rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
                    {t("Contact", "Contact")}
                  </Link>
                </li>
              </ul>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
