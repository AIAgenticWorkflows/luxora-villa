import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useLang, stripFr, type Lang } from "@/i18n/LanguageContext";
import SectionLink from "./SectionLink";

type NavItem =
  | { kind: "section"; id: string; label: string }
  | { kind: "page"; to: string; label: string };

export default function Navbar() {
  const { lang, setLang, t, localize, home } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = stripFr(location.pathname) === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const items: NavItem[] = [
    { kind: "section", id: "gallery", label: t("Gallery", "Galerie") },
    { kind: "section", id: "features", label: t("Amenities", "Équipements") },
    { kind: "page", to: localize("/availability"), label: t("Availability", "Disponibilités") },
    { kind: "section", id: "reviews", label: t("Reviews", "Avis") },
    { kind: "section", id: "location", label: t("Location", "Emplacement") },
    { kind: "page", to: "/blog", label: "Blog" },
    { kind: "page", to: localize("/contact"), label: t("Contact", "Contact") },
  ];

  const isSolid = scrolled || !isHome || open;

  const barCls = `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
    isSolid ? "bg-white/95 backdrop-blur shadow-md py-2" : "bg-transparent py-4"
  }`;
  const linkCls = `text-sm font-medium transition-colors hover:text-luxury-gold ${
    isSolid ? "text-luxury-dark" : "text-white"
  }`;
  const mobileLinkCls = "text-luxury-dark hover:text-luxury-gold font-medium";

  const renderItem = (item: NavItem, cls: string) =>
    item.kind === "section" ? (
      <SectionLink key={item.id} id={item.id} className={cls} onClick={() => setOpen(false)}>
        {item.label}
      </SectionLink>
    ) : (
      <Link key={item.to} to={item.to as any} className={cls} onClick={() => setOpen(false)}>
        {item.label}
      </Link>
    );

  const LangSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className={`inline-flex rounded-full border ${isSolid || mobile ? "border-luxury-dark/20" : "border-white/40"} overflow-hidden text-xs font-semibold`}
    >
      {(["en", "fr"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => {
            setLang(l);
            setOpen(false);
          }}
          aria-label={l === "en" ? "English" : "Français"}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 uppercase transition ${
            lang === l
              ? "bg-luxury-gold text-white"
              : isSolid || mobile
                ? "text-luxury-dark hover:bg-luxury-beige"
                : "text-white hover:bg-white/10"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  const logo = (
    <span className="font-serif text-2xl font-bold shrink-0">
      <span className={isSolid ? "text-luxury-dark" : "text-white"}>Luxora</span>
      <span className="text-luxury-gold"> Villa</span>
    </span>
  );

  return (
    <nav className={barCls} aria-label="Main navigation">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {isHome ? (
          <a
            href={home}
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Luxora Villa home"
          >
            {logo}
          </a>
        ) : (
          <Link to={home as any} aria-label="Luxora Villa home">
            {logo}
          </Link>
        )}

        <div className="hidden md:flex items-center gap-6">
          {items.map((i) => renderItem(i, linkCls))}
          <LangSwitcher />
          <Link
            to={localize("/contact") as any}
            className="inline-flex items-center rounded-md bg-luxury-gold px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-luxury-gold/90 transition"
          >
            {t("Get a Quote", "Demander un devis")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden p-2 rounded-md ${isSolid ? "text-luxury-dark" : "text-white"}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
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
            {items.map((i) => renderItem(i, mobileLinkCls))}
            <div className="pt-2">
              <LangSwitcher mobile />
            </div>
            <Link
              to={localize("/contact") as any}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-luxury-gold px-4 py-2.5 text-sm font-semibold text-white"
            >
              {t("Get a Quote", "Demander un devis")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
