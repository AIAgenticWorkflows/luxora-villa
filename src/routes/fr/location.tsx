import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import Location from "@/components/Location";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Emplacement : Pereybère, Grand Baie, nord de l'Île Maurice | Luxora Villa";
const DESCRIPTION =
  "Où se trouve Luxora Villa : une rue calme de Pereybère, à 5 minutes de la plage de Pereybère et de Grand Baie, 75 minutes de l'aéroport SSR. Carte et plages à proximité.";

export const Route = createFileRoute("/fr/location")({
  component: Page,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/location",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Emplacement",
    }),
});

function Page() {
  return (
    <SectionPage breadcrumb="Emplacement" title="Emplacement de Luxora Villa">
      <Location />
    </SectionPage>
  );
}
