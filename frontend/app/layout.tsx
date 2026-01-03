import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Inventory Management System",
  description: "Professional Inventory Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
