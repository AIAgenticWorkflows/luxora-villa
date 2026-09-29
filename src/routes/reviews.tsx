import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import Reviews from "@/components/Reviews";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Guest Reviews, Rated 9.3/10 | Luxora Villa, Grand Baie, Mauritius";
const DESCRIPTION =
  "Read verified guest reviews of Luxora Villa in Pereybere, Grand Baie. Rated 9.3/10 Exceptional on Booking.com for cleanliness, location and host.";

export const Route = createFileRoute("/reviews")({
  component: Page,
  head: () =>
    landingHead({
      path: "/reviews",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Reviews",
    }),
});

function Page() {
  return (
    <SectionPage breadcrumb="Reviews" title="Luxora Villa guest reviews">
      <Reviews />
    </SectionPage>
  );
}
