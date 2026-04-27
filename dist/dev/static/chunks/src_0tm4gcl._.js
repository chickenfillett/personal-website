(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/i18n/zh.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zh",
    ()=>zh
]);
const zh = {
    nav: {
        home: "首页",
        about: "关于",
        products: "产品",
        contact: "联系"
    },
    home: {
        hero: {
            title: "Chicken Fillet",
            subtitle: "极简桌面工具的设计者"
        },
        featured: {
            label: "精选产品",
            name: "ADHD Focus Timer",
            description: "专为 ADHD 人群设计的全屏沉浸式专注工具",
            tags: {
                zero: "零惩罚设计",
                forward: "正向计时",
                particles: "全屏粒子",
                local: "本地存储"
            },
            cta: "了解详情"
        },
        philosophy: {
            title: "理念",
            intro: "去除一切非必要元素，让用户专注于任务本身。",
            items: {
                minimal: {
                    title: "极简",
                    description: "界面不堆砌功能，每个像素都有存在的理由。"
                },
                immersive: {
                    title: "沉浸",
                    description: "暗色调与克制的设计，减少视觉干扰与疲劳。"
                },
                practical: {
                    title: "实用",
                    description: "工具应当解决问题，而不是制造新的问题。"
                }
            }
        },
        products: {
            title: "更多产品",
            viewAll: "查看所有产品",
            browse: "浏览 →",
            product2: {
                title: "产品二",
                description: "为创作者设计的极简工具，让灵感不被界面打断。"
            },
            product3: {
                title: "产品三",
                description: "日常实用小工具，解决那些容易被忽略的小问题。"
            },
            comingSoon: "Coming Soon"
        },
        cta: {
            title: "关注未来发布",
            description: "有新消息时，我会在这里更新。",
            button: "联系我"
        }
    },
    about: {
        intro: {
            title: "关于",
            description: "Chicken Fillet 是一名独立软件开发者，专注于设计极简、沉浸的桌面工具。"
        },
        story: {
            p1: "我相信好的工具应该是隐形的。它们不抢占注意力，不制造噪音，只是在你需要的时候出现，完成任务后悄然退到背景里。这种信念来自于长期使用那些功能繁杂、界面喧闹的软件后的疲惫感。",
            p2: "我的产品方向很明确：桌面工具。不是平台，不是服务，是安装在电脑上、离线也能用的软件。我希望它们足够轻量，启动迅速，界面干净，让人愿意长期使用。",
            p3: "暗色调不是我的审美偏好，而是对长时间使用场景的尊重。减少视觉疲劳，降低屏幕亮度带来的干扰，让用户把精力集中在内容上——这才是我选择暗色的原因。"
        },
        philosophy: {
            title: "设计哲学",
            items: {
                minimal: {
                    title: "极简",
                    description: "去除一切非必要元素。如果某个功能不能显著改善核心体验，它就不应该存在。"
                },
                immersive: {
                    title: "沉浸",
                    description: "让用户专注于任务本身。没有弹窗打扰，没有红点焦虑，没有不必要的通知。"
                },
                restraint: {
                    title: "克制",
                    description: "功能不堆砌，每个特性都有存在的理由。少即是多，慢即是快。"
                },
                dark: {
                    title: "暗色",
                    description: "减少视觉疲劳，适合长时间使用。暗色不是风格，是对用户眼睛的尊重。"
                }
            }
        },
        tech: {
            title: "技术方向",
            items: [
                "桌面应用开发（Tauri / Electron）",
                "用户界面与交互设计",
                "跨平台兼容与性能优化",
                "开源工具链与自动化构建"
            ]
        },
        cta: {
            title: "对产品感兴趣？",
            description: "欢迎随时与我交流想法或提出建议。",
            button: "联系我"
        }
    },
    contact: {
        intro: {
            title: "联系",
            description: "如果你对产品有兴趣，或者有想法想交流，欢迎通过以下方式联系我。"
        },
        info: {
            title: "联系方式",
            email: "邮箱"
        }
    },
    products: {
        intro: {
            title: "产品",
            description: "正在开发中的桌面工具，将在完成后陆续发布。"
        },
        adhd: {
            title: "ADHD Focus Timer",
            description: "专为 ADHD 人群设计的全屏沉浸式专注工具，零惩罚设计，正向计时。",
            details: "查看详情"
        },
        comingSoon: "Coming Soon"
    },
    productDetail: {
        hero: {
            title: "ADHD Focus Timer",
            subtitle: "专为 ADHD 人群设计的全屏沉浸式专注工具",
            description: "零惩罚设计、正向计时、全屏粒子动效，让专注不再是一件需要意志力的事。"
        },
        intro: {
            title: "产品介绍",
            description: "ADHD Focus Timer 是一款低摩擦的专注工具。通过正向计时、可视化进度和零惩罚设计，帮助你轻松进入并维持心流状态。",
            steps: "使用只需三步：选择专注时长（5/10/15/25分钟）、点击 'Start Focus' 跟随呼吸引导、随时用 'Idea Fridge' 记录杂念。",
            credit: "由 chicken fillet 独立开发。"
        },
        interaction: {
            title: "低阻力交互",
            description: "无账户、无登录、无云端，打开即用。所有数据本地存储，保护隐私的同时降低使用门槛。",
            features: {
                duration: "时长选择",
                durationDesc: "— 5 / 10 / 15 / 25 分钟，自由选择",
                whiteNoise: "白噪音",
                whiteNoiseDesc: "— 溪流、瀑布、雨声三种音效，一键开启",
                breathing: "呼吸引导",
                breathingDesc: "— 36秒三循环呼吸引导，帮助进入心流",
                language: "多语言",
                languageDesc: "— EN/中 切换，适配不同用户"
            }
        },
        breathing: {
            title: "呼吸引导",
            description: "开始专注前，跟随呼吸光环的节奏进行 36 秒三循环呼吸。帮助你从繁忙状态平稳过渡到专注状态。"
        },
        focus: {
            title: "专注进行中",
            features: {
                forward: {
                    title: "正向计时",
                    description: "向前计时而非倒计时，消除时间压迫感。专注过程本身就是成就，没有'失败'。"
                },
                particles: {
                    title: "粒子动效",
                    description: "背景粒子随专注进程演化，视觉上感知时间流逝，让注意力自然留在屏幕上。"
                },
                progress: {
                    title: "进度可视化",
                    description: "渐变发光进度条，蓝绿色块从左向右延伸，直观展示专注进度。"
                }
            }
        },
        ideaFridge: {
            title: "想法冰箱",
            description: "专注时脑中冒出杂念？不用强迫自己'不要想那件事'。打开想法冰箱，把它暂存起来，大脑就能放下。",
            features: {
                text: "文字输入",
                textDesc: "— 快速打字记录",
                voice: "语音输入",
                voiceDesc: "— 麦克风录音，不用打字",
                history: "历史列表",
                historyDesc: "— 专注后回顾所有暂存想法"
            }
        },
        achievement: {
            title: "成就反馈",
            description: "专注完成后，系统会展示你的累计专注次数和总时长。正向激励，让每一次专注都成为积累。"
        },
        privacy: {
            title: "隐私优先",
            description: "本应用无需账户或登录。所有专注记录、想法冰箱内容和偏好设置都本地存储在你的设备上。我们不收集、上传或分享任何个人信息。",
            features: {
                offline: "完全离线",
                offlineDesc: "— 无需互联网连接即可使用",
                local: "数据本地",
                localDesc: "— 你的数据只属于你",
                minimal: "极简设计",
                minimalDesc: "— 一个页面、一个目标，无干扰元素"
            }
        },
        cta: {
            title: "开始你的第一次专注",
            description: "无需注册，打开即用。你的专注，由你掌控。",
            status: "即将发布",
            button: "获取发布通知",
            privacy: "查看隐私政策"
        }
    },
    privacy: {
        intro: {
            title: "隐私政策",
            description: "本页面说明 Chicken Fillet 如何收集、使用和保护你的信息。"
        },
        sections: {
            collection: {
                title: "信息收集",
                description: "当你通过联系表单发送消息时，我们会收集你提供的姓名、邮箱地址和消息内容。这些信息仅用于回复你的询问，不会用于其他目的。"
            },
            usage: {
                title: "信息使用",
                description: "我们收集的信息仅用于与你沟通。我们不会将你的信息出售、出租或分享给第三方，除非法律要求。"
            },
            security: {
                title: "数据安全",
                description: "我们采取合理的技术措施保护你的信息不被未经授权的访问、使用或泄露。"
            },
            cookies: {
                title: "Cookie",
                description: "本网站不使用 Cookie 或类似的跟踪技术。"
            },
            updates: {
                title: "政策更新",
                description: "我们可能会不时更新本隐私政策。更新后的政策将发布在此页面，请定期查看。"
            },
            contact: {
                title: "联系我们",
                description: "如果你对本隐私政策有任何疑问，请通过联系页面与我们取得联系。"
            }
        }
    },
    notFound: {
        code: "404",
        message: "页面不存在",
        button: "返回首页"
    },
    productPrivacy: {
        intro: {
            title: "隐私政策",
            description: "本页面介绍 ADHD Focus Timer 如何处理你的数据。"
        },
        sections: {
            localStorage: {
                title: "本地存储",
                description: "所有专注记录、想法冰箱内容和偏好设置都存储在你设备本地的浏览器存储中。我们不会将任何数据上传到服务器。"
            },
            noCloud: {
                title: "无需云端",
                description: "本应用完全离线运行，无需互联网连接。所有数据仅存在于你的设备上。"
            },
            noAccount: {
                title: "无需账户",
                description: "使用本应用无需注册账户、提供邮箱或任何个人信息。打开即用。"
            },
            ideaFridge: {
                title: "想法冰箱",
                description: "你在想法冰箱中暂存的文字和语音记录仅保存在本地。大脑放下这些想法后，你可以随时删除这些记录。"
            },
            dataControl: {
                title: "数据控制",
                description: "你可以通过清除浏览器数据来删除所有本地存储的内容。我们无法访问这些数据。"
            },
            contact: {
                title: "联系我们",
                description: "如果你对隐私政策有任何疑问，欢迎通过联系页面与我们取得联系。"
            }
        },
        backButton: "返回产品页"
    },
    footer: {
        name: "Chicken Fillet",
        subtitle: "极简桌面工具的设计者",
        about: "关于",
        products: "产品",
        contact: "联系",
        privacy: "隐私政策",
        copyright: "版权所有。"
    },
    language: {
        switchToEnglish: "English",
        switchToChinese: "中文"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/en.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "en",
    ()=>en
]);
const en = {
    nav: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact"
    },
    home: {
        hero: {
            title: "Chicken Fillet",
            subtitle: "Designer of Minimal Desktop Tools"
        },
        featured: {
            label: "Featured Product",
            name: "ADHD Focus Timer",
            description: "A fullscreen immersive focus tool designed for people with ADHD",
            tags: {
                zero: "Zero Punishment",
                forward: "Forward Timing",
                particles: "Full-screen Particles",
                local: "Local Storage"
            },
            cta: "Learn More"
        },
        philosophy: {
            title: "Philosophy",
            intro: "Remove everything unnecessary, let users focus on the task itself.",
            items: {
                minimal: {
                    title: "Minimal",
                    description: "No feature overload, every pixel has a reason to exist."
                },
                immersive: {
                    title: "Immersive",
                    description: "Dark tones and restrained design reduce visual distraction and fatigue."
                },
                practical: {
                    title: "Practical",
                    description: "Tools should solve problems, not create new ones."
                }
            }
        },
        products: {
            title: "More Products",
            viewAll: "View All Products",
            browse: "Browse →",
            product2: {
                title: "Product Two",
                description: "A minimal tool for creators, letting inspiration flow without interface interruption."
            },
            product3: {
                title: "Product Three",
                description: "Daily utility tools solving small problems that often go unnoticed."
            },
            comingSoon: "Coming Soon"
        },
        cta: {
            title: "Stay Tuned",
            description: "I'll update here when there's news.",
            button: "Contact Me"
        }
    },
    about: {
        intro: {
            title: "About",
            description: "Chicken Fillet is an independent software developer focused on designing minimal, immersive desktop tools."
        },
        story: {
            p1: "I believe good tools should be invisible. They don't grab attention or create noise — they just appear when you need them, and quietly recede into the background after the task is done. This belief comes from the exhaustion of using feature-bloated, noisy software for too long.",
            p2: "My product direction is clear: desktop tools. Not platforms, not services — software you install on your computer and use offline. I want them to be lightweight, fast to launch, with clean interfaces that people are willing to use long-term.",
            p3: "Dark mode isn't an aesthetic preference — it's respect for long usage sessions. Reducing visual fatigue, minimizing screen brightness interference, and letting users focus on their content — that's why I chose dark."
        },
        philosophy: {
            title: "Design Philosophy",
            items: {
                minimal: {
                    title: "Minimal",
                    description: "Remove all unnecessary elements. If a feature doesn't significantly improve the core experience, it shouldn't exist."
                },
                immersive: {
                    title: "Immersive",
                    description: "Let users focus on the task itself. No popup interruptions, no red-dot anxiety, no unnecessary notifications."
                },
                restraint: {
                    title: "Restraint",
                    description: "No feature bloat, every feature has a reason to exist. Less is more, slow is fast."
                },
                dark: {
                    title: "Dark",
                    description: "Reduce visual fatigue for extended use. Dark isn't a style — it's respect for users' eyes."
                }
            }
        },
        tech: {
            title: "Technical Direction",
            items: [
                "Desktop application development (Tauri / Electron)",
                "User interface and interaction design",
                "Cross-platform compatibility and performance optimization",
                "Open-source toolchains and automated build"
            ]
        },
        cta: {
            title: "Interested in my products?",
            description: "Feel free to share ideas or suggestions anytime.",
            button: "Contact Me"
        }
    },
    contact: {
        intro: {
            title: "Contact",
            description: "If you're interested in my products or have ideas to share, feel free to reach out through the following channels."
        },
        info: {
            title: "Contact Info",
            email: "Email"
        }
    },
    products: {
        intro: {
            title: "Products",
            description: "Desktop tools currently in development, to be released upon completion."
        },
        adhd: {
            title: "ADHD Focus Timer",
            description: "A fullscreen immersive focus tool designed for people with ADHD, featuring zero-punishment design and forward timing.",
            details: "View Details"
        },
        comingSoon: "Coming Soon"
    },
    productDetail: {
        hero: {
            title: "ADHD Focus Timer",
            subtitle: "A fullscreen immersive focus tool designed for people with ADHD",
            description: "Zero-punishment design, forward timing, and full-screen particle effects — making focus no longer a battle of willpower."
        },
        intro: {
            title: "Introduction",
            description: "ADHD Focus Timer is a low-friction focus tool. Through forward timing, visual progress, and zero-punishment design, it helps you easily enter and maintain a flow state.",
            steps: "Just three steps: choose your focus duration (5/10/15/25 min), click 'Start Focus' and follow the breathing guide, then use 'Idea Fridge' anytime to record distractions.",
            credit: "Independently developed by chicken fillet."
        },
        interaction: {
            title: "Low-Friction Interaction",
            description: "No account, no login, no cloud — open and use immediately. All data stored locally, protecting privacy while lowering the barrier to entry.",
            features: {
                duration: "Duration",
                durationDesc: " — 5 / 10 / 15 / 25 minutes, freely selectable",
                whiteNoise: "White Noise",
                whiteNoiseDesc: " — Stream, waterfall, rain sounds, one click to enable",
                breathing: "Breathing Guide",
                breathingDesc: " — 36-second three-cycle breathing to enter flow",
                language: "Multi-language",
                languageDesc: " — EN/中 toggle, adaptable for different users"
            }
        },
        breathing: {
            title: "Breathing Guide",
            description: "Before starting focus, follow the breathing halo's rhythm for 36 seconds of three-cycle breathing. Helps you transition smoothly from a busy state to a focused state."
        },
        focus: {
            title: "Focus Session",
            features: {
                forward: {
                    title: "Forward Timing",
                    description: "Forward counting instead of countdown eliminates time pressure. The focus process itself is the achievement — there is no 'failure'."
                },
                particles: {
                    title: "Particle Effects",
                    description: "Background particles evolve with focus progress, visually perceiving the passage of time and keeping attention naturally on screen."
                },
                progress: {
                    title: "Visual Progress",
                    description: "Gradient glowing progress bar with blue-green fill extending left to right, intuitively showing focus progress."
                }
            }
        },
        ideaFridge: {
            title: "Idea Fridge",
            description: "Got distractions during focus? Don't force yourself to 'not think about it.' Open the Idea Fridge, park it there, and your mind can let go.",
            features: {
                text: "Text Input",
                textDesc: " — Quick typing to record",
                voice: "Voice Input",
                voiceDesc: " — Microphone recording, no typing needed",
                history: "History List",
                historyDesc: " — Review all parked ideas after focus"
            }
        },
        achievement: {
            title: "Achievement Feedback",
            description: "After completing a focus session, the system shows your cumulative focus count and total duration. Positive reinforcement, making every focus session count."
        },
        privacy: {
            title: "Privacy First",
            description: "This app requires no account or login. All focus records, idea fridge content, and preferences are stored locally on your device. We do not collect, upload, or share any personal information.",
            features: {
                offline: "Fully Offline",
                offlineDesc: " — No internet connection required",
                local: "Local Data",
                localDesc: " — Your data belongs only to you",
                minimal: "Minimal Design",
                minimalDesc: " — One page, one goal, no distractions"
            }
        },
        cta: {
            title: "Start Your First Focus Session",
            description: "No registration needed, open and use. Your focus, your control.",
            status: "Coming Soon",
            button: "Get Notified",
            privacy: "View Privacy Policy"
        }
    },
    privacy: {
        intro: {
            title: "Privacy Policy",
            description: "This page explains how Chicken Fillet collects, uses, and protects your information."
        },
        sections: {
            collection: {
                title: "Information Collection",
                description: "When you send a message through the contact form, we collect your name, email address, and message content. This information is only used to respond to your inquiry and will not be used for other purposes."
            },
            usage: {
                title: "Information Usage",
                description: "The information we collect is only used to communicate with you. We will not sell, rent, or share your information with third parties unless required by law."
            },
            security: {
                title: "Data Security",
                description: "We take reasonable technical measures to protect your information from unauthorized access, use, or disclosure."
            },
            cookies: {
                title: "Cookies",
                description: "This website does not use cookies or similar tracking technologies."
            },
            updates: {
                title: "Policy Updates",
                description: "We may update this privacy policy from time to time. Updated policies will be posted on this page. Please check periodically."
            },
            contact: {
                title: "Contact Us",
                description: "If you have any questions about this privacy policy, please contact us through the contact page."
            }
        }
    },
    notFound: {
        code: "404",
        message: "Page Not Found",
        button: "Back to Home"
    },
    productPrivacy: {
        intro: {
            title: "Privacy Policy",
            description: "This page explains how ADHD Focus Timer handles your data."
        },
        sections: {
            localStorage: {
                title: "Local Storage",
                description: "All focus records, Idea Fridge content, and preferences are stored in your device's local browser storage. We do not upload any data to servers."
            },
            noCloud: {
                title: "No Cloud Required",
                description: "This app runs completely offline without an internet connection. All data exists only on your device."
            },
            noAccount: {
                title: "No Account Required",
                description: "No registration, email, or personal information is needed to use this app. Open and start using immediately."
            },
            ideaFridge: {
                title: "Idea Fridge",
                description: "Text and voice notes stored in Idea Fridge are saved locally only. Once your mind has let go of these thoughts, you can delete them anytime."
            },
            dataControl: {
                title: "Data Control",
                description: "You can delete all local storage by clearing your browser data. We have no access to this data."
            },
            contact: {
                title: "Contact Us",
                description: "If you have any questions about this privacy policy, feel free to reach out through the contact page."
            }
        },
        backButton: "Back to Product"
    },
    footer: {
        name: "Chicken Fillet",
        subtitle: "Designer of Minimal Desktop Tools",
        about: "About",
        products: "Products",
        contact: "Contact",
        privacy: "Privacy Policy",
        copyright: "All rights reserved."
    },
    language: {
        switchToEnglish: "English",
        switchToChinese: "中文"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$zh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/zh.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/en.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const translations = {
    zh: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$zh$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zh"],
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["en"]
};
function getNestedValue(obj, key) {
    const keys = key.split(".");
    let current = obj;
    for (const k of keys){
        if (Array.isArray(current)) {
            const index = parseInt(k, 10);
            if (!isNaN(index) && index >= 0 && index < current.length) {
                const item = current[index];
                if (typeof item === "string") return item;
            }
            return key;
        }
        if (typeof current === "object" && current !== null && k in current) {
            current = current[k];
        } else {
            return key;
        }
    }
    return typeof current === "string" ? current : key;
}
function detectLocale() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const saved = localStorage.getItem("locale");
    if (saved === "zh" || saved === "en") return saved;
    const browserLang = navigator.language || navigator.languages?.[0] || "";
    if (browserLang.toLowerCase().startsWith("zh")) return "zh";
    return "en";
}
function LanguageProvider({ children }) {
    _s();
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LanguageProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                return detectLocale();
            }
            //TURBOPACK unreachable
            ;
        }
    }["LanguageProvider.useState"]);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[setLocale]": (newLocale)=>{
            setLocaleState(newLocale);
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("locale", newLocale);
            }
        }
    }["LanguageProvider.useCallback[setLocale]"], []);
    const toggleLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[toggleLocale]": ()=>{
            setLocale(locale === "zh" ? "en" : "zh");
        }
    }["LanguageProvider.useCallback[toggleLocale]"], [
        locale,
        setLocale
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[t]": (key)=>{
            return getNestedValue(translations[locale], key);
        }
    }["LanguageProvider.useCallback[t]"], [
        locale
    ]);
    const value = {
        locale,
        setLocale,
        t,
        toggleLocale
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/i18n/context.tsx",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
_s(LanguageProvider, "eYVJVUgHTew5jYKeEp8QuEa2gqc=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { locale, toggleLocale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const navLinks = [
        {
            href: "/",
            label: t("nav.home")
        },
        {
            href: "/about",
            label: t("nav.about")
        },
        {
            href: "/products",
            label: t("nav.products")
        },
        {
            href: "/contact",
            label: t("nav.contact")
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "max-w-[1200px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-foreground font-medium tracking-tight",
                    children: "Chicken Fillet"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Navbar.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex items-center gap-6 md:gap-8",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `text-sm transition-colors duration-200 ${pathname === link.href ? "text-foreground" : "text-muted hover:text-foreground"}`,
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Navbar.tsx",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/src/app/components/Navbar.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleLocale,
                                className: "text-sm text-muted hover:text-foreground transition-colors duration-200 border border-white/10 px-3 py-1 hover:border-white/20",
                                children: locale === "zh" ? "English" : "中文"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Navbar.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Navbar.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Navbar.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Navbar, "uqtFGyRqABeWuWPPEeJhTWNY9Pw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Footer() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1200px] mx-auto px-6 md:px-12 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground font-medium",
                                    children: t("footer.name")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-muted text-sm",
                                    children: t("footer.subtitle")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "text-muted text-sm hover:text-foreground transition-colors duration-200",
                                    children: t("footer.about")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/products",
                                    className: "text-muted text-sm hover:text-foreground transition-colors duration-200",
                                    children: t("footer.products")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "text-muted text-sm hover:text-foreground transition-colors duration-200",
                                    children: t("footer.contact")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    className: "text-muted text-sm hover:text-foreground transition-colors duration-200",
                                    children: t("footer.privacy")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 pt-6 border-t border-white/5 text-muted text-xs",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        t("footer.name"),
                        ". ",
                        t("footer.copyright")
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Footer.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Footer.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(Footer, "ot2YhC7pP10gRrIouBKIa40vomw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/BackgroundGlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function BackgroundGlow() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none z-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px] animate-glow-1",
                style: {
                    background: "radial-gradient(circle, #2a3a4a 0%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/BackgroundGlow.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[100px] animate-glow-2",
                style: {
                    background: "radial-gradient(circle, #2a4a3a 0%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/BackgroundGlow.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[700px] h-[700px] rounded-full opacity-[0.03] blur-[140px] animate-glow-3",
                style: {
                    background: "radial-gradient(circle, #3a2a4a 0%, transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/BackgroundGlow.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/BackgroundGlow.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = BackgroundGlow;
var _c;
__turbopack_context__.k.register(_c, "BackgroundGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0tm4gcl._.js.map