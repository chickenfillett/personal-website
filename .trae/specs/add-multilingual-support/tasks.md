# Tasks

## Task 1: 创建语言切换基础设施
- [x] SubTask 1.1: 创建翻译文件目录 `src/lib/i18n/`
- [x] SubTask 1.2: 创建中文翻译文件 `src/lib/i18n/zh.ts`
- [x] SubTask 1.3: 创建英文翻译文件 `src/lib/i18n/en.ts`
- [x] SubTask 1.4: 创建语言 Context 和 Hook `src/lib/i18n/context.tsx`
- [x] SubTask 1.5: 创建语言工具函数 `src/lib/i18n/utils.ts`

## Task 2: 翻译首页内容
- [x] SubTask 2.1: 翻译 Hero 区域（品牌名、标语）
- [x] SubTask 2.2: 翻译 Featured Product 区域（标签、产品名、描述、特性、按钮）
- [x] SubTask 2.3: 翻译 Philosophy 区域（标题、理念）
- [x] SubTask 2.4: 翻译 More Products 区域
- [x] SubTask 2.5: 翻译 CTA 区域
- [x] SubTask 2.6: 更新首页组件使用翻译函数

## Task 3: 翻译导航栏和页脚
- [x] SubTask 3.1: 翻译导航链接
- [x] SubTask 3.2: 添加语言切换按钮到 Navbar
- [x] SubTask 3.3: 翻译页脚内容

## Task 4: 翻译关于页面
- [x] SubTask 4.1: 翻译关于页所有文本
- [x] SubTask 4.2: 更新关于页组件使用翻译

## Task 5: 翻译联系页面
- [x] SubTask 5.1: 翻译联系页所有文本
- [x] SubTask 5.2: 更新联系页组件使用翻译

## Task 6: 翻译产品页面和产品详情
- [x] SubTask 6.1: 翻译产品列表页
- [x] SubTask 6.2: 翻译产品详情页面（ADHD Focus Timer）

## Task 7: 翻译隐私政策和 404 页面
- [x] SubTask 7.1: 翻译隐私政策页面
- [x] SubTask 7.2: 翻译 404 页面

## Task 8: 语言切换功能和根布局集成
- [x] SubTask 8.1: 在 RootLayout 中包裹 LanguageProvider
- [x] SubTask 8.2: 确保 SSR 兼容性（使用 next/dynamic 或 Client Component）
- [x] SubTask 8.3: 验证语言切换功能正常工作

## Task 9: 验证与构建
- [x] SubTask 9.1: 运行 lint 检查
- [x] SubTask 9.2: 运行构建检查
- [x] SubTask 9.3: 测试语言切换功能
- [x] SubTask 9.4: 测试浏览器语言自动检测

# Task Dependencies

- Task 2-7 依赖 Task 1
- Task 3 中的 Navbar 修改需要 Task 1.5 完成
- Task 8 依赖 Task 2-7
- Task 9 依赖 Task 8
