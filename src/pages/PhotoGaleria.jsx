import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/PhotoGaleria.css';

export default function PhotoGaleria() {
  const { year } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    fetch(`${process.env.REACT_APP_API_URL}/api/facebook-photos?year=${year}`)
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.message || 'Error al cargar las fotos');
          });
        }
        return response.json();
      })
      .then(data => {
        if (!data.photos || !Array.isArray(data.photos)) {
          throw new Error('Formato de respuesta inválido');
        }
        setPhotos(data.photos);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [year]);

  if (loading) return (
    <div className="photo-gallery-container">
      <div className="loading-container">
        <div className="loader"></div>
        <p>Cargando fotos...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="photo-gallery-container">
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    </div>
  );

  return (
    <div className="photo-gallery-container">
      <div className="gallery-content">
        <h1>Fotos del año {year}</h1>
        {photos.length === 0 ? (
          <p className="no-photos">No hay fotos disponibles para este año</p>
        ) : (
          <div className="photos-grid">
            {photos.map((photo, index) => (
             <div key={index} className="photo-item">
              <a href={photo} target="_blank" rel="noopener noreferrer">
               <img src={photo} alt={`Foto ${index + 1}`} loading="lazy" />
              </a>
             </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
}