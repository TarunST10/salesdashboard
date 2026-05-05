// components/Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  BarChart2,
  Settings,
  TrendingUp,
} from "lucide-react";
import clsx from "clsx";

const NAV = [
  { href: "/dashboard", label: "Dashboard",  icon: LayoutDashboard },
  { href: "/dashboard/products", label: "Products",   icon: ShoppingBag },
  { href: "/dashboard/reports",  label: "Reports",    icon: BarChart2 },
  { href: "/dashboard/settings", label: "Settings",   icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 bg-white border-r border-gray-200 flex flex-col py-6 px-3">
      {/* Logo */}
      <div className="flex items-center gap-2 px-3 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-white" />
        </div>
        <span className="font-semibold text-gray-900">SalesMetrics</span>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-3">
        <div className="text-xs text-gray-400">Sales Dashboard v1.0</div>
      </div>
    </aside>
  );
}
