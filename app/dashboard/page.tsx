// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import MetricCard from "@/components/ui/MetricCard";
import FilterBar from "@/components/ui/FilterBar";
import RevenueBarChart from "@/components/charts/RevenueBarChart";
import RevenueTrendChart from "@/components/charts/RevenueTrendChart";
import SalesTable from "@/components/tables/SalesTable";
import {
  monthlyData,
  categoryDataByYear,
  kpiByYear,
  Year,
} from "@/lib/salesData";

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState<Year>("2024");

  const kpi = kpiByYear[selectedYear];
  const categories = categoryDataByYear[selectedYear];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Sales performance for {selectedYear}
          </p>
        </div>
        <FilterBar selected={selectedYear} onChange={setSelectedYear} />
      </div>

      {/* KPI Cards — atomic component grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          label="Total Revenue"
          value={kpi.totalRevenue}
          change={kpi.revenueChange}
          isUp={kpi.revenueUp}
        />
        <MetricCard
          label="Orders"
          value={kpi.orders}
          change={kpi.ordersChange}
          isUp={kpi.ordersUp}
        />
        <MetricCard
          label="Avg Order Value"
          value={kpi.avgOrderValue}
          change={kpi.aovChange}
          isUp={kpi.aovUp}
        />
        <MetricCard
          label="Conversion Rate"
          value={kpi.conversionRate}
          change={kpi.conversionChange}
          isUp={kpi.conversionUp}
        />
      </div>

      {/* Charts — atomic chart components */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <RevenueBarChart data={monthlyData} selectedYear={selectedYear} />
        <RevenueTrendChart data={monthlyData} selectedYear={selectedYear} />
      </div>

      {/* Table — atomic table component */}
      <SalesTable data={categories} />
    </div>
  );
}
