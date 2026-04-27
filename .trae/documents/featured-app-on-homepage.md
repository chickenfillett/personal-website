# 首页产品展示优化计划

## 问题

当前首页结构中，ADHD Focus Timer 产品卡片位于第三个模块（理念区之后），需要滚动才能看到。用户进入首页后无法立即看到应用入口，缺少醒目的产品展示区域。

## 方案

在 Hero 区域和理念区之间，添加一个醒目的"Featured Product"展示模块，让 ADHD Focus Timer 成为首页第一屏就能看到的内容。

## 具体实现

### 新增模块：Featured Product（紧跟 Hero）

位置：Hero 区域下方，理念区域上方

布局：全宽横幅样式，左侧文字 + 右侧缩略图

内容：

* **左侧文字区**：

  * 小标签："Featured Product" 或 "产品"

  * 产品名："ADHD Focus Timer"

  * 一句话描述："专为 ADHD 人群设计的全屏沉浸式专注工具"

  * 关键特性标签（横向排列）："零惩罚设计" · "正向计时" · "全屏粒子" · "本地存储"

  * CTA 按钮："了解详情" → 跳转到 /products/adhd-focus-timer

* **右侧缩略图**：

  * 展示 捕获3.PNG（专注进行中截图）的缩小版本

  * 圆角容器包裹，与截图展示样式一致

  * 固定宽度，桌面端约 500px，移动端隐藏

### 修改模块：Products Preview（移至底部）

将原有的"即将推出"三卡片区域：

* 改为"更多产品"标题

* 保留 3 个卡片的布局

* 第一个卡片改为"查看更多产品"的链接到 /products

* 其余保持 Coming Soon 状态

### 调整后的首页结构

1. Hero（品牌名 + 标语）
2. **Featured Product（ADHD Focus Timer 醒目展示）** ← 新增
3. 理念区（保持原样）
4. 更多产品（原产品预告区，简化为入口）
5. CTA（保持原样）

## 样式要点

* Featured Product 区域背景使用 rgba(255,255,255,0.02) 区分层级

* 缩略图使用现有 screenshot-container 样式

* CTA 按钮使用现有 hover-lift 样式

* 移动端：缩略图隐藏，文字区居中显示

## 修改文件清单

* `src/app/page.tsx` — 添加 Featured Product 模块、调整模块顺序

## 验收标准

* [ ] 进入首页即可看到 ADHD Focus Timer 产品入口（无需滚动或最小滚动）

* [ ] Featured Product 区域醒目但不突兀

* [ ] 缩略图展示清晰可辨

* [ ] CTA 按钮可点击跳转到产品详情页

* [ ] 响应式布局正常

* [ ] 构建无错误

