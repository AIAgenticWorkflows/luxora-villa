import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FreeDatesBand from "@/components/FreeDatesBand";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import BlogHighlights from "@/components/BlogHighlights";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/** Home page body, shared by / (English) and /fr (French). */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FreeDatesBand />
        <Gallery />
        <Features />
        <AvailabilityCalendar />
        <Reviews />
        <Location />
        <BlogHighlights />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
