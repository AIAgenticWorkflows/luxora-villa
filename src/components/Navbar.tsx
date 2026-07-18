import { useEffect, useState } from "react";

const links = [
  { href: "#gallery", label: "Gallery" },
  { href: "#features", label: "Amenities" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

const BOOKING_URL = "https://www.booking.com/hotel/mu/3-bedrooms-villa-in-pereybere.en-gb.html";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barCls = `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white/95 backdrop-blur shadow-md py-2" : "bg-transparent py-4"
  }`;
  const linkCls = `text-sm font-medium transition-colors hover:text-luxury-gold ${
    scrolled ? "text-luxury-dark" : "text-white"
  }`;

  return (
    <nav className={barCls} aria-label="Main navigation">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl font-bold shrink-0">
          <span className={scrolled ? "text-luxury-dark" : "text-white"}>Luxora</span>
          <span className="text-luxury-gold"> Villa</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkCls}>
              {l.label}
            </a>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-luxury-gold px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-luxury-gold/90 transition"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden p-2 rounded-md ${scrolled ? "text-luxury-dark" : "text-white"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white rounded-lg mt-2 shadow-xl mx-4 p-4 animate-fade-in">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-luxury-dark hover:text-luxury-gold font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-luxury-gold px-4 py-2.5 text-sm font-semibold text-white"
            >
              Book on Booking.com
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
