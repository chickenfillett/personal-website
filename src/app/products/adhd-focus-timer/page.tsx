"use client";

import Image from "next/image";
import { ProductInfoLinks } from "../../components/ProductActions";
import { ProductFeatureSections } from "../../components/ProductFeatureSections";
import { ProductHero, ProductPromise } from "../../components/ProductHero";
import ProductPricing from "../../components/ProductPricing";
import SmartScreenshot from "../../components/SmartScreenshot";
import { DisplayHeading } from "../../components/Typography";
import { useLanguage } from "@/lib/i18n/context";
import { commerceLabels } from "@/lib/productCommerce";
import { getSiteCopy } from "@/lib/siteCopy";
import { adhdImagesForLocale, allAdhdImages, microsoftStoreLinks } from "@/lib/siteAssets";
import { usePreloadImages } from "@/lib/usePreloadImages";

export default function ADHDFocusTimerPage() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const adhdAssets = adhdImagesForLocale(locale);
  const legalLabel = commerceLabels(locale).legal;
  const labels = commerceLabels(locale);
  usePreloadImages(allAdhdImages(locale));
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
    <div className="flex flex-col">
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
        ]}
      />

      <ProductFeatureSections
        features={copy.adhd.features}
        images={featureImages}
        imageWidth={1200}
        imageHeight={675}
      />

      <section className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-32 border-t border-white/[0.07]">
        <span className="eyebrow">{copy.adhd.galleryEyebrow}</span>
        <DisplayHeading variant="section">{copy.adhd.galleryTitle}</DisplayHeading>
        <p className="mt-6 text-lg leading-[1.8] text-muted max-w-3xl">{copy.adhd.galleryIntro}</p>

        <div className="adhd-gallery-grid mt-14">
          {galleryCards.map(({ image, copy: [title, body] }, index) => (
            <figure key={`${image}-${title}`} className="adhd-gallery-card">
              <Image
                src={image}
                alt={title}
                width={1180}
                height={664}
                sizes="(max-width: 720px) 92vw, (max-width: 1100px) 44vw, 340px"
                className="adhd-gallery-image"
              />
              <figcaption className="adhd-gallery-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
