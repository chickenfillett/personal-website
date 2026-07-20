"use client";

import Link from "../components/TransitionLink";
import { PageHero } from "../components/PageHero";
import { DisplayHeading } from "../components/Typography";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";

export default function About() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale);

  return (
    <div className="flex flex-col">
      <PageHero eyebrow="SoloCraft" title={copy.about.title} intro={copy.about.intro} animated />

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
          <DisplayHeading variant="section" className="mt-0">{copy.about.ctaTitle}</DisplayHeading>
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
