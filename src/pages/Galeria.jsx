import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/styles/Galeria.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

import carpeta from '../assets/images/folder-icon.png';

export default function Galeria() {
  const navigate = useNavigate();
  
  const handleFolderClick = (year) => {
    navigate(`/galeria/${year}`); // ⬅️ Redirige a /galeria/2025, etc.
  };
  
  return (
    <div>
      <Navbar />
      <h1 className="tittle-galeria">Galería de Fotos del Colegio</h1>
      <h2 className="subtittle-galeria">Explora los recuerdos de cada año escolar organizados en carpetas</h2>
      <section className="layout">
        {[2025, 2024, 2023].map((year) => (
          <div key={year} className="folder" onClick={() => handleFolderClick(year)} style={{ cursor: 'pointer' }}>
            <img className="icon-folder" src={carpeta} alt={`Carpeta ${year}`} />
            <p>{year}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}
