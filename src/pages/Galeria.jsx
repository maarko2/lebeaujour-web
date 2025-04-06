import React from 'react';
import '../assets/styles/Galeria.css';
import { FaFacebook } from 'react-icons/fa';

export default function Galeria() {

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/CollegeLeBeauJour/photos_by', '_blank');
  };
  
  return (
    <div className="page-container">
      <main className="galeria-container">
        <div className="galeria-header">
          <h1>Galería Fotográfica</h1>
          <p>Descubre todos nuestros momentos especiales en Facebook</p>
        </div>
        
        <div className="facebook-gallery-card" onClick={handleFacebookClick}>
          <div className="facebook-icon">
            <FaFacebook size={60} />
          </div>
          <div className="gallery-content">
            <h2>Visita nuestra Galería en Facebook</h2>
            <p>Click aquí para ver todas nuestras fotografías</p>
          </div>
        </div>
      </main>
    </div>
  );
}
