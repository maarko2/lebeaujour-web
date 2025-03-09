import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import '../assets/styles/AboutUs.css';

export default function AboutUs() {
  return (
    <div class="animated fadeIn">
        <Navbar />
        <div className="aboutus-container">
            <h1 className="title-aboutus">Quiénes Somos</h1>
            <div className="aboutus-content">
                <div className="aboutus-section">
                    <h2 className="aboutus-subtitle">Nuestra Misión</h2>
                    <p className="aboutus-text">
                        Nuestra misión es educar a niños y jóvenes con excelencia académica y valores cristianos, formando líderes íntegros y comprometidos con su entorno.
                    </p>
                </div>
                <div className="aboutus-section">
                    <h2 className="aboutus-subtitle">Nuestra Visión</h2>
                    <p className="aboutus-text">
                        Ser una institución educativa reconocida por su calidad académica, formación en valores y compromiso con el desarrollo integral de sus estudiantes.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
