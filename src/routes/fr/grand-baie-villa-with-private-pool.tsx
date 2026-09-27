import { createFileRoute } from "@tanstack/react-router";
import GrandBaiePage from "@/components/pages/GrandBaiePage";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Villa à Grand Baie avec piscine privée | 3 chambres, 6 personnes | Luxora Villa";
const DESCRIPTION =
  "Villa de luxe avec piscine privée à Grand Baie, Île Maurice. 3 chambres climatisées, jacuzzi, toit-terrasse et parking sécurisé, à quelques minutes des plages et restaurants de Grand Baie. Notée 9,3/10.";

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
