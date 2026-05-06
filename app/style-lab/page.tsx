import Link from "next/link";

const features = ["智能线索分配", "AI 方案生成", "续期自动提醒", "团队绩效看板"];

function DemoCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {features.map((item) => (
        <article key={item} className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur">
          <p className="text-sm text-white/90">{item}</p>
          <p className="mt-2 text-xs text-white/60">提升咨询效率与转化率</p>
        </article>
      ))}
    </div>
  );
}

export default function StyleLabPage() {
  return (
    <main className="space-y-14 px-6 py-10 md:px-10">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-bold">BeeFintech UI Direction Lab</h1>
        <Link href="/" className="rounded-full border px-4 py-2 text-sm">返回首页</Link>
      </header>

      <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-[#5a7fff]/30 bg-gradient-to-br from-[#070d2b] via-[#101e5a] to-[#123b7b] p-8 text-white shadow-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">方向 A · Neon SaaS</p>
        <h2 className="mt-3 text-4xl font-bold leading-tight">Your Insurance Data. Real-Time Insights.</h2>
        <p className="mt-3 max-w-2xl text-sm text-blue-100/85">深色霓虹、玻璃卡片、強對比 CTA，最接近 Dribbble 主流 SaaS 首屏風格。</p>
        <div className="mt-6 flex gap-3">
          <button className="rounded-full bg-gradient-to-r from-[#596dff] to-[#25d0f7] px-5 py-2 text-sm font-semibold">Start Free Trial</button>
          <button className="rounded-full border border-white/35 px-5 py-2 text-sm">View Dashboard</button>
        </div>
        <div className="mt-6"><DemoCards /></div>
      </section>

      <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#2f6bff]">方向 B · Clean Enterprise</p>
        <h2 className="mt-3 text-4xl font-bold leading-tight text-[#1f2a44]">Operational Clarity for Insurance Teams</h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">浅色专业风、信息层次清晰、企业决策感强，适合更“稳重”的 B2B 官网。</p>
        <div className="mt-6 flex gap-3">
          <button className="rounded-full bg-[#2f6bff] px-5 py-2 text-sm font-semibold text-white">Book Demo</button>
          <button className="rounded-full border border-slate-300 px-5 py-2 text-sm text-slate-700">See Case Study</button>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((item) => (
            <article key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-[#1f2a44]">{item}</p>
              <p className="mt-2 text-xs text-slate-500">高可读、低视觉噪声</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-[#3a4d92] bg-gradient-to-br from-[#0e1534] via-[#172356] to-[#1a2f75] p-8 text-white shadow-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#9ec2ff]">方向 C · Premium Tech</p>
        <h2 className="mt-3 text-4xl font-bold leading-tight">From Prospect to Policy, All in One Flow</h2>
        <p className="mt-3 max-w-2xl text-sm text-[#cfdbff]">高端科技感 + 品牌感更强，适合做“融资级”产品形象和市场宣传页。</p>
        <div className="mt-6 flex gap-3">
          <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1a2f75]">Get Started</button>
          <button className="rounded-full border border-[#a8bbff]/60 px-5 py-2 text-sm text-[#d8e4ff]">Compare Plans</button>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {features.map((item) => (
            <article key={item} className="rounded-xl border border-[#8aa4ff]/35 bg-[#203779]/45 p-4">
              <p className="text-sm text-white">{item}</p>
              <p className="mt-2 text-xs text-[#c8d7ff]">强调品牌高级感与产品势能</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
