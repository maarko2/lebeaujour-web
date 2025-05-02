import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioNews from '../components/FormularioNews';
import '../assets/styles/News.css';

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    tipo_noticia: '',
    imagen: null
  });
  const [mensaje, setMensaje] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ✅ Validar token al montar componente
  useEffect(() => {
    const validarToken = () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const ahora = Date.now() / 1000;
        if (payload.exp > ahora) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('token');
        }
      } catch {
        localStorage.removeItem('token');
      }
    };

    validarToken();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/news`);
        setNews(data);
      } catch (err) {
        console.error('Error cargando noticias', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const token = localStorage.getItem('token');

  const handleChange = e => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/news`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMensaje('Noticia subida con éxito.');
      setFormData({ titulo: '', descripcion: '', tipo_noticia: '', imagen: null });
      setMostrarFormulario(false);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news`);
      setNews(res.data);
    } catch (err) {
      setMensaje(err.response?.data?.error || 'Error al subir noticia');
    }
  };

  const handleDelete = async id => {
    if (!window.confirm('¿Eliminar esta noticia?')) return;
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNews(news.filter(item => item.id !== id));
    } catch (err) {
      console.error('Error borrando noticia', err);
      alert('No se pudo eliminar');
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.reload();
  };

  return (
    <div className="news-page">
      <div className="news-header">
        <h1>Noticias del Colegio</h1>
        <p>Últimas publicaciones destacadas</p>
        {isAuthenticated && (
          <>
            <button className="read-more" onClick={() => setMostrarFormulario(true)}>Subir Noticia</button>
            <button className="read-more" onClick={cerrarSesion}>Cerrar Sesión</button>
          </>
        )}
      </div>

      {loading ? (
        <div className="loading-spinner"><div className="spinner" /></div>
      ) : (
        <div className="news-grid">
          {news.map(item => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                <img src={`${process.env.REACT_APP_API_URL}${item.imagen}`} alt={item.titulo} />
                <div className="news-category">{item.tipo_noticia}</div>
              </div>
              <div className="news-content">
                <h2>{item.titulo}</h2>
                <p>{item.descripcion}</p>
                <div className="news-date">{new Date(item.fecha).toLocaleDateString()}</div>
                {isAuthenticated && (
                  <button className="read-more" onClick={() => handleDelete(item.id)}>Eliminar</button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {mostrarFormulario && isAuthenticated && (
        <FormularioNews
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={() => setMostrarFormulario(false)}
          mensaje={mensaje}
        />
      )}
    </div>
  );
}
