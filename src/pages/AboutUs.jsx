import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/AboutUs.css';

import imagen from '../assets/images/imagen-aboutus-1.jpg';
import imgColegio1 from '../assets/images/imgColegio1.jpg'
import imgColegio2 from '../assets/images/imgColegio2.jpg'
import imgColegio3 from '../assets/images/imgColegio3.jpg'
import imgReconocimientos1 from '../assets/images/imgReconocimientos1.jpg'
import imgReconocimientos2 from '../assets/images/imgReconocimientos2.jpg'
import imgReconocimientos3 from '../assets/images/imgReconocimientos3.jpg'
export default function AboutUs() {
  return (
    <div className="aboutus-container">
      <Navbar />
      <img src={imagen} alt="Imagen Colegio" className="img-aboutus" />
      <div className="aboutus-hero">
        <div className="hero-text">
          <h1 className="hero-tittle-1">
            NUESTRO<br/>COLEGIO</h1>
          <p className="hero-paragraph">
            Somos una organización sin fines de lucro que busca mejorar la educación. 
            Nuestro objetivo es brindar una educación de calidad a niños y jóvenes 
            para que puedan tener un futuro mejor, lleno de oportunidades.
          </p>
        </div>
      </div>
      <div className="images-container">
            <img src={imgColegio2} alt="Imagen 1" />
            <img src={imgColegio1} alt="Imagen 2" />
            <img src={imgColegio3} alt="Imagen 3" />
      </div>
      <div className="aboutus-hero">
        <div className="hero-text">
          <h1 className="hero-tittle-2">
            LOGROS Y<br/>
            <span className="hero-subtittle-2">RECONOCIMIENTOS</span>
          </h1>
          <p className="hero-paragraph">
            Somos una organización sin fines de lucro que busca mejorar la educación. 
            Nuestro objetivo es brindar una educación de calidad a niños y jóvenes 
            para que puedan tener un futuro mejor, lleno de oportunidades.
          </p>
        </div>
      </div>
      <div className="images-container">
            <img src={imgReconocimientos1} alt="Imagen 1" />
            <img src={imgReconocimientos2} alt="Imagen 2" />
            <img src={imgReconocimientos3} alt="Imagen 3" />
      </div>
      <div className="aboutus-hero">
        <div className="hero-text">
          <h1 className="hero-tittle-1">
            NUESTRA<br/>HISTORIA</h1>
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
