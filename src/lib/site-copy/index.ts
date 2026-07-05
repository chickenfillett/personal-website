import type { Locale } from "@/lib/i18n/context";
import { nav as zhNav, copy as zhCopy } from "./locales/zh";
import { nav as zhTwNav, copy as zhTwCopy } from "./locales/zh-tw";
import { nav as enNav, copy as enCopy } from "./locales/en";
import { nav as jaNav, copy as jaCopy } from "./locales/ja";
import { nav as koNav, copy as koCopy } from "./locales/ko";
import { nav as frNav, copy as frCopy } from "./locales/fr";
import { nav as deNav, copy as deCopy } from "./locales/de";
import { nav as esNav, copy as esCopy } from "./locales/es";
import { nav as ruNav, copy as ruCopy } from "./locales/ru";
import { nav as ptNav, copy as ptCopy } from "./locales/pt";

export type NavCopy = {
  home: string;
  about: string;
  products: string;
  contact: string;
  language: string;
};

type WidenCopy<T> =
  T extends string ? string :
  T extends readonly [unknown, ...unknown[]] ? { readonly [K in keyof T]: WidenCopy<T[K]> } :
  T extends readonly (infer Item)[] ? readonly WidenCopy<Item>[] :
  T extends object ? { readonly [K in keyof T]: WidenCopy<T[K]> } :
  T;

export type SiteCopy = WidenCopy<typeof enCopy>;

export const navCopy = {
  "zh": zhNav,
  "zh-tw": zhTwNav,
  "en": enNav,
  "ja": jaNav,
  "ko": koNav,
  "fr": frNav,
  "de": deNav,
  "es": esNav,
  "ru": ruNav,
  "pt": ptNav,
} as const satisfies Record<Locale, NavCopy>;

export const siteCopy = {
  "zh": zhCopy,
  "zh-tw": zhTwCopy,
  "en": enCopy,
  "ja": jaCopy,
  "ko": koCopy,
  "fr": frCopy,
  "de": deCopy,
  "es": esCopy,
  "ru": ruCopy,
  "pt": ptCopy,
} as const satisfies Record<Locale, SiteCopy>;

export function getSiteCopy(locale: Locale): SiteCopy {
  return (siteCopy[locale] ?? siteCopy.en) as SiteCopy;
}
