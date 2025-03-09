import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Datos de Contacto</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 23 Norte Calle Dos, 2039</li>
            <li><i className="fas fa-phone-square-alt"></i> (+56) 32 3241150</li>
            <li><i className="fas fa-envelope"></i> colegio_lebeaujour@hotmail.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Redes Sociales</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/CollegeLeBeauJour/?locale=es_LA" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/colegiolebeaujour/" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 – Colegio Le Beau Jour, Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;