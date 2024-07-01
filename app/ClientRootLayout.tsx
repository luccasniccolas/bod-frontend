"use client";

import { Montserrat } from "next/font/google";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import { CartProvider } from "./context/CartContext";
import { useState, createContext, useContext } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

// Crear un contexto para la búsqueda y categoría
const SearchContext = createContext(null);

export function useSearch() {
  return useContext(SearchContext);
}

export default function ClientRootLayout({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={montserrat.className}>
      <CartProvider>
        <SearchContext.Provider value={{ searchTerm, selectedCategory, handleSearch, handleCategorySelect }}>
          <Navbar onSearch={handleSearch} onCategorySelect={handleCategorySelect} />
          <main>{children}</main>
          <Footer />
        </SearchContext.Provider>
      </CartProvider>
    </div>
  );
}