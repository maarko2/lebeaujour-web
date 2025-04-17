import React from 'react';
import '../assets/styles/Historia.css';
/* Imagenes */
import Fundadores from '../assets/images/images-historia/image-fundadores-colegio.webp'
import LineaTemporalImg1 from '../assets/images/LineaTemporal-1.png';
import LineaTemporalImg2 from '../assets/images/LineaTemporal-3.png';
import LineaTemporalImg3 from '../assets/images/LineaTemporal-2.png';

const Historia = () => {
  return (
    <div className="historia-container">
      <div className="historia-hero">
        <div className="historia-content">
          <div className="text-section">
            <h1>Nuestra Historia</h1>
            <p>
            El Colegio Le Beau Jour nace a raíz de la visión de su fundador, Hernán Bastos, 
            en el año 1983, con el firme propósito de crear un espacio educativo que combinara 
            la excelencia académica con los valores cristianos fundamentales. Inspirado en el 
            modelo educativo francés, el colegio ha buscado desde sus inicios ofrecer una 
            formación integral que fomente el pensamiento crítico, la disciplina y el respeto 
            por la diversidad cultural. A lo largo de los años, hemos crecido con el compromiso 
            de formar no solo estudiantes competentes, sino también personas íntegras, capaces 
            de enfrentar los desafíos del mundo con fe, ética y responsabilidad. Hoy en día, 
            Le Beau Jour es una comunidad educativa sólida, donde se cultivan el conocimiento, 
            los valores y el amor por el aprendizaje en un ambiente cálido y acogedor.
            </p>
          </div>
          <div className="image-section">
            <img src={ Fundadores } alt="Historia del Colegio" />
            <p className="founders-caption">Fundadores del Colegio</p>
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h2>Nuestra Línea de Tiempo</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-image">
                <img src={LineaTemporalImg1} alt="Fundación del colegio" />
              </div>
              <div className="timeline-text">
                <h3>1983</h3>
                <p>Fundación del Colegio Le Beau Jour con sus primeras instalaciones.</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-image">
                <img src={LineaTemporalImg2} alt="Programa trilingüe" />
              </div>
              <div className="timeline-text">
                <h3>1997</h3>
                <p>Primer dia de clases de año 1997</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-image">
                <img src={LineaTemporalImg3} alt="Nuevas instalaciones" />
              </div>
              <div className="timeline-text">
                <h3>2000</h3>
                <p>Expansión de instalaciones. Se inauguran nuevas salas de clases</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/images/historia/2010.jpg" alt="Certificación internacional" />
              </div>
              <div className="timeline-text">
                <h3>2010</h3>
                <p>Certificación internacional de programas educativos, reconociendo nuestra excelencia académica a nivel global.</p>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-image">
                <img src="/images/historia/2025.jpg" alt="Actualidad" />
              </div>
              <div className="timeline-text">
                <h3>2025</h3>
                <p>Actualidad: Un colegio consolidado, formando líderes del mañana con valores cristianos y excelencia académica.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;