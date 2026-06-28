import type { Locale } from "@/lib/i18n/context";
import { navCopy } from "./siteCopy";
import { siteLocaleCopy } from "@/lib/locales/site";

export function getSiteCopy(locale: Locale) {
  return siteLocaleCopy[locale] ?? siteLocaleCopy.en;
}

export { navCopy };
