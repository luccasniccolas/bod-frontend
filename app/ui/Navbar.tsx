"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./globals.css";

import { useSearch } from "../ClientRootLayout";

export default function Navbar() {
  const { handleSearch, handleCategorySelect } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  const handleCategoryClick = (category) => {
    handleCategorySelect(category);
  };

  return (
    <header>
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Link href="/">
            <img src="/images/bod/logo-formatted.png" className="w-16 cursor-pointer" alt="Logo" />
          </Link>
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            menuOpen ? "top-[8%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <button className="hover:text-white" onClick={() => handleCategoryClick("polerones")}>
                Polerones
              </button>
            </li>
            <li>
              <button className="hover:text-white" onClick={() => handleCategoryClick("poleras")}>
                Poleras
              </button>
            </li>
            <li>
              <button className="hover:text-white" onClick={() => handleCategoryClick("pantalones")}>
                Pantalones
              </button>
            </li>
            <li>
              <button className="hover:text-white" onClick={() => handleCategoryClick("otros")}>
                Otros
              </button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-2 py-1 border rounded"
            />
            <button type="submit" className="ml-2 bg-[#A10058] text-white px-3 py-1 rounded">
              Buscar
            </button>
          </form>
          <button className="bg-[#A10058] text-white px-5 py-2 rounded-full hover:bg-[#242424]">
            <Link href="/login">Sign in / Sign out</Link>
          </button>
          <Link href="/cart">
            <FiShoppingCart className="text-3xl" />
          </Link>
          {menuOpen ? (
            <IoMdClose
              onClick={onToggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <FiMenu
              onClick={onToggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </nav>
    </header>
  );
}