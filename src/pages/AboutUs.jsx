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
          <h1 className="hero-title">Quíenes Somos</h1>
          <p className="hero-paragraph">
            Somos una organización sin fines de lucro que busca mejorar la educación. 
            Nuestro objetivo es brindar una educación de calidad a niños y jóvenes 
            para que puedan tener un futuro mejor, lleno de oportunidades.
          </p>
        </div>
      </div>
      <div className="aboutus-hero">
        <div className="hero-text">
          <h1 className="hero-title">Nuestra Misión</h1>
          <p className="hero-paragraph">
            Nuestra misión es educar a los niños y jóvenes para que puedan tener un 
            futuro mejor. Creemos que la educación es la clave por la cual trabajamos 
            incansablemente para brindar una educación de calidad a todos los niños y jóvenes.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
