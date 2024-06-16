// pages/user/close.js
"use client"
import { useState } from 'react';

export default function Close() {
    const [message, setMessage] = useState('');

    const handleSignout = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/signout', {
                method: 'POST',
                credentials: 'include', // Para enviar cookies con la solicitud
            });

            if (response.ok) {
                setMessage('Sesión cerrada correctamente');
            } else {
                const errorData = await response.json();
                setMessage(`Error al cerrar sesión: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error fetching signout:', error);
            setMessage('Error al cerrar sesión');
        }
    };

    return (
        <div>
            <button onClick={handleSignout}>Cerrar sesión</button>
            {message && <p>{message}</p>}
        </div>
    );
}
