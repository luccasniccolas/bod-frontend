"use server"
import { cookies } from "next/headers";

export const login = async (formData: FormData) => {
    const email = formData.get("email");
    const contrasena = formData.get("contrasena");

    console.log(email, contrasena)

    if (!email || !contrasena) return;

    

    try {
        const response = await fetch('http://localhost:3001/api/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, contrasena}),
          credentials: 'include'
        });

        const cookieStore = cookies()
        const token = cookieStore.get('token');
        console.log(token)
  
        if (!response.ok) {
          const errorData = await response.json();
          console.log(errorData)
          return;
        }
  
        const data = await response.json();
        console.log(`Bienvenido ${data.nombre} ${data.apellido}`);
        
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }

}