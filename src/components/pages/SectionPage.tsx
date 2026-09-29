import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/LandingPage";
import { useLang } from "@/i18n/LanguageContext";

/**
 * Shell for a home-page section served at its own URL (/gallery, /reviews, ...).
 * The section component keeps its own heading; this adds the breadcrumb, an H1
 * for the page, and a quote call to action underneath.
 */
export default function SectionPage({
  breadcrumb,
  title,
  children,
}: {
  breadcrumb: string;
  title: string;
  children: ReactNode;
}) {
  const { t, localize } = useLang();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <header className="pt-28 pb-2 bg-luxury-beige/40">
          <div className="container mx-auto px-4">
            <Breadcrumbs current={breadcrumb} />
            <h1 className="sr-only">{title}</h1>
          </div>
        </header>
        {children}
        <section className="py-14 bg-luxury-dark text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-1">
                {t("Book direct", "Réserver en direct")}
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                {t("Ready to ask for your dates?", "Prêt à demander vos dates ?")}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={localize("/availability") as any}
                className="inline-flex items-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                {t("Check availability", "Voir les disponibilités")}
              </Link>
              <Link
                to={localize("/contact") as any}
                className="inline-flex items-center rounded-md bg-luxury-gold px-5 py-3 text-sm font-semibold text-white hover:bg-luxury-gold/90 transition"
              >
                {t("Request a quote", "Demander un devis")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
