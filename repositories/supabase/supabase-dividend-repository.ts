import type { DividendQuery, DividendRecord } from "@/domains/dividend/types";
import type { DividendRepository } from "@/repositories/contracts/dividend-repository";
import { supabaseFetch } from "@/lib/http/supabase-rest";

function escapeLike(value: string): string {
  return value.replace(/[%_]/g, "");
}

function mapRowToDividend(row: Record<string, unknown>): DividendRecord {
  return {
    id: String(row.id),
    insuranceCompany: String(row.insurance_company ?? ""),
    productName: String(row.product_name ?? ""),
    currency: String(row.currency ?? ""),
    year: Number(row.year ?? 0),
    achievementRate: Number(row.achievement_rate ?? 0),
    source: String(row.source ?? ""),
    updatedAt: String(row.updated_at ?? new Date().toISOString()),
  };
}

export class SupabaseDividendRepository implements DividendRepository {
  async search(query: DividendQuery): Promise<DividendRecord[]> {
    const params = new URLSearchParams();
    params.set("select", "*");
    params.set("order", "updated_at.desc");

    if (query.insuranceCompany) {
      params.set("insurance_company", `ilike.*${escapeLike(query.insuranceCompany)}*`);
    }
    if (query.productName) {
      params.set("product_name", `ilike.*${escapeLike(query.productName)}*`);
    }
    if (query.currency) {
      params.set("currency", `eq.${query.currency}`);
    }
    if (query.year) {
      params.set("year", `eq.${query.year}`);
    }

    const response = await supabaseFetch(`dividend_rates?${params.toString()}`);
    const rows = (await response.json()) as Record<string, unknown>[];
    return rows.map(mapRowToDividend);
  }
}
