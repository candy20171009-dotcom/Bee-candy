import Link from "next/link";
import { appCapabilities } from "@/features/site/app-content";

export default function AppPage() {
  return (
    <main>
      <section className="bg-gradient-to-r from-[#1275FD] to-[#11B7FA] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/80">APP</p>
          <h1 className="mt-3 text-4xl font-bold">移动协同，让客户服务随时在线</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90">
            通过 APP 与 PC 协同，顾问可在外出场景快速响应客户咨询、跟进签单节点并同步业务进展。
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {appCapabilities.map((capability) => (
            <article key={capability.id} className="rounded-2xl border border-[#d8d8d8] bg-white p-5">
              <h2 className="text-lg font-semibold text-[#444]">{capability.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#666]">{capability.description}</p>
              <p className="mt-3 inline-flex rounded-full bg-[#1275FD]/10 px-3 py-1 text-xs font-medium text-[#1275FD]">{capability.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-[#d8d8d8] bg-[#f7f9fc] p-5">
            <h3 className="text-base font-semibold text-[#333]">顾问</h3>
            <p className="mt-2 text-sm text-[#666]">快速响应咨询、移动跟进、提升沟通效率。</p>
          </article>
          <article className="rounded-2xl border border-[#d8d8d8] bg-[#f7f9fc] p-5">
            <h3 className="text-base font-semibold text-[#333]">团队长</h3>
            <p className="mt-2 text-sm text-[#666]">掌握团队节点，优化资源分配与流程协作。</p>
          </article>
          <article className="rounded-2xl border border-[#d8d8d8] bg-[#f7f9fc] p-5">
            <h3 className="text-base font-semibold text-[#333]">运营</h3>
            <p className="mt-2 text-sm text-[#666]">维护线索与进度，保障流程完整与服务连续。</p>
          </article>
        </div>

        <div className="mt-8">
          <Link
            href="/demo"
            className="inline-flex rounded-full bg-gradient-to-r from-[#2385F8] to-[#11B7FA] px-5 py-2 text-sm font-medium text-white"
          >
            预约产品演示
          </Link>
        </div>
      </section>
    </main>
  );
}
