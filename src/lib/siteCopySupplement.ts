import type { Locale } from "@/lib/i18n/context";

export const siteCopySupplement: Partial<Record<Locale, any>> = {
  "zh-tw": {
    common: {
      productPromise: "產品承諾",
      experienceFlow: "體驗流程",
      productIndex: "產品索引",
      operatingPrinciples: "工作原則",
      designPrinciples: "設計原則",
      step: "步驟",
      viewProducts: "查看產品",
      contact: "聯絡",
      getUpdates: "聯絡開發者",
      microsoftStore: "Microsoft Store",
      privacy: "隱私政策",
      backToProducts: "返回產品",
    },
    home: {
      eyebrow: "獨立 Windows 桌面軟體",
      title: "讓精力、專注和文件管理回到可控狀態。",
      intro: "SoloCraft 匯集 Chicken Fillet 的桌面工具：記錄工作精力、降低專注阻力、整理本地文件。每個產品都圍繞真實日常使用場景設計，盡量少打擾，多幫你把事情理順。",
      primary: "了解產品思路",
      secondary: "查看產品",
      currentProduct: "正在展示",
      notes: [
        ["本地優先", "能留在設備上的資料，就不輕易離開設備。"],
        ["低摩擦", "關鍵動作盡量少步驟，避免把記錄、整理和開始專注變成新的負擔。"],
        ["桌面原生", "圍繞真實 Windows 工作流設計，而不是把網頁儀表板硬塞進桌面。"],
        ["克制表達", "介面服務於理解和行動，不用噪音、徽章和假緊迫感搶注意力。"],
      ],
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "看清每一天精力流向。", body: "3 秒打卡精力，記錄等級、狀態、來源與心情。它不是另一張工作量表，而是幫你發現會議、任務和節奏如何影響表現。", bullets: ["5 級精力等級", "職場場景", "Pearson + 卡方", "本地隱私優先"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "讓混亂桌面重新變成工作台。", body: "DeskHaven 是桌面文件避風港：守護每一份文件，讓重要內容有一個安靜、可控、本地安全的工作台。", bullets: ["本地內容空間", "關係圖譜", "文件倉", "AES-256"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "不懲罰注意力的專注工具。", body: "正向計時、呼吸過渡、想法冰箱和全螢幕專注環境。它不催促你完成任務，而是幫你更溫和地進入狀態。", bullets: ["正向計時", "呼吸引導", "想法冰箱", "本地隱私"] },
      ],
      principlesTitle: "少一點干擾，多一點掌控感。",
      principlesBody: "SoloCraft 的產品不追求複雜功能堆疊，而是把一個明確場景做完整：看清精力變化，順利進入專注，或者把分散文件重新整理成可找回的秩序。",
      productTitle: "選擇一個工具，進入對應的工作場景。",
      studioTitle: "小工具，也要經得起長期使用。",
      studioBody: "我更在意產品能否安靜地融入日常，而不是第一次打開時有多熱鬧。真實截圖、清晰隱私說明和可驗證的功能，比花俏包裝更重要。",
      studioNote: "EnergyFlow、DeskHaven 和 ADHD Focus Timer 分別面向精力記錄、文件整理和低阻力專注。你可以從任意產品頁直接查看功能、截圖、隱私說明和下載入口。",
    },
    products: { eyebrow: "產品索引", title: "選擇你現在需要的桌面工具。", intro: "每個產品頁都展示真實介面、核心功能、隱私說明和下載入口。先看清它解決什麼問題，再決定是否安裝。" },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "職場能量儀表板", description: "用幾秒記錄精力、工作狀態和恢復來源，再透過趨勢與統計看清哪些場景真正消耗你。", status: "已推出" },
      deskhaven: { title: "DeskHaven", category: "桌面文件避風港", description: "把分散文件放進本地工作台，用檔案櫃、搜尋、關係圖譜和備份恢復建立可找回的秩序。", status: "已推出" },
      adhd: { title: "ADHD Focus Timer", category: "低壓力專注計時器", description: "用準備頁、呼吸過渡、正向計時和想法冰箱，幫助你更溫和地開始並維持一段專注。", status: "已推出" },
    },
    energyflow: {
      eyebrow: "EnergyFlow / 職場能量儀表板",
      title: "記錄精力變化，看清工作真正消耗在哪裡。",
      intro: "EnergyFlow 用幾秒完成一次精力記錄：等級、工作狀態、恢復來源和情緒。累積一段時間後，你可以用趨勢和統計結果判斷哪些會議、任務或作息正在影響狀態。",
      status: "已推出",
      promiseTitle: "不是待辦清單，而是你的工作能量記錄。",
      promise: "它不評價你是否足夠努力，只幫助你把體感變成可回看的記錄。長期資料會慢慢呈現：什麼讓你恢復，什麼讓你耗竭，哪些安排值得調整。",
      features: [["3 秒打卡", "用最少步驟記錄 5 級精力、工作狀態、能量來源和心情，不把追蹤本身變成負擔。"], ["深淺模式", "深色模式適合專注，淺色模式適合日間辦公。介面保持克制，不用視覺噪音搶走注意力。"], ["桌面常駐", "桌面懸浮入口和快捷鍵讓記錄可以隨手完成：出現、記錄、收起，盡量不打斷目前工作。"], ["統計洞察", "透過 Pearson 相關和卡方檢驗觀察能量與場景之間的關係，用長期記錄發現真正的消耗源。"], ["隱私保護", "精力狀態屬於敏感個人資料。EnergyFlow 以本地優先、隱私優先為預設設計方向。"]],
      flow: ["記錄當下狀態", "累積工作場景", "查看能量趨勢", "調整工作節奏"],
    },
    deskhaven: {
      eyebrow: "DeskHaven / 桌面文件避風港",
      title: "把分散文件整理成一個可找回的本地工作台。",
      intro: "DeskHaven 面向 Windows 本地文件整理：把散落的資料、圖片、匯出文件和專案素材放進可搜尋、可歸檔、可備份的工作空間，並透過關係圖譜理解內容之間的連接。",
      status: "已推出",
      promiseTitle: "不是換一個資料夾，而是建立一套本地文件秩序。",
      promise: "文件倉負責歸攏和歸檔，搜尋負責快速定位，關係圖譜幫助理解內容連接，備份與隱私控制確保重要文件可恢復、可匯出、可掌握。",
      features: [["先看全局，再進入細節", "儀表板匯總文件數量、關係數量、加密狀態和儲存趨勢，讓使用者第一眼知道桌面內容是否可控。"], ["文件倉：把內容放回秩序裡", "文件倉集中管理本地文件、元資料和歸檔狀態。它不是雲端硬碟，而是本機內容的安靜收納層。"], ["關係圖譜：看見內容之間的連接", "文件、標籤、主題、專案之間的關係可以被看見。使用者不只是找文件，也能理解文件為什麼重要。"], ["隱私與控制權", "金鑰、匯入匯出、加密和控制選項放在清晰位置。重要資料應該由使用者掌握。"], ["讓整理在後台自動發生", "後台自動化、路徑、開關和語言設定集中在設定頁，整理不應該變成每天必須維護的新系統。"]],
      principles: [["本地優先", "重要文件和索引預設在本機處理。"], ["安全可控", "使用者必須知道文件在哪裡，也能隨時匯出或找回。"], ["關係可視", "文件不是孤立物，專案、標籤和內容關係應該可以被理解。"], ["低打擾", "整理應該順手發生，而不是製造新的負擔。"]],
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 低壓力專注",
      title: "用更低壓力的方式開始一段專注。",
      intro: "ADHD Focus Timer 透過準備頁、呼吸過渡、正向計時和想法冰箱，減少開始任務時的阻力。它不把分心當成失敗，而是幫你把注意力慢慢帶回當前任務。",
      status: "已推出",
      promiseTitle: "專注工具應該降低阻力，而不是增加壓力。",
      promise: "正向計時避免倒數帶來的失敗感，想法冰箱讓突然冒出的念頭暫時有地方放，完成回饋記錄一次真實投入，而不是給你打分。",
      features: [["進入前先降噪", "介紹彈窗和準備頁讓使用者知道接下來會發生什麼，降低開始任務時的心理阻力。"], ["準備，而不是逼迫", "時長、白噪音、語言、呼吸引導都在開始前確定，減少專注過程中的額外選擇。"], ["呼吸過渡", "正式開始前用呼吸引導完成從混亂到專注的切換。"], ["正向計時", "計時向前累積，而不是倒數製造失敗感。粒子和進度給出輕微陪伴。"], ["想法冰箱", "突然冒出的想法不需要立刻處理，可以先放進冰箱，之後再回來。"], ["完成回饋", "結束不是審判，而是記錄一次真實完成。成就頁面給出溫和回饋。"], ["支援與隱私", "工具保持本地優先、最小資料、清晰隱私說明，避免把專注資料變成另一種壓力。"]],
    },
    about: {
      title: "關於 SoloCraft",
      intro: "SoloCraft 是 Chicken Fillet 的獨立桌面軟體工作室，專注於安靜、克制、隱私優先的小工具。",
      story: ["我喜歡做那些不搶戲的工具：它們應該在需要時出現，在完成後退到背景裡。", "EnergyFlow、DeskHaven 和 ADHD Focus Timer 都圍繞同一個問題：怎樣讓桌面工作更可恢復、更可理解、更少壓力。", "這個網站展示這些工具真實的樣子：介面、使用場景、隱私說明和下載方式都盡量清楚，不用誇張包裝代替產品本身。"],
      philosophyTitle: "設計原則",
      philosophy: [["小而完整", "每個工具聚焦一個明確場景，但把關鍵流程做完整。"], ["桌面原生", "圍繞真實桌面工作流，而不是把網頁儀表板硬塞進應用。"], ["克制表達", "視覺服務於理解，不用裝飾製造廉價興奮。"], ["隱私優先", "能留在本地的資料，就不輕易離開設備。"]],
      techTitle: "技術方向",
      tech: ["Windows 桌面應用", "本地優先儲存", "統計與視覺化", "重視隱私的產品設計"],
      ctaTitle: "想聊產品、合作或回饋？",
      ctaDescription: "我會認真閱讀每一封真實來信。",
      ctaButton: "聯絡我",
    },
    contact: { title: "聯絡", intro: "產品回饋、合作想法、媒體詢問，或只是打個招呼，都可以發郵件給我。", infoTitle: "聯絡方式", email: "郵箱" },
    footer: { subtitle: "Chicken Fillet 的獨立桌面軟體工作室。", studio: "工作室", products: "產品", legal: "法務", about: "關於", contact: "聯絡", privacy: "隱私政策", copyright: "安靜、克制、隱私優先的桌面工具。" },
  },

  ja: {
    home: {
      primary: "考え方を見る", secondary: "製品を見る", currentProduct: "表示中",
      notes: [["ローカル優先", "端末に残せるデータは、むやみに外へ出しません。"], ["低い摩擦", "記録、整理、集中開始が新しい負担にならないよう、操作を短く保ちます。"], ["デスクトップ原生", "実際の Windows ワークフローを中心に設計します。"], ["控えめな表現", "理解と行動を助け、ノイズや偽の緊急感で注意を奪いません。"]],
      chapters: [{ id: "energyflow", num: "01 / EnergyFlow", title: "一日のエネルギーの流れを見る。", body: "数秒でエネルギー、状態、原因、気分を記録し、会議やタスクが状態にどう影響するかを見つけます。", bullets: ["5 段階", "仕事の文脈", "相関 + カイ二乗", "ローカル優先"] }, { id: "deskhaven", num: "02 / DeskHaven", title: "散らかったデスクトップを作業台へ。", body: "DeskHaven はローカルファイルの避難所です。重要な内容を静かで制御可能な作業台に戻します。", bullets: ["ローカル空間", "関係マップ", "保管庫", "AES-256"] }, { id: "adhd", num: "03 / ADHD Focus Timer", title: "注意を責めない集中ツール。", body: "前向きな計時、呼吸、Idea Fridge、全画面集中で、より穏やかに作業へ入れます。", bullets: ["前向き計時", "呼吸ガイド", "Idea Fridge", "ローカルプライバシー"] }],
      principlesTitle: "邪魔を少なく、コントロールを多く。", principlesBody: "SoloCraft は機能の多さより、ひとつの場面を最後まで支えることを重視します。", productTitle: "今の作業に合うツールを選ぶ。", studioTitle: "小さなツールを長く使える形に。", studioBody: "初回の派手さより、毎日の作業に静かに馴染むかを大切にします。", studioNote: "各製品ページでは機能、スクリーンショット、プライバシー、ダウンロード導線を確認できます。",
    },
    about: { story: ["必要な時だけ現れ、作業が終われば背景へ戻る道具を作りたいと思っています。", "EnergyFlow、DeskHaven、ADHD Focus Timer は、デスクトップ作業をより回復しやすく、理解しやすく、低ストレスにするための製品です。", "このサイトでは実際の画面、利用場面、プライバシー、ダウンロード方法を誇張せずに示します。"], philosophyTitle: "設計原則", philosophy: [["小さく完全", "明確な場面に集中し、重要な流れを完成させます。"], ["デスクトップ原生", "実際のデスクトップ作業に合わせます。"], ["控えめ", "視覚は理解を助けるために使います。"], ["プライバシー優先", "ローカルに残せるデータは軽く外へ出しません。"]], techTitle: "技術方針", tech: ["Windows デスクトップアプリ", "ローカル優先ストレージ", "統計と可視化", "プライバシーを意識した設計"], ctaTitle: "製品、協業、フィードバックについて話しますか？", ctaDescription: "実際のメッセージはすべて大切に読みます。", ctaButton: "連絡する" },
    footer: { subtitle: "Chicken Fillet の独立系デスクトップソフトウェアスタジオ。", studio: "スタジオ", products: "製品", legal: "法務", about: "概要", contact: "連絡", privacy: "プライバシーポリシー", copyright: "静かで控えめ、プライバシー優先のデスクトップツール。" },
  },

  ko: {
    home: {
      primary: "제품 방향 보기", secondary: "제품 보기", currentProduct: "현재 표시",
      notes: [["로컬 우선", "기기에 남길 수 있는 데이터는 쉽게 밖으로 보내지 않습니다."], ["낮은 마찰", "기록, 정리, 집중 시작이 새 부담이 되지 않도록 핵심 동작을 짧게 만듭니다."], ["데스크톱 네이티브", "실제 Windows 작업 흐름을 중심으로 설계합니다."], ["절제된 표현", "인터페이스는 이해와 행동을 돕고, 소음과 가짜 긴급함으로 주의를 빼앗지 않습니다."]],
      chapters: [{ id: "energyflow", num: "01 / EnergyFlow", title: "하루의 에너지 흐름을 보세요.", body: "몇 초 만에 에너지, 상태, 원인, 기분을 기록하고 회의와 업무가 상태에 어떤 영향을 주는지 확인합니다.", bullets: ["5단계 에너지", "업무 맥락", "상관 + 카이제곱", "로컬 개인정보"] }, { id: "deskhaven", num: "02 / DeskHaven", title: "어수선한 데스크톱을 작업대로 바꾸세요.", body: "DeskHaven은 로컬 파일의 피난처입니다. 중요한 콘텐츠를 조용하고 통제 가능한 작업대로 되돌립니다.", bullets: ["로컬 공간", "관계 지도", "파일 보관소", "AES-256"] }, { id: "adhd", num: "03 / ADHD Focus Timer", title: "주의력을 벌하지 않는 집중 도구.", body: "정방향 타이머, 호흡, Idea Fridge, 전체화면 집중 환경으로 더 부드럽게 시작합니다.", bullets: ["정방향 타이머", "호흡 가이드", "Idea Fridge", "로컬 개인정보"] }],
      principlesTitle: "방해는 줄이고, 통제감은 높입니다.", principlesBody: "SoloCraft는 기능을 쌓기보다 하나의 명확한 상황을 끝까지 완성하는 데 집중합니다.", productTitle: "지금의 작업 흐름에 맞는 도구를 선택하세요.", studioTitle: "작은 도구도 오래 쓸 수 있어야 합니다.", studioBody: "처음 열었을 때의 화려함보다 일상에 조용히 어울리는지를 더 중요하게 봅니다.", studioNote: "각 제품 페이지에서 기능, 스크린샷, 개인정보 설명, 다운로드 경로를 바로 확인할 수 있습니다.",
    },
    about: { story: ["필요할 때 나타나고, 일이 끝나면 배경으로 돌아가는 도구를 만들고 싶습니다.", "EnergyFlow, DeskHaven, ADHD Focus Timer는 데스크톱 작업을 더 회복 가능하고 이해하기 쉽고 덜 stressful하게 만들기 위한 제품입니다.", "이 사이트는 실제 화면, 사용 상황, 개인정보 설명, 다운로드 방식을 과장 없이 보여 줍니다."], philosophyTitle: "설계 원칙", philosophy: [["작고 완성도 있게", "명확한 상황에 집중하고 중요한 흐름을 끝까지 완성합니다."], ["데스크톱 네이티브", "실제 데스크톱 작업 흐름을 기준으로 만듭니다."], ["절제", "시각 요소는 이해를 돕기 위해 사용합니다."], ["개인정보 우선", "로컬에 남길 수 있는 데이터는 가볍게 밖으로 보내지 않습니다."]], techTitle: "기술 방향", tech: ["Windows 데스크톱 앱", "로컬 우선 저장소", "통계와 시각화", "개인정보를 고려한 제품 설계"], ctaTitle: "제품, 협업, 피드백에 대해 이야기할까요?", ctaDescription: "실제 메시지는 모두 신중하게 읽습니다.", ctaButton: "연락하기" },
    footer: { subtitle: "Chicken Fillet의 독립 데스크톱 소프트웨어 스튜디오.", studio: "스튜디오", products: "제품", legal: "법무", about: "소개", contact: "연락", privacy: "개인정보 처리방침", copyright: "조용하고 절제된 개인정보 우선 데스크톱 도구." },
  },

  fr: {
    home: {
      primary: "Explorer l'approche", secondary: "Voir les produits", currentProduct: "À l'écran",
      notes: [["Local d'abord", "Les données qui peuvent rester sur l'appareil ne doivent pas le quitter sans raison."], ["Faible friction", "Les actions clés restent courtes pour ne pas transformer le suivi, le rangement ou le focus en corvée."], ["Pensé pour le bureau", "Conçu autour de vrais flux Windows, pas d'un tableau web déguisé."], ["Interface retenue", "L'interface aide à comprendre et agir sans bruit ni fausse urgence."]],
      chapters: [{ id: "energyflow", num: "01 / EnergyFlow", title: "Voir ce que le travail fait à votre énergie.", body: "Notez votre énergie en quelques secondes, puis observez comment réunions, tâches et pauses influencent votre état.", bullets: ["5 niveaux", "Contexte de travail", "Corrélation + khi carré", "Vie privée locale"] }, { id: "deskhaven", num: "02 / DeskHaven", title: "Transformer le bureau en espace fiable.", body: "DeskHaven donne aux fichiers locaux un espace calme, consultable, archivable et maîtrisé.", bullets: ["Espace local", "Carte de relations", "Coffre", "AES-256"] }, { id: "adhd", num: "03 / ADHD Focus Timer", title: "Se concentrer sans se juger.", body: "Préparation, respiration, chronométrage progressif et Idea Fridge aident à commencer avec moins de pression.", bullets: ["Chronomètre progressif", "Respiration", "Idea Fridge", "Vie privée locale"] }],
      principlesTitle: "Moins d'interruption, plus de contrôle.", principlesBody: "SoloCraft ne cherche pas l'accumulation de fonctions, mais un flux clair rendu complet.", productTitle: "Choisissez l'outil adapté au travail du moment.", studioTitle: "De petits outils faits pour durer.", studioBody: "Je privilégie l'intégration calme au quotidien plutôt que l'effet spectaculaire au premier lancement.", studioNote: "Chaque page produit montre les fonctions, captures, notes de confidentialité et options de téléchargement.",
    },
    about: { story: ["J'aime les outils qui ne prennent pas toute la scène : ils apparaissent au bon moment puis retournent en arrière-plan.", "EnergyFlow, DeskHaven et ADHD Focus Timer répondent à la même question : rendre le travail desktop plus récupérable, lisible et moins stressant.", "Ce site montre les produits tels qu'ils sont : écrans réels, cas d'usage, confidentialité et téléchargement, sans emballage excessif."], philosophyTitle: "Principes de design", philosophy: [["Petit et complet", "Chaque outil se concentre sur un scénario clair et complète le flux essentiel."], ["Desktop natif", "Construit autour des usages réels du bureau."], ["Retenu", "Le visuel sert la compréhension, pas l'excitation bon marché."], ["Vie privée d'abord", "Les données pouvant rester locales ne quittent pas l'appareil à la légère."]], techTitle: "Direction technique", tech: ["Applications Windows desktop", "Stockage local-first", "Statistiques et visualisation", "Design attentif à la vie privée"], ctaTitle: "Parler produit, collaboration ou feedback ?", ctaDescription: "Je lis attentivement chaque vrai message.", ctaButton: "Me contacter" },
    footer: { subtitle: "Studio indépendant de logiciels desktop par Chicken Fillet.", studio: "Studio", products: "Produits", legal: "Mentions", about: "À propos", contact: "Contact", privacy: "Confidentialité", copyright: "Outils desktop calmes, sobres et respectueux de la vie privée." },
  },

  de: {
    home: {
      primary: "Ansatz ansehen", secondary: "Produkte ansehen", currentProduct: "Aktuell gezeigt",
      notes: [["Lokal zuerst", "Daten, die auf dem Gerät bleiben können, verlassen es nicht leichtfertig."], ["Wenig Reibung", "Wichtige Aktionen bleiben kurz, damit Erfassen, Ordnen und Fokus keine neue Aufgabe werden."], ["Desktop-nativ", "Entworfen für echte Windows-Abläufe, nicht als getarnte Web-Konsole."], ["Zurückhaltend", "Die Oberfläche unterstützt Verständnis und Handlung ohne Lärm oder falsche Dringlichkeit."]],
      chapters: [{ id: "energyflow", num: "01 / EnergyFlow", title: "Sieh, was der Arbeitstag mit deiner Energie macht.", body: "Erfasse Energie in Sekunden und erkenne, wie Meetings, Aufgaben und Pausen deinen Zustand beeinflussen.", bullets: ["5 Stufen", "Arbeitskontext", "Korrelation + Chi-Quadrat", "Lokale Privatsphäre"] }, { id: "deskhaven", num: "02 / DeskHaven", title: "Aus Desktop-Chaos wird ein Arbeitsraum.", body: "DeskHaven macht lokale Dateien suchbar, archivierbar und kontrollierbar.", bullets: ["Lokaler Raum", "Beziehungskarte", "Tresor", "AES-256"] }, { id: "adhd", num: "03 / ADHD Focus Timer", title: "Fokus ohne Druck.", body: "Vorbereitung, Atmung, Vorwärtszählung und Idea Fridge helfen beim sanften Start.", bullets: ["Vorwärts-Timer", "Atemführung", "Idea Fridge", "Lokale Privatsphäre"] }],
      principlesTitle: "Weniger Unterbrechung, mehr Kontrolle.", principlesBody: "SoloCraft stapelt keine Funktionen, sondern macht klare Szenarien vollständig nutzbar.", productTitle: "Wähle das Werkzeug für deinen aktuellen Arbeitsfluss.", studioTitle: "Kleine Werkzeuge für wiederholte Nutzung.", studioBody: "Wichtiger als der erste laute Eindruck ist, ob ein Produkt ruhig in den Alltag passt.", studioNote: "Jede Produktseite zeigt Funktionen, Screenshots, Datenschutz und Downloadwege.",
    },
    about: { story: ["Ich mag Werkzeuge, die nicht die Bühne stehlen: Sie erscheinen bei Bedarf und treten danach zurück.", "EnergyFlow, DeskHaven und ADHD Focus Timer drehen sich um dieselbe Frage: Wie wird Desktop-Arbeit erholbarer, verständlicher und weniger stressig?", "Diese Website zeigt echte Oberflächen, Nutzungsszenarien, Datenschutz und Downloadwege ohne laute Verpackung."], philosophyTitle: "Designprinzipien", philosophy: [["Klein und vollständig", "Jedes Werkzeug fokussiert ein klares Szenario und vervollständigt den wichtigen Ablauf."], ["Desktop-nativ", "Gebaut um echte Desktop-Arbeit herum."], ["Zurückhaltend", "Visuelles Design dient dem Verständnis."], ["Datenschutz zuerst", "Daten, die lokal bleiben können, verlassen das Gerät nicht leichtfertig."]], techTitle: "Technische Richtung", tech: ["Windows-Desktop-Apps", "Local-first-Speicher", "Statistik und Visualisierung", "Datenschutzbewusstes Produktdesign"], ctaTitle: "Über Produkt, Zusammenarbeit oder Feedback sprechen?", ctaDescription: "Ich lese jede echte Nachricht aufmerksam.", ctaButton: "Kontakt aufnehmen" },
    footer: { subtitle: "Unabhängiges Desktop-Softwarestudio von Chicken Fillet.", studio: "Studio", products: "Produkte", legal: "Rechtliches", about: "Über uns", contact: "Kontakt", privacy: "Datenschutz", copyright: "Ruhige, zurückhaltende, datenschutzfreundliche Desktop-Tools." },
  },

  es: {
    home: {
      primary: "Explorar el enfoque", secondary: "Ver productos", currentProduct: "Mostrando",
      notes: [["Local primero", "Los datos que pueden quedarse en el dispositivo no deberían salir sin motivo."], ["Baja fricción", "Las acciones clave se mantienen cortas para que registrar, ordenar y concentrarse no sean otra tarea."], ["Nativo de escritorio", "Diseñado para flujos reales de Windows, no como un panel web disfrazado."], ["Expresión sobria", "La interfaz ayuda a entender y actuar sin ruido ni urgencia falsa."]],
      chapters: [{ id: "energyflow", num: "01 / EnergyFlow", title: "Ve qué le hace el trabajo a tu energía.", body: "Registra energía en segundos y observa cómo reuniones, tareas y descansos afectan tu estado.", bullets: ["5 niveles", "Contexto laboral", "Correlación + chi cuadrado", "Privacidad local"] }, { id: "deskhaven", num: "02 / DeskHaven", title: "Convierte el escritorio en un espacio confiable.", body: "DeskHaven da a los archivos locales un espacio privado, buscable, archivado y controlable.", bullets: ["Espacio local", "Mapa de relaciones", "Bóveda", "AES-256"] }, { id: "adhd", num: "03 / ADHD Focus Timer", title: "Foco sin castigarte.", body: "Preparación, respiración, conteo progresivo e Idea Fridge ayudan a empezar con menos presión.", bullets: ["Timer progresivo", "Respiración", "Idea Fridge", "Privacidad local"] }],
      principlesTitle: "Menos interrupción, más control.", principlesBody: "SoloCraft no acumula funciones; completa un escenario claro de principio a fin.", productTitle: "Elige una herramienta para el flujo de trabajo actual.", studioTitle: "Herramientas pequeñas para uso repetido.", studioBody: "Me importa más que un producto encaje en el día a día que su impacto inicial.", studioNote: "Cada página muestra funciones, capturas, privacidad y opciones de descarga.",
    },
    about: { story: ["Me gustan las herramientas que no roban el protagonismo: aparecen cuando hacen falta y vuelven al fondo al terminar.", "EnergyFlow, DeskHaven y ADHD Focus Timer giran alrededor de la misma pregunta: cómo hacer que el trabajo de escritorio sea más recuperable, comprensible y menos estresante.", "Este sitio muestra pantallas reales, casos de uso, privacidad y descarga sin envoltorios exagerados."], philosophyTitle: "Principios de diseño", philosophy: [["Pequeño y completo", "Cada herramienta se centra en un escenario claro y completa el flujo importante."], ["Nativo de escritorio", "Construido alrededor de flujos reales de escritorio."], ["Sobrio", "Lo visual sirve a la comprensión."], ["Privacidad primero", "Los datos que pueden quedar locales no salen a la ligera."]], techTitle: "Dirección técnica", tech: ["Apps de escritorio para Windows", "Almacenamiento local-first", "Estadística y visualización", "Diseño consciente de la privacidad"], ctaTitle: "¿Hablamos de producto, colaboración o feedback?", ctaDescription: "Leo con atención cada mensaje real.", ctaButton: "Contactar" },
    footer: { subtitle: "Software de escritorio independiente por Chicken Fillet.", studio: "Estudio", products: "Productos", legal: "Legal", about: "Acerca de", contact: "Contacto", privacy: "Privacidad", copyright: "Herramientas de escritorio tranquilas, sobrias y centradas en la privacidad." },
  },

  ru: {
    home: {
      primary: "Посмотреть подход", secondary: "Смотреть продукты", currentProduct: "Сейчас показано",
      notes: [["Локально сначала", "Данные, которые могут остаться на устройстве, не должны уходить без причины."], ["Меньше трения", "Ключевые действия остаются короткими, чтобы учёт, порядок и фокус не стали новой работой."], ["Для desktop", "Дизайн опирается на реальные рабочие процессы Windows."], ["Сдержанность", "Интерфейс помогает понимать и действовать без шума и ложной срочности."]],
      chapters: [{ id: "energyflow", num: "01 / EnergyFlow", title: "Поймите, как работа влияет на энергию.", body: "Записывайте состояние за секунды и смотрите, как встречи, задачи и отдых меняют ваш день.", bullets: ["5 уровней", "Контекст работы", "Корреляция + χ²", "Локальная приватность"] }, { id: "deskhaven", num: "02 / DeskHaven", title: "Превратите хаос на рабочем столе в систему.", body: "DeskHaven даёт локальным файлам тихое, управляемое и восстанавливаемое рабочее пространство.", bullets: ["Локальное пространство", "Карта связей", "Хранилище", "AES-256"] }, { id: "adhd", num: "03 / ADHD Focus Timer", title: "Фокус без наказания внимания.", body: "Подготовка, дыхание, прямой таймер и Idea Fridge помогают начать мягче.", bullets: ["Прямой таймер", "Дыхание", "Idea Fridge", "Локальная приватность"] }],
      principlesTitle: "Меньше отвлечений, больше контроля.", principlesBody: "SoloCraft не гонится за количеством функций, а доводит конкретный сценарий до целостного состояния.", productTitle: "Выберите инструмент для текущего рабочего процесса.", studioTitle: "Небольшие инструменты для ежедневного использования.", studioBody: "Важнее не громкий первый запуск, а спокойная интеграция в ежедневную работу.", studioNote: "На страницах продуктов есть функции, скриншоты, приватность и пути загрузки.",
    },
    about: { story: ["Мне нравятся инструменты, которые не забирают сцену: они появляются, когда нужны, и уходят в фон после работы.", "EnergyFlow, DeskHaven и ADHD Focus Timer отвечают на общий вопрос: как сделать desktop-работу более восстановимой, понятной и менее стрессовой.", "Сайт показывает реальные экраны, сценарии, приватность и загрузку без громкой упаковки."], philosophyTitle: "Принципы дизайна", philosophy: [["Малое и цельное", "Каждый инструмент фокусируется на ясном сценарии и завершает важный поток."], ["Desktop-native", "Создано вокруг реальной работы на desktop."], ["Сдержанность", "Визуальный дизайн служит пониманию."], ["Приватность сначала", "Данные, которые могут остаться локально, не уходят легко."]], techTitle: "Техническое направление", tech: ["Windows desktop apps", "Локальное хранение", "Статистика и визуализация", "Дизайн с учётом приватности"], ctaTitle: "Обсудим продукт, сотрудничество или обратную связь?", ctaDescription: "Я внимательно читаю каждое настоящее сообщение.", ctaButton: "Связаться" },
    footer: { subtitle: "Независимая студия desktop-софта Chicken Fillet.", studio: "Студия", products: "Продукты", legal: "Правовое", about: "О нас", contact: "Контакты", privacy: "Конфиденциальность", copyright: "Спокойные, сдержанные и privacy-first desktop-инструменты." },
  },

  pt: {
    home: {
      primary: "Ver a abordagem", secondary: "Ver produtos", currentProduct: "Em destaque",
      notes: [["Local primeiro", "Dados que podem ficar no dispositivo não devem sair sem motivo."], ["Baixa fricção", "Ações importantes ficam curtas para que registrar, organizar e focar não virem outra tarefa."], ["Nativo do desktop", "Desenhado para fluxos reais do Windows, não como painel web disfarçado."], ["Expressão contida", "A interface ajuda a entender e agir sem ruído ou falsa urgência."]],
      chapters: [{ id: "energyflow", num: "01 / EnergyFlow", title: "Veja o que o trabalho faz com sua energia.", body: "Registre energia em segundos e observe como reuniões, tarefas e pausas afetam seu estado.", bullets: ["5 níveis", "Contexto de trabalho", "Correlação + qui-quadrado", "Privacidade local"] }, { id: "deskhaven", num: "02 / DeskHaven", title: "Transforme o desktop em uma mesa confiável.", body: "DeskHaven dá aos arquivos locais um espaço privado, pesquisável, arquivável e controlável.", bullets: ["Espaço local", "Mapa de relações", "Arquivo", "AES-256"] }, { id: "adhd", num: "03 / ADHD Focus Timer", title: "Foco sem punir a atenção.", body: "Preparação, respiração, contagem progressiva e Idea Fridge ajudam a começar com menos pressão.", bullets: ["Timer progressivo", "Respiração", "Idea Fridge", "Privacidade local"] }],
      principlesTitle: "Menos interrupção, mais controle.", principlesBody: "SoloCraft não empilha funções; completa um fluxo claro de trabalho.", productTitle: "Escolha uma ferramenta para o fluxo de agora.", studioTitle: "Ferramentas pequenas para uso diário.", studioBody: "Importa mais encaixar-se calmamente no dia a dia do que impressionar no primeiro lançamento.", studioNote: "Cada página mostra recursos, capturas, privacidade e caminhos de download.",
    },
    about: { story: ["Gosto de ferramentas que não roubam a cena: aparecem quando necessárias e voltam ao fundo depois.", "EnergyFlow, DeskHaven e ADHD Focus Timer respondem à mesma pergunta: como tornar o trabalho no desktop mais recuperável, compreensível e menos estressante.", "Este site mostra telas reais, casos de uso, privacidade e download sem embalagem exagerada."], philosophyTitle: "Princípios de design", philosophy: [["Pequeno e completo", "Cada ferramenta foca um cenário claro e conclui o fluxo essencial."], ["Nativo do desktop", "Construído para fluxos reais de desktop."], ["Contido", "O visual serve à compreensão."], ["Privacidade primeiro", "Dados que podem ficar locais não saem levianamente."]], techTitle: "Direção técnica", tech: ["Apps desktop para Windows", "Armazenamento local-first", "Estatística e visualização", "Design consciente de privacidade"], ctaTitle: "Vamos falar de produto, colaboração ou feedback?", ctaDescription: "Leio com atenção cada mensagem real.", ctaButton: "Entrar em contato" },
    footer: { subtitle: "Software desktop independente por Chicken Fillet.", studio: "Estúdio", products: "Produtos", legal: "Legal", about: "Sobre", contact: "Contato", privacy: "Privacidade", copyright: "Ferramentas desktop calmas, discretas e privacy-first." },
  },
};
