import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";

/** Home-page section id -> the page that now serves it at its own URL. */
const SECTION_PATHS: Record<string, string> = {
  gallery: "/gallery",
  features: "/amenities",
  amenities: "/amenities",
  availability: "/availability",
  reviews: "/reviews",
  location: "/location",
  faq: "/faq",
};

/**
 * Link to a section of the site. Every section has its own URL in both
 * languages (for example /reviews and /fr/reviews), so this is a plain router
 * link with no #hash.
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
  const { localize } = useLang();
  const path = localize(SECTION_PATHS[id] ?? `/${id}`);
  return (
    <Link to={path as any} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
