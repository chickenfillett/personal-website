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

function translatedPack(text: {
  updated: string;
  back: string;
  privacy: string;
  legal: string;
  privacyIntro: string;
  legalIntro: string;
  topics: Record<ProductId, string>;
  sensitive: Record<ProductId, string>;
  privacyTitles: string[];
  privacyBullets: string[];
  legalTitles: string[];
  localFirst: string;
  noUpload: string;
  dataPurpose: string;
  sensitiveBody: string;
  securityBody: string;
  supportBody: string;
  controlBody: string;
  thirdPartyBody: string;
  updateBody: string;
  licenseBody: string;
  storeBody: string;
  refundBody: string;
  contentBody: string;
  riskBody: string;
  changeBody: string;
}): PolicyPack {
  return {
    updated: text.updated,
    back: (name) => `${text.back} ${name}`,
    contact: "3371436706@qq.com",
    privacyTitle: (name) => `${name} ${text.privacy}`,
    legalTitle: (name) => `${name} ${text.legal}`,
    privacyIntro: (name, topic) => text.privacyIntro.replace("{name}", name).replace("{topic}", topic),
    legalIntro: (name) => text.legalIntro.replace("{name}", name),
    topic: text.topics,
    sensitive: text.sensitive,
    privacyTitles: text.privacyTitles,
    privacyBullets: text.privacyBullets,
    privacyBodies: (name, topic, sensitive) => [
      [text.localFirst.replace("{name}", name).replace("{topic}", topic)],
      [text.noUpload.replace("{name}", name)],
      [text.dataPurpose.replace("{name}", name).replace("{topic}", topic)],
      [text.sensitiveBody.replace("{name}", name).replace("{sensitive}", sensitive)],
      [text.securityBody.replace("{name}", name)],
      [text.supportBody],
      [text.controlBody.replace("{name}", name)],
      [text.thirdPartyBody],
      [text.updateBody],
    ],
    legalTitles: text.legalTitles,
    legalBodies: (name, summary, trial) => [
      [text.licenseBody.replace("{name}", name)],
      [text.storeBody, summary, trial],
      [text.refundBody],
      [text.contentBody],
      [text.riskBody],
      [text.changeBody],
    ],
  };
}

const ja = translatedPack({
  updated: "最終更新：2026年6月28日",
  back: "戻る：",
  privacy: "プライバシーポリシー",
  legal: "法的条件",
  privacyIntro: "{name} がローカル端末上で {topic} をどのように扱うかを説明します。",
  legalIntro: "{name} のライセンス、ストア規則、ユーザーコンテンツ、責任範囲、サポートについて説明します。",
  topics: { deskhaven: "ローカルファイル、索引、保管庫、関係図、バックアップ、設定", energyflow: "エネルギー記録、作業状態、気分、統計、設定", adhd: "集中時間、Idea Fridge、音、音声メモ、完了記録、設定" },
  sensitive: { deskhaven: "文書、画像、プロジェクト資料、パスワードファイル、鍵、作業資料", energyflow: "体調感、仕事の気分、ストレス、作業習慣、個人メモ", adhd: "個人的な考え、未完了タスク、音声メモ、集中の困難、感情状態" },
  privacyTitles: ["ローカル優先", "開発者サーバーへアップロードしない", "ローカルデータの種類と目的", "機密性のある内容", "安全、バックアップ、削除", "サポート連絡", "ユーザーの管理", "第三者サービスとの境界", "連絡と更新"],
  privacyBullets: ["SoloCraft アカウントは不要です。", "ローカルファイル内容を開発者へ送信しません。", "索引、統計、関係図を分析目的で送信しません。", "ローカル内容を販売、貸与、共有しません。", "広告プロファイルやモデル学習に使いません。"],
  legalTitles: ["使用許諾", "ストア規則", "返金と請求", "ユーザーコンテンツ", "リスク、バックアップ、変更"],
  localFirst: "{name} はローカルの Windows ワークフローを前提に設計されています。{topic} は既定で端末または選択したローカル場所で処理されます。",
  noUpload: "{name} の主要機能はオンラインアカウントを必要とせず、ローカル内容を開発者のオンラインプロフィールとしてアップロードしません。",
  dataPurpose: "{topic} は検索、絞り込み、統計、復元、設定維持などのためにローカルで保存または生成されることがあります。",
  sensitiveBody: "{sensitive} を扱う場合があります。共有端末や会社端末では、OS権限、バックアップ、表示範囲に注意してください。",
  securityBody: "{name} の保護機能は端末全体のセキュリティを置き換えるものではありません。重要な内容は自分でもバックアップしてください。",
  supportBody: "サポートメールで提供された情報は、問題理解と返信のためだけに使用します。不要な秘密情報は送らないでください。",
  controlBody: "{name} に入れる内容、エクスポート、削除、リセットはユーザーが管理できます。",
  thirdPartyBody: "OS、クラウド同期、会社ポリシー、バックアップツールなど第三者サービスの動作は本アプリでは管理できません。",
  updateBody: "ポリシーは機能や文書の更新に合わせて変更されることがあります。連絡先は 3371436706@qq.com です。",
  licenseBody: "{name} をインストールして使用する個人的、非独占、譲渡不可のライセンスが付与されます。",
  storeBody: "Microsoft Store での価格、税、提供地域、キャンセル、返金は Store の表示と規則に従います。",
  refundBody: "返金、請求、支払い方法、地域制限は通常 Microsoft Store の手続きで処理されます。",
  contentBody: "ユーザーは自分のファイル、記録、設定、インポート内容の権利を保持します。",
  riskBody: "ソフトウェアは現状有姿で提供され、医療、法律、財務、安全監査、データ復旧の専門助言に代わるものではありません。",
  changeBody: "機能、価格、試用、提供市場、言語、文書はバージョンや Store 審査により変わることがあります。",
});

const ko = translatedPack({
  ...ja,
  updated: "최종 업데이트: 2026년 6월 28일",
  back: "돌아가기:",
  privacy: "개인정보 처리방침",
  legal: "법률 약관",
  privacyIntro: "{name}이(가) 로컬 장치에서 {topic}을(를) 어떻게 처리하는지 설명합니다.",
  legalIntro: "{name}의 라이선스, Store 규칙, 사용자 콘텐츠, 책임 범위와 지원 방식을 설명합니다.",
  topics: { deskhaven: "로컬 파일, 색인, 보관함, 관계 지도, 백업, 설정", energyflow: "에너지 기록, 작업 상태, 기분, 통계, 설정", adhd: "집중 시간, Idea Fridge, 소리, 음성 메모, 완료 기록, 설정" },
  sensitive: { deskhaven: "문서, 이미지, 프로젝트 자료, 암호 파일, 키, 작업 자료", energyflow: "에너지 상태, 업무 감정, 스트레스 신호, 작업 습관, 개인 메모", adhd: "개인적인 생각, 미완료 작업, 음성 메모, 집중 어려움, 감정 상태" },
  privacyTitles: ["로컬 우선", "개발자 서버로 업로드하지 않음", "로컬 데이터와 목적", "민감한 내용", "보안, 백업, 삭제", "지원 연락", "사용자 제어", "타사 서비스 경계", "연락 및 업데이트"],
  privacyBullets: ["SoloCraft 계정이 필요 없습니다.", "로컬 파일 내용을 개발자에게 업로드하지 않습니다.", "색인, 통계, 관계 지도를 분석용으로 보내지 않습니다.", "로컬 사용 내용을 판매, 대여, 공유하지 않습니다.", "광고 프로필이나 모델 학습에 사용하지 않습니다."],
  legalTitles: ["사용 라이선스", "Store 규칙", "환불 및 청구", "사용자 콘텐츠", "위험, 백업, 변경"],
  localFirst: "{name}은(는) 로컬 Windows 작업 흐름을 중심으로 설계되었습니다. {topic}은(는) 기본적으로 장치 또는 선택한 로컬 위치에서 처리됩니다.",
  noUpload: "{name}의 핵심 기능은 온라인 계정을 요구하지 않으며 로컬 콘텐츠를 개발자 서버의 온라인 프로필로 업로드하지 않습니다.",
  dataPurpose: "{topic}은(는) 검색, 필터링, 통계, 복구, 설정 유지 등을 위해 로컬에 저장되거나 생성될 수 있습니다.",
  sensitiveBody: "{sensitive}을(를) 다룰 수 있습니다. 공유 PC나 회사 장치에서는 Windows 계정, 권한, 백업, 화면 노출에 주의하세요.",
  securityBody: "{name}의 보호 기능은 전체 장치 보안을 대체하지 않습니다. 중요한 파일과 기록은 별도로 백업하세요.",
  supportBody: "지원 메일로 제공한 정보는 문제 이해와 답변에만 사용됩니다. 불필요한 비밀번호, 키, 신분증 자료는 보내지 마세요.",
  controlBody: "{name}에 넣을 콘텐츠와 내보내기, 삭제, 초기화는 사용자가 제어할 수 있습니다.",
  thirdPartyBody: "운영체제, 클라우드 동기화, 회사 정책, 백업 도구 등 타사 서비스의 동작은 이 앱이 제어하지 않습니다.",
  updateBody: "정책은 기능과 문서 업데이트에 따라 변경될 수 있습니다. 연락처는 3371436706@qq.com 입니다.",
  licenseBody: "{name}을(를) 설치하고 사용할 수 있는 개인적, 비독점, 양도 불가 라이선스가 제공됩니다.",
  storeBody: "Microsoft Store의 가격, 세금, 제공 지역, 취소 및 환불은 Store 표시와 규칙을 따릅니다.",
  refundBody: "환불, 청구, 결제 수단, 지역 제한은 일반적으로 Microsoft Store 절차로 처리됩니다.",
  contentBody: "사용자는 자신의 파일, 기록, 설정, 가져온 콘텐츠에 대한 권리를 유지합니다.",
  riskBody: "소프트웨어는 있는 그대로 제공되며 의료, 법률, 재무, 보안 감사 또는 데이터 복구 조언을 대체하지 않습니다.",
  changeBody: "기능, 가격, 평가판, 시장, 언어, 문서는 버전과 Store 심사에 따라 변경될 수 있습니다.",
});

const fr = translatedPack({
  ...ja,
  updated: "Dernière mise à jour : 28 juin 2026",
  back: "Retour à",
  privacy: "Politique de confidentialité",
  legal: "Conditions légales",
  privacyIntro: "Ce document explique comment {name} traite {topic} sur l’appareil local.",
  legalIntro: "Ce document explique la licence, les règles du Store, le contenu utilisateur, les limites et le support de {name}.",
  topics: { deskhaven: "les fichiers locaux, index, coffres, relations, sauvegardes et préférences", energyflow: "les journaux d’énergie, états de travail, humeur, statistiques et préférences", adhd: "le temps de focus, Idea Fridge, sons, notes vocales, retours de session et préférences" },
  sensitive: { deskhaven: "documents, images, projets, fichiers de mots de passe, clés et contenus de travail", energyflow: "état d’énergie, humeur au travail, stress, habitudes et notes personnelles", adhd: "pensées privées, tâches inachevées, notes vocales, difficultés de focus et état émotionnel" },
  privacyTitles: ["Local d’abord", "Aucun envoi aux serveurs du développeur", "Données locales et finalité", "Contenu sensible", "Sécurité, sauvegarde et suppression", "Support", "Votre contrôle", "Services tiers", "Contact et mises à jour"],
  privacyBullets: ["Aucun compte SoloCraft n’est requis.", "Le contenu des fichiers locaux n’est pas envoyé au développeur.", "Les index, statistiques ou cartes de relations ne sont pas envoyés pour analyse.", "Votre contenu local n’est pas vendu, loué ni partagé.", "Il n’est pas utilisé pour l’entraînement de modèles ou la publicité."],
  legalTitles: ["Licence", "Règles du Store", "Remboursement et facturation", "Contenu utilisateur", "Risques, sauvegardes et changements"],
  localFirst: "{name} est conçu autour de flux Windows locaux. {topic} est traité par défaut sur votre appareil ou dans l’emplacement local choisi.",
  noUpload: "{name} ne nécessite pas de compte en ligne pour ses fonctions principales et ne téléverse pas votre contenu local vers un profil développeur.",
  dataPurpose: "{topic} peut être stocké ou généré localement pour la recherche, le filtrage, les statistiques, la récupération ou les préférences.",
  sensitiveBody: "Vous pouvez traiter {sensitive}. Sur un appareil partagé ou professionnel, vérifiez les comptes, droits, sauvegardes et zones visibles.",
  securityBody: "Les protections de {name} ne remplacent pas une sécurité complète de l’appareil. Gardez vos propres sauvegardes pour les contenus importants.",
  supportBody: "Les informations envoyées au support servent uniquement à comprendre le problème et répondre. N’envoyez pas de secrets inutiles.",
  controlBody: "Vous décidez ce que vous placez dans {name}, et vous pouvez gérer, exporter, supprimer ou réinitialiser les données locales.",
  thirdPartyBody: "Le système, la synchronisation cloud, les politiques d’entreprise, antivirus et outils de sauvegarde restent hors du contrôle de l’application.",
  updateBody: "Cette politique peut évoluer avec les fonctionnalités et la documentation. Contact : 3371436706@qq.com.",
  licenseBody: "Vous recevez une licence personnelle, non exclusive et non transférable pour installer et utiliser {name}.",
  storeBody: "Les prix, taxes, marchés, annulations et remboursements Microsoft Store suivent l’affichage et les règles du Store.",
  refundBody: "Les remboursements, paiements, taxes et limites régionales sont généralement traités par Microsoft Store.",
  contentBody: "Vous conservez vos droits sur vos fichiers, notes, préférences et contenus importés.",
  riskBody: "Le logiciel est fourni tel quel et ne remplace pas un conseil médical, juridique, financier, de sécurité ou de récupération de données.",
  changeBody: "Les fonctions, prix, essais, marchés, langues et documents peuvent changer selon les versions et la revue du Store.",
});

const de = translatedPack({
  ...fr,
  updated: "Zuletzt aktualisiert: 28. Juni 2026",
  back: "Zurück zu",
  privacy: "Datenschutzerklärung",
  legal: "Rechtliche Bedingungen",
  privacyIntro: "Dieses Dokument erklärt, wie {name} {topic} auf dem lokalen Gerät verarbeitet.",
  legalIntro: "Dieses Dokument erklärt Lizenz, Store-Regeln, Nutzerinhalte, Grenzen und Support für {name}.",
  topics: { deskhaven: "lokale Dateien, Indizes, Tresore, Beziehungskarten, Backups und Einstellungen", energyflow: "Energieprotokolle, Arbeitszustand, Stimmung, Statistiken und Einstellungen", adhd: "Fokuszeit, Idea Fridge, Klänge, Sprachnotizen, Abschlussfeedback und Einstellungen" },
  sensitive: { deskhaven: "Dokumente, Bilder, Projektmaterial, Passwortdateien, Schlüssel und Arbeitsdaten", energyflow: "Energiezustand, Arbeitsstimmung, Stresssignale, Gewohnheiten und persönliche Notizen", adhd: "private Gedanken, offene Aufgaben, Sprachnotizen, Fokusprobleme und emotionaler Zustand" },
  privacyTitles: ["Lokal zuerst", "Kein Upload an Entwickler-Server", "Lokale Daten und Zweck", "Sensible Inhalte", "Sicherheit, Backup und Löschung", "Support-Kommunikation", "Ihre Kontrolle", "Grenze zu Drittanbietern", "Kontakt und Updates"],
  privacyBullets: ["Kein SoloCraft-Konto erforderlich.", "Lokale Dateiinhalte werden nicht hochgeladen.", "Indizes, Statistiken oder Beziehungskarten werden nicht zur Analyse gesendet.", "Lokale Inhalte werden nicht verkauft, vermietet oder geteilt.", "Keine Nutzung für Modelltraining oder Werbung."],
  legalTitles: ["Lizenz", "Store-Regeln", "Erstattung und Abrechnung", "Nutzerinhalte", "Risiken, Backups und Änderungen"],
  localFirst: "{name} ist für lokale Windows-Abläufe konzipiert. {topic} wird standardmäßig auf Ihrem Gerät oder an einem gewählten lokalen Ort verarbeitet.",
  noUpload: "{name} benötigt für Kernfunktionen kein Online-Konto und lädt lokale Inhalte nicht als Entwicklerprofil hoch.",
  dataPurpose: "{topic} kann lokal gespeichert oder erzeugt werden, um Suche, Filter, Statistiken, Wiederherstellung und Einstellungen zu ermöglichen.",
  sensitiveBody: "Sie können {sensitive} verarbeiten. Auf geteilten oder beruflichen Geräten achten Sie bitte auf Konten, Rechte, Backups und Sichtbarkeit.",
  securityBody: "Schutzfunktionen von {name} ersetzen keine vollständige Gerätesicherheit. Halten Sie eigene Backups wichtiger Inhalte vor.",
  supportBody: "Support-Informationen werden nur zur Problemanalyse und Antwort genutzt. Senden Sie keine unnötigen Geheimnisse.",
  controlBody: "Sie entscheiden, was in {name} verarbeitet wird, und können lokale Daten verwalten, exportieren, löschen oder zurücksetzen.",
  thirdPartyBody: "Betriebssystem, Cloud-Sync, Unternehmensrichtlinien, Virenschutz und Backup-Tools liegen außerhalb der Kontrolle der App.",
  updateBody: "Diese Richtlinie kann sich mit Funktionen und Dokumentation ändern. Kontakt: 3371436706@qq.com.",
  licenseBody: "Sie erhalten eine persönliche, nicht exklusive und nicht übertragbare Lizenz zur Installation und Nutzung von {name}.",
  storeBody: "Preise, Steuern, Märkte, Stornierungen und Erstattungen im Microsoft Store richten sich nach Store-Anzeige und Regeln.",
  refundBody: "Erstattungen, Abrechnung, Zahlungsarten und regionale Einschränkungen werden normalerweise über Microsoft Store abgewickelt.",
  contentBody: "Sie behalten Ihre Rechte an Dateien, Aufzeichnungen, Einstellungen und importierten Inhalten.",
  riskBody: "Die Software wird wie besehen bereitgestellt und ersetzt keine medizinische, rechtliche, finanzielle, Sicherheits- oder Datenrettungsberatung.",
  changeBody: "Funktionen, Preise, Testversionen, Märkte, Sprachen und Dokumente können sich mit Versionen und Store-Prüfungen ändern.",
});

const es = translatedPack({
  ...fr,
  updated: "Última actualización: 28 de junio de 2026",
  back: "Volver a",
  privacy: "Política de privacidad",
  legal: "Términos legales",
  privacyIntro: "Este documento explica cómo {name} procesa {topic} en el dispositivo local.",
  legalIntro: "Este documento explica la licencia, reglas de Store, contenido del usuario, límites y soporte de {name}.",
  topics: { deskhaven: "archivos locales, índices, bóvedas, mapas de relación, copias y preferencias", energyflow: "registros de energía, estado de trabajo, ánimo, estadísticas y preferencias", adhd: "tiempo de foco, Idea Fridge, sonidos, notas de voz, cierre de sesión y preferencias" },
  sensitive: { deskhaven: "documentos, imágenes, proyectos, archivos de contraseñas, claves y material de trabajo", energyflow: "estado de energía, ánimo laboral, estrés, hábitos y notas personales", adhd: "pensamientos privados, tareas pendientes, notas de voz, dificultad de foco y estado emocional" },
  privacyTitles: ["Local primero", "Sin subida a servidores del desarrollador", "Datos locales y finalidad", "Contenido sensible", "Seguridad, copia y eliminación", "Soporte", "Tu control", "Servicios de terceros", "Contacto y actualizaciones"],
  privacyBullets: ["No se requiere cuenta SoloCraft.", "El contenido local no se sube al desarrollador.", "Índices, estadísticas o mapas no se envían para análisis.", "El contenido local no se vende, alquila ni comparte.", "No se usa para entrenamiento de modelos o publicidad."],
  legalTitles: ["Licencia", "Reglas de Store", "Reembolso y facturación", "Contenido del usuario", "Riesgos, copias y cambios"],
  localFirst: "{name} está diseñado para flujos locales de Windows. {topic} se procesa por defecto en tu dispositivo o ubicación local elegida.",
  noUpload: "{name} no requiere cuenta en línea para las funciones principales ni sube tu contenido local como perfil del desarrollador.",
  dataPurpose: "{topic} puede guardarse o generarse localmente para búsqueda, filtros, estadísticas, recuperación o preferencias.",
  sensitiveBody: "Puedes tratar {sensitive}. En equipos compartidos o de empresa, revisa cuentas, permisos, copias y visibilidad.",
  securityBody: "Las protecciones de {name} no sustituyen la seguridad completa del dispositivo. Mantén tus propias copias de contenido importante.",
  supportBody: "La información enviada a soporte solo se usa para entender el problema y responder. No envíes secretos innecesarios.",
  controlBody: "Tú decides qué entra en {name} y puedes gestionar, exportar, eliminar o restablecer datos locales.",
  thirdPartyBody: "Sistema operativo, sincronización en la nube, políticas de empresa, antivirus y copias quedan fuera del control de la app.",
  updateBody: "Esta política puede cambiar con funciones y documentación. Contacto: 3371436706@qq.com.",
  licenseBody: "Recibes una licencia personal, no exclusiva e intransferible para instalar y usar {name}.",
  storeBody: "Precios, impuestos, mercados, cancelaciones y reembolsos de Microsoft Store siguen la pantalla y reglas de Store.",
  refundBody: "Reembolsos, facturación, métodos de pago y límites regionales normalmente se gestionan por Microsoft Store.",
  contentBody: "Conservas tus derechos sobre archivos, registros, preferencias y contenido importado.",
  riskBody: "El software se ofrece tal cual y no sustituye asesoría médica, legal, financiera, de seguridad o recuperación de datos.",
  changeBody: "Funciones, precios, pruebas, mercados, idiomas y documentos pueden cambiar con versiones y revisión de Store.",
});

const ru = translatedPack({
  ...fr,
  updated: "Последнее обновление: 28 июня 2026 г.",
  back: "Назад к",
  privacy: "Политика конфиденциальности",
  legal: "Правовые условия",
  privacyIntro: "Этот документ объясняет, как {name} обрабатывает {topic} на локальном устройстве.",
  legalIntro: "Этот документ описывает лицензию, правила Store, пользовательский контент, ограничения и поддержку {name}.",
  topics: { deskhaven: "локальные файлы, индексы, хранилища, карты связей, резервные копии и настройки", energyflow: "записи энергии, рабочее состояние, настроение, статистику и настройки", adhd: "время фокуса, Idea Fridge, звуки, голосовые заметки, завершение сессий и настройки" },
  sensitive: { deskhaven: "документы, изображения, проектные материалы, файлы паролей, ключи и рабочие данные", energyflow: "состояние энергии, рабочее настроение, стресс, привычки и личные заметки", adhd: "личные мысли, незавершенные задачи, голосовые заметки, трудности фокуса и эмоции" },
  privacyTitles: ["Сначала локально", "Без загрузки на серверы разработчика", "Локальные данные и цель", "Чувствительное содержимое", "Безопасность, копии и удаление", "Поддержка", "Ваш контроль", "Границы сторонних сервисов", "Контакт и обновления"],
  privacyBullets: ["Учетная запись SoloCraft не нужна.", "Локальные файлы не отправляются разработчику.", "Индексы, статистика и карты связей не отправляются на анализ.", "Локальный контент не продается, не сдается и не передается.", "Он не используется для обучения моделей или рекламы."],
  legalTitles: ["Лицензия", "Правила Store", "Возвраты и платежи", "Пользовательский контент", "Риски, копии и изменения"],
  localFirst: "{name} создан для локальных процессов Windows. {topic} по умолчанию обрабатывается на вашем устройстве или в выбранном локальном месте.",
  noUpload: "{name} не требует онлайн-аккаунта для основных функций и не загружает локальные данные как профиль разработчика.",
  dataPurpose: "{topic} может храниться или создаваться локально для поиска, фильтров, статистики, восстановления и настроек.",
  sensitiveBody: "Вы можете обрабатывать {sensitive}. На общих или рабочих устройствах учитывайте учетные записи, права, копии и видимость экрана.",
  securityBody: "Защита {name} не заменяет полную безопасность устройства. Сохраняйте собственные копии важных данных.",
  supportBody: "Информация, отправленная в поддержку, используется только для понимания проблемы и ответа. Не отправляйте лишние секретные данные.",
  controlBody: "Вы решаете, что помещать в {name}, и можете управлять, экспортировать, удалять или сбрасывать локальные данные.",
  thirdPartyBody: "ОС, облачная синхронизация, корпоративные политики, антивирусы и резервные копии находятся вне контроля приложения.",
  updateBody: "Политика может меняться вместе с функциями и документацией. Контакт: 3371436706@qq.com.",
  licenseBody: "Вы получаете личную, неисключительную и непередаваемую лицензию на установку и использование {name}.",
  storeBody: "Цены, налоги, рынки, отмены и возвраты Microsoft Store регулируются отображением и правилами Store.",
  refundBody: "Возвраты, счета, способы оплаты и региональные ограничения обычно обрабатываются Microsoft Store.",
  contentBody: "Вы сохраняете права на свои файлы, записи, настройки и импортированный контент.",
  riskBody: "ПО предоставляется как есть и не заменяет медицинские, юридические, финансовые, аудиторские или восстановительные советы.",
  changeBody: "Функции, цены, пробные периоды, рынки, языки и документы могут меняться после версий и проверки Store.",
});

const pt = translatedPack({
  ...fr,
  updated: "Última atualização: 28 de junho de 2026",
  back: "Voltar para",
  privacy: "Política de privacidade",
  legal: "Termos legais",
  privacyIntro: "Este documento explica como {name} processa {topic} no dispositivo local.",
  legalIntro: "Este documento explica licença, regras da Store, conteúdo do usuário, limites e suporte de {name}.",
  topics: { deskhaven: "arquivos locais, índices, cofres, mapas de relação, backups e preferências", energyflow: "registros de energia, estado de trabalho, humor, estatísticas e preferências", adhd: "tempo de foco, Idea Fridge, sons, notas de voz, conclusão de sessão e preferências" },
  sensitive: { deskhaven: "documentos, imagens, projetos, arquivos de senha, chaves e materiais de trabalho", energyflow: "estado de energia, humor no trabalho, estresse, hábitos e notas pessoais", adhd: "pensamentos privados, tarefas inacabadas, notas de voz, dificuldade de foco e estado emocional" },
  privacyTitles: ["Local primeiro", "Sem envio aos servidores do desenvolvedor", "Dados locais e finalidade", "Conteúdo sensível", "Segurança, backup e exclusão", "Suporte", "Seu controle", "Serviços de terceiros", "Contato e atualizações"],
  privacyBullets: ["Nenhuma conta SoloCraft é necessária.", "Conteúdo local não é enviado ao desenvolvedor.", "Índices, estatísticas ou mapas não são enviados para análise.", "Conteúdo local não é vendido, alugado ou compartilhado.", "Não é usado para treinar modelos ou publicidade."],
  legalTitles: ["Licença", "Regras da Store", "Reembolso e cobrança", "Conteúdo do usuário", "Riscos, backups e mudanças"],
  localFirst: "{name} foi projetado para fluxos locais do Windows. {topic} é processado por padrão no dispositivo ou local escolhido.",
  noUpload: "{name} não exige conta online para funções principais nem envia conteúdo local como perfil do desenvolvedor.",
  dataPurpose: "{topic} pode ser salvo ou gerado localmente para busca, filtros, estatísticas, recuperação e preferências.",
  sensitiveBody: "Você pode tratar {sensitive}. Em computadores compartilhados ou corporativos, revise contas, permissões, backups e visibilidade.",
  securityBody: "As proteções de {name} não substituem segurança completa do dispositivo. Mantenha seus próprios backups de conteúdo importante.",
  supportBody: "Informações enviadas ao suporte são usadas apenas para entender o problema e responder. Não envie segredos desnecessários.",
  controlBody: "Você decide o que entra no {name} e pode gerenciar, exportar, excluir ou redefinir dados locais.",
  thirdPartyBody: "Sistema, sincronização em nuvem, políticas corporativas, antivírus e backups ficam fora do controle do app.",
  updateBody: "Esta política pode mudar com recursos e documentação. Contato: 3371436706@qq.com.",
  licenseBody: "Você recebe uma licença pessoal, não exclusiva e intransferível para instalar e usar {name}.",
  storeBody: "Preços, impostos, mercados, cancelamentos e reembolsos da Microsoft Store seguem a exibição e regras da Store.",
  refundBody: "Reembolsos, cobrança, métodos de pagamento e limites regionais normalmente são tratados pela Microsoft Store.",
  contentBody: "Você mantém seus direitos sobre arquivos, registros, preferências e conteúdo importado.",
  riskBody: "O software é fornecido no estado em que se encontra e não substitui aconselhamento médico, jurídico, financeiro, de segurança ou recuperação de dados.",
  changeBody: "Recursos, preços, testes, mercados, idiomas e documentos podem mudar com versões e revisão da Store.",
});

const localized: Record<Locale, PolicyPack> = {
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
