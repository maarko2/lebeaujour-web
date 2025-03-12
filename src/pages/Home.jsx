import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Carrusel from '../components/Carrusel';
import Footer from '../components/Footer';
import '../assets/styles/Home.css';
import NoticiasDestacadas from '../components/NoticiasDestacadas';

function Home() {
  return (
    <div className="home-page animated fadeIn">
      <Navbar />
      <div className="home-container">
        <h1 className="home-title">LE BEAU JOUR</h1>
        <h2 className="home-subtitle">EDUCANDO AL ABRIGO DEL ALTÍSIMO</h2>
        <Link to="/contacto" className="home-button">
          Contáctanos
        </Link>
      </div>
      <Carrusel />
      <NoticiasDestacadas />
      <Footer />
    </div>
  );
}

export default Home;