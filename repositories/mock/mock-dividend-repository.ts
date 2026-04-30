import data from "@/mocks/dividend-rates.json";
import type { DividendQuery, DividendRecord } from "@/domains/dividend/types";
import type { DividendRepository } from "@/repositories/contracts/dividend-repository";

function exactIncludes(source: string, term: string): boolean {
  return source.toLowerCase().includes(term.toLowerCase());
}

export class MockDividendRepository implements DividendRepository {
  async search(query: DividendQuery): Promise<DividendRecord[]> {
    return (data as DividendRecord[]).filter((row) => {
      if (query.insuranceCompany && !exactIncludes(row.insuranceCompany, query.insuranceCompany)) {
        return false;
      }
      if (query.productName && !exactIncludes(row.productName, query.productName)) {
        return false;
      }
      if (query.currency && row.currency.toLowerCase() !== query.currency.toLowerCase()) {
        return false;
      }
      if (query.year && row.year !== query.year) {
        return false;
      }
      return true;
    });
  }
}
