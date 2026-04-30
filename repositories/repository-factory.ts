import { getDataSource } from "@/lib/config/data-source";
import { MockDemoRequestRepository } from "@/repositories/mock/mock-demo-request-repository";
import { MockDividendRepository } from "@/repositories/mock/mock-dividend-repository";
import { SupabaseDemoRequestRepository } from "@/repositories/supabase/supabase-demo-request-repository";
import { SupabaseDividendRepository } from "@/repositories/supabase/supabase-dividend-repository";

export function getRepositories() {
  const dataSource = getDataSource();

  if (dataSource === "mock") {
    return {
      demoRequestRepository: new MockDemoRequestRepository(),
      dividendRepository: new MockDividendRepository(),
    };
  }

  if (dataSource === "supabase") {
    return {
      demoRequestRepository: new SupabaseDemoRequestRepository(),
      dividendRepository: new SupabaseDividendRepository(),
    };
  }

  throw new Error("Unsupported data source");
}
