import type { Locale } from "@/lib/i18n/context";

export type ImageLocale = "zh" | "en";
export type DeskHavenAssetLocale = "zh" | "zh-tw" | "en" | "ja" | "ko" | "fr" | "de" | "es" | "ru" | "pt";
export type AdhdAssetLocale = "zh" | "en" | "ja" | "fr" | "de" | "es";

export const microsoftStoreLinks = {
  energyflow: "https://apps.microsoft.com/store/detail/9N7ZWFVC2QQS?cid=DevShareMCLPCS",
  adhd: "https://apps.microsoft.com/store/detail/9MWWCZJPGW4Q?cid=DevShareMCLPCS",
} as const;

export function imageLocale(locale: string): ImageLocale {
  return locale === "zh" ? "zh" : "en";
}

export function deskHavenAssetLocale(locale: Locale): DeskHavenAssetLocale {
  if (["zh", "zh-tw", "en", "ja", "ko", "fr", "de", "es", "ru", "pt"].includes(locale)) {
    return locale as DeskHavenAssetLocale;
  }
  return "en";
}

export function adhdAssetLocale(locale: Locale): AdhdAssetLocale {
  if (locale === "zh" || locale === "zh-tw") return "zh";
  if (locale === "ja" || locale === "fr" || locale === "de" || locale === "es") return locale;
  return "en";
}

export const energyFlowImages = {
  zh: {
    quickLog: "/photo/energyflow-zh-1.png",
    themeSwitch: "/photo/energyflow-zh-2.png",
    privacy: "/photo/energyflow-zh-3.png",
    analytics: "/photo/energyflow-zh-4.png",
    desktopAlwaysOn: "/photo/energyflow-zh-5.png",
  },
  en: {
    desktopAlwaysOn: "/photo/energyflow-en-1.png",
    quickLog: "/photo/energyflow-en-2.png",
    privacy: "/photo/energyflow-en-3.png",
    analytics: "/photo/energyflow-en-4.png",
    themeSwitch: "/photo/energyflow-en-5.png",
  },
} as const;

function numberedEnergyFlowScreenshots(locale: ImageLocale) {
  return Array.from(
    { length: 13 },
    (_, index) => `/photo/energyflow/${locale}/screenshots/screenshot-${String(index + 1).padStart(2, "0")}.webp`,
  );
}

export function energyFlowGalleryImagesForLocale(locale: Locale) {
  return numberedEnergyFlowScreenshots(imageLocale(locale));
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
  const posters = numberedAssets(assetLocale, "posters", 10);
  const screenshots = numberedAssets(assetLocale, "screenshots", deskHavenScreenshotCount[assetLocale]);

  return {
    locale: assetLocale,
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

export function optimizedImagePath(src: string) {
  const dot = src.lastIndexOf(".");
  const extension = dot > -1 ? src.slice(dot).toLowerCase() : "";
  if (extension === ".webp" || !src.startsWith("/photo/")) return src;
  return `/photo-optimized/${src.slice("/photo/".length, dot)}.webp`;
}

export function allEnergyFlowImages() {
  return [
    ...Object.values(energyFlowImages.zh),
    ...Object.values(energyFlowImages.en),
    ...numberedEnergyFlowScreenshots("zh"),
    ...numberedEnergyFlowScreenshots("en"),
  ];
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

  return (["zh", "zh-tw", "en", "ja", "ko", "fr", "de", "es", "ru", "pt"] as DeskHavenAssetLocale[]).flatMap((item) => {
    const posters = numberedAssets(item, "posters", 10);
    const screenshots = numberedAssets(item, "screenshots", deskHavenScreenshotCount[item]);
    return [...posters, ...screenshots];
  });
}

export function productPreviewImage(locale: Locale, product: "energyflow" | "adhd" | "deskhaven") {
  if (product === "energyflow") return energyFlowImages[imageLocale(locale)].quickLog;
  if (product === "deskhaven") return deskHavenImagesForLocale(locale).hero;
  return adhdImagesForLocale(locale).hero;
}
