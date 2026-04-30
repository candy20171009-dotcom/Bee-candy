"use client";

import { useState } from "react";
import { businessFlowSteps } from "@/features/site/business-flow-content";

export function BusinessFlowShowcase() {
  const [activeId, setActiveId] = useState(businessFlowSteps[2]?.id ?? businessFlowSteps[0].id);
  const active = businessFlowSteps.find((step) => step.id === activeId) ?? businessFlowSteps[0];

  return (
    <section className="dark-section border-b border-white/8">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-[#73c6ff]">Business Flow</p>
        <h2 className="mt-2 text-3xl font-bold text-[#f2f6ff]">从线索到续期，一体化业务闭环</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#b8c8ec]">
          将顾问、团队长与运营协同在同一流程中，减少断点与重复沟通，提升签单与服务效率。
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-[260px_1fr]">
          <ol className="neon-surface space-y-2 rounded-2xl p-4">
            {businessFlowSteps.map((step, idx) => {
              const selected = step.id === active.id;
              return (
                <li key={step.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(step.id)}
                    className={
                      selected
                        ? "flex w-full items-center gap-3 rounded-xl border border-[#72b9ff] bg-[#3d52ff]/28 px-3 py-2 text-left"
                        : "flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-left hover:border-[#4e6bb0]"
                    }
                  >
                    <span className={selected ? "text-sm font-semibold text-[#8bd2ff]" : "text-sm font-semibold text-[#8ea1cd]"}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className={selected ? "text-sm font-medium text-[#e8f1ff]" : "text-sm text-[#becceb]"}>{step.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>

          <article className="neon-surface rounded-2xl p-6">
            <p className="inline-flex rounded-full bg-[#4a62ff]/26 px-3 py-1 text-xs font-semibold text-[#85cfff]">当前步骤</p>
            <h3 className="mt-3 text-2xl font-bold text-[#f2f6ff]">{active.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#bed0ef]">{active.scene}</p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-[#e4ecff]">关键动作</p>
                <ul className="mt-2 space-y-2 text-sm text-[#bfd0ef]">
                  {active.actions.map((action) => (
                    <li key={action}>• {action}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#e4ecff]">输出结果</p>
                <ul className="mt-2 space-y-2 text-sm text-[#bfd0ef]">
                  {active.outcomes.map((outcome) => (
                    <li key={outcome}>• {outcome}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.roles.map((role) => (
                <span key={role} className="rounded-full border border-[#78c6ff]/42 px-3 py-1 text-xs text-[#88d3ff]">
                  {role}
                </span>
              ))}
            </div>

            <div className="light-panel mt-6 grid gap-3 rounded-xl p-4 md:grid-cols-3">
              <div>
                <p className="text-xs text-[#9eb2df]">准备时间</p>
                <p className="text-lg font-bold text-[#7fd2ff]">-60%</p>
              </div>
              <div>
                <p className="text-xs text-[#9eb2df]">跟进完整度</p>
                <p className="text-lg font-bold text-[#7fd2ff]">+35%</p>
              </div>
              <div>
                <p className="text-xs text-[#9eb2df]">协同效率</p>
                <p className="text-lg font-bold text-[#7fd2ff]">+28%</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
