import type { Locale } from "@/lib/i18n/context";

export type EnergyFlowAssetLocale = "zh" | "en" | "ja" | "ko" | "fr" | "de" | "es" | "pt";
export type EnergyFlowPosterLocale = "zh" | "en";
export type DeskHavenAssetLocale = "zh" | "zh-tw" | "en" | "ja" | "ko" | "fr" | "de" | "es" | "ru" | "pt";
export type DeskHavenPosterLocale = Exclude<DeskHavenAssetLocale, "ko" | "de">;
export type AdhdAssetLocale = "zh" | "en" | "ja" | "fr" | "de" | "es";

export const microsoftStoreLinks = {
  energyflow: "https://apps.microsoft.com/store/detail/9N7ZWFVC2QQS?cid=DevShareMCLPCS",
  deskhaven: "https://apps.microsoft.com/store/detail/9NC6V7Z8C474?cid=DevShareMCLPCS",
  adhd: "https://apps.microsoft.com/store/detail/9MWWCZJPGW4Q?cid=DevShareMCLPCS",
} as const;

export function energyFlowAssetLocale(locale: Locale): EnergyFlowAssetLocale {
  if (locale === "zh" || locale === "zh-tw") return "zh";
  if (["en", "ja", "ko", "fr", "de", "es", "pt"].includes(locale)) {
    return locale as EnergyFlowAssetLocale;
  }
  return "en";
}

export function energyFlowPosterLocale(locale: Locale): EnergyFlowPosterLocale {
  return locale === "zh" || locale === "zh-tw" ? "zh" : "en";
}

export function deskHavenAssetLocale(locale: Locale): DeskHavenAssetLocale {
  if (["zh", "zh-tw", "en", "ja", "ko", "fr", "de", "es", "ru", "pt"].includes(locale)) {
    return locale as DeskHavenAssetLocale;
  }
  return "en";
}

export function deskHavenPosterLocale(locale: Locale): DeskHavenPosterLocale {
  const assetLocale = deskHavenAssetLocale(locale);
  return assetLocale === "de" || assetLocale === "ko" ? "en" : assetLocale;
}

export function adhdAssetLocale(locale: Locale): AdhdAssetLocale {
  if (locale === "zh" || locale === "zh-tw") return "zh";
  if (locale === "ja" || locale === "fr" || locale === "de" || locale === "es") return locale;
  return "en";
}

function numberedEnergyFlowScreenshots(locale: EnergyFlowAssetLocale) {
  return Array.from(
    { length: 13 },
    (_, index) => `/photo/energyflow/${locale}/screenshots/screenshot-${String(index + 1).padStart(2, "0")}.webp`,
  );
}

function numberedEnergyFlowPosters(locale: EnergyFlowPosterLocale) {
  return Array.from(
    { length: 4 },
    (_, index) => `/photo/energyflow/${locale}/posters/poster-${String(index + 1).padStart(2, "0")}.webp`,
  );
}

export function energyFlowImagesForLocale(locale: Locale) {
  const assetLocale = energyFlowAssetLocale(locale);
  const posterLocale = energyFlowPosterLocale(locale);
  const screenshots = numberedEnergyFlowScreenshots(assetLocale);
  const posters = numberedEnergyFlowPosters(posterLocale);

  return {
    locale: assetLocale,
    posterLocale,
    posters,
    screenshots,
    hero: posters[0],
    quickRecord: posters[0],
    timeline: posters[1],
    privacy: posters[2],
    analytics: posters[3],
  };
}

function numberedAdhdScreenshots(locale: AdhdAssetLocale) {
  return Array.from(
    { length: 7 },
    (_, index) => `/photo/adhd-focus-timer/${locale}/screenshots/screenshot-${String(index + 1).padStart(2, "0")}.webp`,
  );
}

export function adhdImagesForLocale(locale: Locale) {
  const assetLocale = adhdAssetLocale(locale);
  const screenshots = numberedAdhdScreenshots(assetLocale);

  return {
    locale: assetLocale,
    screenshots,
    hero: screenshots[0],
    setup: screenshots[0],
    soundscape: screenshots[0],
    breathing: screenshots[1],
    focus: screenshots[2],
    support: screenshots[3],
    ideaFridge: screenshots[4],
    stats: screenshots[5],
    rest: screenshots[6],
  };
}

export const adhdImages = adhdImagesForLocale("en");

function numberedAssets(locale: DeskHavenAssetLocale, folder: "posters" | "screenshots", count: number) {
  const stem = folder === "posters" ? "poster" : "screenshot";
  return Array.from(
    { length: count },
    (_, index) => `/photo/deskhaven/${locale}/${folder}/${stem}-${String(index + 1).padStart(2, "0")}.webp`,
  );
}

const deskHavenScreenshotCount: Record<DeskHavenAssetLocale, number> = {
  zh: 20,
  "zh-tw": 18,
  en: 21,
  ja: 20,
  ko: 21,
  fr: 20,
  de: 21,
  es: 21,
  ru: 20,
  pt: 21,
};

export function deskHavenImagesForLocale(locale: Locale) {
  const assetLocale = deskHavenAssetLocale(locale);
  const posterLocale = deskHavenPosterLocale(locale);
  const posters = posterLocale === "es"
    ? [...numberedAssets("es", "posters", 9), "/photo/deskhaven/en/posters/poster-10.webp"]
    : numberedAssets(posterLocale, "posters", 10);
  const screenshots = numberedAssets(assetLocale, "screenshots", deskHavenScreenshotCount[assetLocale]);

  return {
    locale: assetLocale,
    posterLocale,
    posters,
    screenshots,
    hero: posters[1] ?? posters[0],
    icon: "/photo/deskhaven/zh/posters/poster-02.webp",
    dashboard: screenshots[0],
    privateSpace: screenshots[1],
    fileDesk: screenshots[2],
    archive: screenshots[3],
    relationshipGraph: screenshots[4],
    settings: screenshots[6],
  };
}

export const deskHavenImages = deskHavenImagesForLocale("en");

export function allEnergyFlowImages(locale?: Locale) {
  if (locale) {
    const assets = energyFlowImagesForLocale(locale);
    return [...assets.posters, ...assets.screenshots];
  }

  const screenshots = (["zh", "en", "ja", "ko", "fr", "de", "es", "pt"] as EnergyFlowAssetLocale[])
    .flatMap(numberedEnergyFlowScreenshots);
  const posters = (["zh", "en"] as EnergyFlowPosterLocale[]).flatMap(numberedEnergyFlowPosters);
  return [...posters, ...screenshots];
}

export function allAdhdImages(locale?: Locale) {
  if (locale) return adhdImagesForLocale(locale).screenshots;
  return (["zh", "en", "ja", "fr", "de", "es"] as AdhdAssetLocale[]).flatMap(numberedAdhdScreenshots);
}

export function allDeskHavenImages(locale?: Locale) {
  if (locale) {
    const assets = deskHavenImagesForLocale(locale);
    return [...assets.posters, ...assets.screenshots];
  }

  const images = (["zh", "zh-tw", "en", "ja", "ko", "fr", "de", "es", "ru", "pt"] as DeskHavenAssetLocale[])
    .flatMap((item) => {
      const assets = deskHavenImagesForLocale(item);
      return [...assets.posters, ...assets.screenshots];
    });

  return Array.from(new Set(images));
}
