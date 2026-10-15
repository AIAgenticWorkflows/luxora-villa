import { createFileRoute } from "@tanstack/react-router";
import GuestGuide from "@/components/guide/GuestGuide";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Guest Guide: Pereybere and Grand Baie | Luxora Villa";
const DESCRIPTION =
  "Luxora Villa's guest guide: check-in, the villa, emergency numbers, supermarkets, beaches, restaurants and things to do around Pereybere and Grand Baie.";

export const Route = createFileRoute("/guide")({
  component: GuestGuide,
  head: () =>
    landingHead({
      path: "/guide",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Guest guide",
    }),
});
