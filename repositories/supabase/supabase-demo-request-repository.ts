import type { DemoRequest, DemoRequestInput } from "@/domains/demo/types";
import type { DemoRequestRepository } from "@/repositories/contracts/demo-request-repository";
import { supabaseFetch } from "@/lib/http/supabase-rest";

function mapRowToDemoRequest(row: Record<string, unknown>): DemoRequest {
  return {
    id: String(row.id),
    name: String(row.name ?? ""),
    company: String(row.company ?? ""),
    contact: String(row.contact ?? ""),
    email: String(row.email ?? ""),
    role: String(row.role ?? ""),
    interestedService: String(row.interested_service ?? ""),
    message: String(row.message ?? ""),
    status: (String(row.status ?? "new") as DemoRequest["status"]),
    createdAt: String(row.created_at ?? new Date().toISOString()),
  };
}

export class SupabaseDemoRequestRepository implements DemoRequestRepository {
  async create(input: DemoRequestInput): Promise<DemoRequest> {
    const payload = {
      name: input.name,
      company: input.company,
      contact: input.contact,
      email: input.email,
      role: input.role,
      interested_service: input.interestedService,
      message: input.message,
      status: "new",
    };

    const response = await supabaseFetch("demo_requests?select=*", {
      method: "POST",
      headers: {
        Prefer: "return=representation",
      },
      body: JSON.stringify(payload),
    });

    const rows = (await response.json()) as Record<string, unknown>[];
    return mapRowToDemoRequest(rows[0] ?? {});
  }
}
