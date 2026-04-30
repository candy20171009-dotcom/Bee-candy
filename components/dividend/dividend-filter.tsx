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
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          placeholder="保險公司"
          onChange={(e) => setQuery((prev) => ({ ...prev, insuranceCompany: e.target.value }))}
        />
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          placeholder="產品名稱"
          onChange={(e) => setQuery((prev) => ({ ...prev, productName: e.target.value }))}
        />
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          placeholder="貨幣類型"
          onChange={(e) => setQuery((prev) => ({ ...prev, currency: e.target.value }))}
        />
        <input
          className="rounded-lg border border-brand/15 px-3 py-2"
          placeholder="年度"
          onChange={(e) => setQuery((prev) => ({ ...prev, year: e.target.value }))}
        />
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
