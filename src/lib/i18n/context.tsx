"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from "react";
import { zh } from "./zh";
import { en } from "./en";

type Locale = "zh" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Locale, typeof zh> = { zh, en };

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
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const detected = detectLocale();
    if (detected !== "en") {
      setLocale(detected);
    }
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

  const t = useCallback((key: string): string => {
    return getNestedValue(translations[locale], key);
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale: handleSetLocale,
    toggleLocale,
    t,
  }), [locale, handleSetLocale, toggleLocale, t]);

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
