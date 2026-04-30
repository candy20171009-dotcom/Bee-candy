import type { DemoRequest, DemoRequestInput } from "@/domains/demo/types";
import type { DemoRequestRepository } from "@/repositories/contracts/demo-request-repository";

const requests: DemoRequest[] = [];

export class MockDemoRequestRepository implements DemoRequestRepository {
  async create(input: DemoRequestInput): Promise<DemoRequest> {
    const item: DemoRequest = {
      id: crypto.randomUUID(),
      status: "new",
      createdAt: new Date().toISOString(),
      ...input,
    };
    requests.push(item);
    return item;
  }
}
