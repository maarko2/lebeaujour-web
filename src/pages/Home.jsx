import React from 'react';
import { Link } from 'react-router-dom';
import Carrusel from '../components/Carrusel';
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

    </div>
  );
}

export default Home;