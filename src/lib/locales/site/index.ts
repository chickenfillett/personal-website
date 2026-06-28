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

export const siteLocaleCopy: Record<Locale, typeof en> = {
  zh: zh as typeof en,
  "zh-tw": zhTw as typeof en,
  en,
  ja: ja as typeof en,
  ko: ko as typeof en,
  fr: fr as typeof en,
  de: de as typeof en,
  es: es as typeof en,
  ru: ru as typeof en,
  pt: pt as typeof en,
};
