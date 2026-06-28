import type { Locale } from "@/lib/i18n/context";
import zh from "./zh";
import zhTw from "./zh-tw";
import en from "./en";
import ja from "./ja";
import ko from "./ko";
import fr from "./fr";
import de from "./de";
import es from "./es";
import ru from "./ru";
import pt from "./pt";

export const siteLocaleCopy = {
  zh,
  "zh-tw": zhTw,
  en,
  ja,
  ko,
  fr,
  de,
  es,
  ru,
  pt,
} satisfies Record<Locale, typeof en>;
