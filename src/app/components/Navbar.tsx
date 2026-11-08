"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Locale, supportedLocales, useLanguage } from "@/lib/i18n/context";
import { navCopy } from "@/content/siteContent";
import Link from "./TransitionLink";
import { SiteContainer } from "./layout/SiteContainer";

export default function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const controlsRef = useRef<HTMLDivElement | null>(null);
  const labels = navCopy[locale] ?? navCopy.en;
  // Follow A's supportedLocales, but keep the shipped set locked to zh / en / fr.
  const visibleLocales = supportedLocales.filter(
    (item) => item.code === "zh" || item.code === "en" || item.code === "fr",
  );
  const currentLocale = visibleLocales.find((item) => item.code === locale)
    ?? { code: "en", label: "English", nativeName: "English" };

  const anyMenuOpen = languageOpen || mobileOpen;

  useEffect(() => {
    if (!anyMenuOpen) return;

    const closeOnOutside = (event: PointerEvent) => {
      if (!controlsRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
        setMobileOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [anyMenuOpen]);

  useEffect(() => {
    setLanguageOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/work", label: labels.work },
    { href: "/about", label: labels.about },
    { href: "/contact", label: labels.contact },
  ];

  const chooseLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setLanguageOpen(false);
  };

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="brand-header sticky top-0 z-50">
      <SiteContainer className="h-16">
      <nav className="h-full flex items-center justify-between gap-6" aria-label="Primary navigation">
        <Link href="/" className="brand-wordmark flex items-center gap-3 text-foreground tracking-tight shrink-0" aria-label="Chicken Fillet home">
          <span className="font-semibold">Chicken Fillet</span>
        </Link>

        <div ref={controlsRef} className="relative flex items-center gap-2 md:gap-5 text-sm text-muted">
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="brand-nav-link hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="mobile-menu-button md:hidden"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMobileOpen((value) => !value);
              setLanguageOpen(false);
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 8h14M5 12h14M5 16h14" />
            </svg>
          </button>

          <div className="language-menu">
            <button
              type="button"
              className="language-menu-button"
              aria-label={labels.language}
              aria-expanded={languageOpen}
              aria-haspopup="menu"
              onClick={() => {
                setLanguageOpen((value) => !value);
                setMobileOpen(false);
              }}
            >
              <span>{currentLocale.nativeName}</span>
              <svg className="language-menu-chevron" viewBox="0 0 12 8" aria-hidden="true">
                <path d="m1.5 1.5 4.5 4 4.5-4" />
              </svg>
            </button>
            {languageOpen ? (
              <div className="language-menu-panel" role="menu">
                {visibleLocales.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={item.code === locale}
                    className={`language-menu-item ${item.code === locale ? "is-active" : ""}`}
                    onClick={() => chooseLocale(item.code)}
                  >
                    <span>{item.nativeName}</span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {mobileOpen ? (
            <div id="mobile-navigation" className="mobile-navigation-panel md:hidden">
              <div className="mobile-navigation-label">Chicken Fillet</div>
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="mobile-navigation-link"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{link.label}</strong>
                  <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-4-4 4 4-4 4" /></svg>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </nav>
      </SiteContainer>
    </header>
  );
}
