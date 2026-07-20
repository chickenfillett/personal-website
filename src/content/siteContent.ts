import type { Locale } from "@/lib/i18n/context";
import type { DeskHavenAssetLocale } from "@/lib/siteAssets";
import type { ProductId, ProductPricingCopy } from "@/domain/products";

export type NavCopy = {
  home: string;
  about: string;
  products: string;
  contact: string;
  language: string;
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
  "language": "选择语言"
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
    "backToProducts": "返回产品"
  },
  "home": {
    "eyebrow": "独立 Windows 桌面软件",
    "title": "精力记录、文件整理和专注计时。",
    "intro": "SoloCraft 展示 Chicken Fillet 已发布的 Windows 应用。每个产品页提供真实界面、功能说明、价格、隐私政策和 Microsoft Store 链接。",
    "primary": "查看产品",
    "secondary": "了解 SoloCraft",
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
        "价格清楚",
        "页面只显示当前地区价格，最终价格以 Microsoft Store 为准。"
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
    "principlesTitle": "只展示必要信息。",
    "principlesBody": "页面围绕产品本身展开：它能做什么、界面如何、价格多少、数据如何处理、从哪里下载。",
    "productTitle": "已发布应用。",
    "studioTitle": "Chicken Fillet 的 Windows 应用主页。",
    "studioBody": "这里不是产品市场，也不是开发日志。它只整理已经发布的应用，以及用户在安装前需要确认的信息。",
    "studioNote": "EnergyFlow、DeskHaven 和 ADHD Focus Timer 分别面向精力记录、本地文件整理和专注计时。"
  },
  "products": {
    "eyebrow": "产品",
    "title": "已发布的 Windows 应用。",
    "intro": "每个产品页面都包含真实截图、主要功能、价格、隐私政策、法律条款和 Microsoft Store 链接。"
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "职场能量仪表盘",
      "description": "记录精力、情绪、压力和活动，通过时间线与分析报告回看长期变化。",
      "status": "已推出"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "桌面文件避风港",
      "description": "整理本地文件、归档内容、查看关系图谱，并保留备份与隐私控制。",
      "status": "已推出"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "沉浸式专注计时器",
      "description": "用环境声、正向计时、想法暂存和统计回看完成专注流程。",
      "status": "已推出"
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
    "eyebrow": "DeskHaven / 桌面文件避风港",
    "title": "整理本地文件，并保留控制权。",
    "intro": "DeskHaven 面向 Windows 本地文件整理：收纳、搜索、归档、关系图谱、备份和隐私控制都在一个工作空间里完成。",
    "status": "已推出",
    "promiseTitle": "不是换一个文件夹，而是建立本地文件秩序。",
    "promise": "文件仓负责收纳，搜索负责定位，关系图谱负责理解连接，备份与隐私控制负责可恢复和可掌握。",
    "features": [
      [
        "先看全局，再进入细节",
        "仪表盘汇总文件数量、关系数量、加密状态和存储趋势，让用户第一眼知道桌面内容是否可控。"
      ],
      [
        "文件仓：把内容放回秩序里",
        "文件仓集中管理本地文件、元数据和归档状态。它不是云盘，而是本机内容的安静收纳层。"
      ],
      [
        "关系图谱：看见内容之间的连接",
        "文件、标签、主题、项目之间的关系可以被看见。用户不只是找文件，也能理解文件为什么重要。"
      ],
      [
        "隐私与控制权",
        "密钥、导入导出、加密和控制选项放在清晰位置。重要数据应该由用户掌握。"
      ],
      [
        "让整理在后台自动发生",
        "后台自动化、路径、开关和语言设置集中在设置页，整理不应该变成每天必须维护的新系统。"
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
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "从声音环境开始一段专注。",
    "intro": "ADHD Focus Timer 1.5.0 提供多语言界面、实时生成环境声、声音混音、8D 空间音频、正向计时、想法暂存和统计回看。",
    "status": "已推出",
    "promiseTitle": "开始、保持、结束，都有清楚的流程。",
    "promise": "应用把声音、计时、临时想法和统计放在同一条专注流程里。声音实时生成，不依赖大型音频文件。",
    "features": [
      [
        "专注设置",
        "选择界面语言、计时时长、环境声和引导方式。"
      ],
      [
        "实时环境声",
        "在本地实时生成雨声、风声、海浪和虫鸣等环境声。"
      ],
      [
        "声音混合与 8D 音频",
        "分别调节各类环境声的音量，并可开启空间音频效果。"
      ],
      [
        "呼吸引导",
        "在计时前按照动画完成一次呼吸练习。"
      ],
      [
        "正向计时",
        "计时从零开始累积，并可使用全屏粒子背景。"
      ],
      [
        "想法冰箱",
        "记录专注过程中出现的临时想法，结束后统一查看。"
      ],
      [
        "专注统计",
        "查看专注次数、累计时间和历史记录。"
      ]
    ],
    "galleryEyebrow": "界面截图",
    "galleryTitle": "ADHD Focus Timer 界面",
    "galleryIntro": "以下截图展示专注设置、声音混合、呼吸引导、正向计时、想法冰箱、统计和应用设置。",
    "galleryItems": [
      [
        "专注设置",
        "选择计时时长、界面语言和环境声。"
      ],
      [
        "声音混合",
        "分别调节多种环境声的音量和空间效果。"
      ],
      [
        "呼吸引导",
        "按照动画完成计时前的呼吸练习。"
      ],
      [
        "正向计时",
        "从零开始累计专注时间，并显示全屏粒子背景。"
      ],
      [
        "想法冰箱",
        "保存专注过程中出现的临时想法。"
      ],
      [
        "专注统计",
        "查看累计时间、完成次数和历史记录。"
      ],
      [
        "应用设置",
        "管理语言、声音、隐私和其他应用选项。"
      ],
      [
        "休息计时",
        "专注结束后开始休息计时。"
      ]
    ]
  },
  "about": {
    "title": "关于 SoloCraft",
    "intro": "SoloCraft 是 Chicken Fillet 的独立 Windows 应用主页。",
    "story": [
      "网站集中展示已发布应用，而不是把产品说明分散在临时页面里。",
      "EnergyFlow、DeskHaven 和 ADHD Focus Timer 分别处理精力记录、本地文件整理和专注计时。",
      "每个产品页都以真实截图、价格、隐私政策、法律条款和下载链接为主。"
    ],
    "philosophyTitle": "页面原则",
    "philosophy": [
      [
        "真实",
        "展示实际界面和真实功能。"
      ],
      [
        "清楚",
        "安装前需要知道的信息放在固定位置。"
      ],
      [
        "克制",
        "减少装饰性文案，把空间留给产品本身。"
      ],
      [
        "可验证",
        "下载、价格和政策链接都可以直接查看。"
      ]
    ],
    "techTitle": "技术方向",
    "tech": [
      "Windows desktop apps",
      "Local-first storage",
      "Statistics and visualization",
      "Privacy-conscious product design"
    ],
    "ctaTitle": "联系",
    "ctaDescription": "产品反馈、合作或媒体询问可以通过邮箱发送。",
    "ctaButton": "发送邮件"
  },
  "contact": {
    "title": "联系",
    "intro": "产品反馈、合作、媒体询问或支持问题，可以发送邮件。",
    "infoTitle": "邮箱",
    "email": "联系邮箱"
  },
  "footer": {
    "subtitle": "Chicken Fillet 的独立 Windows 应用主页。",
    "studio": "工作室",
    "products": "产品",
    "legal": "法务",
    "about": "关于",
    "contact": "联系",
    "privacy": "隐私政策",
    "copyright": "真实界面、清晰价格、本地优先的桌面工具。"
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "这个页面不存在，或者链接已经移动。",
      "button": "返回首页"
    },
    "payment": {
      "title": "ADHD Focus Timer 支持说明",
      "description": "ADHD Focus Timer 免费提供。下面说明自愿支持、支付方式和联系渠道。",
      "sections": [
        [
          "免费使用",
          "ADHD Focus Timer 可免费下载和使用，核心功能不会因为不付费而受限。"
        ],
        [
          "自愿支持",
          "如果它确实帮到了你，可以通过 PayPal 自愿支持独立开发。支持不是购买，也不会解锁额外功能。"
        ],
        [
          "支付方式",
          "当前使用 PayPal.me 接收支持款项。交易由 PayPal 处理。"
        ],
        [
          "不是购买",
          "这不是软件购买流程，而是对持续开发和维护的自愿支持。"
        ],
        [
          "遇到问题",
          "支付或支持相关问题可以发送邮件至 3371436706@qq.com。"
        ]
      ],
      "backButton": "查看退款说明"
    },
    "refund": {
      "title": "ADHD Focus Timer 退款说明",
      "description": "关于自愿支持与退款处理的说明。",
      "sections": [
        [
          "免费下载",
          "ADHD Focus Timer 是免费软件，不需要付费即可完整使用核心功能。"
        ],
        [
          "自愿支持",
          "支持款项是自愿赞赏，不是商品购买，也不会解锁额外功能。"
        ],
        [
          "退款原则",
          "由于支持属于自愿行为，原则上不作为普通商品订单处理退款。"
        ],
        [
          "特殊情况",
          "如果出现重复支付、误操作等情况，请在 72 小时内邮件联系，我会尽力协助。"
        ],
        [
          "处理时效",
          "通常会在 48 小时内回复真实有效的退款咨询。"
        ],
        [
          "联系方式",
          "请发送邮件至 3371436706@qq.com，并附上支付凭证和简要说明。"
        ]
      ],
      "paymentGuide": "查看支持说明",
      "backButton": "返回产品页"
    },
    "websitePrivacy": {
      "title": "网站隐私说明",
      "intro": "SoloCraft 官网是静态产品网站，不设置联系表单，不要求账户，不使用网站分析或广告追踪，也不会在页面中收集你的应用数据、文件内容或浏览画像。",
      "updated": "最后更新：2026 年 6 月 28 日",
      "sections": [
        [
          "网站不主动收集信息",
          "网页代码不会主动收集姓名、邮箱、电话号码、文件内容、桌面数据、精力记录、专注记录或其它个人资料。"
        ],
        [
          "没有联系表单",
          "如果你点击邮箱并主动发送邮件，内容会通过你选择的邮件服务发送；这属于主动发送邮件，不是网站自动收集。"
        ],
        [
          "没有分析和广告追踪",
          "本站不接入 Google Analytics、广告像素、行为画像或第三方营销追踪脚本。"
        ],
        [
          "产品数据与网站分开",
          "EnergyFlow、DeskHaven 和 ADHD Focus Timer 的应用数据由对应桌面应用在本地处理，网站不会读取应用数据库、文件索引、关系图谱或记录。"
        ],
        [
          "托管基础日志",
          "托管服务或浏览器网络请求可能产生 IP、时间、User-Agent 或请求路径等基础日志，用于安全、缓存和故障排查。"
        ],
        [
          "联系",
          "隐私问题可发送邮件至 3371436706@qq.com。请不要发送不必要的密码、私钥、身份证件或其它高度敏感内容。"
        ]
      ]
    }
  }
} as const;

const zhTwNav = {
  "home": "首頁",
  "about": "關於",
  "products": "產品",
  "contact": "聯絡",
  "language": "選擇語言"
} as const;

const zhTwCopy = {
  "common": {
    "productPromise": "產品說明",
    "experienceFlow": "使用流程",
    "productIndex": "產品",
    "operatingPrinciples": "工作原則",
    "designPrinciples": "設計要點",
    "step": "步驟",
    "viewProducts": "查看產品",
    "contact": "聯絡",
    "getUpdates": "聯絡",
    "microsoftStore": "Microsoft Store",
    "privacy": "隱私政策",
    "backToProducts": "返回產品"
  },
  "home": {
    "eyebrow": "獨立 Windows 桌面軟體",
    "title": "精力記錄、文件整理和專注計時。",
    "intro": "SoloCraft 展示 Chicken Fillet 已發布的 Windows 應用。每個產品頁提供真實介面、功能說明、價格、隱私政策和 Microsoft Store 連結。",
    "primary": "查看產品",
    "secondary": "了解 SoloCraft",
    "currentProduct": "正在展示",
    "notes": [
      [
        "真實介面",
        "使用應用截圖和海報展示產品，不用概念圖取代真實畫面。"
      ],
      [
        "本地優先",
        "重要資料優先在你的 Windows 裝置上處理。"
      ],
      [
        "價格清楚",
        "頁面只顯示目前地區價格，最終價格以 Microsoft Store 為準。"
      ],
      [
        "下載明確",
        "每個產品頁都提供對應的 Microsoft Store 連結。"
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "記錄精力和工作狀態。",
        "body": "快速記錄精力等級、工作狀態、來源和心情，再用趨勢與統計回看變化。",
        "bullets": [
          "5 級精力等級",
          "職場場景",
          "Pearson + 卡方",
          "本地隱私優先"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "整理本地文件。",
        "body": "把散落文件放入可搜尋、可歸檔、可備份的本地工作空間，並查看內容之間的關係。",
        "bullets": [
          "本地內容空間",
          "關係圖譜",
          "文件倉",
          "AES-256"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "從聲音環境開始專注。",
        "body": "用即時生成環境聲、聲音混音、正向計時、想法暫存和統計回看完成一段專注。",
        "bullets": [
          "正向計時",
          "呼吸引導",
          "想法冰箱",
          "本地隱私"
        ]
      }
    ],
    "principlesTitle": "只展示必要資訊。",
    "principlesBody": "頁面圍繞產品本身展開：它能做什麼、介面如何、價格多少、資料如何處理、從哪裡下載。",
    "productTitle": "已發布應用。",
    "studioTitle": "Chicken Fillet 的 Windows 應用主頁。",
    "studioBody": "這裡不是產品市場，也不是開發日誌。它只整理已發布的應用，以及安裝前需要確認的資訊。",
    "studioNote": "EnergyFlow、DeskHaven 和 ADHD Focus Timer 分別面向精力記錄、本地文件整理和專注計時。"
  },
  "products": {
    "eyebrow": "產品",
    "title": "已發布的 Windows 應用。",
    "intro": "每個產品頁都包含真實截圖、主要功能、價格、隱私政策、法律條款和 Microsoft Store 連結。"
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "職場能量儀表板",
      "description": "記錄精力、情緒、壓力和活動，透過時間軸與分析報告回看長期變化。",
      "status": "已推出"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "桌面文件避風港",
      "description": "整理本地文件、歸檔內容、查看關係圖譜，並保留備份與隱私控制。",
      "status": "已推出"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "沉浸式專注計時器",
      "description": "用環境聲、正向計時、想法暫存和統計回看完成專注流程。",
      "status": "已推出"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / 職場能量儀表板",
    "title": "記錄精力變化，看清工作真正消耗在哪裡。",
    "intro": "EnergyFlow 用幾秒完成一次精力記錄：等級、工作狀態、恢復來源和情緒。累積一段時間後，你可以用趨勢和統計結果判斷哪些會議、任務或作息正在影響狀態。",
    "status": "已推出",
    "promiseTitle": "不是待辦清單，而是你的工作能量記錄。",
    "promise": "它不評價你是否足夠努力，只幫助你把體感變成可回看的記錄。長期資料會慢慢呈現：什麼讓你恢復，什麼讓你耗竭，哪些安排值得調整。",
    "features": [
      [
        "3 秒打卡",
        "用最少步驟記錄 5 級精力、工作狀態、能量來源和心情，不把追蹤本身變成負擔。"
      ],
      [
        "深淺模式",
        "深色模式用於安靜記錄，淺色模式用於日間辦公。介面保持克制，不用視覺噪音搶走注意力。"
      ],
      [
        "桌面常駐",
        "桌面懸浮按鈕和快捷鍵讓記錄可以隨手完成：出現、記錄、收起，盡量不打斷目前工作。"
      ],
      [
        "統計洞察",
        "透過 Pearson 相關和卡方檢驗觀察能量與場景之間的關係，用長期記錄發現真正的消耗源。"
      ],
      [
        "隱私保護",
        "精力狀態屬於敏感個人資料。EnergyFlow 以本地優先、隱私優先為預設設計方向。"
      ]
    ],
    "flow": [
      "記錄當下狀態",
      "累積工作場景",
      "查看能量趨勢",
      "調整工作節奏"
    ],
    "gallery": {
      "eyebrow": "真實介面",
      "title": "查看 EnergyFlow 的完整介面截圖。",
      "body": "13 張真實介面依序展示本地解鎖、快速記錄、多媒體、呼吸練習、時間軸、分析、提醒與加密備份。"
    },
    "flowIntro": {
      "title": "從一次快速記錄，到一段可調整的工作節奏。",
      "body": "EnergyFlow 的流程不是為了製造更多管理負擔，而是把很短的一次記錄，逐步變成可回看的工作節奏證據。左側是你要完成的動作，右側是應用如何把這些動作轉化為趨勢、場景和調整依據。",
      "cardTitle": "流程重點",
      "cardBody": "記錄越輕，長期資料才越容易堅持；長期資料越穩定，精力變化和工作場景之間的關係才更容易被看見。"
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / 桌面文件避風港",
    "title": "把分散文件整理成一個可找回的本地工作台。",
    "intro": "DeskHaven 面向 Windows 本地文件整理：把散落的資料、圖片、匯出文件和專案素材放進可搜尋、可歸檔、可備份的工作空間，並透過關係圖譜理解內容之間的連接。",
    "status": "已推出",
    "promiseTitle": "不是換一個資料夾，而是建立一套本地文件秩序。",
    "promise": "文件倉負責歸攏和歸檔，搜尋負責快速定位，關係圖譜幫助理解內容連接，備份與隱私控制確保重要文件可恢復、可匯出、可掌握。",
    "features": [
      [
        "先看全局，再進入細節",
        "儀表板匯總文件數量、關係數量、加密狀態和儲存趨勢，讓使用者第一眼知道桌面內容是否可控。"
      ],
      [
        "文件倉：把內容放回秩序裡",
        "文件倉集中管理本地文件、元資料和歸檔狀態。它不是雲端硬碟，而是本機內容的安靜收納層。"
      ],
      [
        "關係圖譜：看見內容之間的連接",
        "文件、標籤、主題、專案之間的關係可以被看見。使用者不只是找文件，也能理解文件為什麼重要。"
      ],
      [
        "隱私與控制權",
        "金鑰、匯入匯出、加密和控制選項放在清晰位置。重要資料應該由使用者掌握。"
      ],
      [
        "讓整理在後台自動發生",
        "後台自動化、路徑、開關和語言設定集中在設定頁，整理不應該變成每天必須維護的新系統。"
      ]
    ],
    "principles": [
      [
        "本地優先",
        "重要文件和索引預設在本機處理。"
      ],
      [
        "安全可控",
        "使用者必須知道文件在哪裡，也能隨時匯出或找回。"
      ],
      [
        "關係可視",
        "文件不是孤立物，專案、標籤和內容關係應該可以被理解。"
      ],
      [
        "低打擾",
        "整理應該順手發生，而不是製造新的負擔。"
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "把專注入口做得更安靜、更可持續。",
    "intro": "新版 ADHD Focus Timer 面向容易被環境、念頭和倒數壓力打斷的使用者。它用即時合成的專注聲景、呼吸過渡、正向計時、想法冰箱和累計統計，幫助你更溫和地進入並維持一段專注。",
    "status": "已推出",
    "promiseTitle": "不是催促你快點完成，而是幫你少一點阻力地開始。",
    "promise": "1.5.0 重新整理了介面、聲音和多語言體驗。雨聲、風聲、海浪、蟲鳴等聲音由 Web Audio 即時生成，應用不再攜帶龐大的音訊文件；混音、8D 空間感和完成提示音也可以依自己的狀態調整。",
    "features": [
      [
        "進入前先定好環境",
        "開始前選擇語言、時長、聲音與引導方式，先把會打斷專注的決定處理掉。"
      ],
      [
        "即時生成的專注聲景",
        "雨、風、海浪、蟲鳴等聲音在本地即時合成，體積更小，也更便於長時間循環。"
      ],
      [
        "聲音混音和 8D 空間感",
        "用混音面板調節不同聲層，按需要開啟空間移動感，讓背景聲成為穩定陪伴。"
      ],
      [
        "呼吸過渡",
        "正式計時前用簡短呼吸節奏切換狀態，不把開始任務變成突然的壓力。"
      ],
      [
        "正向計時與沉浸粒子",
        "時間向前累積，避免倒數帶來的失敗感；粒子動畫給出輕微回饋但不搶注意力。"
      ],
      [
        "想法冰箱",
        "突然冒出的想法可以先存放起來，專注結束後再處理，不必立刻切出目前任務。"
      ],
      [
        "累計統計與溫和完成",
        "完成頁記錄真實投入，累計專注資料幫助你看見長期進展，而不是只盯著單次表現。"
      ]
    ],
    "galleryEyebrow": "介面截圖",
    "galleryTitle": "ADHD Focus Timer 1.5.0 的真實介面。",
    "galleryIntro": "從準備頁、聲音混音、呼吸過渡到專注計時、想法暫存與統計回看，這組截圖展示完整的專注流程。介面截圖會隨網站語言自動切換。",
    "galleryItems": [
      [
        "專注準備",
        "先選擇時長、語言和環境聲，讓開始變得明確。"
      ],
      [
        "聲音面板",
        "多層聲景可以自由混合，用於不同的專注狀態。"
      ],
      [
        "呼吸引導",
        "用短暫過渡把注意力從混亂帶回目前任務。"
      ],
      [
        "專注進行中",
        "正向計時、粒子回饋和全螢幕環境一起保持低壓力節奏。"
      ],
      [
        "想法冰箱",
        "臨時想法先保存，之後再回來處理。"
      ],
      [
        "累計統計",
        "用長期記錄看見真實投入，而不是只評價單次結果。"
      ],
      [
        "支援與設定",
        "語言、聲音、隱私與支援入口集中在清晰位置。"
      ],
      [
        "休息節奏",
        "完成專注後進入休息狀態，讓下一次開始之前有一段緩衝。"
      ]
    ]
  },
  "about": {
    "title": "關於 SoloCraft",
    "intro": "SoloCraft 是 Chicken Fillet 的獨立 Windows 應用主頁。",
    "story": [
      "網站集中展示已發布應用，不把產品說明分散在臨時頁面裡。",
      "EnergyFlow、DeskHaven 和 ADHD Focus Timer 分別處理精力記錄、本地文件整理和專注計時。",
      "每個產品頁都以真實截圖、價格、隱私政策、法律條款和下載連結為主。"
    ],
    "philosophyTitle": "頁面原則",
    "philosophy": [
      [
        "真實",
        "展示實際介面和真實功能。"
      ],
      [
        "清楚",
        "安裝前需要知道的資訊放在固定位置。"
      ],
      [
        "克制",
        "減少裝飾性文案，把空間留給產品本身。"
      ],
      [
        "可驗證",
        "下載、價格和政策連結都可以直接查看。"
      ]
    ],
    "techTitle": "技術方向",
    "tech": [
      "Windows 桌面應用",
      "本地優先儲存",
      "統計與視覺化",
      "重視隱私的產品設計"
    ],
    "ctaTitle": "想聊產品、合作或回饋？",
    "ctaDescription": "我會認真閱讀每一封真實來信。",
    "ctaButton": "聯絡我"
  },
  "contact": {
    "title": "聯絡",
    "intro": "產品回饋、合作想法、媒體詢問，或只是打個招呼，都可以發郵件給我。",
    "infoTitle": "聯絡方式",
    "email": "郵箱"
  },
  "footer": {
    "subtitle": "Chicken Fillet 的獨立桌面軟體工作室。",
    "studio": "工作室",
    "products": "產品",
    "legal": "法務",
    "about": "關於",
    "contact": "聯絡",
    "privacy": "隱私政策",
    "copyright": "安靜、克制、隱私優先的桌面工具。"
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "這個頁面不存在，或連結已經移動。",
      "button": "返回首頁"
    },
    "payment": {
      "title": "ADHD Focus Timer 支持說明",
      "description": "ADHD Focus Timer 免費提供。下面說明自願支持、支付方式和聯絡渠道。",
      "sections": [
        [
          "免費使用",
          "ADHD Focus Timer 可免費下載和使用，核心功能不會因為不付費而受限。"
        ],
        [
          "自願支持",
          "如果它確實幫到了你，可以透過 PayPal 自願支持獨立開發。支持不是購買，也不會解鎖額外功能。"
        ],
        [
          "支付方式",
          "目前使用 PayPal.me 接收支持款項。交易由 PayPal 處理。"
        ],
        [
          "不是購買",
          "這不是軟體購買流程，而是對持續開發和維護的自願支持。"
        ],
        [
          "遇到問題",
          "支付或支持相關問題可以寄信至 3371436706@qq.com。"
        ]
      ],
      "backButton": "查看退款說明"
    },
    "refund": {
      "title": "ADHD Focus Timer 退款說明",
      "description": "關於自願支持與退款處理的說明。",
      "sections": [
        [
          "免費下載",
          "ADHD Focus Timer 是免費軟體，不需要付費即可完整使用核心功能。"
        ],
        [
          "自願支持",
          "支持款項是自願贊助，不是商品購買，也不會解鎖額外功能。"
        ],
        [
          "退款原則",
          "由於支持屬於自願行為，原則上不作為普通商品訂單處理退款。"
        ],
        [
          "特殊情況",
          "如果出現重複支付、誤操作等情況，請在 72 小時內寄信聯絡，我會盡力協助。"
        ],
        [
          "處理時效",
          "通常會在 48 小時內回覆真實有效的退款諮詢。"
        ],
        [
          "聯絡方式",
          "請寄信至 3371436706@qq.com，並附上支付憑證和簡要說明。"
        ]
      ],
      "paymentGuide": "查看支持說明",
      "backButton": "返回產品頁"
    },
    "websitePrivacy": {
      "title": "網站隱私說明",
      "intro": "SoloCraft 官網是靜態產品網站，不設聯絡表單，不要求帳戶，不使用網站分析或廣告追蹤，也不會在頁面中收集你的應用資料、文件內容或瀏覽画像。",
      "updated": "最後更新：2026 年 6 月 28 日",
      "sections": [
        [
          "網站不主動收集資訊",
          "網頁程式碼不會主動收集姓名、郵箱、電話、文件內容、桌面資料、精力記錄、專注記錄或其他個人資料。"
        ],
        [
          "沒有聯絡表單",
          "如果你點擊郵箱並主動寄信，內容會透過你選擇的郵件服務發送；這屬於主動發送郵件，不是網站自動收集。"
        ],
        [
          "沒有分析和廣告追蹤",
          "本站不接入 Google Analytics、廣告像素、行為画像或第三方行銷追蹤腳本。"
        ],
        [
          "產品資料與網站分開",
          "EnergyFlow、DeskHaven 和 ADHD Focus Timer 的應用資料由對應桌面應用在本地處理，網站不會讀取應用資料庫、文件索引、關係圖譜或記錄。"
        ],
        [
          "托管基礎日誌",
          "托管服務或瀏覽器網路請求可能產生 IP、時間、User-Agent 或請求路徑等基礎日誌，用於安全、快取和故障排查。"
        ],
        [
          "聯絡",
          "隱私問題可寄信至 3371436706@qq.com。請不要發送不必要的密碼、私鑰、身分證件或其他高度敏感內容。"
        ]
      ]
    }
  }
} as const;

const enNav = {
  "home": "Home",
  "about": "About",
  "products": "Products",
  "contact": "Contact",
  "language": "Select language"
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
    "backToProducts": "Back to products"
  },
  "home": {
    "eyebrow": "Independent Windows desktop software",
    "title": "Energy logs, file order, and focus timing.",
    "intro": "SoloCraft presents released Windows apps from Chicken Fillet. Each product page shows real screens, features, pricing, privacy policy, legal terms, and a Microsoft Store link.",
    "primary": "View products",
    "secondary": "About SoloCraft",
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
        "Clear pricing",
        "The page shows one region-matched price; Microsoft Store remains final."
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
    "principlesBody": "The site focuses on what each app does, how it looks, what it costs, how it handles data, and where to install it.",
    "productTitle": "Released apps.",
    "studioTitle": "Chicken Fillet's Windows app home.",
    "studioBody": "This is not a marketplace and not a dev journal. It collects released apps and the information users need before installation.",
    "studioNote": "EnergyFlow, DeskHaven, and ADHD Focus Timer cover energy logging, local file organization, and focus timing."
  },
  "products": {
    "eyebrow": "Products",
    "title": "Released Windows apps.",
    "intro": "Each product page includes real screenshots, core features, pricing, privacy policy, legal terms, and a Microsoft Store link."
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "Workplace energy dashboard",
      "description": "Track energy, mood, pressure, and activity, then review long-term changes in timelines and reports.",
      "status": "Available"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "Desktop file haven",
      "description": "Organize local files, archive content, view relationships, and keep backup and privacy controls close.",
      "status": "Available"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "Immersive focus timer",
      "description": "Use ambient sound, forward timing, idea capture, and session stats to complete a focus flow.",
      "status": "Available"
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
    "eyebrow": "DeskHaven / Desktop File Haven",
    "title": "Turn scattered files into a local workspace you can trust.",
    "intro": "DeskHaven organizes local Windows files into a searchable, archivable, recoverable workspace for documents, images, exports, and project materials, with relationship maps to help you understand how content connects.",
    "status": "Available",
    "promiseTitle": "Not another folder. A local system for file order.",
    "promise": "The vault gathers and archives, search brings files back quickly, relationship maps make context visible, and backup plus privacy controls keep important data recoverable, exportable, and under your control.",
    "features": [
      [
        "Overview before detail",
        "The dashboard summarizes file count, relationships, encryption state, and storage trends so users know whether their desktop is under control."
      ],
      [
        "File vault",
        "The vault manages local files, metadata, and archive state. It is a quiet local layer, not another cloud drive."
      ],
      [
        "Relationship map",
        "Files, tags, topics, and projects can be seen as relationships. Users do not only find files; they understand why files matter."
      ],
      [
        "Privacy and control",
        "Keys, import, export, encryption, and control options live in one clear place. Important data should remain under user control."
      ],
      [
        "Automation that stays quiet",
        "Background automation, paths, switches, and language settings are grouped clearly, so cleanup does not become another daily system."
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
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "A calmer setup for sustained focus.",
    "intro": "The new ADHD Focus Timer is built for people who are easily interrupted by noise, stray thoughts, and countdown pressure. Real-time soundscapes, breathing transitions, forward timing, Idea Fridge, and cumulative stats help you enter and hold focus more gently.",
    "status": "Available",
    "promiseTitle": "It does not push you to rush. It lowers the cost of starting.",
    "promise": "Version 1.5.0 rebuilds the interface, audio, and multilingual experience. Rain, wind, ocean, and night sounds are generated locally with Web Audio, so the app no longer carries huge audio files. The mixer, 8D spatial motion, and completion chime can all be tuned to your current state.",
    "features": [
      [
        "Set the environment first",
        "Choose language, duration, sound, and guidance before the session so fewer decisions interrupt focus later."
      ],
      [
        "Real-time focus soundscapes",
        "Rain, wind, ocean, and night layers are synthesized locally, keeping the app small and comfortable for long loops."
      ],
      [
        "Mixer and 8D space",
        "Balance sound layers and enable spatial movement when you want background sound to feel present without becoming loud."
      ],
      [
        "Breathing transition",
        "A short breathing rhythm helps shift into the session without turning the start into a jolt."
      ],
      [
        "Forward timer with particles",
        "Time accumulates instead of counting down toward failure. Subtle particles provide feedback without demanding attention."
      ],
      [
        "Idea Fridge",
        "Store sudden thoughts for later so you do not have to leave the current task immediately."
      ],
      [
        "Stats and gentle completion",
        "The completion screen records real effort, while cumulative stats help you see progress over time."
      ]
    ],
    "galleryEyebrow": "Interface screenshots",
    "galleryTitle": "The real ADHD Focus Timer 1.5.0 interface.",
    "galleryIntro": "From setup, sound mixing, and breathing transition to focus timing, Idea Fridge, and cumulative stats, these screenshots show the complete focus flow. Interface captures switch with the website language when matching assets are available.",
    "galleryItems": [
      [
        "Focus setup",
        "Choose duration, language, and sound before the session begins."
      ],
      [
        "Sound mixer",
        "Blend multiple ambience layers for different focus states."
      ],
      [
        "Breathing guide",
        "Use a short transition to bring attention back to the task."
      ],
      [
        "Focus session",
        "Forward timing, particles, and full-screen calm keep the rhythm low-pressure."
      ],
      [
        "Idea Fridge",
        "Capture temporary thoughts without leaving the session."
      ],
      [
        "Cumulative stats",
        "See real effort over time instead of judging one session."
      ],
      [
        "Support and settings",
        "Language, sound, privacy, and support stay easy to find."
      ],
      [
        "Rest rhythm",
        "Move into a calm break after focus, with space before the next session begins."
      ]
    ]
  },
  "about": {
    "title": "About SoloCraft",
    "intro": "SoloCraft is Chicken Fillet's independent home for Windows apps.",
    "story": [
      "The site keeps released apps and product information in one place.",
      "EnergyFlow, DeskHaven, and ADHD Focus Timer cover energy logging, local file organization, and focus timing.",
      "Each product page centers on real screenshots, pricing, privacy policy, legal terms, and download links."
    ],
    "philosophyTitle": "Page Principles",
    "philosophy": [
      [
        "Real",
        "Show actual interfaces and real product behavior."
      ],
      [
        "Clear",
        "Put pre-installation information in predictable places."
      ],
      [
        "Restrained",
        "Keep decorative copy low and give the product room."
      ],
      [
        "Verifiable",
        "Downloads, pricing, and policy links are directly accessible."
      ]
    ],
    "techTitle": "Technical direction",
    "tech": [
      "Windows desktop apps",
      "Local-first storage",
      "Statistics and visualization",
      "Privacy-conscious product design"
    ],
    "ctaTitle": "Want to talk products, collaboration, or feedback?",
    "ctaDescription": "I read every real note carefully.",
    "ctaButton": "Contact me"
  },
  "contact": {
    "title": "Contact",
    "intro": "Product feedback, collaboration ideas, media questions, or a simple hello can all go to email.",
    "infoTitle": "Contact information",
    "email": "Email"
  },
  "footer": {
    "subtitle": "Independent desktop software by Chicken Fillet.",
    "studio": "Studio",
    "products": "Products",
    "legal": "Legal",
    "about": "About",
    "contact": "Contact",
    "privacy": "Privacy Policy",
    "copyright": "Quiet, restrained, privacy-first desktop tools."
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "This page does not exist, or the link has moved.",
      "button": "Back home"
    },
    "payment": {
      "title": "ADHD Focus Timer support notes",
      "description": "ADHD Focus Timer is free to use. This page explains optional support, payment handling, and contact.",
      "sections": [
        [
          "Free to use",
          "ADHD Focus Timer can be downloaded and used for free. Core features are not locked behind payment."
        ],
        [
          "Optional support",
          "If the app helps you, you can support independent development through PayPal. Support is not a purchase and does not unlock extra features."
        ],
        [
          "Payment method",
          "Support is currently accepted through PayPal.me and processed by PayPal."
        ],
        [
          "Not a purchase",
          "This is not a software checkout flow. It is optional support for ongoing development and maintenance."
        ],
        [
          "Need help",
          "For payment or support questions, email 3371436706@qq.com."
        ]
      ],
      "backButton": "View refund notes"
    },
    "refund": {
      "title": "ADHD Focus Timer refund notes",
      "description": "Notes about optional support and refund handling.",
      "sections": [
        [
          "Free download",
          "ADHD Focus Timer is free software; payment is not required for core use."
        ],
        [
          "Optional support",
          "Support payments are voluntary tips, not product purchases, and do not unlock additional features."
        ],
        [
          "Refund principle",
          "Because support is voluntary, it is generally not handled like a normal product order refund."
        ],
        [
          "Special cases",
          "If duplicate payment or accidental payment happens, contact me by email within 72 hours and I will try to help."
        ],
        [
          "Response time",
          "Real refund inquiries are usually answered within 48 hours."
        ],
        [
          "Contact",
          "Email 3371436706@qq.com with payment proof and a short explanation."
        ]
      ],
      "paymentGuide": "View support notes",
      "backButton": "Back to product"
    },
    "websitePrivacy": {
      "title": "Website Privacy Notice",
      "intro": "The SoloCraft website is a static product site. It has no contact form, requires no account, uses no analytics or ad tracking, and does not collect app data, file content, or browsing profiles through the page.",
      "updated": "Last updated: June 28, 2026",
      "sections": [
        [
          "No active website data collection",
          "The page code does not actively collect your name, email, phone number, file content, desktop data, energy logs, focus records, or other personal information."
        ],
        [
          "No contact form",
          "If you click an email link and send a message, it is sent through the email service you choose. That is voluntary contact, not automatic website collection."
        ],
        [
          "No analytics or advertising tracking",
          "The site does not include Google Analytics, ad pixels, behavioral profiling, or third-party marketing tracking scripts."
        ],
        [
          "Product data is separate",
          "EnergyFlow, DeskHaven, and ADHD Focus Timer process app data locally in their desktop apps. The website does not read app databases, file indexes, relationship maps, or records."
        ],
        [
          "Hosting infrastructure logs",
          "The hosting provider or browser network layer may create basic logs such as IP address, time, User-Agent, or request path for security, caching, and troubleshooting."
        ],
        [
          "Contact",
          "For privacy questions, email 3371436706@qq.com. Do not send unnecessary passwords, private keys, identity documents, or other highly sensitive content."
        ]
      ]
    }
  }
} as const;

const jaNav = {
  "home": "ホーム",
  "about": "概要",
  "products": "製品",
  "contact": "連絡",
  "language": "言語を選択"
} as const;

const jaCopy = {
  "common": {
    "productPromise": "製品情報",
    "experienceFlow": "使い方",
    "productIndex": "製品",
    "operatingPrinciples": "方針",
    "designPrinciples": "設計メモ",
    "step": "ステップ",
    "viewProducts": "製品を見る",
    "contact": "連絡",
    "getUpdates": "連絡",
    "microsoftStore": "Microsoft Store",
    "privacy": "プライバシーポリシー",
    "backToProducts": "製品に戻る"
  },
  "home": {
    "eyebrow": "独立系デスクトップソフトウェアスタジオ",
    "title": "エネルギー記録、ファイル整理、集中タイマー。",
    "intro": "SoloCraft は Chicken Fillet の公開済み Windows アプリを紹介します。各製品ページで実画面、機能、価格、プライバシー、法的条件、Microsoft Store リンクを確認できます。",
    "primary": "製品を見る",
    "secondary": "SoloCraft について",
    "currentProduct": "表示中",
    "notes": [
      [
        "実際の画面",
        "製品ページでは実アプリのスクリーンショットとポスターを使います。"
      ],
      [
        "ローカル優先",
        "重要なデータはまず Windows 端末内で扱う設計です。"
      ],
      [
        "価格を明確に",
        "地域に合わせた価格を 1 つ表示し、最終価格は Microsoft Store を優先します。"
      ],
      [
        "入手先を明示",
        "各製品ページから Microsoft Store に進めます。"
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "エネルギーと作業状態を記録。",
        "body": "エネルギー、作業状態、要因、気分をすばやく記録し、傾向と統計で変化を確認します。",
        "bullets": [
          "5 段階",
          "仕事の文脈",
          "相関 + カイ二乗",
          "ローカル優先"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "ローカルファイルを整理。",
        "body": "散らばったファイルを検索、アーカイブ、復元しやすいローカル作業空間へまとめます。",
        "bullets": [
          "ローカル空間",
          "関係マップ",
          "保管庫",
          "AES-256"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "集中セッションを整える。",
        "body": "生成された環境音、ミックス、前向き計時、アイデア保存、統計で集中を進めます。",
        "bullets": [
          "前向き計時",
          "呼吸ガイド",
          "Idea Fridge",
          "ローカルプライバシー"
        ]
      }
    ],
    "principlesTitle": "必要な情報だけを載せる。",
    "principlesBody": "何ができるか、画面はどうか、価格はいくらか、データはどう扱われるか、どこで入手できるかを整理します。",
    "productTitle": "公開済みアプリ。",
    "studioTitle": "Chicken Fillet の Windows アプリページ。",
    "studioBody": "ここでは公開済みアプリと、インストール前に確認したい情報だけをまとめています。",
    "studioNote": "EnergyFlow、DeskHaven、ADHD Focus Timer は、エネルギー記録、ローカルファイル整理、集中タイマーを扱います。"
  },
  "products": {
    "eyebrow": "製品",
    "title": "公開済み Windows アプリ。",
    "intro": "各製品ページには実画面、主な機能、価格、プライバシー、法的条件、Microsoft Store リンクがあります。"
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "仕事のエネルギーダッシュボード",
      "description": "エネルギー、気分、ストレス、活動を記録し、タイムラインと分析で長期的な変化を確認します。",
      "status": "公開中"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "デスクトップファイルの避難所",
      "description": "ローカルファイルの整理、アーカイブ、関係表示、バックアップ、プライバシー管理を行います。",
      "status": "公開中"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "没入型フォーカスタイマー",
      "description": "環境音、前向き計時、アイデア保存、統計で集中の流れを支えます。",
      "status": "公開中"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / 仕事のエネルギーダッシュボード",
    "title": "仕事日のエネルギーがどこへ流れるかを見る。",
    "intro": "5 段階のエネルギー、仕事の文脈、回復源、気分を数秒で記録します。EnergyFlow は、消耗する会議や回復するタスクを見つけるための道具です。",
    "status": "公開中",
    "promiseTitle": "タスクアプリではなく、エネルギーリズムの計器盤。",
    "promise": "もっと働かせるためではなく、会議、残業、深い作業、休憩が集中力に与える本当のコストを見るための製品です。",
    "features": [
      [
        "3 秒ログ",
        "エネルギー、状態、回復源、気分を少ない操作で記録します。"
      ],
      [
        "明暗モード",
        "集中用のダークモードと日中作業用のライトモード。"
      ],
      [
        "デスクトップ常駐",
        "フローティング入口とショートカットで流れを止めずに記録します。"
      ],
      [
        "統計洞察",
        "相関とカイ二乗検定で、文脈とエネルギーの関係を観察します。"
      ],
      [
        "プライバシー保護",
        "エネルギーデータは個人的です。ローカル優先を基本に設計しています。"
      ]
    ],
    "flow": [
      "状態を記録",
      "文脈を蓄積",
      "傾向を確認",
      "働き方を調整"
    ],
    "gallery": {
      "eyebrow": "実際の画面",
      "title": "EnergyFlow の画面セットを見る。",
      "body": "13 枚の実画面で、ローカルロック、記録、マルチメディア、呼吸、タイムライン、分析、通知、暗号化バックアップを紹介します。"
    },
    "flowIntro": {
      "title": "数秒の記録から、調整できる作業リズムへ。",
      "body": "EnergyFlow は管理作業を増やすためのものではありません。短い記録を積み重ねることで、何が起きたのか、どこでエネルギーが変わったのか、どの作業パターンを見直すべきかを後から確認できます。",
      "cardTitle": "流れの考え方",
      "cardBody": "記録が軽いほど習慣は続きます。記録が安定するほど、作業文脈とエネルギーの関係が見えやすくなります。"
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / デスクトップファイルの避難所",
    "title": "すべてのファイルに私的な作業台を。",
    "intro": "DeskHaven はローカル優先の Windows デスクトップ整理ツールです。保管庫、関係マップ、プライバシー制御、自動化で、散らばったファイルを落ち着いた状態に戻します。",
    "status": "公開中",
    "promiseTitle": "うるさいファイル管理ではなく、内容のための静かな場所。",
    "promise": "ファイルを隠すのではなく、関係を理解しやすくします。保管庫、関係マップ、プライバシー制御、設定がそれぞれ役割を持ちます。",
    "features": [
      [
        "まず全体を見る",
        "ダッシュボードでファイル数、関係、暗号化状態、保存傾向を確認します。"
      ],
      [
        "ファイル保管庫",
        "ローカルファイル、メタデータ、アーカイブ状態を静かに管理します。"
      ],
      [
        "関係マップ",
        "ファイル、タグ、テーマ、プロジェクトのつながりを見える化します。"
      ],
      [
        "プライバシーと制御",
        "鍵、インポート、エクスポート、暗号化を分かりやすく配置します。"
      ],
      [
        "静かな自動化",
        "整理は背景で自然に行われ、毎日の負担になりません。"
      ]
    ],
    "principles": [
      [
        "ローカル優先",
        "重要なファイルと索引は基本的に端末内で処理します。"
      ],
      [
        "制御可能",
        "ファイルの場所と復元方法を利用者が把握できます。"
      ],
      [
        "関係を見る",
        "タグやプロジェクトとのつながりを理解できます。"
      ],
      [
        "扱いやすさ",
        "整理が新しい負担にならないようにします。"
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "集中を始める流れを、静かで続けやすく。",
    "intro": "新しい ADHD Focus Timer は、音、浮かぶ考え、カウントダウンの圧力で中断されやすい人のためのツールです。リアルタイム生成のサウンドスケープ、呼吸の移行、前向きな計時、Idea Fridge、累積統計で、より穏やかに集中へ入れます。",
    "status": "公開中",
    "promiseTitle": "急がせるのではなく、始める負担を下げます。",
    "promise": "1.5.0 では、インターフェイス、音、多言語体験を作り直しました。雨、風、海、夜の音は Web Audio でローカル生成され、大きな音声ファイルを持ちません。ミキサー、8D 空間感、完了チャイムも状態に合わせて調整できます。",
    "features": [
      [
        "先に環境を整える",
        "言語、時間、音、ガイドを開始前に決め、集中中の余分な選択を減らします。"
      ],
      [
        "リアルタイムの集中音",
        "雨、風、海、夜の音をローカルで生成し、軽く長時間ループしやすくします。"
      ],
      [
        "ミキサーと 8D 空間",
        "複数の音層を調整し、必要な時だけ空間的な動きを加えられます。"
      ],
      [
        "呼吸の移行",
        "短い呼吸リズムで、急な開始ではなく自然に状態を切り替えます。"
      ],
      [
        "前向きな計時と粒子",
        "時間を積み上げ、失敗へ向かう倒数感を避けます。粒子は控えめなフィードバックです。"
      ],
      [
        "Idea Fridge",
        "浮かんだ考えを一時保存し、今の作業からすぐ離れずに済みます。"
      ],
      [
        "統計とやさしい完了",
        "完了画面は実際の投入を記録し、累積統計で長期の進歩を見せます。"
      ]
    ],
    "galleryEyebrow": "画面スクリーンショット",
    "galleryTitle": "ADHD Focus Timer 1.5.0 の実際の画面。",
    "galleryIntro": "準備、サウンドミックス、呼吸への切り替え、集中タイマー、Idea Fridge、統計の振り返りまで、集中の流れを実画面で確認できます。対応する画像がある言語では自動で切り替わります。",
    "galleryItems": [
      [
        "集中準備",
        "時間、言語、環境音を先に選びます。"
      ],
      [
        "サウンドミキサー",
        "複数の音を混ぜて、集中状態に合わせます。"
      ],
      [
        "呼吸ガイド",
        "短い移行で注意を作業へ戻します。"
      ],
      [
        "集中セッション",
        "前向きな計時、粒子、全画面の落ち着きで低圧のリズムを保ちます。"
      ],
      [
        "Idea Fridge",
        "一時的な考えを保存し、あとで戻れます。"
      ],
      [
        "累積統計",
        "単発の結果ではなく、長期の投入を見ます。"
      ],
      [
        "サポートと設定",
        "言語、音、プライバシー、サポートを見つけやすく配置します。"
      ],
      [
        "休憩リズム",
        "集中後に休憩へ入り、次の開始までの余白を作ります。"
      ]
    ]
  },
  "about": {
    "title": "SoloCraft について",
    "intro": "SoloCraft は Chicken Fillet の独立した Windows アプリページです。",
    "story": [
      "公開済みアプリと製品情報を 1 か所にまとめています。",
      "EnergyFlow、DeskHaven、ADHD Focus Timer は、エネルギー記録、ローカルファイル整理、集中タイマーを扱います。",
      "各製品ページは実画面、価格、プライバシー、法的条件、入手先を中心に構成されています。"
    ],
    "philosophyTitle": "ページ方針",
    "philosophy": [
      [
        "実際",
        "実際の画面と機能を示します。"
      ],
      [
        "明確",
        "インストール前に必要な情報を決まった場所に置きます。"
      ],
      [
        "控えめ",
        "装飾的な文章を減らし、製品そのものを見せます。"
      ],
      [
        "確認可能",
        "入手先、価格、ポリシーリンクを直接確認できます。"
      ]
    ],
    "techTitle": "技術方針",
    "tech": [
      "Windows デスクトップアプリ",
      "ローカル優先ストレージ",
      "統計と可視化",
      "プライバシーを意識した設計"
    ],
    "ctaTitle": "製品、協業、フィードバックについて話しますか？",
    "ctaDescription": "実際のメッセージはすべて大切に読みます。",
    "ctaButton": "連絡する"
  },
  "contact": {
    "title": "連絡",
    "intro": "製品フィードバック、協業の相談、メディア問い合わせ、または短い挨拶でもメールでどうぞ。",
    "infoTitle": "連絡先",
    "email": "メール"
  },
  "footer": {
    "subtitle": "Chicken Fillet の独立系デスクトップソフトウェアスタジオ。",
    "studio": "スタジオ",
    "products": "製品",
    "legal": "法務",
    "about": "概要",
    "contact": "連絡",
    "privacy": "プライバシーポリシー",
    "copyright": "静かで控えめ、プライバシー優先のデスクトップツール。"
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "ページが見つからないか、リンクが移動しました。",
      "button": "製品に戻る"
    },
    "payment": {
      "title": "ADHD Focus Timer のサポートについて",
      "description": "ADHD Focus Timer は無料で使えます。このページでは任意のサポート、支払い方法、連絡先を説明します。",
      "sections": [
        [
          "無料で使えます",
          "ADHD Focus Timer は無料でダウンロードして使えます。主要機能は支払いで制限されません。"
        ],
        [
          "任意のサポート",
          "役に立った場合のみ、PayPal で独立開発を任意に支援できます。支援は購入ではなく、追加機能を解放しません。"
        ],
        [
          "支払い方法",
          "現在は PayPal.me で支援を受け付けています。取引は PayPal により処理されます。"
        ],
        [
          "購入ではありません",
          "これはソフトウェア購入ではなく、継続開発と保守への任意支援です。"
        ],
        [
          "困ったとき",
          "支払いまたは支援に関する質問は 3371436706@qq.com へ連絡してください。"
        ]
      ],
      "backButton": "返金について"
    },
    "refund": {
      "title": "返金について",
      "description": "Notes about optional support and refund handling.",
      "sections": [
        [
          "無料ダウンロード",
          "ADHD Focus Timer は無料ソフトウェアで、主要機能の利用に支払いは不要です。"
        ],
        [
          "任意の支援",
          "支援金は任意のチップであり、商品購入ではなく、追加機能を解放しません。"
        ],
        [
          "返金の原則",
          "任意支援のため、通常の商品注文と同じ返金処理にはなりません。"
        ],
        [
          "特別な場合",
          "重複支払い、誤操作などがあった場合は 72 時間以内にメールで連絡してください。できる限り対応します。"
        ],
        [
          "返信時間",
          "有効な返金相談には通常 48 時間以内に返信します。"
        ],
        [
          "連絡先",
          "支払い証明と簡単な説明を添えて 3371436706@qq.com へ送ってください。"
        ]
      ],
      "paymentGuide": "ADHD Focus Timer のサポートについて",
      "backButton": "製品に戻る"
    },
    "websitePrivacy": {
      "title": "ウェブサイトのプライバシーについて",
      "intro": "SoloCraft 公式サイトは静的な製品サイトです。問い合わせフォーム、アカウント、アクセス解析、広告追跡はなく、ページ上でアプリデータ、ファイル内容、閲覧プロファイルを収集しません。",
      "updated": "最終更新：2026年6月28日",
      "sections": [
        [
          "サイトは情報を能動的に収集しません",
          "ページコードは氏名、メール、電話番号、ファイル内容、デスクトップデータ、エネルギー記録、集中記録などを能動的に収集しません。"
        ],
        [
          "問い合わせフォームはありません",
          "メールリンクから送信した内容は、利用者が選んだメールサービス経由で送られます。これは任意の連絡であり、自動収集ではありません。"
        ],
        [
          "解析や広告追跡はありません",
          "Google Analytics、広告ピクセル、行動プロファイル、第三者マーケティング追跡スクリプトは使用していません。"
        ],
        [
          "製品データとは分離されています",
          "各アプリのデータは対応するデスクトップアプリがローカルで処理します。サイトはデータベース、索引、関係図、記録を読み取りません。"
        ],
        [
          "ホスティングの基本ログ",
          "ホスティングやブラウザの通信層では、セキュリティ、キャッシュ、障害調査のために IP、時刻、User-Agent、パスなどの基本ログが生じる場合があります。"
        ],
        [
          "連絡",
          "プライバシーに関する質問は 3371436706@qq.com へ。不要なパスワード、秘密鍵、身分証などは送らないでください。"
        ]
      ]
    }
  }
} as const;

const koNav = {
  "home": "홈",
  "about": "소개",
  "products": "제품",
  "contact": "연락",
  "language": "언어 선택"
} as const;

const koCopy = {
  "common": {
    "productPromise": "제품 정보",
    "experienceFlow": "사용 흐름",
    "productIndex": "제품",
    "operatingPrinciples": "원칙",
    "designPrinciples": "설계 메모",
    "step": "단계",
    "viewProducts": "제품 보기",
    "contact": "연락",
    "getUpdates": "문의",
    "microsoftStore": "Microsoft Store",
    "privacy": "개인정보 처리방침",
    "backToProducts": "제품으로 돌아가기"
  },
  "home": {
    "eyebrow": "독립 데스크톱 소프트웨어 스튜디오",
    "title": "에너지 기록, 파일 정리, 집중 타이머.",
    "intro": "SoloCraft는 Chicken Fillet의 출시된 Windows 앱을 소개합니다. 각 제품 페이지에서 실제 화면, 기능, 가격, 개인정보 처리방침, 법적 조건, Microsoft Store 링크를 확인할 수 있습니다.",
    "primary": "제품 보기",
    "secondary": "SoloCraft 소개",
    "currentProduct": "현재 표시",
    "notes": [
      [
        "실제 화면",
        "제품 페이지는 실제 앱 스크린샷과 포스터를 사용합니다."
      ],
      [
        "로컬 우선",
        "중요한 데이터는 먼저 Windows 기기 안에서 처리되도록 설계합니다."
      ],
      [
        "명확한 가격",
        "현재 지역에 맞는 가격 하나를 표시하며 최종 가격은 Microsoft Store 기준입니다."
      ],
      [
        "다운로드 경로",
        "각 제품 페이지에서 Microsoft Store로 이동할 수 있습니다."
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "에너지와 업무 상태 기록.",
        "body": "에너지 수준, 업무 상태, 원인, 기분을 빠르게 기록하고 추세와 통계로 변화를 확인합니다.",
        "bullets": [
          "5단계 에너지",
          "업무 맥락",
          "상관 + 카이제곱",
          "로컬 개인정보"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "로컬 파일 정리.",
        "body": "흩어진 파일을 검색, 보관, 복구 가능한 로컬 작업 공간으로 모읍니다.",
        "bullets": [
          "로컬 공간",
          "관계 지도",
          "파일 보관소",
          "AES-256"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "집중 세션 설정.",
        "body": "생성형 환경음, 믹스, 정방향 타이머, 생각 저장, 통계로 집중 흐름을 만듭니다.",
        "bullets": [
          "정방향 타이머",
          "호흡 가이드",
          "Idea Fridge",
          "로컬 개인정보"
        ]
      }
    ],
    "principlesTitle": "필요한 정보만 보여줍니다.",
    "principlesBody": "앱의 기능, 화면, 가격, 데이터 처리 방식, 설치 위치를 정리합니다.",
    "productTitle": "출시된 앱.",
    "studioTitle": "Chicken Fillet의 Windows 앱 페이지.",
    "studioBody": "출시된 앱과 설치 전 확인할 정보를 한곳에 정리합니다.",
    "studioNote": "EnergyFlow, DeskHaven, ADHD Focus Timer는 에너지 기록, 로컬 파일 정리, 집중 타이머를 다룹니다."
  },
  "products": {
    "eyebrow": "제품",
    "title": "출시된 Windows 앱.",
    "intro": "각 제품 페이지에는 실제 화면, 주요 기능, 가격, 개인정보 처리방침, 법적 조건, Microsoft Store 링크가 있습니다."
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "업무 에너지 대시보드",
      "description": "에너지, 기분, 압박, 활동을 기록하고 타임라인과 분석으로 장기 변화를 확인합니다.",
      "status": "출시됨"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "데스크톱 파일 안식처",
      "description": "로컬 파일 정리, 보관, 관계 보기, 백업, 개인정보 제어를 제공합니다.",
      "status": "출시됨"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "몰입형 집중 타이머",
      "description": "환경음, 정방향 타이머, 생각 저장, 통계로 집중 흐름을 완성합니다.",
      "status": "출시됨"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / 업무 에너지 대시보드",
    "title": "업무 에너지가 어디로 흐르는지 이해하세요.",
    "intro": "5단계 에너지, 업무 맥락, 회복 요인, 기분을 몇 초 안에 기록합니다.",
    "status": "출시됨",
    "promiseTitle": "또 하나의 할 일 앱이 아니라 에너지 리듬 대시보드.",
    "promise": "더 열심히 일하게 만드는 도구가 아니라 회의, 야근, 깊은 작업, 휴식이 에너지에 미치는 비용을 보여줍니다.",
    "features": [
      [
        "3초 기록",
        "최소한의 마찰로 에너지와 맥락을 남깁니다."
      ],
      [
        "명암 모드",
        "집중과 낮 시간 업무에 맞는 차분한 화면."
      ],
      [
        "데스크톱 상주",
        "떠 있는 진입점과 단축키로 흐름을 끊지 않습니다."
      ],
      [
        "통계 인사이트",
        "상관과 카이제곱으로 맥락의 영향을 봅니다."
      ],
      [
        "개인정보 보호",
        "에너지 데이터는 민감하므로 로컬 우선을 기본으로 합니다."
      ]
    ],
    "flow": [
      "상태 기록",
      "맥락 축적",
      "패턴 확인",
      "리듬 조정"
    ],
    "gallery": {
      "eyebrow": "실제 화면",
      "title": "EnergyFlow 전체 화면을 살펴보세요.",
      "body": "13개의 실제 화면에서 로컬 잠금, 빠른 기록, 멀티미디어, 호흡, 타임라인, 분석, 알림, 암호화 백업을 확인할 수 있습니다."
    },
    "flowIntro": {
      "title": "짧은 기록에서 조정 가능한 작업 리듬으로.",
      "body": "EnergyFlow는 또 다른 관리 부담을 만들기 위한 도구가 아닙니다. 짧은 기록이 쌓이면 무엇이 있었는지, 어디에서 에너지가 바뀌었는지, 어떤 작업 패턴을 조정해야 하는지 나중에 확인할 수 있습니다.",
      "cardTitle": "흐름의 원칙",
      "cardBody": "기록이 가벼울수록 습관은 오래갑니다. 기록이 안정될수록 작업 맥락과 에너지의 관계가 더 잘 보입니다."
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / 데스크톱 파일 안식처",
    "title": "모든 파일을 위한 개인 작업대.",
    "intro": "DeskHaven은 로컬 우선 Windows 데스크톱 정리 도구입니다. 보관함, 관계 지도, 개인정보 제어, 자동화로 파일을 차분하게 정리합니다.",
    "status": "출시됨",
    "promiseTitle": "시끄러운 파일 관리자가 아닌 조용한 콘텐츠 작업공간.",
    "promise": "파일을 숨기는 것이 아니라 관계를 이해하게 돕습니다.",
    "features": [
      [
        "전체를 먼저 보기",
        "대시보드가 파일 수, 관계, 암호화 상태, 저장 추세를 요약합니다."
      ],
      [
        "파일 보관함",
        "로컬 파일과 메타데이터를 조용히 관리합니다."
      ],
      [
        "관계 지도",
        "파일, 태그, 주제, 프로젝트의 연결을 봅니다."
      ],
      [
        "개인정보와 제어",
        "키, 가져오기, 내보내기, 암호화를 명확히 둡니다."
      ],
      [
        "조용한 자동화",
        "정리가 매일의 새 부담이 되지 않게 합니다."
      ]
    ],
    "principles": [
      [
        "로컬 우선",
        "중요한 파일과 색인은 기본적으로 로컬에서 처리합니다."
      ],
      [
        "제어 가능",
        "파일 위치와 복구 방법을 알 수 있습니다."
      ],
      [
        "관계 중심",
        "프로젝트와 태그의 연결을 이해합니다."
      ],
      [
        "직접적인 흐름",
        "정리가 자연스럽게 일어납니다."
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "집중으로 들어가는 입구를 더 조용하고 지속 가능하게.",
    "intro": "새 ADHD Focus Timer는 소음, 떠오르는 생각, 카운트다운 압박에 쉽게 끊기는 사용자를 위해 설계되었습니다. 실시간 사운드스케이프, 호흡 전환, 정방향 타이머, Idea Fridge, 누적 통계가 더 부드러운 집중 시작을 돕습니다.",
    "status": "출시됨",
    "promiseTitle": "빨리 끝내라고 밀어붙이지 않고, 시작 비용을 낮춥니다.",
    "promise": "1.5.0은 인터페이스, 오디오, 다국어 경험을 다시 정리했습니다. 비, 바람, 바다, 밤소리는 Web Audio로 로컬에서 생성되어 큰 오디오 파일을 포함하지 않습니다. 믹서, 8D 공간감, 완료 알림음도 현재 상태에 맞게 조절할 수 있습니다.",
    "features": [
      [
        "환경을 먼저 정하기",
        "언어, 시간, 소리, 가이드를 시작 전에 정해 집중 중 결정을 줄입니다."
      ],
      [
        "실시간 집중 사운드",
        "비, 바람, 바다, 밤소리를 로컬에서 합성해 앱을 가볍고 긴 루프에 적합하게 유지합니다."
      ],
      [
        "믹서와 8D 공간감",
        "여러 소리 레이어를 조절하고 필요할 때 공간 이동감을 켤 수 있습니다."
      ],
      [
        "호흡 전환",
        "짧은 호흡 리듬으로 갑작스러운 시작 대신 상태를 부드럽게 바꿉니다."
      ],
      [
        "정방향 타이머와 입자",
        "시간을 쌓아 실패감을 줄이고, 입자는 주의를 빼앗지 않는 피드백을 줍니다."
      ],
      [
        "Idea Fridge",
        "갑자기 떠오른 생각을 잠시 저장하고 현재 작업을 바로 벗어나지 않게 합니다."
      ],
      [
        "통계와 부드러운 완료",
        "완료 화면은 실제 노력을 기록하고 누적 통계는 장기 진행을 보여 줍니다."
      ]
    ],
    "galleryEyebrow": "인터페이스 스크린샷",
    "galleryTitle": "ADHD Focus Timer 1.5.0 실제 화면.",
    "galleryIntro": "준비 화면, 사운드 믹서, 호흡 전환, 집중 타이머, Idea Fridge, 누적 통계까지 전체 집중 흐름을 실제 화면으로 확인할 수 있습니다. 대응 이미지가 있는 언어는 자동으로 전환됩니다.",
    "galleryItems": [
      [
        "집중 준비",
        "시간, 언어, 환경음을 먼저 선택합니다."
      ],
      [
        "사운드 믹서",
        "여러 분위기 소리를 섞어 집중 상태에 맞춥니다."
      ],
      [
        "호흡 가이드",
        "짧은 전환으로 주의를 작업으로 돌립니다."
      ],
      [
        "집중 세션",
        "정방향 타이머, 입자, 전체 화면 환경으로 낮은 압박의 리듬을 유지합니다."
      ],
      [
        "Idea Fridge",
        "임시 생각을 저장하고 나중에 돌아옵니다."
      ],
      [
        "누적 통계",
        "한 번의 결과가 아니라 장기적인 실제 투입을 봅니다."
      ],
      [
        "지원과 설정",
        "언어, 소리, 개인정보, 지원을 쉽게 찾을 수 있습니다."
      ],
      [
        "휴식 리듬",
        "집중 후 차분한 휴식 상태로 들어가 다음 시작 전 여백을 만듭니다."
      ]
    ]
  },
  "about": {
    "title": "SoloCraft 소개",
    "intro": "SoloCraft는 Chicken Fillet의 독립 Windows 앱 페이지입니다.",
    "story": [
      "출시된 앱과 제품 정보를 한곳에 정리합니다.",
      "EnergyFlow, DeskHaven, ADHD Focus Timer는 에너지 기록, 로컬 파일 정리, 집중 타이머를 다룹니다.",
      "각 제품 페이지는 실제 화면, 가격, 개인정보 처리방침, 법적 조건, 다운로드 링크를 중심으로 구성됩니다."
    ],
    "philosophyTitle": "페이지 원칙",
    "philosophy": [
      [
        "실제",
        "실제 인터페이스와 기능을 보여줍니다."
      ],
      [
        "명확",
        "설치 전 확인할 정보를 고정된 위치에 둡니다."
      ],
      [
        "절제",
        "장식적인 문구를 줄이고 제품 자체를 보여줍니다."
      ],
      [
        "확인 가능",
        "다운로드, 가격, 정책 링크를 바로 확인할 수 있습니다."
      ]
    ],
    "techTitle": "기술 방향",
    "tech": [
      "Windows 데스크톱 앱",
      "로컬 우선 저장소",
      "통계와 시각화",
      "개인정보를 고려한 제품 설계"
    ],
    "ctaTitle": "제품, 협업, 피드백에 대해 이야기할까요?",
    "ctaDescription": "실제 메시지는 모두 신중하게 읽습니다.",
    "ctaButton": "연락하기"
  },
  "contact": {
    "title": "연락",
    "intro": "제품 피드백, 협업 아이디어, 미디어 문의 또는 짧은 인사도 이메일로 보내 주세요.",
    "infoTitle": "연락처",
    "email": "이메일"
  },
  "footer": {
    "subtitle": "Chicken Fillet의 독립 데스크톱 소프트웨어 스튜디오.",
    "studio": "스튜디오",
    "products": "제품",
    "legal": "법무",
    "about": "소개",
    "contact": "연락",
    "privacy": "개인정보 처리방침",
    "copyright": "조용하고 절제된 개인정보 우선 데스크톱 도구."
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "페이지가 없거나 링크가 이동되었습니다.",
      "button": "제품으로 돌아가기"
    },
    "payment": {
      "title": "ADHD Focus Timer 지원 안내",
      "description": "ADHD Focus Timer는 무료로 사용할 수 있습니다. 이 페이지는 선택적 후원, 결제 처리, 문의 방법을 설명합니다.",
      "sections": [
        [
          "무료 사용",
          "ADHD Focus Timer는 무료로 다운로드하고 사용할 수 있습니다. 핵심 기능은 결제로 제한되지 않습니다."
        ],
        [
          "선택적 후원",
          "도움이 되었다면 PayPal로 독립 개발을 자발적으로 지원할 수 있습니다. 후원은 구매가 아니며 추가 기능을 열지 않습니다."
        ],
        [
          "결제 방법",
          "현재 PayPal.me를 통해 후원을 받고 결제는 PayPal에서 처리합니다."
        ],
        [
          "구매가 아닙니다",
          "이 과정은 소프트웨어 구매가 아니라 지속 개발과 유지 관리를 위한 선택적 지원입니다."
        ],
        [
          "도움이 필요할 때",
          "결제 또는 후원 관련 질문은 3371436706@qq.com 으로 보내 주세요."
        ]
      ],
      "backButton": "환불 안내 보기"
    },
    "refund": {
      "title": "환불 안내 보기",
      "description": "Notes about optional support and refund handling.",
      "sections": [
        [
          "무료 다운로드",
          "ADHD Focus Timer는 무료 소프트웨어이며 핵심 기능 사용에 결제가 필요하지 않습니다."
        ],
        [
          "선택적 후원",
          "후원금은 자발적 팁이며 상품 구매가 아니고 추가 기능을 제공하지 않습니다."
        ],
        [
          "환불 원칙",
          "후원은 자발적 성격이므로 일반 상품 주문 환불처럼 처리되지 않습니다."
        ],
        [
          "특별한 경우",
          "중복 결제나 실수 결제가 있으면 72시간 이내에 메일로 연락해 주세요. 가능한 범위에서 돕겠습니다."
        ],
        [
          "응답 시간",
          "유효한 환불 문의에는 보통 48시간 이내에 답변합니다."
        ],
        [
          "연락처",
          "결제 증빙과 간단한 설명을 첨부해 3371436706@qq.com 으로 보내 주세요."
        ]
      ],
      "paymentGuide": "ADHD Focus Timer 지원 안내",
      "backButton": "제품으로 돌아가기"
    },
    "websitePrivacy": {
      "title": "웹사이트 개인정보 안내",
      "intro": "SoloCraft 공식 사이트는 정적 제품 사이트입니다. 문의 양식, 계정, 분석 스크립트, 광고 추적이 없으며 페이지에서 앱 데이터, 파일 내용, 탐색 프로필을 수집하지 않습니다.",
      "updated": "최종 업데이트: 2026년 6월 28일",
      "sections": [
        [
          "웹사이트는 정보를 능동적으로 수집하지 않습니다",
          "페이지 코드는 이름, 이메일, 전화번호, 파일 내용, 데스크톱 데이터, 에너지 기록, 집중 기록 등 개인 정보를 능동적으로 수집하지 않습니다."
        ],
        [
          "문의 양식이 없습니다",
          "이메일 링크를 눌러 메시지를 보내면 사용자가 선택한 메일 서비스로 전송됩니다. 이는 자발적 연락이며 자동 수집이 아닙니다."
        ],
        [
          "분석 또는 광고 추적 없음",
          "Google Analytics, 광고 픽셀, 행동 프로필, 타사 마케팅 추적 스크립트를 사용하지 않습니다."
        ],
        [
          "제품 데이터와 분리",
          "각 앱 데이터는 해당 데스크톱 앱에서 로컬 처리됩니다. 웹사이트는 앱 데이터베이스, 파일 색인, 관계 지도, 기록을 읽지 않습니다."
        ],
        [
          "호스팅 기본 로그",
          "호스팅 서비스나 브라우저 네트워크 계층에서 보안, 캐시, 문제 해결을 위해 IP, 시간, User-Agent, 요청 경로 등 기본 로그가 생길 수 있습니다."
        ],
        [
          "연락",
          "개인정보 관련 질문은 3371436706@qq.com 으로 보내 주세요. 불필요한 비밀번호, 개인 키, 신분증 등 민감한 내용은 보내지 마세요."
        ]
      ]
    }
  }
} as const;

const frNav = {
  "home": "Accueil",
  "about": "À propos",
  "products": "Produits",
  "contact": "Contact",
  "language": "Choisir la langue"
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
    "backToProducts": "Retour aux produits"
  },
  "home": {
    "eyebrow": "Studio indépendant de logiciels desktop",
    "title": "Énergie, fichiers et sessions de concentration.",
    "intro": "SoloCraft présente les applications Windows publiées par Chicken Fillet. Chaque page produit montre les vrais écrans, les fonctions, le prix, la confidentialité, les conditions légales et le lien Microsoft Store.",
    "primary": "Voir les produits",
    "secondary": "À propos",
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
        "Prix clair",
        "Une seule valeur adaptée à la région est affichée; Microsoft Store fait foi."
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
    "principlesBody": "Le site indique ce que fait l'app, son interface, son prix, son traitement des données et son point d'installation.",
    "productTitle": "Applications publiées.",
    "studioTitle": "La page Windows apps de Chicken Fillet.",
    "studioBody": "Cette page rassemble les applications publiées et les informations à vérifier avant installation.",
    "studioNote": "EnergyFlow, DeskHaven et ADHD Focus Timer couvrent le suivi d'énergie, l'organisation locale des fichiers et le focus."
  },
  "products": {
    "eyebrow": "Produits",
    "title": "Applications Windows publiées.",
    "intro": "Chaque page produit réunit captures réelles, fonctions, prix, confidentialité, conditions légales et lien Microsoft Store."
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "Tableau d'énergie au travail",
      "description": "Notez énergie, humeur, pression et activité, puis relisez leur évolution dans la chronologie et les rapports.",
      "status": "Disponible"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "Havre de fichiers desktop",
      "description": "Organisez les fichiers locaux, archivez, visualisez les relations, sauvegardez et gardez le contrôle.",
      "status": "Disponible"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "Minuteur de concentration immersif",
      "description": "Utilisez sons ambiants, timer progressif, capture d'idées et statistiques pour suivre une session.",
      "status": "Disponible"
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
    "eyebrow": "DeskHaven / Havre de fichiers desktop",
    "title": "Un bureau privé pour chaque fichier.",
    "intro": "DeskHaven est un outil Windows local-first pour organiser les fichiers avec coffres, relations, confidentialité et automatisation.",
    "status": "Disponible",
    "promiseTitle": "Un espace calme pour le contenu, pas un gestionnaire bruyant.",
    "promise": "DeskHaven ne cache pas les fichiers : il rend leurs liens plus compréhensibles.",
    "features": [
      [
        "Vue d'ensemble",
        "Le tableau résume fichiers, relations, chiffrement et stockage."
      ],
      [
        "Coffre de fichiers",
        "Une couche locale calme pour fichiers et métadonnées."
      ],
      [
        "Carte de relations",
        "Voir les liens entre fichiers, tags, sujets et projets."
      ],
      [
        "Confidentialité et contrôle",
        "Clés, import, export et chiffrement restent lisibles."
      ],
      [
        "Automatisation discrète",
        "Le rangement se fait en arrière-plan sans nouvelle charge."
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
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "Une entrée plus calme vers une concentration durable.",
    "intro": "Le nouveau ADHD Focus Timer s'adresse aux personnes facilement interrompues par le bruit, les pensées soudaines et la pression du compte à rebours. Ambiances sonores en temps réel, respiration, chronométrage progressif, Idea Fridge et statistiques cumulées aident à entrer dans le focus plus doucement.",
    "status": "Disponible",
    "promiseTitle": "Il ne vous pousse pas à vous dépêcher. Il réduit le coût du départ.",
    "promise": "La version 1.5.0 reconstruit l'interface, l'audio et l'expérience multilingue. Pluie, vent, océan et sons nocturnes sont générés localement avec Web Audio, sans gros fichiers audio intégrés. Le mixeur, l'effet spatial 8D et le carillon de fin restent réglables.",
    "features": [
      [
        "Préparer l'environnement",
        "Choisir langue, durée, son et guidage avant la session réduit les décisions pendant le focus."
      ],
      [
        "Ambiances générées en temps réel",
        "Pluie, vent, océan et nuit sont synthétisés localement, pour une app légère et agréable en boucle longue."
      ],
      [
        "Mixeur et espace 8D",
        "Équilibrez les couches sonores et activez le mouvement spatial quand le fond sonore doit être plus présent."
      ],
      [
        "Transition respiratoire",
        "Un rythme court aide à entrer dans la session sans choc de départ."
      ],
      [
        "Chronomètre progressif et particules",
        "Le temps s'accumule au lieu de compter vers l'échec ; les particules restent discrètes."
      ],
      [
        "Idea Fridge",
        "Les pensées soudaines peuvent être gardées pour plus tard sans quitter la tâche."
      ],
      [
        "Statistiques et fin douce",
        "L'écran de fin note l'effort réel, tandis que les statistiques montrent les progrès dans le temps."
      ]
    ],
    "galleryEyebrow": "Captures d'écran",
    "galleryTitle": "L’interface réelle d’ADHD Focus Timer 1.5.0.",
    "galleryIntro": "De la préparation au mixage sonore, puis de la respiration au chronomètre, à l’Idea Fridge et aux statistiques, ces captures montrent le parcours complet de concentration. Les images changent automatiquement quand la langue dispose d’un jeu dédié.",
    "galleryItems": [
      [
        "Préparation",
        "Choisissez durée, langue et ambiance avant de commencer."
      ],
      [
        "Mixeur sonore",
        "Mélangez plusieurs couches selon l'état de concentration."
      ],
      [
        "Guide respiratoire",
        "Une courte transition ramène l'attention vers la tâche."
      ],
      [
        "Session de focus",
        "Chronomètre progressif, particules et plein écran maintiennent un rythme doux."
      ],
      [
        "Idea Fridge",
        "Capturez les pensées temporaires sans quitter la session."
      ],
      [
        "Statistiques cumulées",
        "Regardez l'effort réel dans le temps, pas une seule session."
      ],
      [
        "Support et réglages",
        "Langue, son, confidentialité et support restent faciles à trouver."
      ],
      [
        "Rythme de pause",
        "Passer à une pause calme après le focus, avec de l’espace avant la prochaine session."
      ]
    ]
  },
  "about": {
    "title": "À propos de SoloCraft",
    "intro": "SoloCraft est la page indépendante des apps Windows de Chicken Fillet.",
    "story": [
      "Le site regroupe les applications publiées et leurs informations produit.",
      "EnergyFlow, DeskHaven et ADHD Focus Timer couvrent le suivi d'énergie, l'organisation locale des fichiers et les sessions de focus.",
      "Chaque page produit met en avant captures réelles, prix, confidentialité, conditions légales et liens de téléchargement."
    ],
    "philosophyTitle": "Principes de page",
    "philosophy": [
      [
        "Réel",
        "Montrer l'interface et le comportement du produit."
      ],
      [
        "Clair",
        "Placer les informations avant installation à des endroits prévisibles."
      ],
      [
        "Sobre",
        "Limiter le texte décoratif et laisser le produit visible."
      ],
      [
        "Vérifiable",
        "Rendre directs les liens de téléchargement, prix et politiques."
      ]
    ],
    "techTitle": "Direction technique",
    "tech": [
      "Applications Windows desktop",
      "Stockage local-first",
      "Statistiques et visualisation",
      "Design attentif à la vie privée"
    ],
    "ctaTitle": "Parler produit, collaboration ou feedback ?",
    "ctaDescription": "Je lis attentivement chaque vrai message.",
    "ctaButton": "Me contacter"
  },
  "contact": {
    "title": "Contact",
    "intro": "Retours produit, idées de collaboration, demandes presse ou simple bonjour peuvent arriver par e-mail.",
    "infoTitle": "Coordonnées",
    "email": "E-mail"
  },
  "footer": {
    "subtitle": "Studio indépendant de logiciels desktop par Chicken Fillet.",
    "studio": "Studio",
    "products": "Produits",
    "legal": "Mentions",
    "about": "À propos",
    "contact": "Contact",
    "privacy": "Confidentialité",
    "copyright": "Outils desktop calmes, sobres et respectueux de la vie privée."
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "Cette page n’existe pas ou le lien a changé.",
      "button": "Retour aux produits"
    },
    "payment": {
      "title": "Notes de soutien pour ADHD Focus Timer",
      "description": "ADHD Focus Timer est gratuit. Cette page explique le soutien facultatif, le paiement et le contact.",
      "sections": [
        [
          "Utilisation gratuite",
          "ADHD Focus Timer peut être téléchargé et utilisé gratuitement. Les fonctions principales ne sont pas bloquées par un paiement."
        ],
        [
          "Soutien facultatif",
          "Si l’app vous aide, vous pouvez soutenir le développement indépendant via PayPal. Ce soutien n’est pas un achat et ne débloque aucune fonction supplémentaire."
        ],
        [
          "Mode de paiement",
          "Le soutien est actuellement reçu via PayPal.me et traité par PayPal."
        ],
        [
          "Ce n’est pas un achat",
          "Il ne s’agit pas d’un paiement logiciel, mais d’un soutien facultatif au développement et à la maintenance."
        ],
        [
          "Besoin d’aide",
          "Pour toute question de paiement ou de soutien, écrivez à 3371436706@qq.com."
        ]
      ],
      "backButton": "Voir les notes de remboursement"
    },
    "refund": {
      "title": "Voir les notes de remboursement",
      "description": "Notes about optional support and refund handling.",
      "sections": [
        [
          "Téléchargement gratuit",
          "ADHD Focus Timer est un logiciel gratuit ; aucun paiement n’est requis pour les fonctions principales."
        ],
        [
          "Soutien facultatif",
          "Les paiements de soutien sont des contributions volontaires, pas des achats, et ne débloquent aucune fonction."
        ],
        [
          "Principe de remboursement",
          "Comme le soutien est volontaire, il n’est généralement pas traité comme un remboursement de commande classique."
        ],
        [
          "Cas particuliers",
          "En cas de paiement en double ou accidentel, contactez-moi par e-mail sous 72 heures et j’essaierai d’aider."
        ],
        [
          "Délai de réponse",
          "Les demandes réelles sont généralement traitées sous 48 heures."
        ],
        [
          "Contact",
          "Envoyez une preuve de paiement et une courte explication à 3371436706@qq.com."
        ]
      ],
      "paymentGuide": "Notes de soutien pour ADHD Focus Timer",
      "backButton": "Retour aux produits"
    },
    "websitePrivacy": {
      "title": "Notice de confidentialité du site",
      "intro": "Le site SoloCraft est un site produit statique. Il n’a pas de formulaire, ne demande pas de compte, n’utilise pas d’analyse ni de suivi publicitaire, et ne collecte pas les données des apps, fichiers ou profils de navigation.",
      "updated": "Dernière mise à jour : 28 juin 2026",
      "sections": [
        [
          "Aucune collecte active par le site",
          "Le code de la page ne collecte pas activement nom, e-mail, téléphone, contenu de fichiers, données desktop, journaux d’énergie ou sessions de focus."
        ],
        [
          "Aucun formulaire de contact",
          "Si vous envoyez un e-mail via un lien, le message passe par le service que vous choisissez. C’est un contact volontaire, pas une collecte automatique."
        ],
        [
          "Aucune analyse ni publicité",
          "Le site n’utilise pas Google Analytics, pixels publicitaires, profilage comportemental ni scripts marketing tiers."
        ],
        [
          "Données produit séparées",
          "Les données EnergyFlow, DeskHaven et ADHD Focus Timer sont traitées localement dans les apps. Le site ne lit pas bases, index, cartes de relations ou enregistrements."
        ],
        [
          "Journaux d’infrastructure",
          "L’hébergeur ou le navigateur peut produire des journaux de base comme IP, heure, User-Agent ou chemin, pour sécurité, cache et dépannage."
        ],
        [
          "Contact",
          "Questions confidentialité : 3371436706@qq.com. N’envoyez pas de mots de passe, clés privées, documents d’identité ou contenus très sensibles inutiles."
        ]
      ]
    }
  }
} as const;

const deNav = {
  "home": "Start",
  "about": "Über uns",
  "products": "Produkte",
  "contact": "Kontakt",
  "language": "Sprache wählen"
} as const;

const deCopy = {
  "common": {
    "productPromise": "Produktdetails",
    "experienceFlow": "Ablauf",
    "productIndex": "Produkte",
    "operatingPrinciples": "Prinzipien",
    "designPrinciples": "Designhinweise",
    "step": "Schritt",
    "viewProducts": "Produkte ansehen",
    "contact": "Kontakt",
    "getUpdates": "Kontakt",
    "microsoftStore": "Microsoft Store",
    "privacy": "Datenschutz",
    "backToProducts": "Zurück zu Produkten"
  },
  "home": {
    "eyebrow": "Unabhängiges Desktop-Softwarestudio",
    "title": "Energieprotokolle, Dateiordnung und Fokuszeit.",
    "intro": "SoloCraft zeigt veröffentlichte Windows-Apps von Chicken Fillet. Jede Produktseite enthält echte Ansichten, Funktionen, Preise, Datenschutz, rechtliche Hinweise und den Microsoft-Store-Link.",
    "primary": "Produkte ansehen",
    "secondary": "Über SoloCraft",
    "currentProduct": "Aktuell gezeigt",
    "notes": [
      [
        "Echte Ansichten",
        "Produktseiten nutzen Screenshots und Poster der App, keine abstrakten Platzhalter."
      ],
      [
        "Lokal zuerst",
        "Wichtige Daten sollen zuerst auf dem Windows-Gerät bleiben."
      ],
      [
        "Klare Preise",
        "Es wird ein regional passender Preis angezeigt; Microsoft Store bleibt maßgeblich."
      ],
      [
        "Direkter Download",
        "Jede Produktseite führt zum Microsoft Store."
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "Energie und Arbeitsstatus erfassen.",
        "body": "Energie, Arbeitsstatus, Quellen und Stimmung protokollieren und mit Trends prüfen.",
        "bullets": [
          "5 Stufen",
          "Arbeitskontext",
          "Korrelation + Chi-Quadrat",
          "Lokale Privatsphäre"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "Lokale Dateien ordnen.",
        "body": "Verstreute Dateien in einem suchbaren, archivierbaren und wiederherstellbaren lokalen Arbeitsraum sammeln.",
        "bullets": [
          "Lokaler Raum",
          "Beziehungskarte",
          "Tresor",
          "AES-256"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "Eine Fokus-Sitzung vorbereiten.",
        "body": "Generierte Umgebungsgeräusche, Mischung, Vorwärts-Timer, Ideenspeicher und Statistiken nutzen.",
        "bullets": [
          "Vorwärts-Timer",
          "Atemführung",
          "Idea Fridge",
          "Lokale Privatsphäre"
        ]
      }
    ],
    "principlesTitle": "Nur nützliche Informationen.",
    "principlesBody": "Die Seite zeigt, was die App tut, wie sie aussieht, was sie kostet, wie Daten verarbeitet werden und wo sie installiert wird.",
    "productTitle": "Veröffentlichte Apps.",
    "studioTitle": "Chicken Fillets Windows-App-Seite.",
    "studioBody": "Hier stehen veröffentlichte Apps und die Informationen, die vor der Installation wichtig sind.",
    "studioNote": "EnergyFlow, DeskHaven und ADHD Focus Timer behandeln Energieprotokolle, lokale Dateiordnung und Fokuszeit."
  },
  "products": {
    "eyebrow": "Produkte",
    "title": "Veröffentlichte Windows-Apps.",
    "intro": "Jede Produktseite enthält echte Screenshots, Funktionen, Preis, Datenschutz, rechtliche Hinweise und Microsoft-Store-Link."
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "Energie-Dashboard für Arbeit",
      "description": "Energie, Stimmung, Belastung und Aktivitäten erfassen und langfristige Veränderungen in Zeitleiste und Analysen prüfen.",
      "status": "Verfügbar"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "Desktop-Dateihafen",
      "description": "Lokale Dateien ordnen, archivieren, Beziehungen sehen, sichern und Datenschutz steuern.",
      "status": "Verfügbar"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "Immersiver Fokus-Timer",
      "description": "Umgebungsklang, Vorwärts-Timer, Ideenspeicher und Statistiken für eine Fokus-Sitzung.",
      "status": "Verfügbar"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / Energie-Dashboard",
    "title": "Verstehe, wohin deine Arbeitsenergie geht.",
    "intro": "Erfasse Energie, Kontext, Quelle und Stimmung in wenigen Sekunden.",
    "status": "Verfügbar",
    "promiseTitle": "Keine weitere Aufgaben-App, sondern ein Dashboard für deinen Rhythmus.",
    "promise": "EnergyFlow zeigt die echten Kosten von Meetings, Überstunden, Tiefenarbeit und Pausen.",
    "features": [
      [
        "Drei-Sekunden-Log",
        "Energie und Kontext mit wenig Reibung erfassen."
      ],
      [
        "Hell oder dunkel",
        "Ruhige Modi für Fokus und Tagesarbeit."
      ],
      [
        "Auf dem Desktop",
        "Schwebender Einstieg und Hotkey ohne Unterbrechung."
      ],
      [
        "Statistische Einsicht",
        "Korrelation und Chi-Quadrat zeigen relevante Kontexte."
      ],
      [
        "Datenschutz",
        "Energiedaten sind sensibel und lokal gedacht."
      ]
    ],
    "flow": [
      "Zustand erfassen",
      "Kontext sammeln",
      "Muster prüfen",
      "Rhythmus anpassen"
    ],
    "gallery": {
      "eyebrow": "Echte Oberfläche",
      "title": "Die vollständige EnergyFlow-Oberfläche ansehen.",
      "body": "Dreizehn echte Ansichten zeigen lokalen Zugang, schnelle und multimediale Einträge, Atmung, Zeitleiste, Analysen, Erinnerungen und verschlüsselte Backups."
    },
    "flowIntro": {
      "title": "Vom schnellen Eintrag zu einem anpassbaren Arbeitsrhythmus.",
      "body": "EnergyFlow soll keine weitere Verwaltungsschicht schaffen. Ein kurzer Eintrag wird zu einem später lesbaren Hinweis: was passiert ist, wo Energie kippte und welche Arbeitsmuster Anpassung brauchen.",
      "cardTitle": "Prinzip des Ablaufs",
      "cardBody": "Je leichter der Eintrag, desto eher bleibt die Gewohnheit. Je stabiler die Daten, desto klarer wird der Zusammenhang zwischen Arbeitskontext und Energie."
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / Desktop-Dateihafen",
    "title": "Ein privater Schreibtisch für jede Datei.",
    "intro": "DeskHaven organisiert lokale Windows-Dateien mit Tresoren, Beziehungskarten, Datenschutz und Automatisierung.",
    "status": "Verfügbar",
    "promiseTitle": "Ein ruhiger Arbeitsraum für Inhalte.",
    "promise": "DeskHaven versteckt Dateien nicht, sondern macht Beziehungen verständlich.",
    "features": [
      [
        "Überblick zuerst",
        "Dashboard für Dateien, Beziehungen, Verschlüsselung und Speicher."
      ],
      [
        "Dateitresor",
        "Lokale Dateien und Metadaten ruhig verwalten."
      ],
      [
        "Beziehungskarte",
        "Verbindungen zwischen Dateien, Tags und Projekten sehen."
      ],
      [
        "Datenschutz und Kontrolle",
        "Schlüssel, Import, Export und Verschlüsselung bleiben klar."
      ],
      [
        "Leise Automatisierung",
        "Ordnung passiert im Hintergrund."
      ]
    ],
    "principles": [
      [
        "Local-first",
        "Wichtige Dateien bleiben standardmäßig lokal."
      ],
      [
        "Kontrolliert",
        "Dateien und Wiederherstellung bleiben nachvollziehbar."
      ],
      [
        "Relational",
        "Verbindungen bleiben verständlich."
      ],
      [
        "Reibungsarm",
        "Ordnung wird keine neue Last."
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "Ein ruhigerer Einstieg in nachhaltigen Fokus.",
    "intro": "Der neue ADHD Focus Timer ist für Menschen gedacht, die leicht durch Geräusche, Gedanken und Countdown-Druck unterbrochen werden. Echtzeit-Klangwelten, Atemübergang, Vorwärtszählung, Idea Fridge und kumulative Statistiken helfen, sanfter in den Fokus zu kommen.",
    "status": "Verfügbar",
    "promiseTitle": "Er treibt dich nicht zur Eile. Er senkt die Kosten des Anfangs.",
    "promise": "Version 1.5.0 erneuert Oberfläche, Audio und Mehrsprachigkeit. Regen, Wind, Meer und Nachtklänge werden lokal mit Web Audio erzeugt, ohne große Audiodateien. Mixer, 8D-Raumgefühl und Abschlussklang lassen sich anpassen.",
    "features": [
      [
        "Umgebung zuerst festlegen",
        "Sprache, Dauer, Klang und Führung werden vor der Sitzung gewählt, damit später weniger Entscheidungen stören."
      ],
      [
        "Echtzeit-Klangwelten",
        "Regen, Wind, Meer und Nacht werden lokal synthetisiert, wodurch die App klein und loop-freundlich bleibt."
      ],
      [
        "Mixer und 8D-Raum",
        "Klangschichten balancieren und räumliche Bewegung einschalten, wenn der Hintergrund präsenter sein soll."
      ],
      [
        "Atemübergang",
        "Ein kurzer Atemrhythmus hilft beim Wechsel in die Sitzung, ohne den Start hart wirken zu lassen."
      ],
      [
        "Vorwärtszähler und Partikel",
        "Zeit sammelt sich, statt zum Scheitern herunterzuzählen. Partikel geben dezentes Feedback."
      ],
      [
        "Idea Fridge",
        "Plötzliche Gedanken können für später geparkt werden, ohne die Aufgabe sofort zu verlassen."
      ],
      [
        "Statistiken und sanfter Abschluss",
        "Der Abschluss erfasst echte Anstrengung; kumulative Statistiken zeigen Fortschritt über Zeit."
      ]
    ],
    "galleryEyebrow": "Oberflächen-Screenshots",
    "galleryTitle": "Die echte Oberfläche von ADHD Focus Timer 1.5.0.",
    "galleryIntro": "Von Vorbereitung, Sound-Mix und Atemübergang bis zu Fokuszeit, Idea Fridge und Statistik zeigt diese Galerie den vollständigen Fokusablauf. Passende Sprachversionen wechseln automatisch mit der Website-Sprache.",
    "galleryItems": [
      [
        "Fokus vorbereiten",
        "Dauer, Sprache und Klang vor Beginn wählen."
      ],
      [
        "Sound-Mixer",
        "Mehrere Klangschichten für unterschiedliche Fokuszustände mischen."
      ],
      [
        "Atemführung",
        "Ein kurzer Übergang bringt Aufmerksamkeit zurück zur Aufgabe."
      ],
      [
        "Fokus-Sitzung",
        "Vorwärtszählung, Partikel und Vollbildruhe halten den Druck niedrig."
      ],
      [
        "Idea Fridge",
        "Temporäre Gedanken festhalten, ohne die Sitzung zu verlassen."
      ],
      [
        "Kumulative Statistik",
        "Echte Anstrengung über Zeit sehen, statt eine Sitzung zu bewerten."
      ],
      [
        "Support und Einstellungen",
        "Sprache, Klang, Datenschutz und Support bleiben leicht auffindbar."
      ],
      [
        "Pausenrhythmus",
        "Nach dem Fokus in eine ruhige Pause wechseln, bevor die nächste Sitzung beginnt."
      ]
    ]
  },
  "about": {
    "title": "Über SoloCraft",
    "intro": "SoloCraft ist Chicken Fillets unabhängige Seite für Windows-Apps.",
    "story": [
      "Die Seite bündelt veröffentlichte Apps und Produktinformationen.",
      "EnergyFlow, DeskHaven und ADHD Focus Timer behandeln Energieprotokolle, lokale Dateiordnung und Fokuszeit.",
      "Jede Produktseite zeigt echte Screenshots, Preise, Datenschutz, rechtliche Hinweise und Downloadlinks."
    ],
    "philosophyTitle": "Seitenprinzipien",
    "philosophy": [
      [
        "Echt",
        "Tatsächliche Oberfläche und Produktverhalten zeigen."
      ],
      [
        "Klar",
        "Informationen vor der Installation an feste Stellen setzen."
      ],
      [
        "Zurückhaltend",
        "Dekorative Texte reduzieren und das Produkt sichtbar lassen."
      ],
      [
        "Prüfbar",
        "Download, Preis und Richtlinien direkt verlinken."
      ]
    ],
    "techTitle": "Technische Richtung",
    "tech": [
      "Windows-Desktop-Apps",
      "Local-first-Speicher",
      "Statistik und Visualisierung",
      "Datenschutzbewusstes Produktdesign"
    ],
    "ctaTitle": "Über Produkt, Zusammenarbeit oder Feedback sprechen?",
    "ctaDescription": "Ich lese jede echte Nachricht aufmerksam.",
    "ctaButton": "Kontakt aufnehmen"
  },
  "contact": {
    "title": "Kontakt",
    "intro": "Produktfeedback, Kooperationsideen, Medienanfragen oder ein kurzes Hallo können per E-Mail kommen.",
    "infoTitle": "Kontaktinformationen",
    "email": "E-Mail"
  },
  "footer": {
    "subtitle": "Unabhängiges Desktop-Softwarestudio von Chicken Fillet.",
    "studio": "Studio",
    "products": "Produkte",
    "legal": "Rechtliches",
    "about": "Über uns",
    "contact": "Kontakt",
    "privacy": "Datenschutz",
    "copyright": "Ruhige, zurückhaltende, datenschutzfreundliche Desktop-Tools."
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "Diese Seite existiert nicht oder der Link wurde verschoben.",
      "button": "Zurück zu Produkten"
    },
    "payment": {
      "title": "ADHD Focus Timer unterstützen",
      "description": "ADHD Focus Timer ist kostenlos nutzbar. Diese Seite erklärt freiwillige Unterstützung, Zahlung und Kontakt.",
      "sections": [
        [
          "Kostenlos nutzbar",
          "ADHD Focus Timer kann kostenlos heruntergeladen und genutzt werden. Kernfunktionen sind nicht durch Zahlung gesperrt."
        ],
        [
          "Freiwillige Unterstützung",
          "Wenn die App hilft, können Sie die unabhängige Entwicklung über PayPal freiwillig unterstützen. Das ist kein Kauf und schaltet keine Zusatzfunktionen frei."
        ],
        [
          "Zahlungsweg",
          "Unterstützung wird derzeit über PayPal.me angenommen und von PayPal verarbeitet."
        ],
        [
          "Kein Kauf",
          "Dies ist kein Softwarekauf, sondern freiwillige Unterstützung für Entwicklung und Wartung."
        ],
        [
          "Hilfe",
          "Fragen zu Zahlung oder Unterstützung: 3371436706@qq.com."
        ]
      ],
      "backButton": "Hinweise zur Rückerstattung"
    },
    "refund": {
      "title": "Hinweise zur Rückerstattung",
      "description": "Notes about optional support and refund handling.",
      "sections": [
        [
          "Kostenloser Download",
          "ADHD Focus Timer ist kostenlose Software; für Kernfunktionen ist keine Zahlung nötig."
        ],
        [
          "Freiwillige Unterstützung",
          "Unterstützungszahlungen sind freiwillige Beiträge, keine Produktkäufe, und schalten nichts frei."
        ],
        [
          "Erstattungsprinzip",
          "Da die Unterstützung freiwillig ist, wird sie normalerweise nicht wie eine normale Bestellung erstattet."
        ],
        [
          "Sonderfälle",
          "Bei Doppelzahlung oder Versehen kontaktieren Sie mich bitte innerhalb von 72 Stunden per E-Mail."
        ],
        [
          "Antwortzeit",
          "Echte Erstattungsanfragen werden meist innerhalb von 48 Stunden beantwortet."
        ],
        [
          "Kontakt",
          "Senden Sie Zahlungsnachweis und kurze Erklärung an 3371436706@qq.com."
        ]
      ],
      "paymentGuide": "ADHD Focus Timer unterstützen",
      "backButton": "Zurück zu Produkten"
    },
    "websitePrivacy": {
      "title": "Datenschutzhinweis der Website",
      "intro": "Die SoloCraft-Website ist eine statische Produktseite. Es gibt kein Kontaktformular, kein Konto, keine Analyse- oder Werbeverfolgung, und die Seite sammelt keine App-Daten, Dateiinhalte oder Surfprofile.",
      "updated": "Zuletzt aktualisiert: 28. Juni 2026",
      "sections": [
        [
          "Keine aktive Datenerhebung",
          "Der Seitencode sammelt nicht aktiv Name, E-Mail, Telefonnummer, Dateiinhalte, Desktop-Daten, Energieprotokolle, Fokusaufzeichnungen oder andere personenbezogene Daten."
        ],
        [
          "Kein Kontaktformular",
          "Wenn Sie über einen E-Mail-Link schreiben, wird die Nachricht über den von Ihnen gewählten Dienst gesendet. Das ist freiwilliger Kontakt, keine automatische Sammlung."
        ],
        [
          "Keine Analyse oder Werbung",
          "Die Website nutzt kein Google Analytics, keine Werbepixel, kein Profiling und keine Marketing-Tracking-Skripte."
        ],
        [
          "Produktdaten sind getrennt",
          "App-Daten werden lokal in den jeweiligen Desktop-Apps verarbeitet. Die Website liest keine Datenbanken, Dateiindizes, Beziehungskarten oder Aufzeichnungen."
        ],
        [
          "Infrastrukturprotokolle",
          "Hosting oder Browser-Netzwerk können Basislogs wie IP, Zeit, User-Agent oder Pfad für Sicherheit, Cache und Fehlerbehebung erzeugen."
        ],
        [
          "Kontakt",
          "Fragen zum Datenschutz: 3371436706@qq.com. Senden Sie keine unnötigen Passwörter, privaten Schlüssel, Ausweisdokumente oder hochsensiblen Inhalte."
        ]
      ]
    }
  }
} as const;

const esNav = {
  "home": "Inicio",
  "about": "Acerca de",
  "products": "Productos",
  "contact": "Contacto",
  "language": "Elegir idioma"
} as const;

const esCopy = {
  "common": {
    "productPromise": "Detalles del producto",
    "experienceFlow": "Flujo",
    "productIndex": "Productos",
    "operatingPrinciples": "Principios",
    "designPrinciples": "Notas de diseño",
    "step": "Paso",
    "viewProducts": "Ver productos",
    "contact": "Contacto",
    "getUpdates": "Contacto",
    "microsoftStore": "Microsoft Store",
    "privacy": "Privacidad",
    "backToProducts": "Volver a productos"
  },
  "home": {
    "eyebrow": "Estudio independiente de software de escritorio",
    "title": "Energía, archivos y sesiones de concentración.",
    "intro": "SoloCraft presenta las apps Windows publicadas por Chicken Fillet. Cada página muestra pantallas reales, funciones, precio, privacidad, términos legales y enlace de Microsoft Store.",
    "primary": "Ver productos",
    "secondary": "Acerca de SoloCraft",
    "currentProduct": "Mostrando",
    "notes": [
      [
        "Pantallas reales",
        "Las páginas usan capturas y pósteres de la app, no conceptos abstractos."
      ],
      [
        "Local primero",
        "Los datos importantes se diseñan para permanecer primero en tu dispositivo Windows."
      ],
      [
        "Precio claro",
        "Se muestra un solo precio según la región; Microsoft Store es la referencia final."
      ],
      [
        "Descarga directa",
        "Cada producto enlaza con su ficha de Microsoft Store."
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "Registrar energía y estado de trabajo.",
        "body": "Registra energía, estado, fuentes y ánimo, y revisa cambios con tendencias.",
        "bullets": [
          "5 niveles",
          "Contexto laboral",
          "Correlación + chi cuadrado",
          "Privacidad local"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "Organizar archivos locales.",
        "body": "Reúne archivos dispersos en un espacio local buscable, archivable y recuperable.",
        "bullets": [
          "Espacio local",
          "Mapa de relaciones",
          "Bóveda",
          "AES-256"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "Preparar una sesión de foco.",
        "body": "Usa sonidos generados, mezcla, timer progresivo, captura de ideas y estadísticas.",
        "bullets": [
          "Timer progresivo",
          "Respiración",
          "Idea Fridge",
          "Privacidad local"
        ]
      }
    ],
    "principlesTitle": "Solo la información útil.",
    "principlesBody": "El sitio muestra qué hace la app, cómo se ve, cuánto cuesta, cómo trata los datos y dónde instalarla.",
    "productTitle": "Apps publicadas.",
    "studioTitle": "La página de apps Windows de Chicken Fillet.",
    "studioBody": "Aquí se reúnen las apps publicadas y la información importante antes de instalarlas.",
    "studioNote": "EnergyFlow, DeskHaven y ADHD Focus Timer cubren energía, archivos locales y concentración."
  },
  "products": {
    "eyebrow": "Productos",
    "title": "Apps Windows publicadas.",
    "intro": "Cada página incluye capturas reales, funciones, precio, privacidad, términos legales y enlace de Microsoft Store."
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "Panel de energía laboral",
      "description": "Registra energía, ánimo, presión y actividad, y revisa cambios a largo plazo en la cronología y los informes.",
      "status": "Disponible"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "Refugio de archivos de escritorio",
      "description": "Organiza archivos locales, archiva contenido, muestra relaciones, copias y controles de privacidad.",
      "status": "Disponible"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "Temporizador de foco inmersivo",
      "description": "Usa sonido ambiental, timer progresivo, captura de ideas y estadísticas para una sesión de foco.",
      "status": "Disponible"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / Panel de energía laboral",
    "title": "Entiende a dónde va tu energía de trabajo.",
    "intro": "Registra nivel de energía, contexto, fuente y ánimo en pocos segundos.",
    "status": "Disponible",
    "promiseTitle": "No otra app de tareas, sino un panel para tu ritmo.",
    "promise": "EnergyFlow muestra el costo real de reuniones, horas extra, trabajo profundo y descansos.",
    "features": [
      [
        "Registro en tres segundos",
        "Energía y contexto con mínima fricción."
      ],
      [
        "Claridad clara u oscura",
        "Modos sobrios para foco o trabajo diurno."
      ],
      [
        "Siempre en el escritorio",
        "Entrada flotante y atajo sin cortar el flujo."
      ],
      [
        "Insight estadístico",
        "Correlación y chi cuadrado revelan contextos relevantes."
      ],
      [
        "Privacidad",
        "Los datos de energía son sensibles y se diseñan local-first."
      ]
    ],
    "flow": [
      "Capturar estado",
      "Acumular contexto",
      "Revisar patrones",
      "Ajustar ritmo"
    ],
    "gallery": {
      "eyebrow": "Interfaz real",
      "title": "Ver el conjunto completo de pantallas de EnergyFlow.",
      "body": "Trece pantallas reales muestran acceso local, registros rápidos y multimedia, respiración, cronología, análisis, recordatorios y copias cifradas."
    },
    "flowIntro": {
      "title": "De un registro rápido a un ritmo de trabajo ajustable.",
      "body": "EnergyFlow no añade otra carga de gestión. Un registro breve se convierte en evidencia para revisar después: qué ocurrió, dónde cambió la energía y qué patrones de trabajo conviene ajustar.",
      "cardTitle": "Principio del flujo",
      "cardBody": "Cuanto más ligero es el registro, más probable es que el hábito sobreviva. Cuanto más estable es el historial, más clara se vuelve la relación entre contexto y energía."
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / Refugio de archivos",
    "title": "Un escritorio privado para cada archivo.",
    "intro": "DeskHaven organiza archivos locales de Windows con bóvedas, mapas de relación, privacidad y automatización.",
    "status": "Disponible",
    "promiseTitle": "Un espacio tranquilo para contenido.",
    "promise": "DeskHaven no oculta archivos: ayuda a entender sus relaciones.",
    "features": [
      [
        "Vista general primero",
        "Panel de archivos, relaciones, cifrado y almacenamiento."
      ],
      [
        "Bóveda de archivos",
        "Gestiona archivos y metadatos locales con calma."
      ],
      [
        "Mapa de relaciones",
        "Ve conexiones entre archivos, etiquetas y proyectos."
      ],
      [
        "Privacidad y control",
        "Claves, importación, exportación y cifrado claros."
      ],
      [
        "Automatización discreta",
        "El orden sucede en segundo plano."
      ]
    ],
    "principles": [
      [
        "Local-first",
        "Los archivos importantes se tratan localmente por defecto."
      ],
      [
        "Controlado",
        "El usuario sabe dónde están y cómo recuperarlos."
      ],
      [
        "Relacional",
        "Las conexiones se entienden."
      ],
      [
        "Directo",
        "Organizar no se vuelve otra carga."
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "Una entrada más tranquila hacia el foco sostenido.",
    "intro": "El nuevo ADHD Focus Timer está pensado para personas que se interrumpen fácilmente por ruido, pensamientos sueltos y presión de cuenta regresiva. Ambientes sonoros en tiempo real, respiración, conteo hacia adelante, Idea Fridge y estadísticas acumuladas ayudan a entrar en foco con más suavidad.",
    "status": "Disponible",
    "promiseTitle": "No te empuja a correr. Reduce el costo de empezar.",
    "promise": "La versión 1.5.0 reconstruye la interfaz, el audio y la experiencia multilingüe. Lluvia, viento, océano y sonidos nocturnos se generan localmente con Web Audio, sin archivos de audio enormes. El mezclador, el espacio 8D y el sonido de finalización se pueden ajustar.",
    "features": [
      [
        "Preparar el entorno",
        "Elegir idioma, duración, sonido y guía antes de la sesión reduce decisiones durante el foco."
      ],
      [
        "Ambientes en tiempo real",
        "Lluvia, viento, océano y noche se sintetizan localmente, manteniendo la app ligera para bucles largos."
      ],
      [
        "Mezclador y espacio 8D",
        "Equilibra capas de sonido y activa movimiento espacial cuando quieras un fondo más presente."
      ],
      [
        "Transición respiratoria",
        "Un ritmo breve ayuda a entrar en la sesión sin un inicio brusco."
      ],
      [
        "Conteo progresivo y partículas",
        "El tiempo se acumula en vez de contar hacia el fracaso. Las partículas dan feedback discreto."
      ],
      [
        "Idea Fridge",
        "Guarda pensamientos repentinos para después sin abandonar la tarea actual."
      ],
      [
        "Estadísticas y cierre suave",
        "La pantalla final registra esfuerzo real y las estadísticas muestran progreso en el tiempo."
      ]
    ],
    "galleryEyebrow": "Capturas de interfaz",
    "galleryTitle": "La interfaz real de ADHD Focus Timer 1.5.0.",
    "galleryIntro": "Desde la preparación y la mezcla de sonido hasta la respiración, el temporizador, Idea Fridge y las estadísticas, estas capturas muestran el flujo completo de concentración. Las imágenes cambian automáticamente cuando existe una versión para el idioma.",
    "galleryItems": [
      [
        "Preparar foco",
        "Elige duración, idioma y ambiente antes de empezar."
      ],
      [
        "Mezclador de sonido",
        "Combina varias capas para distintos estados de foco."
      ],
      [
        "Guía de respiración",
        "Una transición breve devuelve la atención a la tarea."
      ],
      [
        "Sesión de foco",
        "Conteo progresivo, partículas y pantalla completa sostienen un ritmo de baja presión."
      ],
      [
        "Idea Fridge",
        "Captura pensamientos temporales sin salir de la sesión."
      ],
      [
        "Estadísticas acumuladas",
        "Observa esfuerzo real en el tiempo, no una sola sesión."
      ],
      [
        "Soporte y ajustes",
        "Idioma, sonido, privacidad y soporte quedan fáciles de encontrar."
      ],
      [
        "Ritmo de descanso",
        "Pasa a una pausa tranquila después del foco, con espacio antes de la siguiente sesión."
      ]
    ]
  },
  "about": {
    "title": "Acerca de SoloCraft",
    "intro": "SoloCraft es la página independiente de apps Windows de Chicken Fillet.",
    "story": [
      "El sitio reúne apps publicadas e información de producto.",
      "EnergyFlow, DeskHaven y ADHD Focus Timer cubren energía, archivos locales y sesiones de concentración.",
      "Cada página de producto prioriza capturas reales, precio, privacidad, términos legales y enlaces de descarga."
    ],
    "philosophyTitle": "Principios de la página",
    "philosophy": [
      [
        "Real",
        "Mostrar la interfaz y el comportamiento real del producto."
      ],
      [
        "Claro",
        "Poner la información previa a la instalación en lugares predecibles."
      ],
      [
        "Sobrio",
        "Reducir texto decorativo y dejar espacio al producto."
      ],
      [
        "Verificable",
        "Hacer directos los enlaces de descarga, precio y políticas."
      ]
    ],
    "techTitle": "Dirección técnica",
    "tech": [
      "Apps de escritorio para Windows",
      "Almacenamiento local-first",
      "Estadística y visualización",
      "Diseño consciente de la privacidad"
    ],
    "ctaTitle": "¿Hablamos de producto, colaboración o feedback?",
    "ctaDescription": "Leo con atención cada mensaje real.",
    "ctaButton": "Contactar"
  },
  "contact": {
    "title": "Contacto",
    "intro": "Comentarios de producto, ideas de colaboración, consultas de prensa o un simple saludo pueden llegar por correo.",
    "infoTitle": "Información de contacto",
    "email": "Correo"
  },
  "footer": {
    "subtitle": "Software de escritorio independiente por Chicken Fillet.",
    "studio": "Estudio",
    "products": "Productos",
    "legal": "Legal",
    "about": "Acerca de",
    "contact": "Contacto",
    "privacy": "Privacidad",
    "copyright": "Herramientas de escritorio tranquilas, sobrias y centradas en la privacidad."
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "Esta página no existe o el enlace cambió.",
      "button": "Volver a productos"
    },
    "payment": {
      "title": "Notas de apoyo para ADHD Focus Timer",
      "description": "ADHD Focus Timer es gratuito. Esta página explica el apoyo opcional, el pago y el contacto.",
      "sections": [
        [
          "Uso gratuito",
          "ADHD Focus Timer se puede descargar y usar gratis. Las funciones principales no quedan bloqueadas por pago."
        ],
        [
          "Apoyo opcional",
          "Si la app te ayuda, puedes apoyar el desarrollo independiente por PayPal. El apoyo no es una compra ni desbloquea funciones extra."
        ],
        [
          "Método de pago",
          "El apoyo se recibe actualmente por PayPal.me y lo procesa PayPal."
        ],
        [
          "No es una compra",
          "No es un checkout de software, sino apoyo opcional para desarrollo y mantenimiento."
        ],
        [
          "Ayuda",
          "Para preguntas sobre pago o apoyo, escribe a 3371436706@qq.com."
        ]
      ],
      "backButton": "Ver notas de reembolso"
    },
    "refund": {
      "title": "Ver notas de reembolso",
      "description": "Notes about optional support and refund handling.",
      "sections": [
        [
          "Descarga gratuita",
          "ADHD Focus Timer es software gratuito; no se requiere pago para usar las funciones principales."
        ],
        [
          "Apoyo opcional",
          "Los pagos de apoyo son propinas voluntarias, no compras, y no desbloquean funciones."
        ],
        [
          "Principio de reembolso",
          "Como el apoyo es voluntario, normalmente no se gestiona como reembolso de una compra común."
        ],
        [
          "Casos especiales",
          "Si hay pago duplicado o accidental, contacta por correo dentro de 72 horas e intentaré ayudar."
        ],
        [
          "Tiempo de respuesta",
          "Las consultas reales suelen responderse en 48 horas."
        ],
        [
          "Contacto",
          "Envía prueba de pago y una explicación breve a 3371436706@qq.com."
        ]
      ],
      "paymentGuide": "Notas de apoyo para ADHD Focus Timer",
      "backButton": "Volver a productos"
    },
    "websitePrivacy": {
      "title": "Aviso de privacidad del sitio",
      "intro": "El sitio de SoloCraft es una web estática de producto. No tiene formulario, no requiere cuenta, no usa analítica ni publicidad, y no recopila datos de apps, archivos ni perfiles de navegación desde la página.",
      "updated": "Última actualización: 28 de junio de 2026",
      "sections": [
        [
          "Sin recopilación activa",
          "El código de la página no recopila nombre, correo, teléfono, contenido de archivos, datos del escritorio, registros de energía, sesiones de foco u otros datos personales."
        ],
        [
          "Sin formulario de contacto",
          "Si envías un correo desde un enlace, el mensaje pasa por el servicio que elijas. Es contacto voluntario, no recopilación automática."
        ],
        [
          "Sin analítica ni publicidad",
          "El sitio no usa Google Analytics, píxeles publicitarios, perfiles de comportamiento ni scripts de marketing de terceros."
        ],
        [
          "Datos de producto separados",
          "Los datos de EnergyFlow, DeskHaven y ADHD Focus Timer se procesan localmente en sus apps. El sitio no lee bases, índices, mapas de relación ni registros."
        ],
        [
          "Registros de infraestructura",
          "El hosting o el navegador puede generar registros básicos como IP, hora, User-Agent o ruta para seguridad, caché y diagnóstico."
        ],
        [
          "Contacto",
          "Preguntas de privacidad: 3371436706@qq.com. No envíes contraseñas, claves privadas, documentos de identidad u otros contenidos muy sensibles innecesarios."
        ]
      ]
    }
  }
} as const;

const ruNav = {
  "home": "Главная",
  "about": "О нас",
  "products": "Продукты",
  "contact": "Контакты",
  "language": "Выбрать язык"
} as const;

const ruCopy = {
  "common": {
    "productPromise": "Описание продукта",
    "experienceFlow": "Сценарий",
    "productIndex": "Продукты",
    "operatingPrinciples": "Принципы",
    "designPrinciples": "Дизайн",
    "step": "Шаг",
    "viewProducts": "Смотреть продукты",
    "contact": "Контакты",
    "getUpdates": "Контакт",
    "microsoftStore": "Microsoft Store",
    "privacy": "Политика конфиденциальности",
    "backToProducts": "Назад к продуктам"
  },
  "home": {
    "eyebrow": "Независимое ПО для Windows",
    "title": "Энергия, файлы и сессии концентрации.",
    "intro": "SoloCraft показывает опубликованные Windows-приложения Chicken Fillet. На каждой странице есть реальные экраны, функции, цена, конфиденциальность, правовые условия и ссылка Microsoft Store.",
    "primary": "Смотреть продукты",
    "secondary": "О SoloCraft",
    "currentProduct": "Сейчас показано",
    "notes": [
      [
        "Реальные экраны",
        "Используются скриншоты и постеры приложения, а не абстрактные макеты."
      ],
      [
        "Сначала локально",
        "Важные данные рассчитаны на обработку прежде всего на устройстве Windows."
      ],
      [
        "Понятная цена",
        "Показывается одна цена для текущего региона; итоговая цена — в Microsoft Store."
      ],
      [
        "Прямая установка",
        "Каждая страница ведет на Microsoft Store."
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "Записывайте энергию и рабочее состояние.",
        "body": "Фиксируйте энергию, состояние, источники и настроение, затем смотрите тренды.",
        "bullets": [
          "5 уровней",
          "Контекст работы",
          "Корреляция + χ²",
          "Локальная приватность"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "Организуйте локальные файлы.",
        "body": "Соберите разрозненные файлы в локальное пространство с поиском, архивом и восстановлением.",
        "bullets": [
          "Локальное пространство",
          "Карта связей",
          "Хранилище",
          "AES-256"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "Настройте сессию концентрации.",
        "body": "Используйте генерируемые звуки, микс, прямой таймер, заметки идей и статистику.",
        "bullets": [
          "Прямой таймер",
          "Дыхание",
          "Idea Fridge",
          "Локальная приватность"
        ]
      }
    ],
    "principlesTitle": "Только полезная информация.",
    "principlesBody": "Сайт показывает, что делает приложение, как оно выглядит, сколько стоит, как обрабатывает данные и где установить.",
    "productTitle": "Опубликованные приложения.",
    "studioTitle": "Страница Windows-приложений Chicken Fillet.",
    "studioBody": "Здесь собраны опубликованные приложения и информация, которую стоит проверить перед установкой.",
    "studioNote": "EnergyFlow, DeskHaven и ADHD Focus Timer отвечают за энергию, локальные файлы и концентрацию."
  },
  "products": {
    "eyebrow": "Продукты",
    "title": "Опубликованные Windows-приложения.",
    "intro": "На каждой странице есть реальные скриншоты, функции, цена, конфиденциальность, правовые условия и ссылка Microsoft Store."
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "Панель рабочей энергии",
      "description": "Записывайте энергию, настроение, нагрузку и занятия, а затем смотрите долгосрочные изменения на шкале и в отчётах.",
      "status": "Доступно"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "Убежище для файлов",
      "description": "Организуйте локальные файлы, архивы, связи, резервные копии и настройки приватности.",
      "status": "Доступно"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "Иммерсивный таймер фокуса",
      "description": "Используйте фоновые звуки, прямой таймер, заметки идей и статистику для фокус-сессии.",
      "status": "Доступно"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / Панель рабочей энергии",
    "title": "Поймите, куда уходит энергия рабочего дня.",
    "intro": "Записывайте уровень энергии, контекст, источник и настроение за несколько секунд.",
    "status": "Доступно",
    "promiseTitle": "Не список задач, а журнал рабочей энергии.",
    "promise": "EnergyFlow не оценивает, достаточно ли вы старались. Он помогает превратить ежедневные ощущения в историю, где легче увидеть восстановление, истощение и решения по расписанию.",
    "features": [
      [
        "Запись за несколько секунд",
        "Фиксируйте уровень энергии, рабочее состояние, источник восстановления и настроение без лишних шагов."
      ],
      [
        "Тёмная и светлая ясность",
        "Тёмный режим подходит для фокуса, светлый — для дневной работы; интерфейс не отвлекает лишним шумом."
      ],
      [
        "Всегда рядом на рабочем столе",
        "Плавающий вход и горячая клавиша позволяют быстро открыть запись, сохранить состояние и вернуться к работе."
      ],
      [
        "Статистические подсказки",
        "Корреляция Пирсона и критерий хи-квадрат помогают увидеть, какие контексты действительно связаны с энергией."
      ],
      [
        "Защита приватности",
        "Данные о состоянии чувствительны, поэтому EnergyFlow проектируется с локальным и приватным подходом по умолчанию."
      ]
    ],
    "flow": [
      "Записать состояние",
      "Накопить контекст",
      "Понять паттерны энергии",
      "Настроить рабочий ритм"
    ],
    "gallery": {
      "eyebrow": "Реальный интерфейс",
      "title": "Посмотрите полный набор экранов EnergyFlow.",
      "body": "Тринадцать реальных экранов показывают локальный доступ, быстрые и мультимедийные записи, дыхание, временную шкалу, аналитику, напоминания и зашифрованные копии."
    },
    "flowIntro": {
      "title": "От быстрой записи к рабочему ритму, который можно настроить.",
      "body": "EnergyFlow не создает еще один слой управления. Короткая запись становится материалом для просмотра: что произошло, где изменилась энергия и какие рабочие паттерны стоит скорректировать.",
      "cardTitle": "Принцип процесса",
      "cardBody": "Чем легче запись, тем дольше держится привычка. Чем стабильнее история, тем проще увидеть связь между рабочим контекстом и энергией."
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / Убежище для файлов",
    "title": "Личный рабочий стол для каждого файла.",
    "intro": "DeskHaven организует локальные Windows-файлы через архив, карту связей, контроль приватности и тихую автоматизацию.",
    "status": "Доступно",
    "promiseTitle": "Не ещё одна папка, а локальная система порядка.",
    "promise": "Хранилище собирает и архивирует, поиск быстро возвращает файлы, карта связей показывает контекст, а резервное копирование и настройки приватности помогают сохранять данные под вашим контролем.",
    "features": [
      [
        "Обзор перед деталями",
        "Панель показывает количество файлов, связи, состояние шифрования и динамику хранения, чтобы сразу было понятно, под контролем ли рабочий стол."
      ],
      [
        "Файловое хранилище",
        "Хранилище управляет локальными файлами, метаданными и архивным состоянием. Это спокойный локальный слой, а не ещё один облачный диск."
      ],
      [
        "Карта связей",
        "Файлы, теги, темы и проекты видны как связи. Пользователь не только находит файл, но и понимает, почему он важен."
      ],
      [
        "Приватность и контроль",
        "Ключи, импорт, экспорт, шифрование и настройки управления находятся в одном понятном месте. Важные данные остаются под контролем пользователя."
      ],
      [
        "Тихая автоматизация",
        "Фоновая автоматизация, пути, переключатели и язык собраны ясно, чтобы порядок не превращался в ещё одну ежедневную обязанность."
      ]
    ],
    "principles": [
      [
        "Локальный подход",
        "Важные файлы и индексы по умолчанию обрабатываются локально."
      ],
      [
        "Контроль",
        "Пользователь должен понимать, где находятся файлы и как их восстановить."
      ],
      [
        "Связи понятны",
        "Связи между проектами, тегами и содержимым должны быть читаемыми."
      ],
      [
        "Меньше трения",
        "Организация должна происходить естественно, не превращаясь в новую нагрузку."
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "Более спокойный вход в устойчивый фокус.",
    "intro": "Новый ADHD Focus Timer создан для людей, которых легко сбивают шум, внезапные мысли и давление обратного отсчёта. Звуковые сцены в реальном времени, дыхание, прямой таймер, Idea Fridge и накопительная статистика помогают мягче войти в состояние фокуса.",
    "status": "Доступно",
    "promiseTitle": "Он не торопит вас. Он снижает сопротивление перед началом.",
    "promise": "Версия 1.5.0 обновляет интерфейс, звук и многоязычный опыт. Дождь, ветер, океан и ночные звуки генерируются локально через Web Audio, без больших аудиофайлов. Микшер, 8D-пространство и звук завершения можно настроить под состояние.",
    "features": [
      [
        "Сначала настроить среду",
        "Выберите язык, длительность, звук и подсказки до начала, чтобы меньше решений мешали во время фокуса."
      ],
      [
        "Звуковые сцены в реальном времени",
        "Дождь, ветер, океан и ночь синтезируются локально, поэтому приложение остаётся лёгким."
      ],
      [
        "Микшер и 8D-пространство",
        "Балансируйте слои звука и включайте пространственное движение, когда фон должен быть ощутимее."
      ],
      [
        "Дыхательный переход",
        "Короткий ритм дыхания помогает перейти к сессии без резкого старта."
      ],
      [
        "Прямой таймер и частицы",
        "Время накапливается, а не отсчитывает путь к провалу. Частицы дают тихую обратную связь."
      ],
      [
        "Idea Fridge",
        "Внезапные мысли можно сохранить на потом, не выходя из текущей задачи."
      ],
      [
        "Статистика и мягкое завершение",
        "Экран завершения фиксирует реальное усилие, а статистика показывает прогресс во времени."
      ]
    ],
    "galleryEyebrow": "Скриншоты интерфейса",
    "galleryTitle": "Реальный интерфейс ADHD Focus Timer 1.5.0.",
    "galleryIntro": "От подготовки и микширования звука до дыхательного перехода, таймера, Idea Fridge и статистики — эти скриншоты показывают полный путь фокуса. Изображения автоматически меняются, когда для языка есть отдельный набор.",
    "galleryItems": [
      [
        "Подготовка фокуса",
        "Выберите длительность, язык и звуковую среду до начала."
      ],
      [
        "Звуковой микшер",
        "Смешивайте несколько слоёв для разных состояний фокуса."
      ],
      [
        "Дыхание",
        "Короткий переход возвращает внимание к задаче."
      ],
      [
        "Сессия фокуса",
        "Прямой таймер, частицы и полноэкранная среда держат низкое давление."
      ],
      [
        "Idea Fridge",
        "Сохраняйте временные мысли, не покидая сессию."
      ],
      [
        "Накопительная статистика",
        "Смотрите реальное усилие во времени, а не одну сессию."
      ],
      [
        "Поддержка и настройки",
        "Язык, звук, приватность и поддержка находятся в понятном месте."
      ],
      [
        "Ритм отдыха",
        "После фокуса переходите к спокойной паузе, оставляя пространство перед новой сессией."
      ]
    ]
  },
  "about": {
    "title": "О SoloCraft",
    "intro": "SoloCraft — независимая страница Windows-приложений Chicken Fillet.",
    "story": [
      "Сайт собирает опубликованные приложения и информацию о продуктах в одном месте.",
      "EnergyFlow, DeskHaven и ADHD Focus Timer отвечают за энергию, локальные файлы и концентрацию.",
      "Каждая страница продукта показывает реальные экраны, цену, конфиденциальность, правовые условия и ссылки установки."
    ],
    "philosophyTitle": "Принципы страницы",
    "philosophy": [
      [
        "Реально",
        "Показывать настоящий интерфейс и поведение продукта."
      ],
      [
        "Понятно",
        "Держать информацию перед установкой в ожидаемых местах."
      ],
      [
        "Сдержанно",
        "Убирать декоративный текст и оставлять место продукту."
      ],
      [
        "Проверяемо",
        "Давать прямые ссылки на установку, цену и политики."
      ]
    ],
    "techTitle": "Техническое направление",
    "tech": [
      "Windows desktop apps",
      "Локальное хранение",
      "Статистика и визуализация",
      "Дизайн с учётом приватности"
    ],
    "ctaTitle": "Обсудим продукт, сотрудничество или обратную связь?",
    "ctaDescription": "Я внимательно читаю каждое настоящее сообщение.",
    "ctaButton": "Связаться"
  },
  "contact": {
    "title": "Контакты",
    "intro": "Отзывы о продукте, идеи сотрудничества, запросы медиа или короткое приветствие можно отправить по почте.",
    "infoTitle": "Контакт",
    "email": "Почта"
  },
  "footer": {
    "subtitle": "Независимая студия desktop-софта Chicken Fillet.",
    "studio": "Студия",
    "products": "Продукты",
    "legal": "Правовое",
    "about": "О нас",
    "contact": "Контакты",
    "privacy": "Конфиденциальность",
    "copyright": "Спокойные, сдержанные и privacy-first desktop-инструменты."
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "Страница не существует или ссылка изменилась.",
      "button": "Назад к продуктам"
    },
    "payment": {
      "title": "Поддержка ADHD Focus Timer",
      "description": "ADHD Focus Timer можно использовать бесплатно. Здесь описана добровольная поддержка, оплата и контакт.",
      "sections": [
        [
          "Бесплатное использование",
          "ADHD Focus Timer можно скачать и использовать бесплатно. Основные функции не заблокированы оплатой."
        ],
        [
          "Добровольная поддержка",
          "Если приложение помогает, вы можете добровольно поддержать независимую разработку через PayPal. Это не покупка и не открывает дополнительные функции."
        ],
        [
          "Способ оплаты",
          "Поддержка сейчас принимается через PayPal.me и обрабатывается PayPal."
        ],
        [
          "Это не покупка",
          "Это не оформление покупки ПО, а добровольная поддержка разработки и обслуживания."
        ],
        [
          "Нужна помощь",
          "По вопросам оплаты или поддержки пишите на 3371436706@qq.com."
        ]
      ],
      "backButton": "Условия возврата"
    },
    "refund": {
      "title": "Условия возврата",
      "description": "Notes about optional support and refund handling.",
      "sections": [
        [
          "Бесплатная загрузка",
          "ADHD Focus Timer — бесплатное ПО; оплата не нужна для основных функций."
        ],
        [
          "Добровольная поддержка",
          "Платежи поддержки являются добровольными, не являются покупкой и не открывают дополнительные функции."
        ],
        [
          "Принцип возврата",
          "Так как поддержка добровольная, обычно она не обрабатывается как возврат обычного заказа."
        ],
        [
          "Особые случаи",
          "При двойном или случайном платеже напишите в течение 72 часов, и я постараюсь помочь."
        ],
        [
          "Срок ответа",
          "Реальные обращения обычно получают ответ в течение 48 часов."
        ],
        [
          "Контакт",
          "Отправьте подтверждение оплаты и краткое объяснение на 3371436706@qq.com."
        ]
      ],
      "paymentGuide": "Поддержка ADHD Focus Timer",
      "backButton": "Назад к продуктам"
    },
    "websitePrivacy": {
      "title": "Уведомление о конфиденциальности сайта",
      "intro": "Сайт SoloCraft — статический продуктовый сайт. Здесь нет формы, аккаунта, аналитики или рекламного трекинга, а страница не собирает данные приложений, содержимое файлов или профиль просмотра.",
      "updated": "Последнее обновление: 28 июня 2026 г.",
      "sections": [
        [
          "Сайт не собирает данные активно",
          "Код страницы не собирает имя, e-mail, телефон, содержимое файлов, desktop-данные, записи энергии, фокус-сессии или другие персональные данные."
        ],
        [
          "Нет контактной формы",
          "Если вы отправляете письмо по ссылке, оно проходит через выбранный вами почтовый сервис. Это добровольный контакт, не автоматический сбор."
        ],
        [
          "Нет аналитики и рекламы",
          "Сайт не использует Google Analytics, рекламные пиксели, поведенческие профили или сторонние маркетинговые скрипты."
        ],
        [
          "Данные продуктов отделены",
          "Данные EnergyFlow, DeskHaven и ADHD Focus Timer обрабатываются локально в приложениях. Сайт не читает базы, индексы, карты связей или записи."
        ],
        [
          "Инфраструктурные журналы",
          "Хостинг или браузерная сеть могут создавать базовые логи: IP, время, User-Agent, путь запроса для безопасности, кэша и диагностики."
        ],
        [
          "Контакт",
          "Вопросы о приватности: 3371436706@qq.com. Не отправляйте лишние пароли, закрытые ключи, документы или очень чувствительные данные."
        ]
      ]
    }
  }
} as const;

const ptNav = {
  "home": "Início",
  "about": "Sobre",
  "products": "Produtos",
  "contact": "Contato",
  "language": "Escolher idioma"
} as const;

const ptCopy = {
  "common": {
    "productPromise": "Detalhes do produto",
    "experienceFlow": "Fluxo",
    "productIndex": "Produtos",
    "operatingPrinciples": "Princípios",
    "designPrinciples": "Notas de design",
    "step": "Etapa",
    "viewProducts": "Ver produtos",
    "contact": "Contato",
    "getUpdates": "Contato",
    "microsoftStore": "Microsoft Store",
    "privacy": "Política de privacidade",
    "backToProducts": "Voltar aos produtos"
  },
  "home": {
    "eyebrow": "Software independente para Windows",
    "title": "Energia, arquivos e sessões de foco.",
    "intro": "SoloCraft apresenta os apps Windows publicados pela Chicken Fillet. Cada página mostra telas reais, recursos, preço, privacidade, termos legais e link da Microsoft Store.",
    "primary": "Ver produtos",
    "secondary": "Sobre SoloCraft",
    "currentProduct": "Em destaque",
    "notes": [
      [
        "Telas reais",
        "As páginas usam capturas e pôsteres do app, não conceitos abstratos."
      ],
      [
        "Local primeiro",
        "Dados importantes são projetados para ficar primeiro no dispositivo Windows."
      ],
      [
        "Preço claro",
        "A página mostra um preço por região; a Microsoft Store é a referência final."
      ],
      [
        "Download direto",
        "Cada produto tem link para a Microsoft Store."
      ]
    ],
    "chapters": [
      {
        "id": "energyflow",
        "num": "01 / EnergyFlow",
        "title": "Registrar energia e estado de trabalho.",
        "body": "Registre energia, estado, fontes e humor, depois veja mudanças em tendências.",
        "bullets": [
          "5 níveis",
          "Contexto de trabalho",
          "Correlação + qui-quadrado",
          "Privacidade local"
        ]
      },
      {
        "id": "deskhaven",
        "num": "02 / DeskHaven",
        "title": "Organizar arquivos locais.",
        "body": "Reúna arquivos dispersos em um espaço local pesquisável, arquivável e recuperável.",
        "bullets": [
          "Espaço local",
          "Mapa de relações",
          "Arquivo",
          "AES-256"
        ]
      },
      {
        "id": "adhd",
        "num": "03 / ADHD Focus Timer",
        "title": "Preparar uma sessão de foco.",
        "body": "Use sons gerados, mixagem, timer progressivo, captura de ideias e estatísticas.",
        "bullets": [
          "Timer progressivo",
          "Respiração",
          "Idea Fridge",
          "Privacidade local"
        ]
      }
    ],
    "principlesTitle": "Apenas informações úteis.",
    "principlesBody": "O site mostra o que o app faz, como é a interface, quanto custa, como trata dados e onde instalar.",
    "productTitle": "Apps publicados.",
    "studioTitle": "A página de apps Windows da Chicken Fillet.",
    "studioBody": "Aqui ficam apps publicados e informações importantes antes da instalação.",
    "studioNote": "EnergyFlow, DeskHaven e ADHD Focus Timer cobrem energia, arquivos locais e foco."
  },
  "products": {
    "eyebrow": "Produtos",
    "title": "Apps Windows publicados.",
    "intro": "Cada página reúne capturas reais, recursos, preço, privacidade, termos legais e link da Microsoft Store."
  },
  "productCards": {
    "energyflow": {
      "title": "EnergyFlow",
      "category": "Painel de energia no trabalho",
      "description": "Registe energia, humor, pressão e atividades e reveja mudanças de longo prazo na linha temporal e nos relatórios.",
      "status": "Disponível"
    },
    "deskhaven": {
      "title": "DeskHaven",
      "category": "Refúgio de arquivos desktop",
      "description": "Organize arquivos locais, arquive conteúdo, veja relações, backups e controles de privacidade.",
      "status": "Disponível"
    },
    "adhd": {
      "title": "ADHD Focus Timer",
      "category": "Timer de foco imersivo",
      "description": "Use som ambiente, timer progressivo, captura de ideias e estatísticas para uma sessão de foco.",
      "status": "Disponível"
    }
  },
  "energyflow": {
    "eyebrow": "EnergyFlow / Painel de energia",
    "title": "Entenda para onde vai sua energia de trabalho.",
    "intro": "Registre nível de energia, contexto, fonte e humor em poucos segundos.",
    "status": "Disponível",
    "promiseTitle": "Não é uma lista de tarefas. É um registro da sua energia de trabalho.",
    "promise": "EnergyFlow não julga se você se esforçou o bastante. Ele transforma sensações diárias em uma linha do tempo para rever recuperação, desgaste e escolhas de rotina com mais clareza.",
    "features": [
      [
        "Registro em poucos segundos",
        "Registre nível de energia, estado de trabalho, fonte de recuperação e humor com o mínimo de atrito."
      ],
      [
        "Clareza no modo escuro ou claro",
        "Modo escuro para foco e modo claro para trabalho diurno, sem ruído visual desnecessário."
      ],
      [
        "Sempre à mão no desktop",
        "Entrada flutuante e atalho permitem abrir, registrar e voltar ao fluxo sem interromper o trabalho."
      ],
      [
        "Leitura estatística",
        "Correlação de Pearson e teste qui-quadrado ajudam a revelar quais contextos realmente afetam sua energia."
      ],
      [
        "Proteção de privacidade",
        "Dados de energia são sensíveis. EnergyFlow é projetado com privacidade local como padrão."
      ]
    ],
    "flow": [
      "Registrar estado",
      "Acumular contexto",
      "Rever padrões de energia",
      "Ajustar o ritmo"
    ],
    "gallery": {
      "eyebrow": "Interface real",
      "title": "Veja o conjunto completo de telas do EnergyFlow.",
      "body": "Treze ecrãs reais mostram acesso local, registos rápidos e multimédia, respiração, linha temporal, análises, lembretes e cópias cifradas."
    },
    "flowIntro": {
      "title": "De um registro rápido a um ritmo de trabalho ajustável.",
      "body": "EnergyFlow não cria mais uma camada de gestão. Um registro curto vira evidência para rever depois: o que aconteceu, onde a energia mudou e quais padrões de trabalho merecem ajuste.",
      "cardTitle": "Princípio do fluxo",
      "cardBody": "Quanto mais leve o registro, mais fácil manter o hábito. Quanto mais estável o histórico, mais clara fica a relação entre contexto e energia."
    }
  },
  "deskhaven": {
    "eyebrow": "DeskHaven / Refúgio de arquivos",
    "title": "Uma mesa privada para cada arquivo.",
    "intro": "DeskHaven organiza arquivos locais do Windows com arquivo, mapa de relações, privacidade e automação tranquila.",
    "status": "Disponível",
    "promiseTitle": "Não é só outra pasta. É uma ordem local para seus arquivos.",
    "promise": "O cofre reúne e arquiva, a busca traz arquivos de volta rapidamente, os mapas de relação deixam o contexto visível, e backup com privacidade mantém dados importantes recuperáveis, exportáveis e sob seu controle.",
    "features": [
      [
        "Visão geral antes dos detalhes",
        "O painel resume quantidade de arquivos, relações, criptografia e tendências de armazenamento para mostrar se o desktop está sob controle."
      ],
      [
        "Cofre de arquivos",
        "O cofre gerencia arquivos locais, metadados e estado de arquivamento. É uma camada local tranquila, não outro disco em nuvem."
      ],
      [
        "Mapa de relações",
        "Arquivos, tags, temas e projetos aparecem como relações. O usuário não apenas encontra arquivos; entende por que eles importam."
      ],
      [
        "Privacidade e controle",
        "Chaves, importação, exportação, criptografia e controles ficam em um lugar claro. Dados importantes devem continuar sob controle do usuário."
      ],
      [
        "Automação silenciosa",
        "Automação em segundo plano, caminhos, opções e idioma ficam agrupados para que a organização não vire outro sistema diário."
      ]
    ],
    "principles": [
      [
        "Local primeiro",
        "Arquivos e índices importantes são tratados localmente por padrão."
      ],
      [
        "Controle claro",
        "O usuário deve saber onde os arquivos estão e como recuperá-los."
      ],
      [
        "Relações legíveis",
        "Conexões entre projetos, tags e conteúdo devem ser compreensíveis."
      ],
      [
        "Menos atrito",
        "A organização deve acontecer naturalmente, sem virar uma nova carga."
      ]
    ]
  },
  "adhd": {
    "eyebrow": "ADHD Focus Timer / 1.5.0",
    "title": "Uma entrada mais calma para foco sustentado.",
    "intro": "O novo ADHD Focus Timer foi feito para pessoas interrompidas facilmente por ruído, pensamentos soltos e pressão de contagem regressiva. Paisagens sonoras em tempo real, respiração, contagem progressiva, Idea Fridge e estatísticas acumuladas ajudam a entrar no foco com mais suavidade.",
    "status": "Disponível",
    "promiseTitle": "Ele não manda você correr. Ele reduz o custo de começar.",
    "promise": "A versão 1.5.0 reconstrói interface, áudio e experiência multilíngue. Chuva, vento, oceano e sons noturnos são gerados localmente com Web Audio, sem arquivos de áudio enormes. O mixer, o espaço 8D e o som de conclusão podem ser ajustados.",
    "features": [
      [
        "Preparar o ambiente",
        "Escolher idioma, duração, som e guia antes da sessão reduz decisões durante o foco."
      ],
      [
        "Paisagens sonoras em tempo real",
        "Chuva, vento, oceano e noite são sintetizados localmente, mantendo o app leve para loops longos."
      ],
      [
        "Mixer e espaço 8D",
        "Equilibre camadas sonoras e ative movimento espacial quando quiser um fundo mais presente."
      ],
      [
        "Transição respiratória",
        "Um ritmo curto ajuda a entrar na sessão sem um começo brusco."
      ],
      [
        "Contagem progressiva e partículas",
        "O tempo se acumula em vez de contar rumo ao fracasso. As partículas dão feedback discreto."
      ],
      [
        "Idea Fridge",
        "Guarde pensamentos repentinos para depois sem sair da tarefa atual."
      ],
      [
        "Estatísticas e conclusão suave",
        "A tela final registra esforço real e as estatísticas mostram progresso ao longo do tempo."
      ]
    ],
    "galleryEyebrow": "Capturas da interface",
    "galleryTitle": "A interface real do ADHD Focus Timer 1.5.0.",
    "galleryIntro": "Da preparação e mixagem de som à respiração, ao timer, ao Idea Fridge e às estatísticas, estas capturas mostram o fluxo completo de foco. As imagens mudam automaticamente quando há versão disponível para o idioma.",
    "galleryItems": [
      [
        "Preparar foco",
        "Escolha duração, idioma e ambiente antes de começar."
      ],
      [
        "Mixer de som",
        "Combine várias camadas para diferentes estados de foco."
      ],
      [
        "Guia de respiração",
        "Uma transição curta traz a atenção de volta à tarefa."
      ],
      [
        "Sessão de foco",
        "Contagem progressiva, partículas e tela cheia mantêm um ritmo de baixa pressão."
      ],
      [
        "Idea Fridge",
        "Capture pensamentos temporários sem sair da sessão."
      ],
      [
        "Estatísticas acumuladas",
        "Veja esforço real no tempo, não apenas uma sessão."
      ],
      [
        "Suporte e ajustes",
        "Idioma, som, privacidade e suporte ficam fáceis de encontrar."
      ],
      [
        "Ritmo de descanso",
        "Entre em uma pausa calma após o foco, com espaço antes da próxima sessão."
      ]
    ]
  },
  "about": {
    "title": "Sobre o SoloCraft",
    "intro": "SoloCraft é a página independente de apps Windows da Chicken Fillet.",
    "story": [
      "O site reúne apps publicados e informações de produto.",
      "EnergyFlow, DeskHaven e ADHD Focus Timer cobrem energia, arquivos locais e sessões de foco.",
      "Cada página prioriza capturas reais, preço, privacidade, termos legais e links de download."
    ],
    "philosophyTitle": "Princípios da página",
    "philosophy": [
      [
        "Real",
        "Mostrar a interface e o comportamento real do produto."
      ],
      [
        "Claro",
        "Colocar informações antes da instalação em locais previsíveis."
      ],
      [
        "Contido",
        "Reduzir texto decorativo e deixar espaço para o produto."
      ],
      [
        "Verificável",
        "Manter links diretos para download, preço e políticas."
      ]
    ],
    "techTitle": "Direção técnica",
    "tech": [
      "Apps desktop para Windows",
      "Armazenamento local-first",
      "Estatística e visualização",
      "Design consciente de privacidade"
    ],
    "ctaTitle": "Vamos falar de produto, colaboração ou feedback?",
    "ctaDescription": "Leio com atenção cada mensagem real.",
    "ctaButton": "Entrar em contato"
  },
  "contact": {
    "title": "Contato",
    "intro": "Feedback de produto, ideias de colaboração, pedidos de mídia ou um simples oi podem chegar por e-mail.",
    "infoTitle": "Contato",
    "email": "E-mail"
  },
  "footer": {
    "subtitle": "Software desktop independente por Chicken Fillet.",
    "studio": "Estúdio",
    "products": "Produtos",
    "legal": "Legal",
    "about": "Sobre",
    "contact": "Contato",
    "privacy": "Privacidade",
    "copyright": "Ferramentas desktop calmas, discretas e privacy-first."
  },
  "system": {
    "notFound": {
      "code": "404",
      "message": "Esta página não existe ou o link mudou.",
      "button": "Voltar aos produtos"
    },
    "payment": {
      "title": "Notas de apoio ao ADHD Focus Timer",
      "description": "ADHD Focus Timer é gratuito. Esta página explica apoio opcional, pagamento e contato.",
      "sections": [
        [
          "Uso gratuito",
          "ADHD Focus Timer pode ser baixado e usado gratuitamente. Recursos principais não ficam bloqueados por pagamento."
        ],
        [
          "Apoio opcional",
          "Se o app ajudar, você pode apoiar o desenvolvimento independente via PayPal. Apoio não é compra e não libera recursos extras."
        ],
        [
          "Método de pagamento",
          "O apoio é recebido atualmente por PayPal.me e processado pelo PayPal."
        ],
        [
          "Não é compra",
          "Não é checkout de software, mas apoio opcional para desenvolvimento e manutenção."
        ],
        [
          "Ajuda",
          "Para dúvidas sobre pagamento ou apoio, escreva para 3371436706@qq.com."
        ]
      ],
      "backButton": "Ver notas de reembolso"
    },
    "refund": {
      "title": "Ver notas de reembolso",
      "description": "Notes about optional support and refund handling.",
      "sections": [
        [
          "Download gratuito",
          "ADHD Focus Timer é software gratuito; pagamento não é necessário para os recursos principais."
        ],
        [
          "Apoio opcional",
          "Pagamentos de apoio são contribuições voluntárias, não compras, e não liberam recursos."
        ],
        [
          "Princípio de reembolso",
          "Como o apoio é voluntário, normalmente não é tratado como reembolso de pedido comum."
        ],
        [
          "Casos especiais",
          "Em pagamento duplicado ou acidental, entre em contato por e-mail em até 72 horas e tentarei ajudar."
        ],
        [
          "Tempo de resposta",
          "Consultas reais geralmente recebem resposta em até 48 horas."
        ],
        [
          "Contato",
          "Envie comprovante de pagamento e breve explicação para 3371436706@qq.com."
        ]
      ],
      "paymentGuide": "Notas de apoio ao ADHD Focus Timer",
      "backButton": "Voltar aos produtos"
    },
    "websitePrivacy": {
      "title": "Aviso de privacidade do site",
      "intro": "O site SoloCraft é uma página estática de produto. Não tem formulário, não exige conta, não usa analytics nem rastreamento de anúncios, e não coleta dados dos apps, arquivos ou perfil de navegação pela página.",
      "updated": "Última atualização: 28 de junho de 2026",
      "sections": [
        [
          "Sem coleta ativa",
          "O código da página não coleta nome, e-mail, telefone, conteúdo de arquivos, dados do desktop, registros de energia, sessões de foco ou outros dados pessoais."
        ],
        [
          "Sem formulário de contato",
          "Se você enviar e-mail por um link, a mensagem passa pelo serviço escolhido. Isso é contato voluntário, não coleta automática."
        ],
        [
          "Sem analytics ou anúncios",
          "O site não usa Google Analytics, pixels de anúncio, perfil comportamental ou scripts de marketing de terceiros."
        ],
        [
          "Dados de produto separados",
          "Dados de EnergyFlow, DeskHaven e ADHD Focus Timer são tratados localmente nos apps. O site não lê bancos, índices, mapas de relação ou registros."
        ],
        [
          "Logs de infraestrutura",
          "Hospedagem ou navegador podem gerar logs básicos como IP, hora, User-Agent ou caminho para segurança, cache e diagnóstico."
        ],
        [
          "Contato",
          "Perguntas de privacidade: 3371436706@qq.com. Não envie senhas, chaves privadas, documentos ou outros conteúdos muito sensíveis sem necessidade."
        ]
      ]
    }
  }
} as const;

export type SiteCopy = WidenCopy<typeof enCopy>;

export const navCopy = {
  "zh": zhNav,
  "zh-tw": zhTwNav,
  "en": enNav,
  "ja": jaNav,
  "ko": koNav,
  "fr": frNav,
  "de": deNav,
  "es": esNav,
  "ru": ruNav,
  "pt": ptNav,
} as const satisfies Record<Locale, NavCopy>;

export const siteCopy = {
  "zh": zhCopy,
  "zh-tw": zhTwCopy,
  "en": enCopy,
  "ja": jaCopy,
  "ko": koCopy,
  "fr": frCopy,
  "de": deCopy,
  "es": esCopy,
  "ru": ruCopy,
  "pt": ptCopy,
} as const satisfies Record<Locale, SiteCopy>;

type FunctionalNarrative = {
  home: Pick<SiteCopy["home"], "eyebrow" | "title" | "intro" | "primary" | "secondary" | "currentProduct" | "chapters" | "productTitle" | "studioTitle" | "studioBody" | "studioNote">;
  products: Pick<SiteCopy["products"], "title" | "intro">;
  productCards: SiteCopy["productCards"];
  energyflow: Pick<SiteCopy["energyflow"], "eyebrow" | "title" | "intro" | "status" | "promiseTitle" | "promise">;
  deskhaven: Pick<SiteCopy["deskhaven"], "eyebrow" | "title" | "intro" | "status" | "promiseTitle" | "promise">;
  adhd: Pick<SiteCopy["adhd"], "eyebrow" | "title" | "intro" | "status" | "promiseTitle" | "promise">;
  about: Pick<SiteCopy["about"], "title" | "intro" | "story" | "techTitle" | "tech" | "ctaTitle" | "ctaDescription" | "ctaButton">;
  contact: SiteCopy["contact"];
  footer: Pick<SiteCopy["footer"], "subtitle" | "copyright">;
};

const functionalNarrative = {
  zh: {
    home: {
      eyebrow: "CHICKEN FILLET / WINDOWS 软件",
      title: "SoloCraft",
      intro: "由 Chicken Fillet 独立开发和维护，专注于 Windows 桌面应用。",
      primary: "查看产品",
      secondary: "关于 SoloCraft",
      currentProduct: "界面预览",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "记录状态，查看历史变化。", body: "记录精力、情绪、压力和活动，并通过时间线与分析报告查看历史记录。", bullets: ["状态记录", "多媒体记录", "时间线", "趋势分析"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "整理本地文件，查看内容关联。", body: "集中收纳、搜索和归档本地文件，并通过关系图谱查看文件、标签与项目之间的关联。", bullets: ["文件管理", "搜索与筛选", "关系图谱", "本地备份"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "设置环境声并开始正向计时。", body: "组合多种环境声，通过呼吸引导开始正向计时。临时想法可以存入想法冰箱，结束后再处理。", bullets: ["环境声", "呼吸引导", "正向计时", "想法冰箱"] },
      ],
      productTitle: "产品",
      studioTitle: "关于 SoloCraft",
      studioBody: "SoloCraft 由 Chicken Fillet 独立开发和维护，专注于 Windows 桌面应用。",
      studioNote: "网站中的截图、功能说明、价格和下载链接均对应已发布版本。",
    },
    products: {
      title: "Windows 应用",
      intro: "所有应用均已发布。产品页提供功能说明、真实界面、当前地区价格、隐私政策和 Microsoft Store 下载链接。",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "状态记录与分析", description: "记录精力、情绪、压力和活动，并通过时间线与分析报告查看历史变化。", status: "已发布" },
      deskhaven: { title: "DeskHaven", category: "本地文件管理", description: "收纳、搜索和归档本地文件，并通过关系图谱查看内容关联。", status: "已发布" },
      adhd: { title: "ADHD Focus Timer", category: "专注计时与环境声", description: "组合环境声、使用呼吸引导和正向计时，并记录专注过程中的临时想法。", status: "已发布" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "记录精力、情绪和压力。",
      intro: "快速记录当前状态、活动、文字、图片或录音，并通过时间线、筛选和分析报告查看历史记录。",
      status: "已发布",
      promiseTitle: "记录与分析",
      promise: "EnergyFlow 将主动记录整理为时间线、趋势和分析报告。",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "整理本地文件，查看内容关联。",
      intro: "集中收纳、搜索和归档本地文件，并通过关系图谱查看文件、标签与项目之间的关联。支持本地加密和备份。",
      status: "已发布",
      promiseTitle: "本地文件管理",
      promise: "DeskHaven 提供文件管理、搜索、归档、关系图谱、加密和备份功能。",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "用环境声和正向计时辅助专注。",
      intro: "自由组合多种环境声，通过呼吸引导开始正向计时。专注过程中出现的临时想法，可以随手存入“想法冰箱”，结束后再处理。",
      status: "已发布",
      promiseTitle: "专注计时",
      promise: "ADHD Focus Timer 提供环境声、呼吸引导、正向计时、想法冰箱和统计功能。",
    },
    about: {
      title: "关于 SoloCraft",
      intro: "SoloCraft 是 Chicken Fillet 独立开发和维护的 Windows 软件项目。",
      story: ["项目目前包括状态记录、本地文件管理和专注计时应用。", "产品页面展示已发布版本的真实界面、功能、价格、隐私政策和下载链接。", "应用更新、网站内容和用户支持均由 Chicken Fillet 维护。"],
      techTitle: "开发范围",
      tech: ["Windows 桌面应用", "本地数据处理", "统计与可视化", "多语言界面"],
      ctaTitle: "联系",
      ctaDescription: "产品反馈、技术支持、合作或媒体询问可通过电子邮件发送。",
      ctaButton: "联系",
    },
    contact: { title: "联系", intro: "可通过电子邮件发送产品反馈、技术支持、合作或媒体询问。", infoTitle: "电子邮件", email: "联系邮箱" },
    footer: { subtitle: "Chicken Fillet 独立开发和维护的 Windows 应用。", copyright: "© 2026 SoloCraft." },
  },
  "zh-tw": {
    home: {
      eyebrow: "CHICKEN FILLET / WINDOWS 軟體",
      title: "SoloCraft",
      intro: "由 Chicken Fillet 獨立開發與維護，專注於 Windows 桌面應用程式。",
      primary: "查看產品",
      secondary: "關於 SoloCraft",
      currentProduct: "介面預覽",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "記錄狀態，查看歷史變化。", body: "記錄精力、情緒、壓力與活動，並透過時間軸和分析報告查看歷史記錄。", bullets: ["狀態記錄", "多媒體記錄", "時間軸", "趨勢分析"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "整理本地檔案，查看內容關聯。", body: "集中收納、搜尋與封存本地檔案，並透過關係圖譜查看檔案、標籤與專案之間的關聯。", bullets: ["檔案管理", "搜尋與篩選", "關係圖譜", "本地備份"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "設定環境聲並開始正向計時。", body: "組合多種環境聲，透過呼吸引導開始正向計時。臨時想法可存入想法冰箱，結束後再處理。", bullets: ["環境聲", "呼吸引導", "正向計時", "想法冰箱"] },
      ],
      productTitle: "產品",
      studioTitle: "關於 SoloCraft",
      studioBody: "SoloCraft 由 Chicken Fillet 獨立開發與維護，專注於 Windows 桌面應用程式。",
      studioNote: "網站中的截圖、功能說明、價格與下載連結均對應已發布版本。",
    },
    products: {
      title: "Windows 應用程式",
      intro: "所有應用程式均已發布。產品頁提供功能說明、真實介面、目前地區價格、隱私權政策與 Microsoft Store 下載連結。",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "狀態記錄與分析", description: "記錄精力、情緒、壓力與活動，並透過時間軸和分析報告查看歷史變化。", status: "已發布" },
      deskhaven: { title: "DeskHaven", category: "本地檔案管理", description: "收納、搜尋與封存本地檔案，並透過關係圖譜查看內容關聯。", status: "已發布" },
      adhd: { title: "ADHD Focus Timer", category: "專注計時與環境聲", description: "組合環境聲、使用呼吸引導和正向計時，並記錄專注過程中的臨時想法。", status: "已發布" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "記錄精力、情緒與壓力。",
      intro: "快速記錄目前狀態、活動、文字、圖片或錄音，並透過時間軸、篩選與分析報告查看歷史記錄。",
      status: "已發布",
      promiseTitle: "記錄與分析",
      promise: "EnergyFlow 將主動記錄整理為時間軸、趨勢與分析報告。",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "整理本地檔案，查看內容關聯。",
      intro: "集中收納、搜尋與封存本地檔案，並透過關係圖譜查看檔案、標籤與專案之間的關聯。支援本地加密和備份。",
      status: "已發布",
      promiseTitle: "本地檔案管理",
      promise: "DeskHaven 提供檔案管理、搜尋、封存、關係圖譜、加密與備份功能。",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "用環境聲和正向計時輔助專注。",
      intro: "自由組合多種環境聲，透過呼吸引導開始正向計時。專注時出現的臨時想法，可存入「想法冰箱」，結束後再處理。",
      status: "已發布",
      promiseTitle: "專注計時",
      promise: "ADHD Focus Timer 提供環境聲、呼吸引導、正向計時、想法冰箱與統計功能。",
    },
    about: {
      title: "關於 SoloCraft",
      intro: "SoloCraft 是 Chicken Fillet 獨立開發與維護的 Windows 軟體專案。",
      story: ["目前包含狀態記錄、本地檔案管理與專注計時應用程式。", "產品頁面展示已發布版本的真實介面、功能、價格、隱私權政策與下載連結。", "應用程式更新、網站內容與使用者支援均由 Chicken Fillet 維護。"],
      techTitle: "開發範圍",
      tech: ["Windows 桌面應用程式", "本地資料處理", "統計與視覺化", "多語言介面"],
      ctaTitle: "聯絡",
      ctaDescription: "產品意見、技術支援、合作或媒體詢問可透過電子郵件傳送。",
      ctaButton: "聯絡",
    },
    contact: { title: "聯絡", intro: "可透過電子郵件傳送產品意見、技術支援、合作或媒體詢問。", infoTitle: "電子郵件", email: "聯絡信箱" },
    footer: { subtitle: "Chicken Fillet 獨立開發與維護的 Windows 應用程式。", copyright: "© 2026 SoloCraft." },
  },
  en: {
    home: {
      eyebrow: "CHICKEN FILLET / WINDOWS SOFTWARE",
      title: "SoloCraft",
      intro: "Independently developed and maintained by Chicken Fillet, with a focus on Windows desktop applications.",
      primary: "View products",
      secondary: "About SoloCraft",
      currentProduct: "Interface preview",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "Record your state and review changes over time.", body: "Log energy, mood, stress, and activities, then review the history through timelines and analysis reports.", bullets: ["State logging", "Media entries", "Timeline", "Trend analysis"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "Organize local files and view their relationships.", body: "Collect, search, and archive local files, then use the relationship graph to inspect links between files, tags, and projects.", bullets: ["File management", "Search and filters", "Relationship graph", "Local backup"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "Set ambient sound and start a forward timer.", body: "Mix ambient sounds, begin with a breathing guide, and save temporary thoughts in the Idea Fridge for later.", bullets: ["Ambient sound", "Breathing guide", "Forward timer", "Idea Fridge"] },
      ],
      productTitle: "Products",
      studioTitle: "About SoloCraft",
      studioBody: "SoloCraft is independently developed and maintained by Chicken Fillet, with a focus on Windows desktop applications.",
      studioNote: "Screenshots, feature details, pricing, and download links on this site refer to released versions.",
    },
    products: {
      title: "Windows applications",
      intro: "All applications are released. Product pages include feature details, real interfaces, a region-matched price, privacy policies, and Microsoft Store download links.",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "State logging and analysis", description: "Record energy, mood, stress, and activities, then review changes through timelines and analysis reports.", status: "Available" },
      deskhaven: { title: "DeskHaven", category: "Local file management", description: "Collect, search, and archive local files, then inspect content relationships in a graph.", status: "Available" },
      adhd: { title: "ADHD Focus Timer", category: "Focus timer and ambient sound", description: "Mix ambient sounds, use a breathing guide and forward timer, and capture temporary thoughts during a session.", status: "Available" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "Record energy, mood, and stress.",
      intro: "Quickly record your current state, activity, text, images, or audio, then review the history with timelines, filters, and analysis reports.",
      status: "Available",
      promiseTitle: "Logging and analysis",
      promise: "EnergyFlow organizes your entries into timelines, trends, and analysis reports.",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "Organize local files and view content relationships.",
      intro: "Collect, search, and archive local files, then use the relationship graph to inspect links between files, tags, and projects. Local encryption and backup are included.",
      status: "Available",
      promiseTitle: "Local file management",
      promise: "DeskHaven provides file management, search, archiving, relationship graphs, encryption, and backup.",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Use ambient sound and forward timing to support focus.",
      intro: "Mix multiple ambient sounds and use a breathing guide before starting a forward timer. Save temporary thoughts in the Idea Fridge and return to them after the session.",
      status: "Available",
      promiseTitle: "Focus timing",
      promise: "ADHD Focus Timer provides ambient sound, breathing guidance, forward timing, the Idea Fridge, and session statistics.",
    },
    about: {
      title: "About SoloCraft",
      intro: "SoloCraft is a Windows software project independently developed and maintained by Chicken Fillet.",
      story: ["The current applications cover state logging, local file management, and focus timing.", "Product pages show released interfaces, features, pricing, privacy policies, and download links.", "Chicken Fillet maintains the applications, website content, and user support."],
      techTitle: "Development areas",
      tech: ["Windows desktop applications", "Local data processing", "Statistics and visualization", "Multilingual interfaces"],
      ctaTitle: "Contact",
      ctaDescription: "Send product feedback, support requests, collaboration proposals, or media enquiries by email.",
      ctaButton: "Contact",
    },
    contact: { title: "Contact", intro: "Send product feedback, support requests, collaboration proposals, or media enquiries by email.", infoTitle: "Email", email: "Contact email" },
    footer: { subtitle: "Windows applications independently developed and maintained by Chicken Fillet.", copyright: "© 2026 SoloCraft." },
  },
  ja: {
    home: {
      eyebrow: "CHICKEN FILLET / WINDOWS ソフトウェア",
      title: "SoloCraft",
      intro: "Chicken Fillet が個人で開発・保守する Windows デスクトップアプリを紹介します。",
      primary: "製品を見る",
      secondary: "SoloCraft について",
      currentProduct: "画面プレビュー",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "状態を記録し、履歴の変化を確認。", body: "エネルギー、気分、ストレス、活動を記録し、タイムラインと分析レポートで履歴を確認します。", bullets: ["状態記録", "メディア記録", "タイムライン", "傾向分析"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "ローカルファイルを整理し、関連を確認。", body: "ローカルファイルを保管、検索、アーカイブし、関係グラフでファイル、タグ、プロジェクト間の関連を確認します。", bullets: ["ファイル管理", "検索と絞り込み", "関係グラフ", "ローカルバックアップ"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "環境音を設定し、経過時間を計測。", body: "複数の環境音を組み合わせ、呼吸ガイドの後に経過時間の計測を始めます。途中の考えは Idea Fridge に保存できます。", bullets: ["環境音", "呼吸ガイド", "経過時間", "Idea Fridge"] },
      ],
      productTitle: "製品",
      studioTitle: "SoloCraft について",
      studioBody: "SoloCraft は Chicken Fillet が個人で開発・保守する Windows デスクトップアプリのプロジェクトです。",
      studioNote: "掲載している画面、機能、価格、ダウンロード先は公開済みバージョンに対応しています。",
    },
    products: {
      title: "Windows アプリ",
      intro: "すべて公開済みです。各製品ページで機能、実際の画面、地域別価格、プライバシーポリシー、Microsoft Store のリンクを確認できます。",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "状態記録と分析", description: "エネルギー、気分、ストレス、活動を記録し、タイムラインと分析レポートで変化を確認します。", status: "公開中" },
      deskhaven: { title: "DeskHaven", category: "ローカルファイル管理", description: "ローカルファイルを保管、検索、アーカイブし、関係グラフで内容の関連を確認します。", status: "公開中" },
      adhd: { title: "ADHD Focus Timer", category: "集中タイマーと環境音", description: "環境音、呼吸ガイド、経過時間の計測を使い、途中の考えを保存します。", status: "公開中" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "エネルギー、気分、ストレスを記録。",
      intro: "現在の状態、活動、テキスト、画像、音声をすばやく記録し、タイムライン、絞り込み、分析レポートで履歴を確認します。",
      status: "公開中",
      promiseTitle: "記録と分析",
      promise: "EnergyFlow は記録をタイムライン、傾向、分析レポートに整理します。",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "ローカルファイルを整理し、関連を確認。",
      intro: "ローカルファイルを保管、検索、アーカイブし、関係グラフでファイル、タグ、プロジェクト間の関連を確認します。暗号化とバックアップにも対応します。",
      status: "公開中",
      promiseTitle: "ローカルファイル管理",
      promise: "DeskHaven はファイル管理、検索、アーカイブ、関係グラフ、暗号化、バックアップを提供します。",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "環境音と経過時間で集中を支援。",
      intro: "複数の環境音を組み合わせ、呼吸ガイドの後に経過時間の計測を始めます。途中で浮かんだ考えは Idea Fridge に保存し、終了後に確認できます。",
      status: "公開中",
      promiseTitle: "集中タイマー",
      promise: "ADHD Focus Timer は環境音、呼吸ガイド、経過時間、Idea Fridge、統計を提供します。",
    },
    about: {
      title: "SoloCraft について",
      intro: "SoloCraft は Chicken Fillet が個人で開発・保守する Windows ソフトウェアプロジェクトです。",
      story: ["現在は状態記録、ローカルファイル管理、集中タイマーのアプリを公開しています。", "製品ページには公開済み画面、機能、価格、プライバシーポリシー、ダウンロード先を掲載しています。", "アプリの更新、サイト内容、ユーザーサポートは Chicken Fillet が担当します。"],
      techTitle: "開発分野",
      tech: ["Windows デスクトップアプリ", "ローカルデータ処理", "統計と可視化", "多言語インターフェース"],
      ctaTitle: "お問い合わせ",
      ctaDescription: "製品への意見、技術サポート、協業、取材についてメールでお問い合わせいただけます。",
      ctaButton: "お問い合わせ",
    },
    contact: { title: "お問い合わせ", intro: "製品への意見、技術サポート、協業、取材についてメールでお問い合わせいただけます。", infoTitle: "メール", email: "連絡先メール" },
    footer: { subtitle: "Chicken Fillet が個人で開発・保守する Windows アプリ。", copyright: "© 2026 SoloCraft." },
  },
  ko: {
    home: {
      eyebrow: "CHICKEN FILLET / WINDOWS 소프트웨어",
      title: "SoloCraft",
      intro: "Chicken Fillet이 독립적으로 개발하고 유지 관리하는 Windows 데스크톱 앱을 소개합니다.",
      primary: "제품 보기",
      secondary: "SoloCraft 소개",
      currentProduct: "화면 미리보기",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "상태를 기록하고 이전 변화를 확인합니다.", body: "에너지, 기분, 스트레스, 활동을 기록하고 타임라인과 분석 보고서에서 이력을 확인합니다.", bullets: ["상태 기록", "미디어 기록", "타임라인", "추세 분석"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "로컬 파일을 정리하고 관계를 확인합니다.", body: "로컬 파일을 보관, 검색, 보관 처리하고 관계 그래프에서 파일, 태그, 프로젝트의 연결을 확인합니다.", bullets: ["파일 관리", "검색과 필터", "관계 그래프", "로컬 백업"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "환경음을 설정하고 순방향 타이머를 시작합니다.", body: "여러 환경음을 조합하고 호흡 안내 후 타이머를 시작합니다. 떠오른 생각은 Idea Fridge에 저장할 수 있습니다.", bullets: ["환경음", "호흡 안내", "순방향 타이머", "Idea Fridge"] },
      ],
      productTitle: "제품",
      studioTitle: "SoloCraft 소개",
      studioBody: "SoloCraft는 Chicken Fillet이 독립적으로 개발하고 유지 관리하는 Windows 데스크톱 앱 프로젝트입니다.",
      studioNote: "사이트의 화면, 기능, 가격, 다운로드 링크는 출시된 버전을 기준으로 합니다.",
    },
    products: {
      title: "Windows 애플리케이션",
      intro: "모든 앱이 출시되었습니다. 제품 페이지에서 기능, 실제 화면, 현재 지역 가격, 개인정보 처리방침, Microsoft Store 링크를 확인할 수 있습니다.",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "상태 기록 및 분석", description: "에너지, 기분, 스트레스, 활동을 기록하고 타임라인과 분석 보고서에서 변화를 확인합니다.", status: "출시됨" },
      deskhaven: { title: "DeskHaven", category: "로컬 파일 관리", description: "로컬 파일을 보관, 검색, 보관 처리하고 관계 그래프에서 콘텐츠 연결을 확인합니다.", status: "출시됨" },
      adhd: { title: "ADHD Focus Timer", category: "집중 타이머 및 환경음", description: "환경음, 호흡 안내, 순방향 타이머를 사용하고 집중 중 떠오른 생각을 기록합니다.", status: "출시됨" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "에너지, 기분, 스트레스를 기록합니다.",
      intro: "현재 상태, 활동, 텍스트, 이미지, 오디오를 빠르게 기록하고 타임라인, 필터, 분석 보고서에서 이력을 확인합니다.",
      status: "출시됨",
      promiseTitle: "기록 및 분석",
      promise: "EnergyFlow는 기록을 타임라인, 추세, 분석 보고서로 정리합니다.",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "로컬 파일을 정리하고 콘텐츠 관계를 확인합니다.",
      intro: "로컬 파일을 보관, 검색, 보관 처리하고 관계 그래프에서 파일, 태그, 프로젝트의 연결을 확인합니다. 로컬 암호화와 백업을 지원합니다.",
      status: "출시됨",
      promiseTitle: "로컬 파일 관리",
      promise: "DeskHaven은 파일 관리, 검색, 보관, 관계 그래프, 암호화, 백업 기능을 제공합니다.",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "환경음과 순방향 타이머로 집중을 보조합니다.",
      intro: "여러 환경음을 조합하고 호흡 안내 후 순방향 타이머를 시작합니다. 집중 중 떠오른 생각은 Idea Fridge에 저장하고 종료 후 확인할 수 있습니다.",
      status: "출시됨",
      promiseTitle: "집중 타이머",
      promise: "ADHD Focus Timer는 환경음, 호흡 안내, 순방향 타이머, Idea Fridge, 통계를 제공합니다.",
    },
    about: {
      title: "SoloCraft 소개",
      intro: "SoloCraft는 Chicken Fillet이 독립적으로 개발하고 유지 관리하는 Windows 소프트웨어 프로젝트입니다.",
      story: ["현재 상태 기록, 로컬 파일 관리, 집중 타이머 앱을 제공합니다.", "제품 페이지에는 출시된 화면, 기능, 가격, 개인정보 처리방침, 다운로드 링크가 있습니다.", "앱 업데이트, 사이트 콘텐츠, 사용자 지원은 Chicken Fillet이 관리합니다."],
      techTitle: "개발 영역",
      tech: ["Windows 데스크톱 앱", "로컬 데이터 처리", "통계 및 시각화", "다국어 인터페이스"],
      ctaTitle: "문의",
      ctaDescription: "제품 의견, 기술 지원, 협업, 미디어 문의는 이메일로 보내 주세요.",
      ctaButton: "문의",
    },
    contact: { title: "문의", intro: "제품 의견, 기술 지원, 협업, 미디어 문의는 이메일로 보내 주세요.", infoTitle: "이메일", email: "문의 이메일" },
    footer: { subtitle: "Chicken Fillet이 독립적으로 개발하고 유지 관리하는 Windows 앱.", copyright: "© 2026 SoloCraft." },
  },
  fr: {
    home: {
      eyebrow: "CHICKEN FILLET / LOGICIELS WINDOWS",
      title: "SoloCraft",
      intro: "Applications Windows développées et maintenues indépendamment par Chicken Fillet.",
      primary: "Voir les produits",
      secondary: "À propos de SoloCraft",
      currentProduct: "Aperçu de l’interface",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "Enregistrer son état et consulter son évolution.", body: "Consignez énergie, humeur, stress et activités, puis consultez l’historique dans la chronologie et les rapports d’analyse.", bullets: ["Suivi de l’état", "Entrées multimédias", "Chronologie", "Analyse des tendances"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "Organiser les fichiers locaux et consulter leurs relations.", body: "Rassemblez, recherchez et archivez les fichiers locaux, puis examinez les liens entre fichiers, étiquettes et projets dans le graphe.", bullets: ["Gestion de fichiers", "Recherche et filtres", "Graphe de relations", "Sauvegarde locale"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "Régler les sons d’ambiance et lancer un chronomètre progressif.", body: "Mélangez plusieurs sons, suivez le guide respiratoire, puis enregistrez les idées passagères dans Idea Fridge.", bullets: ["Sons d’ambiance", "Guide respiratoire", "Chronomètre progressif", "Idea Fridge"] },
      ],
      productTitle: "Produits",
      studioTitle: "À propos de SoloCraft",
      studioBody: "SoloCraft est un projet d’applications Windows développé et maintenu indépendamment par Chicken Fillet.",
      studioNote: "Les captures, fonctions, prix et liens de téléchargement correspondent aux versions publiées.",
    },
    products: {
      title: "Applications Windows",
      intro: "Toutes les applications sont publiées. Chaque page présente les fonctions, l’interface réelle, le prix régional, la politique de confidentialité et le lien Microsoft Store.",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "Suivi et analyse de l’état", description: "Consignez énergie, humeur, stress et activités, puis consultez les changements dans la chronologie et les rapports.", status: "Disponible" },
      deskhaven: { title: "DeskHaven", category: "Gestion locale des fichiers", description: "Rassemblez, recherchez et archivez les fichiers locaux, puis consultez leurs relations dans un graphe.", status: "Disponible" },
      adhd: { title: "ADHD Focus Timer", category: "Chronomètre de concentration et sons", description: "Mélangez des sons d’ambiance, utilisez le guide respiratoire et le chronomètre progressif, puis notez les idées passagères.", status: "Disponible" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "Enregistrer l’énergie, l’humeur et le stress.",
      intro: "Enregistrez rapidement l’état actuel, l’activité, du texte, des images ou de l’audio, puis consultez l’historique avec la chronologie, les filtres et les rapports.",
      status: "Disponible",
      promiseTitle: "Suivi et analyse",
      promise: "EnergyFlow organise les entrées en chronologies, tendances et rapports d’analyse.",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "Organiser les fichiers locaux et consulter leurs relations.",
      intro: "Rassemblez, recherchez et archivez les fichiers locaux, puis examinez les liens entre fichiers, étiquettes et projets dans le graphe. Le chiffrement et la sauvegarde locale sont inclus.",
      status: "Disponible",
      promiseTitle: "Gestion locale des fichiers",
      promise: "DeskHaven fournit gestion, recherche, archivage, graphe de relations, chiffrement et sauvegarde.",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Utiliser les sons d’ambiance et un chronomètre progressif pour se concentrer.",
      intro: "Mélangez plusieurs sons d’ambiance et suivez le guide respiratoire avant de lancer le chronomètre. Enregistrez les idées passagères dans Idea Fridge pour les reprendre après la session.",
      status: "Disponible",
      promiseTitle: "Chronomètre de concentration",
      promise: "ADHD Focus Timer fournit sons d’ambiance, guide respiratoire, chronomètre progressif, Idea Fridge et statistiques.",
    },
    about: {
      title: "À propos de SoloCraft",
      intro: "SoloCraft est un projet de logiciels Windows développé et maintenu indépendamment par Chicken Fillet.",
      story: ["Les applications actuelles couvrent le suivi de l’état, la gestion locale des fichiers et le chronométrage de la concentration.", "Les pages produit présentent les interfaces publiées, les fonctions, les prix, les politiques de confidentialité et les liens de téléchargement.", "Chicken Fillet assure les mises à jour, le contenu du site et l’assistance aux utilisateurs."],
      techTitle: "Domaines de développement",
      tech: ["Applications Windows", "Traitement local des données", "Statistiques et visualisation", "Interfaces multilingues"],
      ctaTitle: "Contact",
      ctaDescription: "Envoyez par e-mail vos retours, demandes d’assistance, propositions de collaboration ou questions presse.",
      ctaButton: "Contact",
    },
    contact: { title: "Contact", intro: "Envoyez par e-mail vos retours, demandes d’assistance, propositions de collaboration ou questions presse.", infoTitle: "E-mail", email: "Adresse de contact" },
    footer: { subtitle: "Applications Windows développées et maintenues indépendamment par Chicken Fillet.", copyright: "© 2026 SoloCraft." },
  },
  de: {
    home: {
      eyebrow: "CHICKEN FILLET / WINDOWS-SOFTWARE",
      title: "SoloCraft",
      intro: "Windows-Desktopanwendungen, unabhängig entwickelt und gepflegt von Chicken Fillet.",
      primary: "Produkte ansehen",
      secondary: "Über SoloCraft",
      currentProduct: "Oberflächenvorschau",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "Zustand erfassen und zeitliche Änderungen prüfen.", body: "Energie, Stimmung, Stress und Aktivitäten protokollieren und den Verlauf in Zeitleisten und Analyseberichten prüfen.", bullets: ["Zustandsprotokoll", "Medieneinträge", "Zeitleiste", "Trendanalyse"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "Lokale Dateien ordnen und Beziehungen anzeigen.", body: "Lokale Dateien sammeln, durchsuchen und archivieren sowie Verknüpfungen zwischen Dateien, Tags und Projekten im Beziehungsgraphen prüfen.", bullets: ["Dateiverwaltung", "Suche und Filter", "Beziehungsgraph", "Lokale Sicherung"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "Umgebungsgeräusche einstellen und Vorwärtszeit starten.", body: "Mehrere Umgebungsgeräusche mischen, eine Atemanleitung nutzen und Gedanken im Idea Fridge für später speichern.", bullets: ["Umgebungsgeräusche", "Atemanleitung", "Vorwärtszeit", "Idea Fridge"] },
      ],
      productTitle: "Produkte",
      studioTitle: "Über SoloCraft",
      studioBody: "SoloCraft ist ein von Chicken Fillet unabhängig entwickeltes und gepflegtes Projekt für Windows-Desktopanwendungen.",
      studioNote: "Screenshots, Funktionen, Preise und Downloadlinks beziehen sich auf veröffentlichte Versionen.",
    },
    products: {
      title: "Windows-Anwendungen",
      intro: "Alle Anwendungen sind veröffentlicht. Die Produktseiten enthalten Funktionen, echte Oberflächen, einen regionalen Preis, Datenschutzrichtlinien und Microsoft-Store-Links.",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "Zustandsprotokoll und Analyse", description: "Energie, Stimmung, Stress und Aktivitäten erfassen und Änderungen in Zeitleisten und Analyseberichten prüfen.", status: "Verfügbar" },
      deskhaven: { title: "DeskHaven", category: "Lokale Dateiverwaltung", description: "Lokale Dateien sammeln, durchsuchen und archivieren sowie ihre Beziehungen im Graphen anzeigen.", status: "Verfügbar" },
      adhd: { title: "ADHD Focus Timer", category: "Fokustimer und Umgebungsgeräusche", description: "Umgebungsgeräusche mischen, Atemanleitung und Vorwärtszeit nutzen und vorübergehende Gedanken speichern.", status: "Verfügbar" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "Energie, Stimmung und Stress protokollieren.",
      intro: "Aktuellen Zustand, Aktivität, Text, Bilder oder Audio schnell erfassen und den Verlauf mit Zeitleisten, Filtern und Analyseberichten prüfen.",
      status: "Verfügbar",
      promiseTitle: "Protokoll und Analyse",
      promise: "EnergyFlow ordnet Einträge in Zeitleisten, Trends und Analyseberichte.",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "Lokale Dateien ordnen und Beziehungen anzeigen.",
      intro: "Lokale Dateien sammeln, durchsuchen und archivieren sowie Verknüpfungen zwischen Dateien, Tags und Projekten im Beziehungsgraphen prüfen. Lokale Verschlüsselung und Sicherung sind enthalten.",
      status: "Verfügbar",
      promiseTitle: "Lokale Dateiverwaltung",
      promise: "DeskHaven bietet Dateiverwaltung, Suche, Archivierung, Beziehungsgraph, Verschlüsselung und Sicherung.",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Mit Umgebungsgeräuschen und Vorwärtszeit konzentrieren.",
      intro: "Mehrere Umgebungsgeräusche mischen und nach einer Atemanleitung die Vorwärtszeit starten. Vorübergehende Gedanken im Idea Fridge speichern und nach der Sitzung prüfen.",
      status: "Verfügbar",
      promiseTitle: "Fokustimer",
      promise: "ADHD Focus Timer bietet Umgebungsgeräusche, Atemanleitung, Vorwärtszeit, Idea Fridge und Statistiken.",
    },
    about: {
      title: "Über SoloCraft",
      intro: "SoloCraft ist ein von Chicken Fillet unabhängig entwickeltes und gepflegtes Windows-Softwareprojekt.",
      story: ["Die aktuellen Anwendungen decken Zustandsprotokolle, lokale Dateiverwaltung und Fokuszeit ab.", "Produktseiten zeigen veröffentlichte Oberflächen, Funktionen, Preise, Datenschutzrichtlinien und Downloadlinks.", "Chicken Fillet pflegt die Anwendungen, die Website-Inhalte und den Benutzersupport."],
      techTitle: "Entwicklungsbereiche",
      tech: ["Windows-Desktopanwendungen", "Lokale Datenverarbeitung", "Statistik und Visualisierung", "Mehrsprachige Oberflächen"],
      ctaTitle: "Kontakt",
      ctaDescription: "Produktfeedback, Supportanfragen, Kooperationsvorschläge oder Presseanfragen können per E-Mail gesendet werden.",
      ctaButton: "Kontakt",
    },
    contact: { title: "Kontakt", intro: "Produktfeedback, Supportanfragen, Kooperationsvorschläge oder Presseanfragen können per E-Mail gesendet werden.", infoTitle: "E-Mail", email: "Kontaktadresse" },
    footer: { subtitle: "Windows-Anwendungen, unabhängig entwickelt und gepflegt von Chicken Fillet.", copyright: "© 2026 SoloCraft." },
  },
  es: {
    home: {
      eyebrow: "CHICKEN FILLET / SOFTWARE PARA WINDOWS",
      title: "SoloCraft",
      intro: "Aplicaciones de escritorio para Windows desarrolladas y mantenidas de forma independiente por Chicken Fillet.",
      primary: "Ver productos",
      secondary: "Acerca de SoloCraft",
      currentProduct: "Vista previa de la interfaz",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "Registra tu estado y consulta los cambios históricos.", body: "Registra energía, ánimo, estrés y actividades, y consulta el historial mediante cronologías e informes de análisis.", bullets: ["Registro de estado", "Entradas multimedia", "Cronología", "Análisis de tendencias"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "Organiza archivos locales y consulta sus relaciones.", body: "Reúne, busca y archiva archivos locales, y examina las conexiones entre archivos, etiquetas y proyectos en el grafo.", bullets: ["Gestión de archivos", "Búsqueda y filtros", "Grafo de relaciones", "Copia local"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "Configura sonidos ambientales e inicia un cronómetro progresivo.", body: "Mezcla varios sonidos, sigue la guía de respiración y guarda pensamientos temporales en Idea Fridge para revisarlos después.", bullets: ["Sonidos ambientales", "Guía de respiración", "Cronómetro progresivo", "Idea Fridge"] },
      ],
      productTitle: "Productos",
      studioTitle: "Acerca de SoloCraft",
      studioBody: "SoloCraft es un proyecto de aplicaciones para Windows desarrollado y mantenido de forma independiente por Chicken Fillet.",
      studioNote: "Las capturas, funciones, precios y enlaces de descarga corresponden a versiones publicadas.",
    },
    products: {
      title: "Aplicaciones para Windows",
      intro: "Todas las aplicaciones están publicadas. Cada página incluye funciones, interfaz real, precio regional, política de privacidad y enlace de Microsoft Store.",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "Registro y análisis del estado", description: "Registra energía, ánimo, estrés y actividades, y consulta los cambios en cronologías e informes.", status: "Disponible" },
      deskhaven: { title: "DeskHaven", category: "Gestión local de archivos", description: "Reúne, busca y archiva archivos locales, y consulta sus relaciones en un grafo.", status: "Disponible" },
      adhd: { title: "ADHD Focus Timer", category: "Cronómetro de concentración y sonido", description: "Mezcla sonidos ambientales, usa la guía de respiración y el cronómetro progresivo, y guarda pensamientos temporales.", status: "Disponible" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "Registra energía, ánimo y estrés.",
      intro: "Registra rápidamente el estado actual, la actividad, texto, imágenes o audio, y consulta el historial con cronologías, filtros e informes de análisis.",
      status: "Disponible",
      promiseTitle: "Registro y análisis",
      promise: "EnergyFlow organiza las entradas en cronologías, tendencias e informes de análisis.",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "Organiza archivos locales y consulta sus relaciones.",
      intro: "Reúne, busca y archiva archivos locales, y examina las conexiones entre archivos, etiquetas y proyectos en el grafo. Incluye cifrado y copias locales.",
      status: "Disponible",
      promiseTitle: "Gestión local de archivos",
      promise: "DeskHaven ofrece gestión, búsqueda, archivo, grafo de relaciones, cifrado y copias de seguridad.",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Usa sonidos ambientales y tiempo progresivo para concentrarte.",
      intro: "Mezcla varios sonidos ambientales y sigue una guía de respiración antes de iniciar el cronómetro. Guarda pensamientos temporales en Idea Fridge para revisarlos al terminar.",
      status: "Disponible",
      promiseTitle: "Cronómetro de concentración",
      promise: "ADHD Focus Timer ofrece sonidos ambientales, guía de respiración, tiempo progresivo, Idea Fridge y estadísticas.",
    },
    about: {
      title: "Acerca de SoloCraft",
      intro: "SoloCraft es un proyecto de software para Windows desarrollado y mantenido de forma independiente por Chicken Fillet.",
      story: ["Las aplicaciones actuales cubren registro del estado, gestión local de archivos y cronometraje de concentración.", "Las páginas de producto muestran interfaces publicadas, funciones, precios, políticas de privacidad y enlaces de descarga.", "Chicken Fillet mantiene las aplicaciones, el contenido del sitio y el soporte a usuarios."],
      techTitle: "Áreas de desarrollo",
      tech: ["Aplicaciones de escritorio para Windows", "Procesamiento local de datos", "Estadística y visualización", "Interfaces multilingües"],
      ctaTitle: "Contacto",
      ctaDescription: "Envía por correo comentarios, solicitudes de soporte, propuestas de colaboración o consultas de prensa.",
      ctaButton: "Contacto",
    },
    contact: { title: "Contacto", intro: "Envía por correo comentarios, solicitudes de soporte, propuestas de colaboración o consultas de prensa.", infoTitle: "Correo electrónico", email: "Correo de contacto" },
    footer: { subtitle: "Aplicaciones para Windows desarrolladas y mantenidas de forma independiente por Chicken Fillet.", copyright: "© 2026 SoloCraft." },
  },
  ru: {
    home: {
      eyebrow: "CHICKEN FILLET / ПРОГРАММЫ ДЛЯ WINDOWS",
      title: "SoloCraft",
      intro: "Приложения для Windows, которые Chicken Fillet разрабатывает и поддерживает самостоятельно.",
      primary: "Смотреть продукты",
      secondary: "О SoloCraft",
      currentProduct: "Предпросмотр интерфейса",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "Записывайте состояние и просматривайте изменения.", body: "Сохраняйте данные об энергии, настроении, стрессе и занятиях, затем изучайте историю на временной шкале и в отчётах.", bullets: ["Запись состояния", "Медиа-вложения", "Временная шкала", "Анализ тенденций"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "Упорядочивайте локальные файлы и просматривайте связи.", body: "Собирайте, ищите и архивируйте локальные файлы, а в графе просматривайте связи между файлами, метками и проектами.", bullets: ["Управление файлами", "Поиск и фильтры", "Граф связей", "Локальная копия"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "Настройте фоновые звуки и запустите прямой таймер.", body: "Смешивайте фоновые звуки, используйте дыхательную инструкцию и сохраняйте временные мысли в Idea Fridge.", bullets: ["Фоновые звуки", "Дыхательная инструкция", "Прямой таймер", "Idea Fridge"] },
      ],
      productTitle: "Продукты",
      studioTitle: "О SoloCraft",
      studioBody: "SoloCraft — проект приложений для Windows, который Chicken Fillet разрабатывает и поддерживает самостоятельно.",
      studioNote: "Снимки экрана, функции, цены и ссылки на загрузку относятся к опубликованным версиям.",
    },
    products: {
      title: "Приложения для Windows",
      intro: "Все приложения опубликованы. На страницах продуктов указаны функции, реальный интерфейс, цена для текущего региона, политика конфиденциальности и ссылка на Microsoft Store.",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "Запись и анализ состояния", description: "Записывайте энергию, настроение, стресс и занятия, затем просматривайте изменения на временной шкале и в отчётах.", status: "Доступно" },
      deskhaven: { title: "DeskHaven", category: "Локальное управление файлами", description: "Собирайте, ищите и архивируйте локальные файлы, а также просматривайте связи в графе.", status: "Доступно" },
      adhd: { title: "ADHD Focus Timer", category: "Таймер фокуса и фоновые звуки", description: "Смешивайте фоновые звуки, используйте дыхательную инструкцию и прямой таймер, сохраняйте временные мысли.", status: "Доступно" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "Записывайте энергию, настроение и стресс.",
      intro: "Быстро сохраняйте текущее состояние, занятие, текст, изображения или аудио, затем просматривайте историю с помощью шкалы, фильтров и отчётов.",
      status: "Доступно",
      promiseTitle: "Запись и анализ",
      promise: "EnergyFlow объединяет записи во временные шкалы, тенденции и аналитические отчёты.",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "Упорядочивайте локальные файлы и просматривайте связи.",
      intro: "Собирайте, ищите и архивируйте локальные файлы, а в графе просматривайте связи между файлами, метками и проектами. Поддерживаются локальное шифрование и резервные копии.",
      status: "Доступно",
      promiseTitle: "Локальное управление файлами",
      promise: "DeskHaven предоставляет управление файлами, поиск, архив, граф связей, шифрование и резервное копирование.",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Используйте фоновые звуки и прямой таймер для концентрации.",
      intro: "Смешивайте несколько фоновых звуков и используйте дыхательную инструкцию перед запуском таймера. Временные мысли можно сохранить в Idea Fridge и просмотреть после сеанса.",
      status: "Доступно",
      promiseTitle: "Таймер фокуса",
      promise: "ADHD Focus Timer предоставляет фоновые звуки, дыхательную инструкцию, прямой таймер, Idea Fridge и статистику.",
    },
    about: {
      title: "О SoloCraft",
      intro: "SoloCraft — проект программ для Windows, который Chicken Fillet разрабатывает и поддерживает самостоятельно.",
      story: ["Текущие приложения предназначены для записи состояния, локального управления файлами и учёта времени концентрации.", "На страницах продуктов показаны опубликованные интерфейсы, функции, цены, политики конфиденциальности и ссылки на загрузку.", "Chicken Fillet поддерживает приложения, содержимое сайта и отвечает на обращения пользователей."],
      techTitle: "Направления разработки",
      tech: ["Приложения для Windows", "Локальная обработка данных", "Статистика и визуализация", "Многоязычные интерфейсы"],
      ctaTitle: "Связаться",
      ctaDescription: "Отзывы о продуктах, запросы поддержки, предложения о сотрудничестве и вопросы прессы можно отправить по электронной почте.",
      ctaButton: "Связаться",
    },
    contact: { title: "Связаться", intro: "Отзывы о продуктах, запросы поддержки, предложения о сотрудничестве и вопросы прессы можно отправить по электронной почте.", infoTitle: "Электронная почта", email: "Адрес для связи" },
    footer: { subtitle: "Приложения для Windows, которые Chicken Fillet разрабатывает и поддерживает самостоятельно.", copyright: "© 2026 SoloCraft." },
  },
  pt: {
    home: {
      eyebrow: "CHICKEN FILLET / SOFTWARE PARA WINDOWS",
      title: "SoloCraft",
      intro: "Aplicações de ambiente de trabalho para Windows desenvolvidas e mantidas de forma independente por Chicken Fillet.",
      primary: "Ver produtos",
      secondary: "Sobre o SoloCraft",
      currentProduct: "Pré-visualização da interface",
      chapters: [
        { id: "energyflow", num: "01 / EnergyFlow", title: "Registe o estado e consulte alterações anteriores.", body: "Registe energia, humor, stress e atividades, depois consulte o histórico em cronologias e relatórios de análise.", bullets: ["Registo do estado", "Entradas multimédia", "Cronologia", "Análise de tendências"] },
        { id: "deskhaven", num: "02 / DeskHaven", title: "Organize ficheiros locais e consulte as relações.", body: "Reúna, pesquise e arquive ficheiros locais, depois veja ligações entre ficheiros, etiquetas e projetos no grafo.", bullets: ["Gestão de ficheiros", "Pesquisa e filtros", "Grafo de relações", "Cópia local"] },
        { id: "adhd", num: "03 / ADHD Focus Timer", title: "Configure sons ambiente e inicie um cronómetro progressivo.", body: "Misture vários sons, siga o guia de respiração e guarde pensamentos temporários no Idea Fridge para mais tarde.", bullets: ["Sons ambiente", "Guia de respiração", "Cronómetro progressivo", "Idea Fridge"] },
      ],
      productTitle: "Produtos",
      studioTitle: "Sobre o SoloCraft",
      studioBody: "SoloCraft é um projeto de aplicações Windows desenvolvido e mantido de forma independente por Chicken Fillet.",
      studioNote: "As capturas, funções, preços e ligações de transferência correspondem a versões publicadas.",
    },
    products: {
      title: "Aplicações para Windows",
      intro: "Todas as aplicações estão publicadas. Cada página inclui funções, interface real, preço regional, política de privacidade e ligação à Microsoft Store.",
    },
    productCards: {
      energyflow: { title: "EnergyFlow", category: "Registo e análise do estado", description: "Registe energia, humor, stress e atividades, depois consulte alterações em cronologias e relatórios.", status: "Disponível" },
      deskhaven: { title: "DeskHaven", category: "Gestão local de ficheiros", description: "Reúna, pesquise e arquive ficheiros locais, depois consulte as relações num grafo.", status: "Disponível" },
      adhd: { title: "ADHD Focus Timer", category: "Cronómetro de concentração e sons", description: "Misture sons ambiente, use o guia de respiração e o cronómetro progressivo, e guarde pensamentos temporários.", status: "Disponível" },
    },
    energyflow: {
      eyebrow: "EnergyFlow",
      title: "Registe energia, humor e stress.",
      intro: "Registe rapidamente o estado atual, atividade, texto, imagens ou áudio, depois consulte o histórico com cronologias, filtros e relatórios de análise.",
      status: "Disponível",
      promiseTitle: "Registo e análise",
      promise: "EnergyFlow organiza as entradas em cronologias, tendências e relatórios de análise.",
    },
    deskhaven: {
      eyebrow: "DeskHaven",
      title: "Organize ficheiros locais e consulte as relações.",
      intro: "Reúna, pesquise e arquive ficheiros locais, depois veja ligações entre ficheiros, etiquetas e projetos no grafo. Inclui cifragem e cópias locais.",
      status: "Disponível",
      promiseTitle: "Gestão local de ficheiros",
      promise: "DeskHaven fornece gestão, pesquisa, arquivo, grafo de relações, cifragem e cópias de segurança.",
    },
    adhd: {
      eyebrow: "ADHD Focus Timer / 1.5.0",
      title: "Use sons ambiente e tempo progressivo para apoiar a concentração.",
      intro: "Misture vários sons ambiente e siga um guia de respiração antes de iniciar o cronómetro. Guarde pensamentos temporários no Idea Fridge para rever após a sessão.",
      status: "Disponível",
      promiseTitle: "Cronómetro de concentração",
      promise: "ADHD Focus Timer fornece sons ambiente, guia de respiração, tempo progressivo, Idea Fridge e estatísticas.",
    },
    about: {
      title: "Sobre o SoloCraft",
      intro: "SoloCraft é um projeto de software para Windows desenvolvido e mantido de forma independente por Chicken Fillet.",
      story: ["As aplicações atuais abrangem registo do estado, gestão local de ficheiros e cronometragem de concentração.", "As páginas de produto mostram interfaces publicadas, funções, preços, políticas de privacidade e ligações de transferência.", "Chicken Fillet mantém as aplicações, o conteúdo do site e o apoio aos utilizadores."],
      techTitle: "Áreas de desenvolvimento",
      tech: ["Aplicações de ambiente de trabalho Windows", "Processamento local de dados", "Estatística e visualização", "Interfaces multilingues"],
      ctaTitle: "Contacto",
      ctaDescription: "Envie por e-mail comentários, pedidos de suporte, propostas de colaboração ou questões de imprensa.",
      ctaButton: "Contacto",
    },
    contact: { title: "Contacto", intro: "Envie por e-mail comentários, pedidos de suporte, propostas de colaboração ou questões de imprensa.", infoTitle: "E-mail", email: "E-mail de contacto" },
    footer: { subtitle: "Aplicações para Windows desenvolvidas e mantidas de forma independente por Chicken Fillet.", copyright: "© 2026 SoloCraft." },
  },
} as const satisfies Record<Locale, FunctionalNarrative>;

export function getSiteCopy(locale: Locale): SiteCopy {
  const base = siteCopy[locale] as SiteCopy;
  const functional = functionalNarrative[locale];

  return {
    ...base,
    home: { ...base.home, ...functional.home },
    products: { ...base.products, ...functional.products },
    productCards: functional.productCards,
    energyflow: { ...base.energyflow, ...functional.energyflow },
    deskhaven: { ...base.deskhaven, ...functional.deskhaven },
    adhd: { ...base.adhd, ...functional.adhd },
    about: { ...base.about, ...functional.about },
    contact: functional.contact,
    footer: { ...base.footer, ...functional.footer },
  };
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
      ["几秒完成一次完整记录", "在同一页选择精力、状态、来源和情绪，也可以补充文字、图片或录音。"],
      ["按时间线回看每一次变化", "按日期浏览记录，并用状态、复盘、表情、文字、音频或图片快速筛选。"],
      ["私人记录只留在你的设备", "PIN 锁、内容防截取和本地加密备份共同保护精力与情绪数据。"],
      ["用报告理解消耗与恢复", "趋势、分布、压力、恢复和相关性分析，把长期记录整理成清晰结论。"],
    ],
    screenshots: [
      ["本地加密解锁", "使用四位 PIN 进入应用，保护设备上的私人记录。"],
      ["快速记录", "选择当前精力、工作状态、触发来源和情绪，几秒即可保存。"],
      ["精力与情绪记录", "同时记录精力等级、当前状态、影响因素和更完整的情绪。"],
      ["多媒体记录", "为一条记录加入文字、图片、录音或正念练习。"],
      ["正念呼吸", "在应用内短暂停顿，用呼吸节奏平稳恢复。"],
      ["完整时间线", "按日期查看全部记录，保留每次状态变化的上下文。"],
      ["搜索与分类筛选", "通过关键词、日期和内容类型快速找到过去的记录。"],
      ["分析报告总览", "用关键指标和趋势图快速了解近期精力、稳定性与恢复情况。"],
      ["趋势与分布", "比较不同时段、日期和精力区间，查看状态如何变化。"],
      ["压力与恢复分析", "识别常见压力来源、恢复方式与工作恢复平衡。"],
      ["自定义标签与贴纸", "按自己的工作和生活习惯调整状态、来源、情绪与贴纸。"],
      ["提醒管理", "设置多个提醒、间隔计时和免打扰时段。"],
      ["备份与数据管理", "导出、校验和恢复加密备份，也可生成可读报告。"],
    ],
  },
  "zh-tw": {
    posters: [
      ["幾秒完成一次完整記錄", "在同一頁選擇精力、狀態、來源與情緒，也能補充文字、圖片或錄音。"],
      ["沿著時間軸回看每次變化", "依日期瀏覽記錄，並以狀態、回顧、表情、文字、音訊或圖片快速篩選。"],
      ["私人記錄只留在你的裝置", "PIN 鎖、內容防擷取與本地加密備份共同保護精力和情緒資料。"],
      ["用報告理解消耗與恢復", "趨勢、分布、壓力、恢復與相關性分析，將長期記錄整理成清楚結論。"],
    ],
    screenshots: [
      ["本地加密解鎖", "使用四位 PIN 進入應用程式，保護裝置上的私人記錄。"],
      ["快速記錄", "選擇目前精力、工作狀態、觸發來源和情緒，幾秒即可儲存。"],
      ["精力與情緒記錄", "同時記錄精力等級、目前狀態、影響因素與更完整的情緒。"],
      ["多媒體記錄", "為一筆記錄加入文字、圖片、錄音或正念練習。"],
      ["正念呼吸", "在應用程式內短暫停下，跟隨呼吸節奏平穩恢復。"],
      ["完整時間軸", "依日期查看所有記錄，保留每次狀態變化的情境。"],
      ["搜尋與分類篩選", "透過關鍵字、日期和內容類型快速找到過去的記錄。"],
      ["分析報告總覽", "用關鍵指標與趨勢圖了解近期精力、穩定度和恢復情況。"],
      ["趨勢與分布", "比較不同時段、日期和精力區間，查看狀態如何變化。"],
      ["壓力與恢復分析", "辨識常見壓力來源、恢復方式和工作恢復平衡。"],
      ["自訂標籤與貼紙", "依自己的工作與生活習慣調整狀態、來源、情緒和貼紙。"],
      ["提醒管理", "設定多個提醒、間隔計時與勿擾時段。"],
      ["備份與資料管理", "匯出、驗證及還原加密備份，也能產生可讀報告。"],
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
  ja: {
    posters: [
      ["数秒で状態をまとめて記録", "エネルギー、状態、要因、気分を一画面で選び、文章・画像・音声も追加できます。"],
      ["変化をタイムラインで振り返る", "日付順に記録を確認し、状態、振り返り、絵文字、文章、音声、画像で絞り込めます。"],
      ["個人的な記録は端末の中に", "PIN、画面取得保護、暗号化ローカルバックアップでエネルギーと気分の記録を守ります。"],
      ["消耗と回復をレポートで理解", "傾向、分布、ストレス、回復、相関の分析が、長期記録を読みやすい結果にまとめます。"],
    ],
    screenshots: [
      ["ローカル暗号化ロック", "4 桁の PIN でアプリを開き、端末内の個人的な記録を保護します。"],
      ["クイック記録", "エネルギー、作業状態、要因、気分を選び、数秒で保存できます。"],
      ["エネルギーと気分", "エネルギー段階、現在の状態、影響要因、より詳しい感情をまとめて残します。"],
      ["マルチメディア記録", "文章、画像、音声、マインドフルネスを一つの記録に追加できます。"],
      ["マインドフル呼吸", "アプリ内で一度立ち止まり、一定の呼吸リズムで落ち着きを取り戻します。"],
      ["完全なタイムライン", "すべての記録を日付順に確認し、状態変化の背景も残します。"],
      ["検索と分類フィルター", "キーワード、期間、内容タイプから過去の記録をすばやく探せます。"],
      ["分析レポート概要", "最近のエネルギー、安定性、回復、傾向を主要指標で確認します。"],
      ["傾向と分布", "時間帯、曜日、エネルギー範囲を比較し、状態の変化を把握します。"],
      ["ストレスと回復", "繰り返すストレス要因、回復方法、仕事と回復のバランスを確認します。"],
      ["カスタムラベルとステッカー", "状態、要因、感情、ステッカーを自分の習慣に合わせて調整できます。"],
      ["リマインダー管理", "複数の通知、インターバルタイマー、通知停止時間を設定できます。"],
      ["バックアップとデータ管理", "暗号化バックアップの書き出し、検証、復元と、読みやすいレポート作成に対応します。"],
    ],
  },
  ko: {
    posters: [
      ["몇 초 만에 한 번의 기록을 완성", "에너지, 상태, 원인, 기분을 한 화면에서 선택하고 텍스트, 이미지, 오디오도 추가할 수 있습니다."],
      ["타임라인에서 모든 변화를 확인", "날짜별로 기록을 보고 상태, 회고, 이모지, 텍스트, 오디오, 이미지로 필터링합니다."],
      ["개인 기록은 내 기기에만", "PIN 잠금, 화면 캡처 보호, 암호화된 로컬 백업으로 에너지와 기분 데이터를 보호합니다."],
      ["보고서로 소모와 회복을 이해", "추세, 분포, 압박, 회복, 상관관계 분석이 장기 기록을 명확한 결과로 정리합니다."],
    ],
    screenshots: [
      ["로컬 암호화 잠금", "네 자리 PIN으로 앱을 열고 기기에 저장된 개인 기록을 보호합니다."],
      ["빠른 기록", "현재 에너지, 업무 상태, 원인, 기분을 선택해 몇 초 안에 저장합니다."],
      ["에너지와 감정 기록", "에너지 단계, 현재 상태, 영향 요인, 더 자세한 감정을 함께 기록합니다."],
      ["멀티미디어 기록", "기록에 텍스트, 이미지, 오디오 또는 마음챙김 활동을 추가합니다."],
      ["마음챙김 호흡", "앱 안에서 잠시 멈추고 일정한 호흡 리듬으로 회복합니다."],
      ["전체 타임라인", "모든 기록을 날짜별로 확인하고 상태 변화의 맥락을 보존합니다."],
      ["검색과 분류 필터", "키워드, 날짜 범위, 콘텐츠 유형으로 이전 기록을 빠르게 찾습니다."],
      ["분석 보고서 개요", "최근 에너지, 안정성, 회복, 추세 지표를 한눈에 확인합니다."],
      ["추세와 분포", "시간대, 요일, 에너지 구간을 비교해 상태 변화를 살펴봅니다."],
      ["압박과 회복 분석", "반복되는 압박 요인, 회복 방법, 업무와 회복의 균형을 확인합니다."],
      ["사용자 지정 라벨과 스티커", "상태, 원인, 감정, 스티커를 자신의 생활 방식에 맞게 조정합니다."],
      ["알림 관리", "여러 알림, 인터벌 타이머, 방해 금지 시간을 설정합니다."],
      ["백업과 데이터 관리", "암호화 백업을 내보내고 검증하거나 복원하며 읽기 쉬운 보고서도 생성합니다."],
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
  de: {
    posters: [
      ["Ein vollständiger Eintrag in wenigen Sekunden", "Energie, Zustand, Auslöser und Stimmung auf einer Seite wählen und bei Bedarf Text, Bild oder Audio ergänzen."],
      ["Jede Veränderung in der Zeitleiste prüfen", "Einträge nach Datum ansehen und nach Zustand, Reflexion, Emoji, Text, Audio oder Bild filtern."],
      ["Private Aufzeichnungen bleiben auf dem Gerät", "PIN-Zugang, Aufnahmeschutz und verschlüsselte lokale Backups schützen persönliche Energie- und Stimmungsdaten."],
      ["Belastung und Erholung verstehen", "Trends, Verteilungen, Belastung, Erholung und Korrelationen machen langfristige Aufzeichnungen verständlich."],
    ],
    screenshots: [
      ["Lokal verschlüsselter Zugang", "EnergyFlow mit einer vierstelligen PIN öffnen und private Einträge auf dem Gerät schützen."],
      ["Schneller Eintrag", "Energie, Arbeitszustand, Auslöser und Stimmung wählen und in Sekunden speichern."],
      ["Energie und Stimmung", "Energieniveau, aktuellen Zustand, Einflussfaktoren und ein genaueres Gefühl gemeinsam erfassen."],
      ["Multimedia-Einträge", "Text, Bild, Audio oder eine Achtsamkeitspause zu einem Eintrag hinzufügen."],
      ["Achtsames Atmen", "Kurz in der App innehalten und mit einem gleichmäßigen Atemrhythmus zur Ruhe kommen."],
      ["Vollständige Zeitleiste", "Alle Einträge nach Datum prüfen und den Kontext jeder Veränderung bewahren."],
      ["Suche und Filter", "Frühere Einträge über Stichwort, Zeitraum und Inhaltstyp finden."],
      ["Analyseübersicht", "Aktuelle Energie, Stabilität, Erholung und Trends auf einen Blick erfassen."],
      ["Trends und Verteilung", "Zeiträume, Tage und Energiebereiche vergleichen und Veränderungen erkennen."],
      ["Belastung und Erholung", "Wiederkehrende Belastungen, Erholungsmethoden und die Balance dazwischen erkennen."],
      ["Eigene Labels und Sticker", "Zustände, Auslöser, Gefühle und Sticker an den eigenen Alltag anpassen."],
      ["Erinnerungen verwalten", "Mehrere Erinnerungen, Intervalltimer und Ruhezeiten festlegen."],
      ["Backup und Datenkontrolle", "Verschlüsselte Backups exportieren, prüfen und wiederherstellen oder einen lesbaren Bericht erstellen."],
    ],
  },
  es: {
    posters: [
      ["Un registro completo en pocos segundos", "Elige energía, estado, causa y ánimo en una pantalla, con texto, imagen o audio opcionales."],
      ["Revisa cada cambio en la cronología", "Navega por fecha y filtra por estado, reflexión, emoji, texto, audio o imagen."],
      ["Tus registros privados se quedan en el dispositivo", "El PIN, la protección de captura y las copias locales cifradas protegen los datos personales."],
      ["Comprende desgaste y recuperación", "Tendencias, distribución, presión, recuperación y correlaciones convierten el historial en conclusiones claras."],
    ],
    screenshots: [
      ["Acceso local cifrado", "Abre EnergyFlow con un PIN de cuatro dígitos y protege los registros del dispositivo."],
      ["Registro rápido", "Elige energía, estado de trabajo, causa y ánimo, y guarda en pocos segundos."],
      ["Energía y estado de ánimo", "Registra nivel de energía, estado actual, factores y una imagen emocional más completa."],
      ["Registros multimedia", "Añade texto, una imagen, audio o una pausa consciente a cada registro."],
      ["Respiración consciente", "Haz una pausa dentro de la aplicación y sigue un ritmo de respiración estable."],
      ["Cronología completa", "Revisa todos los registros por fecha y conserva el contexto de cada cambio."],
      ["Búsqueda y filtros", "Encuentra registros anteriores por palabra clave, fechas y tipo de contenido."],
      ["Resumen de análisis", "Consulta energía reciente, estabilidad, recuperación y tendencias de un vistazo."],
      ["Tendencias y distribución", "Compara periodos, días y rangos de energía para ver cómo cambia tu estado."],
      ["Presión y recuperación", "Identifica fuentes de presión, formas de recuperarte y el equilibrio entre ambas."],
      ["Etiquetas y stickers personalizados", "Adapta estados, causas, emociones y stickers a tus propias rutinas."],
      ["Gestión de recordatorios", "Crea varios avisos, temporizadores por intervalos y periodos sin interrupciones."],
      ["Copias y control de datos", "Exporta, verifica y restaura copias cifradas o genera un informe legible."],
    ],
  },
  ru: {
    posters: [
      ["Полная запись за несколько секунд", "Выберите энергию, состояние, причину и настроение на одном экране, при желании добавьте текст, изображение или аудио."],
      ["Просматривайте изменения на временной шкале", "Открывайте записи по датам и фильтруйте их по состоянию, заметкам, эмодзи, тексту, аудио или изображениям."],
      ["Личные записи остаются на устройстве", "PIN-код, защита от захвата экрана и зашифрованные локальные копии защищают личные данные."],
      ["Понимайте нагрузку и восстановление", "Тренды, распределения, давление, восстановление и корреляции превращают историю в понятные выводы."],
    ],
    screenshots: [
      ["Локальный зашифрованный доступ", "Открывайте EnergyFlow четырёхзначным PIN-кодом и защищайте личные записи на устройстве."],
      ["Быстрая запись", "Выберите энергию, рабочее состояние, причину и настроение, затем сохраните за несколько секунд."],
      ["Энергия и настроение", "Сохраняйте уровень энергии, текущее состояние, влияющие факторы и более точные эмоции."],
      ["Мультимедийные записи", "Добавляйте к записи текст, изображение, аудио или короткую практику осознанности."],
      ["Осознанное дыхание", "Сделайте паузу в приложении и восстановитесь с помощью ровного ритма дыхания."],
      ["Полная временная шкала", "Просматривайте все записи по датам и сохраняйте контекст каждого изменения."],
      ["Поиск и фильтры", "Находите старые записи по ключевым словам, датам и типу содержимого."],
      ["Обзор аналитики", "Смотрите недавнюю энергию, стабильность, восстановление и тренды на одном экране."],
      ["Тренды и распределение", "Сравнивайте периоды, дни и диапазоны энергии, чтобы видеть изменения состояния."],
      ["Давление и восстановление", "Определяйте повторяющиеся источники нагрузки, способы восстановления и баланс между ними."],
      ["Свои метки и стикеры", "Настройте состояния, причины, эмоции и стикеры под собственные привычки."],
      ["Управление напоминаниями", "Создавайте несколько напоминаний, интервальные таймеры и периоды без уведомлений."],
      ["Резервные копии и данные", "Экспортируйте, проверяйте и восстанавливайте зашифрованные копии или создавайте читаемый отчёт."],
    ],
  },
  pt: {
    posters: [
      ["Um registo completo em poucos segundos", "Escolha energia, estado, causa e humor num só ecrã, com texto, imagem ou áudio opcionais."],
      ["Reveja cada mudança na linha temporal", "Consulte por data e filtre por estado, reflexão, emoji, texto, áudio ou imagem."],
      ["Os registos privados ficam no dispositivo", "PIN, proteção contra captura e cópias locais cifradas protegem dados pessoais de energia e humor."],
      ["Compreenda desgaste e recuperação", "Tendências, distribuições, pressão, recuperação e correlações transformam o histórico em conclusões claras."],
    ],
    screenshots: [
      ["Acesso local cifrado", "Abra o EnergyFlow com um PIN de quatro dígitos e proteja os registos guardados no dispositivo."],
      ["Registo rápido", "Escolha energia, estado de trabalho, causa e humor e guarde em poucos segundos."],
      ["Energia e humor", "Registe o nível de energia, o estado atual, os fatores e uma visão emocional mais completa."],
      ["Registos multimédia", "Adicione texto, imagem, áudio ou uma pausa consciente a cada registo."],
      ["Respiração consciente", "Faça uma pausa dentro da aplicação e siga um ritmo respiratório estável."],
      ["Linha temporal completa", "Reveja todos os registos por data e mantenha o contexto de cada mudança."],
      ["Pesquisa e filtros", "Encontre registos anteriores por palavra-chave, período e tipo de conteúdo."],
      ["Visão geral da análise", "Consulte energia recente, estabilidade, recuperação e tendências num relance."],
      ["Tendências e distribuição", "Compare períodos, dias e níveis de energia para perceber mudanças de estado."],
      ["Pressão e recuperação", "Identifique fontes de pressão, formas de recuperação e o equilíbrio entre ambas."],
      ["Etiquetas e stickers personalizados", "Adapte estados, causas, emoções e stickers às suas rotinas."],
      ["Gestão de lembretes", "Crie vários lembretes, temporizadores de intervalo e períodos sem interrupções."],
      ["Cópias e controlo de dados", "Exporte, verifique e restaure cópias cifradas ou gere um relatório legível."],
    ],
  },
} as const satisfies Record<Locale, EnergyFlowMediaCopy>;

export function getEnergyFlowMediaCopy(locale: Locale): EnergyFlowMediaCopy {
  return energyFlowMediaContent[locale] ?? energyFlowMediaContent.en;
}

export type CommerceLabelCopy = {
  priceEyebrow: string;
  priceTitle: string;
  current: string;
  scheduled: string;
  trial: string;
  availability: string;
  note: string;
  privacy: string;
  legal: string;
  toc: string;
  pricingIntro: string;
  currentRegion: string;
  free: string;
};

const commerceLabelsCopy: Record<Locale, CommerceLabelCopy> = {
  zh: { priceEyebrow: "价格与可用性", priceTitle: "购买前先看清价格、试用和市场规则。", current: "当前价格", scheduled: "计划调整", trial: "免费试用", availability: "可用性", note: "说明", privacy: "隐私政策", legal: "法律与条款", toc: "文档目录", pricingIntro: "价格会根据访问者当前浏览器地区自动匹配。本页只展示当前地区对应的价格；最终价格以 Microsoft Store 当前显示为准。", currentRegion: "当前地区", free: "免费" },
  "zh-tw": { priceEyebrow: "價格與可用性", priceTitle: "購買前先看清價格、試用和市場規則。", current: "目前價格", scheduled: "計畫調整", trial: "免費試用", availability: "可用性", note: "說明", privacy: "隱私政策", legal: "法律與條款", toc: "文件目錄", pricingIntro: "價格會依訪問者目前瀏覽器地區自動匹配。本頁只展示目前地區對應的價格；最終價格以 Microsoft Store 當前顯示為準。", currentRegion: "目前地區", free: "免費" },
  en: { priceEyebrow: "Pricing and availability", priceTitle: "Review price, trial, and market rules before installing.", current: "Current price", scheduled: "Scheduled change", trial: "Free trial", availability: "Availability", note: "Note", privacy: "Privacy policy", legal: "Legal terms", toc: "Contents", pricingIntro: "Pricing is matched automatically from the visitor's browser region. This page shows only the current region price; the Microsoft Store listing remains authoritative.", currentRegion: "Current region", free: "Free" },
  ja: { priceEyebrow: "価格と提供状況", priceTitle: "インストール前に価格、試用、地域ルールを確認できます。", current: "現在の価格", scheduled: "予定されている変更", trial: "無料試用", availability: "提供状況", note: "注記", privacy: "プライバシーポリシー", legal: "法的条項", toc: "目次", pricingIntro: "価格はブラウザーの地域に基づいて自動的に選ばれます。このページでは現在地域の価格のみを表示し、最終価格は Microsoft Store の表示を優先します。", currentRegion: "現在の地域", free: "無料" },
  ko: { priceEyebrow: "가격 및 제공 여부", priceTitle: "설치 전 가격, 체험판, 시장 규칙을 확인하세요.", current: "현재 가격", scheduled: "예정된 변경", trial: "무료 체험", availability: "제공 여부", note: "참고", privacy: "개인정보 처리방침", legal: "법률 및 약관", toc: "문서 목차", pricingIntro: "가격은 방문자의 브라우저 지역에 따라 자동으로 선택됩니다. 이 페이지에는 현재 지역 가격만 표시되며 최종 가격은 Microsoft Store 표시를 기준으로 합니다.", currentRegion: "현재 지역", free: "무료" },
  fr: { priceEyebrow: "Prix et disponibilité", priceTitle: "Vérifiez le prix, l'essai et les règles de marché avant d'installer.", current: "Prix actuel", scheduled: "Changement prévu", trial: "Essai gratuit", availability: "Disponibilité", note: "Note", privacy: "Confidentialité", legal: "Mentions légales", toc: "Sommaire", pricingIntro: "Le prix est choisi automatiquement selon la région du navigateur. Cette page n'affiche que le prix de la région actuelle ; Microsoft Store reste la référence.", currentRegion: "Région actuelle", free: "Gratuit" },
  de: { priceEyebrow: "Preis und Verfügbarkeit", priceTitle: "Prüfe Preis, Testzeitraum und Marktregeln vor der Installation.", current: "Aktueller Preis", scheduled: "Geplante Änderung", trial: "Kostenlose Testphase", availability: "Verfügbarkeit", note: "Hinweis", privacy: "Datenschutz", legal: "Rechtliche Hinweise", toc: "Inhalt", pricingIntro: "Der Preis wird automatisch anhand der Browser-Region gewählt. Diese Seite zeigt nur den Preis der aktuellen Region; maßgeblich bleibt Microsoft Store.", currentRegion: "Aktuelle Region", free: "Kostenlos" },
  es: { priceEyebrow: "Precio y disponibilidad", priceTitle: "Revisa precio, prueba y reglas de mercado antes de instalar.", current: "Precio actual", scheduled: "Cambio programado", trial: "Prueba gratuita", availability: "Disponibilidad", note: "Nota", privacy: "Privacidad", legal: "Términos legales", toc: "Contenido", pricingIntro: "El precio se selecciona automáticamente según la región del navegador. Esta página solo muestra el precio de la región actual; Microsoft Store es la referencia final.", currentRegion: "Región actual", free: "Gratis" },
  ru: { priceEyebrow: "Цена и доступность", priceTitle: "Перед установкой проверьте цену, пробный период и правила рынка.", current: "Текущая цена", scheduled: "Запланированное изменение", trial: "Бесплатный пробный период", availability: "Доступность", note: "Примечание", privacy: "Конфиденциальность", legal: "Правовые условия", toc: "Содержание", pricingIntro: "Цена выбирается автоматически по региону браузера. На странице показана только цена текущего региона; окончательной считается цена в Microsoft Store.", currentRegion: "Текущий регион", free: "Бесплатно" },
  pt: { priceEyebrow: "Preço e disponibilidade", priceTitle: "Veja preço, teste e regras de mercado antes de instalar.", current: "Preço atual", scheduled: "Alteração prevista", trial: "Teste gratuito", availability: "Disponibilidade", note: "Nota", privacy: "Privacidade", legal: "Termos legais", toc: "Conteúdo", pricingIntro: "O preço é escolhido automaticamente pela região do navegador. Esta página mostra apenas o preço da região atual; a Microsoft Store continua sendo a referência final.", currentRegion: "Região atual", free: "Grátis" },
};

const commerceMarketNames: Record<Locale, Record<string, string>> = {
  zh: { default: "默认市场组", us: "美国", cn: "中国", eu: "德国/欧元市场", jp: "日本", kr: "韩国", ca: "加拿大", sg: "新加坡", ch: "瑞士", all: "所有公开市场" },
  "zh-tw": { default: "預設市場組", us: "美國", cn: "中國", eu: "德國/歐元市場", jp: "日本", kr: "韓國", ca: "加拿大", sg: "新加坡", ch: "瑞士", all: "所有公開市場" },
  en: { default: "Default market group", us: "United States", cn: "China", eu: "Germany / Euro markets", jp: "Japan", kr: "Korea", ca: "Canada", sg: "Singapore", ch: "Switzerland", all: "All public markets" },
  ja: { default: "標準市場グループ", us: "米国", cn: "中国", eu: "ドイツ / ユーロ市場", jp: "日本", kr: "韓国", ca: "カナダ", sg: "シンガポール", ch: "スイス", all: "すべての公開市場" },
  ko: { default: "기본 시장 그룹", us: "미국", cn: "중국", eu: "독일 / 유로 시장", jp: "일본", kr: "한국", ca: "캐나다", sg: "싱가포르", ch: "스위스", all: "모든 공개 시장" },
  fr: { default: "Groupe de marché par défaut", us: "États-Unis", cn: "Chine", eu: "Allemagne / marchés en euro", jp: "Japon", kr: "Corée", ca: "Canada", sg: "Singapour", ch: "Suisse", all: "Tous les marchés publics" },
  de: { default: "Standard-Marktgruppe", us: "USA", cn: "China", eu: "Deutschland / Euro-Märkte", jp: "Japan", kr: "Korea", ca: "Kanada", sg: "Singapur", ch: "Schweiz", all: "Alle öffentlichen Märkte" },
  es: { default: "Grupo de mercado predeterminado", us: "Estados Unidos", cn: "China", eu: "Alemania / mercados en euro", jp: "Japón", kr: "Corea", ca: "Canadá", sg: "Singapur", ch: "Suiza", all: "Todos los mercados públicos" },
  ru: { default: "Стандартная группа рынков", us: "США", cn: "Китай", eu: "Германия / рынки евро", jp: "Япония", kr: "Корея", ca: "Канада", sg: "Сингапур", ch: "Швейцария", all: "Все публичные рынки" },
  pt: { default: "Grupo de mercado padrão", us: "Estados Unidos", cn: "China", eu: "Alemanha / mercados em euro", jp: "Japão", kr: "Coreia", ca: "Canadá", sg: "Singapura", ch: "Suíça", all: "Todos os mercados públicos" },
};

const commercePricingText: Record<Locale, Record<ProductId, Omit<ProductPricingCopy, "prices">>> = {
  zh: {
    energyflow: { eyebrow: "免费与可用性", title: "EnergyFlow 免费提供。", summary: "可从 Microsoft Store 免费获取，无需购买或订阅。", trial: "无需试用，安装后即可使用全部核心功能。", availability: "面向 Microsoft Store 公开市场提供，实际可用范围以商店页面为准。", note: "下载、更新与地区可用性由 Microsoft Store 管理。" },
    deskhaven: { eyebrow: "DeskHaven 价格", title: "付费下载，提供 15 天免费试用。", summary: "DeskHaven 在 Microsoft Store 使用基础价格和特定市场价格组合。默认市场组为 USD $8.99；部分市场使用当地价格。", trial: "15 天，面向所有用户。", availability: "全球公开市场可用并可发现；部分市场有单独价格覆盖。", note: "Microsoft 可能根据市场、税费、汇率和商店政策调整最终显示价格；请以商店页面为准。" },
    adhd: { eyebrow: "ADHD Focus Timer 价格", title: "免费下载，核心功能免费使用。", summary: "ADHD Focus Timer 当前作为免费应用提供。", trial: "不需要试用期；应用本身免费。", availability: "Microsoft Store 公开可用。最终可用性以商店页面显示为准。", note: "如果商店在不同市场显示附加说明或税费信息，请以 Microsoft Store 为准。" },
  },
  "zh-tw": {
    energyflow: { eyebrow: "免費與可用性", title: "EnergyFlow 免費提供。", summary: "可從 Microsoft Store 免費取得，不需要購買或訂閱。", trial: "不需要試用，安裝後即可使用全部核心功能。", availability: "面向 Microsoft Store 公開市場提供，實際可用範圍以商店頁面為準。", note: "下載、更新與地區可用性由 Microsoft Store 管理。" },
    deskhaven: { eyebrow: "DeskHaven 價格", title: "付費下載，提供 15 天免費試用。", summary: "DeskHaven 在 Microsoft Store 使用基礎價格與特定市場價格組合。預設市場組為 USD $8.99；部分市場使用當地價格。", trial: "15 天，面向所有使用者。", availability: "全球公開市場可用並可被發現；部分市場有單獨價格覆蓋。", note: "Microsoft 可能根據市場、稅費、匯率和商店政策調整最終顯示價格；請以商店頁面為準。" },
    adhd: { eyebrow: "ADHD Focus Timer 價格", title: "免費下載，核心功能免費使用。", summary: "ADHD Focus Timer 目前作為免費應用提供。", trial: "不需要試用期；應用本身免費。", availability: "Microsoft Store 公開可用。最終可用性以商店頁面顯示為準。", note: "若商店在不同市場顯示附加說明或稅費資訊，請以 Microsoft Store 為準。" },
  },
  en: {
    energyflow: { eyebrow: "Free and available", title: "EnergyFlow is free.", summary: "Download it from Microsoft Store with no purchase or subscription required.", trial: "No trial is needed. All core features are available after installation.", availability: "Available in public Microsoft Store markets, subject to the listing in each region.", note: "Downloads, updates, and regional availability are managed by Microsoft Store." },
    deskhaven: { eyebrow: "DeskHaven pricing", title: "Paid download with a 15-day free trial.", summary: "DeskHaven uses a base Microsoft Store price with market-specific overrides. The default market group is USD $8.99; selected markets use local prices.", trial: "15 days, available to everyone.", availability: "Available and discoverable in public global markets, with selected market-specific price overrides.", note: "Microsoft may adjust the final displayed price based on market, taxes, currency conversion, and Store policy. The Store listing is authoritative." },
    adhd: { eyebrow: "ADHD Focus Timer pricing", title: "Free download with core features available for free.", summary: "ADHD Focus Timer is currently offered as a free app.", trial: "No time-limited trial is needed because the app itself is free.", availability: "Available through Microsoft Store. Final availability follows the Store listing.", note: "If Microsoft Store displays market-specific notes or taxes, the Store listing is authoritative." },
  },
  ja: {
    energyflow: { eyebrow: "無料提供と配信状況", title: "EnergyFlow は無料です。", summary: "購入やサブスクリプションなしで Microsoft Store から入手できます。", trial: "試用期間はありません。インストール後にすべての主要機能を利用できます。", availability: "Microsoft Store の公開市場で提供され、地域ごとの掲載状況に準じます。", note: "ダウンロード、更新、地域別の提供状況は Microsoft Store が管理します。" },
    deskhaven: { eyebrow: "DeskHaven の価格", title: "有料ダウンロード。15 日間の無料試用があります。", summary: "DeskHaven は Microsoft Store の基本価格と地域別価格を使用します。標準市場は USD $8.99 です。", trial: "15 日間、すべてのユーザーが利用できます。", availability: "公開市場で利用可能で、一部の市場では地域別価格があります。", note: "税、為替、Store ポリシーにより最終価格は変わる場合があります。" },
    adhd: { eyebrow: "ADHD Focus Timer の価格", title: "無料ダウンロード。主要機能は無料です。", summary: "ADHD Focus Timer は現在無料アプリとして提供されています。", trial: "アプリ自体が無料のため、試用期間は不要です。", availability: "Microsoft Store で公開されています。", note: "市場別の税や注記は Store 表示を優先してください。" },
  },
  ko: {
    energyflow: { eyebrow: "무료 제공 및 이용 가능 지역", title: "EnergyFlow는 무료입니다.", summary: "구매나 구독 없이 Microsoft Store에서 다운로드할 수 있습니다.", trial: "체험 기간 없이 설치 후 모든 핵심 기능을 사용할 수 있습니다.", availability: "Microsoft Store 공개 시장에서 제공되며 지역별 스토어 표시를 따릅니다.", note: "다운로드, 업데이트, 지역별 제공 여부는 Microsoft Store에서 관리합니다." },
    deskhaven: { eyebrow: "DeskHaven 가격", title: "유료 다운로드, 15일 무료 체험 제공.", summary: "DeskHaven은 Microsoft Store 기본 가격과 지역별 가격을 함께 사용합니다. 기본 시장 그룹은 USD $8.99입니다.", trial: "15일, 모든 사용자에게 제공됩니다.", availability: "전 세계 공개 시장에서 이용 가능하며 일부 시장은 지역별 가격을 사용합니다.", note: "세금, 환율, Store 정책에 따라 최종 가격이 달라질 수 있습니다." },
    adhd: { eyebrow: "ADHD Focus Timer 가격", title: "무료 다운로드, 핵심 기능 무료 사용.", summary: "ADHD Focus Timer는 현재 무료 앱으로 제공됩니다.", trial: "앱 자체가 무료이므로 시간 제한 체험판이 필요하지 않습니다.", availability: "Microsoft Store에서 공개적으로 이용할 수 있습니다.", note: "시장별 세금이나 안내는 Microsoft Store 표시를 따릅니다." },
  },
  fr: {
    energyflow: { eyebrow: "Gratuit et disponible", title: "EnergyFlow est gratuit.", summary: "Téléchargez-le depuis Microsoft Store sans achat ni abonnement.", trial: "Aucun essai n’est nécessaire. Toutes les fonctions principales sont disponibles après l’installation.", availability: "Disponible sur les marchés publics de Microsoft Store, selon la fiche de chaque région.", note: "Le téléchargement, les mises à jour et la disponibilité régionale sont gérés par Microsoft Store." },
    deskhaven: { eyebrow: "Prix de DeskHaven", title: "Téléchargement payant avec essai gratuit de 15 jours.", summary: "DeskHaven utilise un prix de base Microsoft Store et des prix locaux pour certains marchés. Le groupe par défaut est USD $8.99.", trial: "15 jours, disponible pour tous les utilisateurs.", availability: "Disponible sur les marchés publics mondiaux, avec prix spécifiques selon certains marchés.", note: "Le prix final peut varier selon taxes, devise et politiques Store." },
    adhd: { eyebrow: "Prix d'ADHD Focus Timer", title: "Téléchargement gratuit, fonctions principales gratuites.", summary: "ADHD Focus Timer est actuellement proposé comme application gratuite.", trial: "Aucun essai limité n'est nécessaire car l'application est gratuite.", availability: "Disponible via Microsoft Store.", note: "Les informations de marché affichées par Microsoft Store font foi." },
  },
  de: {
    energyflow: { eyebrow: "Kostenlos und verfügbar", title: "EnergyFlow ist kostenlos.", summary: "Lade die App ohne Kauf oder Abonnement aus dem Microsoft Store herunter.", trial: "Eine Testphase ist nicht nötig. Alle Kernfunktionen stehen nach der Installation bereit.", availability: "In öffentlichen Microsoft-Store-Märkten verfügbar, abhängig von der regionalen Store-Seite.", note: "Download, Updates und regionale Verfügbarkeit werden über den Microsoft Store verwaltet." },
    deskhaven: { eyebrow: "DeskHaven Preis", title: "Kostenpflichtiger Download mit 15 Tagen Testphase.", summary: "DeskHaven nutzt einen Microsoft-Store-Basispreis und regionale Preise. Die Standardgruppe liegt bei USD $8.99.", trial: "15 Tage, für alle Nutzer verfügbar.", availability: "Weltweit in öffentlichen Märkten verfügbar; ausgewählte Märkte haben eigene Preise.", note: "Endpreise können sich durch Steuern, Währungen und Store-Regeln ändern." },
    adhd: { eyebrow: "ADHD Focus Timer Preis", title: "Kostenloser Download, Kernfunktionen gratis.", summary: "ADHD Focus Timer wird derzeit kostenlos angeboten.", trial: "Keine zeitlich begrenzte Testphase nötig, da die App kostenlos ist.", availability: "Über Microsoft Store verfügbar.", note: "Marktspezifische Hinweise im Microsoft Store sind maßgeblich." },
  },
  es: {
    energyflow: { eyebrow: "Gratis y disponible", title: "EnergyFlow es gratuito.", summary: "Descárgalo desde Microsoft Store sin compra ni suscripción.", trial: "No hace falta una prueba. Todas las funciones principales están disponibles tras la instalación.", availability: "Disponible en los mercados públicos de Microsoft Store, según la ficha de cada región.", note: "Microsoft Store gestiona la descarga, las actualizaciones y la disponibilidad regional." },
    deskhaven: { eyebrow: "Precio de DeskHaven", title: "Descarga de pago con prueba gratuita de 15 días.", summary: "DeskHaven usa precio base de Microsoft Store y precios locales en mercados concretos. El grupo predeterminado es USD $8.99.", trial: "15 días, disponible para todos los usuarios.", availability: "Disponible en mercados públicos globales, con precios específicos en algunos mercados.", note: "El precio final puede variar por impuestos, moneda y política de Store." },
    adhd: { eyebrow: "Precio de ADHD Focus Timer", title: "Descarga gratuita con funciones principales gratis.", summary: "ADHD Focus Timer se ofrece actualmente como app gratuita.", trial: "No se necesita prueba limitada porque la app es gratuita.", availability: "Disponible mediante Microsoft Store.", note: "Las notas específicas de mercado en Microsoft Store son la referencia." },
  },
  ru: {
    energyflow: { eyebrow: "Бесплатно и доступно", title: "EnergyFlow распространяется бесплатно.", summary: "Скачайте приложение из Microsoft Store без покупки и подписки.", trial: "Пробный период не нужен. Все основные функции доступны после установки.", availability: "Доступно в публичных регионах Microsoft Store согласно региональной странице приложения.", note: "Загрузки, обновления и региональная доступность управляются через Microsoft Store." },
    deskhaven: { eyebrow: "Цена DeskHaven", title: "Платная загрузка с 15-дневным пробным периодом.", summary: "DeskHaven использует базовую цену Microsoft Store и локальные цены для отдельных рынков. Стандартная группа — USD $8.99.", trial: "15 дней для всех пользователей.", availability: "Доступно в публичных мировых рынках, с локальными ценами для некоторых регионов.", note: "Цена может меняться из-за налогов, валюты и правил Store." },
    adhd: { eyebrow: "Цена ADHD Focus Timer", title: "Бесплатная загрузка, основные функции бесплатны.", summary: "ADHD Focus Timer сейчас доступен как бесплатное приложение.", trial: "Пробный период не нужен, приложение бесплатно.", availability: "Доступно через Microsoft Store.", note: "Рыночные примечания Microsoft Store являются основными." },
  },
  pt: {
    energyflow: { eyebrow: "Grátis e disponível", title: "EnergyFlow é gratuito.", summary: "Transfira-o da Microsoft Store sem compra ou assinatura.", trial: "Não é necessário teste. Todos os recursos principais ficam disponíveis após a instalação.", availability: "Disponível nos mercados públicos da Microsoft Store, conforme a página de cada região.", note: "Downloads, atualizações e disponibilidade regional são geridos pela Microsoft Store." },
    deskhaven: { eyebrow: "Preço do DeskHaven", title: "Download pago com teste gratuito de 15 dias.", summary: "DeskHaven usa preço base da Microsoft Store e preços locais para mercados específicos. O grupo padrão é USD $8.99.", trial: "15 dias, disponível para todos os usuários.", availability: "Disponível em mercados públicos globais, com preços específicos em alguns mercados.", note: "O preço final pode variar por impostos, moeda e política da Store." },
    adhd: { eyebrow: "Preço do ADHD Focus Timer", title: "Download gratuito com recursos principais gratuitos.", summary: "ADHD Focus Timer é oferecido atualmente como aplicativo gratuito.", trial: "Não é necessário teste limitado porque o aplicativo é gratuito.", availability: "Disponível pela Microsoft Store.", note: "As informações específicas de mercado da Microsoft Store são a referência." },
  },
};

export const commercePriceRows = {
  energyflow: [{ market: "all", current: "free" }],
  deskhaven: [
    { market: "default", current: "USD $8.99" },
    { market: "us", current: "USD $14.99" },
    { market: "cn", current: "CNY ¥59" },
    { market: "eu", current: "EUR €9.99" },
    { market: "jp", current: "JPY ¥1,200" },
    { market: "kr", current: "KRW ₩13,400" },
    { market: "ca", current: "CAD $13.99" },
    { market: "sg", current: "SGD $19.50" },
    { market: "ch", current: "CHF 19.50" },
  ],
  adhd: [
    { market: "all", current: "free" },
  ],
} as const satisfies Record<ProductId, readonly { market: string; current: string; scheduled?: string }[]>;

export const commerceContent = {
  labels: commerceLabelsCopy,
  marketNames: commerceMarketNames,
  pricingText: commercePricingText,
  priceRows: commercePriceRows,
} as const satisfies {
  labels: Record<Locale, CommerceLabelCopy>;
  marketNames: Record<Locale, Record<string, string>>;
  pricingText: Record<Locale, Record<ProductId, Omit<ProductPricingCopy, "prices">>>;
  priceRows: Record<ProductId, readonly { market: string; current: string; scheduled?: string }[]>;
};


export type PosterTopic =
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

export type PosterStory = readonly [string, string];

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
    private: ["本地文件空间", "在本地保存文档、图片、导出资料和其他文件。"],
    workbench: ["文件工作台", "在一个界面查看文件列表、详细信息、统计和最近操作。"],
    search: ["搜索与筛选", "使用关键词、标签、路径和文件夹筛选文件。"],
    archive: ["归档管理", "按照区域、状态和时间整理归档内容。"],
    relationships: ["关系图谱", "查看文件、标签、项目和主题之间的关联。"],
    dashboard: ["仪表盘", "查看文件数量、分类、存储趋势和最近变化。"],
    automation: ["自动整理", "根据监控路径和规则在后台处理文件。"],
    ai: ["AI 功能", "使用摘要、标签和分类功能处理文件内容。"],
    theme: ["外观设置", "切换浅色或深色界面。"],
    control: ["数据管理", "导入、导出、备份、恢复并管理加密设置。"],
    passwords: ["密码管理", "在本地保存和管理密码信息。"],
    ssh: ["SSH 密钥管理", "在本地保存、查看和管理 SSH 密钥。"],
    settings: ["应用设置", "管理监控、语言、备份和数据选项。"],
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

export type PosterSectionCopy = {
  eyebrow: string;
  title: string;
  body: string;
  galleryEyebrow: string;
  galleryTitle: string;
  galleryBody: string;
};

const sectionCopy: Record<Locale, PosterSectionCopy> = {
  zh: {
    eyebrow: "功能",
    title: "DeskHaven 功能",
    body: "以下海报展示本地文件空间、搜索、归档、关系图谱、自动整理、AI 功能、外观和数据管理。",
    galleryEyebrow: "界面截图",
    galleryTitle: "DeskHaven 界面",
    galleryBody: "以下截图展示仪表盘、文件工作台、关系图谱、设置和隐私控制。",
  },
  "zh-tw": {
    eyebrow: "核心能力",
    title: "用產品海報查看 DeskHaven 的主要功能。",
    body: "這裡依海報內容搭配說明：本地空間、搜尋、歸檔、關係圖、背景整理、AI 工具鏈、明暗模式、密碼/金鑰與資料控制。不同語言的海報順序會依對應資源自動匹配。",
    galleryEyebrow: "真實介面",
    galleryTitle: "查看 DeskHaven 的實際工作介面。",
    galleryBody: "從儀表板、文件台到設定與隱私控制，這裡展示的是目前語言版本的真實介面。",
  },
  en: {
    eyebrow: "Core capabilities",
    title: "Product posters highlight DeskHaven's main features.",
    body: "The notes follow the actual poster order for the selected language: local space, search, archive, relationships, background organization, AI tools, themes, credentials, and data control.",
    galleryEyebrow: "Real interface",
    galleryTitle: "See DeskHaven's actual working screens.",
    galleryBody: "From dashboard and file desk to settings and privacy controls, this gallery shows the real interface for the selected language.",
  },
  ja: {
    eyebrow: "主要機能",
    title: "製品ポスターで DeskHaven の主要機能を確認できます。",
    body: "選択中の言語のポスター順に合わせて、ローカル空間、検索、アーカイブ、関係グラフ、バックグラウンド整理、AI ツール、テーマ、認証情報、データ管理を説明します。",
    galleryEyebrow: "実際の画面",
    galleryTitle: "DeskHaven の作業画面を見る。",
    galleryBody: "ダッシュボード、ファイルデスク、設定、プライバシー管理まで、現在の言語版の実画面を掲載しています。",
  },
  ko: {
    eyebrow: "핵심 기능",
    title: "제품 포스터로 DeskHaven의 주요 기능을 확인할 수 있습니다.",
    body: "선택한 언어의 포스터 순서에 맞춰 로컬 공간, 검색, 보관, 관계 그래프, 백그라운드 정리, AI 도구, 테마, 자격 증명, 데이터 제어를 설명합니다.",
    galleryEyebrow: "실제 화면",
    galleryTitle: "DeskHaven의 실제 작업 화면을 확인하세요.",
    galleryBody: "대시보드와 파일 데스크부터 설정 및 개인정보 제어까지 현재 언어 버전의 실제 인터페이스를 보여줍니다.",
  },
  fr: {
    eyebrow: "Capacités clés",
    title: "Les affiches présentent les fonctions principales de DeskHaven.",
    body: "Les notes suivent l'ordre réel des affiches de la langue choisie : espace local, recherche, archives, relations, organisation en arrière-plan, outils IA, thèmes, identifiants et contrôle des données.",
    galleryEyebrow: "Interface réelle",
    galleryTitle: "Voir les écrans de travail réels de DeskHaven.",
    galleryBody: "Du tableau de bord au bureau de fichiers, jusqu'aux réglages et contrôles de confidentialité, cette galerie montre l'interface de la langue sélectionnée.",
  },
  de: {
    eyebrow: "Kernfunktionen",
    title: "Die Poster zeigen die wichtigsten DeskHaven-Funktionen.",
    body: "Die Hinweise folgen der tatsächlichen Poster-Reihenfolge der gewählten Sprache: lokaler Bereich, Suche, Archiv, Beziehungen, Hintergrundordnung, KI-Werkzeuge, Themen, Zugangsdaten und Datenkontrolle.",
    galleryEyebrow: "Echte Oberfläche",
    galleryTitle: "Die tatsächlichen Arbeitsansichten von DeskHaven ansehen.",
    galleryBody: "Vom Dashboard und Dateischreibtisch bis zu Einstellungen und Datenschutz zeigt die Galerie die reale Oberfläche der aktuellen Sprache.",
  },
  es: {
    eyebrow: "Capacidades clave",
    title: "Los pósteres muestran las funciones principales de DeskHaven.",
    body: "Las notas siguen el orden real de los pósteres del idioma elegido: espacio local, búsqueda, archivo, relaciones, organización en segundo plano, herramientas de IA, temas, credenciales y control de datos.",
    galleryEyebrow: "Interfaz real",
    galleryTitle: "Mira las pantallas reales de trabajo de DeskHaven.",
    galleryBody: "Desde el panel y el escritorio de archivos hasta ajustes y privacidad, esta galería muestra la interfaz real del idioma seleccionado.",
  },
  ru: {
    eyebrow: "Ключевые возможности",
    title: "Постеры показывают основные функции DeskHaven.",
    body: "Описание следует порядку постеров выбранного языка: локальное пространство, поиск, архив, связи, фоновая организация, AI-инструменты, темы, учетные данные и контроль данных.",
    galleryEyebrow: "Реальный интерфейс",
    galleryTitle: "Посмотрите рабочие экраны DeskHaven.",
    galleryBody: "От панели и файлового стола до настроек и приватности: здесь показан реальный интерфейс выбранного языка.",
  },
  pt: {
    eyebrow: "Recursos principais",
    title: "Os pôsteres mostram os principais recursos do DeskHaven.",
    body: "As notas seguem a ordem real dos pôsteres no idioma selecionado: espaço local, pesquisa, arquivo, relações, organização em segundo plano, ferramentas de IA, temas, credenciais e controle de dados.",
    galleryEyebrow: "Interface real",
    galleryTitle: "Veja as telas reais de trabalho do DeskHaven.",
    galleryBody: "Do painel e mesa de arquivos às configurações e controles de privacidade, a galeria mostra a interface real do idioma selecionado.",
  },
};


export const deskHavenPosterContent = {
  posterOrders,
  topicCopy,
  sectionCopy,
} as const;

export type PolicySection = { title: string; body: string | readonly string[]; bullets?: readonly string[] };

const policyProductNames: Record<ProductId, string> = {
  energyflow: "EnergyFlow",
  deskhaven: "DeskHaven",
  adhd: "ADHD Focus Timer",
};

export type PolicyPack = {
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

const zh: PolicyPack = {
  updated: "最后更新：2026 年 6 月 28 日",
  back: (name) => `返回 ${name}`,
  contact: "如需发送邮件，请发送邮件至 3371436706@qq.com。",
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
  privacyTitles: ["本地优先", "不会上传到 SoloCraft 服务器", "本地数据类型和用途", "敏感内容", "安全、备份和删除", "支持沟通", "你的控制权", "第三方服务边界", "联系和更新"],
  privacyBullets: ["不要求注册 SoloCraft 账户。", "不把本地文件内容上传给 SoloCraft。", "不把本地索引、统计记录或关系图谱发送给 SoloCraft 分析。", "不出售、出租或共享你的本地使用内容。", "不使用本地内容训练模型或建立广告画像。"],
  privacyBodies: (name, topic, sensitive) => [
    [`${name} 围绕本地 Windows 工作流设计。与功能相关的${topic}默认在你的设备或你选择的本地位置处理。`, "除非你主动导出、复制、备份、发送支持邮件，或使用系统/第三方同步工具，SoloCraft 不会远程读取这些本地资料。"],
    [`${name} 的核心功能不需要在线账户，也不会把你的本地内容作为在线档案上传给 SoloCraft。`, "如果 OneDrive、网盘、系统备份或公司设备策略同步了相关文件，那是你选择的系统或第三方服务行为，不是本应用向开发者上传。"],
    [`应用可能在本地保存或生成${topic}。这些资料用于搜索、筛选、统计、回顾、恢复、自动整理、完成当前会话或保持你的偏好设置。`, "处理这些资料的目的，是让你在自己的设备上更容易找回、理解和管理信息，而不是收集更多个人资料。"],
    [`你可能在使用过程中处理${sensitive}。这些内容可能具有私人性或商业敏感性，应当被视为重要本地资料。`, "在共享电脑、公司设备或未加密磁盘上使用时，请额外注意 Windows 账户、磁盘权限、屏幕可见性、系统备份和文件夹访问权限。"],
    [`${name} 可能提供本地保存、密码保护、加密、备份、恢复或防窥能力，实际范围取决于应用版本、Windows 环境和你启用的设置。`, "这些保护不能替代完整的设备安全方案。删除后的本地数据可能无法由SoloCraft 恢复，因此重要文件、记录和密钥应由你自行维护备份。"],
    ["如果你主动通过邮件发送邮件，你提供的邮箱、问题描述、截图、日志片段或附件只用于理解问题和回复支持请求。", "请不要发送不必要的密码、私钥、身份证件、完整客户资料或其它高度敏感内容。若必须提供截图，请先遮挡无关私人信息。"],
    [`你可以决定是否把内容放入 ${name}，也可以在应用中管理、导出、删除或重置本地记录和偏好。`, "如果不希望某些内容被处理，请不要把它们放入监控路径、文件仓、记录流程、想法记录或手动导入流程中。"],
    ["本应用无法控制操作系统账户、公司设备策略、杀毒软件、备份软件、云盘同步、浏览器扩展或其它第三方工具。", "如果这些工具访问、同步或上传本地文件，请查看对应服务的隐私政策和设置。"],
    ["政策可能随产品功能和文档完善而更新。", "如需发送邮件，请发送邮件至 3371436706@qq.com。"],
  ],
  legalTitles: ["使用许可", "商店规则", "退款和账单", "用户内容和风险", "支持和变更"],
  legalBodies: (name, summary, trial) => [
    [`你获得的是安装和使用 ${name} 的个人、非独占、不可转让许可，不是软件所有权。`, "除非法律允许或SoloCraft 书面授权，请勿反向工程、重新分发、转售、移除版权信息或规避商店规则。"],
    [summary, trial, "通过 Microsoft Store 获取或购买产品时，价格、税费、可用性、取消和退款流程以 Microsoft Store 显示和规则为准。"],
    ["退款、取消、账单、付款方式、税费和地区限制通常由 Microsoft Store 的政策和流程处理。", "SoloCraft 可以解释产品问题，但不能绕过 Microsoft Store 的订单、支付或退款系统。"],
    ["你保留自己文件、记录、偏好和导入资料的权利，同时应确认自己有权处理、整理、备份或导入相关内容。", "软件按现状提供，不能保证特定结果，也不能替代专业医疗、法律、财务、安全审计或数据恢复建议。"],
    ["功能、价格、试用、市场、语言支持和文档内容可能随版本和商店审核变化。", "如需支持，请联系 3371436706@qq.com。"],
  ],
};

const en: PolicyPack = {
  updated: "Last updated: June 28, 2026",
  back: (name) => `Back to ${name}`,
  contact: "For support, contact SoloCraft at 3371436706@qq.com.",
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
  privacyTitles: ["Local-first", "No upload to SoloCraft servers", "Local data types and purpose", "Sensitive content", "Security, backup, and deletion", "Support communication", "Your control", "Third-party boundary", "Contact and updates"],
  privacyBullets: ["No SoloCraft account is required.", "Local file contents are not uploaded to SoloCraft.", "Local indexes, statistics, or relationship maps are not sent to SoloCraft for analysis.", "Your local usage content is not sold, rented, or shared.", "Local content is not used for model training or advertising profiles."],
  privacyBodies: (name, topic, sensitive) => [
    [`${name} is designed around local Windows workflows. Feature-related ${topic} is processed on your device or selected local location by default.`, "Unless you export, copy, back up, send a support email, or use a system or third-party sync tool, SoloCraft does not remotely read this local data."],
    [`${name} does not require an online account for core features and does not upload your local content to SoloCraft as an online profile.`, "If OneDrive, cloud storage, system backup, or company device policy syncs related files, that is the behavior of the system or third-party service you chose, not an upload by this app."],
    [`The app may locally store or generate ${topic}. This supports search, filtering, statistics, review, recovery, automation, active sessions, or preferences.`, "The purpose is to help you find, understand, and manage information on your own device, not to collect more personal data."],
    [`During use, you may handle ${sensitive}. Such content may be private or commercially sensitive and should be treated as important local material.`, "On shared computers, company devices, or unencrypted disks, pay attention to Windows accounts, disk permissions, screen visibility, backups, and folder access."],
    [`${name} may provide local storage, password protection, encryption, backup, restore, or screen-protection features depending on app version, Windows environment, and enabled settings.`, "These protections do not replace a complete device-security plan. Deleted local data may not be recoverable by SoloCraft, so important files, records, and keys should be backed up independently."],
    ["If you contact SoloCraft by email, the address, issue description, screenshots, logs, or attachments you provide are used only to understand and respond to the support request.", "Do not send unnecessary passwords, private keys, identity documents, full customer records, or other highly sensitive content."],
    [`You decide whether to place content into ${name}. You can manage, export, delete, or reset local records and preferences in the app.`, "If you do not want certain content processed, do not place it in monitored paths, vaults, logging flows, idea records, or import workflows."],
    ["The app cannot control operating-system accounts, company device policies, antivirus tools, backup software, cloud-drive sync, browser extensions, or other third-party tools.", "If those tools access, sync, or upload local files, review the corresponding service settings and privacy policy."],
    ["This policy may be updated as product features and documentation improve.", "For support, contact 3371436706@qq.com."],
  ],
  legalTitles: ["License", "Store rules", "Refunds and billing", "User content and risk", "Support and changes"],
  legalBodies: (name, summary, trial) => [
    [`You receive a personal, non-exclusive, non-transferable license to install and use ${name}, not ownership of the software.`, "Do not reverse engineer, redistribute, resell, remove copyright notices, or bypass Store rules unless allowed by law or written permission."],
    [summary, trial, "When obtained or purchased through Microsoft Store, pricing, taxes, availability, cancellation, and refunds follow Microsoft Store listings and rules."],
    ["Refunds, cancellation, billing, payment methods, taxes, and regional restrictions are generally handled by Microsoft Store policies.", "SoloCraft can explain product issues but cannot bypass Microsoft Store orders, payments, or refunds."],
    ["You retain rights to your files, records, preferences, and imported materials, and you are responsible for confirming that you have the right to process, organize, back up, or import the relevant content.", "The software is provided as is and does not replace professional medical, legal, financial, security-audit, or data-recovery advice."],
    ["Features, pricing, trials, markets, language support, and documentation may change with versions and Store review.", "For support, contact 3371436706@qq.com."],
  ],
};

const zhTw: PolicyPack = {
  ...zh,
  updated: "最後更新：2026 年 6 月 28 日",
  contact: "如需發送郵件，請發送郵件至 3371436706@qq.com。",
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
  privacyTitles: ["Local d’abord", "Aucun envoi aux serveurs SoloCraft", "Données locales et finalité", "Contenu sensible", "Sécurité, sauvegarde et suppression", "Support", "Votre contrôle", "Services tiers", "Contact et mises à jour"],
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
  noUpload: "{name} benötigt für Kernfunktionen kein Online-Konto und lädt lokale Inhalte nicht als SoloCraft-Profil hoch.",
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
  privacyTitles: ["Local primero", "Sin subida a servidores de SoloCraft", "Datos locales y finalidad", "Contenido sensible", "Seguridad, copia y eliminación", "Soporte", "Tu control", "Servicios de terceros", "Contacto y actualizaciones"],
  privacyBullets: ["No se requiere cuenta SoloCraft.", "El contenido local no se sube al desarrollador.", "Índices, estadísticas o mapas no se envían para análisis.", "El contenido local no se vende, alquila ni comparte.", "No se usa para entrenamiento de modelos o publicidad."],
  legalTitles: ["Licencia", "Reglas de Store", "Reembolso y facturación", "Contenido del usuario", "Riesgos, copias y cambios"],
  localFirst: "{name} está diseñado para flujos locales de Windows. {topic} se procesa por defecto en tu dispositivo o ubicación local elegida.",
  noUpload: "{name} no requiere cuenta en línea para las funciones principales ni sube tu contenido local como perfil de SoloCraft.",
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
  privacyTitles: ["Сначала локально", "Без загрузки на серверы SoloCraft", "Локальные данные и цель", "Чувствительное содержимое", "Безопасность, копии и удаление", "Поддержка", "Ваш контроль", "Границы сторонних сервисов", "Контакт и обновления"],
  privacyBullets: ["Учетная запись SoloCraft не нужна.", "Локальные файлы не отправляются разработчику.", "Индексы, статистика и карты связей не отправляются на анализ.", "Локальный контент не продается, не сдается и не передается.", "Он не используется для обучения моделей или рекламы."],
  legalTitles: ["Лицензия", "Правила Store", "Возвраты и платежи", "Пользовательский контент", "Риски, копии и изменения"],
  localFirst: "{name} создан для локальных процессов Windows. {topic} по умолчанию обрабатывается на вашем устройстве или в выбранном локальном месте.",
  noUpload: "{name} не требует онлайн-аккаунта для основных функций и не загружает локальные данные как профиль SoloCraft.",
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
  privacyTitles: ["Local primeiro", "Sem envio aos servidores da SoloCraft", "Dados locais e finalidade", "Conteúdo sensível", "Segurança, backup e exclusão", "Suporte", "Seu controle", "Serviços de terceiros", "Contato e atualizações"],
  privacyBullets: ["Nenhuma conta SoloCraft é necessária.", "Conteúdo local não é enviado ao desenvolvedor.", "Índices, estatísticas ou mapas não são enviados para análise.", "Conteúdo local não é vendido, alugado ou compartilhado.", "Não é usado para treinar modelos ou publicidade."],
  legalTitles: ["Licença", "Regras da Store", "Reembolso e cobrança", "Conteúdo do usuário", "Riscos, backups e mudanças"],
  localFirst: "{name} foi projetado para fluxos locais do Windows. {topic} é processado por padrão no dispositivo ou local escolhido.",
  noUpload: "{name} não exige conta online para funções principais nem envia conteúdo local como perfil da SoloCraft.",
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

const policyLocalized: Record<Locale, PolicyPack> = {
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

export const productPolicyContent = {
  productNames: policyProductNames,
  localized: policyLocalized,
} as const satisfies {
  productNames: Record<ProductId, string>;
  localized: Record<Locale, PolicyPack>;
};
