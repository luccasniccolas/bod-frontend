import { fetchUser } from "@/app/lib/data"
import { cookies } from "next/headers"

export default function AuthNavbar() {

    const token = cookies().get('token');
    console.log(token);

    const data = fetchUser();
    console.log(data);

    return(
        <h1>hola</h1>
    )
}