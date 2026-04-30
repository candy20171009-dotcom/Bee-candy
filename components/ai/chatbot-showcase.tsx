const chatSteps = [
  "用戶輸入業務問題",
  "AI 解析場景與意圖",
  "返回結構化回答",
  "顧問追問並延展說明",
];

export function ChatbotShowcase() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#1275FD]">AI Chatbot Showcase</p>
        <h2 className="mt-2 text-3xl font-bold text-[#444]">AI Chatbot 能力展示</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <ol className="rounded-xl border border-[#d8d8d8] bg-white p-5">
          {chatSteps.map((item, idx) => (
            <li key={item} className="mb-2 rounded-lg bg-slate-100 px-3 py-2 text-sm text-[#333] last:mb-0">
              {idx + 1}. {item}
            </li>
          ))}
        </ol>
        <div className="panel-shadow rounded-xl border border-[#d8d8d8] bg-white p-5">
          <p className="text-sm text-[#666]">動態展示區（Phase 2 替換為關鍵幀與細緻動效）</p>
          <div className="mt-4 h-56 rounded-lg bg-gradient-to-br from-blue-50 via-slate-100 to-cyan-50" />
        </div>
      </div>
    </section>
  );
}
