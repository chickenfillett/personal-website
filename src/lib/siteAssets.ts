export type Locale = "zh" | "en";

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

export const adhdImages = {
  intro: "/photo/捕获.PNG",
  prep: "/photo/捕获1.PNG",
  breathing: "/photo/捕获2.PNG",
  focus: "/photo/捕获3.PNG",
  ideaFridge: "/photo/捕获4.PNG",
  achievement: "/photo/捕获5.PNG",
  privacy: "/photo/捕获6.PNG",
} as const;

export function optimizedImagePath(src: string) {
  const parts = src.split("/");
  const file = parts[parts.length - 1] ?? src;
  const dot = file.lastIndexOf(".");
  const name = dot > -1 ? file.slice(0, dot) : file;
  return `/photo-optimized/${name}.webp`;
}

export function allEnergyFlowImages() {
  return [
    ...Object.values(energyFlowImages.zh),
    ...Object.values(energyFlowImages.en),
  ];
}

export function allAdhdImages() {
  return Object.values(adhdImages);
}

export function productPreviewImage(locale: Locale, product: "energyflow" | "adhd") {
  if (product === "energyflow") return energyFlowImages[locale].quickLog;
  return adhdImages.focus;
}
