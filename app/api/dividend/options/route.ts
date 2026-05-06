import rows from "@/mocks/dividend-rates-2022.json";
import { ok } from "@/lib/http/api-response";

type DividendRow = {
  insuranceCompany: string;
  productName: string;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const insurer = searchParams.get("insuranceCompany")?.trim();
  const items = rows as DividendRow[];

  const insurers = Array.from(new Set(items.map((item) => item.insuranceCompany))).sort((a, b) =>
    a.localeCompare(b, "zh-Hant"),
  );

  const productPool = insurer
    ? items.filter((item) => item.insuranceCompany === insurer)
    : items;

  const products = Array.from(new Set(productPool.map((item) => item.productName))).sort((a, b) =>
    a.localeCompare(b, "zh-Hant"),
  );

  return ok({ insurers, products });
}

