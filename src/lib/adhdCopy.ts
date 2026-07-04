import type { Locale } from "@/lib/i18n/context";

type Pair = readonly [string, string];

export type AdhdCopy = {
  card: {
    title: string;
    category: string;
    description: string;
    status: string;
  };
  page: {
    eyebrow: string;
    title: string;
    intro: string;
    status: string;
    promiseTitle: string;
    promise: string;
    features: readonly Pair[];
    galleryEyebrow: string;
    galleryTitle: string;
    galleryIntro: string;
    galleryItems: readonly Pair[];
  };
};

export const adhdCopy: Record<Locale, AdhdCopy> = {
  zh: {
    card: {
      title: "ADHD Focus Timer",
      category: "沉浸式专注计时器",
      description: "用环境声、呼吸过渡、正向计时、想法冰箱和累计统计，把开始专注这件事变得更轻。",
      status: "已推出",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "把专注入口做得更安静、更可持续。",
      intro: "新版 ADHD Focus Timer 面向容易被环境、念头和倒计时压力打断的用户。它用实时合成的专注声景、呼吸过渡、正向计时、想法冰箱和累计统计，帮助你更温和地进入并维持一段专注。",
      status: "已推出",
      promiseTitle: "不是催促你快点完成，而是帮你少一点阻力地开始。",
      promise: "1.5.0 重新整理了界面、声音和多语言体验。雨声、风声、海浪、虫鸣等声音由 Web Audio 实时生成，应用不再携带庞大的音频文件；混音、8D 空间感和完成提示音也可以按自己的状态调整。",
      features: [
        ["进入前先定好环境", "开始前选择语言、时长、声音与引导方式，先把会打断专注的决定处理掉。"],
        ["实时生成的专注声景", "雨、风、海浪、虫鸣等声音在本地实时合成，体积更小，也更适合长时间循环。"],
        ["声音混音和 8D 空间感", "用混音面板调节不同声层，按需要开启空间移动感，让背景声成为稳定陪伴。"],
        ["呼吸过渡", "正式计时前用简短呼吸节奏切换状态，不把开始任务变成突然的压力。"],
        ["正向计时与沉浸粒子", "时间向前累积，避免倒计时带来的失败感；粒子动画给出轻微反馈但不抢注意力。"],
        ["想法冰箱", "突然冒出的想法可以先存放起来，专注结束后再处理，不必立刻切出当前任务。"],
        ["累计统计与温和完成", "完成页记录真实投入，累计专注数据帮助你看见长期进展，而不是只盯着单次表现。"],
      ],
      galleryEyebrow: "界面截图",
      galleryTitle: "当前语言的完整界面截图。",
      galleryIntro: "截图会跟随网站语言切换。没有对应截图的语言会使用最接近的可用版本，不影响页面文案本地化。",
      galleryItems: [
        ["专注准备", "先选择时长、语言和环境声，让开始变得明确。"],
        ["声音面板", "多层声景可以自由混合，适合不同的专注状态。"],
        ["呼吸引导", "用短暂过渡把注意力从混乱带回当前任务。"],
        ["专注进行中", "正向计时、粒子反馈和全屏环境一起保持低压力节奏。"],
        ["想法冰箱", "临时想法先保存，之后再回来处理。"],
        ["累计统计", "用长期记录看见真实投入，而不是只评价单次结果。"],
        ["支持与设置", "语言、声音、隐私与支持入口集中在清晰位置。"],
      ],
    },
  },
  "zh-tw": {
    card: {
      title: "ADHD Focus Timer",
      category: "沉浸式專注計時器",
      description: "用環境聲、呼吸過渡、正向計時、想法冰箱和累計統計，讓開始專注變得更輕。",
      status: "已推出",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "把專注入口做得更安靜、更可持續。",
      intro: "新版 ADHD Focus Timer 面向容易被環境、念頭和倒數壓力打斷的使用者。它用即時合成的專注聲景、呼吸過渡、正向計時、想法冰箱和累計統計，幫助你更溫和地進入並維持一段專注。",
      status: "已推出",
      promiseTitle: "不是催促你快點完成，而是幫你少一點阻力地開始。",
      promise: "1.5.0 重新整理了介面、聲音和多語言體驗。雨聲、風聲、海浪、蟲鳴等聲音由 Web Audio 即時生成，應用不再攜帶龐大的音訊文件；混音、8D 空間感和完成提示音也可以依自己的狀態調整。",
      features: [
        ["進入前先定好環境", "開始前選擇語言、時長、聲音與引導方式，先把會打斷專注的決定處理掉。"],
        ["即時生成的專注聲景", "雨、風、海浪、蟲鳴等聲音在本地即時合成，體積更小，也更適合長時間循環。"],
        ["聲音混音和 8D 空間感", "用混音面板調節不同聲層，按需要開啟空間移動感，讓背景聲成為穩定陪伴。"],
        ["呼吸過渡", "正式計時前用簡短呼吸節奏切換狀態，不把開始任務變成突然的壓力。"],
        ["正向計時與沉浸粒子", "時間向前累積，避免倒數帶來的失敗感；粒子動畫給出輕微回饋但不搶注意力。"],
        ["想法冰箱", "突然冒出的想法可以先存放起來，專注結束後再處理，不必立刻切出目前任務。"],
        ["累計統計與溫和完成", "完成頁記錄真實投入，累計專注資料幫助你看見長期進展，而不是只盯著單次表現。"],
      ],
      galleryEyebrow: "介面截圖",
      galleryTitle: "目前語言的完整介面截圖。",
      galleryIntro: "截圖會跟隨網站語言切換。沒有對應截圖的語言會使用最接近的可用版本，不影響頁面文案本地化。",
      galleryItems: [
        ["專注準備", "先選擇時長、語言和環境聲，讓開始變得明確。"],
        ["聲音面板", "多層聲景可以自由混合，適合不同的專注狀態。"],
        ["呼吸引導", "用短暫過渡把注意力從混亂帶回目前任務。"],
        ["專注進行中", "正向計時、粒子回饋和全螢幕環境一起保持低壓力節奏。"],
        ["想法冰箱", "臨時想法先保存，之後再回來處理。"],
        ["累計統計", "用長期記錄看見真實投入，而不是只評價單次結果。"],
        ["支援與設定", "語言、聲音、隱私與支援入口集中在清晰位置。"],
      ],
    },
  },
  en: {
    card: {
      title: "ADHD Focus Timer",
      category: "Immersive focus timer",
      description: "Soundscapes, breathing, forward timing, Idea Fridge, and focus stats make starting easier.",
      status: "Available",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "A calmer doorway into sustained focus.",
      intro: "The new ADHD Focus Timer is built for people who are easily interrupted by noise, stray thoughts, and countdown pressure. Real-time soundscapes, breathing transitions, forward timing, Idea Fridge, and cumulative stats help you enter and hold focus more gently.",
      status: "Available",
      promiseTitle: "It does not push you to rush. It lowers the cost of starting.",
      promise: "Version 1.5.0 rebuilds the interface, audio, and multilingual experience. Rain, wind, ocean, and night sounds are generated locally with Web Audio, so the app no longer carries huge audio files. The mixer, 8D spatial motion, and completion chime can all be tuned to your current state.",
      features: [
        ["Set the environment first", "Choose language, duration, sound, and guidance before the session so fewer decisions interrupt focus later."],
        ["Real-time focus soundscapes", "Rain, wind, ocean, and night layers are synthesized locally, keeping the app small and comfortable for long loops."],
        ["Mixer and 8D space", "Balance sound layers and enable spatial movement when you want background sound to feel present without becoming loud."],
        ["Breathing transition", "A short breathing rhythm helps shift into the session without turning the start into a jolt."],
        ["Forward timer with particles", "Time accumulates instead of counting down toward failure. Subtle particles provide feedback without demanding attention."],
        ["Idea Fridge", "Store sudden thoughts for later so you do not have to leave the current task immediately."],
        ["Stats and gentle completion", "The completion screen records real effort, while cumulative stats help you see progress over time."],
      ],
      galleryEyebrow: "Interface screenshots",
      galleryTitle: "Screenshots for the current language.",
      galleryIntro: "Screenshots switch with the website language. Locales without matching ADHD screenshots use the closest available version while keeping copy fully localized.",
      galleryItems: [
        ["Focus setup", "Choose duration, language, and sound before the session begins."],
        ["Sound mixer", "Blend multiple ambience layers for different focus states."],
        ["Breathing guide", "Use a short transition to bring attention back to the task."],
        ["Focus session", "Forward timing, particles, and full-screen calm keep the rhythm low-pressure."],
        ["Idea Fridge", "Capture temporary thoughts without leaving the session."],
        ["Cumulative stats", "See real effort over time instead of judging one session."],
        ["Support and settings", "Language, sound, privacy, and support stay easy to find."],
      ],
    },
  },
  ja: {
    card: {
      title: "ADHD Focus Timer",
      category: "没入型フォーカスタイマー",
      description: "環境音、呼吸、前向きな計時、Idea Fridge、集中統計で開始の負担を軽くします。",
      status: "公開中",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "集中へ入る入口を、もっと静かで続けやすく。",
      intro: "新しい ADHD Focus Timer は、音、浮かぶ考え、カウントダウンの圧力で中断されやすい人のためのツールです。リアルタイム生成のサウンドスケープ、呼吸の移行、前向きな計時、Idea Fridge、累積統計で、より穏やかに集中へ入れます。",
      status: "公開中",
      promiseTitle: "急がせるのではなく、始める負担を下げます。",
      promise: "1.5.0 では、インターフェイス、音、多言語体験を作り直しました。雨、風、海、夜の音は Web Audio でローカル生成され、大きな音声ファイルを持ちません。ミキサー、8D 空間感、完了チャイムも状態に合わせて調整できます。",
      features: [
        ["先に環境を整える", "言語、時間、音、ガイドを開始前に決め、集中中の余分な選択を減らします。"],
        ["リアルタイムの集中音", "雨、風、海、夜の音をローカルで生成し、軽く長時間ループしやすくします。"],
        ["ミキサーと 8D 空間", "複数の音層を調整し、必要な時だけ空間的な動きを加えられます。"],
        ["呼吸の移行", "短い呼吸リズムで、急な開始ではなく自然に状態を切り替えます。"],
        ["前向きな計時と粒子", "時間を積み上げ、失敗へ向かう倒数感を避けます。粒子は控えめなフィードバックです。"],
        ["Idea Fridge", "浮かんだ考えを一時保存し、今の作業からすぐ離れずに済みます。"],
        ["統計とやさしい完了", "完了画面は実際の投入を記録し、累積統計で長期の進歩を見せます。"],
      ],
      galleryEyebrow: "画面スクリーンショット",
      galleryTitle: "現在の言語に合わせた画面。",
      galleryIntro: "スクリーンショットはサイト言語に合わせて切り替わります。対応画像がない言語では最も近い画像を使い、文案はその言語のまま表示します。",
      galleryItems: [
        ["集中準備", "時間、言語、環境音を先に選びます。"],
        ["サウンドミキサー", "複数の音を混ぜて、集中状態に合わせます。"],
        ["呼吸ガイド", "短い移行で注意を作業へ戻します。"],
        ["集中セッション", "前向きな計時、粒子、全画面の落ち着きで低圧のリズムを保ちます。"],
        ["Idea Fridge", "一時的な考えを保存し、あとで戻れます。"],
        ["累積統計", "単発の結果ではなく、長期の投入を見ます。"],
        ["サポートと設定", "言語、音、プライバシー、サポートを見つけやすく配置します。"],
      ],
    },
  },
  ko: {
    card: {
      title: "ADHD Focus Timer",
      category: "몰입형 집중 타이머",
      description: "환경음, 호흡 전환, 정방향 타이머, Idea Fridge, 집중 통계로 시작 부담을 줄입니다.",
      status: "출시됨",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "집중으로 들어가는 입구를 더 조용하고 지속 가능하게.",
      intro: "새 ADHD Focus Timer는 소음, 떠오르는 생각, 카운트다운 압박에 쉽게 끊기는 사용자를 위해 설계되었습니다. 실시간 사운드스케이프, 호흡 전환, 정방향 타이머, Idea Fridge, 누적 통계가 더 부드러운 집중 시작을 돕습니다.",
      status: "출시됨",
      promiseTitle: "빨리 끝내라고 밀어붙이지 않고, 시작 비용을 낮춥니다.",
      promise: "1.5.0은 인터페이스, 오디오, 다국어 경험을 다시 정리했습니다. 비, 바람, 바다, 밤소리는 Web Audio로 로컬에서 생성되어 큰 오디오 파일을 포함하지 않습니다. 믹서, 8D 공간감, 완료 알림음도 현재 상태에 맞게 조절할 수 있습니다.",
      features: [
        ["환경을 먼저 정하기", "언어, 시간, 소리, 가이드를 시작 전에 정해 집중 중 결정을 줄입니다."],
        ["실시간 집중 사운드", "비, 바람, 바다, 밤소리를 로컬에서 합성해 앱을 가볍고 긴 루프에 적합하게 유지합니다."],
        ["믹서와 8D 공간감", "여러 소리 레이어를 조절하고 필요할 때 공간 이동감을 켤 수 있습니다."],
        ["호흡 전환", "짧은 호흡 리듬으로 갑작스러운 시작 대신 상태를 부드럽게 바꿉니다."],
        ["정방향 타이머와 입자", "시간을 쌓아 실패감을 줄이고, 입자는 주의를 빼앗지 않는 피드백을 줍니다."],
        ["Idea Fridge", "갑자기 떠오른 생각을 잠시 저장하고 현재 작업을 바로 벗어나지 않게 합니다."],
        ["통계와 부드러운 완료", "완료 화면은 실제 노력을 기록하고 누적 통계는 장기 진행을 보여 줍니다."],
      ],
      galleryEyebrow: "인터페이스 스크린샷",
      galleryTitle: "현재 언어에 맞춘 화면.",
      galleryIntro: "스크린샷은 웹사이트 언어에 따라 바뀝니다. 대응 이미지가 없는 언어는 가장 가까운 이미지를 사용하며, 문구는 계속 현지화됩니다.",
      galleryItems: [
        ["집중 준비", "시간, 언어, 환경음을 먼저 선택합니다."],
        ["사운드 믹서", "여러 분위기 소리를 섞어 집중 상태에 맞춥니다."],
        ["호흡 가이드", "짧은 전환으로 주의를 작업으로 돌립니다."],
        ["집중 세션", "정방향 타이머, 입자, 전체 화면 환경으로 낮은 압박의 리듬을 유지합니다."],
        ["Idea Fridge", "임시 생각을 저장하고 나중에 돌아옵니다."],
        ["누적 통계", "한 번의 결과가 아니라 장기적인 실제 투입을 봅니다."],
        ["지원과 설정", "언어, 소리, 개인정보, 지원을 쉽게 찾을 수 있습니다."],
      ],
    },
  },
  fr: {
    card: {
      title: "ADHD Focus Timer",
      category: "Minuteur de concentration immersif",
      description: "Ambiances sonores, respiration, chronométrage progressif, Idea Fridge et statistiques rendent le démarrage plus léger.",
      status: "Disponible",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Une entrée plus calme vers une concentration durable.",
      intro: "Le nouveau ADHD Focus Timer s'adresse aux personnes facilement interrompues par le bruit, les pensées soudaines et la pression du compte à rebours. Ambiances sonores en temps réel, respiration, chronométrage progressif, Idea Fridge et statistiques cumulées aident à entrer dans le focus plus doucement.",
      status: "Disponible",
      promiseTitle: "Il ne vous pousse pas à vous dépêcher. Il réduit le coût du départ.",
      promise: "La version 1.5.0 reconstruit l'interface, l'audio et l'expérience multilingue. Pluie, vent, océan et sons nocturnes sont générés localement avec Web Audio, sans gros fichiers audio intégrés. Le mixeur, l'effet spatial 8D et le carillon de fin restent réglables.",
      features: [
        ["Préparer l'environnement", "Choisir langue, durée, son et guidage avant la session réduit les décisions pendant le focus."],
        ["Ambiances générées en temps réel", "Pluie, vent, océan et nuit sont synthétisés localement, pour une app légère et agréable en boucle longue."],
        ["Mixeur et espace 8D", "Équilibrez les couches sonores et activez le mouvement spatial quand le fond sonore doit être plus présent."],
        ["Transition respiratoire", "Un rythme court aide à entrer dans la session sans choc de départ."],
        ["Chronomètre progressif et particules", "Le temps s'accumule au lieu de compter vers l'échec ; les particules restent discrètes."],
        ["Idea Fridge", "Les pensées soudaines peuvent être gardées pour plus tard sans quitter la tâche."],
        ["Statistiques et fin douce", "L'écran de fin note l'effort réel, tandis que les statistiques montrent les progrès dans le temps."],
      ],
      galleryEyebrow: "Captures d'écran",
      galleryTitle: "Captures adaptées à la langue actuelle.",
      galleryIntro: "Les captures changent avec la langue du site. Les langues sans capture dédiée utilisent la version disponible la plus proche, tout en gardant les textes localisés.",
      galleryItems: [
        ["Préparation", "Choisissez durée, langue et ambiance avant de commencer."],
        ["Mixeur sonore", "Mélangez plusieurs couches selon l'état de concentration."],
        ["Guide respiratoire", "Une courte transition ramène l'attention vers la tâche."],
        ["Session de focus", "Chronomètre progressif, particules et plein écran maintiennent un rythme doux."],
        ["Idea Fridge", "Capturez les pensées temporaires sans quitter la session."],
        ["Statistiques cumulées", "Regardez l'effort réel dans le temps, pas une seule session."],
        ["Support et réglages", "Langue, son, confidentialité et support restent faciles à trouver."],
      ],
    },
  },
  de: {
    card: {
      title: "ADHD Focus Timer",
      category: "Immersiver Fokus-Timer",
      description: "Klangwelten, Atmung, Vorwärtszählung, Idea Fridge und Fokusstatistiken senken die Startschwelle.",
      status: "Verfügbar",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Ein ruhigerer Einstieg in nachhaltigen Fokus.",
      intro: "Der neue ADHD Focus Timer ist für Menschen gedacht, die leicht durch Geräusche, Gedanken und Countdown-Druck unterbrochen werden. Echtzeit-Klangwelten, Atemübergang, Vorwärtszählung, Idea Fridge und kumulative Statistiken helfen, sanfter in den Fokus zu kommen.",
      status: "Verfügbar",
      promiseTitle: "Er treibt dich nicht zur Eile. Er senkt die Kosten des Anfangs.",
      promise: "Version 1.5.0 erneuert Oberfläche, Audio und Mehrsprachigkeit. Regen, Wind, Meer und Nachtklänge werden lokal mit Web Audio erzeugt, ohne große Audiodateien. Mixer, 8D-Raumgefühl und Abschlussklang lassen sich anpassen.",
      features: [
        ["Umgebung zuerst festlegen", "Sprache, Dauer, Klang und Führung werden vor der Sitzung gewählt, damit später weniger Entscheidungen stören."],
        ["Echtzeit-Klangwelten", "Regen, Wind, Meer und Nacht werden lokal synthetisiert, wodurch die App klein und loop-freundlich bleibt."],
        ["Mixer und 8D-Raum", "Klangschichten balancieren und räumliche Bewegung einschalten, wenn der Hintergrund präsenter sein soll."],
        ["Atemübergang", "Ein kurzer Atemrhythmus hilft beim Wechsel in die Sitzung, ohne den Start hart wirken zu lassen."],
        ["Vorwärtszähler und Partikel", "Zeit sammelt sich, statt zum Scheitern herunterzuzählen. Partikel geben dezentes Feedback."],
        ["Idea Fridge", "Plötzliche Gedanken können für später geparkt werden, ohne die Aufgabe sofort zu verlassen."],
        ["Statistiken und sanfter Abschluss", "Der Abschluss erfasst echte Anstrengung; kumulative Statistiken zeigen Fortschritt über Zeit."],
      ],
      galleryEyebrow: "Oberflächen-Screenshots",
      galleryTitle: "Screenshots in der aktuellen Sprache.",
      galleryIntro: "Screenshots wechseln mit der Website-Sprache. Sprachen ohne passende Bilder nutzen die nächstgelegene verfügbare Version, während der Text lokalisiert bleibt.",
      galleryItems: [
        ["Fokus vorbereiten", "Dauer, Sprache und Klang vor Beginn wählen."],
        ["Sound-Mixer", "Mehrere Klangschichten für unterschiedliche Fokuszustände mischen."],
        ["Atemführung", "Ein kurzer Übergang bringt Aufmerksamkeit zurück zur Aufgabe."],
        ["Fokus-Sitzung", "Vorwärtszählung, Partikel und Vollbildruhe halten den Druck niedrig."],
        ["Idea Fridge", "Temporäre Gedanken festhalten, ohne die Sitzung zu verlassen."],
        ["Kumulative Statistik", "Echte Anstrengung über Zeit sehen, statt eine Sitzung zu bewerten."],
        ["Support und Einstellungen", "Sprache, Klang, Datenschutz und Support bleiben leicht auffindbar."],
      ],
    },
  },
  es: {
    card: {
      title: "ADHD Focus Timer",
      category: "Temporizador de foco inmersivo",
      description: "Ambientes sonoros, respiración, conteo hacia adelante, Idea Fridge y estadísticas hacen más fácil empezar.",
      status: "Disponible",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Una entrada más tranquila hacia el foco sostenido.",
      intro: "El nuevo ADHD Focus Timer está pensado para personas que se interrumpen fácilmente por ruido, pensamientos sueltos y presión de cuenta regresiva. Ambientes sonoros en tiempo real, respiración, conteo hacia adelante, Idea Fridge y estadísticas acumuladas ayudan a entrar en foco con más suavidad.",
      status: "Disponible",
      promiseTitle: "No te empuja a correr. Reduce el costo de empezar.",
      promise: "La versión 1.5.0 reconstruye la interfaz, el audio y la experiencia multilingüe. Lluvia, viento, océano y sonidos nocturnos se generan localmente con Web Audio, sin archivos de audio enormes. El mezclador, el espacio 8D y el sonido de finalización se pueden ajustar.",
      features: [
        ["Preparar el entorno", "Elegir idioma, duración, sonido y guía antes de la sesión reduce decisiones durante el foco."],
        ["Ambientes en tiempo real", "Lluvia, viento, océano y noche se sintetizan localmente, manteniendo la app ligera para bucles largos."],
        ["Mezclador y espacio 8D", "Equilibra capas de sonido y activa movimiento espacial cuando quieras un fondo más presente."],
        ["Transición respiratoria", "Un ritmo breve ayuda a entrar en la sesión sin un inicio brusco."],
        ["Conteo progresivo y partículas", "El tiempo se acumula en vez de contar hacia el fracaso. Las partículas dan feedback discreto."],
        ["Idea Fridge", "Guarda pensamientos repentinos para después sin abandonar la tarea actual."],
        ["Estadísticas y cierre suave", "La pantalla final registra esfuerzo real y las estadísticas muestran progreso en el tiempo."],
      ],
      galleryEyebrow: "Capturas de interfaz",
      galleryTitle: "Capturas para el idioma actual.",
      galleryIntro: "Las capturas cambian con el idioma del sitio. Los idiomas sin capturas propias usan la versión disponible más cercana, manteniendo el texto localizado.",
      galleryItems: [
        ["Preparar foco", "Elige duración, idioma y ambiente antes de empezar."],
        ["Mezclador de sonido", "Combina varias capas para distintos estados de foco."],
        ["Guía de respiración", "Una transición breve devuelve la atención a la tarea."],
        ["Sesión de foco", "Conteo progresivo, partículas y pantalla completa sostienen un ritmo de baja presión."],
        ["Idea Fridge", "Captura pensamientos temporales sin salir de la sesión."],
        ["Estadísticas acumuladas", "Observa esfuerzo real en el tiempo, no una sola sesión."],
        ["Soporte y ajustes", "Idioma, sonido, privacidad y soporte quedan fáciles de encontrar."],
      ],
    },
  },
  ru: {
    card: {
      title: "ADHD Focus Timer",
      category: "Иммерсивный таймер фокуса",
      description: "Звуковые сцены, дыхание, прямой таймер, Idea Fridge и статистика помогают начать мягче.",
      status: "Доступно",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Более спокойный вход в устойчивый фокус.",
      intro: "Новый ADHD Focus Timer создан для людей, которых легко сбивают шум, внезапные мысли и давление обратного отсчёта. Звуковые сцены в реальном времени, дыхание, прямой таймер, Idea Fridge и накопительная статистика помогают мягче войти в состояние фокуса.",
      status: "Доступно",
      promiseTitle: "Он не торопит вас. Он снижает сопротивление перед началом.",
      promise: "Версия 1.5.0 обновляет интерфейс, звук и многоязычный опыт. Дождь, ветер, океан и ночные звуки генерируются локально через Web Audio, без больших аудиофайлов. Микшер, 8D-пространство и звук завершения можно настроить под состояние.",
      features: [
        ["Сначала настроить среду", "Выберите язык, длительность, звук и подсказки до начала, чтобы меньше решений мешали во время фокуса."],
        ["Звуковые сцены в реальном времени", "Дождь, ветер, океан и ночь синтезируются локально, поэтому приложение остаётся лёгким."],
        ["Микшер и 8D-пространство", "Балансируйте слои звука и включайте пространственное движение, когда фон должен быть ощутимее."],
        ["Дыхательный переход", "Короткий ритм дыхания помогает перейти к сессии без резкого старта."],
        ["Прямой таймер и частицы", "Время накапливается, а не отсчитывает путь к провалу. Частицы дают тихую обратную связь."],
        ["Idea Fridge", "Внезапные мысли можно сохранить на потом, не выходя из текущей задачи."],
        ["Статистика и мягкое завершение", "Экран завершения фиксирует реальное усилие, а статистика показывает прогресс во времени."],
      ],
      galleryEyebrow: "Скриншоты интерфейса",
      galleryTitle: "Скриншоты для текущего языка.",
      galleryIntro: "Скриншоты меняются вместе с языком сайта. Если для языка нет отдельного набора, используется ближайшая доступная версия, а текст остаётся локализованным.",
      galleryItems: [
        ["Подготовка фокуса", "Выберите длительность, язык и звуковую среду до начала."],
        ["Звуковой микшер", "Смешивайте несколько слоёв для разных состояний фокуса."],
        ["Дыхание", "Короткий переход возвращает внимание к задаче."],
        ["Сессия фокуса", "Прямой таймер, частицы и полноэкранная среда держат низкое давление."],
        ["Idea Fridge", "Сохраняйте временные мысли, не покидая сессию."],
        ["Накопительная статистика", "Смотрите реальное усилие во времени, а не одну сессию."],
        ["Поддержка и настройки", "Язык, звук, приватность и поддержка находятся в понятном месте."],
      ],
    },
  },
  pt: {
    card: {
      title: "ADHD Focus Timer",
      category: "Timer de foco imersivo",
      description: "Paisagens sonoras, respiração, contagem progressiva, Idea Fridge e estatísticas tornam o início mais leve.",
      status: "Disponível",
    },
    page: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Uma entrada mais calma para foco sustentado.",
      intro: "O novo ADHD Focus Timer foi feito para pessoas interrompidas facilmente por ruído, pensamentos soltos e pressão de contagem regressiva. Paisagens sonoras em tempo real, respiração, contagem progressiva, Idea Fridge e estatísticas acumuladas ajudam a entrar no foco com mais suavidade.",
      status: "Disponível",
      promiseTitle: "Ele não manda você correr. Ele reduz o custo de começar.",
      promise: "A versão 1.5.0 reconstrói interface, áudio e experiência multilíngue. Chuva, vento, oceano e sons noturnos são gerados localmente com Web Audio, sem arquivos de áudio enormes. O mixer, o espaço 8D e o som de conclusão podem ser ajustados.",
      features: [
        ["Preparar o ambiente", "Escolher idioma, duração, som e guia antes da sessão reduz decisões durante o foco."],
        ["Paisagens sonoras em tempo real", "Chuva, vento, oceano e noite são sintetizados localmente, mantendo o app leve para loops longos."],
        ["Mixer e espaço 8D", "Equilibre camadas sonoras e ative movimento espacial quando quiser um fundo mais presente."],
        ["Transição respiratória", "Um ritmo curto ajuda a entrar na sessão sem um começo brusco."],
        ["Contagem progressiva e partículas", "O tempo se acumula em vez de contar rumo ao fracasso. As partículas dão feedback discreto."],
        ["Idea Fridge", "Guarde pensamentos repentinos para depois sem sair da tarefa atual."],
        ["Estatísticas e conclusão suave", "A tela final registra esforço real e as estatísticas mostram progresso ao longo do tempo."],
      ],
      galleryEyebrow: "Capturas da interface",
      galleryTitle: "Capturas para o idioma atual.",
      galleryIntro: "As capturas mudam com o idioma do site. Idiomas sem capturas próprias usam a versão disponível mais próxima, mantendo o texto localizado.",
      galleryItems: [
        ["Preparar foco", "Escolha duração, idioma e ambiente antes de começar."],
        ["Mixer de som", "Combine várias camadas para diferentes estados de foco."],
        ["Guia de respiração", "Uma transição curta traz a atenção de volta à tarefa."],
        ["Sessão de foco", "Contagem progressiva, partículas e tela cheia mantêm um ritmo de baixa pressão."],
        ["Idea Fridge", "Capture pensamentos temporários sem sair da sessão."],
        ["Estatísticas acumuladas", "Veja esforço real no tempo, não apenas uma sessão."],
        ["Suporte e ajustes", "Idioma, som, privacidade e suporte ficam fáceis de encontrar."],
      ],
    },
  },
};

export function getAdhdCopy(locale: Locale) {
  return adhdCopy[locale] ?? adhdCopy.en;
}
