// frontend/pages/profile.tsx
"use client"
import React, { useEffect, useState } from 'react';

interface UserProfile {
  usuarioid: number;
  nombre: string;
  apellido: string;
  email: string;
  contrasena: string;
  suscripcionemail: boolean;
  esadmin: boolean;
  // Agrega otros campos según tu base de datos
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/auth/profile', {
          method: 'GET',
          credentials: 'include', // Para enviar cookies con la solicitud
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message);
          return;
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Ocurrió un error al obtener el perfil');
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div className="mt-4 text-red-500">{error}</div>;
  }

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="w-10/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
      <h1 className="text-5xl font-semibold">Perfil de Usuario</h1>
      <div className="mt-8">
        <div className="flex flex-col">
          <label className="text-lg font-medium">ID de Usuario</label>
          <p className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent">
            {user.usuarioid}
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium">Nombre</label>
          <p className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent">
            {user.nombre}
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-lg font-medium">Email</label>
          <p className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent">
            {user.email}
          </p>
        </div>
        {/* Agrega más campos según sea necesario */}
      </div>
    </div>
  );
};

export default Profile;
