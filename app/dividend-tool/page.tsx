"use client";

import { useState } from "react";
import { DividendFilter } from "@/components/dividend/dividend-filter";
import { DividendResults } from "@/components/dividend/dividend-results";
import type { DividendRecord } from "@/domains/dividend/types";

type FilterQuery = {
  insuranceCompany?: string;
  productName?: string;
  currency?: string;
  year?: string;
};

export default function DividendToolPage() {
  const [items, setItems] = useState<DividendRecord[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onSearch(query: FilterQuery) {
    setHasSearched(true);
    setErrorMessage("");

    const search = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
      if (value?.trim()) {
        search.set(key, value.trim());
      }
    });

    const response = await fetch(`/api/dividend?${search.toString()}`);
    const result = await response.json();

    if (!result.success) {
      setItems([]);
      setErrorMessage(result.error?.message || "數據暫時無法加載，請稍後再試。");
      return;
    }

    setItems(result.data.items);
  }

  return (
    <main className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/65">Dividend Achievement Tool</p>
      <h1 className="text-3xl font-bold text-brand-ink">分紅達成率查詢工具</h1>
      <p className="text-sm text-brand-ink/80">
        可按保險公司、產品、貨幣與年度查詢歷史分紅達成率。資料僅供參考，最終以官方披露為準。
      </p>

      <DividendFilter onSearch={onSearch} />

      {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
      <DividendResults items={items} hasSearched={hasSearched} />
    </main>
  );
}
