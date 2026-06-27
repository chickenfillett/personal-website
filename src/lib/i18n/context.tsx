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
import { zh } from "./zh";
import { en } from "./en";

export type Locale = "zh" | "en" | "ja" | "ko" | "fr" | "de" | "es";

export const supportedLocales: { code: Locale; label: string; nativeName: string }[] = [
  { code: "zh", label: "Chinese", nativeName: "中文" },
  { code: "en", label: "English", nativeName: "English" },
  { code: "ja", label: "Japanese", nativeName: "日本語" },
  { code: "ko", label: "Korean", nativeName: "한국어" },
  { code: "fr", label: "French", nativeName: "Français" },
  { code: "de", label: "German", nativeName: "Deutsch" },
  { code: "es", label: "Spanish", nativeName: "Español" },
];

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);
const translations = { zh, en } as const;

function isLocale(value: string | null): value is Locale {
  return supportedLocales.some((locale) => locale.code === value);
}

function translationLocale(locale: Locale): "zh" | "en" {
  return locale === "zh" ? "zh" : "en";
}

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") return path;
    const next = (current as Record<string, unknown>)[key];
    if (next === undefined) return path;
    current = next;
  }
  return typeof current === "string" ? current : path;
}

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("locale");
  if (isLocale(saved)) return saved;

  const browserLang = (navigator.language || "").toLowerCase();
  if (browserLang.startsWith("zh")) return "zh";
  if (browserLang.startsWith("ja")) return "ja";
  if (browserLang.startsWith("ko")) return "ko";
  if (browserLang.startsWith("fr")) return "fr";
  if (browserLang.startsWith("de")) return "de";
  if (browserLang.startsWith("es")) return "es";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

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

  const t = useCallback((key: string): string => {
    return getNestedValue(translations[translationLocale(locale)], key);
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale: handleSetLocale, toggleLocale, t }),
    [locale, handleSetLocale, toggleLocale, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
