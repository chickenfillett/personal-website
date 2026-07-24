"use client";

import { ProductInfoLinks } from "../../components/ProductActions";
import { ProductFeatureSections } from "../../components/ProductFeatureSections";
import { ProductHero } from "../../components/ProductHero";
import { ProductMediaGallery } from "../../components/ProductMediaGallery";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { commerceLabels } from "@/lib/productCommerce";
import { getSiteCopy } from "@/content/siteContent";
import { adhdImagesForLocale, microsoftStoreLinks } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function ADHDFocusTimerPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const adhdAssets = adhdImagesForLocale(locale);
  const legalLabel = commerceLabels(locale).legal;
  const labels = commerceLabels(locale);
  usePreloadImages([...adhdAssets.posters.slice(0, 2), ...adhdAssets.screenshots.slice(0, 2)], true, 4);
  const galleryItems = copy.adhd.galleryItems as readonly (readonly [string, string])[];
  const galleryCards = adhdAssets.screenshots
    .map((image, index) => ({ image, copy: galleryItems[index] }))
    .filter((item): item is { image: string; copy: readonly [string, string] } => Boolean(item.copy));

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
          alt={`${copy.adhd.features[0][0]} - ADHD Focus Timer`}
          width={1400}
          height={788}
          priority
          sizes="(max-width: 1024px) 92vw, 620px"
        />
      </ProductHero>

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
        images={adhdAssets.posters}
        imageWidth={1400}
        imageHeight={788}
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
