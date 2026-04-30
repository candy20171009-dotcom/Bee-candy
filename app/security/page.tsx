import Link from "next/link";
import { securityCapabilities, securityTerms } from "@/features/site/security-content";

export default function SecurityPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#2385F8] to-[#11B7FA] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/80">Security</p>
          <h1 className="mt-3 text-4xl font-bold">企业级安全能力，贯穿每个业务环节</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90">
            从传输到存储、从访问到审计，BeeFintech 以结构化安全控制保障顾问与客户数据的可靠性与可追踪性。
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {securityCapabilities.map((capability) => (
            <article key={capability.id} className="rounded-2xl border border-[#d8d8d8] bg-white p-5">
              <h2 className="text-xl font-semibold text-[#444]">{capability.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-[#666]">
                {capability.controls.map((control) => (
                  <li key={control}>• {control}</li>
                ))}
              </ul>
              <p className="mt-3 rounded-lg bg-[#f7f9fc] p-3 text-sm text-[#555]">适用场景：{capability.scenario}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#d8d8d8] bg-[#f7f9fc] p-5">
          <h3 className="text-lg font-semibold text-[#444]">术语说明</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {securityTerms.map((item) => (
              <article key={item.term} className="rounded-xl bg-white p-4">
                <p className="text-sm font-semibold text-[#1275FD]">{item.term}</p>
                <p className="mt-1 text-sm text-[#666]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-[#2C3033] p-6 text-white">
          <p className="text-sm text-white/80">说明：具体安全策略可按企业部署需求进行定制与强化。</p>
          <Link
            href="/demo"
            className="mt-4 inline-flex rounded-full bg-gradient-to-r from-[#2385F8] to-[#11B7FA] px-5 py-2 text-sm font-medium text-white"
          >
            预约安全能力演示
          </Link>
        </div>
      </section>
    </main>
  );
}
