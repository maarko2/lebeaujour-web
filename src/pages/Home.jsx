import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Carrusel from '../components/Carrusel';
import '../assets/styles/Home.css';

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="home-container">
        <h1 className="home-title">LE BEAU JOUR</h1>
        <h2 className="home-subtitle">EDUCANDO AL ABRIGO DEL ALTÍSIMO</h2>
        <Link to="/contacto" className="home-button">
          Contactanos
        </Link>
      </div>
      <Carrusel />
    </div>
  );
}

export default Home;
