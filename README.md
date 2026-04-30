# BeeFintech Web (Phase 1)

BeeFintech 官网第一轮基础框架，聚焦品牌展示、预约演示与分红达成率查询工具。

## 技术栈

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Next.js Route Handlers
- 本地 mock 数据仓储（Phase 1）

## 本地启动

```bash
npm install
npm run dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)

## 主要页面

- `/`：官网首页（品牌与服务能力）
- `/demo`：预约演示表单
- `/dividend-tool`：分红达成率查询工具

## 目录说明

- `app/`：页面与 API Route Handlers
- `components/`：UI 组件
- `domains/`：领域类型与规则
- `features/`：业务用例
- `repositories/`：数据仓储接口与实现
- `mocks/`：本地假数据
- `docs/`：需求、规划、测试与复盘文档

## 当前边界

- 已实现 mock 闭环流程
- 尚未接入真实 Supabase（将在 Phase 2 进行）

## Phase 2 数据源切换（已支持）

默认使用 mock 数据源。若要切换到 Supabase，请在 `.env.local` 配置：

```bash
DATA_SOURCE=supabase
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

如需回退到 mock：

```bash
DATA_SOURCE=mock
```

Supabase 需准备两张表：

- `demo_requests`
- `dividend_rates`

联调文档与 SQL：

- [Supabase 联调说明](docs/supabase/联调说明.md)
- [建表 SQL](docs/supabase/schema.sql)
- [样例数据 SQL](docs/supabase/seed-dividend-sample.sql)
- [环境变量模板](.env.example)

健康检查接口：

- `GET /api/health/supabase`：检查 Supabase 连接与核心表可读性

联调脚本：

```bash
./scripts/check-supabase.sh
```
