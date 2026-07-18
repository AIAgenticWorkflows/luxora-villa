import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FAQ, { faqs } from "@/components/FAQ";
import Footer from "@/components/Footer";

const TITLE =
  "Luxora Villa | Luxury Villa in Grand Baie, Mauritius — Private Pool Rental";
const DESCRIPTION =
  "Luxora Villa — luxury 3-bedroom villa with private pool in Grand Baie, Pereybere, North Mauritius. Top-rated villa rental (9.3/10). Book direct & save.";
const HERO_IMAGE =
  "/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "villa in mauritius, villas in mauritius, villa in grand baie, villas in grand baie, villa in north mauritius, villas in the north of mauritius, luxury villa mauritius, private pool villa mauritius, villa rental mauritius, villa pereybere, holiday villa mauritius, mauritius villa with pool",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: HERO_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Luxora Villa — luxury villa with private pool in Grand Baie, Mauritius",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: HERO_IMAGE },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "MU" },
      { name: "geo.placename", content: "Grand Baie, Pereybere, Mauritius" },
      { name: "geo.position", content: "-20.003798;57.607427" },
      { name: "ICBM", content: "-20.003798, 57.607427" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VacationRental",
          name: "Luxora Villa — Luxury Villa in Grand Baie, Mauritius",
          description:
            "Luxora Villa is a premium 3-bedroom luxury villa with private pool located in Pereybere, Grand Baie, in the north of Mauritius. Near Grand Baie beaches, restaurants and shops. Features jacuzzi, rooftop terrace, Wi-Fi and air conditioning. Perfect for families and couples seeking a holiday villa rental in Mauritius.",
          brand: "Luxora Villa",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pereybere",
            addressRegion: "Grand Baie, North Mauritius",
            addressCountry: "MU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -20.003798,
            longitude: 57.607427,
          },
          url: "/",
          numberOfRooms: 3,
          numberOfBathroomsTotal: 2,
          occupancy: { "@type": "QuantitativeValue", value: 6 },
          petsAllowed: false,
          amenityFeature: [
            "Private Pool",
            "Jacuzzi",
            "Rooftop Terrace",
            "WiFi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Google Home",
            "Free Parking",
            "Beach Proximity",
          ].map((n) => ({
            "@type": "LocationFeatureSpecification",
            name: n,
            value: true,
          })),
          image: [HERO_IMAGE],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "9.3",
            bestRating: "10",
            worstRating: "1",
            ratingCount: "8",
            reviewCount: "8",
          },
          review: [
            { author: "Hurley", body: "Calm, clear night's rest, minutes from Grand Baie." },
            { author: "Akshay", body: "Brand new villa, modern amenities, fully equipped." },
            { author: "Shweta", body: "Kind host, hotel-like welcome." },
            { author: "Chutkai", body: "Very comfortable and clean. Kids loved the pool." },
          ].map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
            },
            reviewBody: r.body,
          })),
          containedInPlace: {
            "@type": "Place",
            name: "Pereybere, Grand Baie, North Mauritius",
          },
          tourBookingPage:
            "https://www.booking.com/hotel/mu/3-bedrooms-villa-in-pereybere.en-gb.html",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Luxora Villa",
          image: HERO_IMAGE,
          telephone: "+230-000-0000",
          priceRange: "$$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pereybere",
            addressRegion: "Grand Baie",
            addressCountry: "MU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -20.003798,
            longitude: 57.607427,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "9.3",
            bestRating: "10",
            ratingCount: "8",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Gallery />
        <Features />
        <Reviews />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
