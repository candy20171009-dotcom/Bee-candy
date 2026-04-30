export function DemoFormState({ status, message }: { status: "success" | "error"; message: string }) {
  return <p className={status === "success" ? "text-sm text-emerald-600" : "text-sm text-red-600"}>{message}</p>;
}
