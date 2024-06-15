"use client";
import React, { useEffect, useState } from 'react';

export default function ProductDetailPage() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = window.location.pathname.split('/').pop();
    fetch(`http://localhost:3001/api/productos/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(error));
  }, []);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.nombre}</h1>
      <img src={product.url_imagen} alt={product.nombre} />
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
    </div>
  );
}