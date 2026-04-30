import type { DemoRequestInput } from "./types";

export type FieldError = { field: string; message: string };

export function validateDemoRequestInput(input: DemoRequestInput): FieldError[] {
  const errors: FieldError[] = [];

  if (!input.name.trim()) {
    errors.push({ field: "name", message: "姓名不能为空" });
  }
  if (!input.company.trim()) {
    errors.push({ field: "company", message: "公司名称不能为空" });
  }
  if (!input.role.trim()) {
    errors.push({ field: "role", message: "用户角色不能为空" });
  }
  if (!input.interestedService.trim()) {
    errors.push({ field: "interestedService", message: "感兴趣服务不能为空" });
  }

  const hasContact = input.contact.trim().length > 0;
  const hasEmail = input.email.trim().length > 0;
  if (!hasContact && !hasEmail) {
    errors.push({ field: "contact", message: "联系方式或邮箱至少填写一项" });
    errors.push({ field: "email", message: "联系方式或邮箱至少填写一项" });
  }

  if (input.email.trim() && !/^\S+@\S+\.\S+$/.test(input.email.trim())) {
    errors.push({ field: "email", message: "邮箱格式不正确" });
  }

  return errors;
}
