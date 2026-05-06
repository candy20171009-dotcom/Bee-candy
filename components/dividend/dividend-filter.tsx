"use client";

import { useState } from "react";

type Query = {
  insuranceCompany?: string;
  productName?: string;
  currency?: string;
  year?: string;
};

export function DividendFilter({ onSearch }: { onSearch: (query: Query) => void }) {
  const [query, setQuery] = useState<Query>({});

  return (
    <section className="rounded-2xl border border-[#d8e5ff] bg-white p-5 shadow-[0_12px_26px_rgba(58,92,169,0.08)]">
      <div className="grid gap-3 md:grid-cols-4">
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>保險公司</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="insuranceCompany"
            aria-label="保險公司"
            placeholder="例如 Bee Life"
            onChange={(e) => setQuery((prev) => ({ ...prev, insuranceCompany: e.target.value }))}
          />
        </label>
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>產品名稱</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="productName"
            aria-label="產品名稱"
            placeholder="例如 Wealth Plus"
            onChange={(e) => setQuery((prev) => ({ ...prev, productName: e.target.value }))}
          />
        </label>
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>貨幣類型</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="currency"
            aria-label="貨幣類型"
            placeholder="例如 USD"
            onChange={(e) => setQuery((prev) => ({ ...prev, currency: e.target.value }))}
          />
        </label>
        <label className="space-y-1 text-sm text-[#4f6591]">
          <span>年度</span>
          <input
            className="w-full rounded-lg border border-[#cfe0ff] bg-[#f8fbff] px-3 py-2 text-[#1f3f88] outline-none ring-[#9bb8ff] transition focus:ring-2"
            name="year"
            aria-label="年度"
            placeholder="例如 2024"
            onChange={(e) => setQuery((prev) => ({ ...prev, year: e.target.value }))}
          />
        </label>
      </div>
      <button
        className="mt-4 rounded-xl bg-gradient-to-r from-[#2d66ff] to-[#6f76ff] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(49,94,205,0.28)] transition hover:translate-y-[-1px]"
        onClick={() => onSearch(query)}
      >
        開始查詢
      </button>
    </section>
  );
}
