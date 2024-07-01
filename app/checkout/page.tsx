"use client";
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <section className="container mx-auto p-8">
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* Formulario de Checkout */}
        <div className="lg:w-2/3 w-full bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Información</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre Completo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                Teléfono
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="telefono"
                type="telefono"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Dirección
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                Ciudad
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
              />
            </div>
            <button
              className="bg-[#A10058] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-[#242424]"
              type="button"
            >
              Continuar al Pago
            </button>
          </form>
        </div>

        {/* Resumen del Carrito */}
        <div className="lg:w-1/3 w-full bg-white p-8 mt-8 lg:mt-0 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Resumen del Pedido</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.urlimagen} alt={item.name} className="w-24 h-24 object-contain rounded mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-gray-600">Cantidad: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-bold text-lg">${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t pt-4">
            <h3 className="text-xl font-bold">Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
