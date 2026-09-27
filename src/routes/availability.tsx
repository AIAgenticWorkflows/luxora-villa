import { createFileRoute } from "@tanstack/react-router";
import AvailabilityPage from "@/components/pages/AvailabilityPage";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Availability Calendar | Luxora Villa, Grand Baie, Mauritius";
const DESCRIPTION =
  "Check live availability for Luxora Villa, a 3-bedroom private pool villa in Pereybere, Grand Baie. Pick your dates and request a personalised quote from the host.";

export const Route = createFileRoute("/availability")({
  component: AvailabilityPage,
  head: () =>
    landingHead({
      path: "/availability",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Availability",
    }),
});
