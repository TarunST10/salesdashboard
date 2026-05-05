// components/ui/FilterBar.tsx
"use client";
import clsx from "clsx";
import { Year } from "@/lib/salesData";

interface FilterBarProps {
  selected: Year;
  onChange: (year: Year) => void;
}

const YEARS: Year[] = ["2022", "2023", "2024"];

export default function FilterBar({ selected, onChange }: FilterBarProps) {
  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      {YEARS.map((year) => (
        <button
          key={year}
          onClick={() => onChange(year)}
          className={clsx(
            "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
            selected === year
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          )}
        >
          {year}
        </button>
      ))}
    </div>
  );
}
