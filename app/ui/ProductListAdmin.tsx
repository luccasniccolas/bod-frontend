import React from "react";
import { Product } from "../libs/definitions";
import ProductCardAdmin from "./ProductCardAdmin";

type ProductListProps = {
    products: Product[];
}

const ProductListAdmin: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-7xl">
            {products.map((product) => (
                <ProductCardAdmin key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductListAdmin;
