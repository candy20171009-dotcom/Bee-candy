export type DataSource = "mock" | "supabase";

const allowed = new Set<DataSource>(["mock", "supabase"]);

export function getDataSource(): DataSource {
  const raw = process.env.DATA_SOURCE?.trim().toLowerCase() ?? "mock";
  if (allowed.has(raw as DataSource)) {
    return raw as DataSource;
  }
  return "mock";
}
