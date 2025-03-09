import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../assets/styles/Reglamentos.css';

export default function Reglamentos() {
  return (
    <div className="animated fadeIn">
      <Navbar />
      <div className="reglamentos-container">
        <h1 className="title-reglamentos">Reglamentos y Protocolos</h1>
        <div className="reglamentos-content">
          <div className="reglamentos-section">
            <h2 className="reglamentos-subtitle">Reglamentos</h2>
            <p className="reglamentos-text">
              Nuestro reglamento establece las normas y principios que garantizan un ambiente seguro, respetuoso y armonioso dentro de nuestra comunidad educativa. Aquí encontrarás información sobre la convivencia escolar, el uso de instalaciones, derechos y responsabilidades de estudiantes, docentes y personal, así como las medidas disciplinarias en caso de incumplimiento.
            </p>
          </div>
          <div className="reglamentos-section">
            <h2 className="reglamentos-subtitle">Protocolos</h2>
            <p className="reglamentos-text">
              Los protocolos de nuestra institución detallan los procedimientos a seguir en distintas situaciones, asegurando una respuesta adecuada y organizada ante emergencias, seguridad, salud y convivencia escolar. Estos lineamientos buscan proteger a nuestra comunidad y garantizar el bienestar de todos los miembros del colegio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}