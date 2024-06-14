"use client";
import React, { useEffect, useRef } from 'react';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function Home() {


  return (
    <>
      <Navbar />
        {/* Contenido de tu página */}
        <div className="welcome">
          <h1>Bienvenidos a BOD</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos perferendis
            ut mollitia velit dicta deserunt fugit omnis id non eos alias explicabo, totam ad illo
            repellat reiciendis. Neque, cum!
          </p>
        </div>
      <Footer />
    </>
  );
}