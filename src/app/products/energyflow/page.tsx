"use client";

import { ProductInfoLinks } from "../../components/ProductActions";
import { ProductFeatureSections } from "../../components/ProductFeatureSections";
import { ProductHero } from "../../components/ProductHero";
import { ProductMediaGallery } from "../../components/ProductMediaGallery";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { commerceLabels, productPricing } from "@/lib/productCommerce";
import { getEnergyFlowMediaCopy } from "@/lib/siteContent";
import { getSiteCopy } from "@/lib/siteCopy";
import { energyFlowImagesForLocale, microsoftStoreLinks } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function EnergyFlowPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const mediaCopy = getEnergyFlowMediaCopy(locale);
  const images = energyFlowImagesForLocale(locale);
  const galleryText = copy.energyflow.gallery;
  const legalLabel = commerceLabels(locale).legal;
  const pricing = productPricing("energyflow", locale);
  const preloadImages = [
    images.hero,
    images.analytics,
    ...images.screenshots.slice(0, 2),
  ];

  usePreloadImages(preloadImages, true, 8);

  return (
    <div className="product-page" data-product="energyflow">
      <ProductHero
        eyebrow={copy.energyflow.eyebrow}
        title={copy.energyflow.title}
        intro={copy.energyflow.intro}
        status={copy.energyflow.status}
        actions={[
          { href: microsoftStoreLinks.energyflow, label: copy.common.microsoftStore, external: true, variant: "primary" },
          { href: "#product-info", label: pricing.eyebrow },
        ]}
      >
        <SmartScreenshot src={images.hero} alt={mediaCopy.posters[0][0]} width={1400} height={788} priority sizes="(max-width: 1024px) 92vw, 620px" />
      </ProductHero>

      <div id="product-info" />
      <ProductPricing product="energyflow" />

      <ProductInfoLinks
        actions={[
          { href: "/products/energyflow/privacy", label: copy.common.privacy },
          { href: "/products/energyflow/legal", label: legalLabel },
          { href: "/products", label: copy.common.backToProducts },
        ]}
      />

      <ProductFeatureSections
        features={mediaCopy.posters}
        images={images.posters}
        imageWidth={1400}
        imageHeight={788}
      />

      <ProductMediaGallery
        eyebrow={galleryText.eyebrow}
        title={galleryText.title}
        intro={galleryText.body}
        images={images.screenshots}
        items={mediaCopy.screenshots}
        imageWidth={480}
        imageHeight={600}
        imageShape="portrait"
        productName="EnergyFlow"
      />
    </div>
  );
}
