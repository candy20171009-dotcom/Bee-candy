import type { DemoRequestInput } from "@/domains/demo/types";
import { validateDemoRequestInput } from "@/domains/demo/validation";
import { ApiError } from "@/lib/http/api-error";
import type { DemoRequestRepository } from "@/repositories/contracts/demo-request-repository";

export async function submitDemoRequest(repository: DemoRequestRepository, input: DemoRequestInput) {
  const errors = validateDemoRequestInput(input);
  if (errors.length) {
    throw new ApiError(400, "VALIDATION_ERROR", "表单校验失败", errors);
  }
  return repository.create(input);
}
