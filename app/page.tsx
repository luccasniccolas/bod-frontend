"use client";
import React, { useEffect, useRef } from 'react';
import VANTA from 'vanta/dist/vanta.net.min.js';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
    script2.async = true;

    document.body.appendChild(script1);

    script1.addEventListener('load', () => {
      document.body.appendChild(script2);

      script2.addEventListener('load', () => {
        if (vantaRef.current && window.VANTA) {
          window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            backgroundColor: 0x222426,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            points: 11.00,
            spacing: 16.00
          });
        }
      });
    });

    return () => {
      script1.removeEventListener('load', () => {});
      script2.removeEventListener('load', () => {});
    };
  }, []);

  return (
    <>
      <Navbar />
      <div ref={vantaRef} style={{ width: '100%', height: '100vh' }}>
        {/* Contenido de tu página */}
        <div className="welcome">
          <h1>Bienvenidos a BOD</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dignissimos perferendis
            ut mollitia velit dicta deserunt fugit omnis id non eos alias explicabo, totam ad illo
            repellat reiciendis. Neque, cum!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}