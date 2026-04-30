# BeeFintech 第一轮基础框架设计说明（Engineering-First）

## 1. 设计背景

本设计基于以下已确认输入：

- 需求来源：`SPEC需求文档.md`
- 技术约束来源：`技术选型与Agency-Agents开发指令.md`
- 用户确认：第一轮先完成本地可运行的 mock/假数据闭环，不接入真实 Supabase
- 用户确认：项目直接搭建在当前仓库根目录
- 用户确认：第一轮验收以本地 `npm run dev` 可跑通与核心流程可手动验证为准
- 用户确认：首页及服务区块填入正式品牌文案（非占位文案）

本轮目标是优先构建可维护、可扩展的工程骨架，避免后续切换 Supabase 时出现大规模重构。

## 2. 第一轮范围与边界

### 2.1 第一轮范围（In Scope）

1. 初始化 Next.js + TypeScript 基础工程（在仓库根目录）
2. 搭建分层架构：展示层、应用层、领域层、基础设施层、接口层
3. 实现首页、预约演示页、分红查询页
4. 实现 API：预约提交与分红查询（Route Handlers）
5. 采用本地 mock 数据完成“提交 + 查询”闭环
6. 提供 AI Chatbot 与 AI 计划书展示区块的可替换占位框架
7. 完成基础文档骨架（执行规划、测试说明、AI 协作记录、复盘模板）

### 2.2 第一轮边界（Out of Scope）

1. 不接真实 Supabase（URL/Key/真实表）
2. 不做复杂动画与录屏关键帧精修
3. 不做 Docker 启动方案
4. 不做自动化测试体系（仅保留后续可接入结构）

## 3. 架构方案

采用工程分层型方案（用户指定方案 2）：

- 展示层：`app/*`、`components/*`
- 应用层：`features/*`
- 领域层：`domains/*`
- 基础设施层：`repositories/*`
- 接口层：`app/api/*`
- 数据层（第一轮）：`mocks/*`

关键原则：

1. 页面与 API 不直接依赖具体数据源
2. 通过 repository contract 隔离 mock 与未来 Supabase
3. 业务规则沉淀在 domains/features，不分散在页面中

## 4. 目录结构设计

```txt
/app
  /api
    /demo-request/route.ts
    /dividend/route.ts
  /demo/page.tsx
  /dividend-tool/page.tsx
  page.tsx
/components
  /site/*
  /demo/*
  /dividend/*
  /ai/*
/domains
  /demo/*
  /dividend/*
/features
  /demo/*
  /dividend/*
/repositories
  /contracts/*
  /mock/*
/mocks
  dividend-rates.json
  demo-requests.seed.json
/lib
  /config/*
  /http/*
  /utils/*
/docs
  执行规划文档.md
  测试说明.md
  AI协作记录.md
  复盘总结.md
```

## 5. 模块职责

### 5.1 页面与组件

- 首页：品牌主张、核心服务能力、AI 能力展示入口、分红查询入口、预约演示入口
- 预约页：表单录入、前端校验、提交状态反馈
- 分红工具页：筛选条件、结果展示、空态/异常态
- AI 展示区块：可替换占位结构，便于第二轮接入关键帧与动效

### 5.2 领域与用例

- `domains/demo`：预约数据结构与规则（含“联系方式/邮箱至少一项”）
- `domains/dividend`：分红记录结构、查询条件定义、字段约束
- `features/demo`：提交预约用例编排
- `features/dividend`：查询分红用例编排

### 5.3 Repository 抽象

- `repositories/contracts`：定义查询与写入接口
- `repositories/mock`：基于本地数据与内存集合实现
- 未来新增 `repositories/supabase` 时，仅在工厂切换实现，不改页面与用例

## 6. 数据流设计

### 6.1 预约演示提交

1. 前端提交 `POST /api/demo-request`
2. Route Handler 解析请求并调用 `features/demo/submitDemoRequest`
3. 用例执行领域校验
4. repository(mock) 写入记录
5. 返回统一成功结构与 `requestId`、`createdAt`

### 6.2 分红达成率查询

1. 前端请求 `GET /api/dividend?...query`
2. Route Handler 解析筛选条件并调用 `features/dividend/searchDividendRates`
3. 用例标准化条件并执行业务过滤
4. repository(mock) 返回结果列表
5. 返回 `{ items, total }`，无结果返回空数组

## 7. API 契约

### 7.1 响应格式

- 成功：`{ success: true, data, meta? }`
- 失败：`{ success: false, error: { code, message, details? } }`

### 7.2 状态码

- `200`：请求成功
- `400`：参数或字段校验失败
- `500`：服务异常

### 7.3 端点定义

1. `POST /api/demo-request`
2. `GET /api/dividend`

## 8. 错误处理与可用性要求

1. 前端与 API 双重校验，防止绕过页面提交非法数据
2. 表单需具备：加载中、成功反馈、失败反馈
3. 查询工具需具备：默认提示、无结果提示、加载失败提示
4. 错误文案对用户友好，不暴露内部敏感信息

## 9. 第一轮验收标准

满足以下即视为第一轮完成：

1. 本地 `npm run dev` 可启动并访问
2. 首页可浏览且展示正式品牌文案与核心能力
3. 预约演示表单可提交流程跑通（mock 闭环）
4. 分红查询可按条件筛选并展示结果/空态
5. AI Chatbot 与 AI 计划书展示区块具备可替换框架
6. 桌面端与移动端无主要交互阻塞问题

## 10. 第二轮衔接说明

第二轮目标将聚焦：

1. 接入真实 Supabase（表结构与数据迁移）
2. AI 计划书动态演示模块关键帧与动效增强
3. 补充测试自动化与部署强化

当前设计已预留数据源切换点，降低第二轮改造成本。
