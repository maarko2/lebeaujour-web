import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../assets/styles/Contacto.css';

export default function Contacto() {
  return (
    <div className="contact-page">
      <Header />
      <Navbar />
      <div className="contact-container">
        <h1 className="title-contact">Datos de Contacto</h1>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>Teléfono Fijo</p>
            <p>32 3241150</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>Correo Electrónico</p>
            <p>Colegio_lebeaujour@hotmail.com</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Ubicación</p>
            <p>23 Norte Calle Dos, 2039</p>
          </div>
        </div>
        <div className="social-media">
          <p>Redes Sociales</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
