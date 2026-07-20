"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { getSiteCopy } from "@/content/siteContent";

export default function NotFound() {
  const { locale } = useLanguage();
  const copy = getSiteCopy(locale).system.notFound;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <h1 className="text-4xl md:text-6xl font-medium text-foreground">{copy.code}</h1>
      <p className="mt-4 text-muted">{copy.message}</p>
      <Link
        href="/"
        className="mt-8 text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
      >
        {copy.button}
      </Link>
    </div>
  );
}
