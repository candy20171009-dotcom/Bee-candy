"use client";

import { useState } from "react";
import { DemoFormState } from "@/components/demo/demo-form-state";

const initial = {
  name: "",
  company: "",
  contact: "",
  email: "",
  role: "",
  interestedService: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export function DemoForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function update<K extends keyof typeof initial>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/demo-request", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("success");
      setMessage("預約提交成功，我們會盡快與你聯繫。");
      setForm(initial);
      return;
    }

    setStatus("error");
    setMessage(result.error?.message || "提交失敗，請稍後再試。");
  }

  return (
    <form onSubmit={onSubmit} className="panel-shadow space-y-4 rounded-2xl border border-brand/10 bg-surface p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>姓名*</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="name"
          aria-label="姓名"
          placeholder="請輸入姓名"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
        />
        </label>
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>公司名稱*</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="company"
          aria-label="公司名稱"
          placeholder="請輸入公司名稱"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
        </label>
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>聯絡方式</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="contact"
          aria-label="聯絡方式"
          placeholder="電話或 WhatsApp"
          value={form.contact}
          onChange={(e) => update("contact", e.target.value)}
        />
        </label>
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>電子郵箱</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="email"
          aria-label="電子郵箱"
          placeholder="name@company.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
        />
        </label>
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>用戶角色*</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="role"
          aria-label="用戶角色"
          placeholder="如：顧問、運營、管理者"
          value={form.role}
          onChange={(e) => update("role", e.target.value)}
        />
        </label>
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>感興趣服務*</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="interestedService"
          aria-label="感興趣服務"
          placeholder="如：AI Chatbot、分紅查詢"
          value={form.interestedService}
          onChange={(e) => update("interestedService", e.target.value)}
        />
        </label>
      </div>
      <label className="space-y-1 text-sm text-brand-ink/80">
        <span>備註說明</span>
        <textarea
          className="h-28 w-full rounded-lg border border-brand/15 px-3 py-2"
          name="message"
          aria-label="備註說明"
          placeholder="可補充你希望演示的業務場景"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-ink disabled:opacity-60"
      >
        {status === "loading" ? "提交中..." : "提交預約"}
      </button>

      {status === "success" && <DemoFormState status="success" message={message} />}
      {status === "error" && <DemoFormState status="error" message={message} />}
    </form>
  );
}
