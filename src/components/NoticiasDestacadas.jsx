import React from "react";
import '../assets/styles/NoticiasDestacadas.css';

export default function NoticiasDestacadas() {
  return (
    <div className="box-noticias">
      <div className="container-fluid">
        {/* Título de la sección (opcional) */}
        <h2 className="titulo-seccion">Noticias Destacadas</h2>

        <div className="row flex">
          {/* Noticia #1 */}
          <div className="col-lg-4">
            <div className="noticia">
              <div
                className="img-noticia"
                style={{
                  backgroundImage: `url('https://blog.unitips.cl/hubfs/Blog/06.24_Proceso%20de%20admisi%C3%B3n%202025/Proceso-de-admision-2025.png')`,
                }}
              >
                <div className="color-gradient"></div>
              </div>
              <div className="cuerpo-noticia">
                <h3>Proceso de admisión Prekínder 2025</h3>
                <p>
                  El Lunes 10 de Marzo comienza el proceso de admisión para el año 2025. ¡No te quedes fuera!
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
                  backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663957835183-a11d378f63b8?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                }}
              >
                <div className="color-gradient"></div>
              </div>
              <div className="cuerpo-noticia">
                <h3>Listado de útiles 2025</h3>
                <p>
                  En los siguientes documentos podrán encontrar la lista de
                  útiles escolares y el uniforme para el año 2025.
                </p>
                <a href="#">Leer más</a>
              </div>
            </div>
          </div>

          {/* Noticia #3 */}
          <div className="col-lg-4">
            <div className="noticia">
              <div
                className="img-noticia"
                style={{
                  backgroundImage: `url('https://docplace-riomarca.s3.amazonaws.com/2023/08/Dia-da-secret%C3%A1ria-scaled-e1601477071105.jpg')`,
                }}
              >
                <div className="color-gradient"></div>
              </div>
              <div className="cuerpo-noticia">
                <h3>Horarios de Antención</h3>
                <p>
                    Revisa los horarios de atención de los distintos departamentos
                    del colegio para el año 2025.
                </p>
                <a href="#">Leer más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
