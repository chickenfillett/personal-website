import type { Locale } from "@/lib/i18n/context";
import type { ProductId } from "@/lib/productCommerce";
import { productPricing } from "@/lib/productCommerce";
import {
  productPolicyCopy as baseProductPolicyCopy,
  type PolicyKind,
  type PolicySection,
  type ProductPolicyCopy,
} from "./productPoliciesRuntime";

export type { PolicyKind, PolicySection, ProductPolicyCopy };

const names: Record<ProductId, string> = {
  energyflow: "EnergyFlow",
  deskhaven: "DeskHaven",
  adhd: "ADHD Focus Timer",
};

type Pack = {
  contact: string;
  privacyIntro: (name: string, purpose: string) => string;
  legalIntro: (name: string) => string;
  purpose: Record<ProductId, string>;
  data: Record<ProductId, string>;
  examples: Record<ProductId, string>;
  privacyTitles: string[];
  legalTitles: string[];
  noUploadBullets: string[];
  privacyBodies: (name: string, data: string, examples: string) => string[][];
  legalBodies: (name: string, summary: string, trial: string) => string[][];
};

function sections(titles: string[], bodies: string[][], bullets?: string[]): PolicySection[] {
  return titles.map((title, index) => ({
    title,
    body: bodies[index],
    bullets: index === 1 ? bullets : undefined,
  }));
}

const packs: Partial<Record<Locale, Pack>> = {
  ja: {
    contact: "サポートが必要な場合は 3371436706@qq.com までご連絡ください。",
    privacyIntro: (name, purpose) => `本書は、${name} がローカル端末上で ${purpose} に関するデータをどのように扱うかを説明します。このプライバシーポリシーはデータ処理、保存、制御、サポート連絡だけを扱い、価格、試用、請求、返金の説明は含みません。`,
    legalIntro: (name) => `本書は ${name} の使用許可、Store 購入、試用、返金、ユーザー内容、責任、制限、サポートについて説明します。`,
    purpose: { deskhaven: "ローカルファイル整理、保管庫、関係マップ、検索、バックアップ、設定", energyflow: "エネルギー記録、作業状態、気分、統計分析、設定", adhd: "集中タイマー、Idea Fridge、音、音声メモ、完了フィードバック、設定" },
    data: { deskhaven: "ファイル索引、パス、名前、種類、サイズ、更新時刻、タグ、分類、保管状態、関係マップ、検索索引、バックアップ記録、ローカル設定", energyflow: "エネルギーレベル、作業状態、エネルギー源、気分、メモ、時刻、統計結果、傾向表示、ローカル設定", adhd: "集中時間、開始と終了状態、Idea Fridge の内容、音声または一時メモ、音設定、完了フィードバック、言語設定、ローカル設定" },
    examples: { deskhaven: "文書、画像、プロジェクト資料、パスワードファイル、SSH キー、書き出しファイル、作業資料", energyflow: "エネルギー状態、作業中の気分、ストレスの兆候、作業習慣、時間のリズム、個人的なメモ", adhd: "私的な考え、未完了タスク、音声メモ、集中の困難、感情状態、一時メモ" },
    privacyTitles: ["ローカル優先の処理", "開発者サーバーへアップロードしません", "ローカルデータの種類と目的", "機密内容と個人情報", "安全、暗号化、保護の限界", "保持、削除、復元", "サポート連絡時の情報", "利用者の制御", "端末と第三者サービス", "連絡と更新"],
    legalTitles: ["使用許可", "価格、試用、Store 規則", "返金、キャンセル、請求", "ユーザー内容とデータ所有権", "リスク、バックアップ、専門助言", "サポート、更新、変更"],
    noUploadBullets: ["SoloCraft アカウントは不要です。", "ローカルファイル内容を開発者へアップロードしません。", "索引、統計、関係データを分析目的で送信しません。", "ローカル利用内容を販売、貸与、共有しません。", "ローカル内容をモデル訓練や広告プロフィールに使用しません。"],
    privacyBodies: (name, data, examples) => [[`${name} はローカルの Windows 端末を中心に動作します。機能に関係するデータには ${data} が含まれる場合があり、既定では利用者の端末環境で処理されます。`, "利用者が書き出し、バックアップ、コピー、サポートメール送信、または OS や第三者同期ツールを使わない限り、開発者がこれらのローカルデータを遠隔で読むことはありません。"], [`${name} は主要機能にオンラインアカウントを要求しません。ローカル内容をオンラインプロフィールとして開発者へアップロードすることもありません。`, "OneDrive、クラウドドライブ、バックアップ、第三者同期ツールが別途ファイルを同期する場合、それは利用者が選んだサービスの動作であり、本アプリによる送信ではありません。"], [`アプリは ${data} をローカルで保存または生成する場合があります。`, "これらは検索、統計、振り返り、復元、自動整理、設定維持のために使われ、追加の個人情報を集める目的ではありません。"], [`利用中に ${examples} を扱う場合があります。`, "共有 PC、会社端末、暗号化されていないディスクでは、Windows アカウント、ディスク権限、画面表示、バックアップ、フォルダーアクセスに注意してください。"], [`${name} はアプリ版本、Windows 環境、有効な設定に応じて、ローカル保存、パスワード保護、暗号化、バックアップ、復元、画面保護機能を提供する場合があります。`, "これらはリスクを下げますが、完全な端末セキュリティの代わりにはなりません。システムパスワード、ディスク暗号化、信頼できるバックアップを併用してください。"], [`${name} のローカルデータは、利用者が消去、削除、リセット、またはシステムのファイル管理で削除するまで端末または選択した保存場所に残るのが通常です。`, "削除されたローカルデータは開発者が復元できない場合があります。長期保存が必要な場合は自身でバックアップを維持してください。"], ["メールで開発者に連絡した場合、メールアドレス、問題説明、スクリーンショット、ログ断片、添付ファイルは、問題理解と返信のためだけに使われます。", "不要なパスワード、秘密鍵、身分証、顧客情報、高度に機密な内容を送らないでください。"], [`どの内容を ${name} に入れるかは利用者が決められます。`, "処理対象にしたくない内容は、監視パス、保管庫、記録フロー、アイデア記録、手動インポートに入れないでください。"], ["本アプリは OS アカウント、ディスク、会社端末ポリシー、ウイルス対策、バックアップ、クラウド同期、ブラウザー拡張、第三者ツールを制御できません。", "それらがローカルファイルにアクセス、同期、バックアップ、アップロードする場合は、該当サービスのポリシーと設定を確認してください。"], ["ポリシー内容は製品機能や文書整備に応じて更新される場合があります。", "サポートが必要な場合は 3371436706@qq.com までご連絡ください。"]],
    legalBodies: (name, summary, trial) => [[`${name} をインストールして使用する個人的、非独占、譲渡不可のライセンスが与えられます。`, "所有権は移転しません。法律または書面許可がない限り、再配布、再販売、リバースエンジニアリング、Store 規則の回避を行わないでください。"], [summary, trial, "Microsoft Store で取得または購入した場合、価格、税、提供状況、キャンセル、返金は利用者の地域に表示される Microsoft Store の規則に従います。"], ["返金、キャンセル、請求、支払い方法、税、地域制限は通常 Microsoft Store の手続きに従います。", "開発者は製品問題の調査や説明を支援できますが、Store の注文、支払い、返金を回避することはできません。"], ["ファイル、記録、設定、インポート資料などの権利は利用者に残ります。", "利用者は、扱う内容について必要な権利を持っていることを確認する責任があります。"], ["ソフトウェアは現状有姿で提供され、特定の結果を保証しません。", "重要なデータは独立してバックアップしてください。本ソフトウェアは医療、法律、財務、セキュリティ監査、データ復旧の専門助言に代わるものではありません。"], ["機能、価格、試用条件、提供市場、言語対応、文書内容は、製品版本や Store 審査により変更される場合があります。", "サポートが必要な場合は 3371436706@qq.com までご連絡ください。"]],
  },
};

const derived: Partial<Record<Locale, Partial<Pack>>> = {
  ko: { contact: "지원이 필요하면 3371436706@qq.com 으로 개발자에게 연락하세요.", privacyIntro: (name, purpose) => `이 문서는 ${name}이(가) 로컬 기기에서 ${purpose} 관련 데이터를 어떻게 처리하는지 설명합니다. 가격, 체험판, 청구, 환불 규칙은 포함하지 않습니다.`, legalIntro: (name) => `이 문서는 ${name}의 사용 허가, Store 구매, 체험판, 환불, 사용자 콘텐츠, 책임, 제한 및 지원을 설명합니다.`, purpose: { deskhaven: "로컬 파일 정리, 보관소, 관계 지도, 검색, 백업 및 설정", energyflow: "에너지 기록, 업무 상태, 기분, 통계 분석 및 설정", adhd: "집중 타이머, Idea Fridge, 소리, 음성 메모, 완료 피드백 및 설정" }, privacyTitles: ["로컬 우선 처리", "개발자 서버로 업로드하지 않음", "로컬 데이터 유형과 목적", "민감한 콘텐츠와 개인정보", "보안, 암호화 및 보호 한계", "보관, 삭제 및 복구", "지원 연락 중의 정보", "사용자의 제어권", "기기와 제3자 서비스", "연락 및 업데이트"], legalTitles: ["사용 허가", "가격, 체험판 및 Store 규칙", "환불, 취소 및 청구", "사용자 콘텐츠와 데이터 소유권", "위험, 백업 및 전문 조언", "지원, 업데이트 및 변경"] },
  fr: { contact: "Pour obtenir de l’aide, contactez le développeur à 3371436706@qq.com.", privacyIntro: (name, purpose) => `Ce document explique comment ${name} traite localement les données liées à ${purpose}. Il ne couvre pas les prix, essais, facturation ou remboursements.`, legalIntro: (name) => `Ce document explique la licence, l’achat Store, l’essai, les remboursements, les contenus utilisateur, les responsabilités, les limites et le support de ${name}.`, purpose: { deskhaven: "l’organisation de fichiers locaux, les coffres, cartes de relations, recherches, sauvegardes et préférences", energyflow: "les journaux d’énergie, états de travail, humeurs, analyses statistiques et préférences", adhd: "le chronométrage de focus, Idea Fridge, sons, notes vocales, retours de fin et préférences" }, privacyTitles: ["Traitement local", "Aucun envoi aux serveurs du développeur", "Types de données locales et finalité", "Contenus sensibles et informations personnelles", "Sécurité, chiffrement et limites", "Conservation, suppression et récupération", "Informations lors du support", "Votre contrôle", "Appareil et services tiers", "Contact et mises à jour"], legalTitles: ["Licence", "Prix, essai et règles Store", "Remboursements, annulation et facturation", "Contenus utilisateur et propriété des données", "Risques, sauvegardes et conseils professionnels", "Support, mises à jour et changements"] },
  de: { contact: "Für Support kontaktieren Sie den Entwickler unter 3371436706@qq.com.", privacyIntro: (name, purpose) => `Dieses Dokument erklärt, wie ${name} Daten zu ${purpose} lokal verarbeitet. Preise, Testzeiträume, Abrechnung und Erstattungen sind nicht Teil dieser Erklärung.`, legalIntro: (name) => `Dieses Dokument erklärt Lizenz, Store-Kauf, Testphase, Erstattungen, Nutzerinhalte, Verantwortung, Grenzen und Support für ${name}.`, purpose: { deskhaven: "lokale Dateiorganisation, Tresore, Beziehungskarten, Suche, Backups und Einstellungen", energyflow: "Energieprotokolle, Arbeitszustand, Stimmung, statistische Analyse und Einstellungen", adhd: "Fokuszeit, Idea Fridge, Klang, Sprachnotizen, Abschlussfeedback und Einstellungen" }, privacyTitles: ["Lokale Verarbeitung", "Keine Übertragung an Entwickler-Server", "Lokale Datentypen und Zweck", "Sensible Inhalte und persönliche Materialien", "Sicherheit, Verschlüsselung und Grenzen", "Aufbewahrung, Löschung und Wiederherstellung", "Informationen in Support-Kommunikation", "Ihre Kontrolle", "Gerät und Drittanbieter", "Kontakt und Aktualisierungen"], legalTitles: ["Lizenz", "Preis, Testphase und Store-Regeln", "Erstattungen, Kündigung und Abrechnung", "Nutzerinhalte und Dateneigentum", "Risiken, Backups und professionelle Beratung", "Support, Updates und Änderungen"] },
  es: { contact: "Para soporte, contacta al desarrollador en 3371436706@qq.com.", privacyIntro: (name, purpose) => `Este documento explica cómo ${name} trata localmente los datos relacionados con ${purpose}. No cubre precios, pruebas, facturación ni reembolsos.`, legalIntro: (name) => `Este documento explica licencia, compra en Store, prueba, reembolsos, contenido del usuario, responsabilidades, límites y soporte de ${name}.`, purpose: { deskhaven: "organización de archivos locales, bóvedas, mapas de relaciones, búsqueda, copias de seguridad y preferencias", energyflow: "registros de energía, estado de trabajo, ánimo, análisis estadístico y preferencias", adhd: "temporización de foco, Idea Fridge, sonido, notas de voz, feedback de finalización y preferencias" }, privacyTitles: ["Tratamiento local", "Sin subida a servidores del desarrollador", "Tipos de datos locales y finalidad", "Contenido sensible y material personal", "Seguridad, cifrado y límites", "Conservación, eliminación y recuperación", "Información en soporte", "Tu control", "Dispositivo y servicios de terceros", "Contacto y actualizaciones"], legalTitles: ["Licencia", "Precio, prueba y reglas de Store", "Reembolsos, cancelación y facturación", "Contenido del usuario y propiedad de datos", "Riesgos, copias y consejo profesional", "Soporte, actualizaciones y cambios"] },
  ru: { contact: "Для поддержки свяжитесь с разработчиком: 3371436706@qq.com.", privacyIntro: (name, purpose) => `Этот документ объясняет, как ${name} локально обрабатывает данные, связанные с ${purpose}. Цены, пробные периоды, счета и возвраты сюда не входят.`, legalIntro: (name) => `Этот документ описывает лицензию, покупку в Store, пробный период, возвраты, пользовательский контент, ответственность, ограничения и поддержку ${name}.`, purpose: { deskhaven: "локальной организацией файлов, хранилищами, картами связей, поиском, резервными копиями и настройками", energyflow: "записями энергии, рабочим состоянием, настроением, статистическим анализом и настройками", adhd: "таймером фокуса, Idea Fridge, звуком, голосовыми заметками, итоговой обратной связью и настройками" }, privacyTitles: ["Локальная обработка", "Нет загрузки на серверы разработчика", "Типы локальных данных и цель", "Чувствительный контент и личные материалы", "Безопасность, шифрование и ограничения", "Хранение, удаление и восстановление", "Информация при поддержке", "Ваш контроль", "Устройство и сторонние сервисы", "Контакт и обновления"], legalTitles: ["Лицензия", "Цена, пробный период и правила Store", "Возвраты, отмена и выставление счетов", "Пользовательский контент и владение данными", "Риски, резервные копии и профессиональные советы", "Поддержка, обновления и изменения"] },
  pt: { contact: "Para suporte, contacte o desenvolvedor em 3371436706@qq.com.", privacyIntro: (name, purpose) => `Este documento explica como ${name} trata localmente dados relacionados a ${purpose}. Não cobre preço, teste, cobrança ou reembolso.`, legalIntro: (name) => `Este documento explica licença, compra na Store, teste, reembolsos, conteúdo do usuário, responsabilidades, limites e suporte para ${name}.`, purpose: { deskhaven: "organização de arquivos locais, cofres, mapas de relacionamento, busca, backups e preferências", energyflow: "registros de energia, estado de trabalho, humor, análise estatística e preferências", adhd: "tempo de foco, Idea Fridge, som, notas de voz, feedback de conclusão e preferências" }, privacyTitles: ["Tratamento local", "Sem envio para servidores do desenvolvedor", "Tipos de dados locais e finalidade", "Conteúdo sensível e material pessoal", "Segurança, criptografia e limites", "Retenção, exclusão e recuperação", "Informações no suporte", "Seu controle", "Dispositivo e serviços de terceiros", "Contato e atualizações"], legalTitles: ["Licença", "Preço, teste e regras da Store", "Reembolsos, cancelamento e cobrança", "Conteúdo do usuário e propriedade dos dados", "Riscos, backups e aconselhamento profissional", "Suporte, atualizações e mudanças"] },
};

for (const [key, value] of Object.entries(derived) as [Locale, Partial<Pack>][]) {
  packs[key] = { ...packs.ja!, ...value };
}

function pack(locale: Locale) {
  return packs[locale];
}

export function productPolicyCopy(product: ProductId, kind: PolicyKind, locale: Locale): ProductPolicyCopy {
  const override = pack(locale);
  if (!override) return baseProductPolicyCopy(product, kind, locale);
  const base = baseProductPolicyCopy(product, kind, locale);
  const name = names[product];
  if (kind === "privacy") {
    return { ...base, intro: override.privacyIntro(name, override.purpose[product]), sections: sections(override.privacyTitles, override.privacyBodies(name, override.data[product], override.examples[product]), override.noUploadBullets) };
  }
  const pricing = productPricing(product, locale);
  return { ...base, intro: override.legalIntro(name), sections: sections(override.legalTitles, override.legalBodies(name, pricing.summary, pricing.trial)) };
}
