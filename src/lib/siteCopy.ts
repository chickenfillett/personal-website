import type { Locale } from "@/lib/i18n/context";
import { applyBrandCopy } from "@/lib/brandCopy";
import {
  getSiteCopy as getBaseSiteCopy,
  navCopy,
  siteCopy as baseSiteCopy,
} from "@/lib/siteContent";
import type { NavCopy, SiteCopy } from "@/lib/siteContent";

export { navCopy };
export type { NavCopy, SiteCopy };

export const siteCopy = Object.fromEntries(
  (Object.keys(baseSiteCopy) as Locale[]).map((locale) => [
    locale,
    applyBrandCopy(locale, getBaseSiteCopy(locale)),
  ]),
) as Record<Locale, SiteCopy>;

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale] ?? siteCopy.en;
}
