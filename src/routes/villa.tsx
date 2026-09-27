import { createFileRoute } from "@tanstack/react-router";
import VillaPage from "@/components/pages/VillaPage";
import { landingHead } from "@/components/LandingPage";

const TITLE = "The Villa: 3 Bedrooms, Private Pool, Jacuzzi & Rooftop | Luxora Villa Mauritius";
const DESCRIPTION =
  "Tour Luxora Villa room by room: 3 air-conditioned bedrooms sleeping 6, 2 bathrooms with spa jacuzzi, private pool, rooftop terrace, full kitchen and secure parking in Pereybere, Grand Baie.";

export const Route = createFileRoute("/villa")({
  component: VillaPage,
  head: () =>
    landingHead({
      path: "/villa",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "The Villa",
    }),
});
