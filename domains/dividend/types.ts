export type DividendRecord = {
  id: string;
  insuranceCompany: string;
  productName: string;
  currency: string;
  year: number;
  achievementRate: number;
  source: string;
  updatedAt: string;
};

export type DividendQuery = Partial<{
  insuranceCompany: string;
  productName: string;
  currency: string;
  year: number;
}>;
