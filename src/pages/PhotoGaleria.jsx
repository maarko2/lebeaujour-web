import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PhotoGaleria() {
  const { year } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Ajusta la URL según tu configuración (por ejemplo, http://localhost:3000)
    fetch(`http://localhost:3000/api/facebook-photos?year=${year}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos))
      .catch((err) => console.error('Error:', err));
  }, [year]);

  return (
    <div>
      <h1>Fotos del año {year}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {photos.map((url, idx) => (
          <img key={idx} src={url} alt={`Foto ${idx}`} style={{ width: '200px', height: 'auto' }} />
        ))}
      </div>
    </div>
  );
}
