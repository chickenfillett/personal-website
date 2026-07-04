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

type PrivacyLocaleText = {
  updated: string;
  back: (name: string) => string;
  contact: string;
  privacyTitle: (name: string) => string;
  legalTitle: (name: string) => string;
  privacyIntro: (name: string, purpose: string) => string;
  legalIntro: (name: string) => string;
  storeAuthority: string;
  productPurpose: Record<ProductId, string>;
  productData: Record<ProductId, string>;
  sensitiveExamples: Record<ProductId, string>;
  localTitle: string;
  localBody: (name: string, productData: string) => string[];
  noOnlineTitle: string;
  noOnlineBody: (name: string) => string[];
  noOnlineBullets: string[];
  dataTitle: string;
  dataBody: (name: string, productData: string) => string[];
  contentTitle: string;
  contentBody: (name: string, examples: string) => string[];
  securityTitle: string;
  securityBody: (name: string) => string[];
  retentionTitle: string;
  retentionBody: (name: string) => string[];
  supportTitle: string;
  supportBody: (name: string) => string[];
  userControlTitle: string;
  userControlBody: (name: string) => string[];
  responsibilityTitle: string;
  responsibilityBody: (name: string) => string[];
  contactTitle: string;
  legalLicenseTitle: string;
  legalLicenseBody: (name: string) => string[];
  legalStoreTitle: string;
  legalStoreBody: (summary: string, trial: string, storeAuthority: string) => string[];
  legalRefundTitle: string;
  legalRefundBody: string[];
  legalContentTitle: string;
  legalContentBody: string[];
  legalRiskTitle: string;
  legalRiskBody: string[];
  legalChangeTitle: string;
  legalChangeBody: string[];
};

const policyText: Partial<Record<Locale, PrivacyLocaleText>> = {
  zh: {
    updated: "最后更新：2026 年 6 月 28 日",
    back: (name) => `返回 ${name}`,
    contact: "如需联系开发者，请发送邮件至 3371436706@qq.com。",
    privacyTitle: (name) => `${name} 隐私政策`,
    legalTitle: (name) => `${name} 法律与使用条款`,
    privacyIntro: (name, purpose) => `本文件说明 ${name} 在本地设备上如何处理与${purpose}相关的数据。隐私政策只讨论数据处理、存储、控制权和支持沟通，不包含价格、试用或退款规则。`,
    legalIntro: (name) => `本文件说明 ${name} 的使用许可、商店购买与试用、退款路径、用户内容、数据责任、限制和支持方式。`,
    storeAuthority: "通过 Microsoft Store 获取或购买产品时，价格、税费、促销、可用性、取消和退款流程以用户所在地区的 Microsoft Store 显示与规则为准。",
    productPurpose: {
      deskhaven: "本地文件整理、文件仓、关系图谱、搜索、备份和偏好设置",
      energyflow: "精力记录、工作状态、情绪、统计分析和偏好设置",
      adhd: "专注计时、想法冰箱、声音、语音记录、完成反馈和偏好设置",
    },
    productData: {
      deskhaven: "文件索引、文件路径、文件名、文件类型、大小、修改时间、标签、分类、文件仓状态、关系图谱、搜索索引、备份记录和本地偏好设置",
      energyflow: "精力等级、工作状态、能量来源、心情、备注、时间戳、统计结果、趋势视图和本地偏好设置",
      adhd: "专注时长、开始与结束状态、想法冰箱内容、语音或临时记录、声音设置、完成反馈、语言设置和本地偏好设置",
    },
    sensitiveExamples: {
      deskhaven: "文档、图片、项目资料、密码文件、SSH 密钥、导出文件、工作资料和其他你主动放入 DeskHaven 的本地内容",
      energyflow: "精力状态、工作情绪、压力感受、工作习惯、时间节奏和个人备注",
      adhd: "私人想法、未完成任务、语音记录、专注困难、情绪状态和临时笔记",
    },
    localTitle: "本地优先处理原则",
    localBody: (name, data) => [`${name} 的核心体验围绕本地 Windows 设备设计。与功能相关的数据包括 ${data}，这些数据默认围绕你的本机环境处理。`, "除非你主动导出、备份、复制、发送支持邮件，或使用操作系统/第三方工具把文件同步到其他位置，开发者不会远程读取这些本地数据。"],
    noOnlineTitle: "不会上传到开发者服务器",
    noOnlineBody: (name) => [`${name} 不要求在线账户才能使用核心功能，也不把你的本地内容作为在线个人档案上传给开发者。`, "如果你的设备、OneDrive、网盘、系统备份或第三方同步工具另行同步了相关文件，那属于你选择的系统或第三方服务行为，不是本应用向开发者上传。"],
    noOnlineBullets: ["不要求注册 SoloCraft 账户。", "不把本地文件内容上传给开发者。", "不把本地索引、统计记录或关系数据发送给开发者分析。", "不出售、出租或共享你的本地使用内容。", "不使用你的本地内容训练模型或建立广告画像。"],
    dataTitle: "本地数据类型和用途",
    dataBody: (_name, data) => [`应用可能在本地保存或生成 ${data}。这些数据用于让界面继续工作，例如搜索、筛选、统计、回顾、恢复、自动化整理或保持你的偏好设置。`, "应用处理这些数据的目的，是让你在自己的设备上更容易找回、理解和管理信息，而不是收集更多个人资料。"],
    contentTitle: "敏感内容与个人资料",
    contentBody: (_name, examples) => [`你可能在使用过程中处理 ${examples}。这些内容可能具有私人性或商业敏感性，请把它们当作重要本地资料对待。`, "如果你在共享电脑、公司设备或未加密磁盘上使用本应用，请额外注意 Windows 账户、磁盘权限、屏幕可见性、系统备份和本地文件夹访问权限。"],
    securityTitle: "安全、加密和保护限制",
    securityBody: (name) => [`${name} 可能提供本地保存、密码保护、加密、备份、恢复或防窥相关能力，实际可用范围取决于应用版本、Windows 环境和你启用的设置。`, "这些保护可以降低误看、误删或未授权读取风险，但不能替代完整的设备安全方案。请继续使用系统账户密码、磁盘加密、可信备份和谨慎的文件权限设置。"],
    retentionTitle: "保留、删除和恢复",
    retentionBody: (name) => [`${name} 的本地数据通常会保留在你的设备或你选择的保存位置，直到你在应用内清理、删除、重置，或通过系统文件管理方式移除相关内容。`, "删除后的本地数据可能无法由开发者恢复。若你需要长期保存记录或文件，请自行维护备份；若你需要彻底清理，请同时检查应用数据目录、导出目录和系统备份。"],
    supportTitle: "支持沟通中的信息",
    supportBody: () => ["如果你主动通过邮件联系开发者，你提供的邮箱地址、问题描述、截图、日志片段或附件只会用于理解问题和回复支持请求。", "请不要在支持邮件中发送不必要的密码、私钥、身份证件、完整客户资料或其他高度敏感内容。若必须提供截图，请先遮挡不相关的私人信息。"],
    userControlTitle: "你的控制权",
    userControlBody: (name) => [`你可以决定是否把相关内容放入 ${name}，也可以在应用中管理、导出、删除或重置本地记录和偏好。`, "如果你不希望某些内容被应用纳入处理范围，请不要把它们放入应用监控路径、文件仓、记录流程、想法记录或手动导入流程中。"],
    responsibilityTitle: "设备安全和第三方服务",
    responsibilityBody: () => ["本应用无法控制你的操作系统账户、磁盘、公司设备策略、杀毒软件、备份软件、云盘同步、浏览器扩展或其他第三方工具。", "如果这些系统或工具访问、同步、备份或上传了本地文件，请查看对应服务的隐私政策和设置。本政策只说明 SoloCraft 应用本身的处理方式。"],
    contactTitle: "联系与政策更新",
    legalLicenseTitle: "使用许可",
    legalLicenseBody: (name) => [`你获得的是安装和使用 ${name} 的个人、非独占、不可转让许可，而不是软件本身的所有权转让。`, "除非法律明确允许或开发者书面授权，请勿反向工程、破解、重新分发、转售、租赁、移除版权信息，或以侵犯他人权利、破坏系统安全、规避商店规则的方式使用本软件。"],
    legalStoreTitle: "价格、试用与商店规则",
    legalStoreBody: (summary, trial, storeAuthority) => [summary, trial, storeAuthority],
    legalRefundTitle: "退款、取消和账单",
    legalRefundBody: ["如果你通过 Microsoft Store 购买或获取本产品，退款、取消、账单、付款方式、税费和地区限制通常由 Microsoft Store 的政策和流程处理。", "开发者可以协助排查产品问题、说明产品功能和提供支持信息，但不能绕过 Microsoft Store 的支付、订单、退款或地区审核系统。"],
    legalContentTitle: "用户内容与数据所有权",
    legalContentBody: ["你保留自己文件、精力记录、专注记录、偏好设置、导入资料和其他用户内容的权利。软件只在实现功能所需的范围内于本地处理这些内容。", "你应自行确认有权处理、整理、备份或导入相关文件和内容。请勿使用本软件管理你没有权限处理的第三方资料。"],
    legalRiskTitle: "使用风险与备份责任",
    legalRiskBody: ["本软件按现状提供。它可以帮助整理文件、记录状态或辅助专注，但不能保证任何特定结果，也不能替代专业医疗、法律、财务、安全审计或数据恢复建议。", "对于重要文件、凭据、密钥、工作资料或个人记录，请保持你自己的系统备份与恢复方案。任何本地删除、覆盖、磁盘故障、系统权限错误或用户操作造成的损失，开发者可能无法恢复。"],
    legalChangeTitle: "支持、更新与条款变更",
    legalChangeBody: ["功能、价格、试用、可用市场、语言支持和文档内容可能会随应用版本、Microsoft Store 审核结果和产品策略调整。"],
  },
  "zh-tw": {
    updated: "最後更新：2026 年 6 月 28 日",
    back: (name) => `返回 ${name}`,
    contact: "如需聯絡開發者，請發送郵件至 3371436706@qq.com。",
    privacyTitle: (name) => `${name} 隱私政策`,
    legalTitle: (name) => `${name} 法律與使用條款`,
    privacyIntro: (name, purpose) => `本文件說明 ${name} 在本地設備上如何處理與${purpose}相關的資料。隱私政策只討論資料處理、儲存、控制權和支援溝通，不包含價格、試用或退款規則。`,
    legalIntro: (name) => `本文件說明 ${name} 的使用許可、商店購買與試用、退款路徑、使用者內容、資料責任、限制和支援方式。`,
    storeAuthority: "透過 Microsoft Store 取得或購買產品時，價格、稅費、促銷、可用性、取消和退款流程以使用者所在地區的 Microsoft Store 顯示與規則為準。",
    productPurpose: {
      deskhaven: "本地文件整理、文件倉、關係圖譜、搜尋、備份和偏好設定",
      energyflow: "精力記錄、工作狀態、情緒、統計分析和偏好設定",
      adhd: "專注計時、想法冰箱、聲音、語音記錄、完成回饋和偏好設定",
    },
    productData: {
      deskhaven: "文件索引、文件路徑、文件名、文件類型、大小、修改時間、標籤、分類、文件倉狀態、關係圖譜、搜尋索引、備份記錄和本地偏好設定",
      energyflow: "精力等級、工作狀態、能量來源、心情、備註、時間戳、統計結果、趨勢視圖和本地偏好設定",
      adhd: "專注時長、開始與結束狀態、想法冰箱內容、語音或臨時記錄、聲音設定、完成回饋、語言設定和本地偏好設定",
    },
    sensitiveExamples: {
      deskhaven: "文檔、圖片、專案資料、密碼文件、SSH 金鑰、匯出文件、工作資料和其他你主動放入 DeskHaven 的本地內容",
      energyflow: "精力狀態、工作情緒、壓力感受、工作習慣、時間節奏和個人備註",
      adhd: "私人想法、未完成任務、語音記錄、專注困難、情緒狀態和臨時筆記",
    },
    localTitle: "本地優先處理原則",
    localBody: (name, data) => [`${name} 的核心體驗圍繞本地 Windows 設備設計。與功能相關的資料包括 ${data}，這些資料預設圍繞你的本機環境處理。`, "除非你主動匯出、備份、複製、發送支援郵件，或使用作業系統/第三方工具把文件同步到其他位置，開發者不會遠端讀取這些本地資料。"],
    noOnlineTitle: "不會上傳到開發者伺服器",
    noOnlineBody: (name) => [`${name} 不要求線上帳戶才能使用核心功能，也不把你的本地內容作為線上個人檔案上傳給開發者。`, "如果你的設備、OneDrive、網盤、系統備份或第三方同步工具另行同步了相關文件，那屬於你選擇的系統或第三方服務行為，不是本應用向開發者上傳。"],
    noOnlineBullets: ["不要求註冊 SoloCraft 帳戶。", "不把本地文件內容上傳給開發者。", "不把本地索引、統計記錄或關係資料發送給開發者分析。", "不出售、出租或共享你的本地使用內容。", "不使用你的本地內容訓練模型或建立廣告画像。"],
    dataTitle: "本地資料類型和用途",
    dataBody: (_name, data) => [`應用可能在本地保存或生成 ${data}。這些資料用於讓介面繼續工作，例如搜尋、篩選、統計、回顧、恢復、自動化整理或保持你的偏好設定。`, "應用處理這些資料的目的，是讓你在自己的設備上更容易找回、理解和管理資訊，而不是收集更多個人資料。"],
    contentTitle: "敏感內容與個人資料",
    contentBody: (_name, examples) => [`你可能在使用過程中處理 ${examples}。這些內容可能具有私人性或商業敏感性，請把它們當作重要本地資料對待。`, "如果你在共享電腦、公司設備或未加密磁碟上使用本應用，請額外注意 Windows 帳戶、磁碟權限、螢幕可見性、系統備份和本地資料夾存取權限。"],
    securityTitle: "安全、加密和保護限制",
    securityBody: (name) => [`${name} 可能提供本地保存、密碼保護、加密、備份、恢復或防窺相關能力，實際可用範圍取決於應用版本、Windows 環境和你啟用的設定。`, "這些保護可以降低誤看、誤刪或未授權讀取風險，但不能替代完整的設備安全方案。請繼續使用系統帳戶密碼、磁碟加密、可信備份和謹慎的文件權限設定。"],
    retentionTitle: "保留、刪除和恢復",
    retentionBody: (name) => [`${name} 的本地資料通常會保留在你的設備或你選擇的保存位置，直到你在應用內清理、刪除、重置，或透過系統文件管理方式移除相關內容。`, "刪除後的本地資料可能無法由開發者恢復。若你需要長期保存記錄或文件，請自行維護備份；若你需要徹底清理，請同時檢查應用資料目錄、匯出目錄和系統備份。"],
    supportTitle: "支援溝通中的資訊",
    supportBody: () => ["如果你主動透過郵件聯絡開發者，你提供的郵箱地址、問題描述、截圖、日誌片段或附件只會用於理解問題和回覆支援請求。", "請不要在支援郵件中發送不必要的密碼、私鑰、身份證件、完整客戶資料或其他高度敏感內容。若必須提供截圖，請先遮擋不相關的私人資訊。"],
    userControlTitle: "你的控制權",
    userControlBody: (name) => [`你可以決定是否把相關內容放入 ${name}，也可以在應用中管理、匯出、刪除或重置本地記錄和偏好。`, "如果你不希望某些內容被應用納入處理範圍，請不要把它們放入應用監控路徑、文件倉、記錄流程、想法記錄或手動匯入流程中。"],
    responsibilityTitle: "設備安全和第三方服務",
    responsibilityBody: () => ["本應用無法控制你的作業系統帳戶、磁碟、公司設備策略、防毒軟體、備份軟體、雲端硬碟同步、瀏覽器擴充功能或其他第三方工具。", "如果這些系統或工具存取、同步、備份或上傳了本地文件，請查看對應服務的隱私政策和設定。本政策只說明 SoloCraft 應用本身的處理方式。"],
    contactTitle: "聯絡與政策更新",
    legalLicenseTitle: "使用許可",
    legalLicenseBody: (name) => [`你取得的是安裝和使用 ${name} 的個人、非獨占、不可轉讓許可，而不是軟體本身的所有權轉讓。`, "除非法律明確允許或開發者書面授權，請勿反向工程、破解、重新分發、轉售、租賃、移除版權資訊，或以侵犯他人權利、破壞系統安全、規避商店規則的方式使用本軟體。"],
    legalStoreTitle: "價格、試用與商店規則",
    legalStoreBody: (summary, trial, storeAuthority) => [summary, trial, storeAuthority],
    legalRefundTitle: "退款、取消和帳單",
    legalRefundBody: ["如果你透過 Microsoft Store 購買或取得本產品，退款、取消、帳單、付款方式、稅費和地區限制通常由 Microsoft Store 的政策和流程處理。", "開發者可以協助排查產品問題、說明產品功能和提供支援資訊，但不能繞過 Microsoft Store 的支付、訂單、退款或地區審核系統。"],
    legalContentTitle: "使用者內容與資料所有權",
    legalContentBody: ["你保留自己文件、精力記錄、專注記錄、偏好設定、匯入資料和其他使用者內容的權利。軟體只在實現功能所需的範圍內於本地處理這些內容。", "你應自行確認有權處理、整理、備份或匯入相關文件和內容。請勿使用本軟體管理你沒有權限處理的第三方資料。"],
    legalRiskTitle: "使用風險與備份責任",
    legalRiskBody: ["本軟體按現狀提供。它可以幫助整理文件、記錄狀態或輔助專注，但不能保證任何特定結果，也不能替代專業醫療、法律、財務、安全審計或資料恢復建議。", "對於重要文件、憑據、密鑰、工作資料或個人記錄，請保持你自己的系統備份與恢復方案。任何本地刪除、覆蓋、磁碟故障、系統權限錯誤或使用者操作造成的損失，開發者可能無法恢復。"],
    legalChangeTitle: "支援、更新與條款變更",
    legalChangeBody: ["功能、價格、試用、可用市場、語言支援和文件內容可能會隨應用版本、Microsoft Store 審核結果和產品策略調整。"],
  },
  en: {
    updated: "Last updated: June 28, 2026",
    back: (name) => `Back to ${name}`,
    contact: "For support, contact the developer at 3371436706@qq.com.",
    privacyTitle: (name) => `${name} Privacy Policy`,
    legalTitle: (name) => `${name} Legal Terms`,
    privacyIntro: (name, purpose) => `This document explains how ${name} handles data related to ${purpose} on the local device. The privacy policy discusses data processing, storage, control, and support communication only; it does not cover price, trials, or refund rules.`,
    legalIntro: (name) => `This document explains the license, Store purchase and trial path, refunds, user content, data responsibility, limitations, and support for ${name}.`,
    storeAuthority: "When a product is obtained or purchased through Microsoft Store, pricing, taxes, promotions, availability, cancellation, and refund flows are governed by the Microsoft Store listing and rules shown in the customer’s region.",
    productPurpose: { deskhaven: "local file organization, vaults, relationship maps, search, backups, and preferences", energyflow: "energy logs, work state, mood, statistical analysis, and preferences", adhd: "focus timing, Idea Fridge content, sound, voice notes, completion feedback, and preferences" },
    productData: { deskhaven: "file indexes, file paths, file names, file types, sizes, modified times, tags, categories, vault state, relationship maps, search indexes, backup records, and local preferences", energyflow: "energy levels, work states, energy sources, mood, notes, timestamps, statistical results, trend views, and local preferences", adhd: "focus duration, start and end state, Idea Fridge content, voice or temporary notes, sound settings, completion feedback, language settings, and local preferences" },
    sensitiveExamples: { deskhaven: "documents, images, project materials, password files, SSH keys, exported files, work materials, and other local content you choose to place in DeskHaven", energyflow: "energy state, work mood, stress signals, work habits, time rhythm, and personal notes", adhd: "private thoughts, unfinished tasks, voice notes, focus difficulties, emotional state, and temporary notes" },
    localTitle: "Local-first processing principle",
    localBody: (name, data) => [`${name} is designed around the local Windows device. Feature-related data may include ${data}, and this data is processed around your local environment by default.`, "Unless you export, back up, copy, send a support email, or use the operating system or a third-party tool to sync files elsewhere, the developer does not remotely read this local data."],
    noOnlineTitle: "No upload to developer servers",
    noOnlineBody: (name) => [`${name} does not require an online account for core features and does not upload your local content to the developer as an online profile.`, "If your device, OneDrive, a cloud drive, system backup, or third-party sync tool separately synchronizes related files, that is a behavior of the system or service you chose, not an upload from this app to the developer."],
    noOnlineBullets: ["No SoloCraft account is required.", "Local file contents are not uploaded to the developer.", "Local indexes, statistics, or relationship data are not sent to the developer for analysis.", "Your local usage content is not sold, rented, or shared.", "Your local content is not used to train models or build advertising profiles."],
    dataTitle: "Local data types and purpose",
    dataBody: (_name, data) => [`The app may locally store or generate ${data}. This data keeps the interface working, including search, filters, statistics, review, recovery, background organization, or preferences.`, "The purpose of processing this data is to help you find, understand, and manage information on your own device, not to collect more personal information."],
    contentTitle: "Sensitive content and personal material",
    contentBody: (_name, examples) => [`During use, you may handle ${examples}. Such content may be private or commercially sensitive, and should be treated as important local material.`, "If you use the app on a shared computer, company device, or unencrypted disk, pay attention to the Windows account, disk permissions, screen visibility, system backups, and local folder access."],
    securityTitle: "Security, encryption, and protection limits",
    securityBody: (name) => [`${name} may provide local storage, password protection, encryption, backup, restore, or screen-protection features depending on app version, Windows environment, and enabled settings.`, "These protections can reduce accidental viewing, deletion, or unauthorized reading risk, but they are not a complete device-security strategy. Continue using system passwords, disk encryption, trusted backups, and careful file permissions."],
    retentionTitle: "Retention, deletion, and recovery",
    retentionBody: (name) => [`${name} local data usually remains on your device or chosen storage location until you clear, delete, reset, or remove it through the system file manager.`, "Deleted local data may not be recoverable by the developer. If you need long-term retention, maintain your own backup. If you need full cleanup, also check app data directories, export locations, and system backups."],
    supportTitle: "Information in support communication",
    supportBody: () => ["If you voluntarily contact the developer by email, the email address, issue description, screenshots, log excerpts, or attachments you provide are used only to understand the issue and respond to the support request.", "Do not send unnecessary passwords, private keys, identity documents, full customer records, or other highly sensitive content in support emails. If screenshots are necessary, mask unrelated private information first."],
    userControlTitle: "Your control",
    userControlBody: (name) => [`You decide whether to place content into ${name}, and you can manage, export, delete, or reset local records and preferences in the app.`, "If you do not want certain content to be included, do not place it in monitored paths, vaults, logging flows, idea records, or manual import workflows."],
    responsibilityTitle: "Device security and third-party services",
    responsibilityBody: () => ["The app cannot control your operating-system account, disk, company device policies, antivirus software, backup software, cloud-drive sync, browser extensions, or other third-party tools.", "If those systems or tools access, sync, back up, or upload local files, review the privacy policy and settings of the corresponding service. This policy only explains the behavior of the SoloCraft app itself."],
    contactTitle: "Contact and policy updates",
    legalLicenseTitle: "License",
    legalLicenseBody: (name) => [`You receive a personal, non-exclusive, non-transferable license to install and use ${name}. You do not receive ownership of the software itself.`, "Do not reverse engineer, crack, redistribute, resell, rent, remove copyright notices, violate third-party rights, compromise system security, or bypass Store rules unless expressly allowed by law or written permission from the developer."],
    legalStoreTitle: "Pricing, trial, and Store rules",
    legalStoreBody: (summary, trial, storeAuthority) => [summary, trial, storeAuthority],
    legalRefundTitle: "Refunds, cancellation, and billing",
    legalRefundBody: ["For products obtained or purchased through Microsoft Store, refunds, cancellation, billing, payment methods, taxes, and regional restrictions are generally handled by Microsoft Store policies and workflows.", "The developer can help investigate product issues, explain app behavior, and provide support information, but cannot bypass Microsoft Store payment, order, refund, or regional review systems."],
    legalContentTitle: "User content and data ownership",
    legalContentBody: ["You retain rights to your files, energy logs, focus records, preferences, imported materials, and other user content. The software processes that content locally only to the extent needed for the relevant feature.", "You are responsible for confirming that you have the right to process, organize, back up, or import the files and content you use with the software."],
    legalRiskTitle: "Risk, backups, and professional advice",
    legalRiskBody: ["The software is provided as is. It can help organize files, record state, or support focus, but it does not guarantee a particular outcome and is not a substitute for professional medical, legal, financial, security-audit, or data-recovery advice.", "For important files, credentials, keys, work materials, or personal records, keep your own system-level backup and recovery plan. The developer may not be able to recover data lost through local deletion, overwrite, disk failure, permission errors, or user action."],
    legalChangeTitle: "Support, updates, and changes",
    legalChangeBody: ["Features, pricing, trial terms, available markets, language support, and documentation may change with app versions, Microsoft Store review results, and product strategy."],
  },
  ja: {
    updated: "最終更新日：2026年6月28日", back: (name) => `${name} に戻る`, contact: "サポートが必要な場合は 3371436706@qq.com までご連絡ください。", privacyTitle: (name) => `${name} プライバシーポリシー`, legalTitle: (name) => `${name} 法的条項`, privacyIntro: (name, purpose) => `本書は、${name} がローカル端末上で ${purpose} に関連するデータをどのように扱うかを説明します。プライバシーポリシーはデータ処理、保存、制御、サポート連絡のみを扱い、価格、試用、返金規則は含みません。`, legalIntro: (name) => `本書は ${name} のライセンス、Store 購入と試用、返金、ユーザー内容、データ責任、制限、サポートについて説明します。`, storeAuthority: "Microsoft Store から入手または購入した場合、価格、税、プロモーション、提供状況、キャンセル、返金は、利用者の地域に表示される Microsoft Store の規則に従います。", productPurpose: { deskhaven: "ローカルファイル整理、保管庫、関係マップ、検索、バックアップ、設定", energyflow: "エネルギー記録、作業状態、気分、統計分析、設定", adhd: "集中タイマー、Idea Fridge、音、音声メモ、完了フィードバック、設定" }, productData: { deskhaven: "ファイル索引、パス、名前、種類、サイズ、更新時刻、タグ、分類、保管状態、関係マップ、検索索引、バックアップ記録、ローカル設定", energyflow: "エネルギーレベル、作業状態、エネルギー源、気分、メモ、時刻、統計結果、傾向表示、ローカル設定", adhd: "集中時間、開始と終了状態、Idea Fridge の内容、音声または一時メモ、音設定、完了フィードバック、言語設定、ローカル設定" }, sensitiveExamples: { deskhaven: "文書、画像、プロジェクト資料、パスワードファイル、SSH キー、書き出しファイル、作業資料、DeskHaven に入れたその他のローカル内容", energyflow: "エネルギー状態、作業中の気分、ストレスの兆候、作業習慣、時間のリズム、個人的なメモ", adhd: "私的な考え、未完了タスク、音声メモ、集中の困難、感情状態、一時メモ" }, localTitle: "ローカル優先の処理原則", localBody: (name, data) => [`${name} はローカルの Windows 端末を中心に設計されています。機能に関係するデータには ${data} が含まれる場合があり、既定では利用者の端末環境で処理されます。`, "利用者が書き出し、バックアップ、コピー、サポートメール送信、または OS や第三者ツールによる同期を行わない限り、開発者がこれらのローカルデータを遠隔で読むことはありません。"], noOnlineTitle: "開発者サーバーへアップロードしません", noOnlineBody: (name) => [`${name} は主要機能にオンラインアカウントを要求せず、ローカル内容をオンラインプロフィールとして開発者へアップロードしません。`, "OneDrive、クラウドドライブ、バックアップ、第三者同期ツールが別途ファイルを同期する場合、それは利用者が選んだシステムやサービスの動作であり、本アプリによる開発者へのアップロードではありません。"], noOnlineBullets: ["SoloCraft アカウントは不要です。", "ローカルファイル内容を開発者へアップロードしません。", "索引、統計、関係データを分析目的で開発者へ送信しません。", "ローカル利用内容を販売、貸与、共有しません。", "ローカル内容をモデル訓練や広告プロフィールに使用しません。"], dataTitle: "ローカルデータの種類と目的", dataBody: (_name, data) => [`アプリは ${data} をローカルで保存または生成する場合があります。これらは検索、フィルター、統計、振り返り、復元、自動整理、設定維持のために使われます。`, "処理の目的は、利用者が自分の端末上で情報を見つけ、理解し、管理しやすくすることであり、追加の個人情報を集めることではありません。"], contentTitle: "機密内容と個人情報", contentBody: (_name, examples) => [`利用中に ${examples} を扱う場合があります。これらは私的または業務上機密性のある内容になり得るため、重要なローカル資料として扱ってください。`, "共有 PC、会社端末、暗号化されていないディスクで使う場合は、Windows アカウント、ディスク権限、画面表示、バックアップ、フォルダーアクセスに注意してください。"], securityTitle: "セキュリティ、暗号化、保護の限界", securityBody: (name) => [`${name} はアプリ版本、Windows 環境、有効な設定に応じて、ローカル保存、パスワード保護、暗号化、バックアップ、復元、画面保護機能を提供する場合があります。`, "これらは誤表示、誤削除、無断読み取りのリスクを下げますが、完全な端末セキュリティの代わりにはなりません。システムパスワード、ディスク暗号化、信頼できるバックアップ、慎重な権限設定を続けてください。"], retentionTitle: "保持、削除、復元", retentionBody: (name) => [`${name} のローカルデータは、アプリで消去、削除、リセットするか、システムのファイル管理で削除するまで、端末または選択した保存場所に残るのが通常です。`, "削除されたローカルデータは開発者が復元できない場合があります。長期保存が必要な場合は自身でバックアップを維持し、完全削除したい場合はアプリデータ、書き出し場所、システムバックアップも確認してください。"], supportTitle: "サポート連絡時の情報", supportBody: () => ["メールで開発者に連絡した場合、メールアドレス、問題説明、スクリーンショット、ログ断片、添付ファイルは、問題理解と返信のためだけに使われます。", "不要なパスワード、秘密鍵、身分証、顧客情報、高度に機密な内容を送らないでください。スクリーンショットが必要な場合は無関係な個人情報を先に隠してください。"], userControlTitle: "利用者の制御", userControlBody: (name) => [`どの内容を ${name} に入れるかは利用者が決められます。アプリ内でローカル記録や設定を管理、書き出し、削除、リセットできます。`, "処理対象にしたくない内容は、監視パス、保管庫、記録フロー、アイデア記録、手動インポートに入れないでください。"], responsibilityTitle: "端末セキュリティと第三者サービス", responsibilityBody: () => ["本アプリは OS アカウント、ディスク、会社端末ポリシー、ウイルス対策、バックアップ、クラウド同期、ブラウザー拡張、第三者ツールを制御できません。", "それらがローカルファイルにアクセス、同期、バックアップ、アップロードする場合は、該当サービスのポリシーと設定を確認してください。本ポリシーは SoloCraft アプリ自体の動作のみを説明します。"], contactTitle: "連絡とポリシー更新", legalLicenseTitle: "使用許可", legalLicenseBody: (name) => [`${name} をインストールして使用する個人的、非独占、譲渡不可のライセンスが与えられます。ソフトウェア自体の所有権は移転しません。`, "法律または開発者の書面許可がない限り、リバースエンジニアリング、再配布、再販売、著作権表示の削除、権利侵害、システム安全性の破壊、Store 規則の回避を行わないでください。"], legalStoreTitle: "価格、試用、Store 規則", legalStoreBody: (summary, trial, storeAuthority) => [summary, trial, storeAuthority], legalRefundTitle: "返金、キャンセル、請求", legalRefundBody: ["Microsoft Store で取得または購入した製品の返金、キャンセル、請求、支払い方法、税、地域制限は通常 Microsoft Store の規則と手続きに従います。", "開発者は製品問題の調査や説明を支援できますが、Store の支払い、注文、返金、地域審査を回避することはできません。"], legalContentTitle: "ユーザー内容とデータ所有権", legalContentBody: ["ファイル、記録、設定、インポート資料などの権利は利用者に残ります。ソフトウェアは機能に必要な範囲でローカルに処理します。", "利用者は、扱うファイルや内容について処理、整理、バックアップ、インポートする権利があることを確認する責任があります。"], legalRiskTitle: "リスク、バックアップ、専門助言", legalRiskBody: ["ソフトウェアは現状有姿で提供されます。整理、記録、集中支援に役立ちますが、特定の結果を保証せず、医療、法律、財務、セキュリティ監査、データ復旧の専門助言に代わるものではありません。", "重要なファイル、資格情報、鍵、作業資料、個人記録については、自身のバックアップと復元計画を維持してください。"], legalChangeTitle: "サポート、更新、変更", legalChangeBody: ["機能、価格、試用条件、提供市場、言語対応、文書内容は、アプリ版本、Microsoft Store 審査、製品方針により変更される場合があります。"],
  },
};

policyText.ko = { ...policyText.en!,
  updated: "마지막 업데이트: 2026년 6월 28일", back: (name) => `${name}으로 돌아가기`, contact: "지원이 필요하면 3371436706@qq.com 으로 개발자에게 연락하세요.", privacyTitle: (name) => `${name} 개인정보 처리방침`, legalTitle: (name) => `${name} 법률 및 사용 약관`, privacyIntro: (name, purpose) => `이 문서는 ${name}이(가) 로컬 기기에서 ${purpose} 관련 데이터를 어떻게 처리하는지 설명합니다. 개인정보 처리방침은 데이터 처리, 저장, 제어권, 지원 연락만 다루며 가격, 체험판, 환불 규칙은 포함하지 않습니다.`, legalIntro: (name) => `이 문서는 ${name}의 라이선스, Store 구매와 체험판, 환불 경로, 사용자 콘텐츠, 데이터 책임, 제한 및 지원 방식을 설명합니다.`, storeAuthority: "Microsoft Store를 통해 제품을 받거나 구매한 경우 가격, 세금, 프로모션, 제공 여부, 취소 및 환불 절차는 사용자의 지역에 표시되는 Microsoft Store 규칙을 따릅니다.", productPurpose: { deskhaven: "로컬 파일 정리, 파일 보관소, 관계 지도, 검색, 백업 및 환경설정", energyflow: "에너지 기록, 업무 상태, 기분, 통계 분석 및 환경설정", adhd: "집중 타이밍, Idea Fridge 내용, 소리, 음성 메모, 완료 피드백 및 환경설정" }, productData: { deskhaven: "파일 인덱스, 경로, 이름, 유형, 크기, 수정 시간, 태그, 분류, 보관소 상태, 관계 지도, 검색 인덱스, 백업 기록 및 로컬 설정", energyflow: "에너지 수준, 업무 상태, 에너지 출처, 기분, 메모, 시간, 통계 결과, 추세 보기 및 로컬 설정", adhd: "집중 시간, 시작/종료 상태, Idea Fridge 내용, 음성 또는 임시 메모, 소리 설정, 완료 피드백, 언어 설정 및 로컬 설정" }, sensitiveExamples: { deskhaven: "문서, 이미지, 프로젝트 자료, 비밀번호 파일, SSH 키, 내보낸 파일, 업무 자료 및 DeskHaven에 넣은 기타 로컬 콘텐츠", energyflow: "에너지 상태, 업무 기분, 스트레스 신호, 업무 습관, 시간 리듬 및 개인 메모", adhd: "사적인 생각, 미완료 작업, 음성 메모, 집중 어려움, 감정 상태 및 임시 메모" }, localTitle: "로컬 우선 처리 원칙", noOnlineTitle: "개발자 서버로 업로드하지 않음", noOnlineBullets: ["SoloCraft 계정이 필요하지 않습니다.", "로컬 파일 내용은 개발자에게 업로드되지 않습니다.", "로컬 인덱스, 통계, 관계 데이터는 분석 목적으로 전송되지 않습니다.", "로컬 사용 내용은 판매, 임대, 공유되지 않습니다.", "로컬 콘텐츠는 모델 학습이나 광고 프로필 작성에 사용되지 않습니다."], dataTitle: "로컬 데이터 유형과 목적", contentTitle: "민감한 콘텐츠와 개인정보", securityTitle: "보안, 암호화 및 보호 한계", retentionTitle: "보관, 삭제 및 복구", supportTitle: "지원 연락 중의 정보", userControlTitle: "사용자의 제어권", responsibilityTitle: "기기 보안과 제3자 서비스", contactTitle: "연락 및 정책 업데이트", legalLicenseTitle: "사용 허가", legalStoreTitle: "가격, 체험판 및 Store 규칙", legalRefundTitle: "환불, 취소 및 청구", legalContentTitle: "사용자 콘텐츠와 데이터 소유권", legalRiskTitle: "위험, 백업 및 전문 조언", legalChangeTitle: "지원, 업데이트 및 변경" };
policyText.fr = { ...policyText.en!, updated: "Dernière mise à jour : 28 juin 2026", back: (name) => `Retour à ${name}`, contact: "Pour obtenir de l’aide, contactez le développeur à 3371436706@qq.com.", privacyTitle: (name) => `Politique de confidentialité de ${name}`, legalTitle: (name) => `Conditions légales de ${name}`, privacyIntro: (name, purpose) => `Ce document explique comment ${name} traite localement les données liées à ${purpose}. La politique de confidentialité traite uniquement du traitement, du stockage, du contrôle et du support ; elle ne couvre pas les prix, essais ou remboursements.`, legalIntro: (name) => `Ce document explique la licence, l’achat Store, l’essai, les remboursements, les contenus utilisateur, les responsabilités, limites et supports de ${name}.`, storeAuthority: "Lorsqu’un produit est obtenu ou acheté via Microsoft Store, les prix, taxes, promotions, disponibilités, annulations et remboursements suivent les règles affichées par Microsoft Store dans la région du client.", productPurpose: { deskhaven: "l’organisation de fichiers locaux, les coffres, cartes de relations, recherches, sauvegardes et préférences", energyflow: "les journaux d’énergie, états de travail, humeurs, analyses statistiques et préférences", adhd: "le chronométrage de focus, Idea Fridge, sons, notes vocales, retours de fin et préférences" }, productData: { deskhaven: "index de fichiers, chemins, noms, types, tailles, dates de modification, tags, catégories, état de coffre, cartes de relations, index de recherche, sauvegardes et préférences locales", energyflow: "niveaux d’énergie, états de travail, sources d’énergie, humeurs, notes, horodatages, résultats statistiques, vues de tendance et préférences locales", adhd: "durée de focus, état de début et de fin, contenu Idea Fridge, notes vocales ou temporaires, réglages sonores, retour de fin, langue et préférences locales" }, sensitiveExamples: { deskhaven: "documents, images, matériaux de projet, fichiers de mots de passe, clés SSH, exports, documents de travail et autres contenus locaux placés dans DeskHaven", energyflow: "état d’énergie, humeur de travail, signaux de stress, habitudes, rythme temporel et notes personnelles", adhd: "pensées privées, tâches inachevées, notes vocales, difficultés de concentration, état émotionnel et notes temporaires" }, localTitle: "Principe de traitement local", noOnlineTitle: "Aucun envoi aux serveurs du développeur", noOnlineBullets: ["Aucun compte SoloCraft n’est requis.", "Le contenu des fichiers locaux n’est pas envoyé au développeur.", "Les index, statistiques et relations locaux ne sont pas envoyés pour analyse.", "Votre contenu local n’est pas vendu, loué ou partagé.", "Votre contenu local n’est pas utilisé pour entraîner des modèles ou créer des profils publicitaires."], dataTitle: "Types de données locales et finalité", contentTitle: "Contenus sensibles et informations personnelles", securityTitle: "Sécurité, chiffrement et limites", retentionTitle: "Conservation, suppression et récupération", supportTitle: "Informations lors du support", userControlTitle: "Votre contrôle", responsibilityTitle: "Sécurité de l’appareil et services tiers", contactTitle: "Contact et mises à jour", legalLicenseTitle: "Licence", legalStoreTitle: "Prix, essai et règles Store", legalRefundTitle: "Remboursements, annulation et facturation", legalContentTitle: "Contenus utilisateur et propriété des données", legalRiskTitle: "Risques, sauvegardes et conseils professionnels", legalChangeTitle: "Support, mises à jour et changements" };
policyText.de = { ...policyText.en!, updated: "Zuletzt aktualisiert: 28. Juni 2026", back: (name) => `Zurück zu ${name}`, contact: "Für Support kontaktieren Sie den Entwickler unter 3371436706@qq.com.", privacyTitle: (name) => `${name} Datenschutzerklärung`, legalTitle: (name) => `${name} Rechtliche Bedingungen`, privacyIntro: (name, purpose) => `Dieses Dokument erklärt, wie ${name} Daten zu ${purpose} lokal auf dem Gerät verarbeitet. Die Datenschutzerklärung behandelt nur Verarbeitung, Speicherung, Kontrolle und Support-Kommunikation; Preise, Testzeiträume und Rückerstattungen gehören nicht hierher.`, legalIntro: (name) => `Dieses Dokument erklärt Lizenz, Store-Kauf und Testphase, Rückerstattungen, Nutzerinhalte, Datenverantwortung, Einschränkungen und Support für ${name}.`, storeAuthority: "Beim Bezug oder Kauf über Microsoft Store gelten Preise, Steuern, Aktionen, Verfügbarkeit, Kündigung und Erstattungen nach den im jeweiligen Markt angezeigten Microsoft-Store-Regeln.", productPurpose: { deskhaven: "lokale Dateiorganisation, Tresore, Beziehungskarten, Suche, Backups und Einstellungen", energyflow: "Energieprotokolle, Arbeitszustand, Stimmung, statistische Analyse und Einstellungen", adhd: "Fokuszeit, Idea Fridge, Klang, Sprachnotizen, Abschlussfeedback und Einstellungen" }, productData: { deskhaven: "Dateiindizes, Pfade, Namen, Typen, Größen, Änderungszeiten, Tags, Kategorien, Tresorstatus, Beziehungskarten, Suchindizes, Backup-Datensätze und lokale Einstellungen", energyflow: "Energiestufen, Arbeitszustände, Energiequellen, Stimmung, Notizen, Zeitstempel, Statistikwerte, Trendansichten und lokale Einstellungen", adhd: "Fokusdauer, Start- und Endzustand, Idea-Fridge-Inhalte, Sprach- oder Kurznotizen, Klangeinstellungen, Abschlussfeedback, Sprache und lokale Einstellungen" }, sensitiveExamples: { deskhaven: "Dokumente, Bilder, Projektmaterial, Passwortdateien, SSH-Schlüssel, Exporte, Arbeitsmaterial und andere lokale Inhalte in DeskHaven", energyflow: "Energiezustand, Arbeitsstimmung, Stresssignale, Arbeitsgewohnheiten, Zeitrhythmus und persönliche Notizen", adhd: "private Gedanken, unerledigte Aufgaben, Sprachnotizen, Fokusschwierigkeiten, emotionale Zustände und Kurznotizen" }, localTitle: "Prinzip lokaler Verarbeitung", noOnlineTitle: "Keine Übertragung an Entwickler-Server", noOnlineBullets: ["Kein SoloCraft-Konto erforderlich.", "Lokale Dateiinhalte werden nicht an den Entwickler hochgeladen.", "Lokale Indizes, Statistiken und Beziehungen werden nicht zur Analyse gesendet.", "Lokale Nutzungsinhalte werden nicht verkauft, vermietet oder geteilt.", "Lokale Inhalte werden nicht für Modelltraining oder Werbeprofile verwendet."], dataTitle: "Lokale Datentypen und Zweck", contentTitle: "Sensible Inhalte und personenbezogene Materialien", securityTitle: "Sicherheit, Verschlüsselung und Grenzen", retentionTitle: "Aufbewahrung, Löschung und Wiederherstellung", supportTitle: "Informationen in Support-Kommunikation", userControlTitle: "Ihre Kontrolle", responsibilityTitle: "Gerätesicherheit und Drittanbieter", contactTitle: "Kontakt und Aktualisierungen", legalLicenseTitle: "Lizenz", legalStoreTitle: "Preis, Testphase und Store-Regeln", legalRefundTitle: "Erstattungen, Kündigung und Abrechnung", legalContentTitle: "Nutzerinhalte und Dateneigentum", legalRiskTitle: "Risiken, Backups und professionelle Beratung", legalChangeTitle: "Support, Updates und Änderungen" };
policyText.es = { ...policyText.en!, updated: "Última actualización: 28 de junio de 2026", back: (name) => `Volver a ${name}`, contact: "Para soporte, contacta al desarrollador en 3371436706@qq.com.", privacyTitle: (name) => `Política de privacidad de ${name}`, legalTitle: (name) => `Términos legales de ${name}`, privacyIntro: (name, purpose) => `Este documento explica cómo ${name} trata localmente los datos relacionados con ${purpose}. La política de privacidad solo cubre tratamiento, almacenamiento, control y soporte; no incluye precios, pruebas ni reembolsos.`, legalIntro: (name) => `Este documento explica licencia, compra en Store, prueba, reembolsos, contenido del usuario, responsabilidad de datos, límites y soporte de ${name}.`, storeAuthority: "Cuando un producto se obtiene o compra mediante Microsoft Store, precios, impuestos, promociones, disponibilidad, cancelación y reembolsos se rigen por las reglas de Microsoft Store mostradas en la región del cliente.", productPurpose: { deskhaven: "organización de archivos locales, bóvedas, mapas de relaciones, búsqueda, copias de seguridad y preferencias", energyflow: "registros de energía, estado de trabajo, ánimo, análisis estadístico y preferencias", adhd: "temporización de foco, Idea Fridge, sonido, notas de voz, feedback de finalización y preferencias" }, productData: { deskhaven: "índices de archivos, rutas, nombres, tipos, tamaños, fechas de modificación, etiquetas, categorías, estado de bóveda, mapas de relaciones, índices de búsqueda, copias de seguridad y preferencias locales", energyflow: "niveles de energía, estados de trabajo, fuentes de energía, ánimo, notas, marcas de tiempo, resultados estadísticos, vistas de tendencia y preferencias locales", adhd: "duración de foco, estado de inicio y fin, contenido de Idea Fridge, notas de voz o temporales, sonido, feedback, idioma y preferencias locales" }, sensitiveExamples: { deskhaven: "documentos, imágenes, materiales de proyecto, archivos de contraseñas, claves SSH, exportaciones, materiales de trabajo y otros contenidos locales colocados en DeskHaven", energyflow: "estado de energía, ánimo de trabajo, señales de estrés, hábitos, ritmo temporal y notas personales", adhd: "pensamientos privados, tareas pendientes, notas de voz, dificultades de concentración, estado emocional y notas temporales" }, localTitle: "Principio de tratamiento local", noOnlineTitle: "Sin subida a servidores del desarrollador", noOnlineBullets: ["No se requiere cuenta SoloCraft.", "El contenido de archivos locales no se sube al desarrollador.", "Índices, estadísticas y relaciones locales no se envían para análisis.", "Tu contenido local no se vende, alquila ni comparte.", "Tu contenido local no se usa para entrenar modelos ni crear perfiles publicitarios."], dataTitle: "Tipos de datos locales y finalidad", contentTitle: "Contenido sensible y material personal", securityTitle: "Seguridad, cifrado y límites", retentionTitle: "Conservación, eliminación y recuperación", supportTitle: "Información en comunicaciones de soporte", userControlTitle: "Tu control", responsibilityTitle: "Seguridad del dispositivo y servicios de terceros", contactTitle: "Contacto y actualizaciones", legalLicenseTitle: "Licencia", legalStoreTitle: "Precio, prueba y reglas de Store", legalRefundTitle: "Reembolsos, cancelación y facturación", legalContentTitle: "Contenido del usuario y propiedad de datos", legalRiskTitle: "Riesgos, copias y consejo profesional", legalChangeTitle: "Soporte, actualizaciones y cambios" };
policyText.ru = { ...policyText.en!, updated: "Последнее обновление: 28 июня 2026 г.", back: (name) => `Вернуться к ${name}`, contact: "Для поддержки свяжитесь с разработчиком: 3371436706@qq.com.", privacyTitle: (name) => `Политика конфиденциальности ${name}`, legalTitle: (name) => `Правовые условия ${name}`, privacyIntro: (name, purpose) => `Этот документ объясняет, как ${name} локально обрабатывает данные, связанные с ${purpose}. Политика конфиденциальности касается только обработки, хранения, контроля и поддержки; цены, пробные периоды и возвраты сюда не входят.`, legalIntro: (name) => `Этот документ описывает лицензию, покупку и пробный период в Store, возвраты, пользовательский контент, ответственность за данные, ограничения и поддержку ${name}.`, storeAuthority: "При получении или покупке через Microsoft Store цены, налоги, акции, доступность, отмена и возврат определяются правилами Microsoft Store, отображаемыми в регионе клиента.", productPurpose: { deskhaven: "локальной организацией файлов, хранилищами, картами связей, поиском, резервными копиями и настройками", energyflow: "записями энергии, рабочим состоянием, настроением, статистическим анализом и настройками", adhd: "таймером фокуса, Idea Fridge, звуком, голосовыми заметками, итоговой обратной связью и настройками" }, productData: { deskhaven: "индексы файлов, пути, имена, типы, размеры, время изменения, теги, категории, состояние хранилища, карты связей, поисковые индексы, записи резервного копирования и локальные настройки", energyflow: "уровни энергии, рабочие состояния, источники энергии, настроение, заметки, временные метки, статистика, тренды и локальные настройки", adhd: "длительность фокуса, начало и завершение, содержимое Idea Fridge, голосовые или временные заметки, звук, итоговая обратная связь, язык и локальные настройки" }, sensitiveExamples: { deskhaven: "документы, изображения, проектные материалы, файлы паролей, SSH-ключи, экспорты, рабочие материалы и другой локальный контент в DeskHaven", energyflow: "энергетическое состояние, рабочее настроение, признаки стресса, привычки, временной ритм и личные заметки", adhd: "личные мысли, незавершённые задачи, голосовые заметки, трудности концентрации, эмоциональное состояние и временные записи" }, localTitle: "Принцип локальной обработки", noOnlineTitle: "Нет загрузки на серверы разработчика", noOnlineBullets: ["Учётная запись SoloCraft не требуется.", "Содержимое локальных файлов не загружается разработчику.", "Локальные индексы, статистика и связи не отправляются для анализа.", "Локальный пользовательский контент не продаётся, не сдаётся и не передаётся.", "Локальный контент не используется для обучения моделей или рекламных профилей."], dataTitle: "Типы локальных данных и цель", contentTitle: "Чувствительный контент и личные материалы", securityTitle: "Безопасность, шифрование и ограничения", retentionTitle: "Хранение, удаление и восстановление", supportTitle: "Информация при обращении в поддержку", userControlTitle: "Ваш контроль", responsibilityTitle: "Безопасность устройства и сторонние сервисы", contactTitle: "Контакт и обновления политики", legalLicenseTitle: "Лицензия", legalStoreTitle: "Цена, пробный период и правила Store", legalRefundTitle: "Возвраты, отмена и выставление счетов", legalContentTitle: "Пользовательский контент и владение данными", legalRiskTitle: "Риски, резервные копии и профессиональные советы", legalChangeTitle: "Поддержка, обновления и изменения" };
policyText.pt = { ...policyText.en!, updated: "Última atualização: 28 de junho de 2026", back: (name) => `Voltar para ${name}`, contact: "Para suporte, contacte o desenvolvedor em 3371436706@qq.com.", privacyTitle: (name) => `Política de privacidade do ${name}`, legalTitle: (name) => `Termos legais do ${name}`, privacyIntro: (name, purpose) => `Este documento explica como ${name} trata localmente dados relacionados a ${purpose}. A política de privacidade cobre apenas tratamento, armazenamento, controle e suporte; não cobre preço, teste ou reembolso.`, legalIntro: (name) => `Este documento explica licença, compra na Store, teste, reembolsos, conteúdo do usuário, responsabilidade de dados, limitações e suporte para ${name}.`, storeAuthority: "Quando um produto é obtido ou comprado pela Microsoft Store, preços, impostos, promoções, disponibilidade, cancelamento e reembolso seguem as regras exibidas pela Microsoft Store na região do cliente.", productPurpose: { deskhaven: "organização de arquivos locais, cofres, mapas de relacionamento, busca, backups e preferências", energyflow: "registros de energia, estado de trabalho, humor, análise estatística e preferências", adhd: "tempo de foco, Idea Fridge, som, notas de voz, feedback de conclusão e preferências" }, productData: { deskhaven: "índices de arquivos, caminhos, nomes, tipos, tamanhos, datas de modificação, tags, categorias, estado do cofre, mapas de relacionamento, índices de busca, registros de backup e preferências locais", energyflow: "níveis de energia, estados de trabalho, fontes de energia, humor, notas, horários, resultados estatísticos, tendências e preferências locais", adhd: "duração de foco, início e fim, conteúdo do Idea Fridge, notas de voz ou temporárias, som, feedback, idioma e preferências locais" }, sensitiveExamples: { deskhaven: "documentos, imagens, materiais de projeto, arquivos de senha, chaves SSH, exportações, materiais de trabalho e outros conteúdos locais colocados no DeskHaven", energyflow: "estado de energia, humor de trabalho, sinais de estresse, hábitos, ritmo de tempo e notas pessoais", adhd: "pensamentos privados, tarefas inacabadas, notas de voz, dificuldades de foco, estado emocional e notas temporárias" }, localTitle: "Princípio de tratamento local", noOnlineTitle: "Sem envio para servidores do desenvolvedor", noOnlineBullets: ["Nenhuma conta SoloCraft é necessária.", "Conteúdo de arquivos locais não é enviado ao desenvolvedor.", "Índices, estatísticas e relações locais não são enviados para análise.", "Seu conteúdo local não é vendido, alugado ou compartilhado.", "Seu conteúdo local não é usado para treinar modelos ou criar perfis de publicidade."], dataTitle: "Tipos de dados locais e finalidade", contentTitle: "Conteúdo sensível e material pessoal", securityTitle: "Segurança, criptografia e limites", retentionTitle: "Retenção, exclusão e recuperação", supportTitle: "Informações em contato de suporte", userControlTitle: "Seu controle", responsibilityTitle: "Segurança do dispositivo e serviços de terceiros", contactTitle: "Contato e atualizações", legalLicenseTitle: "Licença", legalStoreTitle: "Preço, teste e regras da Store", legalRefundTitle: "Reembolsos, cancelamento e cobrança", legalContentTitle: "Conteúdo do usuário e propriedade dos dados", legalRiskTitle: "Riscos, backups e aconselhamento profissional", legalChangeTitle: "Suporte, atualizações e mudanças" };

function t(locale: Locale) {
  return policyText[locale] ?? policyText.en!;
}

function privacySections(product: ProductId, locale: Locale): PolicySection[] {
  const text = t(locale);
  const name = productNames[product];
  const productData = text.productData[product];
  const examples = text.sensitiveExamples[product];
  return [
    { title: text.localTitle, body: text.localBody(name, productData) },
    { title: text.noOnlineTitle, body: text.noOnlineBody(name), bullets: text.noOnlineBullets },
    { title: text.dataTitle, body: text.dataBody(name, productData) },
    { title: text.contentTitle, body: text.contentBody(name, examples) },
    { title: text.securityTitle, body: text.securityBody(name) },
    { title: text.retentionTitle, body: text.retentionBody(name) },
    { title: text.supportTitle, body: text.supportBody(name) },
    { title: text.userControlTitle, body: text.userControlBody(name) },
    { title: text.responsibilityTitle, body: text.responsibilityBody(name) },
    { title: text.contactTitle, body: [text.contact, text.updated] },
  ];
}

function legalSections(product: ProductId, locale: Locale): PolicySection[] {
  const text = t(locale);
  const name = productNames[product];
  const pricing = productPricing(product, locale);
  return [
    { title: text.legalLicenseTitle, body: text.legalLicenseBody(name) },
    { title: text.legalStoreTitle, body: text.legalStoreBody(pricing.summary, pricing.trial, text.storeAuthority) },
    { title: text.legalRefundTitle, body: text.legalRefundBody },
    { title: text.legalContentTitle, body: text.legalContentBody },
    { title: text.legalRiskTitle, body: text.legalRiskBody },
    { title: text.legalChangeTitle, body: [...text.legalChangeBody, text.contact] },
  ];
}

export function productPolicyCopy(product: ProductId, kind: PolicyKind, locale: Locale): ProductPolicyCopy {
  const text = t(locale);
  const name = productNames[product];
  const purpose = text.productPurpose[product];

  if (kind === "privacy") {
    return {
      title: text.privacyTitle(name),
      intro: text.privacyIntro(name, purpose),
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
