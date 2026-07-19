import type { Locale } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";
import type { ProductId } from "@/lib/productCommerce";
import {
  adhdImagesForLocale,
  deskHavenImagesForLocale,
  energyFlowImagesForLocale,
} from "@/lib/siteAssets";

export type ProductCatalogItem = {
  id: ProductId;
  href: string;
  title: string;
  category: string;
  description: string;
  status: string;
  image: string;
};

export function productCatalog(locale: Locale): ProductCatalogItem[] {
  const copy = getSiteCopy(locale);
  const energyFlowAssets = energyFlowImagesForLocale(locale);
  const deskHavenAssets = deskHavenImagesForLocale(locale);
  const adhdAssets = adhdImagesForLocale(locale);

  return [
    {
      id: "energyflow",
      ...copy.productCards.energyflow,
      href: "/products/energyflow",
      image: energyFlowAssets.quickRecord,
    },
    {
      id: "deskhaven",
      ...copy.productCards.deskhaven,
      href: "/products/deskhaven",
      image: deskHavenAssets.hero,
    },
    {
      id: "adhd",
      ...copy.productCards.adhd,
      href: "/products/adhd-focus-timer",
      image: adhdAssets.hero,
    },
  ];
}

export function productPreviewSlides(locale: Locale) {
  const energyFlowAssets = energyFlowImagesForLocale(locale);
  const deskHavenAssets = deskHavenImagesForLocale(locale);
  const adhdAssets = adhdImagesForLocale(locale);

  return [
    { title: "EnergyFlow", image: energyFlowAssets.quickRecord, href: "/products/energyflow" },
    { title: "DeskHaven", image: deskHavenAssets.hero, href: "/products/deskhaven" },
    { title: "EnergyFlow Analytics", image: energyFlowAssets.analytics, href: "/products/energyflow" },
    { title: "ADHD Focus Timer", image: adhdAssets.focus, href: "/products/adhd-focus-timer" },
  ];
}

export function productCatalogPreloadImages(locale: Locale) {
  return Array.from(new Set(productPreviewSlides(locale).map((item) => item.image)));
}
