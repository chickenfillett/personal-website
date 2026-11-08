"use client";

import Link from "../components/TransitionLink";
import { PageHero } from "../components/PageHero";
import { DisplayHeading } from "../components/Typography";
import { SectionShell } from "../components/layout/SectionShell";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { workCatalog, workTypeLabel, workStatusLabel } from "@/lib/workCatalog";
import type { WorkType } from "@/domain/work";

const WORK_TYPES: readonly WorkType[] = [
  "software",
  "prototype",
  "experiment",
  "research",
  "visual",
];

export default function Work() {
  const { locale } = useLanguage();
  const work = getSiteCopy(locale).work;
  const items = workCatalog(locale);

  return (
    <div className="flex flex-col">
      <PageHero eyebrow={work.eyebrow} title={work.title} intro={work.intro} wide animated />

      {WORK_TYPES.map((type, index) => {
        const entries = items.filter((item) => item.type === type);

        return (
          <SectionShell key={type} size="medium" bordered>
            <div className="mb-10">
              <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
              <DisplayHeading variant="section" className="mt-4">{workTypeLabel(locale, type)}</DisplayHeading>
            </div>

            {entries.length > 0 ? (
              <div className="grid grid-cols-1 gap-5">
                {entries.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{workTypeLabel(locale, item.type)}</span>
                      {item.status && (
                        <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs text-muted">
                          {workStatusLabel(locale, item.status)}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-xl md:text-2xl font-medium tracking-[-0.03em]">{item.title}</h3>
                    {item.summary && (
                      <p className="mt-3 text-sm leading-[1.8] text-muted">{item.summary}</p>
                    )}
                    {item.href && (
                      <Link
                        href={item.href}
                        className="secondary-action mt-6 inline-flex items-center text-sm hover-lift"
                        data-analytics="product_view"
                      >
                        {work.viewLabel}
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="surface-info">
                <p className="text-sm text-muted">{work.emptyLabel}</p>
              </div>
            )}
          </SectionShell>
        );
      })}
    </div>
  );
}
