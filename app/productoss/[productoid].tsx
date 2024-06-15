import { useRouter } from 'next/router';


export default function ProductDetailPage(){
    const router = useRouter();
    const { productoid } = router.query;
    console.log(productoid)

    return (
        <h1>Hola</h1>
    )
};