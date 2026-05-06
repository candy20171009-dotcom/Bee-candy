export type DividendRecord = {
  id: string;
  insuranceCompany: string;
  productName: string;
  bonusType: string;
  currency: string;
  rates: Record<string, number | null>;
  latestRate: number | null;
  source: string;
  updatedAt: string;
};

export type DividendQuery = Partial<{
  insuranceCompany: string;
  productName: string;
  productExact: boolean;
}>;
