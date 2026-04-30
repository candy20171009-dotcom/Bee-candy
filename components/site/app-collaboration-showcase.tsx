import Link from "next/link";

const pcActions = ["在 PC 端整理客户需求", "生成候选方案并标记重点", "创建签单跟进任务"];
const appActions = ["APP 接收实时提醒", "外出场景快速查看产品与客户信息", "同步回传客户反馈"];
const gains = ["响应时效 +40%", "跟进完成率 +30%", "转化效率 +22%"];

export function AppCollaborationShowcase() {
  return (
    <section className="dark-section border-b border-white/8">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[#73c6ff]">PC + APP Collaboration</p>
        <h2 className="mt-2 text-3xl font-bold text-[#f2f6ff]">多端协同，让客户跟进不中断</h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <article className="neon-card rounded-2xl p-5">
            <p className="text-sm font-semibold text-[#e5eeff]">PC 端动作</p>
            <ul className="mt-3 space-y-2 text-sm text-[#bfd0ef]">
              {pcActions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="neon-card rounded-2xl p-5">
            <p className="text-sm font-semibold text-[#e5eeff]">APP 承接动作</p>
            <ul className="mt-3 space-y-2 text-sm text-[#bfd0ef]">
              {appActions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="neon-card rounded-2xl p-5">
            <p className="text-sm font-semibold text-[#e5eeff]">协同收益</p>
            <div className="mt-3 space-y-2">
              {gains.map((gain) => (
                <p key={gain} className="inline-flex rounded-full bg-gradient-to-r from-[#5b6dff] to-[#25d0f7] px-3 py-1 text-xs font-medium text-white">
                  {gain}
                </p>
              ))}
            </div>
            <Link href="/app" className="neon-button mt-4 inline-flex rounded-full px-4 py-2 text-sm font-medium">
              查看 APP 能力详情
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
