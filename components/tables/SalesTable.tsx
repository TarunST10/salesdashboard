// components/tables/SalesTable.tsx
import { CategorySales } from "@/lib/salesData";
import clsx from "clsx";

interface Props {
  data: CategorySales[];
}

const statusStyle: Record<string, string> = {
  High:   "bg-green-100 text-green-800",
  Medium: "bg-amber-100 text-amber-800",
  Low:    "bg-red-100 text-red-700",
};

export default function SalesTable({ data }: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h2 className="text-sm font-semibold text-gray-800 mb-4">Sales by Category</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              {["Category", "Revenue", "Units", "Growth", "Status", "Share"].map((h) => (
                <th
                  key={h}
                  className="text-left text-xs font-medium text-gray-400 uppercase tracking-wide pb-3 pr-4"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.category} className="border-b border-gray-50 last:border-0">
                <td className="py-3 pr-4 font-medium text-gray-800">{row.category}</td>
                <td className="py-3 pr-4 text-gray-700 font-semibold">{row.revenue}</td>
                <td className="py-3 pr-4 text-gray-600">{row.units.toLocaleString()}</td>
                <td
                  className={clsx(
                    "py-3 pr-4 font-medium",
                    row.growthNum >= 0 ? "text-green-700" : "text-red-600"
                  )}
                >
                  {row.growth}
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={clsx(
                      "inline-block text-xs font-medium px-2.5 py-0.5 rounded-full",
                      statusStyle[row.status]
                    )}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-3 pr-4 w-36">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                      <div
                        className="bg-blue-600 h-1.5 rounded-full"
                        style={{ width: `${row.share * 3}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-8">{row.share}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
