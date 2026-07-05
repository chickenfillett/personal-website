"use client";

import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";

export default function Privacy() {
  const { locale } = useLanguage();
  const text = getSiteCopy(locale).system.websitePrivacy;

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
        <span className="eyebrow">SoloCraft</span>
        <h1 className="mt-7 text-[clamp(2.15rem,3.8vw,3.65rem)] leading-[1.12] tracking-[-0.035em] font-medium text-warm-gradient max-w-4xl">
          {text.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl leading-[1.85] text-muted max-w-4xl">{text.intro}</p>
        <p className="mt-6 text-sm text-[var(--faint)]">{text.updated}</p>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-12 md:py-20">
          <div className="max-w-4xl border-t border-white/[0.07]">
            {text.sections.map(([title, body], index) => (
              <article key={title} className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-5 py-10 border-b border-white/[0.07]">
                <span className="text-xs uppercase tracking-[0.14em] text-[var(--faint)]">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-xl md:text-2xl tracking-[-0.03em] font-medium">{title}</h2>
                  <p className="mt-4 text-muted leading-[1.9]">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
