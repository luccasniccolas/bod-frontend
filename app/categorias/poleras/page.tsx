"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home({ searchTerm }) {
  const vantaRef = useRef(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.src = "/three.min.js";
    threeScript.async = true;
    document.body.appendChild(threeScript);

    const vantaScript = document.createElement("script");
    vantaScript.src = "/vanta.net.min.js";
    vantaScript.async = true;
    document.body.appendChild(vantaScript);

    vantaScript.addEventListener("load", () => {
      if (vantaRef.current && window.VANTA) {
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          backgroundColor: 0x222426,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 11.0,
          spacing: 16.0,
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/productosCategoria/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredData(
        data.filter((product) =>
          product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  }, [searchTerm, data]);

  const handleProductClick = (productoid) => {
    router.push(`/productoss/${productoid}`);
  };

  return (
    <>
      <div className="welcome">
        <div className="w-full">
          <img
            src="/images/bod/panoramic.jpg"
            alt="Nueva Colección"
            className="w-full h-128 object-cover"
          />
        </div>
        <div ref={vantaRef} style={{ width: "100%", height: "100vh" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl">
            {filteredData.map((product) => (
              <div
                key={product.productoid}
                className="mt-16 mx-3 bg-[#b4b4b4] rounded-lg shadow-md p-8 relative"
              >
                <div className="h-64 flex items-center justify-center relative">
                  <img
                    src={product.url_imagen}
                    alt={product.nombre}
                    className="object-contain h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center hover:bg-opacity-50 transition-opacity duration-300">
                    <span
                      className="text-white font-bold text-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={() => handleProductClick(product.productoid)}
                    >
                      Ver detalles
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">{product.nombre}</h2>
                <p className="text-gray-700">${product.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
