import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useLocation, useRouter } from "@tanstack/react-router";

export type Lang = "en" | "fr";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, fr: string) => string;
  /** Path of the home page in the current language ("/" or "/fr"). */
  home: string;
  /** Turn an English path such as "/villa" or "/#availability" into the current-language path. */
  localize: (path: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

/** Pages that exist in both languages. French versions live under /fr. */
const BILINGUAL_PATHS = new Set([
  "/",
  "/villa",
  "/pereybere-villa-rental",
  "/grand-baie-villa-with-private-pool",
  "/contact",
  "/availability",
]);

export function isFrPath(pathname: string) {
  return pathname === "/fr" || pathname.startsWith("/fr/");
}

/** "/fr/villa" -> "/villa", "/fr" -> "/" */
export function stripFr(pathname: string) {
  if (pathname === "/fr") return "/";
  if (pathname.startsWith("/fr/")) return pathname.slice(3);
  return pathname;
}

/** "/villa" -> "/fr/villa", "/" -> "/fr", "/#availability" -> "/fr#availability" */
export function toFr(path: string) {
  const [p, hash] = path.split("#");
  const base = p === "/" ? "/fr" : `/fr${p}`;
  return hash ? `${base}#${hash}` : base;
}

export function localizePath(path: string, lang: Lang) {
  if (lang !== "fr") return path;
  const [p] = path.split("#");
  return BILINGUAL_PATHS.has(p) ? toFr(path) : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const router = useRouter();
  const onFr = isFrPath(location.pathname);
  const enPath = stripFr(location.pathname);
  const bilingual = BILINGUAL_PATHS.has(enPath);

  // Server-rendered initial language: French under /fr, English elsewhere.
  const [lang, setLangState] = useState<Lang>(onFr ? "fr" : "en");

  // Keep language in sync with the URL when navigating between EN and FR pages.
  useEffect(() => {
    if (onFr && lang !== "fr") setLangState("fr");
    if (!onFr && bilingual && lang !== "en") setLangState("en");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // On English-only pages (blog), restore the visitor's saved or browser language after hydration.
  useEffect(() => {
    if (onFr || bilingual) return;
    try {
      const saved = localStorage.getItem("luxora_lang") as Lang | null;
      if (saved === "en" || saved === "fr") {
        setLangState(saved);
      } else if (
        typeof navigator !== "undefined" &&
        navigator.language?.toLowerCase().startsWith("fr")
      ) {
        setLangState("fr");
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("luxora_lang", l);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") document.documentElement.lang = l;
    // On bilingual pages, switch URL as well so each language has its own indexable address.
    if (bilingual) {
      if (l === "fr" && !onFr) router.navigate({ to: toFr(enPath) as any });
      if (l === "en" && onFr) router.navigate({ to: enPath as any });
    }
  };

  const t = (en: string, fr: string) => (lang === "fr" ? fr : en);
  const localize = (path: string) => localizePath(path, lang);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, home: lang === "fr" ? "/fr" : "/", localize }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    return { lang: "en", setLang: () => {}, t: (en: string) => en, home: "/", localize: (p) => p };
  return ctx;
}
