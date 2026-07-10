"use client";

import Image from "next/image";
import { ProductInfoLinks } from "../../components/ProductActions";
import { ProductFeatureSections } from "../../components/ProductFeatureSections";
import { ProductHero, ProductPromise } from "../../components/ProductHero";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { DisplayHeading } from "../../components/Typography";
import { useLanguage } from "@/lib/i18n/context";
import { commerceLabels, productPricing } from "@/lib/productCommerce";
import { getSiteCopy } from "@/lib/siteCopy";
import {
  energyFlowGalleryForLocale,
  energyFlowImages,
  imageLocale,
  microsoftStoreLinks,
} from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

const featureImages = ["quickLog", "themeSwitch", "desktopAlwaysOn", "analytics", "privacy"] as const;

export default function EnergyFlowPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const images = energyFlowImages[imageLocale(locale)];
  const gallery = energyFlowGalleryForLocale(locale);
  const galleryText = copy.energyflow.gallery;
  const flowText = copy.energyflow.flowIntro;
  const legalLabel = commerceLabels(locale).legal;
  const pricing = productPricing("energyflow", locale);
  const preloadImages = [
    ...Object.values(images),
    ...gallery.slice(0, 3).map((item) => item.src),
  ];

  usePreloadImages(preloadImages, true, 8);

  return (
    <div className="flex flex-col">
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
        <SmartScreenshot src={images.quickLog} alt="EnergyFlow quick log" width={1200} height={820} priority sizes="(max-width: 1024px) 92vw, 620px" />
      </ProductHero>

      <ProductPromise eyebrow={copy.common.productPromise} title={copy.energyflow.promiseTitle} body={copy.energyflow.promise} />

      <div id="product-info" />
      <ProductPricing product="energyflow" />

      <ProductInfoLinks
        actions={[
          { href: "/products/energyflow/privacy", label: copy.common.privacy },
          { href: "/products/energyflow/legal", label: legalLabel },
        ]}
      />

      <ProductFeatureSections
        features={copy.energyflow.features}
        images={featureImages.map((feature) => images[feature])}
        imageWidth={1200}
        imageHeight={820}
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">{copy.common.experienceFlow}</span>
            <DisplayHeading variant="section">{flowText.title}</DisplayHeading>
            <p className="mt-7 text-lg leading-[1.85] text-muted max-w-2xl">{flowText.body}</p>
            <div className="mt-10 rounded-3xl border border-white/[0.08] bg-white/[0.018] p-6 md:p-7">
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{flowText.cardTitle}</div>
              <p className="mt-4 text-muted leading-[1.8]">{flowText.cardBody}</p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {copy.energyflow.flow.map((item, index) => (
              <div key={item} className="grid grid-cols-[5rem_1fr] md:grid-cols-[8rem_1fr] gap-6 py-8 md:py-10 border-b border-white/[0.07]">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{copy.common.step} {index + 1}</span>
                <p className="text-2xl md:text-3xl text-foreground/80 leading-[1.25] tracking-[-0.035em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32">
          <span className="eyebrow">{galleryText.eyebrow}</span>
          <DisplayHeading variant="section">{galleryText.title}</DisplayHeading>
          <p className="mt-7 text-lg leading-[1.85] text-muted max-w-3xl">{galleryText.body}</p>

          <div className="mt-14 energy-gallery-grid">
            {gallery.map((screenshot, index) => (
              <figure key={screenshot.src} className="energy-gallery-card">
                <Image
                  src={screenshot.src}
                  alt={`EnergyFlow interface screenshot ${index + 1}`}
                  width={screenshot.width}
                  height={screenshot.height}
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(max-width: 620px) 360px, (max-width: 920px) 46vw, 320px"
                  className="energy-gallery-image"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
