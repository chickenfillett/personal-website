export type Locale = "zh" | "en";

export const LOCALE_STORAGE_KEY = "locale";

export function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (saved === "zh" || saved === "en") return saved;

  const browserLang = navigator.language || navigator.languages?.[0] || "";
  if (browserLang.toLowerCase().startsWith("zh")) return "zh";

  return "en";
}

export function getSupportedLocale(locale: string | undefined): Locale {
  if (!locale) return "en";
  if (locale.toLowerCase().startsWith("zh")) return "zh";
  return "en";
}
