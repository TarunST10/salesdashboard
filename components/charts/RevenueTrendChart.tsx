// components/charts/RevenueTrendChart.tsx
"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { MonthlySales, Year } from "@/lib/salesData";

interface Props {
  data: MonthlySales[];
  selectedYear: Year;
}

const KEY_MAP: Record<Year, keyof MonthlySales> = {
  "2022": "revenue2022",
  "2023": "revenue2023",
  "2024": "revenue2024",
};

export default function RevenueTrendChart({ data, selectedYear }: Props) {
  const revenueKey = KEY_MAP[selectedYear];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-800">Revenue Trend</h2>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <span className="inline-block w-5 h-0.5 bg-blue-600" />
            Revenue
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <span className="inline-block w-5 h-0.5 bg-red-400 border-t-2 border-dashed border-red-400" />
            Target
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 4, right: 4, left: -10, bottom: 0 }}>
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
          <Line
            type="monotone"
            dataKey={revenueKey}
            name="Revenue"
            stroke="#1d4ed8"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="target2024"
            name="Target"
            stroke="#f87171"
            strokeWidth={1.5}
            strokeDasharray="5 4"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
