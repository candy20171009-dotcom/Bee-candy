import { searchDividendRates } from "@/features/dividend/search-dividend-rates";
import { fail, ok } from "@/lib/http/api-response";
import { getRepositories } from "@/repositories/repository-factory";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const yearValue = searchParams.get("year");
    const query = {
      insuranceCompany: searchParams.get("insuranceCompany") ?? undefined,
      productName: searchParams.get("productName") ?? undefined,
      currency: searchParams.get("currency") ?? undefined,
      year: yearValue ? Number(yearValue) : undefined,
    };

    const { dividendRepository } = getRepositories();
    const items = await searchDividendRates(dividendRepository, query);
    return ok({ items, total: items.length });
  } catch (error) {
    return fail(error);
  }
}
