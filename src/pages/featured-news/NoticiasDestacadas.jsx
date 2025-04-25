import React from "react";
import '../../assets/styles/NoticiasDestacadas.css';
import { Link } from 'react-router-dom';

/* Imagenes */
import imagenNoticiaUtilesEscolares from '../../assets/images/images-featured-news/image-utiles-escolares-2025.webp';
import imagenNoticiaAdmision from '../../assets/images/images-featured-news/image-admision.webp';
import imagenNoticiaHorariosAtencion from '../../assets/images/images-featured-news/image-horario-atencion.webp';

export default function NoticiasDestacadas() {
  return (
    <div className="box-noticias">
      <div className="container-fluid">
        <h2 className="titulo-seccion">Noticias Destacadas</h2>

        <div className="row flex">
          {/* Noticia #1 */}
          <div className="col-lg-4">
            <div className="noticia">
              <div
                className="img-noticia"
                style={{
                  backgroundImage: `url(${imagenNoticiaAdmision})`,
                }}
              >
                <div className="color-gradient"></div>
              </div>
              <div className="cuerpo-noticia">
                <h3>Matriculate</h3>
                <p>
                  Ingresa aquí para iniciar el proceso de matrícula para el año 2025.
                </p>
                <a href="#">
                  Leer más
                </a>
              </div>
            </div>
          </div>

          {/* Noticia #2 */}
          <div className="col-lg-4">
            <div className="noticia">
              <div
                className="img-noticia"
                style={{
                  backgroundImage: `url(${imagenNoticiaUtilesEscolares})`,
                }}
              >
                <div className="color-gradient"></div>
              </div>
              <div className="cuerpo-noticia">
                <h3>Listado de útiles 2025</h3>
                <p>
                  En los siguientes documentos podrán encontrar la lista de
                  útiles escolares para el año 2025.
                </p>
                <Link to="/listado-utiles" className="leer-mas-btn">
                  Leer más
                </Link>
              </div>
            </div>
          </div>

          {/* Noticia #3 */}
          <div className="col-lg-4">
            <div className="noticia">
              <div
                className="img-noticia"
                style={{
                  backgroundImage: `url(${imagenNoticiaHorariosAtencion})`,
                }}
              >
                <div className="color-gradient"></div>
              </div>
              <div className="cuerpo-noticia">
                <h3>Horarios de Atención</h3>
                <p>
                    Revisa los horarios de atención de los distintos departamentos
                    del colegio para el año 2025.
                </p>
                <Link to="/horarios-atencion" className="leer-mas-btn">
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
