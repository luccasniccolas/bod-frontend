"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 flex items-center">
            <div>
              <img src="/images/bod/logo2.png" alt="Logo" className="logo-footer" />
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <div>
              <h5 className="text-white font-semibold mb-4">Menú</h5>
              <ul className="list-none">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Políticas de envío
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <div>
              <h5 className="text-white font-semibold mb-4">Contacto</h5>
              <form id="newsletter-form">
                <div className="flex">
                  <input
                    type="email"
                    name="subscribermail"
                    placeholder="Email"
                    className="w-64 py-2 px-4 rounded-l-md bg-[#BCBBBB] text-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-[#202020] text-white py-2 px-4 rounded-r-md"
                  >
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;