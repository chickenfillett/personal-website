"use client";

import Link from "./components/TransitionLink";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";
import { DisplayHeading } from "./components/Typography";
import { SectionShell } from "./components/layout/SectionShell";

export default function NotFound() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale).system.notFound;

  return (
    <SectionShell size="large">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <span className="eyebrow">Chicken Fillet</span>
        <DisplayHeading variant="page" gradient>{copy.code ?? "404"}</DisplayHeading>
        <p className="mt-4 text-lg text-muted">{copy.message ?? "This page does not exist."}</p>
        <Link
          href="/"
          className="secondary-action mt-10 inline-flex items-center text-sm hover-lift"
          data-analytics="cta_click"
        >
          {copy.button ?? "Back to home"}
        </Link>
      </div>
    </SectionShell>
  );
}
