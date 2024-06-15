"use client";
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductDetails from './producto/[id]';
import VANTA from 'vanta/dist/vanta.net.min.js';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    const script1 = document.createElement("script");
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
    script2.async = true;

    document.body.appendChild(script1);

    script1.addEventListener('load', () => {
      document.body.appendChild(script2);

      script2.addEventListener('load', () => {
        if (vantaRef.current && window.VANTA) {
          window.VANTA.NET({
@@ -29,38 +28,57 @@ export default function Home() {
            backgroundColor: 0x222426,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            points: 11.00,
            spacing: 16.00
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            points: 11.0,
            spacing: 16.0,
          });
        }
      });
    });

    return () => {
      script1.removeEventListener('load', () => {});
      script2.removeEventListener('load', () => {});
      script1.removeEventListener('load', () => { });
      script2.removeEventListener('load', () => { });
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleProductClick = (product) => {
    router.push(`/productos/${product.productoid}`, { state: { product } });
  };

  return (
    <>
      <Navbar />
      <div ref={vantaRef} style={{ width: '100%', height: '100vh' }}>
        {/* Contenido de tu página */}
        <div className="welcome">
          <h1>Bienvenidos a BOD</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos perferendis
            ut mollitia velit dicta deserunt fugit omnis id non eos alias explicabo, totam ad illo
            repellat reiciendis. Neque, cum!
          </p>
      <div className="welcome">
        <div className="w-full">
          <img src="/images/bod/panoramic.jpg" alt="Nueva Colección" className="w-full h-128 object-cover" />
        </div>
        <div ref={vantaRef} style={{ width: '100%', height: '100vh' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl">
            {data.map((product) => (
              <div
                key={product.productoid}
                onClick={() => handleProductClick(product)}
                className="mt-16 mx-3 bg-white rounded-lg shadow-md p-8 cursor-pointer"
              >
                <div className="h-64 flex items-center justify-center">
                  <img src={`${product.url_imagen}`} alt={product.nombre} className="object-contain h-full" />
                </div>
                <h2 className="text-xl font-bold mb-2">{product.nombre}</h2>
                <p className="text-gray-700">${product.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}