const steps = [
  "輸入客戶需求",
  "AI 分析需求",
  "匹配產品方案",
  "生成計劃書結構",
  "輸出計劃書摘要",
  "顧問確認並跟進",
];

export function ProposalShowcase() {
  return (
    <section className="dark-section border-b border-white/8">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[#73c6ff]">AI Proposal Engine</p>
          <h2 className="mt-2 text-3xl font-bold text-[#f2f6ff]">AI 自動生成計劃書</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[220px_1fr_280px]">
          <ol className="neon-card rounded-xl p-4">
            {steps.map((step, idx) => (
              <li
                key={step}
                className={
                  idx === 2
                    ? "mb-2 rounded-md bg-gradient-to-r from-[#5b6dff] to-[#25d0f7] px-3 py-2 text-sm text-white last:mb-0"
                    : "mb-2 rounded-md bg-[#273a7b]/45 px-3 py-2 text-sm text-[#d2e1ff] last:mb-0"
                }
              >
                {idx + 1}. {step}
              </li>
            ))}
          </ol>

          <div className="neon-card panel-shadow rounded-xl p-4">
            <p className="text-sm text-[#bed0ef]">產品界面容器（Phase 2 替換為 5-7 張關鍵幀）</p>
            <div className="mt-3 h-72 rounded-lg bg-gradient-to-tr from-[#1c2e79] via-[#2742a2] to-[#1a5f99]" />
          </div>

          <div className="space-y-3">
            <div className="neon-card rounded-xl p-4">
              <p className="font-semibold text-[#e5eeff]">生成狀態</p>
              <p className="mt-1 text-sm text-[#bfd0ef]">已完成需求分析，正在生成方案結構...</p>
            </div>
            <div className="neon-card rounded-xl p-4">
              <p className="font-semibold text-[#e5eeff]">結果摘要</p>
              <p className="mt-1 text-sm text-[#bfd0ef]">已匹配 3 套可選方案，覆蓋保障、教育與退休目標。</p>
            </div>
            <div className="neon-card rounded-xl p-4">
              <p className="font-semibold text-[#e5eeff]">關鍵指標</p>
              <p className="mt-1 text-sm text-[#bfd0ef]">顧問方案準備時間預估縮短 60%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
