import type { Locale } from "@/lib/i18n/context";
import type { ProductId } from "@/lib/productCommerce";
import { productPricing } from "@/lib/productCommerce";

export type PolicyKind = "privacy" | "legal";

export type PolicySection = {
  title: string;
  body: string | readonly string[];
  bullets?: readonly string[];
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

function updated(locale: Locale) {
  if (locale === "zh-tw") return "最後更新：2026 年 6 月 28 日";
  if (locale === "zh") return "最后更新：2026 年 6 月 28 日";
  return "Last updated: June 28, 2026";
}

function backLabel(name: string, locale: Locale) {
  if (locale === "zh-tw") return `返回 ${name}`;
  if (locale === "zh") return `返回 ${name}`;
  return `Back to ${name}`;
}

function contact(locale: Locale) {
  if (locale === "zh-tw") return "如需聯絡開發者，請發送郵件至 3371436706@qq.com。";
  if (locale === "zh") return "如需联系开发者，请发送邮件至 3371436706@qq.com。";
  return "For support, contact the developer at 3371436706@qq.com.";
}

function storeAuthority(locale: Locale) {
  if (locale === "zh-tw") return "透過 Microsoft Store 取得或購買產品時，價格、稅費、促銷、可用性、取消和退款流程以使用者所在地區的 Microsoft Store 顯示與規則為準。";
  if (locale === "zh") return "通过 Microsoft Store 获取或购买产品时，价格、税费、促销、可用性、取消和退款流程以用户所在地区的 Microsoft Store 显示与规则为准。";
  return "When a product is obtained or purchased through Microsoft Store, pricing, taxes, promotions, availability, cancellation, and refund flows are governed by the Microsoft Store listing and rules shown in the customer’s region.";
}

function sharedLegalSections(name: string, product: ProductId, locale: Locale): PolicySection[] {
  const zh = isZh(locale);
  const pricing = productPricing(product, locale);

  if (zh) {
    const tw = locale === "zh-tw";
    return [
      {
        title: tw ? "使用許可" : "使用许可",
        body: [
          `你取得的是安裝和使用 ${name} 的個人、非獨占、不可轉讓許可，而不是軟體本身的所有權轉讓。` ,
          "除非法律明確允許或開發者書面授權，請勿反向工程、破解、重新分發、轉售、租賃、移除版權資訊，或以侵犯他人權利、破壞系統安全、規避商店規則的方式使用本軟體。",
        ].map((s) => tw ? s : s.replace(/你取得的是/g, "你获得的是").replace(/軟體/g, "软件").replace(/開發者/g, "开发者").replace(/資訊/g, "信息").replace(/規避/g, "规避")),
      },
      {
        title: tw ? "價格、試用與商店規則" : "价格、试用与商店规则",
        body: [
          pricing.summary,
          pricing.trial,
          storeAuthority(locale),
        ],
      },
      {
        title: tw ? "退款、取消和帳單" : "退款、取消和账单",
        body: [
          tw ? "如果你透過 Microsoft Store 購買或取得本產品，退款、取消、帳單、付款方式、稅費和地區限制通常由 Microsoft Store 的政策和流程處理。" : "如果你通过 Microsoft Store 购买或获取本产品，退款、取消、账单、付款方式、税费和地区限制通常由 Microsoft Store 的政策和流程处理。",
          tw ? "開發者可以協助排查產品問題、說明產品功能和提供支援資訊，但不能繞過 Microsoft Store 的支付、訂單、退款或地區審核系統。" : "开发者可以协助排查产品问题、说明产品功能和提供支持信息，但不能绕过 Microsoft Store 的支付、订单、退款或地区审核系统。",
        ],
      },
      {
        title: tw ? "使用者內容與資料所有權" : "用户内容与数据所有权",
        body: [
          tw ? "你保留自己文件、精力記錄、專注記錄、偏好設定、匯入資料和其他使用者內容的權利。軟體只在實現功能所需的範圍內於本地處理這些內容。" : "你保留自己文件、精力记录、专注记录、偏好设置、导入资料和其他用户内容的权利。软件只在实现功能所需的范围内于本地处理这些内容。",
          tw ? "你應自行確認有權處理、整理、備份或匯入相關文件和內容。請勿使用本軟體管理你沒有權限處理的第三方資料。" : "你应自行确认有权处理、整理、备份或导入相关文件和内容。请勿使用本软件管理你没有权限处理的第三方资料。",
        ],
      },
      {
        title: tw ? "使用風險與備份責任" : "使用风险与备份责任",
        body: [
          tw ? "本軟體按現狀提供。它可以幫助整理文件、記錄狀態或輔助專注，但不能保證任何特定結果，也不能替代專業醫療、法律、財務、安全審計或資料恢復建議。" : "本软件按现状提供。它可以帮助整理文件、记录状态或辅助专注，但不能保证任何特定结果，也不能替代专业医疗、法律、财务、安全审计或数据恢复建议。",
          tw ? "對於重要文件、憑據、密鑰、工作資料或個人記錄，請保持你自己的系統備份與恢復方案。任何本地刪除、覆蓋、磁碟故障、系統權限錯誤或使用者操作造成的損失，開發者可能無法恢復。" : "对于重要文件、凭据、密钥、工作资料或个人记录，请保持你自己的系统备份与恢复方案。任何本地删除、覆盖、磁盘故障、系统权限错误或用户操作造成的损失，开发者可能无法恢复。",
        ],
      },
      {
        title: tw ? "支援、更新與條款變更" : "支持、更新与条款变更",
        body: [
          tw ? "功能、價格、試用、可用市場、語言支援和文件內容可能會隨應用版本、Microsoft Store 審核結果和產品策略調整。" : "功能、价格、试用、可用市场、语言支持和文档内容可能会随应用版本、Microsoft Store 审核结果和产品策略调整。",
          contact(locale),
        ],
      },
    ];
  }

  return [
    { title: "License", body: [`You receive a personal, non-exclusive, non-transferable license to install and use ${name}. You do not receive ownership of the software itself.`, "Do not reverse engineer, crack, redistribute, resell, rent, remove copyright notices, violate third-party rights, compromise system security, or bypass Store rules unless such action is expressly allowed by law or by written permission from the developer."] },
    { title: "Pricing, trial, and Store rules", body: [pricing.summary, pricing.trial, storeAuthority(locale)] },
    { title: "Refunds, cancellation, and billing", body: ["For products obtained or purchased through Microsoft Store, refunds, cancellation, billing, payment methods, taxes, and regional restrictions are generally handled by Microsoft Store policies and workflows.", "The developer can help investigate product issues, explain app behavior, and provide support information, but cannot bypass Microsoft Store payment, order, refund, or regional review systems."] },
    { title: "User content and data ownership", body: ["You retain rights to your files, energy logs, focus records, preferences, imported materials, and other user content. The software processes such content locally only to the extent needed for the relevant feature.", "You are responsible for confirming that you have the right to process, organize, back up, or import the files and content you use with the software. Do not use the software to manage third-party data you are not authorized to handle."] },
    { title: "Risk, backups, and professional advice", body: ["The software is provided as is. It can help organize files, record state, or support focus, but it does not guarantee a particular outcome and is not a substitute for professional medical, legal, financial, security-audit, or data-recovery advice.", "For important files, credentials, keys, work materials, or personal records, keep your own system-level backup and recovery plan. The developer may not be able to recover data lost through local deletion, overwrite, disk failure, permission errors, or user action."] },
    { title: "Support, updates, and changes", body: ["Features, pricing, trial terms, available markets, language support, and documentation may change with app versions, Microsoft Store review results, and product strategy.", contact(locale)] },
  ];
}

function deskHavenPrivacy(locale: Locale): ProductPolicyCopy {
  const zh = isZh(locale);
  const tw = locale === "zh-tw";

  if (zh) {
    return {
      title: tw ? "DeskHaven 隱私政策" : "DeskHaven 隐私政策",
      intro: tw
        ? "DeskHaven 是本地優先的 Windows 桌面文件整理工具。本政策以正式文件形式說明：DeskHaven 如何在本機處理文件索引、文件倉、關係圖譜、備份、搜尋資料、憑據相關資訊和偏好設定。"
        : "DeskHaven 是本地优先的 Windows 桌面文件整理工具。本政策以正式文档形式说明：DeskHaven 如何在本机处理文件索引、文件仓、关系图谱、备份、搜索资料、凭据相关信息和偏好设置。",
      updated: updated(locale),
      back: backLabel("DeskHaven", locale),
      sections: [
        {
          title: tw ? "核心原則：完全本地，不依賴線上服務" : "核心原则：完全本地，不依赖在线服务",
          body: [
            tw ? "DeskHaven 的核心功能圍繞本地 Windows 文件工作流設計。文件索引、文件倉、搜尋資料、關係圖譜、備份記錄、設定和偏好資料均以使用者本機環境為中心處理。" : "DeskHaven 的核心功能围绕本地 Windows 文件工作流设计。文件索引、文件仓、搜索资料、关系图谱、备份记录、设置和偏好数据均以用户本机环境为中心处理。",
            tw ? "DeskHaven 不提供雲端同步服務，不要求線上帳戶，不會把你的本地文件上傳到開發者伺服器，也不會把文件內容、索引資料或關係圖譜傳送給開發者進行分析。" : "DeskHaven 不提供云端同步服务，不要求在线账户，不会把你的本地文件上传到开发者服务器，也不会把文件内容、索引数据或关系图谱发送给开发者进行分析。",
          ],
          bullets: tw
            ? ["不要求註冊帳戶。", "不提供雲端同步。", "不把本地文件上傳給開發者。", "不將文件索引或關係圖譜發送給開發者。", "不出售、出租或共享你的本地文件內容。"]
            : ["不要求注册账户。", "不提供云端同步。", "不把本地文件上传给开发者。", "不将文件索引或关系图谱发送给开发者。", "不出售、出租或共享你的本地文件内容。"],
        },
        {
          title: tw ? "本地文件索引與元資料" : "本地文件索引与元数据",
          body: [
            tw ? "為了讓你更快搜尋、分類和找回文件，DeskHaven 可能會在本機建立文件索引。索引可能包含文件名稱、路徑、類型、大小、修改時間、標籤、分類、摘要狀態、歸檔狀態和其他為整理功能所需的本地元資料。" : "为了让你更快搜索、分类和找回文件，DeskHaven 可能会在本机建立文件索引。索引可能包含文件名称、路径、类型、大小、修改时间、标签、分类、摘要状态、归档状态和其他为整理功能所需的本地元数据。",
            tw ? "這些索引資料用於應用內的搜尋、儀表盤、文件倉、關係圖譜和自動化整理功能。它們不是線上個人檔案，也不會被開發者遠端讀取。" : "这些索引数据用于应用内的搜索、仪表盘、文件仓、关系图谱和自动化整理功能。它们不是在线个人档案，也不会被开发者远程读取。",
          ],
        },
        {
          title: tw ? "文件內容、密碼、SSH 金鑰與敏感資料" : "文件内容、密码、SSH 密钥与敏感资料",
          body: [
            tw ? "DeskHaven 可以用於管理文檔、圖片、專案資料、匯出文件、密碼文件、SSH 金鑰或其他敏感資料。這些內容仍然屬於你，並保留在你選擇的本地位置或應用本地工作區中。" : "DeskHaven 可以用于管理文档、图片、项目资料、导出文件、密码文件、SSH 密钥或其他敏感资料。这些内容仍然属于你，并保留在你选择的本地位置或应用本地工作区中。",
            tw ? "如果你把高度敏感的文件放入 DeskHaven，請同時保護好 Windows 帳戶、磁碟、備份目錄、系統權限和設備實體安全。任何能登入你設備並取得相應系統權限的人，都可能看到本地文件或應用資料。" : "如果你把高度敏感的文件放入 DeskHaven，请同时保护好 Windows 账户、磁盘、备份目录、系统权限和设备实体安全。任何能登录你设备并取得相应系统权限的人，都可能看到本地文件或应用数据。",
          ],
        },
        {
          title: tw ? "關係圖譜、搜尋和自動化整理" : "关系图谱、搜索和自动化整理",
          body: [
            tw ? "關係圖譜用於在本地呈現文件、標籤、主題、專案、資料夾和其他內容之間的連接。搜尋和自動化整理功能也在本地工作流中使用索引資料，以幫助你定位內容、清理桌面和建立秩序。" : "关系图谱用于在本地呈现文件、标签、主题、项目、文件夹和其他内容之间的连接。搜索和自动化整理功能也在本地工作流中使用索引数据，以帮助你定位内容、清理桌面和建立秩序。",
            tw ? "這些功能不意味著 DeskHaven 會把你的文件關係、主題或搜尋歷史上傳到網路。它們是本地體驗的一部分。" : "这些功能不意味着 DeskHaven 会把你的文件关系、主题或搜索历史上传到网络。它们是本地体验的一部分。",
          ],
        },
        {
          title: tw ? "備份、恢復與加密" : "备份、恢复与加密",
          body: [
            tw ? "DeskHaven 可能提供備份、恢復、匯入、匯出、加密或密鑰相關功能。這些功能的保護範圍取決於你啟用的具體選項、應用版本、Windows 權限和你選擇的保存位置。" : "DeskHaven 可能提供备份、恢复、导入、导出、加密或密钥相关功能。这些功能的保护范围取决于你启用的具体选项、应用版本、Windows 权限和你选择的保存位置。",
            tw ? "加密功能可以降低未授權讀取風險，但不能替代完整的設備安全方案。請妥善保管密鑰、密碼和備份位置；如果密鑰或備份被刪除、覆蓋或遺失，開發者通常無法恢復你的本地資料。" : "加密功能可以降低未授权读取风险，但不能替代完整的设备安全方案。请妥善保管密钥、密码和备份位置；如果密钥或备份被删除、覆盖或遗失，开发者通常无法恢复你的本地数据。",
          ],
        },
        {
          title: tw ? "不收集、不出售、不共享本地文件內容" : "不收集、不出售、不共享本地文件内容",
          body: [
            tw ? "SoloCraft 不會出售你的個人文件、文件索引、關係圖譜、密碼、SSH 金鑰、搜尋記錄或使用內容。" : "SoloCraft 不会出售你的个人文件、文件索引、关系图谱、密码、SSH 密钥、搜索记录或使用内容。",
            tw ? "如果你主動透過郵件與開發者聯絡，你提供的郵件地址、問題描述、截圖或日誌片段只會用於回覆支援請求。請不要在支援郵件中發送不必要的密碼、私鑰、身份證件或其他高度敏感內容。" : "如果你主动通过邮件与开发者联系，你提供的邮件地址、问题描述、截图或日志片段只会用于回复支持请求。请不要在支持邮件中发送不必要的密码、私钥、身份证件或其他高度敏感内容。",
          ],
        },
        {
          title: tw ? "購買、試用和 Microsoft Store" : "购买、试用和 Microsoft Store",
          body: [
            productPricing("deskhaven", locale).summary,
            productPricing("deskhaven", locale).trial,
            storeAuthority(locale),
            tw ? "Microsoft Store 可能處理購買、付款、稅費、地區價格、退款和商店帳戶資訊。這些流程由 Microsoft 的商店條款和隱私政策管理，不代表 DeskHaven 會取得你的完整付款資料。" : "Microsoft Store 可能处理购买、付款、税费、地区价格、退款和商店账户信息。这些流程由 Microsoft 的商店条款和隐私政策管理，不代表 DeskHaven 会取得你的完整付款资料。",
          ],
        },
        {
          title: tw ? "你的控制權" : "你的控制权",
          body: [
            tw ? "你可以在應用中管理文件、索引、標籤、備份、偏好設定和其他本地資料。你也可以刪除不再需要的本地內容。刪除後的資料可能無法由開發者恢復。" : "你可以在应用中管理文件、索引、标签、备份、偏好设置和其他本地数据。你也可以删除不再需要的本地内容。删除后的数据可能无法由开发者恢复。",
            tw ? "如果你不希望某些文件被 DeskHaven 納入整理範圍，請不要把它們放入應用監控路徑、文件倉或手動匯入流程中。" : "如果你不希望某些文件被 DeskHaven 纳入整理范围，请不要把它们放入应用监控路径、文件仓或手动导入流程中。",
          ],
        },
        { title: tw ? "聯絡" : "联系", body: contact(locale) },
      ],
    };
  }

  return {
    title: "DeskHaven Privacy Policy",
    intro: "DeskHaven is a local-first Windows desktop file organization tool. This document explains how DeskHaven handles local file indexes, vault data, relationship maps, backups, search data, credential-related information, and preferences.",
    updated: updated(locale),
    back: backLabel("DeskHaven", locale),
    sections: [
      { title: "Core principle: local app, no online dependency", body: ["DeskHaven’s core features are designed around local Windows file workflows. File indexes, vault data, search data, relationship maps, backup records, settings, and preferences are processed around the user’s local environment.", "DeskHaven does not provide cloud sync, does not require an online account, does not upload your local files to developer servers, and does not send file contents, index data, or relationship maps to the developer for analysis."], bullets: ["No account is required.", "No cloud synchronization is provided.", "Local files are not uploaded to the developer.", "File indexes and relationship maps are not sent to the developer.", "Your local file contents are not sold, rented, or shared."] },
      { title: "Local file indexes and metadata", body: ["To help you search, classify, and recover files faster, DeskHaven may create local indexes. These indexes may include file name, path, type, size, modified time, tags, categories, summary state, archive state, and other local metadata needed for organization features.", "This data is used inside the app for search, dashboards, vaults, relationship maps, and background organization. It is not an online profile and is not remotely read by the developer."] },
      { title: "File contents, passwords, SSH keys, and sensitive material", body: ["DeskHaven may be used to manage documents, images, project materials, exported files, password files, SSH keys, or other sensitive material. These contents remain yours and stay in the local location or local app workspace you choose.", "If you place highly sensitive files in DeskHaven, also protect your Windows account, disk, backup folder, system permissions, and physical device. Anyone who can access your device with sufficient system permissions may be able to access local files or app data."] },
      { title: "Relationship maps, search, and automation", body: ["Relationship maps display connections between files, tags, topics, projects, folders, and other content locally. Search and automation also use local index data to help you locate content, clean up your desktop, and build order.", "These features do not mean DeskHaven uploads your file relationships, topics, or search history to the internet. They are part of the local experience."] },
      { title: "Backup, recovery, and encryption", body: ["DeskHaven may provide backup, restore, import, export, encryption, and key-related workflows. The scope of protection depends on the options you enable, the app version, Windows permissions, and the storage location you choose.", "Encryption can reduce unauthorized reading risk, but it is not a complete device-security strategy by itself. Keep keys, passwords, and backup locations safe. If keys or backups are deleted, overwritten, or lost, the developer usually cannot recover your local data."] },
      { title: "No collection, sale, or sharing of local file contents", body: ["SoloCraft does not sell your personal files, file indexes, relationship maps, passwords, SSH keys, search history, or usage content.", "If you contact the developer by email, the email address, issue description, screenshots, or log excerpts you voluntarily provide are used only to respond to the support request. Do not send unnecessary passwords, private keys, identity documents, or other highly sensitive content in support emails."] },
      { title: "Purchase, trial, and Microsoft Store", body: [productPricing("deskhaven", locale).summary, productPricing("deskhaven", locale).trial, storeAuthority(locale), "Microsoft Store may process purchases, payments, taxes, regional prices, refunds, and Store account information. Those workflows are governed by Microsoft’s Store terms and privacy policy and do not mean DeskHaven receives your full payment details."] },
      { title: "Your control", body: ["You can manage files, indexes, tags, backups, preferences, and other local data inside the app. You can also delete local content you no longer need. Deleted local data may not be recoverable by the developer.", "If you do not want certain files to be included in DeskHaven’s organization scope, do not place them in monitored paths, vaults, or manual import workflows."] },
      { title: "Contact", body: contact(locale) },
    ],
  };
}

function energyFlowPrivacy(locale: Locale): ProductPolicyCopy {
  const zh = isZh(locale);
  const tw = locale === "zh-tw";
  if (zh) {
    return {
      title: tw ? "EnergyFlow 隱私政策" : "EnergyFlow 隐私政策",
      intro: tw ? "本文件說明 EnergyFlow 如何在本機處理精力記錄、工作狀態、情緒、統計分析和偏好設定。" : "本文件说明 EnergyFlow 如何在本机处理精力记录、工作状态、情绪、统计分析和偏好设置。",
      updated: updated(locale),
      back: backLabel("EnergyFlow", locale),
      sections: [
        { title: tw ? "本地優先的精力記錄" : "本地优先的精力记录", body: tw ? ["EnergyFlow 的核心資料包括精力等級、工作狀態、能量來源、心情、文字備註、時間戳和統計結果。這些資料預設保存在你的設備上，用於應用內的趨勢、回顧、Pearson 相關和卡方檢驗。", "EnergyFlow 不要求建立帳戶，也不要求你向開發者提供姓名、電話或郵箱才能使用核心功能。"] : ["EnergyFlow 的核心数据包括精力等级、工作状态、能量来源、心情、文字备注、时间戳和统计结果。这些数据默认保存在你的设备上，用于应用内的趋势、回顾、Pearson 相关和卡方检验。", "EnergyFlow 不要求创建账户，也不要求你向开发者提供姓名、电话或邮箱才能使用核心功能。"] },
        { title: tw ? "敏感狀態資料" : "敏感状态数据", body: tw ? ["精力狀態、工作情緒和個人節奏可能反映你的健康、壓力、工作習慣或生活狀態。請把它當作敏感個人資料對待。", "如果你在共享設備上使用 EnergyFlow，請注意 Windows 帳戶、螢幕可見性、系統備份和本地文件權限。"] : ["精力状态、工作情绪和个人节奏可能反映你的健康、压力、工作习惯或生活状态。请把它当作敏感个人数据对待。", "如果你在共享设备上使用 EnergyFlow，请注意 Windows 账户、屏幕可见性、系统备份和本地文件权限。"] },
        { title: tw ? "加密、保護與限制" : "加密、保护与限制", body: tw ? ["EnergyFlow 可能包含本地加密儲存、密碼保護、防截圖或防錄屏相關保護能力，具體可用性取決於應用版本和 Windows 環境。", "這些保護可以降低誤看和未授權讀取風險，但不能替代完整的設備安全方案。"] : ["EnergyFlow 可能包含本地加密存储、密码保护、防截图或防录屏相关保护能力，具体可用性取决于应用版本和 Windows 环境。", "这些保护可以降低误看和未授权读取风险，但不能替代完整的设备安全方案。"] },
        { title: tw ? "購買與 Microsoft Store" : "购买与 Microsoft Store", body: [productPricing("energyflow", locale).summary, productPricing("energyflow", locale).trial, storeAuthority(locale)] },
        { title: tw ? "資料管理" : "数据管理", body: tw ? ["你可以在應用中管理、匯出或刪除自己的精力記錄。刪除後的本地資料可能無法由開發者恢復。", "支援郵件中你主動提供的資訊只會用於回覆問題。請不要在郵件中附上不必要的敏感日誌或個人資料。"] : ["你可以在应用中管理、导出或删除自己的精力记录。删除后的本地数据可能无法由开发者恢复。", "支持邮件中你主动提供的信息只会用于回复问题。请不要在邮件中附上不必要的敏感日志或个人资料。"] },
        { title: tw ? "聯絡" : "联系", body: contact(locale) },
      ],
    };
  }

  return {
    title: "EnergyFlow Privacy Policy",
    intro: "This document explains how EnergyFlow handles energy logs, work state, mood, statistical analysis, and preferences on the user’s device.",
    updated: updated(locale),
    back: backLabel("EnergyFlow", locale),
    sections: [
      { title: "Local-first energy records", body: ["EnergyFlow’s core data includes energy level, work state, energy source, mood, notes, timestamps, and statistical results. This data is stored on your device by default and used for in-app trends, reviews, Pearson correlation, and Chi-square analysis.", "EnergyFlow does not require an account, name, phone number, or email address for core functionality."] },
      { title: "Sensitive state data", body: ["Energy state, work mood, and personal rhythm may reflect health, stress, work habits, or life context. Treat this information as sensitive personal data.", "If you use EnergyFlow on a shared device, pay attention to the Windows account, screen visibility, system backups, and local file permissions."] },
      { title: "Encryption, protection, and limits", body: ["EnergyFlow may include local encrypted storage, password protection, and anti-capture protections depending on app version and Windows environment.", "These protections can reduce accidental viewing and unauthorized reading risk, but they are not a full device-security strategy."] },
      { title: "Purchase and Microsoft Store", body: [productPricing("energyflow", locale).summary, productPricing("energyflow", locale).trial, storeAuthority(locale)] },
      { title: "Data management", body: ["You can manage, export, or delete your energy records in the app. Deleted local data may not be recoverable by the developer.", "Information voluntarily provided in support emails is used only to respond to your request. Do not attach unnecessary sensitive logs or personal data."] },
      { title: "Contact", body: contact(locale) },
    ],
  };
}

function adhdPrivacy(locale: Locale): ProductPolicyCopy {
  const zh = isZh(locale);
  const tw = locale === "zh-tw";
  if (zh) {
    return {
      title: tw ? "ADHD Focus Timer 隱私政策" : "ADHD Focus Timer 隐私政策",
      intro: tw ? "本文件說明 ADHD Focus Timer 如何在本機處理專注計時、想法冰箱、聲音、語音記錄、完成回饋和偏好設定。" : "本文件说明 ADHD Focus Timer 如何在本机处理专注计时、想法冰箱、声音、语音记录、完成反馈和偏好设置。",
      updated: updated(locale),
      back: backLabel("ADHD Focus Timer", locale),
      sections: [
        { title: tw ? "本地專注資料" : "本地专注数据", body: tw ? ["專注時長、開始與結束狀態、完成回饋、想法冰箱內容、聲音設定、語言設定和其他偏好預設留在設備本地，用於維持目前體驗。", "核心功能不要求帳戶、登入、郵箱或手機號。"] : ["专注时长、开始与结束状态、完成反馈、想法冰箱内容、声音设置、语言设置和其他偏好默认留在设备本地，用于维持当前体验。", "核心功能不要求账户、登录、邮箱或手机号。"] },
        { title: tw ? "想法冰箱和私人內容" : "想法冰箱和私人内容", body: tw ? ["想法冰箱可能包含私人想法、任務、語音或臨時記錄。請在共享設備上謹慎使用，並按需清理不再需要的內容。", "應用不會把這些想法作為線上帳戶資料發送給開發者。"] : ["想法冰箱可能包含私人想法、任务、语音或临时记录。请在共享设备上谨慎使用，并按需清理不再需要的内容。", "应用不会把这些想法作为在线账户数据发送给开发者。"] },
        { title: tw ? "不是醫療服務" : "不是医疗服务", body: tw ? ["ADHD Focus Timer 是專注輔助工具，不是醫療、心理診斷或治療服務。它不能替代醫生、心理諮詢師或其他專業人士的建議。", "如果你正在處理嚴重壓力、焦慮、睡眠或注意力問題，請尋求合格專業人士的幫助。"] : ["ADHD Focus Timer 是专注辅助工具，不是医疗、心理诊断或治疗服务。它不能替代医生、心理咨询师或其他专业人士的建议。", "如果你正在处理严重压力、焦虑、睡眠或注意力问题，请寻求合格专业人士的帮助。"] },
        { title: tw ? "免費使用與商店資訊" : "免费使用与商店信息", body: [productPricing("adhd", locale).summary, productPricing("adhd", locale).trial, storeAuthority(locale)] },
        { title: tw ? "資料控制" : "数据控制", body: tw ? ["你可以在應用中清理或重置偏好與記錄。刪除後的本地內容可能無法恢復。", "支援郵件中你主動提供的資訊只會用於回覆問題。"] : ["你可以在应用中清理或重置偏好与记录。删除后的本地内容可能无法恢复。", "支持邮件中你主动提供的信息只会用于回复问题。"] },
        { title: tw ? "聯絡" : "联系", body: contact(locale) },
      ],
    };
  }

  return {
    title: "ADHD Focus Timer Privacy Policy",
    intro: "This document explains how ADHD Focus Timer handles focus timing, Idea Fridge content, sound, voice notes, completion feedback, and preferences locally.",
    updated: updated(locale),
    back: backLabel("ADHD Focus Timer", locale),
    sections: [
      { title: "Local focus data", body: ["Focus duration, start/end state, completion feedback, Idea Fridge content, sound settings, language settings, and preferences remain local by default and support the current experience.", "Core features do not require an account, login, email address, or phone number."] },
      { title: "Idea Fridge and private content", body: ["Idea Fridge may contain private thoughts, tasks, voice notes, or temporary records. Use it carefully on shared devices and delete content you no longer need.", "The app does not send these ideas to the developer as online account data."] },
      { title: "Not a medical service", body: ["ADHD Focus Timer is a focus-support tool, not a medical, psychological diagnosis, or treatment service. It does not replace advice from doctors, therapists, or qualified professionals.", "If you are dealing with serious stress, anxiety, sleep, or attention issues, seek help from a qualified professional."] },
      { title: "Free use and Store information", body: [productPricing("adhd", locale).summary, productPricing("adhd", locale).trial, storeAuthority(locale)] },
      { title: "Data control", body: ["You can clear or reset preferences and records in the app. Deleted local content may not be recoverable.", "Information voluntarily provided in support emails is used only to respond to your request."] },
      { title: "Contact", body: contact(locale) },
    ],
  };
}

export function productPolicyCopy(product: ProductId, kind: PolicyKind, locale: Locale): ProductPolicyCopy {
  if (kind === "privacy") {
    if (product === "deskhaven") return deskHavenPrivacy(locale);
    if (product === "energyflow") return energyFlowPrivacy(locale);
    return adhdPrivacy(locale);
  }

  const name = productNames[product];
  const zh = isZh(locale);
  return {
    title: zh ? `${name} ${locale === "zh-tw" ? "法律與使用條款" : "法律与使用条款"}` : `${name} Legal Terms` ,
    intro: zh
      ? `${locale === "zh-tw" ? "本文件說明" : "本文件说明"} ${name} 的使用許可、購買與試用、退款路徑、使用者內容、資料責任、限制和支援方式。`
      : `This document explains the license, purchase and trial path, refunds, user content, data responsibility, limitations, and support for ${name}.`,
    updated: updated(locale),
    back: backLabel(name, locale),
    sections: sharedLegalSections(name, product, locale),
  };
}
