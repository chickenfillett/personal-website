import type { Locale } from "@/lib/i18n/context";
import { getSiteCopy as getBaseSiteCopy, navCopy } from "@/lib/siteCopy";
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

export function getSiteCopy(locale: Locale) {
  const base = getBaseSiteCopy(locale);
  const supplement = siteCopySupplement[locale];
  return supplement ? deepMerge(base, supplement) : base;
}

export { navCopy };
