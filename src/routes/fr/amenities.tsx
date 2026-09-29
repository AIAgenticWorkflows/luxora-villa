import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import Features from "@/components/Features";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Équipements et prestations | Luxora Villa, Grand Baie, Île Maurice";
const DESCRIPTION =
  "Tout ce qu'offre Luxora Villa : piscine privée, jacuzzi, toit-terrasse, climatisation, WiFi fibre, Smart TV, cuisine complète et parking sécurisé à Pereybère.";

export const Route = createFileRoute("/fr/amenities")({
  component: Page,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/amenities",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Équipements",
    }),
});

function Page() {
  return (
    <SectionPage breadcrumb="Équipements" title="Équipements de Luxora Villa">
      <Features />
    </SectionPage>
  );
}
