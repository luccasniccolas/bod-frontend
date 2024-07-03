// AdminNavbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AdminNavbar = () => {
  const router = useRouter();

  const handleSignout = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/auth/signout', {
        method: 'POST',
        credentials: 'include', // Para enviar cookies con la solicitud
      });

      if (response.ok) {
        // Redireccionar a la página principal
        router.push('/');
      } else {
        const errorData = await response.json();
        console.error('Error al cerrar sesión:', errorData.error);
      }
    } catch (error) {
      console.error('Error fetching signout:', error);
    }
  };

  return (
    <header>
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Link href="/">
            <Image
              src="/images/bod/logo-formatted.png"
              alt="Logo"
              width={64}
              height={64}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link href="/administrador/upload">
                <button className="hover:text-white">Subir Productos</button>
              </Link>
            </li>
            <li>
              <button
                className="hover:text-white"
                onClick={handleSignout}
              >
                Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavbar;
