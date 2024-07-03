import { Product } from "./definitions";

export async function fetchProducts(): Promise<Product[]> {
    try {
        const response = await fetch('http://localhost:3001/api/productos/obtener');
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        const products: Product[] = await response.json();
        return products;
    } catch (error) {
        console.error('Error al hacer fetch a los productos:', error);
        return [];
    }
}
