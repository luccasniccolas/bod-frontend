"use client";
import React, { useEffect, useRef, useState } from "react";
import VANTA from "vanta/dist/vanta.net.min.js";
import { useRouter } from 'next/navigation';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

async function getProduct(id: any) {
  const res = await fetch(`http://localhost:3001/api/productos/${id}`);
  const data = await res.json();
  return data;
}

const ProductDetailPage = async ({ params }) => {
  const product = await getProduct(params.productoid);
  return <ProductDetails product={product} />;
};

const ProductDetails = ({ product }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [selectedSize, setSelectedSize] = useState<string>("m");
  const sizes = ["xs", "s", "m", "l", "xl"];
  const router = useRouter();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.nombre,
      price: product.precio,
      quantity: 1, // Cantidad inicial de 1
    };

    // Llama a la función handleAddToCart en el componente CartPage
    router.refresh();
  };

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
    script2.async = true;

    document.body.appendChild(script1);
    script1.addEventListener("load", () => {
      document.body.appendChild(script2);
      script2.addEventListener("load", () => {
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
    });

    return () => {
      script1.removeEventListener("load", () => {});
      script2.removeEventListener("load", () => {});
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="flex justify-center">
              <img
                src={product.url_imagen}
                alt={product.nombre}
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{product.nombre}</h1>
              <p className="text-2xl font-semibold text-gray-600">Precio: ${product.precio}</p>
              <p className="text-gray-700">{product.descripcion}</p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Agregar al carrito
                </button>
                <div>
                  <label htmlFor="cantidad" className="mr-2 text-gray-700">
                    Cantidad:
                  </label>
                  <input
                    type="number"
                    id="cantidad"
                    defaultValue={1}
                    min={1}
                    className="w-16 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="talla" className="mr-2 text-gray-700">
                  Talla:
                </label>
                <select
                  id="talla"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded"
                >
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={vantaRef} style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
};

export default ProductDetailPage;