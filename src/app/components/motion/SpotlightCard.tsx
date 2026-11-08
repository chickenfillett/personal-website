"use client";
// Inspired by React Bits "Spotlight Card" + "Glare Hover" (https://reactbits.dev) — MIT + Commons Clause.
// prefers-reduced-motion: no mouse tracking, no glare, content stays fully visible.
import type { ElementType, MouseEvent, ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";
import styles from "./SpotlightCard.module.css";

export interface SpotlightCardProps {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

export function SpotlightCard({ children, className, as }: SpotlightCardProps) {
  const Tag = (as ?? "div") as ElementType;
  const reduced = useReducedMotion();
  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag
      onMouseMove={onMove}
      className={[styles.card, reduced ? styles.static : "", className].filter(Boolean).join(" ")}
    >
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.glare} aria-hidden="true" />
      <span className={styles.content}>{children}</span>
    </Tag>
  );
}
