import React from 'react';
import '../../assets/styles/Horarios-Atencion.css';

const HorariosAtencion = () => {
  const horarios = [
    { dia: 'Lunes', horario: '9:00 a.m. - 7:00 p.m.', emoji: '📚' },
    { dia: 'Martes', horario: '9:00 a.m. - 7:00 p.m.', emoji: '✏️' },
    { dia: 'Miércoles', horario: '9:00 a.m. - 7:00 p.m.', emoji: '📝' },
    { dia: 'Jueves', horario: '9:00 a.m. - 7:00 p.m.', emoji: '🎨'},
    { dia: 'Viernes', horario: '9:00 a.m. - 7:00 p.m.', emoji: '📖' }
  ];

  return (
    <>
      <div className="listado-utiles-banner">
        <h1>🕐 Horarios de Atención</h1>
        <p>Conoce nuestros horarios de atención durante la semana</p>
      </div>

      <div className="listado-utiles-container">
        <div className="curso-section">
          <div className="horarios-content">
            {horarios.map((item, index) => (
              <div key={index} className="horario-item">
                <div className="dia">
                  <span className="emoji">{item.emoji}</span>
                  {item.dia}
                </div>
                <div className="horario">
                  {item.horario}
                  {item.nota && <div className="nota">({item.nota})</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HorariosAtencion;