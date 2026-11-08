"use client";

import Link from "../components/TransitionLink";
import { PageHero } from "../components/PageHero";
import { DisplayHeading } from "../components/Typography";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { SectionShell } from "../components/layout/SectionShell";

export default function About() {
  const { locale } = useLanguage();
  const about = getSiteCopy(locale).about;

  return (
    <div className="flex flex-col">
      <PageHero eyebrow="Chicken Fillet" title={about.title} intro={about.intro} animated />

      <SectionShell size="medium" bordered>
        <div className="border-t border-white/[0.07]">
          {/* Introduction */}
          <div className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-white/[0.07]">
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">01</span>
            <div className="max-w-3xl">
              <span className="eyebrow">{about.sectionLabels.introduction}</span>
              <p className="mt-4 text-lg leading-[1.85] text-muted">{about.introduction}</p>
            </div>
          </div>

          {/* Background */}
          <div className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-white/[0.07]">
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">02</span>
            <div className="max-w-3xl">
              <span className="eyebrow">{about.sectionLabels.background}</span>
              <div className="mt-4 space-y-4">
                {about.background.map((item) => (
                  <p key={item} className="text-lg leading-[1.85] text-muted">{item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-white/[0.07]">
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">03</span>
            <div className="max-w-3xl">
              <span className="eyebrow">{about.sectionLabels.interests}</span>
              <div className="mt-4 space-y-4">
                {about.interests.map((item) => (
                  <p key={item} className="text-lg leading-[1.85] text-muted">{item}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-white/[0.07]">
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">04</span>
            <div className="max-w-3xl">
              <span className="eyebrow">{about.sectionLabels.approach}</span>
              <p className="mt-4 text-lg leading-[1.85] text-muted">{about.approach}</p>
            </div>
          </div>

          {/* Future Direction */}
          <div className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-white/[0.07]">
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">05</span>
            <div className="max-w-3xl">
              <span className="eyebrow">{about.sectionLabels.futureDirection}</span>
              <p className="mt-4 text-lg leading-[1.85] text-muted">{about.futureDirection}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-white/[0.07]">
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">06</span>
            <div className="max-w-3xl">
              <DisplayHeading variant="section">{about.contactTitle}</DisplayHeading>
              <Link
                href="/contact"
                className="secondary-action mt-8 inline-flex items-center text-sm hover-lift"
                data-analytics="contact_click"
              >
                {about.contactButton}
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Contact CTA */}
      <SectionShell size="medium" bordered>
        <div className="about-cta">
          <DisplayHeading variant="section" className="mt-0">{about.ctaTitle}</DisplayHeading>
          <p className="mt-5 text-muted">{about.ctaDescription}</p>
          <Link
            href="/contact"
            className="primary-action mt-8 inline-block rounded-full px-5 py-3 text-sm font-medium hover-lift"
            data-analytics="contact_click"
          >
            {about.ctaButton}
          </Link>
        </div>
      </SectionShell>
    </div>
  );
}
