"use client";

import { Montserrat } from "next/font/google";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={montserrat.className}>
      <CartProvider>
        <Navbar onSearch={handleSearch} />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </div>
  );
}
