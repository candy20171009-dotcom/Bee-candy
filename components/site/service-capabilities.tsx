const items = [
  {
    title: "AI Chatbot 業務諮詢",
    desc: "以結構化問答支持顧問快速回應保單、產品與流程問題，縮短溝通前置時間。",
  },
  {
    title: "AI 自動生成計劃書",
    desc: "從客戶需求輸入到方案摘要輸出，幫助顧問快速產出可展示、可跟進內容。",
  },
  {
    title: "分紅達成率查詢工具",
    desc: "讓顧問與客戶可快速查閱歷年產品分紅表現，提升說明透明度與決策效率。",
  },
];

export function ServiceCapabilities() {
  return (
    <section className="dark-section border-y border-white/8">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#73c6ff]">Service Capabilities</p>
          <h2 className="mt-2 text-3xl font-bold text-[#f2f6ff]">核心服務能力</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, idx) => (
            <article
              key={item.title}
              className="panel-shadow neon-card enter-up rounded-xl p-5"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <h3 className="text-lg font-semibold text-[#e6eeff]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#b8c8ec]">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
