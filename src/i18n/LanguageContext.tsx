import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useLocation, useRouter } from "@tanstack/react-router";

export type Lang = "en" | "fr";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, fr: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

/** The French home page lives at /fr so search engines can index French content. */
const FR_HOME = "/fr";
const EN_HOME = "/";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const router = useRouter();
  const onFrHome = location.pathname === FR_HOME;
  const onEnHome = location.pathname === EN_HOME;

  // Server-rendered initial language: French on /fr, English elsewhere.
  const [lang, setLangState] = useState<Lang>(onFrHome ? "fr" : "en");

  // Keep language in sync with the URL when navigating between / and /fr.
  useEffect(() => {
    if (onFrHome && lang !== "fr") setLangState("fr");
  }, [onFrHome, lang]);

  // On other pages, restore the visitor's saved or browser language after hydration.
  useEffect(() => {
    if (onFrHome) return;
    try {
      const saved = localStorage.getItem("luxora_lang") as Lang | null;
      if (saved === "en" || saved === "fr") {
        if (saved === "fr" && onEnHome) {
          // Returning French visitor landing on the English home: switch content client-side
          // (no redirect, so Google always sees English at / and French at /fr).
          setLangState("fr");
        } else {
          setLangState(saved);
        }
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
    // On the home page, switch URL as well so each language has its own indexable address.
    if (l === "fr" && onEnHome) router.navigate({ to: FR_HOME });
    if (l === "en" && onFrHome) router.navigate({ to: EN_HOME });
  };

  const t = (en: string, fr: string) => (lang === "fr" ? fr : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) return { lang: "en" as Lang, setLang: () => {}, t: (en: string) => en };
  return ctx;
}
