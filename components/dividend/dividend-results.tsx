import type { DividendRecord } from "@/domains/dividend/types";
import { toLocalDateString } from "@/lib/utils/date";

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
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <thead>
          <tr className="bg-[#f3f8ff] text-left text-[#26458b]">
            <th className="px-3 py-3">保險公司</th>
            <th className="px-3 py-3">產品名稱</th>
            <th className="px-3 py-3">年度</th>
            <th className="px-3 py-3">貨幣類型</th>
            <th className="px-3 py-3">分紅達成率</th>
            <th className="px-3 py-3">數據來源</th>
            <th className="px-3 py-3">更新時間</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t border-[#e3ecff] text-[#4f6694]">
              <td className="px-3 py-3">{item.insuranceCompany}</td>
              <td className="px-3 py-3">{item.productName}</td>
              <td className="px-3 py-3">{item.year}</td>
              <td className="px-3 py-3">{item.currency}</td>
              <td className="px-3 py-3">{Math.round(item.achievementRate * 100)}%</td>
              <td className="px-3 py-3">{item.source}</td>
              <td className="px-3 py-3">{toLocalDateString(item.updatedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
