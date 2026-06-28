import type { Locale } from "@/lib/i18n/context";
import type { ProductId } from "@/lib/productCommerce";
import { productPricing } from "@/lib/productCommerce";

export type PolicyKind = "privacy" | "legal";
export type PolicySection = { title: string; body: string | readonly string[]; bullets?: readonly string[] };
export type ProductPolicyCopy = { title: string; intro: string; updated: string; sections: PolicySection[]; back: string };

const productNames: Record<ProductId, string> = {
  energyflow: "EnergyFlow",
  deskhaven: "DeskHaven",
  adhd: "ADHD Focus Timer",
};

type PolicyPack = {
  updated: string;
  back: (name: string) => string;
  contact: string;
  privacyTitle: (name: string) => string;
  legalTitle: (name: string) => string;
  privacyIntro: (name: string, topic: string) => string;
  legalIntro: (name: string) => string;
  topic: Record<ProductId, string>;
  sensitive: Record<ProductId, string>;
  privacyTitles: string[];
  privacyBullets: string[];
  privacyBodies: (name: string, topic: string, sensitive: string) => string[][];
  legalTitles: string[];
  legalBodies: (name: string, summary: string, trial: string) => string[][];
};

function sections(titles: string[], bodies: string[][], bullets?: string[]): PolicySection[] {
  return titles.map((title, index) => ({
    title,
    body: bodies[index] ?? [],
    bullets: index === 1 ? bullets : undefined,
  }));
}

const zh: PolicyPack = {
  updated: "最后更新：2026 年 6 月 28 日",
  back: (name) => `返回 ${name}`,
  contact: "如需联系开发者，请发送邮件至 3371436706@qq.com。",
  privacyTitle: (name) => `${name} 隐私政策`,
  legalTitle: (name) => `${name} 法律与使用条款`,
  privacyIntro: (name, topic) => `本文件说明 ${name} 如何在本地设备上处理${topic}。本隐私政策只讨论隐私、数据处理、本地存储、用户控制权和支持沟通。`,
  legalIntro: (name) => `本文件说明 ${name} 的使用许可、商店规则、用户内容、责任限制和支持方式。`,
  topic: {
    deskhaven: "本地文件、文件索引、文件仓、关系图谱、备份和偏好设置",
    energyflow: "精力记录、工作状态、情绪、统计分析和偏好设置",
    adhd: "专注计时、想法冰箱、声音、语音记录、完成反馈和偏好设置",
  },
  sensitive: {
    deskhaven: "文档、图片、项目资料、密码文件、SSH 密钥、导出文件、工作资料以及你主动放入 DeskHaven 的本地内容",
    energyflow: "精力状态、工作情绪、压力感受、工作习惯、时间节奏和个人备注",
    adhd: "私人想法、未完成任务、语音记录、专注困难、情绪状态和临时笔记",
  },
  privacyTitles: ["本地优先", "不会上传到开发者服务器", "本地数据类型和用途", "敏感内容", "安全、备份和删除", "支持沟通", "你的控制权", "第三方服务边界", "联系和更新"],
  privacyBullets: ["不要求注册 SoloCraft 账户。", "不把本地文件内容上传给开发者。", "不把本地索引、统计记录或关系图谱发送给开发者分析。", "不出售、出租或共享你的本地使用内容。", "不使用本地内容训练模型或建立广告画像。"],
  privacyBodies: (name, topic, sensitive) => [
    [`${name} 围绕本地 Windows 工作流设计。与功能相关的${topic}默认在你的设备或你选择的本地位置处理。`, "除非你主动导出、复制、备份、发送支持邮件，或使用系统/第三方同步工具，开发者不会远程读取这些本地资料。"],
    [`${name} 的核心功能不需要在线账户，也不会把你的本地内容作为在线档案上传给开发者。`, "如果 OneDrive、网盘、系统备份或公司设备策略同步了相关文件，那是你选择的系统或第三方服务行为，不是本应用向开发者上传。"],
    [`应用可能在本地保存或生成${topic}。这些资料用于搜索、筛选、统计、回顾、恢复、自动整理、完成当前会话或保持你的偏好设置。`, "处理这些资料的目的，是让你在自己的设备上更容易找回、理解和管理信息，而不是收集更多个人资料。"],
    [`你可能在使用过程中处理${sensitive}。这些内容可能具有私人性或商业敏感性，应当被视为重要本地资料。`, "在共享电脑、公司设备或未加密磁盘上使用时，请额外注意 Windows 账户、磁盘权限、屏幕可见性、系统备份和文件夹访问权限。"],
    [`${name} 可能提供本地保存、密码保护、加密、备份、恢复或防窥能力，实际范围取决于应用版本、Windows 环境和你启用的设置。`, "这些保护不能替代完整的设备安全方案。删除后的本地数据可能无法由开发者恢复，因此重要文件、记录和密钥应由你自行维护备份。"],
    ["如果你主动通过邮件联系开发者，你提供的邮箱、问题描述、截图、日志片段或附件只用于理解问题和回复支持请求。", "请不要发送不必要的密码、私钥、身份证件、完整客户资料或其它高度敏感内容。若必须提供截图，请先遮挡无关私人信息。"],
    [`你可以决定是否把内容放入 ${name}，也可以在应用中管理、导出、删除或重置本地记录和偏好。`, "如果不希望某些内容被处理，请不要把它们放入监控路径、文件仓、记录流程、想法记录或手动导入流程中。"],
    ["本应用无法控制操作系统账户、公司设备策略、杀毒软件、备份软件、云盘同步、浏览器扩展或其它第三方工具。", "如果这些工具访问、同步或上传本地文件，请查看对应服务的隐私政策和设置。"],
    ["政策可能随产品功能和文档完善而更新。", "如需联系开发者，请发送邮件至 3371436706@qq.com。"],
  ],
  legalTitles: ["使用许可", "商店规则", "退款和账单", "用户内容和风险", "支持和变更"],
  legalBodies: (name, summary, trial) => [
    [`你获得的是安装和使用 ${name} 的个人、非独占、不可转让许可，不是软件所有权。`, "除非法律允许或开发者书面授权，请勿反向工程、重新分发、转售、移除版权信息或规避商店规则。"],
    [summary, trial, "通过 Microsoft Store 获取或购买产品时，价格、税费、可用性、取消和退款流程以 Microsoft Store 显示和规则为准。"],
    ["退款、取消、账单、付款方式、税费和地区限制通常由 Microsoft Store 的政策和流程处理。", "开发者可以解释产品问题，但不能绕过 Microsoft Store 的订单、支付或退款系统。"],
    ["你保留自己文件、记录、偏好和导入资料的权利，同时应确认自己有权处理、整理、备份或导入相关内容。", "软件按现状提供，不能保证特定结果，也不能替代专业医疗、法律、财务、安全审计或数据恢复建议。"],
    ["功能、价格、试用、市场、语言支持和文档内容可能随版本和商店审核变化。", "如需支持，请联系 3371436706@qq.com。"],
  ],
};

const en: PolicyPack = {
  updated: "Last updated: June 28, 2026",
  back: (name) => `Back to ${name}`,
  contact: "For support, contact the developer at 3371436706@qq.com.",
  privacyTitle: (name) => `${name} Privacy Policy`,
  legalTitle: (name) => `${name} Legal Terms`,
  privacyIntro: (name, topic) => `This document explains how ${name} handles ${topic} on the local device. This privacy policy covers privacy, data processing, local storage, user control, and support communication.`,
  legalIntro: (name) => `This document explains the license, Store rules, user content, limitations, and support for ${name}.`,
  topic: {
    deskhaven: "local files, file indexes, vault data, relationship maps, backups, and preferences",
    energyflow: "energy logs, work state, mood, statistical analysis, and preferences",
    adhd: "focus timing, Idea Fridge content, sound, voice notes, completion feedback, and preferences",
  },
  sensitive: {
    deskhaven: "documents, images, project materials, password files, SSH keys, exports, work materials, and other local content placed in DeskHaven",
    energyflow: "energy state, work mood, stress signals, work habits, time rhythm, and personal notes",
    adhd: "private thoughts, unfinished tasks, voice notes, focus difficulties, emotional state, and temporary notes",
  },
  privacyTitles: ["Local-first", "No upload to developer servers", "Local data types and purpose", "Sensitive content", "Security, backup, and deletion", "Support communication", "Your control", "Third-party boundary", "Contact and updates"],
  privacyBullets: ["No SoloCraft account is required.", "Local file contents are not uploaded to the developer.", "Local indexes, statistics, or relationship maps are not sent to the developer for analysis.", "Your local usage content is not sold, rented, or shared.", "Local content is not used for model training or advertising profiles."],
  privacyBodies: (name, topic, sensitive) => [
    [`${name} is designed around local Windows workflows. Feature-related ${topic} is processed on your device or selected local location by default.`, "Unless you export, copy, back up, send a support email, or use a system or third-party sync tool, the developer does not remotely read this local data."],
    [`${name} does not require an online account for core features and does not upload your local content to the developer as an online profile.`, "If OneDrive, cloud storage, system backup, or company device policy syncs related files, that is the behavior of the system or third-party service you chose, not an upload by this app."],
    [`The app may locally store or generate ${topic}. This supports search, filtering, statistics, review, recovery, automation, active sessions, or preferences.`, "The purpose is to help you find, understand, and manage information on your own device, not to collect more personal data."],
    [`During use, you may handle ${sensitive}. Such content may be private or commercially sensitive and should be treated as important local material.`, "On shared computers, company devices, or unencrypted disks, pay attention to Windows accounts, disk permissions, screen visibility, backups, and folder access."],
    [`${name} may provide local storage, password protection, encryption, backup, restore, or screen-protection features depending on app version, Windows environment, and enabled settings.`, "These protections do not replace a complete device-security plan. Deleted local data may not be recoverable by the developer, so important files, records, and keys should be backed up independently."],
    ["If you contact the developer by email, the address, issue description, screenshots, logs, or attachments you provide are used only to understand and respond to the support request.", "Do not send unnecessary passwords, private keys, identity documents, full customer records, or other highly sensitive content."],
    [`You decide whether to place content into ${name}. You can manage, export, delete, or reset local records and preferences in the app.`, "If you do not want certain content processed, do not place it in monitored paths, vaults, logging flows, idea records, or import workflows."],
    ["The app cannot control operating-system accounts, company device policies, antivirus tools, backup software, cloud-drive sync, browser extensions, or other third-party tools.", "If those tools access, sync, or upload local files, review the corresponding service settings and privacy policy."],
    ["This policy may be updated as product features and documentation improve.", "For support, contact 3371436706@qq.com."],
  ],
  legalTitles: ["License", "Store rules", "Refunds and billing", "User content and risk", "Support and changes"],
  legalBodies: (name, summary, trial) => [
    [`You receive a personal, non-exclusive, non-transferable license to install and use ${name}, not ownership of the software.`, "Do not reverse engineer, redistribute, resell, remove copyright notices, or bypass Store rules unless allowed by law or written permission."],
    [summary, trial, "When obtained or purchased through Microsoft Store, pricing, taxes, availability, cancellation, and refunds follow Microsoft Store listings and rules."],
    ["Refunds, cancellation, billing, payment methods, taxes, and regional restrictions are generally handled by Microsoft Store policies.", "The developer can explain product issues but cannot bypass Microsoft Store orders, payments, or refunds."],
    ["You retain rights to your files, records, preferences, and imported materials, and you are responsible for confirming that you have the right to process, organize, back up, or import the relevant content.", "The software is provided as is and does not replace professional medical, legal, financial, security-audit, or data-recovery advice."],
    ["Features, pricing, trials, markets, language support, and documentation may change with versions and Store review.", "For support, contact 3371436706@qq.com."],
  ],
};

const zhTw: PolicyPack = {
  ...zh,
  updated: "最後更新：2026 年 6 月 28 日",
  contact: "如需聯絡開發者，請發送郵件至 3371436706@qq.com。",
  privacyTitle: (name) => `${name} 隱私政策`,
  legalTitle: (name) => `${name} 法律與使用條款`,
  back: (name) => `返回 ${name}`,
  privacyIntro: (name, topic) => `本文件說明 ${name} 如何在本地設備上處理${topic}。本隱私政策只討論隱私、資料處理、本地儲存、使用者控制權和支援溝通。`,
};

const localized: Record<Locale, PolicyPack> = {
  zh,
  "zh-tw": zhTw,
  en,
  ja: en,
  ko: en,
  fr: en,
  de: en,
  es: en,
  ru: en,
  pt: en,
};

function pack(locale: Locale) {
  return localized[locale] ?? en;
}

function privacySections(product: ProductId, locale: Locale): PolicySection[] {
  const text = pack(locale);
  const name = productNames[product];
  return sections(
    text.privacyTitles,
    text.privacyBodies(name, text.topic[product], text.sensitive[product]),
    text.privacyBullets,
  );
}

function legalSections(product: ProductId, locale: Locale): PolicySection[] {
  const text = pack(locale);
  const name = productNames[product];
  const pricing = productPricing(product, locale);
  return sections(text.legalTitles, text.legalBodies(name, pricing.summary, pricing.trial));
}

export function productPolicyCopy(product: ProductId, kind: PolicyKind, locale: Locale): ProductPolicyCopy {
  const text = pack(locale);
  const name = productNames[product];

  if (kind === "privacy") {
    return {
      title: text.privacyTitle(name),
      intro: text.privacyIntro(name, text.topic[product]),
      updated: text.updated,
      back: text.back(name),
      sections: privacySections(product, locale),
    };
  }

  return {
    title: text.legalTitle(name),
    intro: text.legalIntro(name),
    updated: text.updated,
    back: text.back(name),
    sections: legalSections(product, locale),
  };
}
