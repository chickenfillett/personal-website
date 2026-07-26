"use client";

import Link from "../components/TransitionLink";
import { PageHero } from "../components/PageHero";
import { DisplayHeading } from "../components/Typography";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { ContentRow } from "../components/layout/ContentRow";
import { EditorialGrid } from "../components/layout/EditorialGrid";
import { SectionShell } from "../components/layout/SectionShell";

export default function About() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);

  return (
    <div className="flex flex-col">
      <PageHero eyebrow="SoloCraft" title={copy.about.title} intro={copy.about.intro} animated />

      <SectionShell size="medium" bordered>
        <EditorialGrid>
          <div className="about-section-label">
            <span className="eyebrow">SoloCraft</span>
          </div>
          <div className="max-w-3xl text-lg leading-[1.85] text-muted">
            {copy.about.story.map((paragraph) => (
              <p key={paragraph} className="mt-6 first:mt-0">{paragraph}</p>
            ))}
          </div>
        </EditorialGrid>
      </SectionShell>

      <SectionShell size="medium" bordered>
        <EditorialGrid>
          <div className="about-section-label">
            <span className="eyebrow">{copy.about.techTitle}</span>
          </div>
          <div className="about-tech-list">
            {copy.about.tech.map((item) => (
              <ContentRow
                key={item}
                index={String(copy.about.tech.indexOf(item) + 1).padStart(2, "0")}
                title={item}
              />
            ))}
          </div>
        </EditorialGrid>
      </SectionShell>

      <SectionShell size="medium" bordered>
        <EditorialGrid>
          <div className="about-section-label" />
          <div className="about-cta">
          <DisplayHeading variant="section" className="mt-0">{copy.about.ctaTitle}</DisplayHeading>
          <p className="mt-5 text-muted">{copy.about.ctaDescription}</p>
          <Link
            href="/contact"
            className="primary-action mt-8 inline-block rounded-full px-5 py-3 text-sm font-medium hover-lift"
          >
            {copy.about.ctaButton}
          </Link>
          </div>
        </EditorialGrid>
      </SectionShell>
    </div>
  );
}
