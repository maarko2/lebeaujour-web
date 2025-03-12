import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/AboutUs.css';

import imagen from '../assets/images/imagen-aboutus-2.jpg';

export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <Navbar />
      <img src={imagen} alt="Imagen Colegio" className="img-aboutus" />
      <div className="aboutus-hero">
        <div className="hero-text">
          <h1 className="hero-tittle">
            NUESTRO<br/>COLEGIO</h1>
          <p className="hero-paragraph">
            Somos una organización sin fines de lucro que busca mejorar la educación. 
            Nuestro objetivo es brindar una educación de calidad a niños y jóvenes 
            para que puedan tener un futuro mejor, lleno de oportunidades.
          </p>

        </div>
      </div>
      <div className="images-container">
            <img src="ruta-de-la-imagen-1.jpg" alt="Imagen 1" />
            <img src="ruta-de-la-imagen-2.jpg" alt="Imagen 2" />
            <img src="ruta-de-la-imagen-3.jpg" alt="Imagen 3" />
          </div>
      <Footer />
    </div>
  );
}
