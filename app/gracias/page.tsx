// app/checkout/gracias/page.tsx
"use client";
import React from "react";
import Link from "next/link";

const GraciasPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">¡Gracias por comprar en BOD!</h1>
        <p className="text-lg text-gray-800 mb-4 text-center">
          Tu compra ha sido procesada con éxito.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <a className="bg-[#A10058] text-white px-6 py-3 rounded-md hover:bg-[#242424]">
              Volver a la página principal
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GraciasPage;
