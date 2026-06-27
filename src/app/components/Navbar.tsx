"use client";

import Link from "next/link";
import { supportedLocales, useLanguage } from "@/lib/i18n/context";
import { navCopy } from "@/lib/siteCopy";

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const labels = navCopy[locale] ?? navCopy.en;

  const navLinks = [
    { href: "/", label: labels.home },
    { href: "/about", label: labels.about },
    { href: "/products", label: labels.products },
    { href: "/contact", label: labels.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl">
      <nav className="max-w-[1180px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-2 text-foreground tracking-tight shrink-0">
          <span className="font-semibold">SoloCraft</span>
          <span className="hidden sm:inline text-xs text-muted tracking-normal">by Chicken Fillet</span>
        </Link>

        <div className="flex items-center gap-3 md:gap-7 text-sm text-muted">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden sm:inline hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/products" className="sm:hidden hover:text-foreground transition-colors">
            {labels.products}
          </Link>
          <select
            value={locale}
            onChange={(event) => setLocale(event.target.value as typeof locale)}
            aria-label={labels.language}
            className="bg-transparent border border-white/10 px-3 py-2 text-sm text-muted hover:text-foreground hover:border-white/20 transition-colors outline-none"
          >
            {supportedLocales.map((item) => (
              <option key={item.code} value={item.code} className="bg-background text-foreground">
                {item.nativeName}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}
