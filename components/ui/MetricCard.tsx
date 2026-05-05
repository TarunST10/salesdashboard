// components/ui/MetricCard.tsx
import { TrendingUp, TrendingDown } from "lucide-react";
import clsx from "clsx";

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isUp: boolean;
}

export default function MetricCard({ label, value, change, isUp }: MetricCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="text-2xl font-semibold text-gray-900 mb-2">{value}</p>
      <span
        className={clsx(
          "inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
          isUp
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-700"
        )}
      >
        {isUp ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        {change}
      </span>
    </div>
  );
}
