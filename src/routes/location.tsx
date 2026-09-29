import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import Location from "@/components/Location";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Location: Pereybere, Grand Baie, North Mauritius | Luxora Villa";
const DESCRIPTION =
  "Where Luxora Villa is: a quiet lane in Pereybere, 5 minutes from Pereybere Beach and Grand Baie, 75 minutes from SSR Airport. Map and nearby beaches.";

export const Route = createFileRoute("/location")({
  component: Page,
  head: () =>
    landingHead({
      path: "/location",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Location",
    }),
});

function Page() {
  return (
    <SectionPage breadcrumb="Location" title="Luxora Villa location">
      <Location />
    </SectionPage>
  );
}
