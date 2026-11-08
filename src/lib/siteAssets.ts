import type { Locale } from "@/lib/i18n/context";

export type EnergyFlowAssetLocale = "zh" | "en" | "fr";
export type EnergyFlowPosterLocale = "zh" | "en";
export type DeskHavenAssetLocale = "zh" | "en" | "fr";
export type DeskHavenPosterLocale = DeskHavenAssetLocale;
export type AdhdAssetLocale = "zh" | "en" | "fr";
export type AdhdPosterLocale = "zh" | "en";

export const microsoftStoreLinks = {
  energyflow: "https://apps.microsoft.com/store/detail/9N7ZWFVC2QQS?cid=DevShareMCLPCS",
  deskhaven: "https://apps.microsoft.com/store/detail/9NC6V7Z8C474?cid=DevShareMCLPCS",
  adhd: "https://apps.microsoft.com/store/detail/9MWWCZJPGW4Q?cid=DevShareMCLPCS",
} as const;

export function energyFlowAssetLocale(locale: Locale): EnergyFlowAssetLocale {
  return locale;
}

export function energyFlowPosterLocale(locale: Locale): EnergyFlowPosterLocale {
  return locale === "zh" ? "zh" : "en";
}

export function deskHavenAssetLocale(locale: Locale): DeskHavenAssetLocale {
  return locale;
}

export function deskHavenPosterLocale(locale: Locale): DeskHavenPosterLocale {
  return deskHavenAssetLocale(locale);
}

export function adhdAssetLocale(locale: Locale): AdhdAssetLocale {
  return locale;
}

export function adhdPosterLocale(locale: Locale): AdhdPosterLocale {
  return locale === "zh" ? "zh" : "en";
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
    { length: 5 },
    (_, index) => `/photo/adhd-focus-timer/${locale}/screenshots/screenshot-${String(index + 1).padStart(2, "0")}.webp`,
  );
}

function numberedAdhdPosters(locale: AdhdPosterLocale) {
  return Array.from(
    { length: 4 },
    (_, index) => `/photo/adhd-focus-timer/${locale}/posters/poster-${String(index + 1).padStart(2, "0")}.webp`,
  );
}

export function adhdImagesForLocale(locale: Locale) {
  const assetLocale = adhdAssetLocale(locale);
  const posterLocale = adhdPosterLocale(locale);
  const screenshots = numberedAdhdScreenshots(assetLocale);
  const posters = numberedAdhdPosters(posterLocale);

  return {
    locale: assetLocale,
    posterLocale,
    posters,
    screenshots,
    hero: posters[0],
    setup: screenshots[4],
    breathing: screenshots[0],
    focus: screenshots[1],
    support: screenshots[2],
    ideaFridge: screenshots[2],
    goals: screenshots[3],
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
  zh: 5,
  en: 5,
  fr: 5,
};

export function deskHavenImagesForLocale(locale: Locale) {
  const assetLocale = deskHavenAssetLocale(locale);
  const posterLocale = deskHavenPosterLocale(locale);
  const posters = numberedAssets(posterLocale, "posters", 10);
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

  const screenshots = (["zh", "en", "fr"] as EnergyFlowAssetLocale[])
    .flatMap(numberedEnergyFlowScreenshots);
  const posters = (["zh", "en"] as EnergyFlowPosterLocale[]).flatMap(numberedEnergyFlowPosters);
  return [...posters, ...screenshots];
}

export function allAdhdImages(locale?: Locale) {
  if (locale) {
    const assets = adhdImagesForLocale(locale);
    return [...assets.posters, ...assets.screenshots];
  }

  const screenshots = (["zh", "en", "fr"] as AdhdAssetLocale[])
    .flatMap(numberedAdhdScreenshots);
  const posters = (["zh", "en"] as AdhdPosterLocale[]).flatMap(numberedAdhdPosters);
  return [...posters, ...screenshots];
}

export function allDeskHavenImages(locale?: Locale) {
  if (locale) {
    const assets = deskHavenImagesForLocale(locale);
    return [...assets.posters, ...assets.screenshots];
  }

  const images = (["zh", "en", "fr"] as DeskHavenAssetLocale[])
    .flatMap((item) => {
      const assets = deskHavenImagesForLocale(item);
      return [...assets.posters, ...assets.screenshots];
    });

  return Array.from(new Set(images));
}
