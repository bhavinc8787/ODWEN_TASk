"use client";

import Sidebar from "@/app/components/Sidebar";
import { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 mt-20">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
