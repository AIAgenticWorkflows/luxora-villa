import { createFileRoute } from "@tanstack/react-router";
import GrandBaiePage from "@/components/pages/GrandBaiePage";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Location villa Grand Baie avec piscine privée | 3 chambres | Luxora Villa";
const DESCRIPTION =
  "Location de villa avec piscine privée à Grand Baie, Île Maurice : 3 chambres climatisées, jacuzzi, toit-terrasse et parking sécurisé, à 5 minutes des plages. Notée 9,3/10. Devis direct.";

export const Route = createFileRoute("/fr/grand-baie-villa-with-private-pool")({
  component: GrandBaiePage,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/grand-baie-villa-with-private-pool",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Villa à Grand Baie avec piscine privée",
      image: "https://www.luxoravilla.com/lovable-uploads/abb57903-7d11-459c-9ffe-7005a3f030b6.webp",
    }),
});
