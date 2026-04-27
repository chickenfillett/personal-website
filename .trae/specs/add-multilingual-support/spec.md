# 多语言支持 Spec

## Why

网站需要支持中英文双语切换，方便不同语言环境的用户浏览。通过右上角语言切换按钮和浏览器语言自动检测，提供无缝的多语言体验。

## What Changes

- 添加中英文语言切换功能
- 导航栏右上角添加语言切换按钮（EN/中）
- 根据浏览器语言自动选择初始语言
- 用户切换后记住偏好（localStorage）
- 所有页面内容提供中英文版本
- 语言不匹配时默认使用英文

## Impact

- 新增模块：语言切换上下文和翻译字典
- 受影响组件：Navbar（添加语言切换按钮）、所有页面（文本国际化）
- 新增配置：翻译文件目录 `src/lib/i18n/`

## ADDED Requirements

### Requirement: 语言切换功能

The system SHALL 提供以下语言切换功能：

1. **语言切换按钮**：
   - 位置：导航栏右上角，在页面链接右侧
   - 显示：当前语言的另一种语言名称（中文时显示"English"，英文时显示"中文"）
   - 样式：与其他导航链接一致的极简风格
   - 点击切换语言并重新渲染当前页面

2. **自动语言检测**：
   - 页面首次加载时检测浏览器语言（`navigator.language`）
   - 如果浏览器语言为中文（zh-CN、zh-TW、zh-HK 等），默认使用中文
   - 如果浏览器语言为其他语言，默认使用英文
   - 如果用户之前手动切换过语言，优先使用用户的语言偏好（localStorage）

3. **语言偏好存储**：
   - 用户切换语言后，将偏好存储到 localStorage
   - 下次访问时优先读取 localStorage 中的语言偏好
   - 如果 localStorage 中无记录，回退到浏览器语言检测

4. **支持的语言**：
   - 中文（zh-CN）
   - 英文（en）
   - 默认语言：英文

### Requirement: 翻译系统

The system SHALL 提供以下翻译基础设施：

1. **翻译文件结构**：
   - 目录：`src/lib/i18n/`
   - 文件：`zh.ts`（中文翻译）、`en.ts`（英文翻译）
   - 格式：TypeScript 对象，按页面/模块组织键值对

2. **翻译键命名规范**：
   - 格式：`页面.模块.键名`，如 `home.hero.title`
   - 示例：
     - `home.hero.title` → "Chicken Fillet"
     - `home.hero.subtitle` → "极简桌面工具的设计者" / "Designer of Minimal Desktop Tools"
     - `nav.home` → "首页" / "Home"
     - `about.intro.title` → "关于" / "About"

3. **语言上下文**：
   - 创建 React Context 提供当前语言和翻译函数
   - 提供 `t(key)` 函数用于获取翻译文本
   - 提供 `locale` 变量用于条件渲染

#### Scenario: 语言切换

- **WHEN** 用户点击导航栏的语言切换按钮
- **THEN** 语言在中英文之间切换
- **AND** 当前页面所有文本立即更新为新语言
- **AND** 偏好保存到 localStorage
- **AND** 语言切换按钮文字变为另一种语言

#### Scenario: 浏览器语言检测

- **WHEN** 用户首次访问网站（无 localStorage 记录）
- **AND** 浏览器语言为中文
- **THEN** 网站自动显示中文

- **WHEN** 用户首次访问网站（无 localStorage 记录）
- **AND** 浏览器语言为非中文（如 en-US、ja-JP 等）
- **THEN** 网站自动显示英文

### Requirement: 页面翻译覆盖

The system SHALL 为以下页面提供完整的中英文翻译：

1. **首页（Home）**：
   - Hero：品牌名、标语
   - Featured Product：标签、产品名、描述、特性标签、按钮
   - Philosophy：标题、理念描述、三项理念
   - More Products：标题、卡片内容
   - CTA：标题、描述、按钮

2. **导航栏（Navbar）**：
   - 所有页面链接文字

3. **页脚（Footer）**：
   - 品牌名、标语、链接、版权

4. **关于页面（About）**：
   - 标题、个人介绍、设计哲学、技术栈、CTA

5. **产品页面（Products）**：
   - 标题、描述、卡片内容

6. **联系页面（Contact）**：
   - 标题、描述、联系方式标签

7. **隐私政策（Privacy）**：
   - 标题、描述、各段落标题和内容

8. **产品详情（ADHD Focus Timer）**：
   - Hero、各截图模块标题和描述、CTA

9. **404 页面**：
   - 错误码、提示、返回按钮

## MODIFIED Requirements

### Requirement: 导航栏

原导航栏只包含页面链接，现需添加语言切换按钮。

**修改内容**：
- 在导航栏右侧添加语言切换按钮
- 按钮样式与现有导航链接一致
- 点击切换语言

## REMOVED Requirements

无
