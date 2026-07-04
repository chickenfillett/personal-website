"use client";

import Link from "../components/TransitionLink";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";

export default function About() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);

  return (
    <div className="flex flex-col">
      <section className="max-w-[1180px] mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24 animate-fade-in">
        <span className="eyebrow">SoloCraft</span>
        <h1 className="mt-7 text-[clamp(2.7rem,5.2vw,5.1rem)] leading-[1.06] tracking-[-0.045em] font-medium text-warm-gradient max-w-4xl">
          {copy.about.title}
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-[1.8]">
          {copy.about.intro}
        </p>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className="max-w-3xl text-lg leading-[1.85] text-muted">
            {copy.about.story.map((paragraph) => (
              <p key={paragraph} className="mt-6 first:mt-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
          <span className="eyebrow">{copy.about.philosophyTitle}</span>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/[0.07]">
            {copy.about.philosophy.map(([title, body], index) => (
              <div key={title} className="min-h-[220px] p-6 border-r border-b border-white/[0.07] bg-white/[0.012]">
                <span className="text-xs text-[var(--faint)] tracking-[0.14em]">0{index + 1}</span>
                <h3 className="mt-12 text-xl tracking-[-0.045em] font-medium">{title}</h3>
                <p className="mt-4 text-sm leading-[1.75] text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
          <span className="eyebrow">{copy.about.techTitle}</span>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
            {copy.about.tech.map((item) => (
              <li key={item} className="border border-white/[0.07] bg-white/[0.012] px-5 py-4 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/[0.07]">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-20 md:py-28">
          <h2 className="text-2xl md:text-4xl tracking-[-0.045em] leading-tight font-medium text-foreground">
            {copy.about.ctaTitle}
          </h2>
          <p className="mt-5 text-muted">{copy.about.ctaDescription}</p>
          <Link
            href="/contact"
            className="primary-action mt-8 inline-block rounded-full px-5 py-3 text-sm font-medium hover-lift"
          >
            {copy.about.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
