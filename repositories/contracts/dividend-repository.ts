import type { DividendQuery, DividendRecord } from "@/domains/dividend/types";

export interface DividendRepository {
  search(query: DividendQuery): Promise<DividendRecord[]>;
}
