"use client";

import Link from "./components/TransitionLink";
import SmartScreenshot from "./components/SmartScreenshot";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { productCatalog } from "@/lib/productCatalog";
import { SectionShell } from "./components/layout/SectionShell";
import { SplitSection } from "./components/layout/SplitSection";
import { MediaSurface } from "./components/layout/MediaSurface";
import { DisplayHeading } from "./components/Typography";
import { BlurText, ShinyText, Magnet, ClickSpark, SpotlightCard } from "@/app/components/motion";
import GradientASCII from "./components/hero/GradientASCII";

export default function Home() {
  const { locale } = useLanguage();
  const home = getSiteCopy(locale).home;
  const products = productCatalog(locale);

  return (
    <div className="home-page">
      {/* Hero — the name is the visual center; the eclipse orb is the single light source. */}
      <SectionShell size="large" className="brand-hero home-hero">
        {/* V3 full-bleed light field — one canvas behind the whole hero, not a boxed orb.
            The glyphs and cold-blue glow now reach the name, the page edges and the divider.
            Pure inline style so no frozen CSS is touched; pointer-events off keeps CTAs clickable. */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}
        >
          <GradientASCII
            shape="eclipse"
            colors={["#0A1420", "#2E5A82", "#83AEDD", "#E8EEF5"]}
            characters=" 01"
            cellSize={18}
            density={0.62}
            glyphOpacity={0.95}
            gradientOpacity={0.35}
            glow={0.06}
            depthOfField={0}
            flicker={0.40}
            softness={0.5}
            scale={1}
            flow={0.5}
            speed={1.5}
            grain={0}
            variation={0}
            scrambleRadius={0.1}
            mouseInteraction={false}
            clickEffect="none"
            intro={false}
            lightMode={false}
            fontFamily='"SF Mono", "Cascadia Mono", Consolas, monospace'
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
        <SplitSection
          content={
            <div className="brand-hero-copy animate-fade-in">
              <ShinyText className="eyebrow">{home.heroEyebrow}</ShinyText>
              <DisplayHeading variant="hero" gradient>
                <BlurText text={home.heroTitle} />
              </DisplayHeading>
              <p className="mt-8 text-lg md:text-xl leading-[1.8] text-muted max-w-2xl">{home.heroSubtitle}</p>
              <ClickSpark>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Magnet>
                    <Link href="#works" className="primary-action inline-flex items-center text-sm font-medium hover-lift" data-analytics="cta_click">
                      {home.heroPrimary}
                    </Link>
                  </Magnet>
                  <Magnet>
                    <Link href="/about" className="secondary-action inline-flex items-center text-sm hover-lift" data-analytics="cta_click">
                      {home.heroSecondary}
                    </Link>
                  </Magnet>
                </div>
              </ClickSpark>
            </div>
          }
          media={<div className="home-hero-media" aria-hidden="true" />}
        />
        </div>
      </SectionShell>

      {/* Introduction */}
      <SectionShell size="medium" bordered>
        <div className="editorial-grid editorial-split">
          <span className="eyebrow">Chicken Fillet</span>
          <div className="max-w-3xl">
            <DisplayHeading variant="section">{home.introTitle}</DisplayHeading>
            <p className="mt-6 text-lg leading-[1.85] text-muted">{home.introBody}</p>
          </div>
        </div>
      </SectionShell>

      {/* Selected Work */}
      <SectionShell size="large" bordered id="works">
        <div className="mb-12">
          <span className="eyebrow">01</span>
          <DisplayHeading variant="section" className="mt-4">{home.worksTitle}</DisplayHeading>
          <p className="mt-5 text-lg leading-[1.8] text-muted max-w-2xl">{home.worksSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <SpotlightCard key={product.href} className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02]">
              <Link href={product.href} className="flex h-full flex-col" data-analytics="product_view">
                <MediaSurface size="feature">
                  <SmartScreenshot
                    src={product.image}
                    alt={product.title}
                    width={1200}
                    height={760}
                    sizes="(max-width: 1024px) 92vw, 420px"
                    className="object-contain"
                  />
                </MediaSurface>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl md:text-2xl font-medium tracking-[-0.03em]">{product.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-muted">{product.description}</p>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    {product.status && (
                      <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs text-muted">{product.status}</span>
                    )}
                    <span className="text-muted" aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </SectionShell>

      {/* Areas of Interest — exactly three, text only. */}
      <SectionShell size="large" bordered>
        <div className="mb-12">
          <span className="eyebrow">02</span>
          <DisplayHeading variant="section" className="mt-4">{home.areasTitle}</DisplayHeading>
          <p className="mt-5 text-lg leading-[1.8] text-muted max-w-2xl">{home.areasSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {home.areas.map((area) => (
            <div key={area.title} className="border-t border-white/[0.07] pt-8">
              <h3 className="text-xl md:text-2xl font-medium tracking-[-0.03em]">{area.title}</h3>
              <p className="mt-4 text-muted leading-[1.85]">{area.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Current Focus — shell only, no invented projects. */}
      <SectionShell size="medium" bordered>
        <div className="editorial-grid editorial-split">
          <span className="eyebrow">03</span>
          <div className="max-w-3xl">
            <DisplayHeading variant="section">{home.focusTitle}</DisplayHeading>
            <p className="mt-6 text-lg leading-[1.85] text-muted">{home.focusBody}</p>
            <div className="surface-info mt-8">
              <p className="text-sm text-muted">{home.focusEmpty}</p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Approach */}
      <SectionShell size="large" bordered>
        <div className="mb-12">
          <span className="eyebrow">04</span>
          <DisplayHeading variant="section" className="mt-4">{home.approachTitle}</DisplayHeading>
        </div>
        <div className="border-t border-white/[0.07]">
          {home.approachItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-white/[0.07]">
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-medium tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-muted leading-[1.85] max-w-3xl">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
