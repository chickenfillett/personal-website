"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function Navbar() {
  const { locale, toggleLocale } = useLanguage();

  const labels = locale === "zh"
    ? { home: "首页", about: "关于", products: "产品", contact: "联系", language: "English" }
    : { home: "Home", about: "About", products: "Products", contact: "Contact", language: "中文" };

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
          <button
            onClick={toggleLocale}
            className="border border-white/10 px-4 py-2 text-sm text-muted hover:text-foreground hover:border-white/20 transition-colors"
          >
            {labels.language}
          </button>
        </div>
      </nav>
    </header>
  );
}
