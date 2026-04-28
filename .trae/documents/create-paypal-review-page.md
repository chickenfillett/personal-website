# 退款政策页面计划

## 任务目标

为 ADHD Focus Timer 应用创建一个退款政策页面，用于支付平台（如 PayPal）的商家审核。页面需要明确说明赞赏是自愿行为，同时保留特殊情况下的协商空间。

## 实现步骤

### 1. 创建退款政策页面文件

* 创建 `src/app/products/adhd-focus-timer/refund/page.tsx`

* 使用现有设计风格，保持与网站一致的暗色主题

* 使用 i18n 系统支持中英文切换

### 2. 添加翻译内容

在 `zh.ts` 和 `en.ts` 中添加 `productRefund` 节点，包含：

* 页面标题和简介

* 产品模式说明（免费下载 + 自愿赞赏）

* 赞赏是自愿支持行为，不是购买

* 原则上不支持退款

* 特殊情况处理（72小时内可协商）

* 处理时效承诺（48小时内回复）

* 联系邮箱

* 返回产品页按钮

### 3. 在页脚添加退款政策链接

* 在 Footer 组件中添加退款政策链接

* 链接指向 `/products/adhd-focus-timer/refund`

### 4. 验证

* 运行 lint 检查

* 运行 build 验证

* 测试中英文切换

## 文件变更

* 新增：`src/app/products/adhd-focus-timer/refund/page.tsx`

* 修改：`src/lib/i18n/zh.ts`

* 修改：`src/lib/i18n/en.ts`

* 修改：`src/app/components/Footer.tsx`（添加链接）

