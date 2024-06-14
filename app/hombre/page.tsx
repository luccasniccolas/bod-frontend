"use client"
import { useState, useEffect } from "react";
import { fetchProducts } from "../lib/data";

export default function Hombre() {

  const data = fetchProducts();
  console.log(data);

  return(
    <div>
      <h1>Productos</h1>
      <div>
        
      </div>
      </div>
  )
}