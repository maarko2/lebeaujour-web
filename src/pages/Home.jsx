import React from 'react';
import { Link } from 'react-router-dom';
import Carrusel from '../components/Carrusel';
import Map from '../components/Google-Maps/Map'; // Asegúrate de que la ruta sea correcta
import '../assets/styles/Home.css';
import NoticiasDestacadas from './featured-news/NoticiasDestacadas';

function Home() {
  return (
    <div className="home-page animated fadeIn">

      <div className="home-container">
        <h1 className="home-title">LE BEAU JOUR</h1>
        <h2 className="home-subtitle">EDUCANDO AL ABRIGO DEL ALTÍSIMO</h2>
        <Link to="/contacto" className="home-button">
          Contáctanos
        </Link>
      </div>
      <Carrusel />
      <NoticiasDestacadas />

      <section className="location-section">
        <div className="location-content">
          <h1 className="location-title">Nuestra Ubicación</h1>
          <div className="location-details">
            <h2 className="location-subtitle">Encuéntranos en:</h2>
            <p className="location-address">23 Norte Calle Dos, 2039 - Viña del Mar</p>
          </div>
          <div className="location-map">
            <Map />
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;