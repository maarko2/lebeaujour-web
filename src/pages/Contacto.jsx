import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/Contacto.css';

export default function Contacto() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-container">
        <h1 className="title-contact">Datos de Contacto</h1>
        <div className="contact-info">
          <div className="contact-item">
            <i class="fas fa-phone-square-alt"></i>
            <div>
              <p className="contact-label">Teléfono Fijo</p>
              <p className="contact-detail">32 3241150</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <p className="contact-label">Correo Electrónico</p>
              <p className="contact-detail">Colegio_lebeaujour@hotmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <p className="contact-label">Ubicación</p>
              <p className="contact-detail">23 Norte Calle Dos, 2039</p>
            </div>
          </div>
        </div>
        <div className="social-media">
          <p className="social-title">Síguenos en nuestras redes</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/CollegeLeBeauJour/?locale=es_LA" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/colegiolebeaujour/" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
