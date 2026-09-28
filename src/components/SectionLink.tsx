import { useEffect, type MouseEvent, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useLang, stripFr } from "@/i18n/LanguageContext";

/**
 * Scroll to a home-page section. Uses scrollIntoView so the section's
 * scroll-margin-top (navbar offset) is respected, and updates the hash with
 * replaceState so the router's scroll restoration does not fight the jump.
 */
export function scrollToSection(id: string, smooth = true) {
  if (typeof document === "undefined") return false;
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  try {
    window.history.replaceState(window.history.state, "", `#${id}`);
  } catch {
    /* ignore */
  }
  return true;
}

/**
 * Link to a section of the home page (gallery, features, reviews, location, faq).
 * On the home page (EN or FR) it scrolls in place; on any other page it navigates
 * to the current-language home with the hash, and the home page scrolls on arrival.
 */
export default function SectionLink({
  id,
  className,
  children,
  onClick,
  ...rest
}: {
  id: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  "aria-label"?: string;
}) {
  const { home } = useLang();
  const location = useLocation();
  const onHome = stripFr(location.pathname) === "/";

  if (onHome) {
    const handle = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onClick?.();
      scrollToSection(id);
    };
    return (
      <a href={`#${id}`} className={className} onClick={handle} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link to={home as any} hash={id} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}

/**
 * Mount on the home page: when the URL carries a #hash (arriving from another
 * page or a direct link), scroll to that section once the page has rendered,
 * after the router's scroll restoration has run.
 */
export function useScrollToHashOnLoad() {
  const location = useLocation();
  useEffect(() => {
    const id = (location.hash || "").replace(/^#/, "");
    if (!id) return;
    let tries = 0;
    const attempt = () => {
      if (scrollToSection(id, false) || tries++ > 20) return;
      setTimeout(attempt, 50);
    };
    const t = setTimeout(attempt, 60);
    return () => clearTimeout(t);
  }, [location.hash, location.pathname]);
}
