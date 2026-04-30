import Link from "next/link";

const pcActions = ["在 PC 端整理客户需求", "生成候选方案并标记重点", "创建签单跟进任务"];
const appActions = ["APP 接收实时提醒", "外出场景快速查看产品与客户信息", "同步回传客户反馈"];
const gains = ["响应时效 +40%", "跟进完成率 +30%", "转化效率 +22%"];

export function AppCollaborationShowcase() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[#1275FD]">PC + APP Collaboration</p>
      <h2 className="mt-2 text-3xl font-bold text-[#444]">多端协同，让客户跟进不中断</h2>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#d8d8d8] bg-white p-5">
          <p className="text-sm font-semibold text-[#333]">PC 端动作</p>
          <ul className="mt-3 space-y-2 text-sm text-[#666]">
            {pcActions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[#d8d8d8] bg-white p-5">
          <p className="text-sm font-semibold text-[#333]">APP 承接动作</p>
          <ul className="mt-3 space-y-2 text-sm text-[#666]">
            {appActions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-[#d8d8d8] bg-white p-5">
          <p className="text-sm font-semibold text-[#333]">协同收益</p>
          <div className="mt-3 space-y-2">
            {gains.map((gain) => (
              <p key={gain} className="inline-flex rounded-full bg-gradient-to-r from-[#2385F8] to-[#11B7FA] px-3 py-1 text-xs font-medium text-white">
                {gain}
              </p>
            ))}
          </div>
          <Link
            href="/app"
            className="mt-4 inline-flex rounded-full bg-gradient-to-r from-[#2385F8] to-[#11B7FA] px-4 py-2 text-sm font-medium text-white"
          >
            查看 APP 能力详情
          </Link>
        </article>
      </div>
    </section>
  );
}
