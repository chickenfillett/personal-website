"use client";

import { ProductInfoLinks } from "../../components/ProductActions";
import { ProductFeatureSections } from "../../components/ProductFeatureSections";
import { ProductHero, ProductPromise } from "../../components/ProductHero";
import { ProductMediaGallery } from "../../components/ProductMediaGallery";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { commerceLabels } from "@/lib/productCommerce";
import { getSiteCopy } from "@/lib/siteCopy";
import { adhdImagesForLocale, microsoftStoreLinks } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function ADHDFocusTimerPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const adhdAssets = adhdImagesForLocale(locale);
  const legalLabel = commerceLabels(locale).legal;
  const labels = commerceLabels(locale);
  usePreloadImages([adhdAssets.hero, adhdAssets.breathing, ...adhdAssets.screenshots.slice(0, 2)], true, 6);
  const galleryItems = copy.adhd.galleryItems as readonly (readonly [string, string])[];

  const featureImages = [
    adhdAssets.setup,
    adhdAssets.soundscape,
    adhdAssets.soundscape,
    adhdAssets.breathing,
    adhdAssets.focus,
    adhdAssets.ideaFridge,
    adhdAssets.stats,
  ] as const;

  const galleryCards = [
    { image: adhdAssets.screenshots[0], copy: galleryItems[0] },
    { image: adhdAssets.screenshots[1], copy: galleryItems[2] },
    { image: adhdAssets.screenshots[2], copy: galleryItems[3] },
    { image: adhdAssets.screenshots[3], copy: galleryItems[6] },
    { image: adhdAssets.screenshots[4], copy: galleryItems[4] },
    { image: adhdAssets.screenshots[5], copy: galleryItems[5] },
    { image: adhdAssets.screenshots[6], copy: galleryItems[7] },
  ].filter((item): item is { image: string; copy: readonly [string, string] } => Boolean(item.image && item.copy));

  return (
    <div className="product-page" data-product="adhd">
      <ProductHero
        eyebrow={copy.adhd.eyebrow}
        title={copy.adhd.title}
        intro={copy.adhd.intro}
        status={copy.adhd.status}
        actions={[
          { href: microsoftStoreLinks.adhd, label: copy.common.microsoftStore, external: true, variant: "primary" },
          { href: "#product-info", label: labels.priceEyebrow },
        ]}
      >
        <SmartScreenshot
          src={adhdAssets.hero}
          alt="ADHD Focus Timer focus session"
          width={1200}
          height={675}
          priority
          sizes="(max-width: 1024px) 92vw, 620px"
        />
      </ProductHero>

      <ProductPromise eyebrow={copy.common.productPromise} title={copy.adhd.promiseTitle} body={copy.adhd.promise} />

      <div id="product-info" />
      <ProductPricing product="adhd" />

      <ProductInfoLinks
        actions={[
          { href: "/products/adhd-focus-timer/privacy", label: copy.common.privacy },
          { href: "/products/adhd-focus-timer/legal", label: legalLabel },
          { href: "/products", label: copy.common.backToProducts },
        ]}
      />

      <ProductFeatureSections
        features={copy.adhd.features}
        images={featureImages}
        imageWidth={1200}
        imageHeight={675}
      />

      <ProductMediaGallery
        eyebrow={copy.adhd.galleryEyebrow}
        title={copy.adhd.galleryTitle}
        intro={copy.adhd.galleryIntro}
        images={galleryCards.map((item) => item.image)}
        items={galleryCards.map((item) => item.copy)}
        imageWidth={1180}
        imageHeight={664}
        imageShape="landscape"
        productName="ADHD Focus Timer"
      />
    </div>
  );
}
