"use client";

import { PageHero } from "../components/PageHero";
import { DisplayHeading } from "../components/Typography";
import { SectionShell } from "../components/layout/SectionShell";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";

export default function Now() {
  const { locale } = useLanguage();
  const now = getSiteCopy(locale).now;

  const fields = [
    { title: now.buildingTitle, body: now.emptyLabel },
    { title: now.exploringTitle, body: now.emptyLabel },
    { title: now.learningTitle, body: now.emptyLabel },
    { title: now.progressTitle, body: now.emptyLabel },
  ];

  return (
    <div className="flex flex-col">
      <PageHero eyebrow={now.eyebrow} title={now.title} intro={now.intro} wide animated />

      <SectionShell size="medium" bordered>
        <div className="border-t border-white/[0.07]">
          {fields.map((field, index) => (
            <div
              key={field.title}
              className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-white/[0.07]"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{String(index + 1).padStart(2, "0")}</span>
              <div className="max-w-3xl">
                <DisplayHeading variant="section">{field.title}</DisplayHeading>
                <p className="mt-4 text-muted leading-[1.85]">{field.body}</p>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-white/[0.07]">
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">05</span>
            <div className="max-w-3xl">
              <DisplayHeading variant="section">{now.updatedLabel}</DisplayHeading>
              <p className="mt-4 text-muted leading-[1.85]">{now.lastUpdated}</p>
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
