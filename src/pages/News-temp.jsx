import React from 'react';
import '../assets/styles/News-temp.css';

const NewsTemp = () => {
  return (
    <div className="news-temp-container">
      <div className="news-temp-content">
        <h1>🎉 Próximamente</h1>
        <div className="news-message">
          <p>Muy pronto podrás encontrar aquí todas las noticias y eventos importantes del</p>
          <h2>Colegio Cristiano Le Beau Jour</h2>
        </div>
        <div className="news-coming-soon">
          <span className="loader"></span>
          <p>Estamos trabajando para traerte el mejor contenido</p>
        </div>
      </div>
    </div>
  );
};

export default NewsTemp;