import { useRouter } from 'next/router';
import React from 'react';

interface Product {
  productoid: string;
  nombre: string;
  precio: number;
  descripcion: string;
  url_imagen: string;
}

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const product: Product = router.query.state?.product || null;

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.nombre}</h1>
      <p>Precio: ${product.precio}</p>
      <p>Descripción: {product.descripcion}</p>
      <img src={product.url_imagen} alt={product.nombre} />
    </div>
  );
};

export default ProductDetails;