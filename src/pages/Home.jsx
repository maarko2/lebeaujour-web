import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../assets/styles/Home.css';
import Carrusel from '../components/Carrusel';

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="home-container">
        <h1 className="home-title">LE BEAU JOUR</h1>
        <h2 className="home-subtitle">EDUCANDO AL ABRIGO DEL ALTÍSIMO</h2>
        <Carrusel />

      </div>
      
    </div>
  );
}

export default Home;
