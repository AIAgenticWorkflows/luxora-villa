import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import QuoteForm from "@/components/QuoteForm";
import { Breadcrumbs } from "@/components/LandingPage";
import { useLang } from "@/i18n/LanguageContext";
import SectionLink from "@/components/SectionLink";

export default function AvailabilityPage() {
  const { t, localize } = useLang();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <header className="pt-28 pb-4 bg-luxury-beige/40">
          <div className="container mx-auto px-4">
            <Breadcrumbs current={t("Availability", "Disponibilités")} />
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-luxury-dark mb-2">
              {t("Luxora Villa availability", "Disponibilités de Luxora Villa")}
            </h1>
            <p className="text-gray-600 max-w-2xl text-base">
              {t(
                "Tap your check-in date, then your check-out, and request a quote.",
                "Touchez votre date d'arrivée, puis votre date de départ, et demandez un devis.",
              )}
            </p>
          </div>
        </header>

        <AvailabilityCalendar compact />

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
                  <SectionLink id="features" className="inline-block rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
                    {t("Amenities", "Équipements")}
                  </SectionLink>
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
