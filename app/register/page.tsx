"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebook, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter(); // Inicializa el router

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, apellido, email, contrasena }),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.message);
        return;
      }

      const data = await response.json();
      setMessage(`Registro exitoso, bienvenido ${data.nombre || 'usuario'}`);
      router.push('/'); // Redirige a la página principal
    } catch (error) {
      console.error('Error al registrar:', error);
      setMessage('Ocurrió un error al registrarse');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[#5c5c5c]">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">bod</div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-[#A10058] mb-2">
                Regístrate
              </h2>
              <div className="border-2 w-10 border-[#A10058] inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <Link href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebook className="text-sm" />
                </Link>
                <Link href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FcGoogle className="text-sm" />
                </Link>
              </div>
              <p className="text-gray-400 my-3">o usa tu correo para registrarte</p>
              <form onSubmit={handleRegister} className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-[#A10058] mr-2" />
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-[#A10058] mr-2" />
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-[#A10058] mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-[#A10058] mr-2" />
                  <input
                    type="password"
                    name="contrasena"
                    placeholder="Contraseña"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="border-2 border-[#A10058] text-[#A10058] rounded-full px-12 py-2 inline-block font-semibold hover:bg-[#A10058] hover:text-white"
                >
                  Registrarse
                </button>
              </form>
              {message && (
                <div className="mt-4 text-red-500">
                  {message}
                </div>
              )}
            </div>
          </div>
          <div className="w-2/5 bg-[#A10058] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">¿Ya tienes una cuenta?</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Ingresa aquí para iniciar sesión.
            </p>
            <Link
              href="/login"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#A10058]"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
