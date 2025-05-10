import React from 'react';
import '../../assets/styles/Listado-Utiles.css';
// Importamos la imagen directamente
import bannerImage from '../../assets/images/images-featured-news/banner-utiles-escolares.webp';

export default function ListadoUtiles2025() {
  return (
    <>
      <div className="listado-utiles-banner" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bannerImage})` 
      }}>
        <div className="banner-content">
          <h1>Listado de Útiles Escolares 2025</h1>
          <p>Todo lo que necesitas para comenzar el año escolar</p>
        </div>
      </div>      
      <div className="listado-utiles-container">
        <div className="curso-section notas">
          <h2>Notas Generales</h2>
          <ul>
            <li>Todos los útiles deben venir marcados con el nombre del estudiante</li>
            <li>A lo largo del año se pueden solicitar otros materiales adicionales según las necesidades académicas</li>
            <li>Se exige higiene personal diaria y materiales específicos para asignaturas prácticas</li>
          </ul>
        </div>
        <div className="curso-section preescolar">
          <h2>Pre-Kínder y Kínder</h2>
          <h3>Material Didáctico y Escritorio:</h3>
          <ul>
            <li>Cuadernos universitarios cuadro grande (100 hjs, forros azul y rojo)</li>
            <li>Cuaderno chico para comunicaciones (forro rojo)</li>
            <li>Estuche grande marcado</li>
            <li>Plumones: pizarra, permanentes, de colores</li>
            <li>Lápices: grafito (4), colores (2 cajas), cera (2 cajas)</li>
            <li>Goma de borrar + sacapuntas</li>
            <li>Tijera</li>
            <li>Block de dibujo Nº99</li>
            <li>Pincel grueso Nº12</li>
            <li>Plastilina (1 caja de 12 colores)</li>
            <li>Temperas (2 frascos grandes, colores sugeridos)</li>
            <li>Carpetas de: cartulina española, color, metálica</li>
            <li>Carpeta goma eva (tradicional y escarchada)</li>
            <li>Carpetas de papel lustre (4 paquetes)</li>
          </ul>
          <h3>Higiene:</h3>
          <ul>
            <li>Toalla con elástico, vaso y cepillo dental unidos</li>
          </ul>
          <h3>Textos:</h3>
          <ul>
            <li>Caligrafix "Trazos y letras" y "Lógica y números" (niveles 1 y 2 según curso)</li>
          </ul>
        </div>

        <div className="curso-section primaria">
          <h2>1º a 4º Básico</h2>
          <h3>Cuadernos por Asignatura:</h3>
          <ul>
            <li>Lenguaje (forro rojo)</li>
            <li>Matemáticas (azul)</li>
            <li>Cs. Naturales (verde)</li>
            <li>Cs. Sociales (café)</li>
            <li>Inglés (amarillo)</li>
            <li>Religión (celeste)</li>
            <li>Orientación (blanco)</li>
          </ul>
          <h3>Artísticos y Tecnológicos:</h3>
          <ul>
            <li>Cuaderno de croquis</li>
            <li>Block Nº99 y Block chico</li>
            <li>Caja de lápices de colores y cera</li>
            <li>Temperas + pinceles</li>
            <li>Caja de plasticina</li>
            <li>Carpetas varias (cartulina, goma eva, papel lustre)</li>
          </ul>
        </div>

        <div className="curso-section secundaria">
          <h2>5º a 8º Básico</h2>
          <h3>Cuadernos por Asignatura:</h3>
          <ul>
            <li>Lenguaje (universitario 100 hojas)</li>
            <li>Matemáticas (universitario 100 hojas)</li>
            <li>Inglés (universitario 100 hojas)</li>
            <li>Cs. Naturales (universitario 100 hojas)</li>
            <li>Cs. Sociales (universitario 100 hojas)</li>
            <li>Religión y Tecnología (cuaderno chico 40 hojas)</li>
            <li>Música (cuaderno de media pauta)</li>
            <li>Educación Artística (cuaderno de croquis)</li>
          </ul>
          <h3>Material Matemático:</h3>
          <ul>
            <li>Regla 30 cm</li>
            <li>Compás</li>
            <li>Escuadra</li>
            <li>Transportador</li>
            <li>Calculadora simple</li>
          </ul>
        </div>
      </div>
    </>
  );
}