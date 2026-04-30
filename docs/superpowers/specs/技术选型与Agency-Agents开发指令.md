# BeeFintech 官网升级技术选型与 Agency-Agents 开发指令

## 1. 文档用途

本文档用于给运营同学和 Codex Agency-Agents 对齐技术执行口径。

运营同学不需要理解所有技术细节，只需要将本文档与 `SPEC需求文档.md` 一起交给 Codex Agency-Agents，AI 开发团队即可基于统一技术选型拆解任务、生成执行规划并推进开发。

## 2. 项目目标

将 BeeFintech 官网从静态品牌展示页面升级为具备实际服务能力的保险科技 Web 平台。

核心功能包括：

1. 官网首页重构
2. 品牌与服务能力展示
3. 预约演示表单
4. 分红达成率查询工具
5. AI Chatbot 能力展示
6. AI 自动生成计划书能力展示
7. 测试说明、AI 协作记录、复盘总结等项目文档

## 3. 推荐技术选型

### 3.1 前端技术

推荐使用：

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react

选择理由：

- Next.js 适合官网、落地页、工具页和轻量 API 一体化开发。
- React 生态成熟，Codex 生成和维护代码更稳定。
- TypeScript 可以减少字段、表单、数据结构错误。
- Tailwind CSS 适合快速构建响应式页面。
- shadcn/ui 可以快速搭建表单、按钮、卡片、弹窗、表格等业务组件。
- lucide-react 用于图标，保证界面统一。

### 3.2 后端技术

第一阶段推荐使用：

- Next.js Route Handlers
- Supabase PostgreSQL

用途：

- 处理预约演示表单提交
- 提供分红达成率查询接口
- 将预约演示数据写入 Supabase
- 从 Supabase 查询分红达成率数据

选择理由：

- 不需要单独搭建独立后端项目。
- 前后端可以放在同一个仓库，降低协作复杂度。
- 适合短周期交付和 Vercel 部署。
- Supabase 自带可视化数据后台，运营同学可以查看、编辑、导入数据。
- 分红达成率和预约演示都属于结构化表格数据，适合用 PostgreSQL 管理。

### 3.3 数据方案

第一阶段推荐直接使用：

- Supabase PostgreSQL

建议创建两张核心数据表：

- `dividend_rates`：保存分红达成率数据
- `demo_requests`：保存预约演示提交记录

选择理由：

- 不使用静态 JSON / CSV 作为最终数据方案，避免后续手动改文件。
- Supabase 是托管 PostgreSQL，不需要团队自己搭数据库服务器。
- Supabase 自带可视化后台，运营同学可以直接查看、编辑、导入数据。
- Next.js 有成熟的 Supabase 集成方式，Codex 更容易生成稳定代码。
- 分红达成率查询工具本质是表格数据查询，PostgreSQL 更适合维护和扩展。

建议数据表字段：

```txt
dividend_rates
  id                  uuid
  insurance_company   text
  product_name        text
  currency            text
  year                integer
  achievement_rate    numeric
  source              text
  updated_at          timestamp
  created_at          timestamp

demo_requests
  id                  uuid
  name                text
  company             text
  contact             text
  email               text
  role                text
  interested_service  text
  message             text
  status              text
  created_at          timestamp
```

### 3.4 部署方案

推荐使用：

- Vercel

选择理由：

- Vercel 对 Next.js 支持完整。
- GitHub 连接后可以自动部署。
- 适合展示官网、工具页和轻量 API。
- 方便团队提交代码后快速预览效果。

### 3.5 代码管理

推荐使用：

- GitHub

建议分支：

- `main`
- `dev`
- `feature/homepage`
- `feature/dividend-tool`
- `docs/spec-plan`

要求：

- 所有代码和文档统一放在 GitHub。
- 每位成员至少有独立 commit 记录。
- 文档、数据、页面、测试可以拆给不同成员提交。

## 4. 推荐项目结构

```txt
beefintech-web/
  app/
    page.tsx
    demo/
      page.tsx
    dividend-tool/
      page.tsx
    api/
      demo-request/
        route.ts
      dividend/
        route.ts
  components/
    site-header.tsx
    site-footer.tsx
    hero-section.tsx
    demo-form.tsx
    dividend-search.tsx
    ai-showcase.tsx
  data/
    dividend-data.json
  docs/
    SPEC需求文档.md
    执行规划文档.md
    AI协作记录.md
    测试说明.md
    复盘总结.md
  public/
    images/
  README.md
  package.json
```

## 5. 功能优先级

### 5.1 P0 必须完成

1. 官网首页
2. 品牌宣传区
3. 预约演示表单
4. 分红达成率查询工具
5. GitHub 托管
6. Vercel 部署
7. SPEC 需求文档
8. 执行规划文档

### 5.2 P1 优先完成

1. AI Chatbot 展示区
2. AI 自动生成计划书展示区
3. 移动端适配
4. 测试说明文档
5. AI 协作记录文档

### 5.3 P2 时间允许再做

1. FAQ 自助查询
2. 行业资讯专栏
3. 更新日志页面
4. 数据可视化图表

## 6. Agency-Agents 角色分工

请 Codex Agency-Agents 按以下角色协作。

### 6.0 设计相关 Skill 与职责建议

#### 可使用的 Codex Skills

- `agency-design-department`  
  用于组织整体设计方向，包括品牌表达、页面结构、UX 架构、视觉叙事、包容性视觉检查和产品 polish。

- `frontend-design`  
  用于具体页面和组件设计实现，包括首页、服务能力展示区、预约演示表单、分红达成率查询工具、AI Chatbot 展示区、AI 计划书动态演示模块。

#### Agency-Agents 设计职责补充

以下内容作为设计职责和验收检查项，不要求一定存在同名 skill。

##### Interaction Design

负责：

- 设计用户从首页进入预约演示、分红查询、AI 能力展示的操作路径
- 设计按钮、表单、筛选器、步骤切换、卡片 hover、加载态、空状态和错误状态
- 确保 AI 计划书动态演示模块的步骤切换自然、可理解、不打断阅读

##### Design System

负责：

- 定义颜色、字体、按钮、卡片、表单、表格、标签、状态提示等基础组件规范
- 确保首页、查询工具、预约表单、动态演示模块视觉统一
- 优先复用 shadcn/ui 和 Tailwind CSS 变量，不重复造组件

##### Accessibility

负责：

- 确保文字对比度足够
- 表单字段有明确 label
- 按钮和链接可键盘访问
- 动效不过度闪烁
- 图片和关键视觉素材有 alt 文案
- 移动端不出现文字遮挡、按钮过小、内容溢出

### 6.1 Product Analyst

负责：

- 阅读 SPEC 需求文档
- 拆解用户需求
- 明确页面范围
- 明确验收标准
- 控制功能优先级

### 6.2 UI Designer

负责：

- 首页信息架构
- 页面视觉风格
- 响应式布局建议
- AI Chatbot 和计划书展示区设计
- 将计划书录屏素材拆解为官网动态演示所需的关键画面、步骤和结果卡片
- 分红查询工具交互设计

### 6.3 Frontend Engineer

负责：

- Next.js 页面开发
- React 组件拆分
- Tailwind CSS 样式实现
- shadcn/ui 组件接入
- 移动端适配
- 实现 AI 计划书生成动态演示模块，包括步骤切换、关键帧展示和结果卡片动效

### 6.4 Backend Engineer

负责：

- 预约演示 API
- 分红达成率查询 API
- Supabase 数据写入与查询
- 表单提交校验
- 错误状态处理

### 6.5 QA Engineer

负责：

- 测试说明文档
- 功能验收清单
- 表单测试
- 查询工具测试
- 移动端检查

### 6.6 Technical Writer

负责：

- README
- AI 协作记录
- Prompt 记录
- 踩坑记录
- 复盘总结

## 7. 开发原则

请遵循以下原则：

1. 优先保证项目可运行、可访问、可部署。
2. 不要一开始做复杂后台。
3. 分红数据和预约演示数据第一阶段直接使用 Supabase PostgreSQL。
4. 页面和数据逻辑要拆分清楚。
5. 表单必须有校验、成功状态、失败状态。
6. 查询工具必须有空数据提示。
7. 所有核心功能都要有测试说明。
8. 每个重要阶段都要记录 AI 协作过程。

## 8. AI 计划书动态演示模块实现要求

该模块用于将计划书录屏素材转化为官网动态演示效果，参考现代 SaaS 官网中“产品界面 + 步骤进度 + 浮动卡片”的展示方式。

### 8.1 推荐方案

推荐使用关键帧动态演示，不直接嵌入完整录屏。

处理流程：

```txt
计划书录屏素材
  ↓
截取 5-7 个关键画面
  ↓
裁剪无关区域并统一尺寸
  ↓
放入产品界面模拟容器
  ↓
配合步骤高亮、状态提示、结果卡片完成动态展示
```

### 8.2 展示结构

模块建议包含：

- 标题区：AI 自动生成计划书
- 副标题：从客户需求到完整方案，快速生成可展示、可跟进的计划书内容
- 左侧：流程步骤
- 中间：产品界面模拟窗口或关键帧截图
- 右侧：生成状态、结果摘要、关键指标卡片
- 底部：预约演示按钮

流程步骤建议：

1. 输入客户需求
2. AI 分析需求
3. 匹配产品方案
4. 生成计划书结构
5. 输出计划书摘要
6. 顾问确认并跟进

### 8.3 动效要求

- 当前步骤高亮，其余步骤弱化展示。
- 中间产品界面随步骤切换更新。
- 右侧结果卡片可使用轻量进入、上浮或状态切换动效。
- 优先使用 CSS transition 或已有前端动画组件。
- 不直接依赖大体积完整视频。
- 移动端降级为纵向步骤 + 图片轮播。
- 不展示真实客户隐私信息。

### 8.4 验收标准

- 用户能在 10 秒内理解 AI 计划书生成流程。
- 模块能展示从客户需求输入到计划书结果输出的完整路径。
- 动效流畅，不明显影响页面加载。
- 支持桌面端和移动端。
- 关键帧素材清晰，不出现敏感客户资料。

## 9. 最终验收标准

项目完成时需要满足：

- 官网首页可以正常访问
- 预约演示表单可以填写并提交
- 分红达成率查询工具可以筛选和展示数据
- AI Chatbot 能力有展示区
- AI 自动生成计划书能力有展示区
- 页面适配桌面端和移动端
- 代码托管在 GitHub
- 项目可以部署到 Vercel
- 文档目录包含 SPEC、执行规划、测试说明、AI 协作记录、复盘总结
- README 能说明如何安装、运行和部署项目

## 10. 给 Codex Agency-Agents 的可复制指令

```md
你们是 BeeFintech 官网升级项目的 AI 开发团队。

请基于 `SPEC需求文档.md` 和本文档的技术选型，生成执行规划并协作完成开发。

技术栈请采用：

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- Next.js Route Handlers
- Supabase PostgreSQL
- Vercel
- GitHub

请优先完成：

1. 官网首页
2. 品牌宣传区
3. 预约演示表单
4. 分红达成率查询工具
5. AI Chatbot 展示区
6. AI 自动生成计划书展示区
7. 测试说明、AI 协作记录、复盘总结文档

AI 自动生成计划书展示区要求：

- 不直接嵌入完整录屏。
- 将计划书录屏素材拆成 5-7 个关键画面。
- 使用产品界面容器、步骤进度、状态提示和结果卡片组合成动态演示模块。
- 桌面端采用左右或三栏展示，移动端降级为纵向步骤 + 图片轮播。
- 不展示真实客户隐私信息。

请按以下角色协作：

- Product Analyst：拆解需求和验收标准
- UI Designer：设计页面结构和交互
- Frontend Engineer：实现页面和组件
- Backend Engineer：实现 Route Handlers、Supabase 数据写入和查询
- QA Engineer：整理测试说明和验收清单
- Technical Writer：整理 README、AI 协作记录和复盘总结

请先输出执行规划文档，再开始开发。
```
