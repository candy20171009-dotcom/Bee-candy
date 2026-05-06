import data from "@/mocks/dividend-rates-2022.json";
import type { DividendQuery, DividendRecord } from "@/domains/dividend/types";
import type { DividendRepository } from "@/repositories/contracts/dividend-repository";

function exactIncludes(source: string, term: string): boolean {
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

export class MockDividendRepository implements DividendRepository {
  async search(query: DividendQuery): Promise<DividendRecord[]> {
    return (data as DividendRecord[]).filter((row) => {
      if (query.insuranceCompany && !exactIncludes(row.insuranceCompany, query.insuranceCompany)) {
        return false;
      }
      if (query.productName) {
        if (query.productExact) {
          if (!(equalsIgnoreCase(row.productName, query.productName) || equalsStrictNormalized(row.productName, query.productName))) {
            return false;
          }
        } else if (!exactIncludes(row.productName, query.productName)) {
          return false;
        }
      }
      return true;
    });
  }
}
