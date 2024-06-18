"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./globals.css";

export default function Navbar({ onSearch }) {
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
    onSearch(searchTerm);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de búsqueda
    console.log('Searching for:', searchQuery);
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
              <Link className="hover:text-white" href="#">
                Polerones
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="#">
                Poleras
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="#">
                Pantalones
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="#">
                Otros
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
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
