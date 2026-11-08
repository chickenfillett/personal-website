"use client";
// Inspired by React Bits "Grid Motion" (https://reactbits.dev) — MIT + Commons Clause.
// prefers-reduced-motion: grid stops drifting, stays fully visible. No images, no concept art.
import type { ReactNode } from "react";
import { useReducedMotion } from "./useReducedMotion";
import styles from "./GridMotion.module.css";

export interface GridMotionProps {
  className?: string;
  children?: ReactNode;
}

export function GridMotion({ className, children }: GridMotionProps) {
  const reduced = useReducedMotion();
  return (
    <div className={[styles.grid, reduced ? styles.static : "", className].filter(Boolean).join(" ")}>
      {children ? <div className={styles.content}>{children}</div> : null}
    </div>
  );
}
