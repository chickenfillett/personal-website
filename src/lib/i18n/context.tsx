"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export type Locale = "zh" | "en" | "fr";

export const supportedLocales: { code: Locale; label: string; nativeName: string }[] = [
  { code: "zh", label: "Simplified Chinese", nativeName: "简体中文" },
  { code: "en", label: "English", nativeName: "English" },
  { code: "fr", label: "French", nativeName: "Français" },
];

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function isLocale(value: string | null): value is Locale {
  return supportedLocales.some((locale) => locale.code === value);
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("locale");
  if (isLocale(saved)) return saved;

  const browserLang = (navigator.language || "").toLowerCase();
  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("fr")) return "fr";
  return "en";
}

function markLanguageReady(locale: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = locale;
  document.documentElement.dataset.languageReady = "true";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const detected = detectLocale();
    setLocale(detected);
    markLanguageReady(detected);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    markLanguageReady(locale);
  }, [locale, ready]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const index = supportedLocales.findIndex((item) => item.code === prev);
      const next = supportedLocales[(index + 1) % supportedLocales.length]?.code ?? "en";
      if (typeof window !== "undefined") localStorage.setItem("locale", next);
      return next;
    });
  }, []);

  const handleSetLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    if (typeof window !== "undefined") localStorage.setItem("locale", newLocale);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale: handleSetLocale, toggleLocale }),
    [locale, handleSetLocale, toggleLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
