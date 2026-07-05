import type { Locale } from "@/lib/i18n/context";

export const navCopy = {
  "zh": {
    "home": "首页",
    "about": "关于",
    "products": "产品",
    "contact": "联系",
    "language": "选择语言"
  },
  "zh-tw": {
    "home": "首頁",
    "about": "關於",
    "products": "產品",
    "contact": "聯絡",
    "language": "選擇語言"
  },
  "en": {
    "home": "Home",
    "about": "About",
    "products": "Products",
    "contact": "Contact",
    "language": "Select language"
  },
  "ja": {
    "home": "ホーム",
    "about": "概要",
    "products": "製品",
    "contact": "連絡",
    "language": "言語を選択"
  },
  "ko": {
    "home": "홈",
    "about": "소개",
    "products": "제품",
    "contact": "연락",
    "language": "언어 선택"
  },
  "fr": {
    "home": "Accueil",
    "about": "À propos",
    "products": "Produits",
    "contact": "Contact",
    "language": "Choisir la langue"
  },
  "de": {
    "home": "Start",
    "about": "Über uns",
    "products": "Produkte",
    "contact": "Kontakt",
    "language": "Sprache wählen"
  },
  "es": {
    "home": "Inicio",
    "about": "Acerca de",
    "products": "Productos",
    "contact": "Contacto",
    "language": "Elegir idioma"
  },
  "ru": {
    "home": "Главная",
    "about": "О нас",
    "products": "Продукты",
    "contact": "Контакты",
    "language": "Выбрать язык"
  },
  "pt": {
    "home": "Início",
    "about": "Sobre",
    "products": "Produtos",
    "contact": "Contato",
    "language": "Escolher idioma"
  }
} as const satisfies Record<Locale, { home: string; about: string; products: string; contact: string; language: string }>;

export const siteCopy = {
  "zh": {
    "common": {
      "productPromise": "产品承诺",
      "experienceFlow": "体验流程",
      "productIndex": "产品索引",
      "operatingPrinciples": "工作原则",
      "designPrinciples": "设计原则",
      "step": "步骤",
      "viewProducts": "查看产品",
      "contact": "联系",
      "getUpdates": "联系开发者",
      "microsoftStore": "Microsoft Store",
      "privacy": "隐私政策",
      "backToProducts": "返回产品"
    },
    "home": {
      "eyebrow": "独立 Windows 桌面软件",
      "title": "让精力、专注和文件管理回到可控状态。",
      "intro": "SoloCraft 汇集 Chicken Fillet 的桌面工具：记录工作精力，降低专注阻力，整理本地文件。每个产品都围绕真实日常使用场景设计，尽量少打扰，多帮你把事情理顺。",
      "primary": "了解产品思路",
      "secondary": "查看产品",
      "currentProduct": "正在展示",
      "notes": [
        [
          "本地优先",
          "能留在设备上的数据，就不轻易离开设备。"
        ],
        [
          "低摩擦",
          "关键动作尽量少步骤，避免把记录、整理和开始专注变成新的负担。"
        ],
        [
          "桌面原生",
          "围绕真实 Windows 工作流设计，而不是把网页仪表盘硬塞进桌面。"
        ],
        [
          "克制表达",
          "界面服务于理解和行动，不用噪音、徽章和假紧迫感抢注意力。"
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "看清每一天精力流向。",
          "body": "3 秒打卡精力，记录等级、状态、来源与心情。它不是另一张工作量表，而是帮你发现会议、任务和节奏如何影响表现。",
          "bullets": [
            "5 级精力等级",
            "职场场景",
            "Pearson + 卡方",
            "本地隐私优先"
          ]
        },
        {
          "id": "deskhaven",
          "num": "02 / DeskHaven",
          "title": "让混乱桌面重新变成工作台。",
          "body": "DeskHaven 是桌面文件避风港：守护每一份文件，让重要内容有一个安静、可控、本地安全的工作台。",
          "bullets": [
            "本地内容空间",
            "关系图谱",
            "文件仓",
            "AES-256"
          ]
        },
        {
          "id": "adhd",
          "num": "03 / ADHD Focus Timer",
          "title": "不惩罚注意力的专注工具。",
          "body": "正向计时、呼吸过渡、想法冰箱和全屏专注环境。它不催促你完成任务，而是帮你更温和地进入状态。",
          "bullets": [
            "正向计时",
            "呼吸引导",
            "想法冰箱",
            "本地隐私"
          ]
        }
      ],
      "principlesTitle": "少一点干扰，多一点掌控感。",
      "principlesBody": "SoloCraft 的产品不追求复杂功能堆叠，而是把一个明确场景做完整：看清精力变化，顺利进入专注，或者把分散文件重新整理成可找回的秩序。",
      "productTitle": "按当前的工作状态，选择真正需要的桌面产品。",
      "studioTitle": "小工具，也要经得起长期使用。",
      "studioBody": "我更在意产品能否安静地融入日常，而不是第一次打开时有多热闹。真实截图、清晰隐私说明和可验证的功能，比花哨包装更重要。",
      "studioNote": "EnergyFlow、DeskHaven 和 ADHD Focus Timer 分别面向精力记录、文件整理和低阻力专注。你可以从任意产品页直接查看功能、截图、隐私说明和下载入口。"
    },
    "products": {
      "eyebrow": "产品索引",
      "title": "找到现在最需要的那一个产品。",
      "intro": "这里不是产品清单，而是三个真实工作问题的入口：精力为什么被消耗、文件为什么找不回、专注为什么迟迟开始不了。每个页面都展示真实界面、价格、隐私说明和下载入口。"
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "职场能量仪表盘",
        "description": "适合经常被会议、任务切换和作息拖垮的人。用几秒记录精力与场景，逐渐看清真正的消耗源。",
        "status": "已推出"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "桌面文件避风港",
        "description": "适合桌面和下载目录长期混乱的人。把文件放回本地工作台，用搜索、关系图和备份恢复建立秩序。",
        "status": "已推出"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "沉浸式专注计时器",
        "description": "适合开始任务很难、容易被念头打断的人。先降噪、再进入专注，把临时想法放到一边。",
        "status": "已推出"
      }
    },
    "energyflow": {
      "eyebrow": "EnergyFlow / 职场能量仪表盘",
      "title": "记录精力变化，看清工作真正消耗在哪里。",
      "intro": "EnergyFlow 用几秒完成一次精力记录：等级、工作状态、恢复来源和情绪。积累一段时间后，你可以用趋势和统计结果判断哪些会议、任务或作息正在影响状态。",
      "status": "已推出",
      "promiseTitle": "不是待办清单，而是你的工作能量记录。",
      "promise": "它不评价你是否足够努力，只帮助你把体感变成可回看的记录。长期数据会慢慢呈现：什么让你恢复，什么让你耗竭，哪些安排值得调整。",
      "features": [
        [
          "3 秒打卡",
          "用最少步骤记录 5 级精力、工作状态、能量来源和心情，不把追踪本身变成负担。"
        ],
        [
          "深浅模式",
          "深色模式适合专注，浅色模式适合日间办公。界面保持克制，不用视觉噪音抢走注意力。"
        ],
        [
          "桌面常驻",
          "桌面悬浮入口和快捷键让记录可以随手完成：出现、记录、收起，尽量不打断当前工作。"
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
      ]
    },
    "deskhaven": {
      "eyebrow": "DeskHaven / 桌面文件避风港",
      "title": "把分散文件整理成一个可找回的本地工作台。",
      "intro": "DeskHaven 面向 Windows 本地文件整理：把散落的资料、图片、导出文件和项目素材放进可搜索、可归档、可备份的工作空间，并通过关系图谱理解内容之间的连接。",
      "status": "已推出",
      "promiseTitle": "不是换一个文件夹，而是建立一套本地文件秩序。",
      "promise": "文件仓负责归拢和归档，搜索负责快速定位，关系图谱帮助理解内容连接，备份与隐私控制确保重要文件可恢复、可导出、可掌握。",
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
      "title": "把专注入口做得更安静、更可持续。",
      "intro": "新版 ADHD Focus Timer 面向容易被环境、念头和倒计时压力打断的用户。它用实时合成的专注声景、呼吸过渡、正向计时、想法冰箱和累计统计，帮助你更温和地进入并维持一段专注。",
      "status": "已推出",
      "promiseTitle": "不是催促你快点完成，而是帮你少一点阻力地开始。",
      "promise": "1.5.0 重新整理了界面、声音和多语言体验。雨声、风声、海浪、虫鸣等声音由 Web Audio 实时生成，应用不再携带庞大的音频文件；混音、8D 空间感和完成提示音也可以按自己的状态调整。",
      "features": [
        [
          "进入前先定好环境",
          "开始前选择语言、时长、声音与引导方式，先把会打断专注的决定处理掉。"
        ],
        [
          "实时生成的专注声景",
          "雨、风、海浪、虫鸣等声音在本地实时合成，体积更小，也更适合长时间循环。"
        ],
        [
          "声音混音和 8D 空间感",
          "用混音面板调节不同声层，按需要开启空间移动感，让背景声成为稳定陪伴。"
        ],
        [
          "呼吸过渡",
          "正式计时前用简短呼吸节奏切换状态，不把开始任务变成突然的压力。"
        ],
        [
          "正向计时与沉浸粒子",
          "时间向前累积，避免倒计时带来的失败感；粒子动画给出轻微反馈但不抢注意力。"
        ],
        [
          "想法冰箱",
          "突然冒出的想法可以先存放起来，专注结束后再处理，不必立刻切出当前任务。"
        ],
        [
          "累计统计与温和完成",
          "完成页记录真实投入，累计专注数据帮助你看见长期进展，而不是只盯着单次表现。"
        ]
      ],
      "galleryEyebrow": "界面截图",
      "galleryTitle": "当前语言的完整界面截图。",
      "galleryIntro": "截图会跟随网站语言切换。没有对应截图的语言会使用最接近的可用版本，不影响页面文案本地化。",
      "galleryItems": [
        [
          "专注准备",
          "先选择时长、语言和环境声，让开始变得明确。"
        ],
        [
          "声音面板",
          "多层声景可以自由混合，适合不同的专注状态。"
        ],
        [
          "呼吸引导",
          "用短暂过渡把注意力从混乱带回当前任务。"
        ],
        [
          "专注进行中",
          "正向计时、粒子反馈和全屏环境一起保持低压力节奏。"
        ],
        [
          "想法冰箱",
          "临时想法先保存，之后再回来处理。"
        ],
        [
          "累计统计",
          "用长期记录看见真实投入，而不是只评价单次结果。"
        ],
        [
          "支持与设置",
          "语言、声音、隐私与支持入口集中在清晰位置。"
        ]
      ]
    },
    "about": {
      "title": "关于 SoloCraft",
      "intro": "SoloCraft 是 Chicken Fillet 的独立桌面软件工作室，专注于安静、克制、隐私优先的小工具。",
      "story": [
        "我喜欢做那些不抢戏的工具：它们应该在需要时出现，在完成后退到背景里。",
        "EnergyFlow、DeskHaven 和 ADHD Focus Timer 都围绕同一个问题：怎样让桌面工作更可恢复、更可理解、更少压力。",
        "这个网站展示这些工具真实的样子：界面、使用场景、隐私说明和下载方式都尽量清楚，不用夸张包装代替产品本身。"
      ],
      "philosophyTitle": "设计原则",
      "philosophy": [
        [
          "小而完整",
          "每个工具聚焦一个明确场景，但把关键流程做完整。"
        ],
        [
          "桌面原生",
          "围绕真实桌面工作流，而不是把网页仪表盘硬塞进应用。"
        ],
        [
          "克制表达",
          "视觉服务于理解，不用装饰制造廉价兴奋。"
        ],
        [
          "隐私优先",
          "能留在本地的数据，就不轻易离开设备。"
        ]
      ],
      "techTitle": "技术方向",
      "tech": [
        "Windows desktop apps",
        "Local-first storage",
        "Statistics and visualization",
        "Privacy-conscious product design"
      ],
      "ctaTitle": "想聊产品、合作或反馈？",
      "ctaDescription": "我会认真阅读每一封真实来信。",
      "ctaButton": "联系我"
    },
    "contact": {
      "title": "联系",
      "intro": "产品反馈、合作想法、媒体询问或单纯打个招呼，都可以发邮件给我。",
      "infoTitle": "联系方式",
      "email": "邮箱"
    },
    "footer": {
      "subtitle": "Chicken Fillet 的独立桌面软件工作室。",
      "studio": "工作室",
      "products": "产品",
      "legal": "法务",
      "about": "关于",
      "contact": "联系",
      "privacy": "隐私政策",
      "copyright": "安静、克制、隐私优先的桌面工具。"
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
            "如果你点击邮箱并主动发送邮件，内容会通过你选择的邮件服务发送；这属于主动联系开发者，不是网站自动收集。"
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
  },
  "zh-tw": {
    "common": {
      "productPromise": "產品承諾",
      "experienceFlow": "體驗流程",
      "productIndex": "產品索引",
      "operatingPrinciples": "工作原則",
      "designPrinciples": "設計原則",
      "step": "步驟",
      "viewProducts": "查看產品",
      "contact": "聯絡",
      "getUpdates": "聯絡開發者",
      "microsoftStore": "Microsoft Store",
      "privacy": "隱私政策",
      "backToProducts": "返回產品"
    },
    "home": {
      "eyebrow": "獨立 Windows 桌面軟體",
      "title": "讓精力、專注和文件管理回到可控狀態。",
      "intro": "SoloCraft 匯集 Chicken Fillet 的桌面工具：記錄工作精力、降低專注阻力、整理本地文件。每個產品都圍繞真實日常使用場景設計，盡量少打擾，多幫你把事情理順。",
      "primary": "了解產品思路",
      "secondary": "查看產品",
      "currentProduct": "正在展示",
      "notes": [
        [
          "本地優先",
          "能留在設備上的資料，就不輕易離開設備。"
        ],
        [
          "低摩擦",
          "關鍵動作盡量少步驟，避免把記錄、整理和開始專注變成新的負擔。"
        ],
        [
          "桌面原生",
          "圍繞真實 Windows 工作流設計，而不是把網頁儀表板硬塞進桌面。"
        ],
        [
          "克制表達",
          "介面服務於理解和行動，不用噪音、徽章和假緊迫感搶注意力。"
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "看清每一天精力流向。",
          "body": "3 秒打卡精力，記錄等級、狀態、來源與心情。它不是另一張工作量表，而是幫你發現會議、任務和節奏如何影響表現。",
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
          "title": "讓混亂桌面重新變成工作台。",
          "body": "DeskHaven 是桌面文件避風港：守護每一份文件，讓重要內容有一個安靜、可控、本地安全的工作台。",
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
          "title": "不懲罰注意力的專注工具。",
          "body": "正向計時、呼吸過渡、想法冰箱和全螢幕專注環境。它不催促你完成任務，而是幫你更溫和地進入狀態。",
          "bullets": [
            "正向計時",
            "呼吸引導",
            "想法冰箱",
            "本地隱私"
          ]
        }
      ],
      "principlesTitle": "少一點干擾，多一點掌控感。",
      "principlesBody": "SoloCraft 的產品不追求複雜功能堆疊，而是把一個明確場景做完整：看清精力變化，順利進入專注，或者把分散文件重新整理成可找回的秩序。",
      "productTitle": "依照當下的工作狀態，選擇真正需要的桌面產品。",
      "studioTitle": "小工具，也要經得起長期使用。",
      "studioBody": "我更在意產品能否安靜地融入日常，而不是第一次打開時有多熱鬧。真實截圖、清晰隱私說明和可驗證的功能，比花俏包裝更重要。",
      "studioNote": "EnergyFlow、DeskHaven 和 ADHD Focus Timer 分別面向精力記錄、文件整理和低阻力專注。你可以從任意產品頁直接查看功能、截圖、隱私說明和下載入口。"
    },
    "products": {
      "eyebrow": "產品索引",
      "title": "找到現在最需要的那一個產品。",
      "intro": "這裡不是產品清單，而是三個真實工作問題的入口：精力為什麼被消耗、文件為什麼找不回、專注為什麼遲遲開始不了。每個頁面都展示真實介面、價格、隱私說明和下載入口。"
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "職場能量儀表板",
        "description": "適合常被會議、任務切換和作息拖垮的人。用幾秒記錄精力與場景，逐漸看清真正的消耗源。",
        "status": "已推出"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "桌面文件避風港",
        "description": "適合桌面和下載資料夾長期混亂的人。把文件放回本地工作台，用搜尋、關係圖和備份恢復建立秩序。",
        "status": "已推出"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "沉浸式專注計時器",
        "description": "適合開始任務很難、容易被念頭打斷的人。先降噪、再進入專注，把臨時想法放到一邊。",
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
          "深色模式適合專注，淺色模式適合日間辦公。介面保持克制，不用視覺噪音搶走注意力。"
        ],
        [
          "桌面常駐",
          "桌面懸浮入口和快捷鍵讓記錄可以隨手完成：出現、記錄、收起，盡量不打斷目前工作。"
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
      ]
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
          "雨、風、海浪、蟲鳴等聲音在本地即時合成，體積更小，也更適合長時間循環。"
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
      "galleryTitle": "目前語言的完整介面截圖。",
      "galleryIntro": "截圖會跟隨網站語言切換。沒有對應截圖的語言會使用最接近的可用版本，不影響頁面文案本地化。",
      "galleryItems": [
        [
          "專注準備",
          "先選擇時長、語言和環境聲，讓開始變得明確。"
        ],
        [
          "聲音面板",
          "多層聲景可以自由混合，適合不同的專注狀態。"
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
        ]
      ]
    },
    "about": {
      "title": "關於 SoloCraft",
      "intro": "SoloCraft 是 Chicken Fillet 的獨立桌面軟體工作室，專注於安靜、克制、隱私優先的小工具。",
      "story": [
        "我喜歡做那些不搶戲的工具：它們應該在需要時出現，在完成後退到背景裡。",
        "EnergyFlow、DeskHaven 和 ADHD Focus Timer 都圍繞同一個問題：怎樣讓桌面工作更可恢復、更可理解、更少壓力。",
        "這個網站展示這些工具真實的樣子：介面、使用場景、隱私說明和下載方式都盡量清楚，不用誇張包裝代替產品本身。"
      ],
      "philosophyTitle": "設計原則",
      "philosophy": [
        [
          "小而完整",
          "每個工具聚焦一個明確場景，但把關鍵流程做完整。"
        ],
        [
          "桌面原生",
          "圍繞真實桌面工作流，而不是把網頁儀表板硬塞進應用。"
        ],
        [
          "克制表達",
          "視覺服務於理解，不用裝飾製造廉價興奮。"
        ],
        [
          "隱私優先",
          "能留在本地的資料，就不輕易離開設備。"
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
            "如果你點擊郵箱並主動寄信，內容會透過你選擇的郵件服務發送；這屬於主動聯絡開發者，不是網站自動收集。"
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
  },
  "en": {
    "common": {
      "productPromise": "Product promise",
      "experienceFlow": "Experience flow",
      "productIndex": "Product index",
      "operatingPrinciples": "Operating principles",
      "designPrinciples": "Design principles",
      "step": "Step",
      "viewProducts": "View products",
      "contact": "Contact",
      "getUpdates": "Contact developer",
      "microsoftStore": "Microsoft Store",
      "privacy": "Privacy policy",
      "backToProducts": "Back to products"
    },
    "home": {
      "eyebrow": "Independent Windows desktop software",
      "title": "Regain control of energy, focus, and local files.",
      "intro": "SoloCraft brings together Chicken Fillet's desktop tools for tracking work energy, reducing focus friction, and organizing local files. Each product is built around real daily workflows, with less noise and more control.",
      "primary": "Explore the approach",
      "secondary": "View products",
      "currentProduct": "Now showing",
      "notes": [
        [
          "Local-first",
          "Data that can stay on your device should not leave it casually."
        ],
        [
          "Low-friction",
          "Important actions stay short, so tracking, organizing, and starting focus do not become new chores."
        ],
        [
          "Desktop-native",
          "Designed around real Windows workflows, not a web dashboard squeezed into a desktop shell."
        ],
        [
          "Calm UI",
          "The interface supports understanding and action without noisy badges or false urgency."
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "See what your workday does to your energy.",
          "body": "Log energy in seconds, then review how meetings, deep work, breaks, and overtime shape your state over time.",
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
          "title": "Give local files a system you can trust.",
          "body": "DeskHaven turns loose files into a searchable, archivable workspace with relationship maps, backup, and privacy controls.",
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
          "title": "Start focus with less pressure.",
          "body": "Preparation, breathing, forward timing, and Idea Fridge help you begin and return without treating distraction as failure.",
          "bullets": [
            "Forward timer",
            "Breathing guide",
            "Idea Fridge",
            "Local privacy"
          ]
        }
      ],
      "principlesTitle": "Less interruption. More control.",
      "principlesBody": "SoloCraft products do not chase feature bloat. Each one finishes a specific job: understanding energy patterns, easing into focus, or turning scattered files into a system you can trust.",
      "productTitle": "Choose the product that matches the work state you are in.",
      "studioTitle": "Small tools made for repeated use.",
      "studioBody": "I care more about whether a product fits quietly into daily work than whether it feels loud on first launch. Real screenshots, clear privacy notes, and verifiable behavior matter more than decoration.",
      "studioNote": "EnergyFlow, DeskHaven, and ADHD Focus Timer cover energy tracking, file organization, and low-resistance focus. Each product page shows features, screenshots, privacy notes, and download options directly."
    },
    "products": {
      "eyebrow": "Product index",
      "title": "Start with the problem that is costing you the most attention.",
      "intro": "This is not a catalog. It is a map of three recurring desktop problems: energy that disappears, files that become hard to trust, and focus that takes too much effort to start. Each product page shows real UI, pricing, privacy notes, and the Store path."
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "Workplace energy dashboard",
        "description": "For people drained by meetings, context switching, and uneven routines. Log energy in seconds and let patterns reveal what actually takes it away.",
        "status": "Available"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "Desktop file haven",
        "description": "For desktops and download folders that never quite recover. Bring local files into a searchable desk with relationships, vaults, and restore paths.",
        "status": "Available"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "Immersive focus timer",
        "description": "For people who lose energy before the task even starts. Reduce noise, enter gently, and park intrusive thoughts without breaking the session.",
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
          "Record energy level, work status, energy source, and mood with minimal friction."
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
      ]
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
          "Low-friction",
          "Organization should happen naturally without becoming a new burden."
        ]
      ]
    },
    "adhd": {
      "eyebrow": "ADHD Focus Timer / 1.5.0",
      "title": "A calmer doorway into sustained focus.",
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
      "galleryTitle": "Screenshots for the current language.",
      "galleryIntro": "Screenshots switch with the website language. Locales without matching ADHD screenshots use the closest available version while keeping copy fully localized.",
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
        ]
      ]
    },
    "about": {
      "title": "About SoloCraft",
      "intro": "SoloCraft is Chicken Fillet's independent desktop software studio for quiet, restrained, privacy-first tools.",
      "story": [
        "I like tools that do not steal the stage. They should appear when needed and return to the background when the work is done.",
        "EnergyFlow, DeskHaven, and ADHD Focus Timer all circle the same question: how can desktop work become more recoverable, understandable, and less stressful?",
        "This site shows the products as they are: real screens, use cases, privacy notes, and download paths, without loud packaging standing in for the software."
      ],
      "philosophyTitle": "Design principles",
      "philosophy": [
        [
          "Small and complete",
          "Each tool focuses on a clear scenario while completing the important workflow."
        ],
        [
          "Desktop-native",
          "Built around actual desktop workflows, not another web dashboard in disguise."
        ],
        [
          "Restrained",
          "Visual design serves understanding instead of manufacturing cheap excitement."
        ],
        [
          "Privacy-first",
          "Data that can stay local should not leave the device lightly."
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
  },
  "ja": {
    "common": {
      "productPromise": "製品の約束",
      "experienceFlow": "体験の流れ",
      "productIndex": "製品一覧",
      "operatingPrinciples": "運用原則",
      "designPrinciples": "設計原則",
      "step": "ステップ",
      "viewProducts": "製品を見る",
      "contact": "連絡",
      "getUpdates": "開発者に連絡",
      "microsoftStore": "Microsoft Store",
      "privacy": "プライバシーポリシー",
      "backToProducts": "製品に戻る"
    },
    "home": {
      "eyebrow": "独立系デスクトップソフトウェアスタジオ",
      "title": "集中するデスクトップ作業のための静かなツール。",
      "intro": "SoloCraft は Chicken Fillet の製品ホームです。エネルギーを記録し、集中を守り、デスクトップを落ち着かせる小さく控えめな Windows ツールを作っています。",
      "primary": "考え方を見る",
      "secondary": "製品を見る",
      "currentProduct": "表示中",
      "notes": [
        [
          "ローカル優先",
          "端末に残せるデータは、むやみに外へ出しません。"
        ],
        [
          "低い摩擦",
          "記録、整理、集中開始が新しい負担にならないよう、操作を短く保ちます。"
        ],
        [
          "デスクトップ原生",
          "実際の Windows ワークフローを中心に設計します。"
        ],
        [
          "控えめな表現",
          "理解と行動を助け、ノイズや偽の緊急感で注意を奪いません。"
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "一日のエネルギーの流れを見る。",
          "body": "数秒でエネルギー、状態、原因、気分を記録し、会議やタスクが状態にどう影響するかを見つけます。",
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
          "title": "散らかったデスクトップを作業台へ。",
          "body": "DeskHaven はローカルファイルの避難所です。重要な内容を静かで制御可能な作業台に戻します。",
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
          "title": "注意を責めない集中ツール。",
          "body": "前向きな計時、呼吸、Idea Fridge、全画面集中で、より穏やかに作業へ入れます。",
          "bullets": [
            "前向き計時",
            "呼吸ガイド",
            "Idea Fridge",
            "ローカルプライバシー"
          ]
        }
      ],
      "principlesTitle": "邪魔を少なく、コントロールを多く。",
      "principlesBody": "SoloCraft は機能の多さより、ひとつの場面を最後まで支えることを重視します。",
      "productTitle": "いまの作業状態に合うデスクトップ製品を選ぶ。",
      "studioTitle": "小さなツールを長く使える形に。",
      "studioBody": "初回の派手さより、毎日の作業に静かに馴染むかを大切にします。",
      "studioNote": "各製品ページでは機能、スクリーンショット、プライバシー、ダウンロード導線を確認できます。"
    },
    "products": {
      "eyebrow": "製品一覧",
      "title": "いちばん負担になっている問題から選ぶ。",
      "intro": "ここは単なる製品一覧ではありません。エネルギーが削られる、ファイルが見つからない、集中を始めるまでが重い。その三つのデスクトップ課題に向き合う入口です。各ページで実際の画面、価格、プライバシー、入手方法を確認できます。"
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "仕事のエネルギーダッシュボード",
        "description": "会議、作業切り替え、不規則なリズムで消耗しやすい人へ。数秒の記録から、本当にエネルギーを奪う場面を見つけます。",
        "status": "公開中"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "デスクトップファイルの避難所",
        "description": "デスクトップやダウンロードフォルダが戻らないほど散らかりがちな人へ。ローカルファイルを検索、関係図、保管、復元で整えます。",
        "status": "公開中"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "没入型フォーカスタイマー",
        "description": "始める前に消耗しやすく、途中の思いつきに引っ張られやすい人へ。雑音を減らし、穏やかに集中へ入ります。",
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
      ]
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
          "低摩擦",
          "整理が新しい負担にならないようにします。"
        ]
      ]
    },
    "adhd": {
      "eyebrow": "ADHD Focus Timer / 1.5.0",
      "title": "集中へ入る入口を、もっと静かで続けやすく。",
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
      "galleryTitle": "現在の言語に合わせた画面。",
      "galleryIntro": "スクリーンショットはサイト言語に合わせて切り替わります。対応画像がない言語では最も近い画像を使い、文案はその言語のまま表示します。",
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
        ]
      ]
    },
    "about": {
      "title": "SoloCraft について",
      "intro": "SoloCraft は Chicken Fillet の独立系デスクトップソフトウェアスタジオです。静かで控えめ、プライバシーを重視したツールを作ります。",
      "story": [
        "必要な時だけ現れ、作業が終われば背景へ戻る道具を作りたいと思っています。",
        "EnergyFlow、DeskHaven、ADHD Focus Timer は、デスクトップ作業をより回復しやすく、理解しやすく、低ストレスにするための製品です。",
        "このサイトでは実際の画面、利用場面、プライバシー、ダウンロード方法を誇張せずに示します。"
      ],
      "philosophyTitle": "設計原則",
      "philosophy": [
        [
          "小さく完全",
          "明確な場面に集中し、重要な流れを完成させます。"
        ],
        [
          "デスクトップ原生",
          "実際のデスクトップ作業に合わせます。"
        ],
        [
          "控えめ",
          "視覚は理解を助けるために使います。"
        ],
        [
          "プライバシー優先",
          "ローカルに残せるデータは軽く外へ出しません。"
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
  },
  "ko": {
    "common": {
      "productPromise": "제품 약속",
      "experienceFlow": "경험 흐름",
      "productIndex": "제품 목록",
      "operatingPrinciples": "운영 원칙",
      "designPrinciples": "설계 원칙",
      "step": "단계",
      "viewProducts": "제품 보기",
      "contact": "연락",
      "getUpdates": "개발자에게 문의",
      "microsoftStore": "Microsoft Store",
      "privacy": "개인정보 처리방침",
      "backToProducts": "제품으로 돌아가기"
    },
    "home": {
      "eyebrow": "독립 데스크톱 소프트웨어 스튜디오",
      "title": "집중하는 데스크톱 작업을 위한 조용한 도구.",
      "intro": "SoloCraft는 Chicken Fillet의 제품 홈입니다. 에너지를 기록하고, 집중을 보호하고, 데스크톱을 차분하게 만드는 작고 절제된 Windows 도구를 만듭니다.",
      "primary": "제품 방향 보기",
      "secondary": "제품 보기",
      "currentProduct": "현재 표시",
      "notes": [
        [
          "로컬 우선",
          "기기에 남길 수 있는 데이터는 쉽게 밖으로 보내지 않습니다."
        ],
        [
          "낮은 마찰",
          "기록, 정리, 집중 시작이 새 부담이 되지 않도록 핵심 동작을 짧게 만듭니다."
        ],
        [
          "데스크톱 네이티브",
          "실제 Windows 작업 흐름을 중심으로 설계합니다."
        ],
        [
          "절제된 표현",
          "인터페이스는 이해와 행동을 돕고, 소음과 가짜 긴급함으로 주의를 빼앗지 않습니다."
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "하루의 에너지 흐름을 보세요.",
          "body": "몇 초 만에 에너지, 상태, 원인, 기분을 기록하고 회의와 업무가 상태에 어떤 영향을 주는지 확인합니다.",
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
          "title": "어수선한 데스크톱을 작업대로 바꾸세요.",
          "body": "DeskHaven은 로컬 파일의 피난처입니다. 중요한 콘텐츠를 조용하고 통제 가능한 작업대로 되돌립니다.",
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
          "title": "주의력을 벌하지 않는 집중 도구.",
          "body": "정방향 타이머, 호흡, Idea Fridge, 전체화면 집중 환경으로 더 부드럽게 시작합니다.",
          "bullets": [
            "정방향 타이머",
            "호흡 가이드",
            "Idea Fridge",
            "로컬 개인정보"
          ]
        }
      ],
      "principlesTitle": "방해는 줄이고, 통제감은 높입니다.",
      "principlesBody": "SoloCraft는 기능을 쌓기보다 하나의 명확한 상황을 끝까지 완성하는 데 집중합니다.",
      "productTitle": "지금의 작업 상태에 맞는 데스크톱 제품을 선택하세요.",
      "studioTitle": "작은 도구도 오래 쓸 수 있어야 합니다.",
      "studioBody": "처음 열었을 때의 화려함보다 일상에 조용히 어울리는지를 더 중요하게 봅니다.",
      "studioNote": "각 제품 페이지에서 기능, 스크린샷, 개인정보 설명, 다운로드 경로를 바로 확인할 수 있습니다."
    },
    "products": {
      "eyebrow": "제품 목록",
      "title": "가장 많은 주의를 빼앗는 문제부터 시작하세요.",
      "intro": "이곳은 단순한 제품 목록이 아닙니다. 에너지가 사라지는 이유, 파일을 다시 찾기 어려운 이유, 집중을 시작하기 힘든 이유를 다루는 세 가지 입구입니다. 각 제품 페이지에서 실제 화면, 가격, 개인정보 보호, 다운로드 경로를 확인할 수 있습니다."
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "업무 에너지 대시보드",
        "description": "회의, 작업 전환, 불규칙한 루틴에 쉽게 지치는 사람을 위한 제품입니다. 몇 초 만에 에너지와 상황을 기록하고 실제 소모 원인을 확인합니다.",
        "status": "출시됨"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "데스크톱 파일 안식처",
        "description": "바탕화면과 다운로드 폴더가 계속 흐트러지는 사람을 위한 제품입니다. 로컬 파일을 검색, 관계 지도, 보관, 복원 흐름으로 정리합니다.",
        "status": "출시됨"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "몰입형 집중 타이머",
        "description": "작업을 시작하기 전부터 지치거나 떠오르는 생각에 자주 끊기는 사람을 위한 제품입니다. 먼저 소음을 낮추고 부드럽게 집중에 들어갑니다.",
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
      ]
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
          "낮은 마찰",
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
      "galleryTitle": "현재 언어에 맞춘 화면.",
      "galleryIntro": "스크린샷은 웹사이트 언어에 따라 바뀝니다. 대응 이미지가 없는 언어는 가장 가까운 이미지를 사용하며, 문구는 계속 현지화됩니다.",
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
        ]
      ]
    },
    "about": {
      "title": "SoloCraft 소개",
      "intro": "SoloCraft는 Chicken Fillet의 독립 데스크톱 소프트웨어 스튜디오로, 조용하고 절제되며 개인정보를 우선하는 도구를 만듭니다.",
      "story": [
        "필요할 때 나타나고, 일이 끝나면 배경으로 돌아가는 도구를 만들고 싶습니다.",
        "EnergyFlow, DeskHaven, ADHD Focus Timer는 데스크톱 작업을 더 회복 가능하고 이해하기 쉽고 덜 stressful하게 만들기 위한 제품입니다.",
        "이 사이트는 실제 화면, 사용 상황, 개인정보 설명, 다운로드 방식을 과장 없이 보여 줍니다."
      ],
      "philosophyTitle": "설계 원칙",
      "philosophy": [
        [
          "작고 완성도 있게",
          "명확한 상황에 집중하고 중요한 흐름을 끝까지 완성합니다."
        ],
        [
          "데스크톱 네이티브",
          "실제 데스크톱 작업 흐름을 기준으로 만듭니다."
        ],
        [
          "절제",
          "시각 요소는 이해를 돕기 위해 사용합니다."
        ],
        [
          "개인정보 우선",
          "로컬에 남길 수 있는 데이터는 가볍게 밖으로 보내지 않습니다."
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
  },
  "fr": {
    "common": {
      "productPromise": "Promesse produit",
      "experienceFlow": "Parcours",
      "productIndex": "Index des produits",
      "operatingPrinciples": "Principes",
      "designPrinciples": "Principes de design",
      "step": "Étape",
      "viewProducts": "Voir les produits",
      "contact": "Contact",
      "getUpdates": "Contacter le développeur",
      "microsoftStore": "Microsoft Store",
      "privacy": "Confidentialité",
      "backToProducts": "Retour aux produits"
    },
    "home": {
      "eyebrow": "Studio indépendant de logiciels desktop",
      "title": "Des outils calmes pour le travail concentré.",
      "intro": "SoloCraft est la maison produit de Chicken Fillet : de petits outils Windows sobres pour suivre l'énergie, protéger la concentration et apaiser le bureau.",
      "primary": "Explorer l'approche",
      "secondary": "Voir les produits",
      "currentProduct": "À l'écran",
      "notes": [
        [
          "Local d'abord",
          "Les données qui peuvent rester sur l'appareil ne doivent pas le quitter sans raison."
        ],
        [
          "Faible friction",
          "Les actions clés restent courtes pour ne pas transformer le suivi, le rangement ou le focus en corvée."
        ],
        [
          "Pensé pour le bureau",
          "Conçu autour de vrais flux Windows, pas d'un tableau web déguisé."
        ],
        [
          "Interface retenue",
          "L'interface aide à comprendre et agir sans bruit ni fausse urgence."
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "Voir ce que le travail fait à votre énergie.",
          "body": "Notez votre énergie en quelques secondes, puis observez comment réunions, tâches et pauses influencent votre état.",
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
          "title": "Transformer le bureau en espace fiable.",
          "body": "DeskHaven donne aux fichiers locaux un espace calme, consultable, archivable et maîtrisé.",
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
          "title": "Se concentrer sans se juger.",
          "body": "Préparation, respiration, chronométrage progressif et Idea Fridge aident à commencer avec moins de pression.",
          "bullets": [
            "Chronomètre progressif",
            "Respiration",
            "Idea Fridge",
            "Vie privée locale"
          ]
        }
      ],
      "principlesTitle": "Moins d'interruption, plus de contrôle.",
      "principlesBody": "SoloCraft ne cherche pas l'accumulation de fonctions, mais un flux clair rendu complet.",
      "productTitle": "Choisir le produit qui correspond à votre état de travail du moment.",
      "studioTitle": "De petits outils faits pour durer.",
      "studioBody": "Je privilégie l'intégration calme au quotidien plutôt que l'effet spectaculaire au premier lancement.",
      "studioNote": "Chaque page produit montre les fonctions, captures, notes de confidentialité et options de téléchargement."
    },
    "products": {
      "eyebrow": "Index des produits",
      "title": "Commencez par le problème qui vous coûte le plus d’attention.",
      "intro": "Ce n’est pas un simple catalogue. C’est l’entrée vers trois problèmes de bureau très concrets : l’énergie qui disparaît, les fichiers qui deviennent difficiles à retrouver, et la concentration qui demande trop d’effort pour démarrer. Chaque page présente l’interface réelle, le prix, la confidentialité et le lien Store."
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "Tableau d'énergie au travail",
        "description": "Pour les personnes vidées par les réunions, les changements de contexte et les routines irrégulières. Notez l’énergie en quelques secondes et laissez les tendances révéler ce qui l’épuise vraiment.",
        "status": "Disponible"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "Havre de fichiers desktop",
        "description": "Pour les bureaux et dossiers de téléchargement qui ne retrouvent jamais vraiment l’ordre. Replacez les fichiers locaux dans un espace consultable, relié et restaurable.",
        "status": "Disponible"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "Minuteur de concentration immersif",
        "description": "Pour celles et ceux qui perdent de l’énergie avant même de commencer. Réduisez le bruit, entrez doucement dans la session et mettez les pensées de côté sans casser le rythme.",
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
          "Enregistrez énergie, état, source et humeur avec peu de friction."
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
      ]
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
          "Faible friction",
          "L'organisation ne devient pas une nouvelle charge."
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
      "galleryTitle": "Captures adaptées à la langue actuelle.",
      "galleryIntro": "Les captures changent avec la langue du site. Les langues sans capture dédiée utilisent la version disponible la plus proche, tout en gardant les textes localisés.",
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
        ]
      ]
    },
    "about": {
      "title": "À propos de SoloCraft",
      "intro": "SoloCraft est le studio indépendant de Chicken Fillet pour des outils desktop calmes, sobres et respectueux de la vie privée.",
      "story": [
        "J'aime les outils qui ne prennent pas toute la scène : ils apparaissent au bon moment puis retournent en arrière-plan.",
        "EnergyFlow, DeskHaven et ADHD Focus Timer répondent à la même question : rendre le travail desktop plus récupérable, lisible et moins stressant.",
        "Ce site montre les produits tels qu'ils sont : écrans réels, cas d'usage, confidentialité et téléchargement, sans emballage excessif."
      ],
      "philosophyTitle": "Principes de design",
      "philosophy": [
        [
          "Petit et complet",
          "Chaque outil se concentre sur un scénario clair et complète le flux essentiel."
        ],
        [
          "Desktop natif",
          "Construit autour des usages réels du bureau."
        ],
        [
          "Retenu",
          "Le visuel sert la compréhension, pas l'excitation bon marché."
        ],
        [
          "Vie privée d'abord",
          "Les données pouvant rester locales ne quittent pas l'appareil à la légère."
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
  },
  "de": {
    "common": {
      "productPromise": "Produktversprechen",
      "experienceFlow": "Ablauf",
      "productIndex": "Produktübersicht",
      "operatingPrinciples": "Arbeitsprinzipien",
      "designPrinciples": "Designprinzipien",
      "step": "Schritt",
      "viewProducts": "Produkte ansehen",
      "contact": "Kontakt",
      "getUpdates": "Entwickler kontaktieren",
      "microsoftStore": "Microsoft Store",
      "privacy": "Datenschutz",
      "backToProducts": "Zurück zu Produkten"
    },
    "home": {
      "eyebrow": "Unabhängiges Desktop-Softwarestudio",
      "title": "Ruhige Werkzeuge für fokussierte Desktop-Arbeit.",
      "intro": "SoloCraft ist die Produktseite von Chicken Fillet: kleine, zurückhaltende Windows-Tools zum Erfassen von Energie, Schützen von Fokus und Beruhigen des Desktops.",
      "primary": "Ansatz ansehen",
      "secondary": "Produkte ansehen",
      "currentProduct": "Aktuell gezeigt",
      "notes": [
        [
          "Lokal zuerst",
          "Daten, die auf dem Gerät bleiben können, verlassen es nicht leichtfertig."
        ],
        [
          "Wenig Reibung",
          "Wichtige Aktionen bleiben kurz, damit Erfassen, Ordnen und Fokus keine neue Aufgabe werden."
        ],
        [
          "Desktop-nativ",
          "Entworfen für echte Windows-Abläufe, nicht als getarnte Web-Konsole."
        ],
        [
          "Zurückhaltend",
          "Die Oberfläche unterstützt Verständnis und Handlung ohne Lärm oder falsche Dringlichkeit."
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "Sieh, was der Arbeitstag mit deiner Energie macht.",
          "body": "Erfasse Energie in Sekunden und erkenne, wie Meetings, Aufgaben und Pausen deinen Zustand beeinflussen.",
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
          "title": "Aus Desktop-Chaos wird ein Arbeitsraum.",
          "body": "DeskHaven macht lokale Dateien suchbar, archivierbar und kontrollierbar.",
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
          "title": "Fokus ohne Druck.",
          "body": "Vorbereitung, Atmung, Vorwärtszählung und Idea Fridge helfen beim sanften Start.",
          "bullets": [
            "Vorwärts-Timer",
            "Atemführung",
            "Idea Fridge",
            "Lokale Privatsphäre"
          ]
        }
      ],
      "principlesTitle": "Weniger Unterbrechung, mehr Kontrolle.",
      "principlesBody": "SoloCraft stapelt keine Funktionen, sondern macht klare Szenarien vollständig nutzbar.",
      "productTitle": "Wähle das Produkt, das zu deinem aktuellen Arbeitszustand passt.",
      "studioTitle": "Kleine Werkzeuge für wiederholte Nutzung.",
      "studioBody": "Wichtiger als der erste laute Eindruck ist, ob ein Produkt ruhig in den Alltag passt.",
      "studioNote": "Jede Produktseite zeigt Funktionen, Screenshots, Datenschutz und Downloadwege."
    },
    "products": {
      "eyebrow": "Produktübersicht",
      "title": "Beginne mit dem Problem, das dir am meisten Aufmerksamkeit kostet.",
      "intro": "Das ist kein bloßer Produktkatalog. Es sind drei Einstiege in echte Desktop-Probleme: Energie, die verschwindet, Dateien, denen man nicht mehr vertraut, und Fokus, der zu schwer startet. Jede Produktseite zeigt echte Oberfläche, Preis, Datenschutz und Store-Pfad."
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "Energie-Dashboard für Arbeit",
        "description": "Für Menschen, die von Meetings, Kontextwechseln und unruhigen Routinen ausgelaugt werden. Erfasse Energie in Sekunden und erkenne, was sie wirklich nimmt.",
        "status": "Verfügbar"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "Desktop-Dateihafen",
        "description": "Für Desktops und Download-Ordner, die nie ganz zur Ruhe kommen. Bringe lokale Dateien in einen durchsuchbaren Arbeitsraum mit Beziehungen, Tresor und Wiederherstellung.",
        "status": "Verfügbar"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "Immersiver Fokus-Timer",
        "description": "Für Menschen, die schon vor dem Start Energie verlieren. Reduziere Reize, starte sanfter und parke störende Gedanken, ohne die Sitzung zu unterbrechen.",
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
      ]
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
      "galleryTitle": "Screenshots in der aktuellen Sprache.",
      "galleryIntro": "Screenshots wechseln mit der Website-Sprache. Sprachen ohne passende Bilder nutzen die nächstgelegene verfügbare Version, während der Text lokalisiert bleibt.",
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
        ]
      ]
    },
    "about": {
      "title": "Über SoloCraft",
      "intro": "SoloCraft ist Chicken Fillets unabhängiges Studio für ruhige, zurückhaltende und datenschutzbewusste Desktop-Tools.",
      "story": [
        "Ich mag Werkzeuge, die nicht die Bühne stehlen: Sie erscheinen bei Bedarf und treten danach zurück.",
        "EnergyFlow, DeskHaven und ADHD Focus Timer drehen sich um dieselbe Frage: Wie wird Desktop-Arbeit erholbarer, verständlicher und weniger stressig?",
        "Diese Website zeigt echte Oberflächen, Nutzungsszenarien, Datenschutz und Downloadwege ohne laute Verpackung."
      ],
      "philosophyTitle": "Designprinzipien",
      "philosophy": [
        [
          "Klein und vollständig",
          "Jedes Werkzeug fokussiert ein klares Szenario und vervollständigt den wichtigen Ablauf."
        ],
        [
          "Desktop-nativ",
          "Gebaut um echte Desktop-Arbeit herum."
        ],
        [
          "Zurückhaltend",
          "Visuelles Design dient dem Verständnis."
        ],
        [
          "Datenschutz zuerst",
          "Daten, die lokal bleiben können, verlassen das Gerät nicht leichtfertig."
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
  },
  "es": {
    "common": {
      "productPromise": "Promesa del producto",
      "experienceFlow": "Flujo de experiencia",
      "productIndex": "Índice de productos",
      "operatingPrinciples": "Principios",
      "designPrinciples": "Principios de diseño",
      "step": "Paso",
      "viewProducts": "Ver productos",
      "contact": "Contacto",
      "getUpdates": "Contactar al desarrollador",
      "microsoftStore": "Microsoft Store",
      "privacy": "Privacidad",
      "backToProducts": "Volver a productos"
    },
    "home": {
      "eyebrow": "Estudio independiente de software de escritorio",
      "title": "Herramientas tranquilas para trabajar con foco.",
      "intro": "SoloCraft es el hogar de productos de Chicken Fillet: pequeñas herramientas de Windows, sobrias, para registrar energía, proteger el foco y mantener el escritorio en calma.",
      "primary": "Explorar el enfoque",
      "secondary": "Ver productos",
      "currentProduct": "Mostrando",
      "notes": [
        [
          "Local primero",
          "Los datos que pueden quedarse en el dispositivo no deberían salir sin motivo."
        ],
        [
          "Baja fricción",
          "Las acciones clave se mantienen cortas para que registrar, ordenar y concentrarse no sean otra tarea."
        ],
        [
          "Nativo de escritorio",
          "Diseñado para flujos reales de Windows, no como un panel web disfrazado."
        ],
        [
          "Expresión sobria",
          "La interfaz ayuda a entender y actuar sin ruido ni urgencia falsa."
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "Ve qué le hace el trabajo a tu energía.",
          "body": "Registra energía en segundos y observa cómo reuniones, tareas y descansos afectan tu estado.",
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
          "title": "Convierte el escritorio en un espacio confiable.",
          "body": "DeskHaven da a los archivos locales un espacio privado, buscable, archivado y controlable.",
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
          "title": "Foco sin castigarte.",
          "body": "Preparación, respiración, conteo progresivo e Idea Fridge ayudan a empezar con menos presión.",
          "bullets": [
            "Timer progresivo",
            "Respiración",
            "Idea Fridge",
            "Privacidad local"
          ]
        }
      ],
      "principlesTitle": "Menos interrupción, más control.",
      "principlesBody": "SoloCraft no acumula funciones; completa un escenario claro de principio a fin.",
      "productTitle": "Elige el producto que encaja con tu estado de trabajo actual.",
      "studioTitle": "Herramientas pequeñas para uso repetido.",
      "studioBody": "Me importa más que un producto encaje en el día a día que su impacto inicial.",
      "studioNote": "Cada página muestra funciones, capturas, privacidad y opciones de descarga."
    },
    "products": {
      "eyebrow": "Índice de productos",
      "title": "Empieza por el problema que más atención te está costando.",
      "intro": "Esto no es un catálogo. Es una entrada a tres problemas reales de escritorio: energía que desaparece, archivos que cuesta volver a encontrar y foco que exige demasiado esfuerzo para empezar. Cada página muestra interfaz real, precio, privacidad y enlace de Store."
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "Panel de energía laboral",
        "description": "Para quienes terminan drenados por reuniones, cambios de contexto y rutinas irregulares. Registra energía en segundos y descubre qué la consume de verdad.",
        "status": "Disponible"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "Refugio de archivos de escritorio",
        "description": "Para escritorios y carpetas de descargas que nunca vuelven del todo al orden. Lleva los archivos locales a una mesa buscable, conectada y recuperable.",
        "status": "Disponible"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "Temporizador de foco inmersivo",
        "description": "Para quienes pierden energía antes de empezar. Reduce ruido, entra con suavidad y aparta ideas intrusivas sin romper la sesión.",
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
      ]
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
          "Baja fricción",
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
      "galleryTitle": "Capturas para el idioma actual.",
      "galleryIntro": "Las capturas cambian con el idioma del sitio. Los idiomas sin capturas propias usan la versión disponible más cercana, manteniendo el texto localizado.",
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
        ]
      ]
    },
    "about": {
      "title": "Acerca de SoloCraft",
      "intro": "SoloCraft es el estudio independiente de Chicken Fillet para herramientas de escritorio tranquilas, sobrias y centradas en la privacidad.",
      "story": [
        "Me gustan las herramientas que no roban el protagonismo: aparecen cuando hacen falta y vuelven al fondo al terminar.",
        "EnergyFlow, DeskHaven y ADHD Focus Timer giran alrededor de la misma pregunta: cómo hacer que el trabajo de escritorio sea más recuperable, comprensible y menos estresante.",
        "Este sitio muestra pantallas reales, casos de uso, privacidad y descarga sin envoltorios exagerados."
      ],
      "philosophyTitle": "Principios de diseño",
      "philosophy": [
        [
          "Pequeño y completo",
          "Cada herramienta se centra en un escenario claro y completa el flujo importante."
        ],
        [
          "Nativo de escritorio",
          "Construido alrededor de flujos reales de escritorio."
        ],
        [
          "Sobrio",
          "Lo visual sirve a la comprensión."
        ],
        [
          "Privacidad primero",
          "Los datos que pueden quedar locales no salen a la ligera."
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
  },
  "ru": {
    "common": {
      "productPromise": "Обещание продукта",
      "experienceFlow": "Сценарий работы",
      "productIndex": "Каталог продуктов",
      "operatingPrinciples": "Принципы",
      "designPrinciples": "Принципы дизайна",
      "step": "Шаг",
      "viewProducts": "Смотреть продукты",
      "contact": "Контакты",
      "getUpdates": "Связаться с разработчиком",
      "microsoftStore": "Microsoft Store",
      "privacy": "Политика конфиденциальности",
      "backToProducts": "Назад к продуктам"
    },
    "home": {
      "eyebrow": "Независимое ПО для Windows",
      "title": "Больше контроля над энергией, фокусом и локальными файлами.",
      "intro": "SoloCraft объединяет инструменты Chicken Fillet для рабочей энергии, мягкого фокуса и порядка в локальных файлах.",
      "primary": "Посмотреть подход",
      "secondary": "Смотреть продукты",
      "currentProduct": "Сейчас показано",
      "notes": [
        [
          "Локально сначала",
          "Данные, которые могут остаться на устройстве, не должны уходить без причины."
        ],
        [
          "Меньше трения",
          "Ключевые действия остаются короткими, чтобы учёт, порядок и фокус не стали новой работой."
        ],
        [
          "Для desktop",
          "Дизайн опирается на реальные рабочие процессы Windows."
        ],
        [
          "Сдержанность",
          "Интерфейс помогает понимать и действовать без шума и ложной срочности."
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "Поймите, как работа влияет на энергию.",
          "body": "Записывайте состояние за секунды и смотрите, как встречи, задачи и отдых меняют ваш день.",
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
          "title": "Превратите хаос на рабочем столе в систему.",
          "body": "DeskHaven даёт локальным файлам тихое, управляемое и восстанавливаемое рабочее пространство.",
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
          "title": "Фокус без наказания внимания.",
          "body": "Подготовка, дыхание, прямой таймер и Idea Fridge помогают начать мягче.",
          "bullets": [
            "Прямой таймер",
            "Дыхание",
            "Idea Fridge",
            "Локальная приватность"
          ]
        }
      ],
      "principlesTitle": "Меньше отвлечений, больше контроля.",
      "principlesBody": "SoloCraft не гонится за количеством функций, а доводит конкретный сценарий до целостного состояния.",
      "productTitle": "Выберите продукт под текущее состояние работы.",
      "studioTitle": "Небольшие инструменты для ежедневного использования.",
      "studioBody": "Важнее не громкий первый запуск, а спокойная интеграция в ежедневную работу.",
      "studioNote": "На страницах продуктов есть функции, скриншоты, приватность и пути загрузки."
    },
    "products": {
      "eyebrow": "Каталог продуктов",
      "title": "Начните с проблемы, которая забирает больше всего внимания.",
      "intro": "Это не просто каталог. Это три входа в реальные desktop-проблемы: энергия уходит незаметно, файлы теряют порядок, а фокус слишком трудно начать. На каждой странице есть реальный интерфейс, цена, приватность и путь в Store."
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "Панель рабочей энергии",
        "description": "Для тех, кого выматывают встречи, переключение контекста и неровный режим. Записывайте энергию за секунды и находите то, что действительно ее забирает.",
        "status": "Доступно"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "Убежище для файлов",
        "description": "Для рабочих столов и папок загрузок, которые постоянно распадаются. Верните локальные файлы в рабочее пространство с поиском, связями, хранилищем и восстановлением.",
        "status": "Доступно"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "Иммерсивный таймер фокуса",
        "description": "Для тех, кто теряет силы еще до начала задачи. Сначала снизьте шум, мягко войдите в фокус и отложите навязчивые мысли, не ломая сессию.",
        "status": "Доступно"
      }
    },
    "energyflow": {
      "eyebrow": "EnergyFlow / Панель рабочей энергии",
      "title": "Поймите, куда уходит энергия рабочего дня.",
      "intro": "Записывайте уровень энергии, контекст, источник и настроение за несколько секунд.",
      "status": "Доступно",
      "promiseTitle": "Not a to-do list. A record of your working energy.",
      "promise": "EnergyFlow does not judge whether you worked hard enough. It helps turn daily feelings into a timeline you can review, so patterns around recovery, drain, and schedule choices become easier to see.",
      "features": [
        [
          "Three-second logging",
          "Record energy level, work status, energy source, and mood with minimal friction."
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
      ]
    },
    "deskhaven": {
      "eyebrow": "DeskHaven / Убежище для файлов",
      "title": "Личный рабочий стол для каждого файла.",
      "intro": "DeskHaven организует локальные Windows-файлы через архив, карту связей, контроль приватности и тихую автоматизацию.",
      "status": "Доступно",
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
          "Low-friction",
          "Organization should happen naturally without becoming a new burden."
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
      "galleryTitle": "Скриншоты для текущего языка.",
      "galleryIntro": "Скриншоты меняются вместе с языком сайта. Если для языка нет отдельного набора, используется ближайшая доступная версия, а текст остаётся локализованным.",
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
        ]
      ]
    },
    "about": {
      "title": "О SoloCraft",
      "intro": "SoloCraft — независимая студия Chicken Fillet для спокойных, сдержанных и privacy-first настольных инструментов.",
      "story": [
        "Мне нравятся инструменты, которые не забирают сцену: они появляются, когда нужны, и уходят в фон после работы.",
        "EnergyFlow, DeskHaven и ADHD Focus Timer отвечают на общий вопрос: как сделать desktop-работу более восстановимой, понятной и менее стрессовой.",
        "Сайт показывает реальные экраны, сценарии, приватность и загрузку без громкой упаковки."
      ],
      "philosophyTitle": "Принципы дизайна",
      "philosophy": [
        [
          "Малое и цельное",
          "Каждый инструмент фокусируется на ясном сценарии и завершает важный поток."
        ],
        [
          "Desktop-native",
          "Создано вокруг реальной работы на desktop."
        ],
        [
          "Сдержанность",
          "Визуальный дизайн служит пониманию."
        ],
        [
          "Приватность сначала",
          "Данные, которые могут остаться локально, не уходят легко."
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
  },
  "pt": {
    "common": {
      "productPromise": "Promessa do produto",
      "experienceFlow": "Fluxo de experiência",
      "productIndex": "Índice de produtos",
      "operatingPrinciples": "Princípios",
      "designPrinciples": "Princípios de design",
      "step": "Etapa",
      "viewProducts": "Ver produtos",
      "contact": "Contato",
      "getUpdates": "Falar com o desenvolvedor",
      "microsoftStore": "Microsoft Store",
      "privacy": "Política de privacidade",
      "backToProducts": "Voltar aos produtos"
    },
    "home": {
      "eyebrow": "Software independente para Windows",
      "title": "Mais controle sobre energia, foco e arquivos locais.",
      "intro": "SoloCraft reúne ferramentas da Chicken Fillet para acompanhar energia de trabalho, reduzir atrito no foco e organizar arquivos locais.",
      "primary": "Ver a abordagem",
      "secondary": "Ver produtos",
      "currentProduct": "Em destaque",
      "notes": [
        [
          "Local primeiro",
          "Dados que podem ficar no dispositivo não devem sair sem motivo."
        ],
        [
          "Baixa fricção",
          "Ações importantes ficam curtas para que registrar, organizar e focar não virem outra tarefa."
        ],
        [
          "Nativo do desktop",
          "Desenhado para fluxos reais do Windows, não como painel web disfarçado."
        ],
        [
          "Expressão contida",
          "A interface ajuda a entender e agir sem ruído ou falsa urgência."
        ]
      ],
      "chapters": [
        {
          "id": "energyflow",
          "num": "01 / EnergyFlow",
          "title": "Veja o que o trabalho faz com sua energia.",
          "body": "Registre energia em segundos e observe como reuniões, tarefas e pausas afetam seu estado.",
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
          "title": "Transforme o desktop em uma mesa confiável.",
          "body": "DeskHaven dá aos arquivos locais um espaço privado, pesquisável, arquivável e controlável.",
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
          "title": "Foco sem punir a atenção.",
          "body": "Preparação, respiração, contagem progressiva e Idea Fridge ajudam a começar com menos pressão.",
          "bullets": [
            "Timer progressivo",
            "Respiração",
            "Idea Fridge",
            "Privacidade local"
          ]
        }
      ],
      "principlesTitle": "Menos interrupção, mais controle.",
      "principlesBody": "SoloCraft não empilha funções; completa um fluxo claro de trabalho.",
      "productTitle": "Escolha o produto que combina com seu estado de trabalho atual.",
      "studioTitle": "Ferramentas pequenas para uso diário.",
      "studioBody": "Importa mais encaixar-se calmamente no dia a dia do que impressionar no primeiro lançamento.",
      "studioNote": "Cada página mostra recursos, capturas, privacidade e caminhos de download."
    },
    "products": {
      "eyebrow": "Índice de produtos",
      "title": "Comece pelo problema que mais está custando atenção.",
      "intro": "Isto não é apenas um catálogo. É a entrada para três problemas reais no desktop: energia que desaparece, arquivos que perdem ordem e foco que exige esforço demais para começar. Cada página mostra interface real, preço, privacidade e caminho da Store."
    },
    "productCards": {
      "energyflow": {
        "title": "EnergyFlow",
        "category": "Painel de energia no trabalho",
        "description": "Para quem se esgota com reuniões, troca de contexto e rotinas irregulares. Registre energia em segundos e descubra o que realmente a consome.",
        "status": "Disponível"
      },
      "deskhaven": {
        "title": "DeskHaven",
        "category": "Refúgio de arquivos desktop",
        "description": "Para desktops e pastas de downloads que nunca voltam totalmente à ordem. Leve arquivos locais para uma mesa pesquisável, conectada e recuperável.",
        "status": "Disponível"
      },
      "adhd": {
        "title": "ADHD Focus Timer",
        "category": "Timer de foco imersivo",
        "description": "Para quem perde energia antes mesmo de começar. Reduza o ruído, entre no foco com suavidade e guarde pensamentos intrusivos sem quebrar a sessão.",
        "status": "Disponível"
      }
    },
    "energyflow": {
      "eyebrow": "EnergyFlow / Painel de energia",
      "title": "Entenda para onde vai sua energia de trabalho.",
      "intro": "Registre nível de energia, contexto, fonte e humor em poucos segundos.",
      "status": "Disponível",
      "promiseTitle": "Not a to-do list. A record of your working energy.",
      "promise": "EnergyFlow does not judge whether you worked hard enough. It helps turn daily feelings into a timeline you can review, so patterns around recovery, drain, and schedule choices become easier to see.",
      "features": [
        [
          "Three-second logging",
          "Record energy level, work status, energy source, and mood with minimal friction."
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
      ]
    },
    "deskhaven": {
      "eyebrow": "DeskHaven / Refúgio de arquivos",
      "title": "Uma mesa privada para cada arquivo.",
      "intro": "DeskHaven organiza arquivos locais do Windows com arquivo, mapa de relações, privacidade e automação tranquila.",
      "status": "Disponível",
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
          "Low-friction",
          "Organization should happen naturally without becoming a new burden."
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
      "galleryTitle": "Capturas para o idioma atual.",
      "galleryIntro": "As capturas mudam com o idioma do site. Idiomas sem capturas próprias usam a versão disponível mais próxima, mantendo o texto localizado.",
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
        ]
      ]
    },
    "about": {
      "title": "Sobre o SoloCraft",
      "intro": "SoloCraft é o estúdio independente da Chicken Fillet para ferramentas desktop calmas, discretas e privacy-first.",
      "story": [
        "Gosto de ferramentas que não roubam a cena: aparecem quando necessárias e voltam ao fundo depois.",
        "EnergyFlow, DeskHaven e ADHD Focus Timer respondem à mesma pergunta: como tornar o trabalho no desktop mais recuperável, compreensível e menos estressante.",
        "Este site mostra telas reais, casos de uso, privacidade e download sem embalagem exagerada."
      ],
      "philosophyTitle": "Princípios de design",
      "philosophy": [
        [
          "Pequeno e completo",
          "Cada ferramenta foca um cenário claro e conclui o fluxo essencial."
        ],
        [
          "Nativo do desktop",
          "Construído para fluxos reais de desktop."
        ],
        [
          "Contido",
          "O visual serve à compreensão."
        ],
        [
          "Privacidade primeiro",
          "Dados que podem ficar locais não saem levianamente."
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
  }
} as const;

export type SiteCopy = typeof siteCopy.en;

export function getSiteCopy(locale: Locale): SiteCopy {
  return (siteCopy[locale] ?? siteCopy.en) as SiteCopy;
}
