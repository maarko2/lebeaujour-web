import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Galeria.css';
import carpeta from '../assets/images/folder-icon.png';

export default function Galeria() {
  const navigate = useNavigate();
  const years = [2023, 2024, 2025];
  
  const handleFolderClick = (year) => {
    navigate(`/galeria/${year}`);
  };
  
  return (
    <div className="page-container">
      <Navbar />
      <main className="galeria-container">
        <div className="galeria-header">
          <h1>Galería Fotográfica</h1>
          <p>Explora nuestra colección de momentos especiales por año</p>
        </div>
        
        <div className="folders-grid">
          {years.map((year) => (
            <div
              key={year}
              className="folder-card"
              onClick={() => handleFolderClick(year)}
            >
              <div className="folder-icon">
                <img src={carpeta} alt={`Carpeta ${year}`} />
              </div>
              <div className="folder-info">
                <h3>{year}</h3>
                <p>Ver fotografías</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
