import React from 'react';
import colegioIcon from '../assets/images/colegio-icon.png';
import facebookIcon from '../assets/images/facebook-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';
import locationIcon from '../assets/images/location-icon.png';

import '../assets/styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      {/* Sección izquierda: colegioIcon y nombre del colegio */}
      <div className="header-left">
        <img src={colegioIcon} alt="Logo Colegio" className="colegioIcon" />
        <div className="header-text">
            <h1 className="header-title-1">Colegio Cristiano</h1>
            <h1 className="header-title-2">Le Beau Jour</h1>
          </div>
      </div>

      {/* Sección derecha: Redes Sociales y Ubicación */}
      <div className="header-right">
        
        <div className="header-item">
          <img src={facebookIcon} alt="Facebook" className="icon" />
          <div className="header-text">
            <span className="header-label">Facebook</span>
            <b>Le Beau Jour</b>
          </div>
        </div>

        <div className="header-item">
          <img src={instagramIcon} alt="Instagram" className="icon" />
          <div className="header-text">
            <span className="header-label">Instagram</span>
            <b>@colegiolebeaujour</b>
          </div>
        </div>

        <div className="header-item">
          <img src={locationIcon} alt="Ubicación" className="icon" />
          <div className="header-text">
            <span className="header-label">Ubicación</span>
            <b>23 Norte 2039</b>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
