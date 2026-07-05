import type { Locale } from "@/lib/i18n/context";
import type { DeskHavenAssetLocale } from "@/lib/siteAssets";

type PosterTopic =
  | "private"
  | "workbench"
  | "search"
  | "archive"
  | "relationships"
  | "dashboard"
  | "automation"
  | "ai"
  | "theme"
  | "control"
  | "passwords"
  | "ssh"
  | "settings";

type PosterStory = readonly [string, string];

const posterOrders: Record<DeskHavenAssetLocale, PosterTopic[]> = {
  zh: ["private", "workbench", "search", "relationships", "archive", "dashboard", "automation", "ai", "theme", "control"],
  "zh-tw": ["workbench", "private", "search", "ai", "theme", "control", "relationships", "dashboard", "archive", "private"],
  en: ["workbench", "search", "archive", "relationships", "dashboard", "automation", "ai", "theme", "control", "private"],
  de: ["workbench", "search", "archive", "relationships", "dashboard", "automation", "ai", "theme", "control", "private"],
  ko: ["workbench", "search", "archive", "relationships", "dashboard", "automation", "ai", "theme", "control", "private"],
  fr: ["private", "control", "search", "archive", "relationships", "dashboard", "theme", "passwords", "ai", "settings"],
  pt: ["private", "control", "search", "archive", "relationships", "dashboard", "theme", "passwords", "ai", "settings"],
  es: ["private", "control", "theme", "ai", "passwords", "dashboard", "archive", "relationships", "search", "private"],
  ja: ["private", "search", "archive", "relationships", "automation", "ai", "private", "passwords", "ssh", "theme"],
  ru: ["workbench", "private", "search", "archive", "relationships", "dashboard", "ai", "theme", "control", "automation"],
};

const topicCopy = {
  zh: {
    private: ["专属私域空间", "把重要文件、照片、导出资料和敏感内容放进本地私域，不再让桌面承担所有记忆。"],
    workbench: ["本地内容工作台", "在同一个工作台里查看文件列表、详情、统计和最近操作，先建立秩序，再处理细节。"],
    search: ["更快找到目标", "搜索、标签、路径和文件夹入口并列出现，让找文件不再只依赖模糊的文件名回忆。"],
    archive: ["归档更有秩序", "按区域、状态和时间线管理资料，整理之后依然能清楚知道内容去了哪里。"],
    relationships: ["关系清晰可见", "用关系图谱看见文件、标签、项目和主题之间的连接，理解内容为什么重要。"],
    dashboard: ["先看全局再进入细节", "仪表盘汇总数量、趋势、分类和最近变化，适合每天打开后先扫一眼。"],
    automation: ["后台自动整理", "路径、规则、开关和语言设置集中管理，让整理在后台稳定发生。"],
    ai: ["接入 AI 工具链", "把摘要、标签、归类等能力接进文件工作流，帮助理解内容，而不是替你失控操作。"],
    theme: ["白天清爽，夜晚专注", "深浅模式对应不同工作环境，界面保持克制，不用视觉噪音抢走注意力。"],
    control: ["数据和控制权", "导入导出、备份恢复、加密和密钥管理放在明确位置，重要文件始终可控。"],
    passwords: ["密码与密钥本地管理", "把敏感凭据放在本地受控区域，减少散落在文档和聊天记录里的风险。"],
    ssh: ["SSH 密钥安全管理", "把开发相关密钥集中管理，并保持本地优先、可查看、可掌控。"],
    settings: ["设置集中可见", "监控、备份、语言和数据选项放在一个清楚的位置，减少日常维护成本。"],
  },
  en: {
    private: ["A private file space", "Keep important files, photos, exports, and sensitive material in a local space you control."],
    workbench: ["A calm local workspace", "Review files, notes, stats, and recent activity from one desktop workbench before cleaning up."],
    search: ["Find what matters faster", "Search, filters, tags, paths, and folder entry points work together so files are easier to recover."],
    archive: ["Organized archives and notes", "Group materials by area, status, and context so archived work stays understandable."],
    relationships: ["Visible content relationships", "Relationship graphs show how files, tags, projects, and topics connect."],
    dashboard: ["The big picture first", "Dashboard metrics summarize counts, categories, trends, and recent changes for a quick daily scan."],
    automation: ["Quiet background organization", "Rules, paths, switches, and language settings stay centralized so cleanup can keep running."],
    ai: ["A local AI tool chain", "Summaries, tags, and classification can join the file workflow without taking control away from you."],
    theme: ["Clear by day, focused by night", "Light and dark modes support different environments while keeping the interface restrained."],
    control: ["Data stays under control", "Import, export, backup, restore, encryption, and key options stay visible and understandable."],
    passwords: ["Passwords stay local", "Credential-related information belongs in a controlled local area, not scattered across loose files."],
    ssh: ["SSH keys stay manageable", "Developer keys can be grouped and reviewed without turning security into another messy folder."],
    settings: ["Settings in one place", "Monitoring, backup, language, and data controls stay grouped for easier maintenance."],
  },
  "zh-tw": {
    private: ["專屬私密空間", "把重要文件、照片、匯出資料和敏感內容放進本地私域，讓桌面重新安靜下來。"],
    workbench: ["本地內容工作台", "先在同一個工作台看清文件、筆記、統計和最近動作，再進一步整理。"],
    search: ["更快找到目標", "搜尋、標籤、路徑和資料夾入口一起工作，找回文件不再只靠記憶。"],
    archive: ["按區域整理檔案", "用區域、狀態和時間線管理內容，整理後仍能清楚知道文件在哪裡。"],
    relationships: ["關係一眼看清", "用關係圖看見文件、標籤、專案和主題之間的連接。"],
    dashboard: ["儀表盤看全局", "用數量、趨勢、分類和最近變化快速掌握文件狀態。"],
    automation: ["自動整理在後台發生", "監控、規則、備份和語言設定集中管理，降低日常維護成本。"],
    ai: ["接入 AI 工具鏈", "把摘要、標籤和分類接進本地工作流，幫助理解內容而不奪走控制權。"],
    theme: ["白天清爽，夜晚專注", "深色與淺色模式對應不同工作環境，保持安靜克制。"],
    control: ["保護資料與控制權", "匯入匯出、備份、加密和恢復入口清楚可見。"],
    passwords: ["密碼本地保管", "敏感憑據集中放在本地受控區域，減少散落風險。"],
    ssh: ["SSH 金鑰可控", "開發金鑰集中管理，安全狀態更容易檢查。"],
    settings: ["設定集中可見", "監控、語言、備份與資料選項放在清楚的位置。"],
  },
  pt: {
    private: ["Um espaço local para ficheiros", "Mantenha documentos, imagens e materiais importantes num espaço local sob o seu controlo."],
    workbench: ["Uma mesa de trabalho local", "Veja ficheiros, notas, estatísticas e atividade recente antes de começar a organizar."],
    search: ["Encontre tudo num instante", "Pesquisa, filtros, etiquetas, caminhos e pastas ajudam a recuperar ficheiros sem depender da memória."],
    archive: ["Arquivo por área", "Organize materiais por área, estado e contexto para que o arquivo continue compreensível."],
    relationships: ["Ligações visíveis", "O gráfico de relações mostra como ficheiros, etiquetas, projetos e temas se conectam."],
    dashboard: ["Métricas num só painel", "O painel resume quantidades, categorias, tendências e alterações recentes."],
    automation: ["Organização em segundo plano", "Regras, caminhos e opções ficam centralizados para a organização continuar sem esforço diário."],
    ai: ["Ferramentas de IA no fluxo local", "Resumos, etiquetas e classificação entram no fluxo sem retirar o controlo do utilizador."],
    theme: ["Claro de dia, focado à noite", "Modos claro e escuro acompanham ambientes diferentes sem ruído visual."],
    control: ["Dados sob controlo", "Importação, exportação, cópias, recuperação, encriptação e chaves ficam visíveis."],
    passwords: ["Palavras-passe sob controlo local", "Credenciais sensíveis ficam num espaço local controlado, não espalhadas por ficheiros soltos."],
    ssh: ["Chaves SSH organizadas", "Chaves de desenvolvimento podem ser agrupadas e revistas com mais clareza."],
    settings: ["Definições num só lugar", "Monitorização, idioma, cópias e opções de dados ficam agrupadas."],
  },
  es: {
    private: ["Un escritorio privado para tus archivos", "Guarda documentos, imágenes y materiales importantes en un espacio local bajo tu control."],
    workbench: ["Un espacio local de trabajo", "Revisa archivos, notas, estadísticas y actividad reciente antes de ordenar."],
    search: ["Encuentra todo en segundos", "Búsqueda, filtros, etiquetas, rutas y carpetas ayudan a recuperar archivos sin depender de la memoria."],
    archive: ["Organiza por áreas y contexto", "Agrupa materiales por área, estado y proyecto para que el archivo siga siendo claro."],
    relationships: ["Relaciones entre archivos", "El gráfico muestra cómo se conectan archivos, etiquetas, proyectos y temas."],
    dashboard: ["Todo tu espacio de un vistazo", "El panel resume cantidades, categorías, actividad y tendencias recientes."],
    automation: ["Organización silenciosa", "Reglas, rutas y opciones centralizadas mantienen el orden con menos trabajo manual."],
    ai: ["Herramientas de IA en tu flujo local", "Resúmenes, etiquetas y clasificación ayudan a entender contenido sin quitarte el control."],
    theme: ["Claro de día, enfocado de noche", "Los modos claro y oscuro se adaptan al entorno sin añadir ruido visual."],
    control: ["Datos bajo control", "Importación, exportación, copias, recuperación, cifrado y claves permanecen visibles."],
    passwords: ["Contraseñas con control local", "Las credenciales sensibles pertenecen a un espacio local controlado, no a archivos dispersos."],
    ssh: ["Claves SSH organizadas", "Las claves de desarrollo pueden revisarse y agruparse con más claridad."],
    settings: ["Ajustes en un solo lugar", "Supervisión, idioma, copias y datos se gestionan desde un punto claro."],
  },
  ja: {
    private: ["静かな私的空間", "重要なファイルや資料を、散らばったデスクトップではなくローカルの管理領域に置けます。"],
    workbench: ["ローカル作業台", "ファイル、メモ、統計、最近の動きをひとつの作業台で確認できます。"],
    search: ["目的のファイルをすばやく探す", "検索、タグ、パス、フォルダ入口を組み合わせ、記憶だけに頼らず探せます。"],
    archive: ["情報をエリアで整理", "資料をエリア、状態、文脈でまとめ、あとから見ても意味が分かる状態にします。"],
    relationships: ["関係を見える化", "ファイル、タグ、プロジェクト、テーマのつながりを関係グラフで確認できます。"],
    dashboard: ["全体を先に把握", "数量、分類、傾向、最近の変化をダッシュボードで素早く確認できます。"],
    automation: ["自動整理と索引", "監視、ルール、索引、設定をまとめ、整理を静かに続けます。"],
    ai: ["AI ツールを接続", "要約、タグ付け、分類をローカルの作業流れに加え、内容理解を助けます。"],
    theme: ["昼は軽やかに、夜は集中", "明暗モードが作業環境に合わせて切り替わり、画面は控えめに保たれます。"],
    control: ["データを自分で管理", "インポート、エクスポート、バックアップ、暗号化、復元を分かりやすく扱えます。"],
    passwords: ["強いパスワードをローカルで保管", "機密性の高い資格情報を、散らばった文書ではなく管理された場所に置けます。"],
    ssh: ["SSH キーを安全に管理", "開発用キーをまとめて確認し、扱いやすい状態に保ちます。"],
    settings: ["設定を一か所に集約", "監視、言語、バックアップ、データ設定をまとめて調整できます。"],
  },
  fr: {
    private: ["Un espace local pour vos fichiers", "Gardez documents, images et contenus importants dans un espace local sous contrôle."],
    workbench: ["Un bureau local clair", "Consultez fichiers, notes, statistiques et activité récente avant de ranger."],
    search: ["Retrouvez vos fichiers plus vite", "Recherche, filtres, tags, chemins et dossiers aident à retrouver sans dépendre de la mémoire."],
    archive: ["Archives organisées par zone", "Classez les contenus par zone, état et contexte pour conserver du sens."],
    relationships: ["Relations visibles", "Le graphe montre comment fichiers, tags, projets et sujets se relient."],
    dashboard: ["Un tableau de bord lisible", "Le tableau résume volumes, catégories, tendances et changements récents."],
    automation: ["Organisation discrète", "Règles, chemins et options restent centralisés pour réduire l'effort quotidien."],
    ai: ["Outils IA dans le flux local", "Résumés, tags et classement aident à comprendre sans retirer le contrôle."],
    theme: ["Clair le jour, concentré la nuit", "Les modes clair et sombre suivent l'environnement sans ajouter de bruit visuel."],
    control: ["Données sous contrôle", "Import, export, sauvegarde, restauration, chiffrement et clés restent visibles."],
    passwords: ["Mots de passe en local", "Les identifiants sensibles restent dans un espace local contrôlé."],
    ssh: ["Clés SSH organisées", "Les clés de développement peuvent être regroupées et vérifiées plus simplement."],
    settings: ["Réglages centralisés", "Surveillance, langue, sauvegarde et données restent au même endroit."],
  },
  de: {
    private: ["Ein privater Dateiraum", "Wichtige Dateien, Bilder und Exporte bleiben in einem lokalen Bereich unter deiner Kontrolle."],
    workbench: ["Ein ruhiger lokaler Arbeitsplatz", "Dateien, Notizen, Kennzahlen und letzte Aktivitäten sind an einem Ort sichtbar."],
    search: ["Dateien schneller finden", "Suche, Filter, Tags, Pfade und Ordner helfen, Inhalte ohne Rätselraten wiederzufinden."],
    archive: ["Archive und Notizen ordnen", "Material bleibt nach Bereich, Status und Kontext nachvollziehbar."],
    relationships: ["Beziehungen sichtbar machen", "Der Graph zeigt Verbindungen zwischen Dateien, Tags, Projekten und Themen."],
    dashboard: ["Erst der Überblick", "Das Dashboard fasst Mengen, Kategorien, Trends und neue Änderungen zusammen."],
    automation: ["Leise Automatisierung", "Regeln, Pfade und Schalter bleiben zentral, damit Ordnung im Hintergrund entsteht."],
    ai: ["Lokale KI-Werkzeuge", "Zusammenfassungen, Tags und Klassifikation unterstützen den Workflow ohne Kontrollverlust."],
    theme: ["Hell am Tag, fokussiert bei Nacht", "Hell- und Dunkelmodus passen sich der Umgebung an, ohne visuelle Unruhe."],
    control: ["Daten unter Kontrolle", "Import, Export, Backup, Wiederherstellung, Verschlüsselung und Schlüssel bleiben verständlich."],
    passwords: ["Passwörter lokal halten", "Sensible Zugangsdaten gehören in einen kontrollierten lokalen Bereich."],
    ssh: ["SSH-Schlüssel verwalten", "Entwicklerschlüssel lassen sich klar gruppieren und prüfen."],
    settings: ["Einstellungen gebündelt", "Überwachung, Sprache, Backup und Datenoptionen bleiben an einem Ort."],
  },
  ko: {
    private: ["개인 파일 공간", "중요한 파일과 자료를 흩어진 바탕화면 대신 로컬 제어 공간에 둡니다."],
    workbench: ["차분한 로컬 작업대", "파일, 메모, 통계, 최근 활동을 한곳에서 보고 정리 흐름을 잡습니다."],
    search: ["더 빠른 파일 찾기", "검색, 필터, 태그, 경로, 폴더 진입점으로 기억에만 의존하지 않습니다."],
    archive: ["아카이브와 메모 정리", "영역, 상태, 맥락별로 자료를 묶어 나중에도 이해하기 쉽게 둡니다."],
    relationships: ["관계를 눈으로 보기", "파일, 태그, 프로젝트, 주제의 연결을 관계 그래프로 확인합니다."],
    dashboard: ["전체를 먼저 보기", "대시보드가 수량, 분류, 추세, 최근 변화를 빠르게 요약합니다."],
    automation: ["조용한 자동화", "규칙, 경로, 스위치를 한곳에 두어 정리가 백그라운드에서 이어집니다."],
    ai: ["로컬 AI 도구 흐름", "요약, 태그, 분류가 제어권을 빼앗지 않고 내용 이해를 돕습니다."],
    theme: ["낮에는 선명하게, 밤에는 집중", "밝은 모드와 어두운 모드가 환경에 맞춰 차분하게 전환됩니다."],
    control: ["데이터 제어권", "가져오기, 내보내기, 백업, 복구, 암호화, 키 관리가 명확하게 보입니다."],
    passwords: ["비밀번호는 로컬에서", "민감한 자격 증명을 흩어진 파일이 아닌 로컬 제어 공간에 둡니다."],
    ssh: ["SSH 키 관리", "개발 키를 모아 확인하고 관리하기 쉽게 유지합니다."],
    settings: ["설정 한곳 관리", "모니터링, 언어, 백업, 데이터 옵션을 한 화면에서 다룹니다."],
  },
  ru: {
    private: ["Личная зона для важных файлов", "Важные документы и материалы остаются в локальном пространстве под вашим контролем."],
    workbench: ["Тихий центр для файлов", "Файлы, заметки, статистика и последние действия видны в одном рабочем пространстве."],
    search: ["Быстрый поиск нужного", "Поиск, фильтры, теги, пути и папки помогают находить файлы без догадок."],
    archive: ["Управляемый архив", "Материалы можно хранить по областям, статусу и контексту, сохраняя понятную структуру."],
    relationships: ["Связи между файлами", "Граф показывает связи между файлами, тегами, проектами и темами."],
    dashboard: ["Состояние с первого взгляда", "Панель показывает количество, категории, тренды и последние изменения."],
    automation: ["Индекс работает за вас", "Правила, пути, индексация и настройки поддерживают порядок в фоне."],
    ai: ["AI-инструменты в локальном контексте", "Сводки, теги и классификация помогают понимать файлы без потери контроля."],
    theme: ["Светло днём, сфокусировано ночью", "Светлая и тёмная темы поддерживают разные рабочие условия."],
    control: ["Данные под контролем", "Импорт, экспорт, резервные копии, шифрование и восстановление остаются понятными."],
    passwords: ["Пароли локально", "Чувствительные данные лучше хранить в контролируемой локальной зоне."],
    ssh: ["SSH-ключи под рукой", "Ключи разработчика можно группировать и проверять без хаоса в папках."],
    settings: ["Настройки вместе", "Мониторинг, язык, резервные копии и параметры данных находятся в одном месте."],
  },
} satisfies Record<Locale, Record<PosterTopic, PosterStory>>;

type PosterSectionCopy = {
  eyebrow: string;
  title: string;
  body: string;
  galleryEyebrow: string;
  galleryTitle: string;
  galleryBody: string;
};

const sectionCopy: Record<Locale, PosterSectionCopy> = {
  zh: {
    eyebrow: "核心能力",
    title: "每张产品图都对应 DeskHaven 的一个真实工作场景。",
    body: "这里按海报内容配套说明：本地空间、搜索、归档、关系图、后台整理、AI 工具链、明暗模式、密码/密钥与数据控制。不同语言的海报顺序会按对应资源自动匹配。",
    galleryEyebrow: "真实界面",
    galleryTitle: "查看 DeskHaven 的实际工作界面。",
    galleryBody: "从仪表盘、文件台到设置与隐私控制，这里展示的是当前语言版本的真实界面。",
  },
  "zh-tw": {
    eyebrow: "核心能力",
    title: "每張產品圖都對應 DeskHaven 的一個真實工作場景。",
    body: "這裡依海報內容搭配說明：本地空間、搜尋、歸檔、關係圖、背景整理、AI 工具鏈、明暗模式、密碼/金鑰與資料控制。不同語言的海報順序會依對應資源自動匹配。",
    galleryEyebrow: "真實介面",
    galleryTitle: "查看 DeskHaven 的實際工作介面。",
    galleryBody: "從儀表板、文件台到設定與隱私控制，這裡展示的是目前語言版本的真實介面。",
  },
  en: {
    eyebrow: "Core capabilities",
    title: "Each product visual maps to a real DeskHaven workflow.",
    body: "The notes follow the actual poster order for the selected language: local space, search, archive, relationships, background organization, AI tools, themes, credentials, and data control.",
    galleryEyebrow: "Real interface",
    galleryTitle: "See DeskHaven's actual working screens.",
    galleryBody: "From dashboard and file desk to settings and privacy controls, this gallery shows the real interface for the selected language.",
  },
  ja: {
    eyebrow: "主要機能",
    title: "各プロダクトビジュアルは DeskHaven の実際の作業場面に対応しています。",
    body: "選択中の言語のポスター順に合わせて、ローカル空間、検索、アーカイブ、関係グラフ、バックグラウンド整理、AI ツール、テーマ、認証情報、データ管理を説明します。",
    galleryEyebrow: "実際の画面",
    galleryTitle: "DeskHaven の作業画面を見る。",
    galleryBody: "ダッシュボード、ファイルデスク、設定、プライバシー管理まで、現在の言語版の実画面を掲載しています。",
  },
  ko: {
    eyebrow: "핵심 기능",
    title: "각 제품 이미지는 DeskHaven의 실제 작업 흐름과 연결됩니다.",
    body: "선택한 언어의 포스터 순서에 맞춰 로컬 공간, 검색, 보관, 관계 그래프, 백그라운드 정리, AI 도구, 테마, 자격 증명, 데이터 제어를 설명합니다.",
    galleryEyebrow: "실제 화면",
    galleryTitle: "DeskHaven의 실제 작업 화면을 확인하세요.",
    galleryBody: "대시보드와 파일 데스크부터 설정 및 개인정보 제어까지 현재 언어 버전의 실제 인터페이스를 보여줍니다.",
  },
  fr: {
    eyebrow: "Capacités clés",
    title: "Chaque visuel présente un vrai flux de travail DeskHaven.",
    body: "Les notes suivent l'ordre réel des affiches de la langue choisie : espace local, recherche, archives, relations, organisation en arrière-plan, outils IA, thèmes, identifiants et contrôle des données.",
    galleryEyebrow: "Interface réelle",
    galleryTitle: "Voir les écrans de travail réels de DeskHaven.",
    galleryBody: "Du tableau de bord au bureau de fichiers, jusqu'aux réglages et contrôles de confidentialité, cette galerie montre l'interface de la langue sélectionnée.",
  },
  de: {
    eyebrow: "Kernfunktionen",
    title: "Jedes Produktmotiv gehört zu einem echten DeskHaven-Workflow.",
    body: "Die Hinweise folgen der tatsächlichen Poster-Reihenfolge der gewählten Sprache: lokaler Bereich, Suche, Archiv, Beziehungen, Hintergrundordnung, KI-Werkzeuge, Themen, Zugangsdaten und Datenkontrolle.",
    galleryEyebrow: "Echte Oberfläche",
    galleryTitle: "Die tatsächlichen Arbeitsansichten von DeskHaven ansehen.",
    galleryBody: "Vom Dashboard und Dateischreibtisch bis zu Einstellungen und Datenschutz zeigt die Galerie die reale Oberfläche der aktuellen Sprache.",
  },
  es: {
    eyebrow: "Capacidades clave",
    title: "Cada visual muestra un flujo real de trabajo en DeskHaven.",
    body: "Las notas siguen el orden real de los pósteres del idioma elegido: espacio local, búsqueda, archivo, relaciones, organización en segundo plano, herramientas de IA, temas, credenciales y control de datos.",
    galleryEyebrow: "Interfaz real",
    galleryTitle: "Mira las pantallas reales de trabajo de DeskHaven.",
    galleryBody: "Desde el panel y el escritorio de archivos hasta ajustes y privacidad, esta galería muestra la interfaz real del idioma seleccionado.",
  },
  ru: {
    eyebrow: "Ключевые возможности",
    title: "Каждый визуальный блок связан с реальным сценарием DeskHaven.",
    body: "Описание следует порядку постеров выбранного языка: локальное пространство, поиск, архив, связи, фоновая организация, AI-инструменты, темы, учетные данные и контроль данных.",
    galleryEyebrow: "Реальный интерфейс",
    galleryTitle: "Посмотрите рабочие экраны DeskHaven.",
    galleryBody: "От панели и файлового стола до настроек и приватности: здесь показан реальный интерфейс выбранного языка.",
  },
  pt: {
    eyebrow: "Recursos principais",
    title: "Cada visual do produto corresponde a um fluxo real do DeskHaven.",
    body: "As notas seguem a ordem real dos pôsteres no idioma selecionado: espaço local, pesquisa, arquivo, relações, organização em segundo plano, ferramentas de IA, temas, credenciais e controle de dados.",
    galleryEyebrow: "Interface real",
    galleryTitle: "Veja as telas reais de trabalho do DeskHaven.",
    galleryBody: "Do painel e mesa de arquivos às configurações e controles de privacidade, a galeria mostra a interface real do idioma selecionado.",
  },
};

function languageCopy(locale: Locale) {
  return topicCopy[locale] ?? topicCopy.en;
}

export function deskHavenPosterStories(locale: Locale, assetLocale: DeskHavenAssetLocale) {
  const copy = languageCopy(locale);
  return posterOrders[assetLocale].map((topic) => copy[topic]);
}

export function deskHavenPosterSectionCopy(locale: Locale) {
  return sectionCopy[locale] ?? sectionCopy.en;
}
