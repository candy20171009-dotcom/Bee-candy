import type { DividendQuery } from "./types";

export function normalizeDividendQuery(query: DividendQuery): DividendQuery {
  return {
    insuranceCompany: query.insuranceCompany?.trim() || undefined,
    productName: query.productName?.trim() || undefined,
    currency: query.currency?.trim() || undefined,
    year: typeof query.year === "number" && Number.isFinite(query.year) ? query.year : undefined,
  };
}
