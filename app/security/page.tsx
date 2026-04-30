import Link from "next/link";
import { securityCapabilities, securityTerms } from "@/features/site/security-content";

export default function SecurityPage() {
  return (
    <main className="dark-section min-h-screen">
      <section className="border-b border-white/10 bg-gradient-to-r from-[#1e2f86] to-[#1d5c99] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9fd8ff]">Security</p>
          <h1 className="mt-3 text-4xl font-bold text-[#f2f6ff]">企业级安全能力，贯穿每个业务环节</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d2e1ff]">
            从传输到存储、从访问到审计，BeeFintech 以结构化安全控制保障顾问与客户数据的可靠性与可追踪性。
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {securityCapabilities.map((capability) => (
            <article key={capability.id} className="neon-card rounded-2xl p-5">
              <h2 className="text-xl font-semibold text-[#e8f0ff]">{capability.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-[#bfd0ef]">
                {capability.controls.map((control) => (
                  <li key={control}>• {control}</li>
                ))}
              </ul>
              <p className="light-panel mt-3 rounded-lg p-3 text-sm text-[#d6e3ff]">适用场景：{capability.scenario}</p>
            </article>
          ))}
        </div>

        <div className="neon-surface mt-8 rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-[#f1f6ff]">术语说明</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {securityTerms.map((item) => (
              <article key={item.term} className="light-panel rounded-xl p-4">
                <p className="text-sm font-semibold text-[#90d8ff]">{item.term}</p>
                <p className="mt-1 text-sm text-[#cedcff]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-[#070e2e] p-6 text-white ring-1 ring-white/10">
          <p className="text-sm text-[#bfcfeb]">说明：具体安全策略可按企业部署需求进行定制与强化。</p>
          <Link href="/demo" className="neon-button mt-4 inline-flex rounded-full px-5 py-2 text-sm font-medium">
            预约安全能力演示
          </Link>
        </div>
      </section>
    </main>
  );
}
