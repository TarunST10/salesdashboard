// lib/salesData.ts
// Mock sales data for 2022, 2023, 2024
// In a real scenario this could be fetched from Kaggle CSV via papaparse

export type Year = "2022" | "2023" | "2024";

export interface MonthlySales {
  month: string;
  revenue2022: number;
  revenue2023: number;
  revenue2024: number;
  target2024: number;
}

export interface CategorySales {
  category: string;
  revenue: string;
  units: number;
  growth: string;
  growthNum: number;
  status: "High" | "Medium" | "Low";
  share: number;
}

export interface KPI {
  totalRevenue: string;
  revenueChange: string;
  revenueUp: boolean;
  orders: string;
  ordersChange: string;
  ordersUp: boolean;
  avgOrderValue: string;
  aovChange: string;
  aovUp: boolean;
  conversionRate: string;
  conversionChange: string;
  conversionUp: boolean;
}

export const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

export const monthlyData: MonthlySales[] = MONTHS.map((month, i) => {
  const base2022 = [148,132,165,172,155,190,210,185,178,196,220,240][i];
  const base2023 = [172,158,195,210,188,225,248,212,205,230,265,290][i];
  const base2024 = [198,182,228,248,222,268,295,255,240,272,310,330][i];
  return {
    month,
    revenue2022: base2022,
    revenue2023: base2023,
    revenue2024: base2024,
    target2024: Math.round(base2024 * 1.05),
  };
});

export const categoryDataByYear: Record<Year, CategorySales[]> = {
  "2022": [
    { category: "Electronics",   revenue: "$612K", units: 3820, growth: "+14%", growthNum: 14,  status: "High",   share: 30 },
    { category: "Apparel",       revenue: "$448K", units: 6210, growth: "+8%",  growthNum: 8,   status: "Medium", share: 22 },
    { category: "Home & Garden", revenue: "$310K", units: 2140, growth: "+5%",  growthNum: 5,   status: "Medium", share: 15 },
    { category: "Sports",        revenue: "$268K", units: 1890, growth: "-2%",  growthNum: -2,  status: "Low",    share: 13 },
    { category: "Books",         revenue: "$201K", units: 4550, growth: "+3%",  growthNum: 3,   status: "Medium", share: 10 },
  ],
  "2023": [
    { category: "Electronics",   revenue: "$748K", units: 4510, growth: "+22%", growthNum: 22,  status: "High",   share: 32 },
    { category: "Apparel",       revenue: "$502K", units: 7018, growth: "+12%", growthNum: 12,  status: "High",   share: 21 },
    { category: "Home & Garden", revenue: "$368K", units: 2480, growth: "+19%", growthNum: 19,  status: "High",   share: 16 },
    { category: "Sports",        revenue: "$290K", units: 2102, growth: "+8%",  growthNum: 8,   status: "Medium", share: 12 },
    { category: "Books",         revenue: "$212K", units: 4820, growth: "+5%",  growthNum: 5,   status: "Medium", share: 9  },
  ],
  "2024": [
    { category: "Electronics",   revenue: "$892K", units: 5280, growth: "+19%", growthNum: 19,  status: "High",   share: 31 },
    { category: "Apparel",       revenue: "$598K", units: 8140, growth: "+19%", growthNum: 19,  status: "High",   share: 21 },
    { category: "Home & Garden", revenue: "$448K", units: 3010, growth: "+22%", growthNum: 22,  status: "High",   share: 16 },
    { category: "Sports",        revenue: "$412K", units: 2690, growth: "+42%", growthNum: 42,  status: "High",   share: 14 },
    { category: "Books",         revenue: "$248K", units: 5420, growth: "+17%", growthNum: 17,  status: "Medium", share: 9  },
  ],
};

export const kpiByYear: Record<Year, KPI> = {
  "2022": {
    totalRevenue: "$2.03M",   revenueChange: "+8.1% YoY",    revenueUp: true,
    orders: "11,240",         ordersChange: "+6.2%",          ordersUp: true,
    avgOrderValue: "$181",    aovChange: "+2.1%",              aovUp: true,
    conversionRate: "3.4%",   conversionChange: "-0.1pp",     conversionUp: false,
  },
  "2023": {
    totalRevenue: "$2.40M",   revenueChange: "+18.2% YoY",   revenueUp: true,
    orders: "13,220",         ordersChange: "+17.6%",         ordersUp: true,
    avgOrderValue: "$182",    aovChange: "+0.6%",              aovUp: true,
    conversionRate: "4.0%",   conversionChange: "+0.6pp",     conversionUp: true,
  },
  "2024": {
    totalRevenue: "$2.84M",   revenueChange: "+18.3% YoY",   revenueUp: true,
    orders: "14,820",         ordersChange: "+12.1%",         ordersUp: true,
    avgOrderValue: "$191",    aovChange: "+5.5%",              aovUp: true,
    conversionRate: "3.8%",   conversionChange: "-0.2pp",     conversionUp: false,
  },
};
