import { dataSource } from "@/lib/config/data-source";
import { MockDemoRequestRepository } from "@/repositories/mock/mock-demo-request-repository";
import { MockDividendRepository } from "@/repositories/mock/mock-dividend-repository";

export function getRepositories() {
  if (dataSource === "mock") {
    return {
      demoRequestRepository: new MockDemoRequestRepository(),
      dividendRepository: new MockDividendRepository(),
    };
  }

  throw new Error("Unsupported data source");
}
