import mockData from "@/mocks/dividend-rates-2022.json";
import type { DividendQuery, DividendRecord } from "@/domains/dividend/types";
import type { DividendRepository } from "@/repositories/contracts/dividend-repository";

function includesIgnoreCase(source: string, term: string): boolean {
  return source.toLowerCase().includes(term.toLowerCase());
}

function equalsIgnoreCase(a: string, b: string): boolean {
  return a.trim().toLowerCase() === b.trim().toLowerCase();
}

function normalizeSpaces(value: string): string {
  return value.replace(/\s+/g, "");
}

function equalsStrictNormalized(a: string, b: string): boolean {
  return normalizeSpaces(a) === normalizeSpaces(b);
}

export class SupabaseDividendRepository implements DividendRepository {
  async search(query: DividendQuery): Promise<DividendRecord[]> {
    // 当前版本固定对齐 2022 报告口径，优先使用清洗后的本地数据源。
    // 后续如需切回 Supabase，可在此恢复远端查询并保持同一返回结构。
    return (mockData as DividendRecord[]).filter((row) => {
      if (query.insuranceCompany && !includesIgnoreCase(row.insuranceCompany, query.insuranceCompany)) {
        return false;
      }
      if (query.productName) {
        if (query.productExact) {
          if (!(equalsIgnoreCase(row.productName, query.productName) || equalsStrictNormalized(row.productName, query.productName))) {
            return false;
          }
        } else if (!includesIgnoreCase(row.productName, query.productName)) {
          return false;
        }
      }
      return true;
    });
  }
}
