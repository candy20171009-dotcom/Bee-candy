import Link from "next/link";

export function HeroSection() {
  return (
    <section className="hero-backdrop border-b border-white/10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div className="enter-up">
          <p className="text-xs uppercase tracking-[0.22em] text-[#7ec6ff]">Insurance Technology Platform</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#f2f6ff] md:text-5xl">
            BeeFintech：讓保險諮詢
            <br />
            從經驗驅動升級為智能驅動
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#b7c5ea] md:text-lg">
            我們把品牌展示、業務轉化與增值工具整合成一個可持續迭代的服務平台，
            協助保險公司、經紀團隊與 IFA 顧問更快完成諮詢、方案與跟進閉環。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/demo" className="neon-button rounded-full px-5 py-2.5 text-sm font-medium transition">
              預約演示
            </Link>
            <Link
              href="/dividend-tool"
              className="rounded-full border border-[#7f9fff]/40 px-5 py-2.5 text-sm font-medium text-[#d9e5ff] transition hover:border-[#25d0f7] hover:text-[#25d0f7]"
            >
              分紅達成率查詢
            </Link>
          </div>
        </div>
        <div className="panel-shadow neon-surface enter-up rounded-2xl p-5 [animation-delay:120ms]">
          <p className="text-sm text-[#7ec6ff]">BeeFintech 核心定位</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[#d0dcfb]">
            <li>• 以 AI 與資料能力提升顧問效率與客戶溝通品質</li>
            <li>• 提供可互動的保險科技工具，讓官網具備實際服務能力</li>
            <li>• 建立可擴展資訊架構，支持後續更多金融服務模組</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
