import type { DemoRequest, DemoRequestInput } from "@/domains/demo/types";

export interface DemoRequestRepository {
  create(input: DemoRequestInput): Promise<DemoRequest>;
}
