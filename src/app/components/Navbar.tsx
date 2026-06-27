"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Navbar() {
  const { locale, toggleLocale } = useLanguage();

  const labels = locale === "zh"
    ? { story: "理念", products: "产品", about: "关于", contact: "联系", cta: "查看产品" }
    : { story: "Story", products: "Products", about: "About", contact: "Contact", cta: "View products" };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <nav className="max-w-[1180px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 text-foreground tracking-tight">
          <span className="font-medium">SoloCraft</span>
          <span className="hidden sm:inline text-xs text-muted tracking-normal">by Chicken Fillet</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-7 text-sm text-muted">
          <Link href="/#principles" className="hidden md:inline hover:text-foreground transition-colors">{labels.story}</Link>
          <Link href="/products" className="hover:text-foreground transition-colors">{labels.products}</Link>
          <Link href="/about" className="hidden md:inline hover:text-foreground transition-colors">{labels.about}</Link>
          <Link href="/contact" className="hidden md:inline hover:text-foreground transition-colors">{labels.contact}</Link>
          <button
            onClick={toggleLocale}
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted hover:text-foreground hover:border-white/20 transition-colors"
          >
            {locale === "zh" ? "English" : "中文"}
          </button>
          <Link
            href="/products"
            className="hidden sm:inline-flex rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-2 text-xs text-foreground hover:bg-white/[0.06] transition-colors"
          >
            {labels.cta}
          </Link>
        </div>
      </nav>
    </header>
  );
}
