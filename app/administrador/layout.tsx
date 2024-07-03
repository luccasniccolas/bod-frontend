import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./../ui/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
