import { createFileRoute } from "@tanstack/react-router";
import PereyberePage from "@/components/pages/PereyberePage";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Villa Rental in Pereybere, Mauritius | Private Pool, Sleeps 6 | Luxora Villa";
const DESCRIPTION =
  "Rent a private villa in Pereybere, North Mauritius: 3 bedrooms, private pool, jacuzzi and rooftop terrace, 5 minutes from Pereybere Beach and Grand Baie. Book direct with the owner.";

export const Route = createFileRoute("/pereybere-villa-rental")({
  component: PereyberePage,
  head: () =>
    landingHead({
      path: "/pereybere-villa-rental",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Villa rental in Pereybere",
      image: "https://www.luxoravilla.com/lovable-uploads/17d507de-ba3a-4058-abe3-c10f9cde1650.webp",
    }),
});
