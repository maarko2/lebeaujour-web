import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
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
          <Link to="/quienes-somos" className="navLink">Quíenes Somos</Link>
        </li>
        <li className="navItem">
          <Link to="/leyes" className="navLink">Leyes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;