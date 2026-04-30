import Link from "next/link";

export function CtaSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-6">
      <div className="panel-shadow rounded-2xl border border-[#1275FD]/20 bg-gradient-to-r from-[#2385F8] to-[#11B7FA] p-8 text-white">
        <h2 className="text-2xl font-bold">準備好讓官網成為你的業務增長入口？</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/90">
          透過 BeeFintech，你可以同時完成品牌展示、工具服務與潛在客戶轉化。
          立即預約演示，了解如何在 10 分鐘內搭建可落地保險科技體驗。
        </p>
        <div className="mt-6">
          <Link href="/demo" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1275FD] transition hover:bg-slate-100">
            立即預約
          </Link>
        </div>
      </div>
    </section>
  );
}
