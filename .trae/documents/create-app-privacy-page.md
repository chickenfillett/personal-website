# ADHD Focus Timer 独立隐私政策页面计划

## 任务目标
为 ADHD Focus Timer 应用创建一个独立的隐私政策页面，介绍应用的隐私政策。该页面将独立于网站通用隐私政策。

## 实现步骤

### 1. 创建隐私政策页面文件
- 创建 `src/app/products/adhd-focus-timer/privacy/page.tsx`
- 使用现有设计风格，保持与网站一致的暗色主题
- 使用 i18n 系统支持中英文切换

### 2. 添加翻译内容
在 `zh.ts` 和 `en.ts` 中添加 `productPrivacy` 节点，包含：
- 页面标题和简介
- 数据收集说明
- 数据存储说明
- 第三方服务说明（如有）
- 用户权利说明
- 联系我们

### 3. 在产品详情页添加隐私政策链接
- 在 ADHD Focus Timer 详情页的 CTA 区域添加隐私政策链接
- 链接指向 `/products/adhd-focus-timer/privacy`

### 4. 验证
- 运行 lint 检查
- 运行 build 验证
- 测试中英文切换

## 文件变更
- 新增：`src/app/products/adhd-focus-timer/privacy/page.tsx`
- 修改：`src/lib/i18n/zh.ts`
- 修改：`src/lib/i18n/en.ts`
- 修改：`src/app/products/adhd-focus-timer/page.tsx`（添加链接）
