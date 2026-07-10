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
      eyebrow: "独立软件工作室 / Windows",
      title: "让数字工作重新安静、清晰、可掌控。",
      intro: "SoloCraft 打造不争夺注意力的桌面工具：看见精力的流向，重建文件的秩序，为专注留出真正安静的空间。复杂能力被收进克制的界面，重要数据优先留在本地。",
      primary: "探索产品",
      secondary: "认识 SoloCraft",
      notes: [
        ["克制，不简陋", "功能可以深入，界面不必喧闹。每一层视觉都服务于理解和行动。"],
        ["本地，不封闭", "数据优先留在设备上，同时保留清晰的导出、恢复与控制路径。"],
        ["真实，不概念化", "用真实产品、真实界面和真实边界说话，不用空洞的未来感替代能力。"],
        ["独立，不将就", "小型工作室也应对细节、性能、隐私和长期维护负责。"],
      ],
      principlesTitle: "把复杂留在系统里，把平静交给用户。",
      principlesBody: "SoloCraft 不追求让每个页面看起来功能繁多。真正重要的是：信息是否清楚，操作是否有边界，数据是否可控，软件是否值得长期留在桌面上。",
      productTitle: "三种工具，同一套产品哲学。",
      studioTitle: "规模可以很小，产品不必轻浮。",
      studioBody: "SoloCraft 是 Chicken Fillet 的独立软件工作室。它不复制流行模板，也不靠夸张叙事制造价值，而是持续打磨那些每天都会被打开的 Windows 工具。",
      studioNote: "EnergyFlow 让精力变化可见；DeskHaven 让本地文件重新形成秩序；ADHD Focus Timer 让进入专注的成本更低。它们解决不同问题，但共享同一种克制、私密和可掌控的设计方向。",
    },
    products: {
      eyebrow: "产品体系",
      title: "不是更多软件，而是更少的数字摩擦。",
      intro: "每款产品都从一个长期存在的桌面问题出发，并提供真实界面、明确价格、隐私边界与 Microsoft Store 下载入口。",
    },
    productCards: {
      energyflow: {
        category: "工作精力洞察",
        description: "记录工作如何消耗你，也看见会议、任务和休息方式如何让你恢复。",
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
      intro: "EnergyFlow 把一次几秒钟的状态记录，沉淀成一条可以回看的工作能量轨迹。它不评判效率，而是帮助你理解会议、任务切换、休息方式与精力变化之间的真实关系。",
      promiseTitle: "不是另一张待办清单，而是一面关于工作状态的镜子。",
      promise: "当记录足够轻，模式才会逐渐浮现。EnergyFlow 将主观感受保留下来，再通过趋势和统计，把模糊的疲惫变成可以理解、可以调整的线索。",
    },
    deskhaven: {
      title: "让散落的文件，重新成为一套可理解的系统。",
      intro: "DeskHaven 不只是把文件搬进另一个文件夹。它通过收纳、搜索、归档、关系图谱与恢复路径，让本地内容重新拥有结构，同时把控制权保留在你的设备上。",
      promiseTitle: "文件秩序不是藏得更深，而是随时知道它在哪里、为何重要。",
      promise: "从文件仓到关系图谱，从搜索到备份恢复，DeskHaven 试图建立一层安静而可靠的本地内容系统。",
    },
    adhd: {
      title: "不是逼你更快，而是让开始这件事更轻。",
      intro: "ADHD Focus Timer 为容易被噪音、倒计时压力和突发想法打断的人，提供一条更柔和的专注路径：先建立声音环境，再用呼吸过渡、正向计时与想法暂存守住当前任务。",
      promiseTitle: "专注不必从自我施压开始。",
      promise: "应用把环境声、计时、临时想法和完成反馈收进同一段低压力流程。你不需要证明自己足够自律，只需要更容易地进入下一分钟。",
    },
    about: {
      title: "关于 SoloCraft",
      intro: "一个为 Windows 打造安静、私密、可长期使用工具的独立软件工作室。",
      philosophyTitle: "不是视觉风格，而是产品纪律。",
    },
    footer: {
      subtitle: "由 Chicken Fillet 独立打造的 Windows 桌面软件。",
      copyright: "安静、克制、本地优先。",
    },
  },
  en: {
    home: {
      eyebrow: "Independent software studio / Windows",
      title: "Make digital work quiet, clear, and yours again.",
      intro: "SoloCraft builds desktop tools that do not compete for attention: see where your energy goes, bring order back to local files, and create enough calm to focus. Complex capability stays behind a restrained interface, while important data stays close to you.",
      primary: "Explore the products",
      secondary: "About SoloCraft",
      notes: [
        ["Restrained, not bare", "Power can run deep without making the interface loud. Every visual layer should improve understanding."],
        ["Local, not locked in", "Data stays on the device first, with visible paths for export, recovery, and control."],
        ["Real, not conceptual", "Actual products, actual interfaces, and honest boundaries take priority over decorative futurism."],
        ["Independent, not careless", "A small studio should still be accountable for detail, performance, privacy, and maintenance."],
      ],
      principlesTitle: "Keep the complexity in the system. Give the calm to the user.",
      principlesBody: "SoloCraft is not trying to make every screen look busy. The real standard is whether information is clear, interaction has boundaries, data remains controllable, and the software deserves to stay on your desktop.",
      productTitle: "Three tools. One product philosophy.",
      studioTitle: "Small in scale does not have to mean shallow in product.",
      studioBody: "SoloCraft is Chicken Fillet's independent software studio. It does not copy fashionable templates or use inflated language to manufacture value. It keeps refining Windows tools people may actually open every day.",
      studioNote: "EnergyFlow makes energy patterns visible. DeskHaven gives local files a coherent structure. ADHD Focus Timer lowers the cost of entering focus. Different problems, one direction: restrained, private, and controllable software.",
    },
    products: {
      eyebrow: "Product system",
      title: "Not more software. Less digital friction.",
      intro: "Each product starts with a persistent desktop problem and presents real interfaces, clear pricing, explicit privacy boundaries, and a direct Microsoft Store path.",
    },
    productCards: {
      energyflow: {
        category: "Work energy intelligence",
        description: "See how work drains you, and which meetings, tasks, and recovery habits help bring energy back.",
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
      intro: "EnergyFlow turns a few seconds of self-reporting into a work-energy history you can actually review. It does not score productivity; it helps reveal how meetings, context switches, recovery habits, and daily structure shape your state over time.",
      promiseTitle: "Not another task list. A mirror for the way work feels.",
      promise: "When logging stays light, patterns have room to emerge. EnergyFlow preserves subjective signals, then uses trends and statistics to turn vague exhaustion into clues you can understand and act on.",
    },
    deskhaven: {
      title: "Turn scattered files into a system you can understand.",
      intro: "DeskHaven is not another folder with a prettier surface. Vaults, search, archives, relationship maps, and recovery paths give local content structure while keeping control on your device.",
      promiseTitle: "File order is not hiding things deeper. It is knowing where they are and why they matter.",
      promise: "From the file vault to relationship maps, from search to backup and recovery, DeskHaven builds a quiet and dependable layer for local content.",
    },
    adhd: {
      title: "Do not force yourself to move faster. Make starting feel lighter.",
      intro: "ADHD Focus Timer creates a gentler path for people interrupted by noise, countdown pressure, and sudden thoughts: establish a sound environment, transition with breathing, count time forward, and store distractions without abandoning the task.",
      promiseTitle: "Focus does not have to begin with self-pressure.",
      promise: "Sound, timing, temporary thoughts, and completion feedback live in one low-pressure flow. You do not have to prove perfect discipline. You only need an easier way into the next minute.",
    },
    about: {
      title: "About SoloCraft",
      intro: "An independent studio building quiet, private, durable software for Windows.",
      philosophyTitle: "Not a visual style. A product discipline.",
    },
    footer: {
      subtitle: "Independent Windows software by Chicken Fillet.",
      copyright: "Quiet, restrained, and local-first.",
    },
  },
  "zh-tw": {
    home: {
      title: "讓數位工作重新安靜、清晰、可掌控。",
      intro: "SoloCraft 打造不爭奪注意力的桌面工具：看見精力流向，重建本地文件秩序，並為專注保留真正安靜的空間。複雜能力收進克制介面，重要資料優先留在裝置上。",
      principlesTitle: "把複雜留在系統裡，把平靜交給使用者。",
      studioTitle: "規模可以很小，產品不必輕浮。",
    },
  },
  ja: {
    home: {
      title: "デジタルの仕事に、静けさと秩序と主導権を。",
      intro: "SoloCraft は、注意を奪わない Windows ツールをつくる独立スタジオです。エネルギーの変化を見つめ、ローカルファイルに秩序を戻し、集中に必要な静けさを整えます。",
      principlesTitle: "複雑さはシステムの内側へ。静けさはユーザーの手元へ。",
      studioTitle: "小さなスタジオでも、浅いプロダクトである必要はない。",
    },
  },
  ko: {
    home: {
      title: "디지털 작업을 다시 조용하고 선명하며 통제 가능하게.",
      intro: "SoloCraft는 주의를 빼앗지 않는 Windows 도구를 만드는 독립 스튜디오입니다. 에너지의 흐름을 보고, 로컬 파일의 질서를 되찾고, 집중을 위한 조용한 공간을 만듭니다.",
      principlesTitle: "복잡함은 시스템 안에 두고, 평온함은 사용자에게 돌려줍니다.",
      studioTitle: "작은 규모가 얕은 제품을 뜻할 필요는 없습니다.",
    },
  },
  fr: {
    home: {
      title: "Rendre le travail numérique plus calme, plus clair, plus maîtrisable.",
      intro: "SoloCraft conçoit des outils Windows qui ne se disputent pas votre attention : comprendre son énergie, remettre de l'ordre dans les fichiers locaux et créer un environnement plus propice à la concentration.",
      principlesTitle: "Garder la complexité dans le système. Rendre le calme à l'utilisateur.",
      studioTitle: "Une petite structure peut construire des produits profonds.",
    },
  },
  de: {
    home: {
      title: "Digitale Arbeit wieder ruhig, klar und kontrollierbar machen.",
      intro: "SoloCraft entwickelt unabhängige Windows-Werkzeuge, die nicht um Aufmerksamkeit kämpfen: Energieverläufe verstehen, lokale Dateien ordnen und einen ruhigeren Einstieg in konzentrierte Arbeit schaffen.",
      principlesTitle: "Die Komplexität bleibt im System. Die Ruhe gehört dem Nutzer.",
      studioTitle: "Kleine Größe muss kein flaches Produkt bedeuten.",
    },
  },
  es: {
    home: {
      title: "Devolver al trabajo digital la calma, la claridad y el control.",
      intro: "SoloCraft crea herramientas independientes para Windows que no compiten por tu atención: entender la energía, ordenar archivos locales y construir un entorno más amable para concentrarse.",
      principlesTitle: "La complejidad se queda en el sistema. La calma vuelve al usuario.",
      studioTitle: "Un estudio pequeño también puede construir productos profundos.",
    },
  },
  ru: {
    home: {
      title: "Вернуть цифровой работе тишину, ясность и контроль.",
      intro: "SoloCraft создаёт независимые инструменты для Windows, которые не борются за внимание: помогают понимать энергию, наводить порядок в локальных файлах и мягче входить в состояние концентрации.",
      principlesTitle: "Сложность остаётся внутри системы. Спокойствие возвращается пользователю.",
      studioTitle: "Небольшая студия не обязана делать поверхностные продукты.",
    },
  },
  pt: {
    home: {
      title: "Devolver calma, clareza e controlo ao trabalho digital.",
      intro: "SoloCraft cria ferramentas independentes para Windows que não disputam a sua atenção: compreender a energia, organizar ficheiros locais e tornar a entrada no foco mais tranquila.",
      principlesTitle: "A complexidade fica no sistema. A calma volta para o utilizador.",
      studioTitle: "Uma equipa pequena também pode criar produtos profundos.",
    },
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
