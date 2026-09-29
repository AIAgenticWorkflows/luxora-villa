import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import Gallery from "@/components/Gallery";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Galerie photos | Luxora Villa, Grand Baie, Île Maurice";
const DESCRIPTION =
  "Photos de Luxora Villa : piscine privée, toit-terrasse, trois chambres, salle de bain avec jacuzzi et jardin de cette villa 3 chambres à Pereybère, Grand Baie.";

export const Route = createFileRoute("/fr/gallery")({
  component: Page,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/gallery",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Galerie",
    }),
});

function Page() {
  return (
    <SectionPage breadcrumb="Galerie" title="Galerie photos de Luxora Villa">
      <Gallery />
    </SectionPage>
  );
}
