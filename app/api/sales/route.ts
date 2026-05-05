// app/api/sales/route.ts
import { NextResponse } from "next/server";
import { monthlyData, categoryDataByYear, kpiByYear } from "@/lib/salesData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = (searchParams.get("year") ?? "2024") as "2022" | "2023" | "2024";

  return NextResponse.json({
    year,
    kpi: kpiByYear[year],
    monthly: monthlyData,
    categories: categoryDataByYear[year],
  });
}
