import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import Features from "@/components/Features";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Amenities & Facilities | Luxora Villa, Grand Baie, Mauritius";
const DESCRIPTION =
  "Everything included at Luxora Villa: private pool, jacuzzi, rooftop terrace, air conditioning, WiFi, Smart TV, full kitchen and secure parking in Pereybere.";

export const Route = createFileRoute("/amenities")({
  component: Page,
  head: () =>
    landingHead({
      path: "/amenities",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Amenities",
    }),
});

function Page() {
  return (
    <SectionPage breadcrumb="Amenities" title="Luxora Villa amenities">
      <Features />
    </SectionPage>
  );
}
