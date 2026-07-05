export const nav = {
  "home": "Home",
  "about": "About",
  "products": "Products",
  "contact": "Contact",
  "language": "Select language"
} as const;

export const copy = {
  "common": {
    "productPromise": "Product promise",
    "experienceFlow": "Experience flow",
    "productIndex": "Product entry",
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
    "productTitle": "Start where your day is leaking attention.",
    "studioTitle": "Small tools made for repeated use.",
    "studioBody": "I care more about whether a product fits quietly into daily work than whether it feels loud on first launch. Real screenshots, clear privacy notes, and verifiable behavior matter more than decoration.",
    "studioNote": "EnergyFlow, DeskHaven, and ADHD Focus Timer cover energy tracking, file organization, and low-resistance focus. Each product page shows features, screenshots, privacy notes, and download options directly."
  },
  "products": {
    "eyebrow": "Products",
    "title": "A quiet place for energy, files, and focus.",
    "intro": "EnergyFlow turns daily energy changes into a readable pattern, DeskHaven restores order to local files, and ADHD Focus Timer makes it easier to begin. Each product page includes real interface captures, pricing, privacy notes, and a Microsoft Store path."
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
    ],
    "gallery": {
      "eyebrow": "Real interface",
      "title": "See how EnergyFlow moves from quick logging to useful review.",
      "body": "The screenshots keep their natural interface proportions and show the real flow: daily logging, trend review, statistical analysis, and settings."
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
} as const;
