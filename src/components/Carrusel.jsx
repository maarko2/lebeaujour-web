import React, { useState, useEffect } from 'react';
import '../assets/styles/Carrusel.css';
/* Imagenes */
import imagen1 from '../assets/images/images-carrusel/image-carrusel-1.webp';
import imagen2 from '../assets/images/images-carrusel/image-carrusel-2.webp';
import imagen3 from '../assets/images/images-carrusel/image-carrusel-3.webp';
import imagen4 from '../assets/images/images-carrusel/image-carrusel-4.webp';

const images = [imagen1, imagen2, imagen3, imagen4];

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carrusel-container">
      <div className="carrusel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carrusel-image" style={{ backgroundImage: `url(${image})` }}>
            <div className="carrusel-overlay"></div>
          </div>
        ))}
      </div>
      <button className="carrusel-button prev" onClick={prevSlide}>&#10094;</button>
      <button className="carrusel-button next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carrusel;