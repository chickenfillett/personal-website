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
  updated: string;
  contact: string;
  privacyIntro: (name: string, purpose: string) => string;
  legalIntro: (name: string) => string;
  purpose: Record<ProductId, string>;
  data: Record<ProductId, string>;
  examples: Record<ProductId, string>;
  privacyTitles: string[];
  legalTitles: string[];
  noUploadBullets: string[];
  privacyBody: (name: string, data: string, examples: string) => PolicySection[];
  legalBody: (name: string, summary: string, trial: string) => PolicySection[];
};

const packs: Partial<Record<Locale, Pack>> = {
  ja: {
    updated: "最終更新日：2026年6月28日",
    contact: "サポートが必要な場合は 3371436706@qq.com までご連絡ください。",
    privacyIntro: (name, purpose) => `本書は、${name} がローカル端末上で ${purpose} に関するデータをどのように扱うかを説明します。この文書はプライバシーのみを扱い、価格、試用、請求、返金の説明は含みません。`,
    legalIntro: (name) => `本書は ${name} の使用許可、Store 購入、試用、返金、ユーザー内容、責任、制限、サポートについて説明します。`,
    purpose: { deskhaven: "ローカルファイル整理、保管庫、関係マップ、検索、バックアップ、設定", energyflow: "エネルギー記録、作業状態、気分、統計分析、設定", adhd: "集中タイマー、Idea Fridge、音、音声メモ、完了フィードバック、設定" },
    data: { deskhaven: "ファイル索引、パス、名前、種類、サイズ、更新時刻、タグ、分類、保管状態、関係マップ、検索索引、バックアップ記録、ローカル設定", energyflow: "エネルギーレベル、作業状態、エネルギー源、気分、メモ、時刻、統計結果、傾向表示、ローカル設定", adhd: "集中時間、開始と終了状態、Idea Fridge の内容、音声または一時メモ、音設定、完了フィードバック、言語設定、ローカル設定" },
    examples: { deskhaven: "文書、画像、プロジェクト資料、パスワードファイル、SSH キー、書き出しファイル、作業資料", energyflow: "エネルギー状態、作業中の気分、ストレスの兆候、作業習慣、時間のリズム、個人的なメモ", adhd: "私的な考え、未完了タスク、音声メモ、集中の困難、感情状態、一時メモ" },
    privacyTitles: ["ローカル優先の処理", "開発者サーバーへアップロードしません", "ローカルデータの種類と目的", "機密内容と個人情報", "安全、暗号化、保護の限界", "保持、削除、復元", "サポート連絡時の情報", "利用者の制御", "端末と第三者サービス", "連絡と更新"],
    legalTitles: ["使用許可", "価格、試用、Store 規則", "返金、キャンセル、請求", "ユーザー内容とデータ所有権", "リスク、バックアップ、専門助言", "サポート、更新、変更"],
    noUploadBullets: ["SoloCraft アカウントは不要です。", "ローカルファイル内容を開発者へアップロードしません。", "索引、統計、関係データを分析目的で送信しません。", "ローカル利用内容を販売、貸与、共有しません。", "ローカル内容をモデル訓練や広告プロフィールに使用しません。"],
    privacyBody(name, data, examples) { return buildPrivacy(this, name, data, examples); },
    legalBody(name, summary, trial) { return buildLegal(this, name, summary, trial, "Microsoft Store で取得または購入した場合、価格、税、提供状況、キャンセル、返金は利用者の地域に表示される Microsoft Store の規則に従います。"); },
  },
  ko: {
    updated: "마지막 업데이트: 2026년 6월 28일",
    contact: "지원이 필요하면 3371436706@qq.com 으로 개발자에게 연락하세요.",
    privacyIntro: (name, purpose) => `이 문서는 ${name}이(가) 로컬 기기에서 ${purpose} 관련 데이터를 어떻게 처리하는지 설명합니다. 이 문서는 개인정보 처리만 다루며 가격, 체험판, 청구, 환불 규칙은 포함하지 않습니다.`,
    legalIntro: (name) => `이 문서는 ${name}의 사용 허가, Store 구매, 체험판, 환불, 사용자 콘텐츠, 책임, 제한 및 지원을 설명합니다.`,
    purpose: { deskhaven: "로컬 파일 정리, 보관소, 관계 지도, 검색, 백업 및 설정", energyflow: "에너지 기록, 업무 상태, 기분, 통계 분석 및 설정", adhd: "집중 타이머, Idea Fridge, 소리, 음성 메모, 완료 피드백 및 설정" },
    data: { deskhaven: "파일 인덱스, 경로, 이름, 유형, 크기, 수정 시간, 태그, 분류, 보관소 상태, 관계 지도, 검색 인덱스, 백업 기록 및 로컬 설정", energyflow: "에너지 수준, 업무 상태, 에너지 출처, 기분, 메모, 시간, 통계 결과, 추세 보기 및 로컬 설정", adhd: "집중 시간, 시작/종료 상태, Idea Fridge 내용, 음성 또는 임시 메모, 소리 설정, 완료 피드백, 언어 설정 및 로컬 설정" },
    examples: { deskhaven: "문서, 이미지, 프로젝트 자료, 비밀번호 파일, SSH 키, 내보낸 파일, 업무 자료", energyflow: "에너지 상태, 업무 기분, 스트레스 신호, 업무 습관, 시간 리듬, 개인 메모", adhd: "사적인 생각, 미완료 작업, 음성 메모, 집중 어려움, 감정 상태, 임시 메모" },
    privacyTitles: ["로컬 우선 처리", "개발자 서버로 업로드하지 않음", "로컬 데이터 유형과 목적", "민감한 콘텐츠와 개인정보", "보안, 암호화 및 보호 한계", "보관, 삭제 및 복구", "지원 연락 중의 정보", "사용자의 제어권", "기기와 제3자 서비스", "연락 및 업데이트"],
    legalTitles: ["사용 허가", "가격, 체험판 및 Store 규칙", "환불, 취소 및 청구", "사용자 콘텐츠와 데이터 소유권", "위험, 백업 및 전문 조언", "지원, 업데이트 및 변경"],
    noUploadBullets: ["SoloCraft 계정이 필요하지 않습니다.", "로컬 파일 내용은 개발자에게 업로드되지 않습니다.", "인덱스, 통계, 관계 데이터는 분석 목적으로 전송되지 않습니다.", "로컬 사용 내용은 판매, 임대, 공유되지 않습니다.", "로컬 콘텐츠는 모델 학습이나 광고 프로필 작성에 사용되지 않습니다."],
    privacyBody(name, data, examples) { return buildPrivacy(this, name, data, examples); },
    legalBody(name, summary, trial) { return buildLegal(this, name, summary, trial, "Microsoft Store를 통해 제품을 받거나 구매한 경우 가격, 세금, 제공 여부, 취소 및 환불은 사용자의 지역에 표시되는 Microsoft Store 규칙을 따릅니다."); },
  },
  fr: {
    updated: "Dernière mise à jour : 28 juin 2026",
    contact: "Pour obtenir de l’aide, contactez le développeur à 3371436706@qq.com.",
    privacyIntro: (name, purpose) => `Ce document explique comment ${name} traite localement les données liées à ${purpose}. Il traite uniquement de la confidentialité et ne couvre pas les prix, essais, facturation ou remboursements.`,
    legalIntro: (name) => `Ce document explique la licence, l’achat Store, l’essai, les remboursements, les contenus utilisateur, les responsabilités, les limites et le support de ${name}.`,
    purpose: { deskhaven: "l’organisation de fichiers locaux, les coffres, cartes de relations, recherches, sauvegardes et préférences", energyflow: "les journaux d’énergie, états de travail, humeurs, analyses statistiques et préférences", adhd: "le chronométrage de focus, Idea Fridge, sons, notes vocales, retours de fin et préférences" },
    data: { deskhaven: "index de fichiers, chemins, noms, types, tailles, dates de modification, tags, catégories, état de coffre, cartes de relations, index de recherche, sauvegardes et préférences locales", energyflow: "niveaux d’énergie, états de travail, sources d’énergie, humeurs, notes, horodatages, résultats statistiques, vues de tendance et préférences locales", adhd: "durée de focus, état de début et de fin, contenu Idea Fridge, notes vocales ou temporaires, réglages sonores, retour de fin, langue et préférences locales" },
    examples: { deskhaven: "documents, images, matériaux de projet, fichiers de mots de passe, clés SSH, exports et documents de travail", energyflow: "état d’énergie, humeur de travail, signaux de stress, habitudes, rythme temporel et notes personnelles", adhd: "pensées privées, tâches inachevées, notes vocales, difficultés de concentration, état émotionnel et notes temporaires" },
    privacyTitles: ["Traitement local", "Aucun envoi aux serveurs du développeur", "Types de données locales et finalité", "Contenus sensibles et informations personnelles", "Sécurité, chiffrement et limites", "Conservation, suppression et récupération", "Informations lors du support", "Votre contrôle", "Appareil et services tiers", "Contact et mises à jour"],
    legalTitles: ["Licence", "Prix, essai et règles Store", "Remboursements, annulation et facturation", "Contenus utilisateur et propriété des données", "Risques, sauvegardes et conseils professionnels", "Support, mises à jour et changements"],
    noUploadBullets: ["Aucun compte SoloCraft n’est requis.", "Le contenu local n’est pas envoyé au développeur.", "Les index, statistiques et relations ne sont pas envoyés pour analyse.", "Votre contenu local n’est pas vendu, loué ou partagé.", "Votre contenu local n’est pas utilisé pour entraîner des modèles ou créer des profils publicitaires."],
    privacyBody(name, data, examples) { return buildPrivacy(this, name, data, examples); },
    legalBody(name, summary, trial) { return buildLegal(this, name, summary, trial, "Lorsqu’un produit est obtenu ou acheté via Microsoft Store, les prix, taxes, disponibilités, annulations et remboursements suivent les règles affichées par Microsoft Store dans la région du client."); },
  },
  de: {
    updated: "Zuletzt aktualisiert: 28. Juni 2026",
    contact: "Für Support kontaktieren Sie den Entwickler unter 3371436706@qq.com.",
    privacyIntro: (name, purpose) => `Dieses Dokument erklärt, wie ${name} Daten zu ${purpose} lokal verarbeitet. Es behandelt nur Datenschutz und nicht Preise, Testzeiträume, Abrechnung oder Erstattungen.`,
    legalIntro: (name) => `Dieses Dokument erklärt Lizenz, Store-Kauf, Testphase, Erstattungen, Nutzerinhalte, Verantwortung, Grenzen und Support für ${name}.`,
    purpose: { deskhaven: "lokale Dateiorganisation, Tresore, Beziehungskarten, Suche, Backups und Einstellungen", energyflow: "Energieprotokolle, Arbeitszustand, Stimmung, statistische Analyse und Einstellungen", adhd: "Fokuszeit, Idea Fridge, Klang, Sprachnotizen, Abschlussfeedback und Einstellungen" },
    data: { deskhaven: "Dateiindizes, Pfade, Namen, Typen, Größen, Änderungszeiten, Tags, Kategorien, Tresorstatus, Beziehungskarten, Suchindizes, Backups und lokale Einstellungen", energyflow: "Energiestufen, Arbeitszustände, Energiequellen, Stimmung, Notizen, Zeitstempel, Statistikwerte, Trendansichten und lokale Einstellungen", adhd: "Fokusdauer, Start- und Endzustand, Idea-Fridge-Inhalte, Sprach- oder Kurznotizen, Klangeinstellungen, Abschlussfeedback, Sprache und lokale Einstellungen" },
    examples: { deskhaven: "Dokumente, Bilder, Projektmaterial, Passwortdateien, SSH-Schlüssel, Exporte und Arbeitsmaterial", energyflow: "Energiezustand, Arbeitsstimmung, Stresssignale, Gewohnheiten, Zeitrhythmus und persönliche Notizen", adhd: "private Gedanken, unerledigte Aufgaben, Sprachnotizen, Fokusschwierigkeiten, emotionale Zustände und Kurznotizen" },
    privacyTitles: ["Lokale Verarbeitung", "Keine Übertragung an Entwickler-Server", "Lokale Datentypen und Zweck", "Sensible Inhalte und persönliche Materialien", "Sicherheit, Verschlüsselung und Grenzen", "Aufbewahrung, Löschung und Wiederherstellung", "Informationen in Support-Kommunikation", "Ihre Kontrolle", "Gerät und Drittanbieter", "Kontakt und Aktualisierungen"],
    legalTitles: ["Lizenz", "Preis, Testphase und Store-Regeln", "Erstattungen, Kündigung und Abrechnung", "Nutzerinhalte und Dateneigentum", "Risiken, Backups und professionelle Beratung", "Support, Updates und Änderungen"],
    noUploadBullets: ["Kein SoloCraft-Konto erforderlich.", "Lokale Dateiinhalte werden nicht an den Entwickler hochgeladen.", "Indizes, Statistiken und Beziehungen werden nicht zur Analyse gesendet.", "Lokale Inhalte werden nicht verkauft, vermietet oder geteilt.", "Lokale Inhalte werden nicht für Modelltraining oder Werbeprofile verwendet."],
    privacyBody(name, data, examples) { return buildPrivacy(this, name, data, examples); },
    legalBody(name, summary, trial) { return buildLegal(this, name, summary, trial, "Beim Bezug oder Kauf über Microsoft Store gelten Preise, Steuern, Verfügbarkeit, Kündigung und Erstattungen nach den im jeweiligen Markt angezeigten Microsoft-Store-Regeln."); },
  },
  es: {
    updated: "Última actualización: 28 de junio de 2026",
    contact: "Para soporte, contacta al desarrollador en 3371436706@qq.com.",
    privacyIntro: (name, purpose) => `Este documento explica cómo ${name} trata localmente los datos relacionados con ${purpose}. Solo cubre privacidad y no incluye precios, pruebas, facturación ni reembolsos.`,
    legalIntro: (name) => `Este documento explica licencia, compra en Store, prueba, reembolsos, contenido del usuario, responsabilidades, límites y soporte de ${name}.`,
    purpose: { deskhaven: "organización de archivos locales, bóvedas, mapas de relaciones, búsqueda, copias de seguridad y preferencias", energyflow: "registros de energía, estado de trabajo, ánimo, análisis estadístico y preferencias", adhd: "temporización de foco, Idea Fridge, sonido, notas de voz, feedback de finalización y preferencias" },
    data: { deskhaven: "índices de archivos, rutas, nombres, tipos, tamaños, fechas de modificación, etiquetas, categorías, estado de bóveda, mapas de relaciones, índices de búsqueda, copias y preferencias locales", energyflow: "niveles de energía, estados de trabajo, fuentes de energía, ánimo, notas, marcas de tiempo, resultados estadísticos, tendencias y preferencias locales", adhd: "duración de foco, estado de inicio y fin, contenido de Idea Fridge, notas de voz o temporales, sonido, feedback, idioma y preferencias locales" },
    examples: { deskhaven: "documentos, imágenes, materiales de proyecto, archivos de contraseñas, claves SSH, exportaciones y materiales de trabajo", energyflow: "estado de energía, ánimo de trabajo, señales de estrés, hábitos, ritmo temporal y notas personales", adhd: "pensamientos privados, tareas pendientes, notas de voz, dificultades de concentración, estado emocional y notas temporales" },
    privacyTitles: ["Tratamiento local", "Sin subida a servidores del desarrollador", "Tipos de datos locales y finalidad", "Contenido sensible y material personal", "Seguridad, cifrado y límites", "Conservación, eliminación y recuperación", "Información en soporte", "Tu control", "Dispositivo y servicios de terceros", "Contacto y actualizaciones"],
    legalTitles: ["Licencia", "Precio, prueba y reglas de Store", "Reembolsos, cancelación y facturación", "Contenido del usuario y propiedad de datos", "Riesgos, copias y consejo profesional", "Soporte, actualizaciones y cambios"],
    noUploadBullets: ["No se requiere cuenta SoloCraft.", "El contenido local no se sube al desarrollador.", "Índices, estadísticas y relaciones no se envían para análisis.", "Tu contenido local no se vende, alquila ni comparte.", "Tu contenido local no se usa para entrenar modelos ni crear perfiles publicitarios."],
    privacyBody(name, data, examples) { return buildPrivacy(this, name, data, examples); },
    legalBody(name, summary, trial) { return buildLegal(this, name, summary, trial, "Cuando un producto se obtiene o compra mediante Microsoft Store, precios, impuestos, disponibilidad, cancelación y reembolsos se rigen por las reglas mostradas en la región del cliente."); },
  },
  ru: {
    updated: "Последнее обновление: 28 июня 2026 г.",
    contact: "Для поддержки свяжитесь с разработчиком: 3371436706@qq.com.",
    privacyIntro: (name, purpose) => `Этот документ объясняет, как ${name} локально обрабатывает данные, связанные с ${purpose}. Он касается только конфиденциальности и не включает цены, пробные периоды, оплату или возвраты.`,
    legalIntro: (name) => `Этот документ описывает лицензию, покупку в Store, пробный период, возвраты, пользовательский контент, ответственность, ограничения и поддержку ${name}.`,
    purpose: { deskhaven: "локальной организацией файлов, хранилищами, картами связей, поиском, резервными копиями и настройками", energyflow: "записями энергии, рабочим состоянием, настроением, статистическим анализом и настройками", adhd: "таймером фокуса, Idea Fridge, звуком, голосовыми заметками, итоговой обратной связью и настройками" },
    data: { deskhaven: "индексы файлов, пути, имена, типы, размеры, время изменения, теги, категории, состояние хранилища, карты связей, поисковые индексы, резервные копии и локальные настройки", energyflow: "уровни энергии, рабочие состояния, источники энергии, настроение, заметки, временные метки, статистика, тренды и локальные настройки", adhd: "длительность фокуса, начало и завершение, содержимое Idea Fridge, голосовые или временные заметки, звук, итоговая обратная связь, язык и локальные настройки" },
    examples: { deskhaven: "документы, изображения, проектные материалы, файлы паролей, SSH-ключи, экспорты и рабочие материалы", energyflow: "энергетическое состояние, рабочее настроение, признаки стресса, привычки, временной ритм и личные заметки", adhd: "личные мысли, незавершённые задачи, голосовые заметки, трудности концентрации, эмоциональное состояние и временные записи" },
    privacyTitles: ["Локальная обработка", "Нет загрузки на серверы разработчика", "Типы локальных данных и цель", "Чувствительный контент и личные материалы", "Безопасность, шифрование и ограничения", "Хранение, удаление и восстановление", "Информация при поддержке", "Ваш контроль", "Устройство и сторонние сервисы", "Контакт и обновления"],
    legalTitles: ["Лицензия", "Цена, пробный период и правила Store", "Возвраты, отмена и выставление счетов", "Пользовательский контент и владение данными", "Риски, резервные копии и профессиональные советы", "Поддержка, обновления и изменения"],
    noUploadBullets: ["Учётная запись SoloCraft не требуется.", "Локальные файлы не загружаются разработчику.", "Индексы, статистика и связи не отправляются для анализа.", "Локальный контент не продаётся, не сдаётся и не передаётся.", "Локальный контент не используется для обучения моделей или рекламных профилей."],
    privacyBody(name, data, examples) { return buildPrivacy(this, name, data, examples); },
    legalBody(name, summary, trial) { return buildLegal(this, name, summary, trial, "При получении или покупке через Microsoft Store цены, налоги, доступность, отмена и возврат определяются правилами, отображаемыми в регионе клиента."); },
  },
  pt: {
    updated: "Última atualização: 28 de junho de 2026",
    contact: "Para suporte, contacte o desenvolvedor em 3371436706@qq.com.",
    privacyIntro: (name, purpose) => `Este documento explica como ${name} trata localmente dados relacionados a ${purpose}. Ele cobre apenas privacidade e não inclui preço, teste, cobrança ou reembolso.`,
    legalIntro: (name) => `Este documento explica licença, compra na Store, teste, reembolsos, conteúdo do usuário, responsabilidades, limites e suporte para ${name}.`,
    purpose: { deskhaven: "organização de arquivos locais, cofres, mapas de relacionamento, busca, backups e preferências", energyflow: "registros de energia, estado de trabalho, humor, análise estatística e preferências", adhd: "tempo de foco, Idea Fridge, som, notas de voz, feedback de conclusão e preferências" },
    data: { deskhaven: "índices de arquivos, caminhos, nomes, tipos, tamanhos, datas de modificação, tags, categorias, estado do cofre, mapas de relacionamento, índices de busca, backups e preferências locais", energyflow: "níveis de energia, estados de trabalho, fontes de energia, humor, notas, horários, resultados estatísticos, tendências e preferências locais", adhd: "duração de foco, início e fim, conteúdo do Idea Fridge, notas de voz ou temporárias, som, feedback, idioma e preferências locais" },
    examples: { deskhaven: "documentos, imagens, materiais de projeto, arquivos de senha, chaves SSH, exportações e materiais de trabalho", energyflow: "estado de energia, humor de trabalho, sinais de estresse, hábitos, ritmo de tempo e notas pessoais", adhd: "pensamentos privados, tarefas inacabadas, notas de voz, dificuldades de foco, estado emocional e notas temporárias" },
    privacyTitles: ["Tratamento local", "Sem envio para servidores do desenvolvedor", "Tipos de dados locais e finalidade", "Conteúdo sensível e material pessoal", "Segurança, criptografia e limites", "Retenção, exclusão e recuperação", "Informações no suporte", "Seu controle", "Dispositivo e serviços de terceiros", "Contato e atualizações"],
    legalTitles: ["Licença", "Preço, teste e regras da Store", "Reembolsos, cancelamento e cobrança", "Conteúdo do usuário e propriedade dos dados", "Riscos, backups e aconselhamento profissional", "Suporte, atualizações e mudanças"],
    noUploadBullets: ["Nenhuma conta SoloCraft é necessária.", "Conteúdo local não é enviado ao desenvolvedor.", "Índices, estatísticas e relações não são enviados para análise.", "Seu conteúdo local não é vendido, alugado ou compartilhado.", "Seu conteúdo local não é usado para treinar modelos ou criar perfis de publicidade."],
    privacyBody(name, data, examples) { return buildPrivacy(this, name, data, examples); },
    legalBody(name, summary, trial) { return buildLegal(this, name, summary, trial, "Quando um produto é obtido ou comprado pela Microsoft Store, preços, impostos, disponibilidade, cancelamento e reembolso seguem as regras exibidas na região do cliente."); },
  },
};

function buildPrivacy(pack: Pack, name: string, data: string, examples: string): PolicySection[] {
  return [
    { title: pack.privacyTitles[0], body: [`${name}: ${data}.`, pack.privacyTitles[0] === "Local-first processing" ? "" : `${name} processes this information on the local Windows device by default.`].filter(Boolean) },
    { title: pack.privacyTitles[1], body: pack.privacyBody === buildPrivacy ? [] : [`${name} keeps core data local and does not require a SoloCraft online account for normal use.`, "Operating system backups, cloud drives, or third-party sync tools are controlled by the user or the corresponding service, not by this app."], bullets: pack.noUploadBullets },
    { title: pack.privacyTitles[2], body: [`${data}.`, "These local records keep search, statistics, review, recovery, automation, and preference features working on the user’s own device."] },
    { title: pack.privacyTitles[3], body: [`${examples}.`, "When a device is shared, managed by an organization, or not encrypted, the user should pay attention to account access, disk permissions, screenshots, backups, and local folder rights."] },
    { title: pack.privacyTitles[4], body: [`${name} may include local storage, password protection, encryption, backup, restore, or screen-protection features depending on app version and Windows environment.`, "These features reduce risk but do not replace system passwords, disk encryption, trusted backups, and careful permission management."] },
    { title: pack.privacyTitles[5], body: [`${name} local data remains on the device or selected storage location until the user clears, deletes, resets, or removes it.`, "Deleted local data may not be recoverable by the developer. Users who need long-term retention should maintain their own backups." ] },
    { title: pack.privacyTitles[6], body: ["If the user contacts support by email, the address, issue description, screenshots, logs, or attachments voluntarily provided are used only to respond to the request.", "Users should avoid sending unnecessary passwords, private keys, identity documents, or unrelated sensitive material in support emails." ] },
    { title: pack.privacyTitles[7], body: [`Users decide whether to place content into ${name}.`, "Content that should not be processed should not be placed in monitored paths, vaults, logging flows, idea records, or manual import workflows." ] },
    { title: pack.privacyTitles[8], body: ["The app cannot control operating-system accounts, company device policies, antivirus tools, backup software, cloud-drive sync, browser extensions, or other third-party services.", "If those tools access, sync, back up, or upload local files, users should review the relevant service settings and privacy policy." ] },
    { title: pack.privacyTitles[9], body: [pack.contact, pack.updated] },
  ];
}

function buildLegal(pack: Pack, name: string, summary: string, trial: string, store: string): PolicySection[] {
  return [
    { title: pack.legalTitles[0], body: [`${name} is provided under a personal, non-exclusive, non-transferable license.`, "Users may not redistribute, resell, reverse engineer, remove copyright notices, compromise security, or bypass Store rules unless allowed by law or written permission." ] },
    { title: pack.legalTitles[1], body: [summary, trial, store] },
    { title: pack.legalTitles[2], body: ["Refunds, cancellation, billing, payment method, tax, and region restrictions are generally handled by Microsoft Store policies.", "The developer can help explain product behavior but cannot bypass Microsoft Store orders, payments, reviews, or refunds." ] },
    { title: pack.legalTitles[3], body: ["Users retain rights to their files, records, preferences, imported materials, and other user content.", "Users are responsible for confirming that they have the right to process, organize, back up, or import the content they use with the software." ] },
    { title: pack.legalTitles[4], body: ["The software is provided as is and does not guarantee a particular result.", "It is not a substitute for professional medical, legal, financial, security-audit, or data-recovery advice. Important data should be backed up independently." ] },
    { title: pack.legalTitles[5], body: ["Features, prices, trial terms, available markets, language support, and documentation may change with product versions and Microsoft Store review results.", pack.contact] },
  ];
}

function pack(locale: Locale): Pack | undefined {
  return packs[locale];
}

export function productPolicyCopy(product: ProductId, kind: PolicyKind, locale: Locale): ProductPolicyCopy {
  const override = pack(locale);
  if (!override) return baseProductPolicyCopy(product, kind, locale);
  const base = baseProductPolicyCopy(product, kind, locale);
  const name = names[product];
  if (kind === "privacy") {
    return {
      ...base,
      intro: override.privacyIntro(name, override.purpose[product]),
      sections: override.privacyBody(name, override.data[product], override.examples[product]),
    };
  }
  const pricing = productPricing(product, locale);
  return {
    ...base,
    intro: override.legalIntro(name),
    sections: override.legalBody(name, pricing.summary, pricing.trial),
  };
}
