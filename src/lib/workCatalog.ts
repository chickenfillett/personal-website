import type { Locale } from "@/lib/i18n/context";
import type { WorkItem, WorkStatus, WorkType } from "@/domain/work";
import { getSiteCopy } from "@/content/siteContent";

export function workCatalog(locale: Locale): WorkItem[] {
  const cards = getSiteCopy(locale).productCards;

  return [
    {
      id: "energyflow",
      title: cards.energyflow.title,
      type: "software",
      status: "released",
      summary: cards.energyflow.description,
      href: "/products/energyflow",
    },
    {
      id: "deskhaven",
      title: cards.deskhaven.title,
      type: "software",
      status: "released",
      summary: cards.deskhaven.description,
      href: "/products/deskhaven",
    },
    {
      id: "adhd",
      title: cards.adhd.title,
      type: "software",
      status: "released",
      summary: cards.adhd.description,
      href: "/products/adhd-focus-timer",
    },
  ];
}

export function workTypeLabel(locale: Locale, type: WorkType): string {
  return getSiteCopy(locale).work.typeLabels[type];
}

export function workStatusLabel(locale: Locale, status: WorkStatus): string {
  return getSiteCopy(locale).work.statusLabels[status];
}
