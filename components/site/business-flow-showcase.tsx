"use client";

import { useState } from "react";
import { businessFlowSteps } from "@/features/site/business-flow-content";

export function BusinessFlowShowcase() {
  const [activeId, setActiveId] = useState(businessFlowSteps[2]?.id ?? businessFlowSteps[0].id);
  const active = businessFlowSteps.find((step) => step.id === activeId) ?? businessFlowSteps[0];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[#1275FD]">Business Flow</p>
      <h2 className="mt-2 text-3xl font-bold text-[#444]">从线索到续期，一体化业务闭环</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-[#888]">
        将顾问、团队长与运营协同在同一流程中，减少断点与重复沟通，提升签单与服务效率。
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-[260px_1fr]">
        <ol className="space-y-2 rounded-2xl border border-[#d8d8d8] bg-white p-4">
          {businessFlowSteps.map((step, idx) => {
            const selected = step.id === active.id;
            return (
              <li key={step.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  className={
                    selected
                      ? "flex w-full items-center gap-3 rounded-xl border border-[#1275FD] bg-[#1275FD]/10 px-3 py-2 text-left"
                      : "flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-left hover:border-[#d8d8d8]"
                  }
                >
                  <span className={selected ? "text-sm font-semibold text-[#1275FD]" : "text-sm font-semibold text-[#888]"}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className={selected ? "text-sm font-medium text-[#333]" : "text-sm text-[#555]"}>{step.title}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <article className="rounded-2xl border border-[#d8d8d8] bg-white p-6">
          <p className="inline-flex rounded-full bg-[#1275FD]/10 px-3 py-1 text-xs font-semibold text-[#1275FD]">当前步骤</p>
          <h3 className="mt-3 text-2xl font-bold text-[#444]">{active.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[#666]">{active.scene}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-[#333]">关键动作</p>
              <ul className="mt-2 space-y-2 text-sm text-[#666]">
                {active.actions.map((action) => (
                  <li key={action}>• {action}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#333]">输出结果</p>
              <ul className="mt-2 space-y-2 text-sm text-[#666]">
                {active.outcomes.map((outcome) => (
                  <li key={outcome}>• {outcome}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {active.roles.map((role) => (
              <span key={role} className="rounded-full border border-[#1275FD]/30 px-3 py-1 text-xs text-[#1275FD]">
                {role}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-3 rounded-xl bg-[#f7f9fc] p-4 md:grid-cols-3">
            <div>
              <p className="text-xs text-[#888]">准备时间</p>
              <p className="text-lg font-bold text-[#1275FD]">-60%</p>
            </div>
            <div>
              <p className="text-xs text-[#888]">跟进完整度</p>
              <p className="text-lg font-bold text-[#1275FD]">+35%</p>
            </div>
            <div>
              <p className="text-xs text-[#888]">协同效率</p>
              <p className="text-lg font-bold text-[#1275FD]">+28%</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
