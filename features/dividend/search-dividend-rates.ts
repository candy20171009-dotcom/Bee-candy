import type { DividendQuery } from "@/domains/dividend/types";
import { normalizeDividendQuery } from "@/domains/dividend/validation";
import type { DividendRepository } from "@/repositories/contracts/dividend-repository";

export async function searchDividendRates(repository: DividendRepository, query: DividendQuery) {
  const normalized = normalizeDividendQuery(query);
  return repository.search(normalized);
}
