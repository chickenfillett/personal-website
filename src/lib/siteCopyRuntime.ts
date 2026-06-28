import type { Locale } from "@/lib/i18n/context";
import { getSiteCopy as getBaseSiteCopy, navCopy } from "./siteCopy";
import { siteCopySupplement } from "@/lib/siteCopySupplement";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function deepMerge<T>(base: T, override: unknown): T {
  if (!isPlainObject(base) || !isPlainObject(override)) return (override ?? base) as T;

  const merged: Record<string, unknown> = { ...base };

  for (const [key, value] of Object.entries(override)) {
    if (Array.isArray(value)) {
      merged[key] = value;
      continue;
    }

    if (isPlainObject(value) && isPlainObject(merged[key])) {
      merged[key] = deepMerge(merged[key], value);
      continue;
    }

    if (value !== undefined) merged[key] = value;
  }

  return merged as T;
}

function cleanProductPositioning(value: unknown): unknown {
  if (typeof value === "string") {
    return value
      .replaceAll("小工具", "桌面软件")
      .replaceAll("桌面工具", "桌面软件产品")
      .replaceAll("desktop tools", "desktop software products")
      .replaceAll("Desktop tools", "Desktop software products")
      .replaceAll("small tools", "desktop software products")
      .replaceAll("Small tools", "Desktop software products");
  }

  if (Array.isArray(value)) return value.map(cleanProductPositioning);

  if (isPlainObject(value)) {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, cleanProductPositioning(child)]));
  }

  return value;
}

export function getSiteCopy(locale: Locale) {
  const base = getBaseSiteCopy(locale);
  const supplement = siteCopySupplement[locale];
  const merged = supplement ? deepMerge(base, supplement) : base;
  return cleanProductPositioning(merged) as typeof merged;
}

export { navCopy };
