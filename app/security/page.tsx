import Link from "next/link";
import { securityCapabilities, securityTerms } from "@/features/site/security-content";

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] text-[#132344]">
      <section className="border-b border-[#dbe7ff] bg-[linear-gradient(160deg,#f7faff_0%,#edf4ff_80%)] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#3e63c6]">SECURITY</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#142a50]">企业级安全能力，贯穿每个业务环节</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5a709c]">
            从传输到存储、从访问到审计，BeeFintech 以结构化安全控制保障顾问与客户数据的可靠性与可追踪性。
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {securityCapabilities.map((capability) => (
            <article
              key={capability.id}
              className="rounded-2xl border border-[#d8e5ff] bg-white p-5 shadow-[0_12px_26px_rgba(58,92,169,0.08)]"
            >
              <h2 className="text-xl font-semibold text-[#1f3f88]">{capability.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-[#56709a]">
                {capability.controls.map((control) => (
                  <li key={control}>• {control}</li>
                ))}
              </ul>
              <p className="mt-3 rounded-lg border border-[#d8e5ff] bg-[#f7faff] p-3 text-sm text-[#4e6995]">
                适用场景：{capability.scenario}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#d8e5ff] bg-white p-5 shadow-[0_12px_26px_rgba(58,92,169,0.08)]">
          <h3 className="text-lg font-semibold text-[#1d3f87]">术语说明</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {securityTerms.map((item) => (
              <article key={item.term} className="rounded-xl border border-[#d8e5ff] bg-[#f7faff] p-4">
                <p className="text-sm font-semibold text-[#2e58bf]">{item.term}</p>
                <p className="mt-1 text-sm text-[#56709a]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[#d8e5ff] bg-[linear-gradient(145deg,#ffffff_0%,#eff5ff_100%)] p-6 shadow-[0_12px_26px_rgba(58,92,169,0.08)]">
          <p className="text-sm text-[#56709a]">说明：具体安全策略可按企业部署需求进行定制与强化。</p>
          <Link
            href="/demo"
            className="mt-4 inline-flex rounded-xl bg-gradient-to-r from-[#2d66ff] to-[#6f76ff] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(49,94,205,0.28)]"
          >
            预约安全能力演示
          </Link>
        </div>
      </section>
    </main>
  );
}
