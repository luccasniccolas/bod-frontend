import { Product } from "./definitions";

export async function fetchProducts() {
    try {
        const data = await fetch('http://localhost:3001/api/productos/get');
        return data.json()
    } catch(error) {
        console.error("Fetch error:", error);
        throw new Error('Error al hacer fetch a los productos')
    }
    
}