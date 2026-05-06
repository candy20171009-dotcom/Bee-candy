import Link from "next/link";
import { appCapabilities } from "@/features/site/app-content";

export default function AppPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] text-[#132344]">
      <section className="border-b border-[#dbe7ff] bg-[linear-gradient(160deg,#f7faff_0%,#edf4ff_80%)] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#3e63c6]">APP</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#142a50]">移动协同，让客户服务随时在线</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5a709c]">
            通过 APP 与 PC 协同，顾问可在外出场景快速响应客户咨询、跟进签单节点并同步业务进展。
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {appCapabilities.map((capability) => (
            <article
              key={capability.id}
              className="rounded-2xl border border-[#d8e5ff] bg-white p-5 shadow-[0_12px_26px_rgba(58,92,169,0.08)]"
            >
              <h2 className="text-lg font-semibold text-[#1f3f88]">{capability.title}</h2>
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
    </main>
  );
}
