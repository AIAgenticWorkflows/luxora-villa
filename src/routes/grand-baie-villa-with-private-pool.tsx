import { createFileRoute } from "@tanstack/react-router";
import GrandBaiePage from "@/components/pages/GrandBaiePage";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Grand Baie Villa with Private Pool | 3 Bedrooms, Sleeps 6 | Luxora Villa";
const DESCRIPTION =
  "Luxury villa with private pool in Grand Baie, Mauritius. 3 air-conditioned bedrooms, jacuzzi, rooftop terrace and secure parking, minutes from Grand Baie beaches and restaurants. Rated 9.3/10.";

export const Route = createFileRoute("/grand-baie-villa-with-private-pool")({
  component: GrandBaiePage,
  head: () =>
    landingHead({
      path: "/grand-baie-villa-with-private-pool",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Grand Baie villa with private pool",
      image: "https://www.luxoravilla.com/lovable-uploads/abb57903-7d11-459c-9ffe-7005a3f030b6.webp",
    }),
});
