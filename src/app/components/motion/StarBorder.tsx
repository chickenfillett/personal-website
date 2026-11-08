"use client";
// Inspired by React Bits "Star Border" (https://reactbits.dev) — MIT + Commons Clause.
// prefers-reduced-motion: no rotating border light, plain 1px hairline stays fully visible.
import type { ElementType, ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";
import styles from "./StarBorder.module.css";

export interface StarBorderProps {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

export function StarBorder({ children, className, as }: StarBorderProps) {
  const Tag = (as ?? "div") as ElementType;
  const reduced = useReducedMotion();
  return (
    <Tag className={[styles.star, reduced ? styles.static : "", className].filter(Boolean).join(" ")}>
      <span className={styles.border} aria-hidden="true" />
      <span className={styles.inner}>{children}</span>
    </Tag>
  );
}
