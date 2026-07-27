import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FAQ, { faqs } from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const SITE_URL = "https://www.luxoravilla.com";
const TITLE = "Luxora Villa | Luxury Private Pool Villa, Grand Baie";
const DESCRIPTION =
  "Luxora Villa is a luxury 3 bedroom villa with private pool in Grand Baie, Pereybere, North Mauritius. Top rated villa rental (9.3/10). Book direct and save.";
const HERO_IMAGE = `${SITE_URL}/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.png`;

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
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: HERO_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "597" },
      {
        property: "og:image:alt",
        content: "Luxora Villa, a luxury villa with private pool in Grand Baie, Mauritius",
      },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { property: "og:locale:alternate", content: "en_GB" },
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
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en-gb", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "fr", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VacationRental",
          name: "Luxora Villa, Luxury Villa in Grand Baie, Mauritius",
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
          url: `${SITE_URL}/`,
          telephone: "+230-5922-6558",
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
          telephone: "+230-5922-6558",
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
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
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
        <AvailabilityCalendar />
        <Reviews />
        <Location />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
