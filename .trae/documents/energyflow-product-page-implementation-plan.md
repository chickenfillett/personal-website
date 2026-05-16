# EnergyFlow 新产品页面实施计划

## 📋 项目概述

将新开发的 **EnergyFlow（精力管理桌面应用）** 添加到 Chicken Fillet 个人品牌官网，包括：
- 创建独立的产品详情页 `/products/energyflow`
- 更新首页展示区域
- 更新产品列表页
- 添加完整的中英文国际化支持
- 实现中英文图片自动切换功能

---

## 🎯 核心需求

### 1. 产品信息
- **产品名称**: EnergyFlow
- **产品类型**: 桌面精力管理追踪应用
- **技术栈**: Electron 35.x + SvelteKit 5 + Svelte 5
- **核心卖点**:
  - ✅ 3秒快速记录精力状态（5级精力等级系统）
  - ✅ 深色/浅色主题无缝切换
  - ✅ 桌面常驻、全局快捷键、一键收起
  - ✅ 专业级隐私保护（AES-256-GCM加密、反截屏、密码锁）
  - ✅ 智能数据分析引擎（Pearson相关分析、卡方检验、趋势预测）

### 2. 图片资源（共10张）

#### 中文版本图片（5张）
| 文件名 | 内容描述 | 使用场景 |
|--------|----------|----------|
| `ChatGPT Image 2026年5月16日 11_09_31.png` | 快速记录界面 | Hero区/功能介绍 |
| `ChatGPT Image 2026年5月16日 13_07_39.png` | 深浅主题切换 | 界面设计展示 |
| `ChatGPT Image 2026年5月16日 13_07_49.png` | 隐私保护设置 | 安全特性展示 |
| `ChatGPT Image 2026年5月16日 13_25_30.png` | 分析报告面板 | 数据洞察展示 |
| `ChatGPT Image 2026年5月16日 13_49_21.png` | 桌面常驻模式 | 交互特性展示 |

#### 英文版本图片（5张）
| 文件名 | 内容描述 | 使用场景 |
|--------|----------|----------|
| `ChatGPT Image 2026年5月16日 14_10_55.png` | Always on Desktop | Hero区/功能介绍 |
| `ChatGPT Image 2026年5月16日 14_18_48.png` | 3-Second Energy Log | 界面设计展示 |
| `ChatGPT Image 2026年5月16日 14_32_04.png` | Privacy Protection | 安全特性展示 |
| `ChatGPT Image 2026年5月16日 14_38_47.png` | Data Analytics Report | 数据洞察展示 |
| `ChatGPT Image 2026年5月16日 14_41_40.png` | Deep Focus Theme Switch | 交互特性展示 |

---

## 📁 文件结构规划

```
src/
├── app/
│   └── products/
│       └── energyflow/              # 新增产品目录
│           ├── page.tsx             # 产品详情主页
│           ├── privacy/             # 隐私政策页（可选）
│           │   └── page.tsx
│           └── refund/              # 退款政策页（可选）
│               └── page.tsx
├── lib/
│   └── i18n/
│       ├── en.ts                   # 更新英文翻译
│       └── zh.ts                   # 更新中文翻译
public/
└── photo/
    ├── energyflow-zh-1.png         # 重命名后的中文图片
    ├── energyflow-zh-2.png
    ├── energyflow-zh-3.png
    ├── energyflow-zh-4.png
    ├── energyflow-zh-5.png
    ├── energyflow-en-1.png         # 重命名后的英文图片
    ├── energyflow-en-2.png
    ├── energyflow-en-3.png
    ├── energyflow-en-4.png
    └── energyflow-en-5.png
```

---

## 🔧 实施步骤

### Phase 1: 资源准备与文件组织

#### Step 1.1: 移动和重命名图片
**操作内容:**
- 将10张图片从 `/workspace/src/` 移动到 `/workspace/public/photo/`
- 按照规范重命名图片文件，便于识别和管理：

```bash
# 中文图片
mv "/workspace/src/ChatGPT Image 2026年5月16日 11_09_31.png" /workspace/public/photo/energyflow-zh-1.png
mv "/workspace/src/ChatGPT Image 2026年5月16日 13_07_39.png" /workspace/public/photo/energyflow-zh-2.png
mv "/workspace/src/ChatGPT Image 2026年5月16日 13_07_49.png" /workspace/public/photo/energyflow-zh-3.png
mv "/workspace/src/ChatGPT Image 2026年5月16日 13_25_30.png" /workspace/public/photo/energyflow-zh-4.png
mv "/workspace/src/ChatGPT Image 2026年5月16日 13_49_21.png" /workspace/public/photo/energyflow-zh-5.png

# 英文图片
mv "/workspace/src/ChatGPT Image 2026年5月16日 14_10_55.png" /workspace/public/photo/energyflow-en-1.png
mv "/workspace/src/ChatGPT Image 2026年5月16日 14_18_48.png" /workspace/public/photo/energyflow-en-2.png
mv "/workspace/src/ChatGPT Image 2026年5月16日 14_32_04.png" /workspace/public/photo/energyflow-en-3.png
mv "/workspace/src/ChatGPT Image 2026年5月16日 14_38_47.png" /workspace/public/photo/energyflow-en-4.png
mv "/workspace/src/ChatGPT Image 2026年5月16日 14_41_40.png" /workspace/public/photo/energyflow-en-5.png
```

**验证:** 确认所有图片已正确移动且可访问

---

### Phase 2: 国际化翻译更新

#### Step 2.1: 更新英文翻译文件 (`en.ts`)
**新增内容:**

```typescript
// 在 products 对象中添加:
energyflow: {
  title: "EnergyFlow",
  description: "A desktop energy tracking app that helps you understand your energy patterns, identify drains, and optimize your daily performance.",
  details: "View Details"
},

// 新增 energyflowDetail 对象:
energyflowDetail: {
  hero: {
    title: "EnergyFlow",
    subtitle: "Your Workplace Energy Dashboard",
    description: "Track energy levels, discover patterns, and find your optimal performance zone with scientific analysis."
  },
  quickLog: {
    title: "3-Second Quick Log",
    description: "Record your energy state in just 3 seconds with a simple 5-level rating system.",
    features: {
      level: "5 Energy Levels",
      levelDesc: " — Drained, Tense, Calm, Good, Energized",
      status: "Current Status",
      statusDesc: " — At Work, In Meeting, On Break...",
      source: "Trigger Source",
      sourceDesc: " — What's affecting your energy?",
      emoji: "Mood Emoji",
      emojiDesc: " — How are you feeling right now?"
    }
  },
  themeSwitch: {
    title: "Deep Focus or Light Clarity",
    description: "Stay deeply focused in dark mode, feel refreshed in light mode. Switch anytime to match your mood and environment.",
    features: {
      darkMode: "Dark Mode",
      darkModeDesc: " — Deep focus, gentle on the eyes",
      lightMode: "Light Mode",
      lightModeDesc: " — Clear and bright, easy on the eyes"
    }
  },
  desktopAlwaysOn: {
    title: "Always on Your Desktop",
    description: "Quick-access floating icon, global hotkey support, one-tap minimize. Zero distraction, zero forgetfulness.",
    features: {
      floatingIcon: "Desktop Resident",
      floatingIconDesc: " — One-glance energy status",
      hotkey: "Quick Access Hotkey",
      hotkeyDesc: " — Summon instantly, log in seconds",
      minimize: "One-Tap Minimize",
      minimizeDesc: " — Back to desktop, stay undisturbed"
    }
  },
  analytics: {
    title: "Discover Energy Drains & Find Your Real Energy Black Holes",
    description: "Powered by Pearson correlation analysis and chi-square testing, scientifically identify what's really draining your energy.",
    features: {
      pearson: "Pearson Correlation",
      pearsonDesc: " — Scientific factor impact measurement",
      chiSquare: "Chi-Square Testing",
      chiSquareDesc: " — Statistical significance validation",
      trends: "Energy Trends",
      trendsDesc: " — Visualize day-by-day changes"
    }
  },
  privacy: {
    title: "Professional Privacy Protection",
    description: "Your energy data stays on your device, encrypted and protected by multiple layers of security.",
    features: {
      encryption: "Local Encrypted Storage",
      encryptionDesc: " — AES-256-GCM, data never leaves",
      antiCapture: "Tamper Protection",
      antiCaptureDesc: " — Prevent screenshot/content leaks",
      password: "Password Lock",
      passwordDesc: " — Multi-layer privacy safeguards"
    }
  },
  cta: {
    title: "Take Control of Your Energy",
    description: "Start tracking today and discover what powers you up and drains you down.",
    status: "Coming Soon",
    button: "Get Notified",
    privacy: "View Privacy Policy"
  }
}
```

#### Step 2.2: 更新中文翻译文件 (`zh.ts`)
**新增内容:**

```typescript
// 在 products 对象中添加:
energyflow: {
  title: "EnergyFlow",
  description: "一款专注于个人精力管理的桌面追踪应用，帮助你理解精力波动规律、识别消耗因素、发现恢复模式。",
  details: "查看详情"
},

// 新增 energyflowDetail 对象:
energyflowDetail: {
  hero: {
    title: "EnergyFlow",
    subtitle: "你的职场能量仪表盘",
    description: "追踪精力等级、发现波动规律、用科学分析方法找到你的最佳表现区间。"
  },
  quickLog: {
    title: "3秒打卡精力",
    description: "仅需3秒即可完成一次精力记录，采用直观的5级精力等级系统。",
    features: {
      level: "5级精力等级",
      levelDesc: " — 耗竭、紧张、平静、良好、充沛",
      status: "当前状态",
      statusDesc: " — 在岗上班、开会中、午休放松...",
      source: "触发来源",
      sourceDesc: " — 什么在影响你的精力？",
      emoji: "心情表情",
      emojiDesc: " — 此刻的状态..."
    }
  },
  themeSwitch: {
    title: "深浅随心切换",
    description: "深色沉浸专注，浅色清爽治愈。随时切换，陪伴你的每一天。",
    features: {
      darkMode: "深色模式",
      darkModeDesc: " — 沉浸专注，护眼舒适",
      lightMode: "浅色模式",
      lightModeDesc: " — 清爽明亮，轻松愉悦"
    }
  },
  desktopAlwaysOn: {
    title: "桌面常驻，灵感不打断",
    description: "快捷键一呼即出，记录完一键收起。零干扰，零遗忘。",
    features: {
      floatingIcon: "桌面常驻",
      floatingIconDesc: " — 一眼掌握状态",
      hotkey: "快捷键唤起",
      hotkeyDesc: " — 一呼即出，极速记录",
      minimize: "一键收起",
      minimizeDesc: " — 回归桌面，专注不散"
    }
  },
  analytics: {
    title: "数据洞察精力消耗，找出真正的能量黑洞",
    description: "基于Pearson相关分析和卡方检验，科学精准定位影响你精力的关键因素。",
    features: {
      pearson: "Pearson相关分析",
      pearsonDesc: " — 科学量化影响因素",
      chiSquare: "卡方检验",
      chiSquareDesc: " — 统计显著性验证",
      trends: "精力趋势图",
      trendsDesc: " — 可视化每日变化"
    }
  },
  privacy: {
    title: "专业隐私守护，数据藏在系统深处",
    description: "你的精力状态，只有你自己知道。多层安全防护，数据永不离开设备。",
    features: {
      encryption: "本地加密存储",
      encryptionDesc: " — AES-256-GCM，数据仅存本机",
      antiCapture: "反截屏保护",
      antiCaptureDesc: " — 防止内容泄露",
      password: "密码保护",
      passwordDesc: " — 多重隐私防护"
    }
  },
  cta: {
    title: "掌控你的精力节奏",
    description: "从今天开始追踪，发现什么让你充满能量，什么在悄悄消耗你。",
    status: "即将上线",
    button: "获取通知",
    privacy: "查看隐私政策"
  }
}
```

---

### Phase 3: 创建产品详情页

#### Step 3.1: 创建主产品页面 (`/products/energyflow/page.tsx`)
**页面结构（参考 ADHD Focus Timer 页面布局）：**

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";

export default function EnergyFlowPage() {
  const { locale, t } = useLanguage();

  // 图片路径映射（根据语言动态选择）
  const getImageSrc = (index: number) => 
    locale === 'zh' 
      ? `/photo/energyflow-zh-${index}.png`
      : `/photo/energyflow-en-${index}.png`;

  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <section>
        <h1>{t("energyflowDetail.hero.title")}</h1>
        <p>{t("energyflowDetail.hero.subtitle")}</p>
        <p>{t("energyflowDetail.hero.description")}</p>
      </section>

      {/* Section 2: Quick Log (图片1) */}
      <section>
        <Image src={getImageSrc(1)} alt="..." />
        <div>
          <h2>{t("energyflowDetail.quickLog.title")}</h2>
          <p>{t("energyflowDetail.quickLog.description")}</p>
          {/* Features list */}
        </div>
      </section>

      {/* Section 3: Theme Switch (图片2) */}
      <section>
        <Image src={getImageSrc(2)} alt="..." />
        {/* ... */}
      </section>

      {/* Section 4: Desktop Always-On (图片5) */}
      <section>
        <Image src={getImageSrc(5)} alt="..." />
        {/* ... */}
      </section>

      {/* Section 5: Analytics (图片4) */}
      <section>
        <Image src={getImageSrc(4)} alt="..." />
        {/* ... */}
      </section>

      {/* Section 6: Privacy (图片3) */}
      <section>
        <Image src={getImageSrc(3)} alt="..." />
        {/* ... */}
      </section>

      {/* CTA Section */}
      <section>
        {/* Call to action */}
      </section>
    </div>
  );
}
```

**关键特性实现:**
- ✅ 使用 `useLanguage()` hook 获取当前语言
- ✅ 动态生成图片路径（中文显示 `zh-*`，英文显示 `en-*`）
- ✅ 保持与 ADHD Focus Timer 页面一致的视觉风格
- ✅ 响应式布局（移动端/桌面端适配）

---

### Phase 4: 更新现有页面

#### Step 4.1: 更新首页 (`/app/page.tsx`)
**修改内容:**
1. 将 Featured Product 区域从 ADHD Focus Timer 改为 **EnergyFlow**（或保留ADHD作为Featured，新增EnergyFlow卡片）
2. 在 "More Products" 区域的第二个产品卡片位置替换为 EnergyFlow 信息

**建议方案:**
- 保留 ADHD Focus Timer 作为 Featured Product
- 将 Product Two 卡片更新为 EnergyFlow（移除 "Coming Soon" 标签或保留）

#### Step 4.2: 更新产品列表页 (`/products/page.tsx`)
**修改内容:**
- 第一个产品卡片保持为 ADHD Focus Timer
- 第二个产品卡片更新为 EnergyFlow（链接至 `/products/energyflow`）

---

### Phase 5: 测试与优化

#### Step 5.1: 功能测试清单
- [ ] 中英文切换时图片是否正确切换
- [ ] 所有图片是否正常加载显示
- [ ] 响应式布局在不同屏幕尺寸下表现
- [ ] 导航链接是否正确跳转
- [ ] 翻译文本是否完整无遗漏
- [ ] 页面滚动动画是否流畅

#### Step 5.2: 视觉一致性检查
- [ ] 与 ADHD Focus Timer 页面的风格统一
- [ ] 字体大小、间距、颜色与整体网站一致
- [ ] 卡片样式、按钮样式、边框效果一致
- [ ] 动画过渡效果自然流畅

#### Step 5.3: 性能优化
- [ ] 图片使用 Next.js Image 组件优化加载
- [ ] 确认图片尺寸合理（建议宽度800px左右）
- [ ] 检查页面加载速度

---

## 🎨 设计规范参考

### 配色方案（与现有网站一致）
- 背景: `#0a0a0a`
- 前景文字: `#f0f0f0`
- 次要文字: `#888888`
- 强调色: `#4a5568`
- 表面色: `#1a1a1a`
- 边框: `rgba(255, 255, 255, 0.05)`

### 排版规范
- 最大内容宽度: `1200px`
- 左右边距: 移动端 `24px`，桌面端 `48px-96px`
- 标题字号: `text-4xl md:text-6xl` (Hero)
- 正文字号: `text-lg md:text-xl`
- 行高: `leading-[1.75]`

### 组件样式
- 卡片: `.card-premium` 类
- 按钮: 边框按钮 `border border-white/20 px-6 py-3`
- 截图容器: `.screenshot-container` 类
- 动画: `.animate-fade-in`, `.hover-lift`

---

## 📝 注意事项

1. **图片命名规范**: 必须严格按照 `energyflow-{locale}-{number}.png` 格式命名
2. **翻译键命名**: 使用 `energyflowDetail.*` 前缀避免冲突
3. **语言切换逻辑**: 使用 `locale` 变量动态拼接图片路径
4. **SEO优化**: 确保 `<Image>` 组件包含有意义的 alt 属性
5. **可访问性**: 保持足够的颜色对比度，添加适当的 ARIA 标签

---

## ✅ 完成标准

- [ ] EnergyFlow 产品详情页可正常访问 (`/products/energyflow`)
- [ ] 中英文切换时所有图片正确显示对应语言版本
- [ ] 首页和产品列表页正确展示 EnergyFlow 产品信息
- [ ] 所有翻译文本完整准确
- [ ] 页面视觉效果与现有产品页面保持一致
- [ ] 响应式布局在各种设备上正常工作
- [ ] 无控制台错误或警告

---

## 🚀 后续可选扩展

1. **隐私政策页面**: 为 EnergyFlow 创建独立的隐私政策页
2. **退款政策页面**: 如果产品有付费功能，创建退款说明页
3. **FAQ页面**: 常见问题解答
4. **用户评价区**: 展示用户反馈（如有）
5. **下载/购买引导**: 当产品上线后添加下载按钮

---

*计划创建时间: 2026-01-17*
*预计实施时间: 2-3小时*
