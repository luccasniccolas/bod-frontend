import React from "react";
import { Product } from "../libs/definitions";
import { useRouter } from "next/navigation";
import Image from "next/image";

type ProductCardProps = {
    product: Product
}

const ProductCardAdmin: React.FC<ProductCardProps> = ({ product }) => {
    const router = useRouter();
    
    const handleEditClick = () => {
        router.push(`/admin/editar-producto/${product.id}`);
    };

    const handleDeleteClick = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/productos/delete/${product.id}`, {
                method: 'DELETE',
                credentials: 'include', // Para enviar cookies con la solicitud
            });

            if (response.ok) {
                // Realizar alguna acción después de borrar, como actualizar la lista de productos
                console.log('Producto borrado correctamente');
                // Aquí podrías actualizar la lista de productos si fuera necesario
                // Por ejemplo, si products es un estado en tu componente padre, podrías manejar la actualización allí
            } else {
                const errorData = await response.json();
                console.error('Error al borrar el producto:', errorData.error);
            }
        } catch (error) {
            console.error('Error fetching delete product:', error);
        }
    };

    return (
        <div className="mt-16 mx-3 bg-[#b4b4b4] rounded-lg shadow-md p-8 relative">
            <div className="h-64 flex items-center justify-center relative">
                <Image
                    src={product.images_urls[0]}
                    alt={product.name}
                    className="object-contain h-full"
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex justify-between items-center mt-4">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            </div>
            <p className="text-gray-700">${product.price}</p>
            <div className="flex justify-end mt-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                    onClick={handleEditClick}
                >
                    Editar
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    onClick={handleDeleteClick}
                >
                    Borrar
                </button>
            </div>
        </div>
    );
};

export default ProductCardAdmin;
