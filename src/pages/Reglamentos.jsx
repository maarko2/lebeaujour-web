import React from 'react';
import '../assets/styles/Reglamentos.css';

export default function Reglamentos() {
  return (
    <div className="reglamentos-page">
      <div className="reglamentos-hero">
        <h1>Documentos</h1>
        <p className="hero-subtitle">
          En esta sección encontrarás los documentos que rigen la convivencia escolar en nuestro colegio.
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
        <div className="card">
          <div className="card-content">
            <h2>Ley TEA</h2>
            <p>
            Nuestro colegio, en su compromiso con la inclusión y el bienestar de todos los estudiantes, 
            ha desarrollado una serie de documentos y protocolos en el marco de la Ley N°21.545, conocida 
            como Ley TEA. Estos recursos están diseñados para asegurar la protección de los derechos, la atención 
            integral y la inclusión de las personas con Trastorno del Espectro Autista (TEA) en nuestra comunidad educativa.
            </p>
            <ul>
              <li> <strong>Protocolo de Desregulación Emocional para Niños con Condición Espectro Autista:</strong> Este protocolo establece los procedimientos para facilitar la autorregulación emocional de los estudiantes con TEA, con el objetivo de crear un entorno seguro y tranquilo.  Incluye estrategias de prevención, acompañamiento y uso de espacios dedicados para el bienestar del estudiante.</li>
              <li> <strong>Certificado Laboral para Apoderados (Ley TEA):</strong> Se proporciona un formato de certificado para que padres, madres o tutores de estudiantes con TEA puedan justificar su ausencia laboral en situaciones de emergencia, conforme a lo estipulado en la Ley N°21.545. </li>
            </ul>
            <a className="download-btn" href="/files/Certificado laboral para apoderados Le beau jour.pdf" download>
              Descargar Protocolo
            </a>
            <a className="download-btn" href="/files/PROTOCOLO DESREGULACION COLEGIO LE BEAU JOUR.pdf" download>
              Descargar Certificado Laboral
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}