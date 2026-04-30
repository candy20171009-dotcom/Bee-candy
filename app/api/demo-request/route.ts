import { submitDemoRequest } from "@/features/demo/submit-demo-request";
import { fail, ok } from "@/lib/http/api-response";
import { getRepositories } from "@/repositories/repository-factory";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { demoRequestRepository } = getRepositories();
    const saved = await submitDemoRequest(demoRequestRepository, payload);
    return ok({ requestId: saved.id, createdAt: saved.createdAt });
  } catch (error) {
    return fail(error);
  }
}
