import { useEffect, useState } from "react";
import { useLang, type Lang } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "./WhatsAppButton";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#gallery", label: t("Gallery", "Galerie") },
    { href: "#features", label: t("Amenities", "Équipements") },
    { href: "#availability", label: t("Availability", "Disponibilités") },
    { href: "#reviews", label: t("Reviews", "Avis") },
    { href: "#location", label: t("Location", "Emplacement") },
    { href: "#faq", label: t("FAQ", "FAQ") },
  ];

  const barCls = `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white/95 backdrop-blur shadow-md py-2" : "bg-transparent py-4"
  }`;
  const linkCls = `text-sm font-medium transition-colors hover:text-luxury-gold ${
    scrolled ? "text-luxury-dark" : "text-white"
  }`;

  const LangSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`inline-flex rounded-full border ${scrolled || mobile ? "border-luxury-dark/20" : "border-white/40"} overflow-hidden text-xs font-semibold`}>
      {(["en", "fr"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-label={l === "en" ? "English" : "Français"}
          className={`px-2.5 py-1 uppercase transition ${
            lang === l
              ? "bg-luxury-gold text-white"
              : scrolled || mobile
              ? "text-luxury-dark hover:bg-luxury-beige"
              : "text-white hover:bg-white/10"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <nav className={barCls} aria-label="Main navigation">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl font-bold shrink-0">
          <span className={scrolled ? "text-luxury-dark" : "text-white"}>Luxora</span>
          <span className="text-luxury-gold"> Villa</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkCls}>
              {l.label}
            </a>
          ))}
          <LangSwitcher />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1ebe57] transition"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M12.04 2.003a9.86 9.86 0 00-8.44 14.94L2 22l5.19-1.55a9.86 9.86 0 1014.55-8.61 9.79 9.79 0 00-9.7-9.83zm5.72 13.94c-.24.68-1.41 1.3-1.94 1.35-.51.05-1.13.07-1.82-.11-.42-.11-.96-.29-1.66-.59-2.92-1.26-4.83-4.2-4.98-4.4-.14-.19-1.19-1.58-1.19-3.01 0-1.43.75-2.13 1.01-2.42.26-.29.57-.36.76-.36l.55.01c.17.01.4-.06.63.48.24.58.81 2.01.88 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.17.29.75 1.24 1.61 2.01 1.1.98 2.03 1.29 2.32 1.43.29.14.46.12.63-.07.17-.2.72-.84.92-1.13.19-.29.39-.24.66-.14.27.1 1.7.8 1.99.95.29.14.48.22.55.34.07.12.07.7-.17 1.38z" />
            </svg>
            {t("Book via WhatsApp", "Réserver sur WhatsApp")}
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
            <div className="pt-2"><LangSwitcher mobile /></div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
            >
              {t("Book via WhatsApp", "Réserver sur WhatsApp")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
