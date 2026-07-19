import type { Locale } from "@/lib/i18n/context";
import type { SiteCopy } from "@/lib/siteContent";

type BrandOverride = {
  home?: Partial<SiteCopy["home"]>;
  products?: Partial<SiteCopy["products"]>;
  productCards?: {
    [Key in keyof SiteCopy["productCards"]]?: Partial<SiteCopy["productCards"][Key]>;
  };
  energyflow?: Partial<SiteCopy["energyflow"]>;
  deskhaven?: Partial<SiteCopy["deskhaven"]>;
  adhd?: Partial<SiteCopy["adhd"]>;
  about?: Partial<SiteCopy["about"]>;
  footer?: Partial<SiteCopy["footer"]>;
};

const brandOverrides: Partial<Record<Locale, BrandOverride>> = {
  zh: {
    home: {
      eyebrow: "Windows 桌面软件 / Local-first",
      title: "让数字工作重新安静、清晰、可掌控。",
      intro: "SoloCraft 构建不争夺注意力的 Windows 软件：看见精力的流向，重建本地内容的秩序，为专注保留真正安静的空间。复杂能力被收进克制的界面，重要数据优先留在本地。",
      primary: "探索产品",
      secondary: "了解 SoloCraft",
      notes: [
        ["克制与层次", "功能可以深入，界面不必喧闹。每一层视觉都服务于理解与行动。"],
        ["本地与掌控", "重要数据优先留在设备上，并保留清晰的导出、恢复与管理路径。"],
        ["真实与透明", "以真实界面、明确能力和清楚边界建立信任，不用概念包装替代产品。"],
        ["稳定与长期", "性能、隐私和可维护性被视为产品体验的一部分，而不是发布后的补充。"],
      ],
      principlesTitle: "把复杂留在系统里，把平静交给用户。",
      principlesBody: "SoloCraft 不追求让页面显得功能繁多。真正重要的是：信息是否清楚，交互是否有边界，数据是否可控，软件是否值得长期留在桌面上。",
      productTitle: "三种工具，同一套产品哲学。",
      studioTitle: "一套安静而清晰的桌面软件体系。",
      studioBody: "SoloCraft 围绕精力洞察、本地内容秩序与低压力专注构建产品。不同应用回应不同的数字摩擦，但共享克制、清晰、本地优先的体验标准。",
      studioNote: "EnergyFlow 让精力变化可见；DeskHaven 让本地文件重新形成秩序；ADHD Focus Timer 降低进入专注的阻力。",
    },
    products: {
      eyebrow: "产品体系",
      title: "不是更多软件，而是更少的数字摩擦。",
      intro: "每款产品都从一个长期存在的桌面问题出发，并提供真实界面、明确能力、清晰隐私边界与直接获取方式。",
    },
    productCards: {
      energyflow: {
        category: "工作精力洞察",
        description: "免费记录精力、情绪与压力变化，通过时间线和分析报告回看长期规律。",
        status: "免费",
      },
      deskhaven: {
        category: "本地文件秩序",
        description: "把散落的文件、标签与项目关系收进一个可搜索、可理解、可掌控的本地空间。",
      },
      adhd: {
        category: "低压力专注环境",
        description: "用声音、呼吸过渡、正向计时和想法暂存，降低开始与维持专注的阻力。",
      },
    },
    energyflow: {
      title: "看见工作如何消耗你，也看见什么正在恢复你。",
      intro: "EnergyFlow 是一款免费的 Windows 精力与情绪记录工具。通过桌面入口快速记录精力、情绪、压力来源和活动，也能加入图片或录音；时间线、分析报告与本地加密备份帮助你长期回看。",
      status: "免费",
      promiseTitle: "不是另一张待办清单，而是一面关于工作状态的镜子。",
      promise: "当记录足够轻，模式才会逐渐浮现。EnergyFlow 将主观感受保留下来，再通过趋势和统计，把模糊的疲惫变成可以理解、可以调整的线索。",
    },
    deskhaven: {
      title: "让散落的文件，重新成为一套可理解的系统。",
      intro: "DeskHaven 不只是把文件搬进另一个文件夹。它通过收纳、搜索、归档、关系图谱与恢复路径，让本地内容重新拥有结构，同时把控制权保留在设备上。",
      promiseTitle: "文件秩序不是藏得更深，而是随时知道它在哪里、为何重要。",
      promise: "从文件仓到关系图谱，从搜索到备份恢复，DeskHaven 建立一层安静而可靠的本地内容系统。",
    },
    adhd: {
      title: "不是逼你更快，而是让开始这件事更轻。",
      intro: "ADHD Focus Timer 为容易被噪音、倒计时压力和突发想法打断的人，提供一条更柔和的专注路径：先建立声音环境，再用呼吸过渡、正向计时与想法暂存守住当前任务。",
      promiseTitle: "专注不必从自我施压开始。",
      promise: "应用把环境声、计时、临时想法和完成反馈收进同一段低压力流程，让注意力更容易进入下一分钟。",
    },
    about: {
      title: "关于 SoloCraft",
      intro: "以克制、清晰和本地优先为原则，构建面向 Windows 的桌面软件。",
      story: [
        "SoloCraft 将精力洞察、文件秩序与专注体验凝聚在统一的产品体系中。每款应用回应一种长期存在的数字摩擦，并以安静的视觉语言减少额外干扰。",
        "EnergyFlow 让工作中的精力变化可被看见；DeskHaven 为本地内容建立秩序；ADHD Focus Timer 为进入专注提供更温和的路径。",
        "真实界面、明确功能边界、隐私说明与获取方式构成每个产品页面的核心，让选择建立在清晰、可验证的信息之上。",
      ],
      philosophyTitle: "不是视觉风格，而是产品纪律。",
      philosophy: [
        ["克制", "让视觉退后，让信息、内容与行动成为主角。"],
        ["清晰", "功能、数据与边界始终保持可理解、可确认。"],
        ["本地优先", "重要内容优先留在设备上，控制权保持可见。"],
        ["长期可靠", "稳定、性能与维护质量共同构成产品体验。"],
      ],
      techTitle: "产品方向",
      tech: ["Windows 桌面体验", "本地优先的数据边界", "统计与可视化", "低干扰交互系统"],
      ctaTitle: "让更好的桌面体验继续发生。",
      ctaDescription: "产品反馈、合作与媒体联系，均可通过联系页面提交。",
      ctaButton: "联系 SoloCraft",
    },
    footer: {
      subtitle: "面向 Windows 的安静、清晰、本地优先软件。",
      copyright: "克制设计，清晰掌控。",
    },
  },
  en: {
    home: {
      eyebrow: "Windows desktop software / Local-first",
      title: "Make digital work quiet, clear, and yours again.",
      intro: "SoloCraft builds Windows software that does not compete for attention: see where energy goes, bring order back to local content, and create enough calm to focus. Complex capability stays behind a restrained interface, while important data stays close to the device.",
      primary: "Explore the products",
      secondary: "About SoloCraft",
      notes: [
        ["Restraint with depth", "Capability can run deep without making the interface loud. Every visual layer should improve understanding."],
        ["Local with control", "Important data stays on the device first, with visible paths for export, recovery, and management."],
        ["Real and transparent", "Actual interfaces, explicit capability, and honest boundaries take priority over conceptual packaging."],
        ["Built for the long term", "Performance, privacy, and maintainability are part of the product experience from the beginning."],
      ],
      principlesTitle: "Keep the complexity in the system. Give the calm to the user.",
      principlesBody: "SoloCraft is not trying to make every screen look busy. The standard is whether information is clear, interaction has boundaries, data remains controllable, and the software deserves to stay on the desktop.",
      productTitle: "Three tools. One product philosophy.",
      studioTitle: "A quiet, coherent system of desktop software.",
      studioBody: "SoloCraft develops products around energy awareness, local content order, and low-pressure focus. Different applications address different forms of digital friction while sharing the same restrained, clear, local-first standard.",
      studioNote: "EnergyFlow makes energy patterns visible. DeskHaven gives local files a coherent structure. ADHD Focus Timer lowers the friction of entering focus.",
    },
    products: {
      eyebrow: "Product system",
      title: "Not more software. Less digital friction.",
      intro: "Each product begins with a persistent desktop problem and presents real interfaces, explicit capability, clear privacy boundaries, and a direct path to access.",
    },
    productCards: {
      energyflow: {
        category: "Work energy intelligence",
        description: "Track energy, mood, and pressure for free, then review long-term patterns in timelines and reports.",
        status: "Free",
      },
      deskhaven: {
        category: "Local file order",
        description: "Turn scattered files, tags, and project relationships into a searchable local system you can understand and control.",
      },
      adhd: {
        category: "Low-pressure focus environment",
        description: "Use sound, breathing transitions, forward timing, and idea capture to reduce the friction of starting and staying focused.",
      },
    },
    energyflow: {
      title: "See what work takes from you—and what gives energy back.",
      intro: "EnergyFlow is a free Windows app for energy and mood tracking. Capture energy, emotion, pressure, and activity from the desktop, add images or audio when useful, then review the timeline, reports, and encrypted local backups.",
      status: "Free",
      promiseTitle: "Not another task list. A mirror for the way work feels.",
      promise: "When logging stays light, patterns have room to emerge. EnergyFlow preserves subjective signals, then uses trends and statistics to turn vague exhaustion into clues you can understand and act on.",
    },
    deskhaven: {
      title: "Turn scattered files into a system you can understand.",
      intro: "DeskHaven is not another folder with a prettier surface. Vaults, search, archives, relationship maps, and recovery paths give local content structure while keeping control on the device.",
      promiseTitle: "File order is not hiding things deeper. It is knowing where they are and why they matter.",
      promise: "From the file vault to relationship maps, from search to backup and recovery, DeskHaven builds a quiet and dependable layer for local content.",
    },
    adhd: {
      title: "Do not force yourself to move faster. Make starting feel lighter.",
      intro: "ADHD Focus Timer creates a gentler path for people interrupted by noise, countdown pressure, and sudden thoughts: establish a sound environment, transition with breathing, count time forward, and store distractions without abandoning the task.",
      promiseTitle: "Focus does not have to begin with self-pressure.",
      promise: "Sound, timing, temporary thoughts, and completion feedback live in one low-pressure flow, making the next minute easier to enter.",
    },
    about: {
      title: "About SoloCraft",
      intro: "Windows desktop software shaped by restraint, clarity, and local-first control.",
      story: [
        "SoloCraft brings energy awareness, file order, and focus into one coherent product system. Each application addresses a persistent form of digital friction with a quiet visual language and clear interaction boundaries.",
        "EnergyFlow makes work-energy patterns visible. DeskHaven gives local content a dependable structure. ADHD Focus Timer creates a gentler path into focused work.",
        "Real interfaces, explicit capabilities, privacy documentation, and direct access paths keep every product page clear, verifiable, and useful before installation.",
      ],
      philosophyTitle: "Not a visual style. A product discipline.",
      philosophy: [
        ["Restrained", "Let the interface recede so information, content, and action can lead."],
        ["Clear", "Keep capability, data handling, and product boundaries understandable."],
        ["Local-first", "Keep important content close to the device and control visible."],
        ["Durable", "Treat stability, performance, and maintainability as part of the experience."],
      ],
      techTitle: "Product direction",
      tech: ["Windows desktop experiences", "Local-first data boundaries", "Statistics and visualization", "Low-distraction interaction systems"],
      ctaTitle: "Move better desktop software forward.",
      ctaDescription: "Product feedback, partnerships, and media enquiries can be sent through the contact page.",
      ctaButton: "Contact SoloCraft",
    },
    footer: {
      subtitle: "Quiet, clear, local-first software for Windows.",
      copyright: "Restrained design. Clear control.",
    },
  },
  "zh-tw": {
    home: {
      title: "讓數位工作重新安靜、清晰、可掌控。",
      intro: "SoloCraft 打造不爭奪注意力的 Windows 工具：看見精力流向，重建本地內容秩序，並為專注保留真正安靜的空間。",
      principlesTitle: "把複雜留在系統裡，把平靜交給使用者。",
      studioTitle: "一套安靜而清晰的桌面軟體體系。",
    },
    productCards: { energyflow: { status: "免費" } },
    energyflow: {
      intro: "EnergyFlow 是免費的 Windows 精力與情緒記錄工具，可快速記錄壓力、活動、圖片與錄音，並透過時間軸、分析報告和本地加密備份長期回顧。",
      status: "免費",
    },
    about: {
      intro: "以克制、清晰和本地優先為原則，構建面向 Windows 的桌面軟體。",
      story: [
        "SoloCraft 將精力洞察、文件秩序與專注體驗整合為一致的產品體系。",
        "EnergyFlow 看見精力變化，DeskHaven 建立本地內容秩序，ADHD Focus Timer 提供更柔和的專注路徑。",
        "真實介面、明確能力、隱私說明與取得方式，讓每項選擇都建立在清晰資訊之上。",
      ],
    },
    footer: { subtitle: "面向 Windows 的安靜、清晰、本地優先軟體。", copyright: "克制設計，清晰掌控。" },
  },
  ja: {
    home: {
      title: "デジタルの仕事に、静けさと秩序と主導権を。",
      intro: "SoloCraft は、注意を奪わない Windows ソフトウェアを構築します。エネルギーの変化を見つめ、ローカルコンテンツに秩序を戻し、集中に必要な静けさを整えます。",
      principlesTitle: "複雑さはシステムの内側へ。静けさはユーザーの手元へ。",
      studioTitle: "静かで一貫したデスクトップソフトウェア体系。",
    },
    productCards: { energyflow: { status: "無料" } },
    energyflow: { intro: "EnergyFlow は、エネルギー、気分、ストレス、活動を記録し、タイムラインと分析で振り返る無料の Windows アプリです。画像・音声・暗号化ローカルバックアップにも対応します。", status: "無料" },
    about: {
      intro: "抑制、明快さ、ローカルファーストを軸にした Windows デスクトップソフトウェア。",
      story: [
        "SoloCraft は、エネルギーの把握、ファイルの秩序、集中体験を一つの製品体系にまとめています。",
        "EnergyFlow、DeskHaven、ADHD Focus Timer は、それぞれ異なるデジタル摩擦を静かに減らします。",
        "実際の画面、明確な機能、プライバシー情報、入手方法を分かりやすく提示します。",
      ],
    },
    footer: { subtitle: "静かで明快な、ローカルファーストの Windows ソフトウェア。", copyright: "抑制された設計。明確なコントロール。" },
  },
  ko: {
    home: {
      title: "디지털 작업을 다시 조용하고 선명하며 통제 가능하게.",
      intro: "SoloCraft는 주의를 빼앗지 않는 Windows 소프트웨어를 만듭니다. 에너지의 흐름을 보고, 로컬 콘텐츠의 질서를 되찾고, 집중을 위한 조용한 공간을 구성합니다.",
      principlesTitle: "복잡함은 시스템 안에 두고, 평온함은 사용자에게 돌려줍니다.",
      studioTitle: "조용하고 일관된 데스크톱 소프트웨어 체계.",
    },
    productCards: { energyflow: { status: "무료" } },
    energyflow: { intro: "EnergyFlow는 에너지, 기분, 압박, 활동을 기록하고 타임라인과 분석으로 되돌아보는 무료 Windows 앱입니다. 이미지, 오디오, 암호화된 로컬 백업도 지원합니다.", status: "무료" },
    about: {
      intro: "절제, 명확성, 로컬 우선 원칙으로 설계한 Windows 데스크톱 소프트웨어.",
      story: [
        "SoloCraft는 에너지 인식, 파일 질서, 집중 경험을 하나의 일관된 제품 체계로 연결합니다.",
        "EnergyFlow, DeskHaven, ADHD Focus Timer는 서로 다른 디지털 마찰을 조용히 줄입니다.",
        "실제 화면, 명확한 기능, 개인정보 안내와 다운로드 경로를 투명하게 제공합니다.",
      ],
    },
    footer: { subtitle: "조용하고 명확한 로컬 우선 Windows 소프트웨어.", copyright: "절제된 디자인. 명확한 통제." },
  },
  fr: {
    home: {
      title: "Rendre le travail numérique plus calme, plus clair, plus maîtrisable.",
      intro: "SoloCraft conçoit des logiciels Windows qui ne se disputent pas votre attention : comprendre l’énergie, remettre de l’ordre dans le contenu local et créer un environnement plus propice à la concentration.",
      principlesTitle: "Garder la complexité dans le système. Rendre le calme à l’utilisateur.",
      studioTitle: "Un ensemble cohérent de logiciels de bureau calmes.",
    },
    productCards: { energyflow: { status: "Gratuit" } },
    energyflow: { intro: "EnergyFlow est une application Windows gratuite pour noter énergie, humeur, pression et activité, puis relire la chronologie et les analyses. Images, audio et sauvegardes locales chiffrées sont pris en charge.", status: "Gratuit" },
    about: {
      intro: "Des logiciels Windows guidés par la retenue, la clarté et une approche local-first.",
      story: [
        "SoloCraft réunit compréhension de l’énergie, ordre des fichiers et concentration dans un système de produits cohérent.",
        "EnergyFlow, DeskHaven et ADHD Focus Timer réduisent chacun une forme différente de friction numérique.",
        "Interfaces réelles, fonctions explicites, confidentialité et accès direct rendent chaque produit clair avant installation.",
      ],
    },
    footer: { subtitle: "Des logiciels Windows calmes, clairs et local-first.", copyright: "Design maîtrisé. Contrôle clair." },
  },
  de: {
    home: {
      title: "Digitale Arbeit wieder ruhig, klar und kontrollierbar machen.",
      intro: "SoloCraft entwickelt Windows-Software, die nicht um Aufmerksamkeit kämpft: Energieverläufe verstehen, lokale Inhalte ordnen und konzentriertes Arbeiten ruhiger beginnen.",
      principlesTitle: "Die Komplexität bleibt im System. Die Ruhe gehört dem Nutzer.",
      studioTitle: "Ein ruhiges, zusammenhängendes System von Desktop-Software.",
    },
    productCards: { energyflow: { status: "Kostenlos" } },
    energyflow: { intro: "EnergyFlow ist eine kostenlose Windows-App für Energie, Stimmung, Belastung und Aktivitäten. Zeitleiste, Analysen, Bilder, Audio und verschlüsselte lokale Backups unterstützen den langfristigen Rückblick.", status: "Kostenlos" },
    about: {
      intro: "Windows-Software, geprägt von Zurückhaltung, Klarheit und Local-first-Kontrolle.",
      story: [
        "SoloCraft verbindet Energiebewusstsein, Dateiorganisation und Fokus in einem konsistenten Produktsystem.",
        "EnergyFlow, DeskHaven und ADHD Focus Timer reduzieren jeweils eine andere Form digitaler Reibung.",
        "Reale Oberflächen, klare Funktionen, Datenschutzinformationen und direkte Zugänge schaffen Transparenz vor der Installation.",
      ],
    },
    footer: { subtitle: "Ruhige, klare und local-first entwickelte Windows-Software.", copyright: "Zurückhaltendes Design. Klare Kontrolle." },
  },
  es: {
    home: {
      title: "Devolver al trabajo digital la calma, la claridad y el control.",
      intro: "SoloCraft crea software para Windows que no compite por tu atención: comprender la energía, ordenar el contenido local y construir un entorno más amable para concentrarse.",
      principlesTitle: "La complejidad se queda en el sistema. La calma vuelve al usuario.",
      studioTitle: "Un sistema coherente de software de escritorio sereno.",
    },
    productCards: { energyflow: { status: "Gratis" } },
    energyflow: { intro: "EnergyFlow es una aplicación gratuita para Windows que registra energía, ánimo, presión y actividad. Incluye cronología, análisis, imágenes, audio y copias locales cifradas.", status: "Gratis" },
    about: {
      intro: "Software para Windows definido por la sobriedad, la claridad y el control local-first.",
      story: [
        "SoloCraft reúne energía, orden de archivos y concentración en un sistema de productos coherente.",
        "EnergyFlow, DeskHaven y ADHD Focus Timer reducen distintas formas de fricción digital.",
        "Interfaces reales, funciones claras, privacidad y acceso directo hacen que cada producto sea comprensible antes de instalarlo.",
      ],
    },
    footer: { subtitle: "Software para Windows sereno, claro y local-first.", copyright: "Diseño sobrio. Control claro." },
  },
  ru: {
    home: {
      title: "Вернуть цифровой работе тишину, ясность и контроль.",
      intro: "SoloCraft создаёт программное обеспечение для Windows, которое не борется за внимание: помогает понимать энергию, упорядочивать локальный контент и мягче входить в состояние концентрации.",
      principlesTitle: "Сложность остаётся внутри системы. Спокойствие возвращается пользователю.",
      studioTitle: "Целостная система спокойных настольных приложений.",
    },
    productCards: { energyflow: { status: "Бесплатно" } },
    energyflow: { intro: "EnergyFlow — бесплатное приложение для Windows для записей об энергии, настроении, нагрузке и занятиях. В нём есть временная шкала, аналитика, изображения, аудио и зашифрованные локальные копии.", status: "Бесплатно" },
    about: {
      intro: "Программное обеспечение для Windows, основанное на сдержанности, ясности и локальном контроле.",
      story: [
        "SoloCraft объединяет понимание энергии, порядок файлов и концентрацию в единой системе продуктов.",
        "EnergyFlow, DeskHaven и ADHD Focus Timer уменьшают разные виды цифрового трения.",
        "Реальные интерфейсы, понятные функции, сведения о конфиденциальности и прямой доступ делают выбор прозрачным до установки.",
      ],
    },
    footer: { subtitle: "Спокойное, ясное и локально ориентированное ПО для Windows.", copyright: "Сдержанный дизайн. Ясный контроль." },
  },
  pt: {
    home: {
      title: "Devolver calma, clareza e controlo ao trabalho digital.",
      intro: "SoloCraft cria software Windows que não disputa a atenção: compreender a energia, organizar conteúdo local e tornar a entrada no foco mais tranquila.",
      principlesTitle: "A complexidade fica no sistema. A calma volta para o utilizador.",
      studioTitle: "Um sistema coerente de software de ambiente de trabalho sereno.",
    },
    productCards: { energyflow: { status: "Grátis" } },
    energyflow: { intro: "EnergyFlow é uma aplicação gratuita para Windows que regista energia, humor, pressão e atividades. Inclui linha temporal, análises, imagens, áudio e cópias locais cifradas.", status: "Grátis" },
    about: {
      intro: "Software Windows orientado por contenção, clareza e controlo local-first.",
      story: [
        "SoloCraft reúne energia, ordem de ficheiros e foco num sistema de produtos coerente.",
        "EnergyFlow, DeskHaven e ADHD Focus Timer reduzem diferentes formas de fricção digital.",
        "Interfaces reais, funções claras, privacidade e acesso direto tornam cada produto compreensível antes da instalação.",
      ],
    },
    footer: { subtitle: "Software Windows sereno, claro e local-first.", copyright: "Design contido. Controlo claro." },
  },
};

export function applyBrandCopy(locale: Locale, base: SiteCopy): SiteCopy {
  const override = brandOverrides[locale];
  if (!override) return base;

  return {
    ...base,
    home: { ...base.home, ...override.home },
    products: { ...base.products, ...override.products },
    productCards: {
      ...base.productCards,
      energyflow: { ...base.productCards.energyflow, ...override.productCards?.energyflow },
      deskhaven: { ...base.productCards.deskhaven, ...override.productCards?.deskhaven },
      adhd: { ...base.productCards.adhd, ...override.productCards?.adhd },
    },
    energyflow: { ...base.energyflow, ...override.energyflow },
    deskhaven: { ...base.deskhaven, ...override.deskhaven },
    adhd: { ...base.adhd, ...override.adhd },
    about: { ...base.about, ...override.about },
    footer: { ...base.footer, ...override.footer },
  };
}
