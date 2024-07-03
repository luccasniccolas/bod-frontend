"use client"
import React, { useState, useEffect } from "react";
import { fetchProducts } from "@/app/libs/data";
import ProductListAdmin from "./ProductListAdmin";
import { Product } from "@/app/libs/definitions";
import { useRouter } from "next/navigation";

const MainViewAdmin = () => {
  const router = useRouter();

  useEffect(() => {
    // Verificar si el usuario ya está autenticado y tiene el rol adecuado
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/auth/profile', {
          method: 'GET',
          credentials: 'include', // Para enviar y recibir cookies
        });

        if (response.ok) {
          const data = await response.json();
          if (data.rolid !== 1) {
            // Redirigir si el usuario no tiene el rol adecuado
            router.push('/');
          }
        } else {
          console.error('Error al verificar autenticación:', response.statusText);
          router.push('/');
        }
      } catch (error) {
        console.error('Error al verificar autenticación:', error);
      }
    };

    checkAuth();
  }, [router]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsData();
  }, []); // Ejecuta solo una vez al cargar el componente

  return (
    <div>
      <ProductListAdmin products={products} />
    </div>
  );
};

export default MainViewAdmin;
