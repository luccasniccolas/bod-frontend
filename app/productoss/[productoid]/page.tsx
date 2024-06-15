
async function getProduct(id: any) {
    const res = await fetch(`http://localhost:3001/api/productos/${id}`)
    const data = await res.json();

    return data;
}

export default async function ProductDetailPage({params}){
    const product = await getProduct(params.productoid);
    console.log(product);
    return (
        <h1>Hola</h1>
    )
};