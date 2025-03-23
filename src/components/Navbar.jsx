import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import colegioIcon from '../assets/images/colegio-icon.png';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      {/* Versión desktop: contenedor único con fondo rojo */}
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img src={colegioIcon} alt="Logo Colegio" className="colegioIcon" />
          </Link>
          <div className="header-text">
            <h1 className="header-title">Colegio Cristiano</h1>
            <h1 className="header-title">Le Beau Jour</h1>
          </div>
        </div>
        <div className="menu-container">
          <ul className="navList">
            <li className="navItem">
              <Link to="/" className="navLink">Inicio</Link>
            </li>
            <li className="navItem">
              <Link to="/galeria" className="navLink">Galeria</Link>
            </li>
            <li className="navItem">
              <Link to="/aboutus" className="navLink">Quíenes Somos</Link>
            </li>
            <li className="navItem">
              <Link to="/reglamentos" className="navLink">Reglamentos y Protocolos</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menú móvil */}
      <div className="mobile-menu">
        <div className="mobile-header">
          <div className="logo-container">
            <Link to="/">
              <img src={colegioIcon} alt="Logo Colegio" className="colegioIcon" />
            </Link>
            <div className="header-text">
              <h1 className="header-title">Colegio Cristiano</h1>
              <h1 className="header-title">Le Beau Jour</h1>
            </div>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        {isOpen && (
          <div className="overlay" onClick={toggleMenu}>
            <div className="popup-menu" onClick={(e) => e.stopPropagation()}>
              <ul className="popup-navList">
                <li className="popup-navItem">
                  <Link to="/" className="popup-navLink" onClick={toggleMenu}>Inicio</Link>
                </li>
                <li className="popup-navItem">
                  <Link to="/noticias" className="popup-navLink" onClick={toggleMenu}>Noticias</Link>
                </li>
                <li className="popup-navItem">
                  <Link to="/galeria" className="popup-navLink" onClick={toggleMenu}>Galeria</Link>
                </li>
                <li className="popup-navItem">
                  <Link to="/aboutus" className="popup-navLink" onClick={toggleMenu}>Quíenes Somos</Link>
                </li>
                <li className="popup-navItem">
                  <Link to="/reglamentos" className="popup-navLink" onClick={toggleMenu}>Reglamentos y Protocolos</Link>
                </li>
                <li className="popup-navItem">
                  <Link to="/simce" className="popup-navLink" onClick={toggleMenu}>SIMCE</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
