import React from 'react';
import '../assets/styles/Reglamentos.css';

export default function Reglamentos() {
  return (
    <div className="reglamentos-page">
      <div className="reglamentos-hero">
        <h1>Reglamentos y Protocolos</h1>
        <p className="hero-subtitle">
          Garantizando un ambiente seguro y armonioso para nuestra comunidad educativa
        </p>
      </div>

      <div className="reglamentos-container">
        <div className="card">
          <div className="card-content">
            <h2>Reglamentos</h2>
            <p>
            Nuestro colegio cuenta con reglamentos claros que ordenan la vida escolar y promueven una convivencia armónica, basada en el respeto, 
            la responsabilidad y la participación. A través del Reglamento Interno de Convivencia Escolar y el Reglamento de Evaluación y Promoción, 
            garantizamos un entorno justo, seguro y orientado al aprendizaje, donde se respetan los derechos de todos los miembros de la comunidad educativa.
            </p>
            <ul>
              <li>Normas de convivencia escolar</li>
              <li>Derechos y deberes de los estudiantes</li>
              <li>Clasificacion y manejo de faltas disciplinarias</li>
              <li>Procedimientos de evaluacion y promoción académica</li>
              <li>Medidas formativas y disciplinarias</li>
            </ul>
            <a className="download-btn" href="/files/Manual-de-Convivencia-Escolar-2025.docx" download>
              Descargar Reglamento
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>Protocolos</h2>
            <p>
              Dentro de los manuales se encuentran diversos protocolos oficiales que orientan la actuación en situaciones específicas, entre los que destacan:
            </p>
            <ul>
              <li>Protocolo de Acción Frente a la Detección de vulneración de derechos a estudiantes</li>
              <li>Protocolo de prevención y actuación frente a agresiones sexuales y hechos de connotacion sexual</li>
              <li>Protocolo de retención en el sistema escolar de estudiantes embarazadas, madres y padrs adolescentes</li>
            </ul>
            <p>
              Además, se incluyen otros protocolos relacionados con la atención de denuncias de maltrato, manejo de situaciones de 
              acoso y procedimientos en caso de accidentes escolares, lo que demuestra un enfoque integral para la protección y 
              bienestar de toda la comunidad educativa.
            </p>
            <a className="download-btn" href="/files/Reglamento de Evaluacion y promocion ACTUAL.docx" download>
              Descargar Protocolos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}