import type { Locale } from "@/lib/i18n/context";
import type { ProductId } from "@/lib/productCommerce";
import { productPricing } from "@/lib/productCommerce";
import { productPolicyCopy as baseProductPolicyCopy, type PolicyKind, type PolicySection, type ProductPolicyCopy } from "./productPoliciesRuntime";

export type { PolicyKind, PolicySection, ProductPolicyCopy };

const names: Record<ProductId, string> = { energyflow: "EnergyFlow", deskhaven: "DeskHaven", adhd: "ADHD Focus Timer" };

type Pack = {
  updated: string;
  back: (name: string) => string;
  privacyTitle: (name: string) => string;
  legalTitle: (name: string) => string;
  contact: string;
  subject: Record<ProductId, string>;
  sensitive: Record<ProductId, string>;
  privacyIntro: (name: string, subject: string) => string;
  privacySections: (name: string, subject: string, sensitive: string) => PolicySection[];
  legalIntro: (name: string) => string;
  legalSections: (name: string, summary: string, trial: string) => PolicySection[];
};

const packs: Record<Locale, Pack> = {
  zh: {
    updated: "最后更新：2026 年 6 月 28 日", back: (n) => `返回 ${n}`, privacyTitle: (n) => `${n} 隐私政策`, legalTitle: (n) => `${n} 法律与使用条款`, contact: "如需联系开发者，请发送邮件至 3371436706@qq.com。",
    subject: { deskhaven: "本地文件、文件索引、文件仓、关系图谱、备份和偏好设置", energyflow: "精力记录、工作状态、情绪、统计分析和偏好设置", adhd: "专注计时、想法冰箱、声音、语音记录、完成反馈和偏好设置" },
    sensitive: { deskhaven: "文档、图片、项目资料、密码文件、SSH 密钥、导出文件、工作资料以及你主动放入 DeskHaven 的本地内容", energyflow: "精力状态、工作情绪、压力感受、工作习惯、时间节奏和个人备注", adhd: "私人想法、未完成任务、语音记录、专注困难、情绪状态和临时笔记" },
    privacyIntro: (n, s) => `本文件说明 ${n} 如何在本地设备上处理${s}。本隐私政策只讨论隐私、数据处理、本地存储和用户控制权，不包含价格、试用、账单或退款内容。`,
    privacySections: (n, s, m) => [
      { title: "本地优先和无云端依赖", body: [`${n} 围绕本地 Windows 工作流设计。与功能相关的${s}默认在你的设备或你选择的本地位置处理。`, "应用不要求 SoloCraft 在线账户，不提供把你的本地内容同步到开发者服务器的云端服务，也不会把本地数据作为在线个人档案保存。"] , bullets: ["不要求注册 SoloCraft 账户。", "不上传本地文件内容给开发者。", "不发送本地索引、统计或关系图谱给开发者分析。", "不出售、出租或共享你的本地使用内容。", "不使用本地内容训练模型或建立广告画像。"]},
      { title: "本地数据类型和用途", body: [`应用可能在本地保存或生成${s}。这些资料用于搜索、筛选、统计、回顾、恢复、自动整理、完成当前会话或保持你的偏好设置。`, "处理这些资料的目的，是让你在自己的设备上更容易找回、理解和管理信息，而不是收集更多个人资料。"] },
      { title: "敏感内容和设备责任", body: [`你可能在使用过程中处理${m}。这些内容可能具有私人性或商业敏感性，应当被视为重要本地资料。`, "在共享电脑、公司设备或未加密磁盘上使用时，请额外注意 Windows 账户、磁盘权限、屏幕可见性、系统备份和文件夹访问权限。"] },
      { title: "安全、加密、备份和删除", body: [`${n} 可能提供本地保存、密码保护、加密、备份、恢复或防窥能力，实际范围取决于应用版本、Windows 环境和你启用的设置。`, "这些保护不能替代完整的设备安全方案。删除后的本地数据可能无法由开发者恢复，因此重要文件、记录和密钥应由你自行维护备份。"] },
      { title: "支持沟通中的信息", body: ["如果你主动通过邮件联系开发者，你提供的邮箱、问题描述、截图、日志片段或附件只用于理解问题和回复支持请求。", "请不要发送不必要的密码、私钥、身份证件、完整客户资料或其它高度敏感内容。若必须提供截图，请先遮挡无关私人信息。"] },
      { title: "你的控制权和第三方边界", body: [`你可以决定是否把内容放入 ${n}，也可以在应用中管理、导出、删除或重置本地记录和偏好。`, "本应用无法控制操作系统账户、公司设备策略、杀毒软件、备份软件、云盘同步、浏览器扩展或其它第三方工具。如果这些工具访问、同步或上传本地文件，请查看对应服务的隐私政策和设置。"] },
      { title: "联系和政策更新", body: ["政策可能随产品功能和文档完善而更新。", "如需联系开发者，请发送邮件至 3371436706@qq.com。"] },
    ],
    legalIntro: (n) => `本文件说明 ${n} 的使用许可、商店规则、用户内容、责任限制和支持方式。`,
    legalSections: (n, summary, trial) => [
      { title: "使用许可", body: [`你获得的是安装和使用 ${n} 的个人、非独占、不可转让许可，不是软件所有权。`, "除非法律允许或开发者书面授权，请勿反向工程、重新分发、转售、移除版权信息或规避商店规则。"] },
      { title: "商店规则", body: [summary, trial, "通过 Microsoft Store 获取或购买产品时，价格、税费、可用性、取消和退款流程以 Microsoft Store 显示和规则为准。"] },
      { title: "退款和账单", body: ["退款、取消、账单、付款方式、税费和地区限制通常由 Microsoft Store 的政策和流程处理。", "开发者可以解释产品问题，但不能绕过 Microsoft Store 的订单、支付或退款系统。"] },
      { title: "用户内容和风险", body: ["你保留自己文件、记录、偏好和导入资料的权利，同时应确认自己有权处理、整理、备份或导入相关内容。", "软件按现状提供，不能保证特定结果，也不能替代专业医疗、法律、财务、安全审计或数据恢复建议。"] },
      { title: "支持和变更", body: ["功能、价格、试用、市场、语言支持和文档内容可能随版本和商店审核变化。", "如需支持，请联系 3371436706@qq.com。"] },
    ],
  },
  "zh-tw": undefined as never, en: undefined as never, ja: undefined as never, ko: undefined as never, fr: undefined as never, de: undefined as never, es: undefined as never, ru: undefined as never, pt: undefined as never,
};

packs["zh-tw"] = { ...packs.zh, updated: "最後更新：2026 年 6 月 28 日", privacyTitle: (n) => `${n} 隱私政策`, legalTitle: (n) => `${n} 法律與使用條款`, contact: "如需聯絡開發者，請發送郵件至 3371436706@qq.com。", privacyIntro: (n, s) => `本文件說明 ${n} 如何在本地設備上處理${s}。本隱私政策只討論隱私、資料處理、本地儲存和使用者控制權，不包含價格、試用、帳單或退款內容。` };

packs.en = { ...packs.zh, updated: "Last updated: June 28, 2026", back: (n) => `Back to ${n}`, privacyTitle: (n) => `${n} Privacy Policy`, legalTitle: (n) => `${n} Legal Terms`, contact: "For support, contact the developer at 3371436706@qq.com.", subject: { deskhaven: "local files, file indexes, vault data, relationship maps, backups, and preferences", energyflow: "energy logs, work state, mood, statistical analysis, and preferences", adhd: "focus timing, Idea Fridge content, sound, voice notes, completion feedback, and preferences" }, sensitive: { deskhaven: "documents, images, project materials, password files, SSH keys, exports, work materials, and other local content placed in DeskHaven", energyflow: "energy state, work mood, stress signals, work habits, time rhythm, and personal notes", adhd: "private thoughts, unfinished tasks, voice notes, focus difficulties, emotional state, and temporary notes" }, privacyIntro: (n, s) => `This document explains how ${n} handles ${s} on the local device. This privacy policy covers privacy, data processing, local storage, and user control only; it does not cover pricing, trials, billing, or refunds.`, privacySections: (n, s, m) => [ { title: "Local-first and no cloud dependency", body: [`${n} is designed around local Windows workflows. Feature-related ${s} is processed on your device or selected local location by default.`, "The app does not require a SoloCraft online account, does not provide a cloud service that syncs your local content to developer servers, and does not store local data as an online profile."], bullets: ["No SoloCraft account is required.", "Local file contents are not uploaded to the developer.", "Local indexes, statistics, or relationship maps are not sent to the developer for analysis.", "Your local usage content is not sold, rented, or shared.", "Local content is not used for model training or advertising profiles."] }, { title: "Local data types and purpose", body: [`The app may locally store or generate ${s}. This supports search, filtering, statistics, review, recovery, automation, active sessions, or preferences.`, "The purpose is to help you find, understand, and manage information on your own device, not to collect more personal data."] }, { title: "Sensitive content and device responsibility", body: [`During use, you may handle ${m}. Such content may be private or commercially sensitive and should be treated as important local material.`, "On shared computers, company devices, or unencrypted disks, pay attention to Windows accounts, disk permissions, screen visibility, backups, and folder access."] }, { title: "Security, encryption, backup, and deletion", body: [`${n} may provide local storage, password protection, encryption, backup, restore, or screen-protection features depending on app version, Windows environment, and enabled settings.`, "These protections do not replace a complete device-security plan. Deleted local data may not be recoverable by the developer, so important files, records, and keys should be backed up independently."] }, { title: "Support communication", body: ["If you contact the developer by email, the address, issue description, screenshots, logs, or attachments you provide are used only to understand and respond to the support request.", "Do not send unnecessary passwords, private keys, identity documents, full customer records, or other highly sensitive content."] }, { title: "Your control and third-party boundary", body: [`You decide whether to place content into ${n}. You can manage, export, delete, or reset local records and preferences in the app.`, "The app cannot control operating-system accounts, company device policies, antivirus tools, backup software, cloud-drive sync, browser extensions, or other third-party tools. Review those services separately if they access or sync local files."] }, { title: "Contact and updates", body: ["This policy may be updated as product features and documentation improve.", "For support, contact 3371436706@qq.com."] } ], legalIntro: (n) => `This document explains the license, Store rules, user content, limitations, and support for ${n}.`, legalSections: (n, summary, trial) => [ { title: "License", body: [`You receive a personal, non-exclusive, non-transferable license to install and use ${n}, not ownership of the software.`, "Do not reverse engineer, redistribute, resell, remove copyright notices, or bypass Store rules unless allowed by law or written permission."] }, { title: "Store rules", body: [summary, trial, "When obtained or purchased through Microsoft Store, pricing, taxes, availability, cancellation, and refunds follow Microsoft Store listings and rules."] }, { title: "Refunds and billing", body: ["Refunds, cancellation, billing, payment methods, taxes, and regional restrictions are generally handled by Microsoft Store policies.", "The developer can explain product issues but cannot bypass Microsoft Store orders, payments, or refunds."] }, { title: "User content and risk", body: ["You retain rights to your files, records, preferences, and imported materials, and you are responsible for confirming that you have the right to process, organize, back up, or import the relevant content.", "The software is provided as is and does not replace professional medical, legal, financial, security-audit, or data-recovery advice."] }, { title: "Support and changes", body: ["Features, pricing, trials, markets, language support, and documentation may change with versions and Store review.", "For support, contact 3371436706@qq.com."] } ] };

for (const code of ["ja", "ko", "fr", "de", "es", "ru", "pt"] as const) packs[code] = packs.en;

function policy(locale: Locale) { return packs[locale] ?? packs.en; }

export function productPolicyCopy(product: ProductId, kind: PolicyKind, locale: Locale): ProductPolicyCopy {
  const p = policy(locale);
  const n = names[product];
  const base = baseProductPolicyCopy(product, kind, locale);
  if (kind === "privacy") return { ...base, title: p.privacyTitle(n), intro: p.privacyIntro(n, p.subject[product]), back: p.back(n), sections: p.privacySections(n, p.subject[product], p.sensitive[product]) };
  const pricing = productPricing(product, locale);
  return { ...base, title: p.legalTitle(n), intro: p.legalIntro(n), back: p.back(n), sections: p.legalSections(n, pricing.summary, pricing.trial) };
}
