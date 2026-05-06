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
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-[#d8e5ff] bg-white p-6 shadow-[0_12px_26px_rgba(58,92,169,0.08)]"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>姓名*</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="name"
            aria-label="姓名"
            placeholder="請輸入姓名"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </label>
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>公司名稱*</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="company"
            aria-label="公司名稱"
            placeholder="請輸入公司名稱"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </label>
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>聯絡方式</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="contact"
            aria-label="聯絡方式"
            placeholder="電話或 WhatsApp"
            value={form.contact}
            onChange={(e) => update("contact", e.target.value)}
          />
        </label>
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>電子郵箱</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="email"
            aria-label="電子郵箱"
            placeholder="name@company.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </label>
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>用戶角色*</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="role"
            aria-label="用戶角色"
            placeholder="如：顧問、運營、管理者"
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
          />
        </label>
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>感興趣服務*</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="interestedService"
            aria-label="感興趣服務"
            placeholder="如：AI Chatbot、分紅查詢"
            value={form.interestedService}
            onChange={(e) => update("interestedService", e.target.value)}
          />
        </label>
      </div>
      <label className="space-y-1 text-sm text-[#4f6591]">
        <span>備註說明</span>
        <textarea
          className="h-28 w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
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
        className="rounded-xl bg-gradient-to-r from-[#2d66ff] to-[#6f76ff] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(49,94,205,0.28)] transition hover:translate-y-[-1px] disabled:opacity-60"
      >
        {status === "loading" ? "提交中..." : "提交預約"}
      </button>

      {status === "success" && <DemoFormState status="success" message={message} />}
      {status === "error" && <DemoFormState status="error" message={message} />}
    </form>
  );
}
