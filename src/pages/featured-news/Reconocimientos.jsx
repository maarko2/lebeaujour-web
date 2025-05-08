import React from 'react';
import '../../assets/styles/Reconocimientos.css';
// Importando las imágenes
import photoReco1 from '../../assets/images/images-featured-news/photo-reco-1.webp';
import photoReco2 from '../../assets/images/images-featured-news/photo-reco-2.webp';
import photoPUCV from '../../assets/images/images-featured-news/image-pucv.png';

export default function Reconocimientos() {
  return (
    <div className="reconocimientos-container">
      <h1 className="reconocimientos-titulo">Reconocimientos del Colegio</h1>
      <p className="reconocimientos-intro">
        En esta sección se destacarán los logros y reconocimientos más importantes obtenidos por nuestra comunidad educativa.
      </p>

      <div className="reconocimiento-card">
        <h2>🤝 Convenio de Colaboración PUCV</h2>
        <p>
          Estimada Comunidad Beaujouriana:
        </p>
        <p>
          ¡Nos sentimos muy orgullosos de compartir una excelente noticia! Nuestro Colegio ha firmado un convenio de colaboración académica con la <strong>Universidad Católica de Valparaíso</strong>, el cual beneficiará directamente a todos los estudiantes, quienes podrán acercarse al mundo universitario desde etapas tempranas.
        </p>
        <p>
          El principal objetivo de este acuerdo, es fortalecer los vínculos de confianza, unión y reciprocidad entre ambas instituciones. Para ello, desarrollaremos diversas actividades y programas en conjunto, como el Campeonato de Matemática CMAT el cual ya participan algunos de nuestros estudiantes de 7° y 8° básico, visitas guiadas al campus universitario, acceso a ferias estudiantiles, así como la participación en talleres y docentes en formación apoyando directamente en nuestro colegio.
        </p>
        <p>
          ¡Seguimos trabajando juntos para ofrecer mejores oportunidades y enriquecer la formación de nuestros estudiantes!
        </p>
        <div className="reconocimiento-imagenes">

          <img 
            src={photoPUCV} 
            alt="Estudiantes participando en actividades del convenio" 
            className="reconocimiento-pucv-img" 
          /> 
        </div>

      </div>
      
      
      <div className="reconocimiento-card">
        <h2>🏆 Prácticas Pedagógicas Destacadas a Nivel Nacional (2024)</h2>
        <p>
          Nuestro colegio ha sido reconocido por la <strong>Superintendencia de Educación</strong> y la <strong>Universidad Católica de Valparaíso</strong> por sus destacadas Prácticas Pedagógicas, siendo seleccionadas como unas de las mejores del país durante el año 2024.
        </p>
        
        <div className="reconocimiento-imagenes">
          <img 
            src={photoReco1} 
            alt="Reconocimiento de Prácticas Pedagógicas 1" 
            className="reconocimiento-img" 
          />
          <img 
            src={photoReco2} 
            alt="Reconocimiento de Prácticas Pedagógicas 2" 
            className="reconocimiento-img" 
          />
        </div>
        
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
