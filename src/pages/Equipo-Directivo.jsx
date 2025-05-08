import React from 'react';
import '../assets/styles/Equipo-Directivo.css';

/* Imagenes */
import Directora from '../assets/images/images-directiva/image-directora.webp';
import Sub_Directora from '../assets/images/images-directiva/image-sub-directora.webp';
import Jefe_UTP from '../assets/images/images-directiva/image-jefe-utp.webp';
import Encargada_Convicencia from '../assets/images/images-directiva/image-encargada-convivencia.webp';
import Encargado_Convicencia from '../assets/images/images-directiva/image-encargado-convivencia.webp';
import Educadora_Diferencial from '../assets/images/images-directiva/image-educadora-diferencial.webp';


const EquipoDirectivo = () => {
  const gestion = [
    {
      nombre: "Marisol Bastos",
      cargo: "Directora",
      imagen: Directora,
      formacion: [
        "Profesora de Educación General Básica",
        "Licenciada en Educación",
        "Diplomado en Estratégica de Organizaciones Educativas",
        "Magister en Dirección y Liderazgo para la Gestión Educacional"
      ]
    },
    {
      nombre: "Ruby Bahamondes",
      cargo: "Subdirectora",
      imagen: Sub_Directora,
      formacion: [
        "Profesora de Enseñanza General Básica",
        "Diplomado en Didáctica del Idioma Francés",
        "Magíster en Educación Mención Administración y Gestión Educacional"
      ]
    },
    {
      nombre: "Roberto Valdivia",
      cargo: "Jefe de UTP",
      imagen: Jefe_UTP,
      formacion: [
        "Profesor de Francés",
        "Profesor de Educación General Básica",
        "Licenciado en Educación",
        "Diplomado en Gestión Educativa",
        "Magister en Gestión Pedagógica y Curricular"
      ]
    }
  ];

  const convivencia = [
    {
      nombre: "Alejandra Aravena",
      cargo: "Encargada de Convivencia",
      imagen: Encargada_Convicencia
    },
    {
      nombre: "Mauricio Veit",
      cargo: "Encargado de Convivencia",
      imagen: Encargado_Convicencia
    },
    {
      nombre: "Andrea Acevedo",
      cargo: "Educadora Diferencial",
      imagen: Educadora_Diferencial
    },
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
                <p className="cargo">{directivo.cargo}</p>
                {directivo.formacion && (
                  <div className="formacion-academica">
                    <h4>Formación Académica</h4>
                    <ul>
                      {directivo.formacion.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
                <p className="cargo">{directivo.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EquipoDirectivo;