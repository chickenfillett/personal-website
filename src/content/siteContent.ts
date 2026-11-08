import type { Locale } from "@/lib/i18n/context";

export type NavCopy = {
  home: string;
  about: string;
  products: string;
  contact: string;
  language: string;
  work: string;
  now: string;
};

type WidenCopy<T> =
  T extends string ? string :
  T extends readonly [unknown, ...unknown[]] ? { readonly [K in keyof T]: WidenCopy<T[K]> } :
  T extends readonly (infer Item)[] ? readonly WidenCopy<Item>[] :
  T extends object ? { readonly [K in keyof T]: WidenCopy<T[K]> } :
  T;

const zhNav = {
  "home": "首页",
  "about": "关于",
  "products": "产品",
  "contact": "联系",
  "language": "选择语言",
  "work": "作品",
  "now": "近况"
} as const;

const zhCopy = {
  "common": {
    "productPromise": "产品说明",
    "experienceFlow": "使用流程",
    "productIndex": "产品",
    "operatingPrinciples": "工作原则",
    "designPrinciples": "设计要点",
    "step": "步骤",
    "viewProducts": "查看产品",
    "contact": "联系",
    "getUpdates": "联系",
    "microsoftStore": "Microsoft Store",
    "privacy": "隐私政策",
    "backToProducts": "返回产品",
    "viewWork": "查看作品",
    "backToWork": "返回作品"
  },
  "home": {
    "heroEyebrow": "独立创作者",
    "heroTitle": "Chicken Fillet",
    "heroSubtitle": "创造一些东西，探索一些想法，看看更远的世界。",
    "heroPrimary": "查看作品",
    "heroSecondary": "关于我",
    "introTitle": "关于我",
    "introBody": "我是一名独立创作者，关注软件、技术、人工智能、机器人和太空探索。这里记录我创造的作品、正在进行的实验，以及持续探索的想法。",
    "worksTitle": "精选作品",
    "worksSubtitle": "三款已发布、可在 Microsoft Store 下载的桌面应用。",
    "approachTitle": "做事方式",
    "approachItems": [
      {
        "title": "从真实问题出发",
        "body": "先找到一个确实存在的困扰，再决定要不要动手做。"
      },
      {
        "title": "把想法做出来",
        "body": "比起停在概念里，更喜欢做出能真正打开、能用的东西。"
      },
      {
        "title": "简洁克制",
        "body": "界面保持安静，把力气留给会被用到的功能，不做多余装饰。"
      },
      {
        "title": "持续探索",
        "body": "对新技术和新方向保持好奇，边做边学，慢慢打磨。"
      },
      {
        "title": "本地优先与隐私",
        "body": "重要数据尽量留在自己的设备上，由使用者决定保存和导出什么。"
      }
    ],
    "areasTitle": "兴趣方向",
    "areasSubtitle": "我持续关注、想继续深入的方向，不是已经完成的成果。",
    "areas": [
      {
        "title": "Software & Creation",
        "body": "软件、工具、交互设计，以及独立开发——喜欢把想法做成能用的东西。"
      },
      {
        "title": "AI & Robotics",
        "body": "人工智能、自动化、机器人与智能系统，关注它们如何与日常协作。"
      },
      {
        "title": "Space & Exploration",
        "body": "月球、火星、航天、太空生活与模拟，对更远的世界保持好奇。"
      }
    ],
    "focusTitle": "当前关注",
    "focusBody": "这里会记录我近期在做的东西，暂时还没有可公开的内容。",
    "focusEmpty": "暂无内容。",
    "eyebrow": "独立创作",
    "title": "一些我做出来的东西",
    "intro": "我独立开发的 Windows 桌面应用。每个产品页都有真实截图、功能介绍和下载链接，看完再决定装不装。",
    "primary": "查看作品",
    "secondary": "关于我",
    "currentProduct": "正在展示",
    "notes": [
      [
        "真实界面",
        "使用应用截图和海报展示产品，不用概念图代替真实界面。"
      ],
      [
        "本地优先",
        "重要数据优先在你的 Windows 设备上处理。"
      ],
      [
        "如实呈现",
        "截图与功能说明都取自已上线的正式版本。"
      ],
      [
        "下载明确",
        "每个产品页都提供对应的 Microsoft Store 链接。"
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "记录精力和工作状态。",
        "body": "快速记录精力等级、工作状态、来源和心情，再用趋势与统计回看变化。",
        "bullets": [
          "5 级精力",
          "工作状态",
          "趋势分析",
          "本地优先"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "整理本地文件。",
        "body": "把散落文件放入可搜索、可归档、可备份的本地工作空间，并查看内容之间的关系。",
        "bullets": [
          "文件仓",
          "搜索归档",
          "关系图谱",
          "隐私控制"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "从声音环境开始专注。",
        "body": "用实时生成环境声、声音混音、正向计时、想法暂存和统计回看完成一段专注。",
        "bullets": [
          "环境声",
          "正向计时",
          "想法暂存",
          "统计回看"
        ]
      }
    ],
    "principlesTitle": "只放必要的信息",
    "principlesBody": "页面围绕作品本身展开：它能做什么、界面长什么样、数据怎么处理、从哪里下载。",
    "productTitle": "已发布应用",
    "studioTitle": "关于我",
    "studioBody": "这里不是商店，也不是博客。它把我已经做出来、已经发布的应用，以及使用前想了解的信息，收拾得清清楚楚。",
    "studioNote": "EnergyFlow 记录精力，DeskHaven 整理文件，ADHD Focus Timer 帮你专注。"
  },
  "products": {
    "eyebrow": "产品",
    "title": "已上架的 Windows 应用",
    "intro": "每个产品页都有真实截图、功能介绍、隐私政策和下载链接。"
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "职场能量仪表盘",
      "description": "记录精力、情绪、压力和活动，通过时间线与分析报告回看长期变化。",
      "status": "已发布"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "桌面文件避风港",
      "description": "整理本地文件、归档内容、查看关系图谱，并保留备份与隐私控制。",
      "status": "已发布"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "沉浸式专注计时器",
      "description": "混几段环境声，跟着呼吸引导进入专注，念头先存进想法冰箱。",
      "status": "已发布"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / 职场能量仪表盘",
    "title": "记录精力、查看趋势、调整节奏。",
    "intro": "EnergyFlow 用几秒完成一次记录：精力等级、工作状态、来源和心情。长期记录会形成趋势，帮助你判断工作安排和状态变化之间的关系。",
    "status": "已推出",
    "promiseTitle": "把主观状态变成可回看的记录。",
    "promise": "EnergyFlow 不评价你是否努力，只保存你主动记录的状态，并用统计视图展示变化。",
    "features": [
      [
        "3 秒打卡",
        "用最少步骤记录 5 级精力、工作状态、能量来源和心情，不把追踪本身变成负担。"
      ],
      [
        "深浅模式",
        "深色模式用于安静记录，浅色模式用于日间办公。界面保持克制，不用视觉噪音抢走注意力。"
      ],
      [
        "桌面常驻",
        "桌面悬浮按钮和快捷键让记录可以随手完成：出现、记录、收起，尽量不打断当前工作。"
      ],
      [
        "统计洞察",
        "通过 Pearson 相关和卡方检验观察能量与场景之间的关系，用长期记录发现真正的消耗源。"
      ],
      [
        "隐私保护",
        "精力状态属于敏感个人数据。EnergyFlow 以本地优先、隐私优先为默认设计方向。"
      ]
    ],
    "flow": [
      "记录当下状态",
      "积累工作场景",
      "查看能量趋势",
      "调整工作节奏"
    ],
    "gallery": {
      "eyebrow": "真实界面",
      "title": "从快速记录到趋势分析，一次看清 EnergyFlow 的工作方式。",
      "body": "13 张真实界面依次展示本地解锁、快速记录、多媒体、呼吸练习、时间线、分析、提醒和加密备份。"
    },
    "flowIntro": {
      "title": "从一次快速记录，到一段可调整的工作节奏。",
      "body": "EnergyFlow 不要求你重新管理人生，只保留一次很轻的记录动作。坚持一段时间后，会议、任务切换、休息方式与精力变化之间的关系会逐渐清晰。",
      "cardTitle": "流程重点",
      "cardBody": "记录越轻，越容易长期坚持；数据越稳定，越能看见哪些安排正在恢复你，哪些安排正在消耗你。"
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / 1.5.0",
    "title": "把桌面变成一个可掌控的活动空间。",
    "intro": "DeskHaven 1.5.0 将桌面文件、空间工作台、本地资料与私人保险箱收进一个本地工作台：总览、整理、加密与重复清理都在本机完成。",
    "status": "已推出",
    "promiseTitle": "不是多建几个文件夹，而是让桌面有序、可查、可恢复。",
    "promise": "空间工作台承载日常文件，仪表盘给出全局总览，本地文件库与私人保险箱负责安全，重复文件清理让存储保持清爽。",
    "features": [
      [
        "仪表盘总览",
        "第一眼了解桌面——文件数量、存储趋势、加密状态与最近变化都汇入一张总览。"
      ],
      [
        "空间工作台",
        "在统一工作台里浏览文件、笔记、统计与最近操作，整理前先看清全貌。"
      ],
      [
        "本地文件库",
        "文档、图片、导出资料保存在本地，内容始终由你掌控。"
      ],
      [
        "重复文件清理",
        "识别重复与待整理文件并给出处理建议，让存储恢复清爽。"
      ],
      [
        "私人保险箱",
        "重要文件用 PIN 与 Windows Hello 加密保护，本地归档、随时找回。"
      ]
    ],
    "principles": [
      [
        "本地优先",
        "重要文件和索引默认在本机处理。"
      ],
      [
        "安全可控",
        "用户必须知道文件在哪里，也能随时导出或找回。"
      ],
      [
        "关系可视",
        "文件不是孤立物，项目、标签和内容关系应该可以被理解。"
      ],
      [
        "低打扰",
        "整理应该顺手发生，而不是制造新的负担。"
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 2.7.0",
    "title": "从声音环境开始一段专注",
    "intro": "环境声实时生成、可自由混音，支持 8D 空间音频；跟着呼吸引导开始专注计时，念头随手存进想法冰箱，事后还有统计可看。",
    "status": "已推出",
    "promiseTitle": "开始、保持、结束，流程都清楚",
    "promise": "声音、计时、想法和统计串成一条流程。环境声实时生成，不用下载大体积音频。",
    "features": [
      [
        "全屏专注计时",
        "全屏沉浸界面，选好时长开始计时，进度一眼可见。"
      ],
      [
        "自定义声音环境",
        "雨声、风声、海浪、鸟鸣随意混合，空间音频和完成提示音按需开启。"
      ],
      [
        "随手保存临时想法",
        "专注过程中可用文字或语音暂存念头，不必离开当前计时。"
      ],
      [
        "目标关联",
        "写下正在做的事，关联一个目标，当前任务和下一步都摆在眼前。"
      ],
      [
        "本地统计与隐私",
        "专注记录和偏好只保存在你的设备上；结束后可以查看时长、次数和历史趋势。"
      ]
    ],
    "galleryEyebrow": "界面截图",
    "galleryTitle": "ADHD Focus Timer 界面",
    "galleryIntro": "2.7.0 版本的真实界面：专注设置、呼吸引导、专注计时、想法冰箱和目标关联。",
    "galleryItems": [
      [
        "专注设置与声音混合",
        "5 到 180 分钟任选，呼吸引导和每种环境声各自调节。"
      ],
      [
        "呼吸引导",
        "计时开始前，跟随光环完成一段平稳的呼吸过渡。"
      ],
      [
        "全屏专注计时",
        "从零累计专注时长，随时暂停，想法冰箱随手可用。"
      ],
      [
        "想法冰箱",
        "用文字或语音保存临时想法，不中断正在进行的专注。"
      ],
      [
        "目标关联",
        "写下此刻重要的事情并关联一个目标，让当前任务和下一步保持可见。"
      ]
    ]
  },
  "about": {
    "title": "关于我",
    "intro": "我是一名独立创作者，关注软件、技术、人工智能、机器人与太空探索。",
    "sectionLabels": {
      "introduction": "个人简介",
      "background": "经历",
      "interests": "兴趣",
      "approach": "创作方式",
      "futureDirection": "未来方向"
    },
    "introduction": "这里是我个人的网站，用来记录我创造的作品、正在进行的实验，以及持续探索的想法。做的东西以软件为主，也包括一些还没成形、但想继续试试的方向。",
    "background": [
      "我独立开发并发布了 Windows 桌面应用，EnergyFlow、DeskHaven 与 ADHD Focus Timer 都已上架 Microsoft Store。",
      "做产品时更在意真实界面、真实功能，以及本地优先、隐私可控。",
      "网站、产品和文案都由我自己维护。"
    ],
    "interests": [
      "软件、工具与交互设计",
      "人工智能、自动化与机器人",
      "月球、火星、航天与太空探索"
    ],
    "approach": "我喜欢从一个真实问题出发，动手把想法做成能用的东西，再慢慢打磨。界面保持克制，数据尽量留在本地，不为了热闹去加功能。",
    "futureDirection": "想继续探索 AI 与机器人、和太空相关的模拟与工具，也希望把更多实验做成真正可用的作品。这些都还在路上，不是已经完成的成果。",
    "contactTitle": "联系",
    "contactButton": "发送邮件",
    "story": [
      "我把做过的软件、正在试的实验和想探索的方向放在同一个地方。",
      "EnergyFlow、DeskHaven 和 ADHD Focus Timer 是我已经发布的三个桌面应用。",
      "页面尽量用真实界面和清楚说明，不堆概念图。"
    ],
    "techTitle": "关注的技术",
    "tech": [
      "Windows desktop apps",
      "Local-first storage",
      "Statistics and visualization",
      "Privacy-conscious product design"
    ],
    "ctaTitle": "聊聊？",
    "ctaDescription": "产品反馈、想法交流，或者只是打个招呼，都可以发邮件。",
    "ctaButton": "发送邮件",
    "philosophyTitle": "做事原则",
    "philosophy": [
      [
        "真实",
        "展示实际界面和真实功能，不用概念图代替。"
      ],
      [
        "清楚",
        "把需要知道的信息放在固定、好找的位置。"
      ],
      [
        "克制",
        "减少装饰，把空间留给内容本身。"
      ],
      [
        "可验证",
        "链接和说明都可以直接点开查看。"
      ]
    ]
  },
  "contact": {
    "title": "联系",
    "intro": "产品反馈、想法交流或任何问题，都可以发邮件到下面这个地址。",
    "infoTitle": "邮箱",
    "email": "联系邮箱"
  },
  "footer": {
    "subtitle": "一个记录个人创作、技术探索的地方。",
    "studio": "站点",
    "products": "产品",
    "legal": "法务",
    "about": "关于",
    "contact": "联系",
    "privacy": "隐私政策",
    "copyright": "© 2026 Chicken Fillet. 保留所有权利。"
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "这个页面不存在，或者链接已经移动。",
      "button": "返回首页"
    },
    "websitePrivacy": {
      "title": "网站隐私说明",
      "intro": "我们目前不收集任何数据。统计能力已经就绪，但默认关闭、处于休眠状态，不产生任何数据收集。这个个人站点是静态站点：没有账户、没有联系表单、没有第三方分析或广告追踪。",
      "updated": "最后更新：2026 年 11 月 8 日",
      "sections": [
        [
          "当前不收集任何数据",
          "现在不收集任何数据：不产生网络上报、不写入本地存储、不引入第三方统计或广告 SDK。浏览页面不会上传姓名、邮箱、设备信息、应用数据或文件内容。"
        ],
        [
          "将来可能收集的字段",
          "统计能力已写好但默认休眠。若将来开启，上报只会使用固定字段：五类匿名事件（page_view、product_view、cta_click、contact_click、page_error），以及短页面路径 p、语言 l、临时随机会话 s、秒级时间戳 t、来源域名 r、粗粒度设备大类 d。字段白名单之外的信息一律拒绝。"
        ],
        [
          "临时随机会话",
          "会话标识是 6–8 位临时随机值，只保存在当前标签页的会话级存储中，关闭标签即失效，并以 30 分钟 TTL 兜底；不跨设备、不跨会话关联，也不建立长期用户画像。"
        ],
        [
          "不采集的内容",
          "不采集设备指纹，不建立长期画像，不保存原始 IP 地址，不长期留存完整 User-Agent，也不读取 EnergyFlow、DeskHaven 或 ADHD Focus Timer 在设备上的数据。"
        ],
        [
          "托管基础日志",
          "托管服务可能为安全和故障排查产生基础技术日志，但我们不会保存原始 IP，也不会把这些日志与任何用户画像关联。"
        ],
        [
          "联系",
          "隐私问题可发送邮件至 3371436706@qq.com。请不要发送密码、私钥、身份证件或其它高度敏感内容。"
        ]
      ]
    }
  },
  "work": {
    "eyebrow": "作品",
    "title": "作品",
    "intro": "我创造的软件、正在做的实验，以及持续探索的方向。",
    "typeLabels": {
      "software": "软件",
      "prototype": "原型",
      "experiment": "实验",
      "research": "研究",
      "visual": "视觉"
    },
    "statusLabels": {
      "released": "已发布",
      "in-progress": "进行中",
      "prototype": "原型",
      "paused": "已暂停",
      "archived": "已归档"
    },
    "emptyLabel": "暂无内容。",
    "viewLabel": "查看详情"
  },
  "now": {
    "eyebrow": "近况",
    "title": "近况",
    "intro": "这里记录我当下在做什么、在学什么。暂时还没有可分享的进展。",
    "buildingTitle": "正在做",
    "exploringTitle": "正在探索",
    "learningTitle": "正在学习",
    "progressTitle": "最近进展",
    "updatedLabel": "最后更新",
    "emptyLabel": "暂无内容。",
    "lastUpdated": "2026 年 11 月 8 日"
  }
} as const;

const enNav = {
  "home": "Home",
  "about": "About",
  "products": "Products",
  "contact": "Contact",
  "language": "Select language",
  "work": "Work",
  "now": "Now"
} as const;

const enCopy = {
  "common": {
    "productPromise": "Product details",
    "experienceFlow": "Workflow",
    "productIndex": "Products",
    "operatingPrinciples": "Principles",
    "designPrinciples": "Design notes",
    "step": "Step",
    "viewProducts": "View products",
    "contact": "Contact",
    "getUpdates": "Contact",
    "microsoftStore": "Microsoft Store",
    "privacy": "Privacy policy",
    "backToProducts": "Back to products",
    "viewWork": "View work",
    "backToWork": "Back to work"
  },
  "home": {
    "heroEyebrow": "Independent creator",
    "heroTitle": "Chicken Fillet",
    "heroSubtitle": "Building things. Exploring ideas. Looking further.",
    "heroPrimary": "View selected work",
    "heroSecondary": "About me",
    "introTitle": "Introduction",
    "introBody": "I'm an independent creator interested in software, technology, AI, robotics, and space exploration. This is where I share the things I build, the experiments I work on, and the ideas I'm exploring.",
    "worksTitle": "Selected Work",
    "worksSubtitle": "Three released desktop apps, available on the Microsoft Store.",
    "approachTitle": "Approach",
    "approachItems": [
      {
        "title": "Start from a real problem",
        "body": "Find a frustration that actually exists before deciding what to build."
      },
      {
        "title": "Make the idea real",
        "body": "I'd rather ship something you can open and use than leave it as a concept."
      },
      {
        "title": "Keep it simple",
        "body": "Quiet interfaces, effort spent on features people use, no decorative clutter."
      },
      {
        "title": "Keep exploring",
        "body": "Stay curious about new tools and directions, learning and refining as I go."
      },
      {
        "title": "Local-first & privacy",
        "body": "Keep important data on your own device and let you decide what is stored or exported."
      }
    ],
    "areasTitle": "Areas of Interest",
    "areasSubtitle": "Directions I keep coming back to and want to explore further - not finished results.",
    "areas": [
      {
        "title": "Software & Creation",
        "body": "Software, tools, interaction design, and independent development - turning ideas into things people can actually use."
      },
      {
        "title": "AI & Robotics",
        "body": "Artificial intelligence, automation, robotics, and intelligent systems, and how they fit into everyday work."
      },
      {
        "title": "Space & Exploration",
        "body": "The Moon, Mars, spaceflight, living in space, and simulation - staying curious about what lies further out."
      }
    ],
    "focusTitle": "Current Focus",
    "focusBody": "This is where I'll note what I'm working on recently. Nothing to share here yet.",
    "focusEmpty": "Nothing here yet.",
    "eyebrow": "Independent work",
    "title": "Things I've built",
    "intro": "Windows desktop apps I've built independently. Each product page shows real screens, features, and a Microsoft Store link, so you can decide before installing.",
    "primary": "View work",
    "secondary": "About me",
    "currentProduct": "Now showing",
    "notes": [
      [
        "Real screens",
        "Product pages use app screenshots and posters, not abstract mockups."
      ],
      [
        "Local-first",
        "Important data is designed to stay on your Windows device first."
      ],
      [
        "Honest screens",
        "Screenshots and feature notes come from the released versions."
      ],
      [
        "Direct download",
        "Each product page links to its Microsoft Store listing."
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "Record energy and work state.",
        "body": "Log energy level, work state, sources, and mood, then review changes with trends and statistics.",
        "bullets": [
          "5-level energy state",
          "Work context",
          "Pearson + Chi-square",
          "Local privacy"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "Organize local files.",
        "body": "Move scattered files into a searchable, archivable, recoverable local workspace with relationship views.",
        "bullets": [
          "File vault",
          "Relationship map",
          "Backup",
          "AES-256"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "Set up a focus session.",
        "body": "Use generated ambient sound, sound mixing, forward timing, idea capture, and stats for a complete focus session.",
        "bullets": [
          "Forward timer",
          "Breathing guide",
          "Idea Fridge",
          "Local privacy"
        ]
      }
    ],
    "principlesTitle": "Only the useful details.",
    "principlesBody": "The site stays focused on the work itself: what it does, how it looks, how it handles data, and where to get it.",
    "productTitle": "Released apps.",
    "studioTitle": "About me",
    "studioBody": "Not a marketplace and not a dev journal. It collects the apps I've shipped and the information worth checking before installing.",
    "studioNote": "EnergyFlow, DeskHaven, and ADHD Focus Timer cover energy logging, local file organization, and focus timing."
  },
  "products": {
    "eyebrow": "Products",
    "title": "Released Windows apps.",
    "intro": "Each product page includes real screenshots, core features, privacy policy, legal terms, and a Microsoft Store link."
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "Workplace energy dashboard",
      "description": "Track energy, mood, pressure, and activity, then review long-term changes in timelines and reports.",
      "status": "Released"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "Desktop file haven",
      "description": "Organize local files, archive content, view relationships, and keep backup and privacy controls close.",
      "status": "Released"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "Immersive focus timer",
      "description": "Use ambient sound, forward timing, idea capture, and session stats to complete a focus flow.",
      "status": "Released"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / Workplace Energy Dashboard",
    "title": "Track energy changes and see what work really costs.",
    "intro": "EnergyFlow turns a quick check-in into useful history: energy level, work state, recovery source, and mood. Over time, trends and statistics help reveal which meetings, tasks, and routines affect your energy.",
    "status": "Available",
    "promiseTitle": "Not a to-do list. A record of your working energy.",
    "promise": "EnergyFlow does not judge whether you worked hard enough. It helps turn daily feelings into a timeline you can review, so patterns around recovery, drain, and schedule choices become easier to see.",
    "features": [
      [
        "Three-second logging",
        "Record energy level, work status, energy source, and mood with a short flow."
      ],
      [
        "Dark or light clarity",
        "Deep mode for focus and light mode for daytime work, without loud interface noise."
      ],
      [
        "Always on desktop",
        "A floating entry and hotkey make logging appear, record, and disappear without breaking flow."
      ],
      [
        "Statistical insight",
        "Pearson correlation and Chi-square analysis help reveal which contexts really affect energy."
      ],
      [
        "Privacy protection",
        "Energy state data is sensitive. EnergyFlow is designed with local-first privacy as the default."
      ]
    ],
    "flow": [
      "Capture state",
      "Accumulate context",
      "Review energy patterns",
      "Adjust work rhythm"
    ],
    "gallery": {
      "eyebrow": "Real interface",
      "title": "See how EnergyFlow moves from quick logging to useful review.",
      "body": "Thirteen real screens cover local access, quick and multimedia records, breathing, timeline, analysis, reminders, and encrypted backups."
    },
    "flowIntro": {
      "title": "From one quick log to an adjustable work rhythm.",
      "body": "EnergyFlow does not ask you to manage your life again. It keeps the capture lightweight, then turns repeated check-ins into a clearer view of meetings, context switches, recovery, and drain.",
      "cardTitle": "Flow principle",
      "cardBody": "The lighter the log, the more likely the habit survives. The steadier the record, the easier it is to see how work context and energy influence each other."
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / 1.5.0",
    "title": "Turn your desktop into a workspace you control.",
    "intro": "DeskHaven 1.5.0 brings desktop files, a space workbench, local archival, and a private vault into one local workspace: overview, organizing, encryption, and duplicate cleanup all happen on your machine.",
    "status": "Available",
    "promiseTitle": "Not more folders. A desktop that is orderly, findable, and recoverable.",
    "promise": "A space workbench holds everyday files, a dashboard gives the whole picture, a local archive and private vault keep things secure, and duplicate cleanup frees up storage.",
    "features": [
      [
        "Dashboard overview",
        "See the desktop at a glance: file count, storage trends, encryption state, and recent changes in one summary."
      ],
      [
        "Space workbench",
        "Browse files, notes, stats, and recent activity from one workbench, so you see the full picture before organizing."
      ],
      [
        "Local file library",
        "Documents, images, and exports stay on your device, always under your control."
      ],
      [
        "Duplicate cleanup",
        "Spot duplicates and files waiting to be sorted, with clear suggestions that keep storage tidy."
      ],
      [
        "Private vault",
        "Protect important files with PIN and Windows Hello encryption, archived locally and ready to recover."
      ]
    ],
    "principles": [
      [
        "Local-first",
        "Important files and indexes are handled locally by default."
      ],
      [
        "Controlled",
        "Users should know where files are and how to recover them."
      ],
      [
        "Relational",
        "Projects, tags, and content connections should be understandable."
      ],
      [
        "Direct",
        "Organization should stay understandable and easy to maintain."
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 2.7.0",
    "title": "A calmer setup for sustained focus.",
    "intro": "The new ADHD Focus Timer is built for people who are easily interrupted by noise, stray thoughts, and countdown pressure. Real-time soundscapes, breathing transitions, forward timing, Idea Fridge, and cumulative stats help you enter and hold focus more gently.",
    "status": "Available",
    "promiseTitle": "It does not push you to rush. It lowers the cost of starting.",
    "promise": "Version 2.7.0 keeps sound, timing, temporary thoughts, stats, and goal links in one focus flow. Sound is generated locally with Web Audio, so the app no longer carries huge audio files.",
    "features": [
      [
        "Fullscreen focus timer",
        "Choose a duration and start a quiet fullscreen session with progress kept clearly in view."
      ],
      [
        "Build your sound environment",
        "Mix rain, wind, waves, and birdsong, then enable spatial audio or a completion chime when useful."
      ],
      [
        "Capture thoughts without leaving focus",
        "Save a passing thought as text or a voice note without leaving the active timer."
      ],
      [
        "Link sessions to a goal",
        "Write down what matters now, connect the session to a goal, and keep the next step visible."
      ],
      [
        "Local history and privacy",
        "Focus records and preferences stay on the device; review duration, sessions, and history after finishing."
      ]
    ],
    "galleryEyebrow": "Interface screenshots",
    "galleryTitle": "ADHD Focus Timer interface",
    "galleryIntro": "These 2.7.0 screens show focus setup, breathing, the active timer, Idea Fridge, and goal linking.",
    "galleryItems": [
      [
        "Focus setup and sound mixer",
        "Choose a 5–180 minute duration, enable breathing guidance, and set each ambient sound independently."
      ],
      [
        "Breathing guidance",
        "Follow the halo through a steady transition before the focus timer begins."
      ],
      [
        "Fullscreen count-up timer",
        "Build focused time from zero with pause and Idea Fridge controls always available."
      ],
      [
        "Idea Fridge",
        "Save a passing thought as text or voice without interrupting the current session."
      ],
      [
        "Goal linking",
        "Write down what matters now, attach the session to a goal, and keep the current task and next step visible."
      ]
    ]
  },
  "about": {
    "title": "About",
    "intro": "I'm an independent creator interested in software, technology, AI, robotics, and space exploration.",
    "sectionLabels": {
      "introduction": "Introduction",
      "background": "Background",
      "interests": "Interests",
      "approach": "Approach",
      "futureDirection": "Future Direction"
    },
    "introduction": "This is my personal site: a place for the things I build, the experiments I work on, and the ideas I keep exploring. Most of it is software, along with directions that are still taking shape.",
    "background": [
      "I build and release Windows desktop apps independently; EnergyFlow, DeskHaven, and ADHD Focus Timer are all available on the Microsoft Store.",
      "When I make something, I care about real interfaces, real features, and keeping data local and private.",
      "I maintain the site, the apps, and the writing myself."
    ],
    "interests": [
      "Software, tools, and interaction design",
      "AI, automation, and robotics",
      "The Moon, Mars, spaceflight, and space exploration"
    ],
    "approach": "I like to start from a real problem, turn the idea into something usable, then refine it slowly. Interfaces stay quiet, data stays local, and I don't add features just for the sake of it.",
    "futureDirection": "I want to keep exploring AI and robotics, space-related simulations and tools, and turn more experiments into things people can actually use. These are directions I'm moving toward, not finished results.",
    "contactTitle": "Contact",
    "contactButton": "Send an email",
    "story": [
      "I keep the software I've built, the experiments I'm trying, and the directions I want to explore in one place.",
      "EnergyFlow, DeskHaven, and ADHD Focus Timer are three desktop apps I've released.",
      "Pages lean on real interfaces and clear explanations rather than concept art."
    ],
    "techTitle": "Technical interests",
    "tech": [
      "Windows desktop apps",
      "Local-first storage",
      "Statistics and visualization",
      "Privacy-conscious product design"
    ],
    "ctaTitle": "Want to say hello?",
    "ctaDescription": "Product feedback, ideas, or just a hello - email works for all of it.",
    "ctaButton": "Send an email",
    "philosophyTitle": "How I work",
    "philosophy": [
      [
        "Real",
        "Show actual interfaces and real behavior, not concept art."
      ],
      [
        "Clear",
        "Put the information people need in predictable places."
      ],
      [
        "Restrained",
        "Keep decoration low and give the content room."
      ],
      [
        "Verifiable",
        "Links and documentation are directly accessible."
      ]
    ]
  },
  "contact": {
    "title": "Contact",
    "intro": "Product feedback, ideas, or any questions can go to the address below.",
    "infoTitle": "Contact information",
    "email": "Email"
  },
  "footer": {
    "subtitle": "A personal space for things I build, ideas I explore, and technologies I'm curious about.",
    "studio": "Site",
    "products": "Products",
    "legal": "Legal",
    "about": "About",
    "contact": "Contact",
    "privacy": "Privacy Policy",
    "copyright": "© 2026 Chicken Fillet. All rights reserved."
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "This page does not exist, or the link has moved.",
      "button": "Back home"
    },
    "websitePrivacy": {
      "title": "Website Privacy",
      "intro": "We currently collect no data. The analytics capability is built but dormant and off by default, so no data collection takes place. This is a static personal site: no accounts, no contact forms, no third-party analytics or ad tracking.",
      "updated": "Last updated: November 8, 2026",
      "sections": [
        [
          "We currently collect no data",
          "No data is collected today: no network reports, no local storage writes, no third-party analytics or advertising SDKs. Browsing the site does not upload names, email addresses, device details, app data, or file contents."
        ],
        [
          "What we may collect in the future",
          "The analytics capability is written but dormant by default. If it is ever enabled, reports would use a fixed schema only: five anonymous event types (page_view, product_view, cta_click, contact_click, page_error) plus a short page path p, locale l, a temporary random session s, a second-level timestamp t, a referrer domain r, and a coarse device category d. Any field outside that whitelist is rejected."
        ],
        [
          "Temporary random session",
          "The session id is a 6-8 character temporary random value kept only in session-level storage for the current tab. It expires when the tab closes, with a 30-minute TTL as a fallback. It is never linked across devices or sessions and never builds a long-term profile."
        ],
        [
          "What we do not collect",
          "We do not collect device fingerprints, do not build long-term profiles, do not store raw IP addresses, do not retain full User-Agent strings, and do not read data held by EnergyFlow, DeskHaven, or ADHD Focus Timer on your device."
        ],
        [
          "Basic hosting logs",
          "The hosting service may produce basic technical logs for security and troubleshooting, but raw IP addresses are not stored and those logs are never tied to a user profile."
        ],
        [
          "Contact",
          "For privacy questions, email 3371436706@qq.com. Please avoid sending passwords, private keys, identity documents, or other highly sensitive material."
        ]
      ]
    }
  },
  "work": {
    "eyebrow": "Work",
    "title": "Work",
    "intro": "The software I build, the experiments I work on, and the ideas I explore.",
    "typeLabels": {
      "software": "Software",
      "prototype": "Prototypes",
      "experiment": "Experiments",
      "research": "Research",
      "visual": "Visual Work"
    },
    "statusLabels": {
      "released": "Released",
      "in-progress": "In progress",
      "prototype": "Prototype",
      "paused": "Paused",
      "archived": "Archived"
    },
    "emptyLabel": "Nothing here yet.",
    "viewLabel": "View details"
  },
  "now": {
    "eyebrow": "Now",
    "title": "Now",
    "intro": "A place for what I'm currently building, exploring, and learning. No updates to share yet.",
    "buildingTitle": "Currently Building",
    "exploringTitle": "Currently Exploring",
    "learningTitle": "Currently Learning",
    "progressTitle": "Recent Progress",
    "updatedLabel": "Last updated",
    "emptyLabel": "Nothing here yet.",
    "lastUpdated": "November 8, 2026"
  }
} as const;

const frNav = {
  "home": "Accueil",
  "about": "À propos",
  "products": "Produits",
  "contact": "Contact",
  "language": "Choisir la langue",
  "work": "Travaux",
  "now": "Actuellement"
} as const;

const frCopy = {
  "common": {
    "productPromise": "Détails du produit",
    "experienceFlow": "Parcours",
    "productIndex": "Entrée produits",
    "operatingPrinciples": "Principes",
    "designPrinciples": "Notes de design",
    "step": "Étape",
    "viewProducts": "Voir les produits",
    "contact": "Contact",
    "getUpdates": "Contact",
    "microsoftStore": "Microsoft Store",
    "privacy": "Confidentialité",
    "backToProducts": "Retour aux produits",
    "viewWork": "Voir les travaux",
    "backToWork": "Retour aux travaux"
  },
  "home": {
    "heroEyebrow": "Créateur indépendant",
    "heroTitle": "Chicken Fillet",
    "heroSubtitle": "Créer des choses. Explorer des idées. Regarder plus loin.",
    "heroPrimary": "Voir les projets",
    "heroSecondary": "À propos de moi",
    "introTitle": "Introduction",
    "introBody": "Je suis un créateur indépendant passionné par les logiciels, la technologie, l'IA, la robotique et l'exploration spatiale. Ce site rassemble ce que je crée, les expériences en cours et les idées que j'explore.",
    "worksTitle": "Travaux choisis",
    "worksSubtitle": "Trois applications de bureau publiées, disponibles sur le Microsoft Store.",
    "approachTitle": "Approche",
    "approachItems": [
      {
        "title": "Partir d'un problème réel",
        "body": "Repérer une difficulté bien réelle avant de décider quoi construire."
      },
      {
        "title": "Donner vie aux idées",
        "body": "Je préfère livrer quelque chose que l'on peut ouvrir et utiliser plutôt que de rester au stade de concept."
      },
      {
        "title": "Rester simple",
        "body": "Des interfaces discrètes, l'effort sur les fonctions utiles, sans superflu décoratif."
      },
      {
        "title": "Explorer sans relâche",
        "body": "Rester curieux des nouveaux outils et des nouvelles pistes, apprendre et affiner en avançant."
      },
      {
        "title": "Local d'abord et confidentialité",
        "body": "Garder les données importantes sur l'appareil et laisser chacun décider de ce qu'il stocke ou exporte."
      }
    ],
    "areasTitle": "Domaines d'intérêt",
    "areasSubtitle": "Des pistes qui me reviennent souvent et que je veux approfondir - pas des résultats achevés.",
    "areas": [
      {
        "title": "Software & Creation",
        "body": "Logiciels, outils, design d'interaction et développement indépendant - transformer des idées en outils réellement utilisables."
      },
      {
        "title": "AI & Robotics",
        "body": "Intelligence artificielle, automatisation, robotique et systèmes intelligents, et la place qu'ils prennent dans le quotidien."
      },
      {
        "title": "Space & Exploration",
        "body": "La Lune, Mars, l'astronautique, la vie dans l'espace et la simulation - rester curieux de ce qui se trouve plus loin."
      }
    ],
    "focusTitle": "Focus actuel",
    "focusBody": "Cet espace accueillera ce sur quoi je travaille en ce moment. Rien à partager pour l'instant.",
    "focusEmpty": "Rien pour le moment.",
    "eyebrow": "Création indépendante",
    "title": "Ce que j'ai créé",
    "intro": "Des applications Windows développées en indépendant. Chaque page produit montre de vrais écrans, les fonctions et le lien Microsoft Store, pour choisir avant d'installer.",
    "primary": "Voir les travaux",
    "secondary": "À propos de moi",
    "currentProduct": "À l'écran",
    "notes": [
      [
        "Écrans réels",
        "Les pages utilisent des captures et affiches du produit, pas des visuels abstraits."
      ],
      [
        "Local d'abord",
        "Les données importantes sont pensées pour rester d'abord sur l'appareil Windows."
      ],
      [
        "Des écrans fidèles",
        "Les captures et les fonctions correspondent aux versions publiées."
      ],
      [
        "Téléchargement direct",
        "Chaque page produit mène à sa fiche Microsoft Store."
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "Enregistrer énergie et contexte.",
        "body": "Notez énergie, état de travail, sources et humeur, puis relisez les tendances.",
        "bullets": [
          "5 niveaux",
          "Contexte de travail",
          "Corrélation + khi carré",
          "Vie privée locale"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "Organiser les fichiers locaux.",
        "body": "Regroupez les fichiers dans un espace local consultable, archivable et récupérable.",
        "bullets": [
          "Espace local",
          "Carte de relations",
          "Coffre",
          "AES-256"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "Préparer une session de focus.",
        "body": "Utilisez sons générés, mixage, timer progressif, capture d'idées et statistiques.",
        "bullets": [
          "Chronomètre progressif",
          "Respiration",
          "Idea Fridge",
          "Vie privée locale"
        ]
      }
    ],
    "principlesTitle": "Les informations utiles, simplement.",
    "principlesBody": "Le site reste centré sur le travail lui-même : ce qu'il fait, son interface, son traitement des données et son point d'installation.",
    "productTitle": "Applications publiées.",
    "studioTitle": "À propos de moi",
    "studioBody": "Ni marketplace ni journal de développement. Ce site rassemble les applications que j'ai publiées et les informations à vérifier avant installation.",
    "studioNote": "EnergyFlow, DeskHaven et ADHD Focus Timer couvrent le suivi d'énergie, l'organisation locale des fichiers et le focus."
  },
  "products": {
    "eyebrow": "Produits",
    "title": "Applications Windows publiées.",
    "intro": "Chaque page produit réunit captures réelles, fonctions, confidentialité, conditions légales et lien Microsoft Store."
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "Tableau d'énergie au travail",
      "description": "Notez énergie, humeur, pression et activité, puis relisez leur évolution dans la chronologie et les rapports.",
      "status": "Publié"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "Havre de fichiers desktop",
      "description": "Organisez les fichiers locaux, archivez, visualisez les relations, sauvegardez et gardez le contrôle.",
      "status": "Publié"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "Minuteur de concentration immersif",
      "description": "Utilisez sons ambiants, timer progressif, capture d'idées et statistiques pour suivre une session.",
      "status": "Publié"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / Tableau d'énergie au travail",
    "title": "Comprendre où va votre énergie de travail.",
    "intro": "Enregistrez en quelques secondes votre niveau d'énergie, le contexte, la source et l'humeur.",
    "status": "Disponible",
    "promiseTitle": "Pas une autre app de tâches, mais un tableau pour votre rythme.",
    "promise": "EnergyFlow aide à voir le coût réel des réunions, heures longues, travail profond et pauses.",
    "features": [
      [
        "Journal en trois secondes",
        "Enregistrez énergie, état, source et humeur avec un parcours court."
      ],
      [
        "Clarté sombre ou claire",
        "Modes sobres pour concentration ou travail de jour."
      ],
      [
        "Présent sur le bureau",
        "Entrée flottante et raccourci sans casser le flux."
      ],
      [
        "Analyse statistique",
        "Corrélations et khi carré révèlent les contextes qui comptent."
      ],
      [
        "Confidentialité",
        "Les données d'énergie restent pensées localement par défaut."
      ]
    ],
    "flow": [
      "Capturer l'état",
      "Accumuler le contexte",
      "Lire les tendances",
      "Ajuster le rythme"
    ],
    "gallery": {
      "eyebrow": "Interface réelle",
      "title": "Voir l'ensemble des écrans EnergyFlow.",
      "body": "Treize écrans réels présentent l’accès local, les relevés rapides et multimédias, la respiration, la chronologie, les analyses, les rappels et les sauvegardes chiffrées."
    },
    "flowIntro": {
      "title": "D’un relevé rapide à un rythme de travail ajustable.",
      "body": "EnergyFlow n’ajoute pas une couche de gestion. Un court relevé devient une trace à relire : ce qui s’est passé, où l’énergie a changé, et quels schémas de travail méritent d’être ajustés.",
      "cardTitle": "Principe du flux",
      "cardBody": "Plus la saisie est légère, plus l’habitude tient. Plus les données sont régulières, plus le lien entre contexte de travail et énergie devient visible."
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / 1.5.0",
    "title": "Faites de votre bureau un espace que vous contrôlez.",
    "intro": "DeskHaven 1.5.0 réunit fichiers de bureau, espace de travail, archives locales et coffre privé dans un même espace local : vue d'ensemble, organisation, chiffrement et doublons se gèrent sur votre machine.",
    "status": "Disponible",
    "promiseTitle": "Pas un dossier de plus. Un bureau ordonné, retrouvable et récupérable.",
    "promise": "L'espace de travail porte les fichiers du quotidien, le tableau donne la vision globale, l'archive locale et le coffre privé assurent la sécurité, et le nettoyage des doublons libère de l'espace.",
    "features": [
      [
        "Vue d'ensemble",
        "Aperçu du bureau en un coup d'œil : nombre de fichiers, tendances du stockage, état du chiffrement et changements récents en une seule synthèse."
      ],
      [
        "Espace de travail",
        "Parcourez fichiers, notes, statistiques et activité récente depuis un même espace, afin d'avoir la vision complète avant de ranger."
      ],
      [
        "Archive locale",
        "Documents, images et exports restent sur votre appareil, toujours sous votre contrôle."
      ],
      [
        "Nettoyage des doublons",
        "Repérez les doublons et les fichiers à classer avec des suggestions claires qui gardent le stockage propre."
      ],
      [
        "Coffre privé",
        "Protégez les fichiers importants par chiffrement PIN et Windows Hello, archivés en local et prêts à récupérer."
      ]
    ],
    "principles": [
      [
        "Local-first",
        "Les fichiers importants sont traités localement par défaut."
      ],
      [
        "Contrôlé",
        "L'utilisateur sait où sont les fichiers et comment les récupérer."
      ],
      [
        "Relationnel",
        "Les liens entre projets, tags et contenus restent visibles."
      ],
      [
        "Entretien simple",
        "L'organisation reste lisible et facile à maintenir."
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 2.7.0",
    "title": "Une entrée plus calme vers une concentration durable.",
    "intro": "Le nouveau ADHD Focus Timer s'adresse aux personnes facilement interrompues par le bruit, les pensées soudaines et la pression du compte à rebours. Ambiances sonores en temps réel, respiration, chronométrage progressif, Idea Fridge et statistiques cumulées aident à entrer dans le focus plus doucement.",
    "status": "Disponible",
    "promiseTitle": "Il ne vous pousse pas à vous dépêcher. Il réduit le coût du départ.",
    "promise": "La version 2.7.0 réunit dans un seul flux de concentration le son, le minuteur, les pensées temporaires, les statistiques et la liaison à un objectif. L'audio est généré localement avec Web Audio, sans gros fichiers intégrés.",
    "features": [
      [
        "Minuteur de concentration plein écran",
        "Choisissez une durée dans une interface immersive en plein écran, avec une progression toujours claire."
      ],
      [
        "Composez votre ambiance sonore",
        "Mélangez pluie, vent, vagues et chants d'oiseaux, puis activez l'audio spatial ou le signal de fin selon vos besoins."
      ],
      [
        "Notez une idée sans quitter la session",
        "Enregistrez une pensée en texte ou en note vocale sans interrompre la session en cours."
      ],
      [
        "Reliez à un objectif",
        "Écrivez ce qui compte maintenant et reliez la session à un objectif pour garder la tâche et l'étape suivante visibles."
      ],
      [
        "Historique local et confidentialité",
        "Les sessions et préférences restent sur l'appareil ; consultez ensuite les durées, le nombre de sessions et les tendances."
      ]
    ],
    "galleryEyebrow": "Captures de l'interface",
    "galleryTitle": "Interface d'ADHD Focus Timer",
    "galleryIntro": "Ces écrans de la version 2.7.0 montrent les réglages de concentration, le guide respiratoire, le minuteur, l'Idea Fridge et la liaison à un objectif.",
    "galleryItems": [
      [
        "Réglages de concentration et mixage sonore",
        "Choisissez une durée de 5 à 180 minutes, activez la respiration et réglez chaque son d'ambiance séparément."
      ],
      [
        "Guide respiratoire",
        "Suivez le halo pour retrouver un rythme régulier avant le début du minuteur."
      ],
      [
        "Minuteur progressif plein écran",
        "Comptez le temps depuis zéro, avec Pause et Idea Fridge toujours accessibles."
      ],
      [
        "Idea Fridge",
        "Conservez une pensée en texte ou en audio sans interrompre la session."
      ],
      [
        "Liaison à un objectif",
        "Écrivez ce qui compte maintenant et reliez la session à un objectif pour garder la tâche et l'étape suivante visibles."
      ]
    ]
  },
  "about": {
    "title": "À propos",
    "intro": "Je suis un créateur indépendant intéressé par les logiciels, la technologie, l'IA, la robotique et l'exploration spatiale.",
    "sectionLabels": {
      "introduction": "Introduction",
      "background": "Parcours",
      "interests": "Centres d'intérêt",
      "approach": "Approche",
      "futureDirection": "Directions futures"
    },
    "introduction": "Voici mon site personnel : un lieu pour ce que je crée, les expériences en cours et les idées que j'aime explorer. L'essentiel reste le logiciel, avec aussi des pistes encore en gestation.",
    "background": [
      "Je développe et publie des applications Windows en indépendant ; EnergyFlow, DeskHaven et ADHD Focus Timer sont toutes disponibles sur le Microsoft Store.",
      "Quand je crée quelque chose, je tiens aux vraies interfaces, aux vraies fonctions et aux données qui restent locales et privées.",
      "J'entretiens moi-même le site, les applications et les textes."
    ],
    "interests": [
      "Logiciels, outils et design d'interaction",
      "IA, automatisation et robotique",
      "La Lune, Mars, l'astronautique et l'exploration spatiale"
    ],
    "approach": "J'aime partir d'un problème réel, transformer l'idée en quelque chose d'utilisable, puis l'affiner peu à peu. Les interfaces restent sobres, les données restent locales, et je n'ajoute pas de fonctions pour la galerie.",
    "futureDirection": "Je veux continuer à explorer l'IA et la robotique, les simulations et les outils liés à l'espace, et transformer davantage d'expériences en réalisations utilisables. Ce sont des pistes vers lesquelles j'avance, pas des résultats achevés.",
    "contactTitle": "Contact",
    "contactButton": "Envoyer un e-mail",
    "story": [
      "Je réunis au même endroit les logiciels créés, les expériences en cours et les pistes à explorer.",
      "EnergyFlow, DeskHaven et ADHD Focus Timer sont trois applications de bureau que j'ai publiées.",
      "Les pages s'appuient sur de vraies interfaces et des explications claires plutôt que sur des maquettes."
    ],
    "techTitle": "Centres d'intérêt techniques",
    "tech": [
      "Windows desktop apps",
      "Local-first storage",
      "Statistics and visualization",
      "Privacy-conscious product design"
    ],
    "ctaTitle": "On échange ?",
    "ctaDescription": "Retours produit, idées ou simplement un bonjour - tout passe par e-mail.",
    "ctaButton": "Envoyer un e-mail",
    "philosophyTitle": "Façon de travailler",
    "philosophy": [
      [
        "Réel",
        "Montrer de vraies interfaces et de vrais comportements, pas des maquettes."
      ],
      [
        "Clair",
        "Placer les informations utiles à des endroits prévisibles."
      ],
      [
        "Sobre",
        "Limiter le décor et laisser la place au contenu."
      ],
      [
        "Vérifiable",
        "Rendre liens et documents directement accessibles."
      ]
    ]
  },
  "contact": {
    "title": "Contact",
    "intro": "Retours produit, idées ou questions peuvent aller à l'adresse ci-dessous.",
    "infoTitle": "Coordonnées",
    "email": "E-mail"
  },
  "footer": {
    "subtitle": "Un espace personnel pour ce que je crée, les idées que j'explore et les technologies qui me rendent curieux.",
    "studio": "Site",
    "products": "Produits",
    "legal": "Mentions",
    "about": "À propos",
    "contact": "Contact",
    "privacy": "Confidentialité",
    "copyright": "© 2026 Chicken Fillet. Tous droits réservés."
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "Cette page n’existe pas ou le lien a changé.",
      "button": "Retour aux produits"
    },
    "websitePrivacy": {
      "title": "Confidentialité du site",
      "intro": "Aucune donnée n'est collectée actuellement. La capacité d'analyse est écrite mais dormante et désactivée par défaut : aucune collecte n'a lieu. Ce site personnel est statique : aucun compte, aucun formulaire de contact, aucune analyse tierce ni suivi publicitaire.",
      "updated": "Dernière mise à jour : 8 novembre 2026",
      "sections": [
        [
          "Aucune donnée n'est collectée actuellement",
          "Aucune donnée n'est collectée aujourd'hui : aucun envoi réseau, aucune écriture en stockage local, aucun SDK tiers d'analyse ou publicitaire. La navigation n'envoie aucun nom, adresse e-mail, détail d'appareil, donnée d'application ni contenu de fichier."
        ],
        [
          "Données susceptibles d'être collectées à l'avenir",
          "La capacité d'analyse est écrite mais dormante par défaut. Si elle est un jour activée, les rapports n'utiliseront qu'un schéma fixe : cinq types d'événements anonymes (page_view, product_view, cta_click, contact_click, page_error) plus un chemin de page court p, la langue l, une session aléatoire temporaire s, un horodatage en secondes t, un domaine référent r et une catégorie d'appareil grossière d. Tout champ hors de cette liste blanche est rejeté."
        ],
        [
          "Session aléatoire temporaire",
          "L'identifiant de session est une valeur aléatoire temporaire de 6 à 8 caractères, conservée uniquement dans le stockage de session de l'onglet courant. Il expire à la fermeture de l'onglet, avec un TTL de 30 minutes en filet de sécurité. Il n'est relié ni aux appareils ni aux autres sessions et ne construit aucun profil durable."
        ],
        [
          "Ce que nous ne collectons pas",
          "Nous ne relevons pas d'empreinte d'appareil, ne construisons pas de profil durable, ne conservons pas les adresses IP brutes, ne conservons pas les User-Agent complets et ne lisons pas les données conservées sur votre appareil par EnergyFlow, DeskHaven ou ADHD Focus Timer."
        ],
        [
          "Journaux d'hébergement",
          "L'hébergeur peut produire des journaux techniques de base pour la sécurité et le diagnostic, mais les adresses IP brutes ne sont pas conservées et ces journaux ne sont jamais associés à un profil utilisateur."
        ],
        [
          "Contact",
          "Pour toute question de confidentialité, écrivez à 3371436706@qq.com. Évitez d'envoyer des mots de passe, clés privées, documents d'identité ou autres contenus très sensibles."
        ]
      ]
    }
  },
  "work": {
    "eyebrow": "Travaux",
    "title": "Travaux",
    "intro": "Les logiciels que je crée, les expériences en cours et les idées que j'explore.",
    "typeLabels": {
      "software": "Logiciels",
      "prototype": "Prototypes",
      "experiment": "Expériences",
      "research": "Recherche",
      "visual": "Travaux visuels"
    },
    "statusLabels": {
      "released": "Publié",
      "in-progress": "En cours",
      "prototype": "Prototype",
      "paused": "En pause",
      "archived": "Archivé"
    },
    "emptyLabel": "Rien pour le moment.",
    "viewLabel": "Voir les détails"
  },
  "now": {
    "eyebrow": "Actuellement",
    "title": "En ce moment",
    "intro": "Un espace pour ce que je construis, explore et apprends en ce moment. Aucune actualité à partager pour l'instant.",
    "buildingTitle": "En cours de création",
    "exploringTitle": "En exploration",
    "learningTitle": "En apprentissage",
    "progressTitle": "Progrès récents",
    "updatedLabel": "Dernière mise à jour",
    "emptyLabel": "Rien pour le moment.",
    "lastUpdated": "8 novembre 2026"
  }
} as const;

export type SiteCopy = WidenCopy<typeof enCopy>;

export const navCopy = {
  "zh": zhNav,
  "en": enNav,
  "fr": frNav,
} as const satisfies Record<Locale, NavCopy>;

export const siteCopy = {
  "zh": zhCopy,
  "en": enCopy,
  "fr": frCopy,
} as const satisfies Record<Locale, SiteCopy>;

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale] as SiteCopy;
}

export type EnergyFlowMediaItem = readonly [title: string, body: string];

export type EnergyFlowMediaCopy = {
  posters: readonly [EnergyFlowMediaItem, EnergyFlowMediaItem, EnergyFlowMediaItem, EnergyFlowMediaItem];
  screenshots: readonly [
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
    EnergyFlowMediaItem,
  ];
};

export const energyFlowMediaContent = {
  zh: {
    posters: [
      ["几秒完成一次记录", "精力、状态、影响因素和情绪在同一页选完，也可以补一段文字、一张图片或一段录音。"],
      ["按时间线回看每一次变化", "按日期翻看记录，也可以按状态、文字、语音、图片快速筛出想找的那条。"],
      ["私人记录只留在你的设备", "PIN 锁、防截屏和本地加密备份，保护你的精力与情绪数据。"],
      ["用报告理解消耗与恢复", "趋势、分布、压力与恢复分析，把长期记录变成看得懂的结论。"],
    ],
    screenshots: [
      ["本地加密解锁", "用四位 PIN 进入应用，私人记录只留在你的设备里。"],
      ["快速记录", "选好精力、状态、影响因素和情绪，几秒就能存一条。"],
      ["精力与情绪记录", "精力等级、当前状态、影响因素和情绪，一次记全。"],
      ["多媒体记录", "给记录附上文字、图片、录音，或加一段正念练习。"],
      ["正念呼吸", "停下手头的事，跟着呼吸节奏缓一缓。"],
      ["完整时间线", "按日期查看全部记录，每次状态变化的前后经过都在。"],
      ["搜索与分类筛选", "关键词、日期、内容类型，快速找到过去某条记录。"],
      ["分析报告总览", "几张关键指标和趋势图，看清近期的精力、稳定性与恢复。"],
      ["趋势与分布", "对比不同时段、星期和精力区间，看状态怎么变。"],
      ["压力与恢复分析", "找出常见的压力来源，以及对你真正有效的恢复方式。"],
      ["自定义标签与贴纸", "状态、影响因素、情绪和贴纸，都可以按自己的习惯改。"],
      ["提醒管理", "多个提醒、间隔计时和免打扰时段，随你设置。"],
      ["备份与数据管理", "导出、校验、恢复加密备份，也能生成可读的报告。"],
    ],
  },
  en: {
    posters: [
      ["Capture a complete check-in in seconds", "Choose energy, state, trigger, and mood on one screen, with optional text, images, or audio."],
      ["Review every change on a timeline", "Browse by date and filter by state, reflection, emoji, text, audio, or image."],
      ["Keep private records on your device", "PIN access, capture protection, and encrypted local backups protect personal energy and mood data."],
      ["Understand drain and recovery", "Trends, distributions, pressure, recovery, and correlation reports turn history into useful findings."],
    ],
    screenshots: [
      ["Local encrypted access", "Open EnergyFlow with a four-digit PIN and protect private records on the device."],
      ["Quick record", "Choose energy, work state, trigger, and mood, then save in seconds."],
      ["Energy and mood context", "Capture energy level, current state, influencing factors, and a fuller emotional picture."],
      ["Multimedia entries", "Add text, an image, audio, or a mindful pause to an entry."],
      ["Mindful breathing", "Pause inside the app and follow a steady breathing rhythm before continuing."],
      ["Complete timeline", "Review every entry by date while keeping the context around each change."],
      ["Search and filters", "Find earlier entries with keywords, date ranges, and content-type filters."],
      ["Analytics overview", "Read recent energy, stability, recovery, and trend indicators at a glance."],
      ["Trends and distribution", "Compare periods, days, and energy ranges to see how your state changes."],
      ["Pressure and recovery", "Identify recurring pressure sources, recovery methods, and work-recovery balance."],
      ["Custom labels and stickers", "Adapt states, triggers, emotions, and stickers to your own routines."],
      ["Reminder management", "Create multiple reminders, interval timers, and do-not-disturb periods."],
      ["Backup and data control", "Export, verify, and restore encrypted backups, or generate a readable report."],
    ],
  },
  fr: {
    posters: [
      ["Un relevé complet en quelques secondes", "Choisissez énergie, état, facteur et humeur sur un seul écran, avec texte, image ou audio en option."],
      ["Relire chaque changement dans la chronologie", "Parcourez les dates et filtrez par état, réflexion, emoji, texte, audio ou image."],
      ["Vos notes privées restent sur l’appareil", "Code PIN, protection contre la capture et sauvegardes locales chiffrées protègent les données personnelles."],
      ["Comprendre fatigue et récupération", "Tendances, répartitions, pression, récupération et corrélations transforment l’historique en constats lisibles."],
    ],
    screenshots: [
      ["Accès local chiffré", "Ouvrez EnergyFlow avec un code PIN à quatre chiffres et protégez les notes privées de l’appareil."],
      ["Saisie rapide", "Choisissez énergie, état de travail, facteur et humeur, puis enregistrez en quelques secondes."],
      ["Énergie et humeur", "Réunissez niveau d’énergie, état actuel, facteurs d’influence et émotions détaillées."],
      ["Notes multimédias", "Ajoutez du texte, une image, un enregistrement audio ou une pause consciente."],
      ["Respiration consciente", "Faites une courte pause dans l’application et suivez un rythme respiratoire régulier."],
      ["Chronologie complète", "Relisez toutes les entrées par date tout en conservant le contexte de chaque changement."],
      ["Recherche et filtres", "Retrouvez une entrée par mot-clé, période et type de contenu."],
      ["Vue d’ensemble analytique", "Consultez en un regard énergie récente, stabilité, récupération et tendances."],
      ["Tendances et répartition", "Comparez périodes, jours et niveaux d’énergie pour suivre l’évolution de votre état."],
      ["Pression et récupération", "Repérez les sources de pression, les méthodes de récupération et leur équilibre."],
      ["Libellés et stickers personnalisés", "Adaptez états, facteurs, émotions et stickers à vos propres habitudes."],
      ["Gestion des rappels", "Créez plusieurs rappels, minuteurs d’intervalle et périodes sans interruption."],
      ["Sauvegarde et contrôle des données", "Exportez, vérifiez et restaurez les sauvegardes chiffrées ou générez un rapport lisible."],
    ],
  },
} as const satisfies Record<Locale, EnergyFlowMediaCopy>;

export function getEnergyFlowMediaCopy(locale: Locale): EnergyFlowMediaCopy {
  return energyFlowMediaContent[locale];
}
