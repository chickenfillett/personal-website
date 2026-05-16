"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { zh } from "./zh";
import { en } from "./en";

type Locale = "zh" | "en";
type TranslationValue = string | string[] | TranslationObject;
interface TranslationObject {
  [key: string]: TranslationValue;
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Locale, TranslationObject> = { zh, en };

function getNestedValue(obj: TranslationObject, key: string): string {
  const keys = key.split(".");
  let current: TranslationValue = obj;
  for (const k of keys) {
    if (Array.isArray(current)) {
      const index = parseInt(k, 10);
      if (!isNaN(index) && index >= 0 && index < current.length) {
        const item = current[index];
        if (typeof item === "string") return item;
      }
      return key;
    }
    if (typeof current === "object" && current !== null && k in current) {
      current = (current as TranslationObject)[k];
    } else {
      return key;
    }
  }
  return typeof current === "string" ? current : key;
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("locale");
  if (saved === "zh" || saved === "en") return saved;
  const browserLang = navigator.language || navigator.languages?.[0] || "";
  if (browserLang.toLowerCase().startsWith("zh")) return "zh";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const detected = detectLocale();
    setLocale(detected);
    setIsInitialized(true);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "zh" ? "en" : "zh";
      if (typeof window !== "undefined") {
        localStorage.setItem("locale", next);
      }
      return next;
    });
  }, []);

  const handleSetLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return getNestedValue(translations[locale], key);
    },
    [locale]
  );

  const value: LanguageContextType = {
    locale: isInitialized ? locale : "en",
    setLocale: handleSetLocale,
    t,
    toggleLocale,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
