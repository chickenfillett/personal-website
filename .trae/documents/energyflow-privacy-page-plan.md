# EnergyFlow 隐私政策页面实施计划

## 目标
为 EnergyFlow 产品创建独立的隐私政策页面，路由为 `/products/energyflow/privacy`，遵循 ADHD Focus Timer 隐私政策页面的模板和代码风格。

## 参考模板
- 页面组件：`src/app/products/adhd-focus-timer/privacy/page.tsx`
- i18n 键前缀：`productPrivacy.*`（ADHD），新建 `energyflowPrivacy.*`（EnergyFlow）

## 实施步骤

### Step 1: 创建隐私政策页面组件
- **文件**：`src/app/products/energyflow/privacy/page.tsx`
- **操作**：新建文件，参照 ADHD Focus Timer 隐私政策页面模板
- **页面结构**：
  1. 标题区（intro section）：标题 + 描述
  2. 内容区（sections）：6 个章节
     - 本地加密存储（AES-256-GCM）
     - 无需云端同步
     - 无需账户注册
     - 反截屏保护
     - 数据控制与导出
     - 联系我们
  3. 返回按钮区：链接回 `/products/energyflow`

### Step 2: 添加英文翻译
- **文件**：`src/lib/i18n/en.ts`
- **操作**：在文件末尾（`energyflowDetail` 对象之后）新增 `energyflowPrivacy` 对象
- **键结构**：
  ```
  energyflowPrivacy.intro.title / description
  energyflowPrivacy.sections.encryptedStorage.title / description
  energyflowPrivacy.sections.noCloud.title / description
  energyflowPrivacy.sections.noAccount.title / description
  energyflowPrivacy.sections.antiCapture.title / description
  energyflowPrivacy.sections.dataControl.title / description
  energyflowPrivacy.sections.contact.title / description
  energyflowPrivacy.backButton
  ```

### Step 3: 添加中文翻译
- **文件**：`src/lib/i18n/zh.ts`
- **操作**：在文件末尾新增对应的 `energyflowPrivacy` 中文翻译

### Step 4: 更新产品详情页 CTA 链接
- **文件**：`src/app/products/energyflow/page.tsx`
- **操作**：在 CTA section 中添加"查看隐私政策"链接，指向 `/products/energyflow/privacy`
- **当前状态**：`energyflowDetail.cta.privacy` 翻译键已存在，但页面中未使用该键渲染链接

### Step 5: 验证
- 运行 `npm run build` 确认无编译错误
- 检查页面路由、i18n 切换和链接跳转是否正常
