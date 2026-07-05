"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/lib/siteCopy";

export default function ProductPayment() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale).system.payment;

  return (
    <div className="flex flex-col">
      <section className="max-w-[1200px] mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24">
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
          {copy.title}
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          {copy.description}
        </p>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-2xl space-y-10">
            {copy.sections.map(([title, description]) => (
              <div key={title}>
                <h2 className="text-foreground font-medium">{title}</h2>
                <p className="mt-3 text-muted leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
          <Link
            href="/products/adhd-focus-timer/refund"
            className="text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            {copy.backButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
