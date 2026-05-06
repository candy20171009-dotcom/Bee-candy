"use client";

import { useState } from "react";
import { DividendFilter } from "@/components/dividend/dividend-filter";
import { DividendResults } from "@/components/dividend/dividend-results";
import type { DividendRecord } from "@/domains/dividend/types";

type FilterQuery = {
  insuranceCompany?: string;
  productName?: string;
  productExact?: boolean;
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
      if (typeof value === "string") {
        const trimmed = value.trim();
        if (trimmed) {
          search.set(key, trimmed);
        }
      } else if (typeof value === "boolean") {
        search.set(key, String(value));
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
    <main className="min-h-screen bg-[#f4f8ff] text-[#132344]">
      <section className="border-b border-[#dbe7ff] bg-[linear-gradient(160deg,#f7faff_0%,#edf4ff_80%)] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#3e63c6]">DIVIDEND TOOL</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#142a50]">分紅達成率查詢工具</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5a709c]">
            当前版本基于 2022 年报告，可按保險公司與產品名稱查詢分紅達成率。資料僅供參考，最終以官方披露為準。
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-6 py-12">
        <DividendFilter onSearch={onSearch} />
        {errorMessage ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{errorMessage}</p>
        ) : null}
        <DividendResults items={items} hasSearched={hasSearched} />
      </section>
    </main>
  );
}
