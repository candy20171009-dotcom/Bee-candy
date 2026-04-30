import Link from "next/link";

export function CtaSection() {
  return (
    <section className="dark-section border-t border-white/8">
      <div className="mx-auto w-full max-w-6xl px-6 pb-8 pt-6">
        <div className="panel-shadow rounded-2xl border border-white/12 bg-gradient-to-r from-[#1a2d88] to-[#1d5ca0] p-8 text-white">
          <h2 className="text-2xl font-bold text-[#f2f6ff]">準備好讓官網成為你的業務增長入口？</h2>
          <p className="mt-3 max-w-2xl text-sm text-[#ccddff]">
            透過 BeeFintech，你可以同時完成品牌展示、工具服務與潛在客戶轉化。
            立即預約演示，了解如何在 10 分鐘內搭建可落地保險科技體驗。
          </p>
          <div className="mt-6">
            <Link href="/demo" className="neon-button rounded-full px-5 py-2.5 text-sm font-semibold transition">
              立即預約
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
