import React from 'react';
import '../../assets/styles/Reconocimientos.css';

export default function Reconocimientos() {
  return (
    <div className="reconocimientos-container">
      <h1 className="reconocimientos-titulo">Reconocimientos del Colegio</h1>
      <p className="reconocimientos-intro">
        En esta sección se destacarán los logros y reconocimientos más importantes obtenidos por nuestra comunidad educativa.
      </p>

      <div className="reconocimiento-card">
        <h2>🏆 Prácticas Pedagógicas Destacadas a Nivel Nacional (2024)</h2>
        <p>
          Nuestro colegio ha sido reconocido por la <strong>Superintendencia de Educación</strong> y la <strong>Universidad Católica de Valparaíso</strong> por sus destacadas Prácticas Pedagógicas, siendo seleccionadas como unas de las mejores del país durante el año 2024.
        </p>
        <p>
          Este logro ha sido publicado oficialmente en el libro <em>"Buenas Ideas para una Mejor Educación"</em>, elaborado por el Gobierno de Chile.
          Nuestra participación se encuentra documentada en las páginas <strong>45, 46 y 47</strong> del documento.
        </p>
        <a
          className="reconocimiento-link"
          href="https://buenaspracticas.supereduc.cl/convocatoria-2024-2/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📖 Ver publicación oficial del Gobierno de Chile
        </a>
      </div>

      <div className="reconocimiento-futuro">
        <p>Muy pronto se seguirán publicando más logros y reconocimientos de nuestra comunidad educativa.</p>
      </div>
    </div>
  );
}
