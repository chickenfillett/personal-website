"use client";
// Inspired by React Bits "Shiny Text" (https://reactbits.dev) — MIT + Commons Clause.
// prefers-reduced-motion: degrades to fully static, visible text.
import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";
import styles from "./ShinyText.module.css";

export interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  /** Seconds for one shimmer pass. */
  speed?: number;
}

export function ShinyText({ children, className, speed = 4 }: ShinyTextProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const style = { "--shiny-speed": `${speed}s` } as CSSProperties;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    // The shimmer animates background-position, which forces a repaint on
    // every frame. Once it has scrolled out of view there is nothing to see,
    // but the running animation would keep invalidating paint for the whole
    // scroll — the exact cause of scroll stutter. Pause it off-screen and
    // resume it when it comes back, with no change to the visible effect.
    const io = new IntersectionObserver(
      ([entry]) => {
        el.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <span
      ref={ref}
      className={[styles.shiny, reduced ? styles.static : "", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </span>
  );
}
