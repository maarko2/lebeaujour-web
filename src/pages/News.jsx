import React, { useState, useEffect } from 'react';
import '../assets/styles/News.css';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Este useEffect se usará posteriormente para fetch de datos desde MySQL
  useEffect(() => {
    // Aquí irá la conexión a la base de datos
    // Por ahora usamos datos de ejemplo
    const dummyNews = [
      {
        id: 1,
        title: "Inicio del Año Escolar 2025",
        date: "2025-03-01",
        image: "/images/placeholder.jpg",
        description: "Damos la bienvenida a nuestros estudiantes en este nuevo año académico.",
        category: "Institucional"
      },
      // Más noticias de ejemplo...
    ];

    setNews(dummyNews);
    setLoading(false);
  }, []);

  return (
    <div className="news-page">
      <div className="news-header">
        <h1>Noticias y Eventos</h1>
        <p>Mantente informado sobre las últimas novedades de nuestra institución</p>
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Cargando noticias...</p>
        </div>
      ) : (
        <div className="news-grid">
          {news.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-content">
                <div className="news-date">{new Date(item.date).toLocaleDateString()}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <button className="read-more">Leer más</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}