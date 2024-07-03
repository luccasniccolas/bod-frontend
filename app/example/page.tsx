import { fetchUser } from "../lib/data"



export default function Example() {
    const data = fetchUser();
    console.log(data)
    return (
        <h1>hola</h1>
    )
}