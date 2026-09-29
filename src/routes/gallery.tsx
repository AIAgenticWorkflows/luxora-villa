import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import Gallery from "@/components/Gallery";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Photo Gallery | Luxora Villa, Grand Baie, Mauritius";
const DESCRIPTION =
  "Photos of Luxora Villa: private pool, rooftop terrace, three bedrooms, jacuzzi bathroom and garden of this 3-bedroom villa in Pereybere, Grand Baie.";

export const Route = createFileRoute("/gallery")({
  component: Page,
  head: () =>
    landingHead({
      path: "/gallery",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Gallery",
    }),
});

function Page() {
  return (
    <SectionPage breadcrumb="Gallery" title="Luxora Villa photo gallery">
      <Gallery />
    </SectionPage>
  );
}
