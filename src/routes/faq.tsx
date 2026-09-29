import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import FAQ from "@/components/FAQ";
import { faqs, faqsFr } from "@/components/FAQ";
import { landingHead } from "@/components/LandingPage";

const TITLE = "FAQ: Renting Luxora Villa in Mauritius | Luxora Villa, Grand Baie";
const DESCRIPTION =
  "Answers to common questions about renting Luxora Villa in Pereybere, Grand Baie: booking direct, location, families, airport transfers and more.";

export const Route = createFileRoute("/faq")({
  component: Page,
  head: () =>
    landingHead({
      path: "/faq",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "FAQ",
      extraJsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "en",
          mainEntity: faqs.map((f) => ({
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
    <SectionPage breadcrumb="FAQ" title="Frequently asked questions">
      <FAQ />
    </SectionPage>
  );
}
