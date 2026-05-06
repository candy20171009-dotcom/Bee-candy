import { searchDividendRates } from "@/features/dividend/search-dividend-rates";
import { fail, ok } from "@/lib/http/api-response";
import { getRepositories } from "@/repositories/repository-factory";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productExact = searchParams.get("productExact");
    const query = {
      insuranceCompany: searchParams.get("insuranceCompany") ?? undefined,
      productName: searchParams.get("productName") ?? undefined,
      productExact: productExact === "true",
    };

    const { dividendRepository } = getRepositories();
    const items = await searchDividendRates(dividendRepository, query);
    return ok({ items, total: items.length });
  } catch (error) {
    return fail(error);
  }
}
