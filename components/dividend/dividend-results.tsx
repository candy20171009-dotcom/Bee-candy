import type { DividendRecord } from "@/domains/dividend/types";

function rateLabel(rate: number | null) {
  if (rate === null) return "不適用";
  return `${Math.round(rate * 100)}%`;
}

function rateStyle(rate: number | null) {
  if (rate === null) return "bg-slate-100 text-slate-500";
  if (rate >= 1) return "bg-emerald-100 text-emerald-700";
  if (rate >= 0.8) return "bg-blue-100 text-blue-700";
  return "bg-amber-100 text-amber-700";
}

export function DividendResults({ items, hasSearched }: { items: DividendRecord[]; hasSearched: boolean }) {
  if (!hasSearched) {
    return (
      <p className="rounded-lg border border-[#d8e5ff] bg-white px-4 py-3 text-sm text-[#5f7399]">
        請先選擇篩選條件後開始查詢。
      </p>
    );
  }

  if (!items.length) {
    return (
      <p className="rounded-lg border border-[#d8e5ff] bg-white px-4 py-3 text-sm text-[#5f7399]">
        暫無匹配數據，請調整篩選條件。
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-[#d8e5ff] bg-white shadow-[0_12px_26px_rgba(58,92,169,0.08)]">
      <table className="w-full min-w-[920px] border-collapse text-sm">
        <colgroup>
          <col className="w-[120px]" />
          <col className="w-[340px]" />
          <col className="w-[120px]" />
          <col className="w-[110px]" />
          <col className="w-[90px]" />
          <col className="w-[90px]" />
          <col className="w-[90px]" />
          <col className="w-[90px]" />
        </colgroup>
        <thead>
          <tr className="bg-[#f3f8ff] text-left text-[#26458b]">
            <th className="px-4 py-3 whitespace-nowrap">保險公司</th>
            <th className="px-4 py-3">產品名稱</th>
            <th className="px-4 py-3 whitespace-nowrap">紅利類型</th>
            <th className="px-4 py-3 whitespace-nowrap">貨幣類型</th>
            <th className="px-4 py-3 text-center whitespace-nowrap">2021</th>
            <th className="px-4 py-3 text-center whitespace-nowrap">2020</th>
            <th className="px-4 py-3 text-center whitespace-nowrap">2019</th>
            <th className="px-4 py-3 text-center whitespace-nowrap">2018</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t border-[#e3ecff] text-[#4f6694]">
              <td className="px-4 py-3 whitespace-nowrap">{item.insuranceCompany}</td>
              <td className="px-4 py-3 leading-6 font-medium text-[#1f3f88] break-words">{item.productName}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.bonusType}</td>
              <td className="px-4 py-3 whitespace-nowrap">{item.currency}</td>
              <td className="px-4 py-3 text-center">
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${rateStyle(item.rates["2021"] ?? null)}`}>
                  {rateLabel(item.rates["2021"] ?? null)}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${rateStyle(item.rates["2020"] ?? null)}`}>
                  {rateLabel(item.rates["2020"] ?? null)}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${rateStyle(item.rates["2019"] ?? null)}`}>
                  {rateLabel(item.rates["2019"] ?? null)}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${rateStyle(item.rates["2018"] ?? null)}`}>
                  {rateLabel(item.rates["2018"] ?? null)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
