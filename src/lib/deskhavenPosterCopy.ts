import type { Locale } from "@/lib/i18n/context";
import type { DeskHavenAssetLocale } from "@/lib/siteAssets";
import { deskHavenPosterContent } from "@/lib/siteContent";

export function deskHavenPosterStories(locale: Locale, assetLocale: DeskHavenAssetLocale) {
  const copy = deskHavenPosterContent.topicCopy[locale] ?? deskHavenPosterContent.topicCopy.en;
  return deskHavenPosterContent.posterOrders[assetLocale].map((topic) => copy[topic]);
}

export function deskHavenPosterSectionCopy(locale: Locale) {
  return deskHavenPosterContent.sectionCopy[locale] ?? deskHavenPosterContent.sectionCopy.en;
}
