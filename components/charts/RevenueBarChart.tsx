// components/charts/RevenueBarChart.tsx
"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthlySales, Year } from "@/lib/salesData";

interface Props {
  data: MonthlySales[];
  selectedYear: Year;
}

const COLORS: Record<Year, string> = {
  "2022": "#d1d5db",
  "2023": "#93c5fd",
  "2024": "#1d4ed8",
};

const ALL_YEARS: Year[] = ["2022", "2023", "2024"];

export default function RevenueBarChart({ data, selectedYear }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-800">Monthly Revenue</h2>
        <div className="flex items-center gap-3">
          {ALL_YEARS.map((yr) => (
            <span key={yr} className="flex items-center gap-1 text-xs text-gray-500">
              <span
                className="inline-block w-2.5 h-2.5 rounded-sm"
                style={{ background: COLORS[yr] }}
              />
              {yr}
            </span>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v}K`}
          />
          <Tooltip
            formatter={(val: number) => [`$${val}K`, ""]}
            contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
          />
          <Bar dataKey="revenue2022" name="2022" fill={COLORS["2022"]} radius={[3, 3, 0, 0]} />
          <Bar dataKey="revenue2023" name="2023" fill={COLORS["2023"]} radius={[3, 3, 0, 0]} />
          <Bar dataKey="revenue2024" name="2024" fill={COLORS["2024"]} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
