"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <h1 className="text-4xl md:text-6xl font-medium text-foreground">{t("notFound.code")}</h1>
      <p className="mt-4 text-muted">{t("notFound.message")}</p>
      <Link
        href="/"
        className="mt-8 text-sm text-foreground border border-white/20 px-6 py-3 hover:bg-foreground hover:text-background transition-colors duration-200"
      >
        {t("notFound.button")}
      </Link>
    </div>
  );
}
