import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import colegioIcon from '../assets/images/colegio-icon.png';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={colegioIcon} alt="Logo Colegio" className="colegioIcon" />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navList ${isOpen ? 'open' : ''}`}>
          <li className="navItem">
            <Link to="/" className="navLink">Inicio</Link>
          </li>
          <li className="navItem">
            <Link to="/noticias" className="navLink">Noticias</Link>
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
          <li className="navItem">
            <Link to="/simce" className="navLink">SIMCE</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="overlay" onClick={toggleMenu}>
          <div className="popup-menu">
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
    </nav>
  );
};

export default Navbar;