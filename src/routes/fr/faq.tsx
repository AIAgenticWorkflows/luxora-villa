import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import FAQ from "@/components/FAQ";
import { faqs, faqsFr } from "@/components/FAQ";
import { landingHead } from "@/components/LandingPage";

const TITLE = "FAQ : louer Luxora Villa à l'Île Maurice | Luxora Villa, Grand Baie";
const DESCRIPTION =
  "Réponses aux questions fréquentes sur la location de Luxora Villa à Pereybère, Grand Baie : réservation en direct, emplacement, familles, transferts aéroport et plus.";

export const Route = createFileRoute("/fr/faq")({
  component: Page,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/faq",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "FAQ",
      extraJsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "fr",
          mainEntity: faqsFr.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
});

function Page() {
  return (
    <SectionPage breadcrumb="FAQ" title="Questions fréquentes">
      <FAQ />
    </SectionPage>
  );
}
