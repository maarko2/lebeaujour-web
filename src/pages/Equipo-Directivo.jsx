import React from 'react';
import '../assets/styles/Equipo-Directivo.css';

/* Imagenes */
import MarisolBastos from '../assets/images/imagen-Directora.png';


const EquipoDirectivo = () => {
  const gestion = [
    {
      nombre: "Marisol Bastos",
      cargo: "Directora",
      imagen: MarisolBastos
    },
    {
      nombre: "Nombre Directivo 2",
      cargo: "Subdirectora",
      imagen: "/path-to-image.jpg"
    },
    {
      nombre: "Nombre Directivo 3",
      cargo: "Coordinador Académico",
      imagen: "/path-to-image.jpg"
    }
  ];

  const convivencia = [
    {
      nombre: "Nombre Directivo 4",
      cargo: "Coordinador de Convivencia",
      imagen: "/path-to-image.jpg"
    },
    {
      nombre: "Nombre Directivo 5",
      cargo: "Psicólogo Escolar",
      imagen: "/path-to-image.jpg"
    },
    {
      nombre: "Nombre Directivo 6",
      cargo: "Orientador",
      imagen: "/path-to-image.jpg"
    }
  ];

  return (
    <div className="directivos-container">
      <h1 className="directivos-title">Equipo Directivo</h1>
      
      <section className="directivos-section">
        <h2>Área de Gestión</h2>
        <div className="directivos-grid">
          {gestion.map((directivo, index) => (
            <div className="directivo-card" key={index}>
              <div className="directivo-image">
                <img src={directivo.imagen} alt={directivo.nombre} />
              </div>
              <div className="directivo-info">
                <h3>{directivo.nombre}</h3>
                <p>{directivo.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="directivos-section">
        <h2>Convivencia Escolar</h2>
        <div className="directivos-grid">
          {convivencia.map((directivo, index) => (
            <div className="directivo-card" key={index}>
              <div className="directivo-image">
                <img src={directivo.imagen} alt={directivo.nombre} />
              </div>
              <div className="directivo-info">
                <h3>{directivo.nombre}</h3>
                <p>{directivo.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EquipoDirectivo;