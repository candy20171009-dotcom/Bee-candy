import { ApiError } from "@/lib/http/api-error";

function getEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new ApiError(500, "CONFIG_MISSING", `缺少环境变量: ${name}`);
  }
  return value;
}

export function getSupabaseConfig() {
  return {
    url: getEnv("NEXT_PUBLIC_SUPABASE_URL"),
    serviceKey: getEnv("SUPABASE_SERVICE_ROLE_KEY"),
  };
}

export async function supabaseFetch(path: string, init?: RequestInit) {
  const { url, serviceKey } = getSupabaseConfig();
  const endpoint = `${url.replace(/\/+$/, "")}/rest/v1/${path.replace(/^\/+/, "")}`;

  const headers = new Headers(init?.headers || {});
  headers.set("apikey", serviceKey);
  headers.set("Authorization", `Bearer ${serviceKey}`);
  headers.set("Content-Type", "application/json");

  const response = await fetch(endpoint, {
    ...init,
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new ApiError(response.status, "SUPABASE_REQUEST_FAILED", "Supabase 请求失败", {
      endpoint,
      status: response.status,
      body: text,
    });
  }

  return response;
}
