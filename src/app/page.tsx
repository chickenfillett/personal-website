"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "./components/TransitionLink";
import SmartScreenshot from "./components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { DisplayHeading } from "./components/Typography";
import { productCatalog, productCatalogPreloadImages, productPreviewSlides } from "@/lib/productCatalog";
import { getSiteCopy } from "@/content/siteContent";
import { usePreloadImages } from "@/lib/usePreloadImages";
import { EditorialGrid } from "./components/layout/EditorialGrid";
import { InlineMeta } from "./components/layout/InlineMeta";
import { MediaSurface } from "./components/layout/MediaSurface";
import { OutcomeList } from "./components/layout/OutcomeList";
import { ProductIndexRow } from "./components/layout/ProductIndexRow";
import { SectionShell } from "./components/layout/SectionShell";
import { SplitSection } from "./components/layout/SplitSection";

export default function Home() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);
  const [heroIndex, setHeroIndex] = useState(0);
  const products = useMemo(() => productCatalog(locale), [locale]);
  const heroItems = useMemo(() => productPreviewSlides(locale), [locale]);
  const preloadImages = useMemo(() => productCatalogPreloadImages(locale), [locale]);
  const activeHero = heroItems[heroIndex] ?? heroItems[0];

  usePreloadImages(preloadImages);

  useEffect(() => {
    setHeroIndex(0);
  }, [locale]);

  return (
    <div className="home-page">
      <SectionShell size="large" className="brand-hero home-hero">
        <SplitSection
          content={
            <div className="brand-hero-copy animate-fade-in">
              <span className="eyebrow">{copy.home.eyebrow}</span>
              <DisplayHeading variant="hero" gradient>{copy.home.title}</DisplayHeading>
              <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{copy.home.intro}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="#products" className="primary-action inline-flex items-center text-sm font-medium hover-lift">
                  {copy.home.primary}
                </Link>
                <Link href="/about" className="secondary-action inline-flex items-center text-sm hover-lift">
                  {copy.home.secondary}
                </Link>
              </div>
              <InlineMeta className="mt-7" items={[copy.home.currentProduct, activeHero?.title]} />
            </div>
          }
          media={
            <div className="home-hero-media">
              {activeHero ? (
                <Link href={activeHero.href} className="home-hero-preview">
                  <MediaSurface size="hero">
                    <SmartScreenshot
                      key={`${locale}-${activeHero.image}`}
                      src={activeHero.image}
                      alt={activeHero.title}
                      width={1200}
                      height={820}
                      priority
                      sizes="(max-width: 1024px) 92vw, 700px"
                      className="object-contain"
                    />
                  </MediaSurface>
                </Link>
              ) : null}

              <div className="product-switcher" role="tablist" aria-label={copy.home.currentProduct}>
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    type="button"
                    role="tab"
                    aria-selected={index === heroIndex}
                    className="product-switcher-control"
                    onClick={() => setHeroIndex(index)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {product.title}
                  </button>
                ))}
              </div>
            </div>
          }
        />
      </SectionShell>

      <div id="products">
        {copy.home.chapters.map((chapter, index) => {
          const product = products[index];

          if (!product) return null;

          return (
            <SectionShell
              key={chapter.id}
              size="large"
              bordered
              className="home-product-section"
            >
              <SplitSection
                reverse={index % 2 === 1}
                align="center"
                content={
                  <div className="home-product-copy">
                    <span className="eyebrow">{chapter.num}</span>
                    <DisplayHeading variant="feature">{chapter.title}</DisplayHeading>
                    <p className="mt-6 text-lg leading-[1.85] text-muted">{chapter.body}</p>
                    <OutcomeList
                      className="mt-9"
                      items={chapter.bullets.map((item) => [item] as const)}
                    />
                  </div>
                }
                media={
                  <Link href={product.href} className="home-product-media">
                    <MediaSurface size="feature">
                      <SmartScreenshot
                        src={product.image}
                        alt={product.title}
                        width={1200}
                        height={760}
                        priority={index === 0}
                        sizes="(max-width: 1024px) 92vw, 700px"
                        className="object-contain"
                      />
                    </MediaSurface>
                  </Link>
                }
              />
            </SectionShell>
          );
        })}
      </div>

      <SectionShell size="large" bordered>
        <span className="eyebrow">{copy.common.productIndex}</span>
        <DisplayHeading variant="section">{copy.home.productTitle}</DisplayHeading>
        <div className="product-index-list mt-14">
          {products.map((product, index) => (
            <ProductIndexRow
              key={product.id}
              index={String(index + 1).padStart(2, "0")}
              title={product.title}
              description={product.description}
              meta={product.status}
              href={product.href}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell size="large" bordered>
        <EditorialGrid className="home-studio-grid">
          <div className="home-studio-heading">
            <span className="eyebrow">{copy.footer.studio}</span>
            <DisplayHeading variant="section">{copy.home.studioTitle}</DisplayHeading>
          </div>
          <div className="home-studio-content">
            <p className="text-lg leading-[1.8] text-muted">{copy.home.studioBody}</p>
            <div className="home-studio-note">
              <p className="text-muted leading-[1.8]">{copy.home.studioNote}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className="primary-action inline-flex items-center text-sm font-medium hover-lift">
                  {copy.common.viewProducts}
                </Link>
                <Link href="/contact" className="secondary-action inline-flex items-center text-sm hover-lift">
                  {copy.common.contact}
                </Link>
              </div>
            </div>
          </div>
        </EditorialGrid>
      </SectionShell>
    </div>
  );
}
