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

type L = {
  updated: string;
  back: (name: string) => string;
  contact: string;
  privacyTitle: (name: string) => string;
  legalTitle: (name: string) => string;
  privacyIntro: (name: string, purpose: string) => string;
  legalIntro: (name: string) => string;
  store: string;
  purpose: Record<ProductId, string>;
  data: Record<ProductId, string>;
  sensitive: Record<ProductId, string>;
  noOnlineBullets: string[];
  privacyTitles: string[];
  legalTitles: string[];
  privacyBodies: {
    local: (name: string, data: string) => string[];
    noOnline: (name: string) => string[];
    dataUse: (name: string, data: string) => string[];
    sensitive: (name: string, examples: string) => string[];
    security: (name: string) => string[];
    retention: (name: string) => string[];
    support: (name: string) => string[];
    control: (name: string) => string[];
    thirdParty: (name: string) => string[];
  };
  legalBodies: {
    license: (name: string) => string[];
    store: (summary: string, trial: string, store: string) => string[];
    refund: string[];
    content: string[];
    risk: string[];
    changes: string[];
  };
};

const zh: L = {
  updated: "最后更新：2026 年 6 月 28 日",
  back: (name) => `返回 ${name}`,
  contact: "如需联系开发者，请发送邮件至 3371436706@qq.com。",
  privacyTitle: (name) => `${name} 隐私政策`,
  legalTitle: (name) => `${name} 法律与使用条款`,
  privacyIntro: (name, purpose) => `本文件说明 ${name} 在本地设备上如何处理与${purpose}相关的数据。隐私政策只讨论数据处理、存储、控制权和支持沟通，不包含价格、试用、账单或退款规则。`,
  legalIntro: (name) => `本文件说明 ${name} 的使用许可、商店购买与试用、退款路径、用户内容、数据责任、限制和支持方式。`,
  store: "通过 Microsoft Store 获取或购买产品时，价格、税费、促销、可用性、取消和退款流程以用户所在地区的 Microsoft Store 显示与规则为准。",
  purpose: { deskhaven: "本地文件整理、文件仓、关系图谱、搜索、备份和偏好设置", energyflow: "精力记录、工作状态、情绪、统计分析和偏好设置", adhd: "专注计时、想法冰箱、声音、语音记录、完成反馈和偏好设置" },
  data: { deskhaven: "文件索引、文件路径、文件名、文件类型、大小、修改时间、标签、分类、文件仓状态、关系图谱、搜索索引、备份记录和本地偏好设置", energyflow: "精力等级、工作状态、能量来源、心情、备注、时间戳、统计结果、趋势视图和本地偏好设置", adhd: "专注时长、开始与结束状态、想法冰箱内容、语音或临时记录、声音设置、完成反馈、语言设置和本地偏好设置" },
  sensitive: { deskhaven: "文档、图片、项目资料、密码文件、SSH 密钥、导出文件、工作资料和其他你主动放入 DeskHaven 的本地内容", energyflow: "精力状态、工作情绪、压力感受、工作习惯、时间节奏和个人备注", adhd: "私人想法、未完成任务、语音记录、专注困难、情绪状态和临时笔记" },
  noOnlineBullets: ["不要求注册 SoloCraft 账户。", "不把本地文件内容上传给开发者。", "不把本地索引、统计记录或关系数据发送给开发者分析。", "不出售、出租或共享你的本地使用内容。", "不使用你的本地内容训练模型或建立广告画像。"],
  privacyTitles: ["本地优先处理原则", "不会上传到开发者服务器", "本地数据类型和用途", "敏感内容与个人资料", "安全、加密和保护限制", "保留、删除和恢复", "支持沟通中的信息", "你的控制权", "设备安全和第三方服务", "联系与政策更新"],
  legalTitles: ["使用许可", "价格、试用与商店规则", "退款、取消和账单", "用户内容与数据所有权", "使用风险与备份责任", "支持、更新与条款变更"],
  privacyBodies: {
    local: (name, data) => [`${name} 的核心体验围绕本地 Windows 设备设计。与功能相关的数据包括 ${data}，这些数据默认围绕你的本机环境处理。`, "除非你主动导出、备份、复制、发送支持邮件，或使用操作系统/第三方工具把文件同步到其他位置，开发者不会远程读取这些本地数据。"],
    noOnline: (name) => [`${name} 不要求在线账户才能使用核心功能，也不把你的本地内容作为在线个人档案上传给开发者。`, "如果你的设备、OneDrive、网盘、系统备份或第三方同步工具另行同步了相关文件，那属于你选择的系统或第三方服务行为，不是本应用向开发者上传。"],
    dataUse: (_name, data) => [`应用可能在本地保存或生成 ${data}。这些数据用于让界面继续工作，例如搜索、筛选、统计、回顾、恢复、自动化整理或保持你的偏好设置。`, "应用处理这些数据的目的，是让你在自己的设备上更容易找回、理解和管理信息，而不是收集更多个人资料。"],
    sensitive: (_name, examples) => [`你可能在使用过程中处理 ${examples}。这些内容可能具有私人性或商业敏感性，请把它们当作重要本地资料对待。`, "如果你在共享电脑、公司设备或未加密磁盘上使用本应用，请额外注意 Windows 账户、磁盘权限、屏幕可见性、系统备份和本地文件夹访问权限。"],
    security: (name) => [`${name} 可能提供本地保存、密码保护、加密、备份、恢复或防窥相关能力，实际可用范围取决于应用版本、Windows 环境和你启用的设置。`, "这些保护可以降低误看、误删或未授权读取风险，但不能替代完整的设备安全方案。请继续使用系统账户密码、磁盘加密、可信备份和谨慎的文件权限设置。"],
    retention: (name) => [`${name} 的本地数据通常会保留在你的设备或你选择的保存位置，直到你在应用内清理、删除、重置，或通过系统文件管理方式移除相关内容。`, "删除后的本地数据可能无法由开发者恢复。若你需要长期保存记录或文件，请自行维护备份；若你需要彻底清理，请同时检查应用数据目录、导出目录和系统备份。"],
    support: () => ["如果你主动通过邮件联系开发者，你提供的邮箱地址、问题描述、截图、日志片段或附件只会用于理解问题和回复支持请求。", "请不要在支持邮件中发送不必要的密码、私钥、身份证件、完整客户资料或其他高度敏感内容。若必须提供截图，请先遮挡不相关的私人信息。"],
    control: (name) => [`你可以决定是否把相关内容放入 ${name}，也可以在应用中管理、导出、删除或重置本地记录和偏好。`, "如果你不希望某些内容被应用纳入处理范围，请不要把它们放入应用监控路径、文件仓、记录流程、想法记录或手动导入流程中。"],
    thirdParty: () => ["本应用无法控制你的操作系统账户、磁盘、公司设备策略、杀毒软件、备份软件、云盘同步、浏览器扩展或其他第三方工具。", "如果这些系统或工具访问、同步、备份或上传了本地文件，请查看对应服务的隐私政策和设置。本政策只说明 SoloCraft 应用本身的处理方式。"],
  },
  legalBodies: {
    license: (name) => [`你获得的是安装和使用 ${name} 的个人、非独占、不可转让许可，而不是软件本身的所有权转让。`, "除非法律明确允许或开发者书面授权，请勿反向工程、破解、重新分发、转售、租赁、移除版权信息，或以侵犯他人权利、破坏系统安全、规避商店规则的方式使用本软件。"],
    store: (summary, trial, store) => [summary, trial, store],
    refund: ["如果你通过 Microsoft Store 购买或获取本产品，退款、取消、账单、付款方式、税费和地区限制通常由 Microsoft Store 的政策和流程处理。", "开发者可以协助排查产品问题、说明产品功能和提供支持信息，但不能绕过 Microsoft Store 的支付、订单、退款或地区审核系统。"],
    content: ["你保留自己文件、精力记录、专注记录、偏好设置、导入资料和其他用户内容的权利。软件只在实现功能所需的范围内于本地处理这些内容。", "你应自行确认有权处理、整理、备份或导入相关文件和内容。请勿使用本软件管理你没有权限处理的第三方资料。"],
    risk: ["本软件按现状提供。它可以帮助整理文件、记录状态或辅助专注，但不能保证任何特定结果，也不能替代专业医疗、法律、财务、安全审计或数据恢复建议。", "对于重要文件、凭据、密钥、工作资料或个人记录，请保持你自己的系统备份与恢复方案。任何本地删除、覆盖、磁盘故障、系统权限错误或用户操作造成的损失，开发者可能无法恢复。"],
    changes: ["功能、价格、试用、可用市场、语言支持和文档内容可能会随应用版本、Microsoft Store 审核结果和产品策略调整。"],
  },
};

function fromZhTw(): L {
  return {
    ...zh,
    updated: "最後更新：2026 年 6 月 28 日",
    privacyTitle: (name) => `${name} 隱私政策`,
    legalTitle: (name) => `${name} 法律與使用條款`,
    privacyIntro: (name, purpose) => `本文件說明 ${name} 在本地設備上如何處理與${purpose}相關的資料。隱私政策只討論資料處理、儲存、控制權和支援溝通，不包含價格、試用、帳單或退款規則。`,
    store: "透過 Microsoft Store 取得或購買產品時，價格、稅費、促銷、可用性、取消和退款流程以使用者所在地區的 Microsoft Store 顯示與規則為準。",
    contact: "如需聯絡開發者，請發送郵件至 3371436706@qq.com。",
    productPurpose: { deskhaven: "本地文件整理、文件倉、關係圖譜、搜尋、備份和偏好設定", energyflow: "精力記錄、工作狀態、情緒、統計分析和偏好設定", adhd: "專注計時、想法冰箱、聲音、語音記錄、完成回饋和偏好設定" },
    noOnlineBullets: ["不要求註冊 SoloCraft 帳戶。", "不把本地文件內容上傳給開發者。", "不把本地索引、統計記錄或關係資料發送給開發者分析。", "不出售、出租或共享你的本地使用內容。", "不使用你的本地內容訓練模型或建立廣告画像。"],
    privacyTitles: ["本地優先處理原則", "不會上傳到開發者伺服器", "本地資料類型和用途", "敏感內容與個人資料", "安全、加密和保護限制", "保留、刪除和恢復", "支援溝通中的資訊", "你的控制權", "設備安全和第三方服務", "聯絡與政策更新"],
    legalTitles: ["使用許可", "價格、試用與商店規則", "退款、取消和帳單", "使用者內容與資料所有權", "使用風險與備份責任", "支援、更新與條款變更"],
  };
}

const localized: Partial<Record<Locale, L>> = {
  zh,
  "zh-tw": fromZhTw(),
  en: {
    ...zh,
    updated: "Last updated: June 28, 2026",
    back: (name) => `Back to ${name}`,
    contact: "For support, contact the developer at 3371436706@qq.com.",
    privacyTitle: (name) => `${name} Privacy Policy`,
    legalTitle: (name) => `${name} Legal Terms`,
    privacyIntro: (name, purpose) => `This document explains how ${name} handles data related to ${purpose} on the local device. The privacy policy covers data processing, storage, control, and support communication only; it does not cover pricing, trials, billing, or refund rules.`,
    legalIntro: (name) => `This document explains the license, Store purchase and trial path, refunds, user content, data responsibility, limitations, and support for ${name}.`,
    store: "When a product is obtained or purchased through Microsoft Store, pricing, taxes, promotions, availability, cancellation, and refund flows are governed by the Microsoft Store listing and rules shown in the customer’s region.",
    productPurpose: { deskhaven: "local file organization, vaults, relationship maps, search, backups, and preferences", energyflow: "energy logs, work state, mood, statistical analysis, and preferences", adhd: "focus timing, Idea Fridge content, sound, voice notes, completion feedback, and preferences" },
    productData: { deskhaven: "file indexes, paths, names, types, sizes, modified times, tags, categories, vault state, relationship maps, search indexes, backup records, and local preferences", energyflow: "energy levels, work states, energy sources, mood, notes, timestamps, statistical results, trend views, and local preferences", adhd: "focus duration, start and end state, Idea Fridge content, voice or temporary notes, sound settings, completion feedback, language settings, and local preferences" },
    sensitive: { deskhaven: "documents, images, project materials, password files, SSH keys, exported files, work materials, and other local content you choose to place in DeskHaven", energyflow: "energy state, work mood, stress signals, work habits, time rhythm, and personal notes", adhd: "private thoughts, unfinished tasks, voice notes, focus difficulties, emotional state, and temporary notes" },
    noOnlineBullets: ["No SoloCraft account is required.", "Local file contents are not uploaded to the developer.", "Local indexes, statistics, or relationship data are not sent to the developer for analysis.", "Your local usage content is not sold, rented, or shared.", "Your local content is not used to train models or build advertising profiles."],
    privacyTitles: ["Local-first processing principle", "No upload to developer servers", "Local data types and purpose", "Sensitive content and personal material", "Security, encryption, and protection limits", "Retention, deletion, and recovery", "Information in support communication", "Your control", "Device security and third-party services", "Contact and policy updates"],
    legalTitles: ["License", "Pricing, trial, and Store rules", "Refunds, cancellation, and billing", "User content and data ownership", "Risk, backups, and professional advice", "Support, updates, and changes"],
    privacyBodies: {
      local: (name, data) => [`${name} is designed around the local Windows device. Feature-related data may include ${data}, and this data is processed around your local environment by default.`, "Unless you export, back up, copy, send a support email, or use the operating system or a third-party tool to sync files elsewhere, the developer does not remotely read this local data."],
      noOnline: (name) => [`${name} does not require an online account for core features and does not upload your local content to the developer as an online profile.`, "If your device, OneDrive, cloud drive, system backup, or third-party sync tool separately synchronizes related files, that is the behavior of the system or service you chose, not an upload from this app to the developer."],
      dataUse: (_name, data) => [`The app may locally store or generate ${data}. This data keeps the interface working, including search, filtering, statistics, review, recovery, background organization, or preferences.`, "The purpose of processing this data is to help you find, understand, and manage information on your own device, not to collect more personal information."],
      sensitive: (_name, examples) => [`During use, you may handle ${examples}. Such content may be private or commercially sensitive, and should be treated as important local material.`, "If you use the app on a shared computer, company device, or unencrypted disk, pay attention to the Windows account, disk permissions, screen visibility, system backups, and local folder access."],
      security: (name) => [`${name} may provide local storage, password protection, encryption, backup, restore, or screen-protection features depending on app version, Windows environment, and enabled settings.`, "These protections can reduce accidental viewing, deletion, or unauthorized reading risk, but they are not a complete device-security strategy. Continue using system passwords, disk encryption, trusted backups, and careful file permissions."],
      retention: (name) => [`${name} local data usually remains on your device or chosen storage location until you clear, delete, reset, or remove it through the system file manager.`, "Deleted local data may not be recoverable by the developer. If you need long-term retention, maintain your own backup. If you need full cleanup, also check app data directories, export locations, and system backups."],
      support: () => ["If you voluntarily contact the developer by email, the email address, issue description, screenshots, log excerpts, or attachments you provide are used only to understand the issue and respond to the support request.", "Do not send unnecessary passwords, private keys, identity documents, full customer records, or other highly sensitive content in support emails. If screenshots are necessary, mask unrelated private information first."],
      control: (name) => [`You decide whether to place content into ${name}, and you can manage, export, delete, or reset local records and preferences in the app.`, "If you do not want certain content to be included, do not place it in monitored paths, vaults, logging flows, idea records, or manual import workflows."],
      thirdParty: () => ["The app cannot control your operating-system account, disk, company device policies, antivirus software, backup software, cloud-drive sync, browser extensions, or other third-party tools.", "If those systems or tools access, sync, back up, or upload local files, review the privacy policy and settings of the corresponding service. This policy only explains the behavior of the SoloCraft app itself."],
    },
    legalBodies: {
      license: (name) => [`You receive a personal, non-exclusive, non-transferable license to install and use ${name}. You do not receive ownership of the software itself.`, "Do not reverse engineer, crack, redistribute, resell, rent, remove copyright notices, violate third-party rights, compromise system security, or bypass Store rules unless expressly allowed by law or written permission from the developer."],
      store: (summary, trial, store) => [summary, trial, store],
      refund: ["For products obtained or purchased through Microsoft Store, refunds, cancellation, billing, payment methods, taxes, and regional restrictions are generally handled by Microsoft Store policies and workflows.", "The developer can help investigate product issues, explain app behavior, and provide support information, but cannot bypass Microsoft Store payment, order, refund, or regional review systems."],
      content: ["You retain rights to your files, energy logs, focus records, preferences, imported materials, and other user content. The software processes that content locally only to the extent needed for the relevant feature.", "You are responsible for confirming that you have the right to process, organize, back up, or import the files and content you use with the software."],
      risk: ["The software is provided as is. It can help organize files, record state, or support focus, but it does not guarantee a particular outcome and is not a substitute for professional medical, legal, financial, security-audit, or data-recovery advice.", "For important files, credentials, keys, work materials, or personal records, keep your own system-level backup and recovery plan. The developer may not be able to recover data lost through local deletion, overwrite, disk failure, permission errors, or user action."],
      changes: ["Features, pricing, trial terms, available markets, language support, and documentation may change with app versions, Microsoft Store review results, and product strategy."],
    },
  },
};

localized.ja = { ...localized.en!, updated: "最終更新日：2026年6月28日", back: (name) => `${name} に戻る`, contact: "サポートが必要な場合は 3371436706@qq.com までご連絡ください。", privacyTitle: (name) => `${name} プライバシーポリシー`, legalTitle: (name) => `${name} 法的条項`, privacyIntro: (name, purpose) => `本書は、${name} がローカル端末上で ${purpose} に関連するデータをどのように扱うかを説明します。価格、試用、請求、返金規則は含みません。`, legalIntro: (name) => `本書は ${name} のライセンス、Store 購入と試用、返金、ユーザー内容、責任、制限、サポートについて説明します。`, noOnlineBullets: ["SoloCraft アカウントは不要です。", "ローカルファイル内容は開発者へアップロードされません。", "索引、統計、関係データは分析目的で送信されません。", "ローカル利用内容は販売、貸与、共有されません。", "ローカル内容はモデル訓練や広告プロフィールに使用されません。"], privacyTitles: ["ローカル優先の処理原則", "開発者サーバーへアップロードしません", "ローカルデータの種類と目的", "機密内容と個人情報", "セキュリティ、暗号化、保護の限界", "保持、削除、復元", "サポート連絡時の情報", "利用者の制御", "端末セキュリティと第三者サービス", "連絡とポリシー更新"], legalTitles: ["使用許可", "価格、試用、Store 規則", "返金、キャンセル、請求", "ユーザー内容とデータ所有権", "リスク、バックアップ、専門助言", "サポート、更新、変更"] };
localized.ko = { ...localized.en!, updated: "마지막 업데이트: 2026년 6월 28일", back: (name) => `${name}으로 돌아가기`, contact: "지원이 필요하면 3371436706@qq.com 으로 개발자에게 연락하세요.", privacyTitle: (name) => `${name} 개인정보 처리방침`, legalTitle: (name) => `${name} 법률 및 사용 약관`, privacyIntro: (name, purpose) => `이 문서는 ${name}이(가) 로컬 기기에서 ${purpose} 관련 데이터를 어떻게 처리하는지 설명합니다. 가격, 체험판, 청구, 환불 규칙은 포함하지 않습니다.`, legalIntro: (name) => `이 문서는 ${name}의 라이선스, Store 구매와 체험판, 환불, 사용자 콘텐츠, 책임, 제한 및 지원을 설명합니다.`, noOnlineBullets: ["SoloCraft 계정이 필요하지 않습니다.", "로컬 파일 내용은 개발자에게 업로드되지 않습니다.", "인덱스, 통계, 관계 데이터는 분석 목적으로 전송되지 않습니다.", "로컬 사용 내용은 판매, 임대, 공유되지 않습니다.", "로컬 콘텐츠는 모델 학습이나 광고 프로필 작성에 사용되지 않습니다."], privacyTitles: ["로컬 우선 처리 원칙", "개발자 서버로 업로드하지 않음", "로컬 데이터 유형과 목적", "민감한 콘텐츠와 개인정보", "보안, 암호화 및 보호 한계", "보관, 삭제 및 복구", "지원 연락 중의 정보", "사용자의 제어권", "기기 보안과 제3자 서비스", "연락 및 정책 업데이트"], legalTitles: ["사용 허가", "가격, 체험판 및 Store 규칙", "환불, 취소 및 청구", "사용자 콘텐츠와 데이터 소유권", "위험, 백업 및 전문 조언", "지원, 업데이트 및 변경"] };
localized.fr = { ...localized.en!, updated: "Dernière mise à jour : 28 juin 2026", back: (name) => `Retour à ${name}`, contact: "Pour obtenir de l’aide, contactez le développeur à 3371436706@qq.com.", privacyTitle: (name) => `Politique de confidentialité de ${name}`, legalTitle: (name) => `Conditions légales de ${name}`, privacyIntro: (name, purpose) => `Ce document explique comment ${name} traite localement les données liées à ${purpose}. Il ne couvre pas les prix, essais, facturation ou remboursements.`, legalIntro: (name) => `Ce document explique la licence, l’achat Store, l’essai, les remboursements, les contenus utilisateur, les limites et le support de ${name}.`, noOnlineBullets: ["Aucun compte SoloCraft n’est requis.", "Le contenu local n’est pas envoyé au développeur.", "Les index, statistiques et relations ne sont pas envoyés pour analyse.", "Votre contenu local n’est pas vendu, loué ou partagé.", "Votre contenu local n’est pas utilisé pour entraîner des modèles ou créer des profils publicitaires."], privacyTitles: ["Principe de traitement local", "Aucun envoi aux serveurs du développeur", "Types de données locales et finalité", "Contenus sensibles et informations personnelles", "Sécurité, chiffrement et limites", "Conservation, suppression et récupération", "Informations lors du support", "Votre contrôle", "Sécurité de l’appareil et services tiers", "Contact et mises à jour"], legalTitles: ["Licence", "Prix, essai et règles Store", "Remboursements, annulation et facturation", "Contenus utilisateur et propriété des données", "Risques, sauvegardes et conseils professionnels", "Support, mises à jour et changements"] };
localized.de = { ...localized.en!, updated: "Zuletzt aktualisiert: 28. Juni 2026", back: (name) => `Zurück zu ${name}`, contact: "Für Support kontaktieren Sie den Entwickler unter 3371436706@qq.com.", privacyTitle: (name) => `${name} Datenschutzerklärung`, legalTitle: (name) => `${name} Rechtliche Bedingungen`, privacyIntro: (name, purpose) => `Dieses Dokument erklärt, wie ${name} Daten zu ${purpose} lokal verarbeitet. Preise, Testzeiträume, Abrechnung und Erstattungen sind nicht Teil dieser Erklärung.`, legalIntro: (name) => `Dieses Dokument erklärt Lizenz, Store-Kauf, Testphase, Erstattungen, Nutzerinhalte, Grenzen und Support für ${name}.`, noOnlineBullets: ["Kein SoloCraft-Konto erforderlich.", "Lokale Dateiinhalte werden nicht an den Entwickler hochgeladen.", "Indizes, Statistiken und Beziehungen werden nicht zur Analyse gesendet.", "Lokale Inhalte werden nicht verkauft, vermietet oder geteilt.", "Lokale Inhalte werden nicht für Modelltraining oder Werbeprofile verwendet."], privacyTitles: ["Prinzip lokaler Verarbeitung", "Keine Übertragung an Entwickler-Server", "Lokale Datentypen und Zweck", "Sensible Inhalte und personenbezogene Materialien", "Sicherheit, Verschlüsselung und Grenzen", "Aufbewahrung, Löschung und Wiederherstellung", "Informationen in Support-Kommunikation", "Ihre Kontrolle", "Gerätesicherheit und Drittanbieter", "Kontakt und Aktualisierungen"], legalTitles: ["Lizenz", "Preis, Testphase und Store-Regeln", "Erstattungen, Kündigung und Abrechnung", "Nutzerinhalte und Dateneigentum", "Risiken, Backups und professionelle Beratung", "Support, Updates und Änderungen"] };
localized.es = { ...localized.en!, updated: "Última actualización: 28 de junio de 2026", back: (name) => `Volver a ${name}`, contact: "Para soporte, contacta al desarrollador en 3371436706@qq.com.", privacyTitle: (name) => `Política de privacidad de ${name}`, legalTitle: (name) => `Términos legales de ${name}`, privacyIntro: (name, purpose) => `Este documento explica cómo ${name} trata localmente los datos relacionados con ${purpose}. No cubre precios, pruebas, facturación ni reembolsos.`, legalIntro: (name) => `Este documento explica licencia, compra en Store, prueba, reembolsos, contenido del usuario, límites y soporte de ${name}.`, noOnlineBullets: ["No se requiere cuenta SoloCraft.", "El contenido local no se sube al desarrollador.", "Índices, estadísticas y relaciones no se envían para análisis.", "Tu contenido local no se vende, alquila ni comparte.", "Tu contenido local no se usa para entrenar modelos ni crear perfiles publicitarios."], privacyTitles: ["Principio de tratamiento local", "Sin subida a servidores del desarrollador", "Tipos de datos locales y finalidad", "Contenido sensible y material personal", "Seguridad, cifrado y límites", "Conservación, eliminación y recuperación", "Información en comunicaciones de soporte", "Tu control", "Seguridad del dispositivo y servicios de terceros", "Contacto y actualizaciones"], legalTitles: ["Licencia", "Precio, prueba y reglas de Store", "Reembolsos, cancelación y facturación", "Contenido del usuario y propiedad de datos", "Riesgos, copias y consejo profesional", "Soporte, actualizaciones y cambios"] };
localized.ru = { ...localized.en!, updated: "Последнее обновление: 28 июня 2026 г.", back: (name) => `Вернуться к ${name}`, contact: "Для поддержки свяжитесь с разработчиком: 3371436706@qq.com.", privacyTitle: (name) => `Политика конфиденциальности ${name}`, legalTitle: (name) => `Правовые условия ${name}`, privacyIntro: (name, purpose) => `Этот документ объясняет, как ${name} локально обрабатывает данные, связанные с ${purpose}. Цены, пробные периоды, счета и возвраты сюда не входят.`, legalIntro: (name) => `Этот документ описывает лицензию, покупку в Store, пробный период, возвраты, пользовательский контент, ограничения и поддержку ${name}.`, noOnlineBullets: ["Учётная запись SoloCraft не требуется.", "Локальные файлы не загружаются разработчику.", "Индексы, статистика и связи не отправляются для анализа.", "Локальный контент не продаётся, не сдаётся и не передаётся.", "Локальный контент не используется для обучения моделей или рекламных профилей."], privacyTitles: ["Принцип локальной обработки", "Нет загрузки на серверы разработчика", "Типы локальных данных и цель", "Чувствительный контент и личные материалы", "Безопасность, шифрование и ограничения", "Хранение, удаление и восстановление", "Информация при обращении в поддержку", "Ваш контроль", "Безопасность устройства и сторонние сервисы", "Контакт и обновления политики"], legalTitles: ["Лицензия", "Цена, пробный период и правила Store", "Возвраты, отмена и выставление счетов", "Пользовательский контент и владение данными", "Риски, резервные копии и профессиональные советы", "Поддержка, обновления и изменения"] };
localized.pt = { ...localized.en!, updated: "Última atualização: 28 de junho de 2026", back: (name) => `Voltar para ${name}`, contact: "Para suporte, contacte o desenvolvedor em 3371436706@qq.com.", privacyTitle: (name) => `Política de privacidade do ${name}`, legalTitle: (name) => `Termos legais do ${name}`, privacyIntro: (name, purpose) => `Este documento explica como ${name} trata localmente dados relacionados a ${purpose}. Não cobre preço, teste, cobrança ou reembolso.`, legalIntro: (name) => `Este documento explica licença, compra na Store, teste, reembolsos, conteúdo do usuário, limitações e suporte para ${name}.`, noOnlineBullets: ["Nenhuma conta SoloCraft é necessária.", "Conteúdo local não é enviado ao desenvolvedor.", "Índices, estatísticas e relações não são enviados para análise.", "Seu conteúdo local não é vendido, alugado ou compartilhado.", "Seu conteúdo local não é usado para treinar modelos ou criar perfis de publicidade."], privacyTitles: ["Princípio de tratamento local", "Sem envio para servidores do desenvolvedor", "Tipos de dados locais e finalidade", "Conteúdo sensível e material pessoal", "Segurança, criptografia e limites", "Retenção, exclusão e recuperação", "Informações em contato de suporte", "Seu controle", "Segurança do dispositivo e serviços de terceiros", "Contato e atualizações"], legalTitles: ["Licença", "Preço, teste e regras da Store", "Reembolsos, cancelamento e cobrança", "Conteúdo do usuário e propriedade dos dados", "Riscos, backups e aconselhamento profissional", "Suporte, atualizações e mudanças"] };

function text(locale: Locale): L {
  return localized[locale] ?? localized.en!;
}

function privacySections(product: ProductId, locale: Locale): PolicySection[] {
  const l = text(locale);
  const name = productNames[product];
  return [
    { title: l.privacyTitles[0], body: l.privacyBodies.local(name, l.data[product]) },
    { title: l.privacyTitles[1], body: l.privacyBodies.noOnline(name), bullets: l.noOnlineBullets },
    { title: l.privacyTitles[2], body: l.privacyBodies.dataUse(name, l.data[product]) },
    { title: l.privacyTitles[3], body: l.privacyBodies.sensitive(name, l.sensitive[product]) },
    { title: l.privacyTitles[4], body: l.privacyBodies.security(name) },
    { title: l.privacyTitles[5], body: l.privacyBodies.retention(name) },
    { title: l.privacyTitles[6], body: l.privacyBodies.support(name) },
    { title: l.privacyTitles[7], body: l.privacyBodies.control(name) },
    { title: l.privacyTitles[8], body: l.privacyBodies.thirdParty(name) },
    { title: l.privacyTitles[9], body: [l.contact, l.updated] },
  ];
}

function legalSections(product: ProductId, locale: Locale): PolicySection[] {
  const l = text(locale);
  const name = productNames[product];
  const pricing = productPricing(product, locale);
  return [
    { title: l.legalTitles[0], body: l.legalBodies.license(name) },
    { title: l.legalTitles[1], body: l.legalBodies.store(pricing.summary, pricing.trial, l.store) },
    { title: l.legalTitles[2], body: l.legalBodies.refund },
    { title: l.legalTitles[3], body: l.legalBodies.content },
    { title: l.legalTitles[4], body: l.legalBodies.risk },
    { title: l.legalTitles[5], body: [...l.legalBodies.changes, l.contact] },
  ];
}

export function productPolicyCopy(product: ProductId, kind: PolicyKind, locale: Locale): ProductPolicyCopy {
  const l = text(locale);
  const name = productNames[product];
  if (kind === "privacy") {
    return { title: l.privacyTitle(name), intro: l.privacyIntro(name, l.purpose[product]), updated: l.updated, back: l.back(name), sections: privacySections(product, locale) };
  }
  return { title: l.legalTitle(name), intro: l.legalIntro(name), updated: l.updated, back: l.back(name), sections: legalSections(product, locale) };
}
