import Link from "next/link";
import { appCapabilities } from "@/features/site/app-content";

const flowSteps = [
  { title: "资讯", detail: "每日推送市场资讯与行政通知" },
  { title: "产品库", detail: "全线在售产品与常用资料" },
  { title: "投保", detail: "Eform 财务分析与 AML 合规校验" },
  { title: "新单", detail: "状态更新与 Pending 自动同步" },
  { title: "保单", detail: "保单管理与续保自动提醒" },
  { title: "介绍费", detail: "收发计算与账单对账输出" },
];

const upgrades = [
  {
    number: "01",
    title: "AI 保单同步",
    description: "每日自动同步保单资料与状态，智能比对差异，降低人工核对成本。",
  },
  {
    number: "02",
    title: "Eform 无纸化投保",
    description: "预填电子投保表单，联动资料回写系统，让投保流程更顺畅。",
  },
  {
    number: "03",
    title: "合规资料库",
    description: "多类型文档分类存储、在线预览、数据统计并导出 Report。",
  },
  {
    number: "04",
    title: "邀约神器",
    description: "OCR 自动读取邀约信息，AI 智能提交保单申请并推送 VIP 提醒。",
  },
];

const keyFeatures = [
  {
    title: "预约演示转化",
    detail: "提交后写入 Supabase，销售与运营可直接跟进客户线索。",
    link: "/demo",
    linkText: "立即预约",
  },
  {
    title: "分红达成率查询",
    detail: "按公司、产品、币种、年度筛选，快速获取历史表现数据。",
    link: "/dividend-tool",
    linkText: "开始查询",
  },
  {
    title: "AI 能力可视化",
    detail: "展示 AI Chatbot 与 AI 自动计划书流程，10 秒理解业务价值。",
    link: "#ai-showcase",
    linkText: "查看能力",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f4f8ff] text-[#132344]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(88,137,255,0.18),transparent_38%),radial-gradient(circle_at_88%_22%,rgba(157,123,255,0.2),transparent_38%),linear-gradient(180deg,#f4f8ff_0%,#eef4ff_100%)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-7">
            <div className="inline-flex rounded-full border border-[#d4e2ff] bg-white px-4 py-1 text-xs font-semibold tracking-[0.16em] text-[#3f63c9]">
              LIFEBEE APP + CRM
            </div>
            <h1 className="max-w-xl text-4xl leading-tight font-semibold text-[#102449] md:text-6xl">
              快人一步
              <br />
              保險數碼化
            </h1>
            <p className="max-w-xl text-lg leading-8 text-[#4a618e]">
              面向港澳保险经纪公司的一站式业务系统，从资讯到介绍费，实现全流程数字化闭环与
              AI 自动化升级。
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/demo"
                className="rounded-xl bg-gradient-to-r from-[#2b66ff] to-[#6f76ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(44,100,255,0.28)] transition hover:translate-y-[-1px]"
              >
                预约产品演示
              </Link>
              <Link
                href="/dividend-tool"
                className="rounded-xl border border-[#bbceff] bg-white px-5 py-3 text-sm font-semibold text-[#3256c4] transition hover:border-[#8caeff]"
              >
                体验分红查询工具
              </Link>
            </div>
            <div className="text-sm text-[#5a6f96]">175+ 经纪团队采用，支持私有化部署与持续迭代服务</div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-[380px] w-full max-w-[480px] rounded-[28px] border border-[#d6e4ff] bg-white/90 p-6 shadow-[0_28px_60px_rgba(46,86,181,0.2)] backdrop-blur">
              <div className="grid h-full grid-cols-[1.15fr_0.85fr] gap-4">
                <div className="rounded-2xl border border-[#d6e4ff] bg-[#f7faff] p-4">
                  <div className="mb-3 text-sm font-semibold text-[#274082]">核心闭环</div>
                  <div className="space-y-2 text-xs text-[#536999]">
                    {flowSteps.slice(0, 4).map((step) => (
                      <div key={step.title} className="rounded-lg bg-white px-3 py-2">
                        <span className="font-semibold text-[#214087]">{step.title}</span>
                        <p className="mt-1">{step.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-2xl border border-[#d6e4ff] bg-white p-3">
                    <div className="text-xs text-[#5e73a2]">今日同步状态</div>
                    <div className="mt-1 text-lg font-semibold text-[#20438f]">98.6%</div>
                    <div className="text-xs text-[#6c7fa8]">保单与新单状态已自动更新</div>
                  </div>
                  <div className="rounded-2xl border border-[#d6e4ff] bg-white p-3">
                    <div className="text-xs text-[#5e73a2]">AI 建议书</div>
                    <div className="mt-1 text-lg font-semibold text-[#20438f]">3 分钟生成</div>
                    <div className="text-xs text-[#6c7fa8]">支持结构化结果与持续追问</div>
                  </div>
                  <div className="rounded-2xl border border-[#d6e4ff] bg-gradient-to-br from-[#2f65ff] to-[#7e73ff] p-3 text-white">
                    <div className="text-xs text-white/80">专属环境</div>
                    <div className="mt-1 text-lg font-semibold">香港云私有部署</div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-[#7da0ff]/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#3e63c6]">HOW IT WORKS</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#13284e]">六步业务闭环</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-6">
          {flowSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-[#d8e5ff] bg-white p-4 shadow-[0_12px_24px_rgba(70,105,184,0.08)]"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-[#5d73a4]">{`0${index + 1}`}</p>
              <h3 className="mt-2 text-lg font-semibold text-[#1e3f89]">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#556a96]">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="app-collab" className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-[#3e63c6]">APP + CRM COLLABORATION</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#142a4f]">APP + CRM 协同能力</h2>
          </div>
          <p className="max-w-md text-sm text-[#58709f]">移动端与后台协同，覆盖顾问外出服务、流程跟进与团队管理场景</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {appCapabilities.map((capability) => (
            <article
              key={capability.id}
              className="rounded-2xl border border-[#d8e5ff] bg-white p-5 shadow-[0_12px_26px_rgba(58,92,169,0.08)]"
            >
              <h3 className="text-lg font-semibold text-[#1f3f88]">{capability.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#56709a]">{capability.description}</p>
              <p className="mt-3 inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-medium text-[#3158c4]">{capability.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-[#d8e5ff] bg-[#f7faff] p-5">
            <h3 className="text-base font-semibold text-[#1f3f88]">顾问</h3>
            <p className="mt-2 text-sm text-[#56709a]">快速响应咨询、移动跟进、提升沟通效率。</p>
          </article>
          <article className="rounded-2xl border border-[#d8e5ff] bg-[#f7faff] p-5">
            <h3 className="text-base font-semibold text-[#1f3f88]">团队长</h3>
            <p className="mt-2 text-sm text-[#56709a]">掌握团队节点，优化资源分配与流程协作。</p>
          </article>
          <article className="rounded-2xl border border-[#d8e5ff] bg-[#f7faff] p-5">
            <h3 className="text-base font-semibold text-[#1f3f88]">运营</h3>
            <p className="mt-2 text-sm text-[#56709a]">维护线索与进度，保障流程完整与服务连续。</p>
          </article>
        </div>

        <div className="mt-8">
          <Link
            href="/demo"
            className="inline-flex rounded-xl bg-gradient-to-r from-[#2d66ff] to-[#6f76ff] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(49,94,205,0.28)]"
          >
            预约产品演示
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-[#3e63c6]">2025 PRODUCT UPGRADE</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#142a4f]">核心升级能力</h2>
          </div>
          <p className="max-w-md text-sm text-[#58709f]">让保单管理更智能，投保更省心，强化顾问端与 Admin 协同效率</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {upgrades.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#d9e6ff] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] p-5 shadow-[0_14px_26px_rgba(59,90,170,0.08)]"
            >
              <p className="text-sm font-semibold text-[#7191e3]">{item.number}</p>
              <h3 className="mt-1 text-xl font-semibold text-[#1b3d88]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5d729d]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#3e63c6]">THREE KEY FEATURES</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#13284e]">转化与服务双驱动</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {keyFeatures.map((feature, index) => (
            <article
              key={feature.title}
              className={`rounded-3xl border p-6 ${
                index === 0
                  ? "border-transparent bg-gradient-to-br from-[#2d66ff] to-[#7d76ff] text-white shadow-[0_18px_34px_rgba(59,97,215,0.28)]"
                  : "border-[#d8e5ff] bg-white text-[#17315e]"
              }`}
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-white/86" : "text-[#5f729a]"}`}>{feature.detail}</p>
              <Link
                href={feature.link}
                className={`mt-6 inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  index === 0 ? "bg-white text-[#2d54cb]" : "bg-[#eef4ff] text-[#2d55c8] hover:bg-[#e2edff]"
                }`}
              >
                {feature.linkText}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="ai-showcase" className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="rounded-[32px] border border-[#d8e5ff] bg-white p-8 shadow-[0_18px_36px_rgba(59,90,167,0.1)]">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#3f64c7]">AI SHOWCASE</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#13284e]">AI Chatbot 与 AI 计划书动态展示</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#58709f]">
            采用关键帧与步骤式演示，展示「输入需求 → AI 分析 → 输出结果」的完整流程，不依赖大体积视频，兼顾加载性能与理解效率。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#d8e5ff] bg-[#f7faff] p-4 text-sm text-[#4f6593]">
              <p className="font-semibold text-[#24458c]">Step 1</p>
              <p className="mt-2">用户输入业务问题或客户需求。</p>
            </div>
            <div className="rounded-2xl border border-[#d8e5ff] bg-[#f7faff] p-4 text-sm text-[#4f6593]">
              <p className="font-semibold text-[#24458c]">Step 2</p>
              <p className="mt-2">AI 生成结构化回答与方案摘要。</p>
            </div>
            <div className="rounded-2xl border border-[#d8e5ff] bg-[#f7faff] p-4 text-sm text-[#4f6593]">
              <p className="font-semibold text-[#24458c]">Step 3</p>
              <p className="mt-2">顾问继续追问并输出可跟进结果。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pt-8 pb-16">
        <div className="rounded-[30px] border border-[#d9e6ff] bg-[linear-gradient(140deg,#ffffff_0%,#f4f8ff_72%,#edf3ff_100%)] p-8 text-center shadow-[0_16px_34px_rgba(70,104,180,0.09)]">
          <p className="text-sm font-semibold tracking-[0.16em] text-[#3f64c7]">READY TO START</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#13284e]">把官网变成可转化的业务入口</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#58709f]">
            先打通预约演示与分红查询闭环，再逐步扩展 AI 场景展示与更多保险科技工具。
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/demo"
              className="rounded-xl bg-gradient-to-r from-[#2a65ff] to-[#6f76ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(58,95,205,0.3)]"
            >
              预约 Demo
            </Link>
            <Link
              href="/dividend-tool"
              className="rounded-xl border border-[#bad0ff] bg-white px-5 py-3 text-sm font-semibold text-[#3158c4]"
            >
              进入查询工具
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
