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
    <section className="panel-shadow rounded-2xl border border-brand/10 bg-surface p-5">
      <div className="grid gap-3 md:grid-cols-4">
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>保險公司</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="insuranceCompany"
          aria-label="保險公司"
          placeholder="例如 Bee Life"
          onChange={(e) => setQuery((prev) => ({ ...prev, insuranceCompany: e.target.value }))}
        />
        </label>
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>產品名稱</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="productName"
          aria-label="產品名稱"
          placeholder="例如 Wealth Plus"
          onChange={(e) => setQuery((prev) => ({ ...prev, productName: e.target.value }))}
        />
        </label>
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>貨幣類型</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="currency"
          aria-label="貨幣類型"
          placeholder="例如 USD"
          onChange={(e) => setQuery((prev) => ({ ...prev, currency: e.target.value }))}
        />
        </label>
        <label className="space-y-1 text-sm text-brand-ink/80">
          <span>年度</span>
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          name="year"
          aria-label="年度"
          placeholder="例如 2024"
          onChange={(e) => setQuery((prev) => ({ ...prev, year: e.target.value }))}
        />
        </label>
      </div>
      <button
        className="mt-4 rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-ink"
        onClick={() => onSearch(query)}
      >
        開始查詢
      </button>
    </section>
  );
}
