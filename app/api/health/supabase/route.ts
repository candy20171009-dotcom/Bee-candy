import { getDataSource } from "@/lib/config/data-source";
import { fail, ok } from "@/lib/http/api-response";
import { supabaseFetch } from "@/lib/http/supabase-rest";

export async function GET() {
  try {
    const dataSource = getDataSource();
    if (dataSource !== "supabase") {
      return ok({
        connected: false,
        reason: "DATA_SOURCE is not supabase",
        dataSource,
      });
    }

    const [demoResponse, dividendResponse] = await Promise.all([
      supabaseFetch("demo_requests?select=id&limit=1"),
      supabaseFetch("dividend_rates?select=id&limit=1"),
    ]);

    const demoRows = (await demoResponse.json()) as unknown[];
    const dividendRows = (await dividendResponse.json()) as unknown[];

    return ok({
      connected: true,
      dataSource,
      checks: {
        demo_requests: { reachable: true, sampleCount: demoRows.length },
        dividend_rates: { reachable: true, sampleCount: dividendRows.length },
      },
    });
  } catch (error) {
    return fail(error);
  }
}
