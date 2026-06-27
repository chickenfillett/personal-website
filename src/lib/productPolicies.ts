import type { Locale } from "@/lib/i18n/context";
import type { ProductId } from "@/lib/productCommerce";
import { productPricing } from "@/lib/productCommerce";

export type PolicyKind = "privacy" | "legal";

export type PolicySection = {
  title: string;
  body: string;
};

export type ProductPolicyCopy = {
  title: string;
  intro: string;
  updated: string;
  sections: PolicySection[];
  back: string;
};

const productNames: Record<ProductId, string> = {
  energyflow: "EnergyFlow",
  deskhaven: "DeskHaven",
  adhd: "ADHD Focus Timer",
};

function isZh(locale: Locale) {
  return locale === "zh" || locale === "zh-tw";
}

function contact(zh: boolean) {
  return zh ? "如需联系开发者，请发送邮件至 3371436706@qq.com。" : "For support, contact the developer at 3371436706@qq.com.";
}

function storeAuthority(zh: boolean) {
  return zh
    ? "Microsoft Store 页面显示的价格、税费、促销、可用性和退款流程为准。"
    : "Pricing, taxes, promotions, availability, and refund flows are governed by the Microsoft Store listing shown to the customer.";
}

export function productPolicyCopy(product: ProductId, kind: PolicyKind, locale: Locale): ProductPolicyCopy {
  const zh = isZh(locale);
  const name = productNames[product];
  const pricing = productPricing(product, locale);
  const updated = zh ? "最后更新：2026 年 6 月 28 日" : "Last updated: June 28, 2026";

  if (kind === "privacy") {
    if (product === "energyflow") {
      return {
        title: zh ? "EnergyFlow 隐私政策" : "EnergyFlow Privacy Policy",
        intro: zh
          ? "本页面说明 EnergyFlow 如何处理精力记录、工作状态和偏好设置。EnergyFlow 的设计原则是本地优先、少收集、可控制。"
          : "This page explains how EnergyFlow handles energy logs, work context, and preferences. EnergyFlow is designed to be local-first, minimal, and controllable.",
        updated,
        back: zh ? "返回 EnergyFlow" : "Back to EnergyFlow",
        sections: [
          { title: zh ? "本地精力记录" : "Local energy records", body: zh ? "精力等级、工作状态、能量来源、情绪和统计数据默认保存在你的设备上，用于生成趋势、相关性和回顾视图。" : "Energy levels, work state, sources, mood, and statistics are stored on your device by default and used to build trends, correlations, and review views." },
          { title: zh ? "无账户与最少信息" : "No account and minimal information", body: zh ? "EnergyFlow 不要求创建账户，也不需要你向开发者提供姓名、电话或邮箱才能使用核心功能。" : "EnergyFlow does not require an account, and core features do not require you to provide your name, phone number, or email to the developer." },
          { title: zh ? "加密与屏幕保护" : "Encryption and screen protection", body: zh ? "应用面向敏感工作状态设计，包含本地加密存储和防截屏/防录屏相关保护能力，具体可用性取决于应用版本和 Windows 环境。" : "The app is designed for sensitive work-state data and includes local encrypted storage plus anti-capture protections where supported by the app version and Windows environment." },
          { title: zh ? "购买与试用信息" : "Purchase and trial information", body: zh ? `EnergyFlow 是付费应用，试用信息为：${pricing.trial} ${storeAuthority(true)}` : `EnergyFlow is a paid app. Trial information: ${pricing.trial} ${storeAuthority(false)}` },
          { title: zh ? "数据控制" : "Data control", body: zh ? "你可以在应用内管理、导出或删除自己的记录。删除后的本地数据可能无法由开发者恢复。" : "You can manage, export, or delete your records in the app. Deleted local data may not be recoverable by the developer." },
          { title: zh ? "联系" : "Contact", body: contact(zh) },
        ],
      };
    }

    if (product === "deskhaven") {
      return {
        title: zh ? "DeskHaven 隐私政策" : "DeskHaven Privacy Policy",
        intro: zh
          ? "本页面说明 DeskHaven 如何处理本地文件索引、文件仓、关系图谱、备份、凭据相关信息和偏好设置。"
          : "This page explains how DeskHaven handles local file indexes, vault data, relationship maps, backups, credential-related information, and preferences.",
        updated,
        back: zh ? "返回 DeskHaven" : "Back to DeskHaven",
        sections: [
          { title: zh ? "本地优先" : "Local-first handling", body: zh ? "DeskHaven 面向本地 Windows 文件整理。文件索引、元数据、关系信息和设置默认以本地工作空间为中心处理。" : "DeskHaven is built for organizing local Windows files. File indexes, metadata, relationships, and settings are centered around a local workspace by default." },
          { title: zh ? "文件与敏感内容" : "Files and sensitive content", body: zh ? "如果你选择把文档、图片、密码、SSH 密钥或其他敏感内容交给 DeskHaven 管理，请确保设备账户、系统权限和备份位置同样安全。" : "If you choose to manage documents, images, passwords, SSH keys, or other sensitive content with DeskHaven, keep your device account, system permissions, and backup location secure as well." },
          { title: zh ? "备份、加密和恢复" : "Backup, encryption, and recovery", body: zh ? "DeskHaven 提供备份、恢复、加密和密钥相关控制入口。具体保护范围取决于你启用的功能、应用版本和保存位置。" : "DeskHaven provides controls for backup, restore, encryption, and key-related workflows. The protection scope depends on the features you enable, app version, and storage location." },
          { title: zh ? "购买与试用信息" : "Purchase and trial information", body: zh ? `DeskHaven 是付费应用，试用信息为：${pricing.trial} ${storeAuthority(true)}` : `DeskHaven is a paid app. Trial information: ${pricing.trial} ${storeAuthority(false)}` },
          { title: zh ? "不会出售个人数据" : "No sale of personal data", body: zh ? "SoloCraft 不会出售你的个人文件、索引或使用内容。支持沟通中你主动提供的信息仅用于回复问题。" : "SoloCraft does not sell your personal files, indexes, or usage content. Information you voluntarily provide for support is used to respond to your request." },
          { title: zh ? "联系" : "Contact", body: contact(zh) },
        ],
      };
    }

    return {
      title: zh ? "ADHD Focus Timer 隐私政策" : "ADHD Focus Timer Privacy Policy",
      intro: zh
        ? "本页面说明 ADHD Focus Timer 如何处理专注计时、想法冰箱、声音和偏好设置。应用目标是降低专注阻力，而不是收集更多数据。"
        : "This page explains how ADHD Focus Timer handles focus sessions, Idea Fridge content, sound settings, and preferences. The goal is to reduce focus friction, not collect more data.",
      updated,
      back: zh ? "返回 ADHD Focus Timer" : "Back to ADHD Focus Timer",
      sections: [
        { title: zh ? "本地专注记录" : "Local focus records", body: zh ? "专注时长、完成反馈、想法冰箱内容和偏好设置默认留在设备本地，用于继续当前体验。" : "Focus duration, completion feedback, Idea Fridge content, and preferences remain local by default and support the current experience." },
        { title: zh ? "无需账户" : "No account required", body: zh ? "核心功能不要求账户、登录、邮箱或手机号。你可以安装后直接使用。" : "Core features do not require an account, login, email address, or phone number. You can install and start using the app directly." },
        { title: zh ? "免费使用" : "Free use", body: zh ? `ADHD Focus Timer 当前免费提供。${storeAuthority(true)}` : `ADHD Focus Timer is currently free. ${storeAuthority(false)}` },
        { title: zh ? "想法冰箱内容" : "Idea Fridge content", body: zh ? "想法冰箱可能包含私人想法、任务或语音记录。请在共享设备上谨慎使用，并按需清理不再需要的内容。" : "Idea Fridge may contain private thoughts, tasks, or recordings. Use it carefully on shared devices and delete content you no longer need." },
        { title: zh ? "联系" : "Contact", body: contact(zh) },
      ],
    };
  }

  return {
    title: zh ? `${name} 法律与使用条款` : `${name} Legal Terms`,
    intro: zh
      ? `这些条款说明 ${name} 的使用许可、购买与试用、退款路径、用户内容和支持方式。`
      : `These terms explain the license, purchase and trial path, refunds, user content, and support for ${name}.`,
    updated,
    back: zh ? `返回 ${name}` : `Back to ${name}`,
    sections: [
      { title: zh ? "使用许可" : "License", body: zh ? "你获得的是安装和使用本软件的个人许可，而不是软件所有权转让。请勿反向工程、重新分发、转售或以破坏服务、侵犯他人权利的方式使用。" : "You receive a personal license to install and use the software, not ownership of the software itself. Do not reverse engineer, redistribute, resell, or use it to harm services or violate others' rights." },
      { title: zh ? "价格、试用与商店规则" : "Pricing, trial, and Store rules", body: zh ? `${pricing.summary} ${pricing.trial} ${storeAuthority(true)}` : `${pricing.summary} ${pricing.trial} ${storeAuthority(false)}` },
      { title: zh ? "退款" : "Refunds", body: zh ? "通过 Microsoft Store 获取或购买的产品，退款、取消、账单和地区限制通常由 Microsoft Store 规则处理。开发者可以协助解释产品问题，但不能绕过商店的支付和退款系统。" : "For products obtained or purchased through Microsoft Store, refunds, cancellation, billing, and regional restrictions are generally handled by Microsoft Store rules. The developer can help explain product issues but cannot bypass the Store payment and refund system." },
      { title: zh ? "用户内容归属" : "User content ownership", body: zh ? "你保留自己文件、专注记录、精力记录和其他用户内容的权利。软件只在功能需要范围内处理这些内容。" : "You retain rights to your files, focus records, energy logs, and other user content. The software processes that content only as needed for its features." },
      { title: zh ? "免责声明" : "Disclaimer", body: zh ? "本软件按当前状态提供。它可以帮助整理、记录和辅助专注，但不能替代专业医疗、法律、财务或安全审计建议。请自行备份重要数据。" : "The software is provided as is. It can help organize, record, and support focus, but it is not a substitute for professional medical, legal, financial, or security advice. Keep your own backups of important data." },
      { title: zh ? "支持与变更" : "Support and changes", body: zh ? `功能、价格、试用和可用市场可能随版本和 Microsoft Store 审核结果调整。${contact(true)}` : `Features, pricing, trial terms, and markets may change with app versions and Microsoft Store review results. ${contact(false)}` },
    ],
  };
}
