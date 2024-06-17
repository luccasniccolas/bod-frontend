"use client";
import React, { useEffect, useRef, useState } from "react";
import VANTA from "vanta/dist/vanta.net.min.js";
import { useRouter } from 'next/navigation';
import { useCart } from "../../context/CartContext";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  url_imagen: string;
}

interface Product {
  productoid: string;
  nombre: string;
  descripcion: string;
  precio: string;
  url_imagen: string;
}

async function getProduct(id: any): Promise<Product> {
  const res = await fetch(`http://localhost:3001/api/productos/${id}`);
  const data = await res.json();
  return data;
}

const ProductDetailPage = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(params.productoid);
        setProduct(productData);
      } catch (err) {
        setError('Error fetching product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.productoid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <ProductDetails product={product} />;
};

const ProductDetails = ({ product }) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [selectedSize, setSelectedSize] = useState<string>("m");
  const sizes = ["xs", "s", "m", "l", "xl"];
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.productoid,
      name: product.nombre,
      price: product.precio,
      quantity: 1,
      url_imagen: product.url_imagen.trim(), // Elimina los espacios en blanco
    };

    addToCart(cartItem);
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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div ref={vantaRef} className="w-full">
    <div className=" min-h-screen py-12 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
          <div className="md:flex">
            <div className="md:w-1/2 md:pr-8 flex justify-center">
              <img
                src={product.url_imagen.trim()}
                alt={product.nombre}
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{product.nombre}</h1>
              <p className="text-2xl font-semibold text-gray-600">Precio: ${product.precio}</p>
              <p className="text-gray-700">{product.descripcion}</p>
              <div className="flex items-center space-x-4">
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
                  defaultValue="m"
                  className="px-2 py-1 border border-gray-300 rounded"
                >
                  {sizes.map(size => (
                    <option key={size} value={size}>
                      {size.toUpperCase()}
                    </option>
                  ))}
                </select>
                
              </div>
              <button
                  onClick={handleAddToCart}
                  className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Agregar al carrito
                </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;