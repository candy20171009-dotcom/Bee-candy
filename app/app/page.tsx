import Link from "next/link";
import { appCapabilities } from "@/features/site/app-content";

export default function AppPage() {
  return (
    <main className="dark-section min-h-screen">
      <section className="border-b border-white/10 bg-gradient-to-r from-[#2836a7] to-[#1f5ca4] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#9fd8ff]">APP</p>
          <h1 className="mt-3 text-4xl font-bold text-[#f2f6ff]">移动协同，让客户服务随时在线</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d2e1ff]">
            通过 APP 与 PC 协同，顾问可在外出场景快速响应客户咨询、跟进签单节点并同步业务进展。
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {appCapabilities.map((capability) => (
            <article key={capability.id} className="neon-card rounded-2xl p-5">
              <h2 className="text-lg font-semibold text-[#e8f0ff]">{capability.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#bfd0ef]">{capability.description}</p>
              <p className="mt-3 inline-flex rounded-full bg-[#4e6bff]/30 px-3 py-1 text-xs font-medium text-[#99dcff]">{capability.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="light-panel rounded-2xl p-5">
            <h3 className="text-base font-semibold text-[#e8f0ff]">顾问</h3>
            <p className="mt-2 text-sm text-[#bfd0ef]">快速响应咨询、移动跟进、提升沟通效率。</p>
          </article>
          <article className="light-panel rounded-2xl p-5">
            <h3 className="text-base font-semibold text-[#e8f0ff]">团队长</h3>
            <p className="mt-2 text-sm text-[#bfd0ef]">掌握团队节点，优化资源分配与流程协作。</p>
          </article>
          <article className="light-panel rounded-2xl p-5">
            <h3 className="text-base font-semibold text-[#e8f0ff]">运营</h3>
            <p className="mt-2 text-sm text-[#bfd0ef]">维护线索与进度，保障流程完整与服务连续。</p>
          </article>
        </div>

        <div className="mt-8">
          <Link href="/demo" className="neon-button inline-flex rounded-full px-5 py-2 text-sm font-medium">
            预约产品演示
          </Link>
        </div>
      </section>
    </main>
  );
}
