// src/components/News.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/styles/News.css';

export default function News() {
  const [news, setNews]       = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/news`
        );
        setNews(data);
      } catch (err) {
        console.error('Error cargando noticias', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('¿Eliminar esta noticia?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/news/${id}`);
      setNews(news.filter(item => item.id !== id));
    } catch (err) {
      console.error('Error borrando noticia', err);
      alert('No se pudo eliminar');
    }
  };

  return (
    <div className="news-page">
      {/* ...cabecera... */}
      {loading
        ? <p>Cargando...</p>
        : (
        <div className="news-grid">
          {news.map(item => (
            <article key={item.id} className="news-card">
              <img
                src={`${process.env.REACT_APP_API_URL}${item.imagen}`}
                alt={item.titulo}
              />
              <h2>{item.titulo}</h2>
              <p>{item.descripcion}</p>
              <small>{new Date(item.fecha_publicacion).toLocaleDateString()}</small>
              <button onClick={() => handleDelete(item.id)}>
                Eliminar
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
