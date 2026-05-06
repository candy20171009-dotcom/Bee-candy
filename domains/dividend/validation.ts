import type { DividendQuery } from "./types";

export function normalizeDividendQuery(query: DividendQuery): DividendQuery {
  return {
    insuranceCompany: query.insuranceCompany?.trim() || undefined,
    productName: query.productName?.trim() || undefined,
    productExact: typeof query.productExact === "boolean" ? query.productExact : undefined,
  };
}
