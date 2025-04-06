import React from 'react';
import '../assets/styles/AboutUs.css';

import LeBeauJour from '../assets/images/imgColegio2.jpg';
import NuestraVision from '../assets/images/imgColegio3.jpg';
import NuestraMision from '../assets/images/imagen-aboutus-1.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>Sobre Nosotros</h1>
        
        <div className="about-section">
          <div className="about-image">
            <img src={LeBeauJour} alt="Interior del colegio" />
          </div>
          
          <div className="about-text">
            <h2>Le Beau Jour</h2>
            <p>
            Collège Chrétien Français "Le Beau Jour" es un establecimiento 
            educativo particular subvencionado que ofrece educación parvularia y básica, 
            comprometido con la formación integral de niños y niñas. Con una sólida base en valores cristianos y una enseñanza trilingüe personalizada,
            nuestro colegio se centra en desarrollar estudiantes autónomos, críticos y solidarios 
            a través de metodologías innovadoras y un enfoque holístico.
            </p>
            <p>
            Fomentamos un ambiente de convivencia democrática y equidad, donde cada alumno 
            es estimulado a alcanzar la excelencia académica y el desarrollo cognitivo-emocional, 
            preparándolos para enfrentar los desafíos de la vida con responsabilidad y compromiso.
            </p>
          </div>
        </div>

        
         {/* Sección de Visión */}
         <div className="about-section">
          <div className="about-text">
            <h2>Nuestra Visión</h2>
              <p>
                Aspiramos a ser un referente de excelencia educativa donde la formación académica se integre armónicamente con el desarrollo personal y social.
              </p>
              <p>
                Visualizamos un entorno inclusivo y equitativo que prepare a nuestros alumnos para vivir una vida plena, productiva y comprometida con el bien común, impulsando ciudadanos solidarios y transformadores.
              </p>
          </div>
          <div className="about-image">
            <img src={NuestraVision} alt="Interior del colegio" />
          </div>
        </div>
        


        {/* Sección de Misión */}
        <div className="about-section">
          <div className="about-image">
            <img src={NuestraMision} alt="Interior del colegio" />
          </div>
          <div className="about-text">
            <h2>Nuestra Misión</h2>
            <p>
                Formar estudiantes autónomos, críticos y comprometidos mediante una educación integral basada en valores cristianos y una enseñanza trilingüe personalizada.
              </p>
              <p>
                Buscamos fomentar una cultura de altas expectativas y responsabilidad social, utilizando metodologías innovadoras que desarrollen habilidades y destrezas, y fortalezcan tanto el crecimiento académico como el desarrollo cognitivo-emocional.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;