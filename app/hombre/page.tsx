"use client"
import { useState, useEffect } from "react";

export default function Hombre() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
    .then((response) => response.json())
    .then((data) => setData(data));
  }, []);

  return(
    <div>
      <h1>Productos</h1>
      <div>
        <ul>
          {data?.map((product) => (
            <li key={product.productoid}>{product.nombre} {product.precio}</li>
          ))}
        </ul>
      </div>
      </div>
  )
}