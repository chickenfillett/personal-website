"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-foreground font-medium">{t("footer.name")}</span>
            <span className="text-muted text-sm">
              {t("footer.subtitle")}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-muted text-sm hover:text-foreground transition-colors duration-200"
            >
              {t("footer.about")}
            </Link>
            <Link
              href="/products"
              className="text-muted text-sm hover:text-foreground transition-colors duration-200"
            >
              {t("footer.products")}
            </Link>
            <Link
              href="/contact"
              className="text-muted text-sm hover:text-foreground transition-colors duration-200"
            >
              {t("footer.contact")}
            </Link>
            <Link
              href="/privacy"
              className="text-muted text-sm hover:text-foreground transition-colors duration-200"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/products/adhd-focus-timer/refund"
              className="text-muted text-sm hover:text-foreground transition-colors duration-200"
            >
              {t("footer.refund")}
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 text-muted text-xs">
          &copy; {new Date().getFullYear()} {t("footer.name")}. {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
