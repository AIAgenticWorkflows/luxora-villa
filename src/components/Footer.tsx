import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "./WhatsAppButton";

const BOOKING_URL = "https://www.booking.com/hotel/mu/3-bedrooms-villa-in-pereybere.en-gb.html";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-luxury-dark text-white py-14" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-3">
              Luxora <span className="text-luxury-gold">Villa</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Luxury 3 bedroom private pool villa in Pereybere, Grand Baie, one of the finest
              villa rentals in the north of Mauritius.
            </p>
            <p className="text-gray-400 text-xs mt-3">
              Available in English · Français · Deutsch
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#gallery" className="hover:text-luxury-gold">Gallery</a></li>
              <li><a href="#features" className="hover:text-luxury-gold">Amenities</a></li>
              <li><a href="#reviews" className="hover:text-luxury-gold">Reviews</a></li>
              <li><a href="#location" className="hover:text-luxury-gold">Location</a></li>
              <li><a href="#faq" className="hover:text-luxury-gold">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold mb-3">Book Direct</h4>
            <p className="text-gray-300 text-sm mb-3">
              Reserve your dates on Booking.com with verified reviews and a best price guarantee.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-luxury-gold px-4 py-2 text-sm font-semibold text-white hover:bg-luxury-gold/90 transition"
            >
              Check Availability
            </a>
            <div className="mt-4 space-y-1 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-luxury-gold"
              >
                <span aria-hidden>💬</span> WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <div>
                <a href="tel:+23059226558" className="text-gray-300 hover:text-luxury-gold">
                  Call {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
            <address className="not-italic text-gray-400 text-xs mt-4 leading-relaxed">
              Pereybere, Grand Baie<br />
              North Mauritius
            </address>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>&copy; {year} Luxora Villa. All rights reserved.</p>
          <p>Villa in Grand Baie · Villa in Mauritius · Villa in North Mauritius</p>
        </div>
      </div>
    </footer>
  );
}
