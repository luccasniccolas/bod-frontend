"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./globals.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img src="/images/bod/logo-formatted.png" className="w-16" alt="Logo" />
        </div>
        <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[8%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li><Link className="hover:text-gray-500" href='#'>Hombre</Link></li>
            <li><Link className="hover:text-gray-500" href='#'>Mujer</Link></li>
            <li><Link className="hover:text-gray-500" href='#'>Nosotros</Link></li>
            <li><Link className="hover:text-gray-500" href='#'>Contactanos</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"><Link href='/login'>Sign in / Sign out</Link></button>
          {menuOpen ? (
            <IoMdClose onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden" />
          ) : (
            <FiMenu onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden" />
          )}
        </div>
      </nav>
    </header>
  );
}
