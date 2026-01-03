"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdInventory2,
  MdCategory,
  MdShoppingCart,
  MdSettings,
} from "react-icons/md";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: MdDashboard, href: "/dashboard" },
    { name: "Products", icon: MdInventory2, href: "/products" },
    { name: "Categories", icon: MdCategory, href: "/categories" },
    { name: "Orders", icon: MdShoppingCart, href: "/orders" },
    { name: "Settings", icon: MdSettings, href: "/settings" },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-lg h-screen fixed left-0 top-0 pt-20">
      <nav className="flex flex-col gap-2 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-700 text-blue-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
