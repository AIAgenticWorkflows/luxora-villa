import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useSearch } from "@tanstack/react-router";

export type Lang = "en" | "fr";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, fr: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const search = useSearch({ strict: false }) as { lang?: string };

  const queryLang = search.lang === "fr" || search.lang === "en" ? (search.lang as Lang) : null;
  const [clientLang, setClientLang] = useState<Lang | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("luxora_lang") as Lang | null;
      if (saved === "en" || saved === "fr") {
        setClientLang(saved);
      } else if (
        typeof navigator !== "undefined" &&
        navigator.language?.toLowerCase().startsWith("fr")
      ) {
        setClientLang("fr");
      }
    } catch {
      // ignore
    }
  }, []);

  const lang = queryLang || clientLang || "en";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setClientLang(l);
    try {
      localStorage.setItem("luxora_lang", l);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
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
