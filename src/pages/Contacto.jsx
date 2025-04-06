import React from 'react';
import '../assets/styles/Contacto.css';

export default function Contacto() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="title-contact">Datos de Contacto</h1>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone-square-alt"></i>
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
          <p className="social-title">Síguenos en nuestras Redes Sociales</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/CollegeLeBeauJour/?locale=es_LA" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/colegiolebeaujour/" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Mapa fuera del contenedor de contacto */}
      <div className="map-container">
      <iframe
        title="Ubicación Colegio Le Beau Jour"
        src="https://maps.google.com/maps?q=Colegio%20Le%20Beau%20Jour%2C%2023%20Nte.%2C%202530192%20Vi%C3%B1a%20del%20Mar%2C%20Valpara%C3%ADso%2C%20Chile&output=embed&iwloc=0"
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      </div>
    </div>
  );
}
