"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";
import { zh } from "./zh";
import { en } from "./en";

type Locale = "zh" | "en";
type Translations = typeof zh;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Locale, Translations> = {
  zh,
  en,
};

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined) return path;
    if (typeof current !== "object") return path;
    
    const next = (current as Record<string, unknown>)[key];
    if (next === undefined) return path;
    current = next;
  }
  
  return typeof current === "string" ? current : path;
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  
  const saved = localStorage.getItem("locale");
  if (saved === "zh" || saved === "en") return saved;
  
  const browserLang = navigator.language || "";
  if (browserLang.toLowerCase().startsWith("zh")) return "zh";
  
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const detected = detectLocale();
    setLocaleState(detected);
    setIsHydrated(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
  };

  const toggleLocale = () => {
    const newLocale = locale === "zh" ? "en" : "zh";
    setLocale(newLocale);
  };

  const t = useMemo(() => {
    return (key: string): string => {
      const dict = translations[locale];
      return getNestedValue(dict, key);
    };
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    toggleLocale,
    t,
  }), [locale, t]);

  if (!isHydrated) {
    return (
      <LanguageContext.Provider value={{ locale: "en", setLocale, toggleLocale, t: () => "" }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
