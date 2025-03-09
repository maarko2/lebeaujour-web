import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../assets/styles/Noticias.css';

const Noticias = () => {
  const noticias = [
    {
      titulo: 'Título de la Noticia 1',
      descripcion: 'Descripción breve de la noticia 1.',
      fecha: '2025-03-06',
      imagen: 'https://scontent.fscl22-1.fna.fbcdn.net/v/t39.30808-6/469823664_1145622917564333_1867973361553248300_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFhyNz_iE-ZbivsPQdmGQMsGjgjKqP17c4aOCMqo_XtziLhH7CxODdhRrWvXn_CrlBrQT5UpgUHk24vy3YgzxCu&_nc_ohc=L5Uu9kw-yk0Q7kNvgGSooR_&_nc_oc=AdhgwsQ0_RpjLLAoJvu1drmkUGKN2EaajcBukpPb3aPnp0oIMOIFA2jEKxpGZlsmuXk&_nc_zt=23&_nc_ht=scontent.fscl22-1.fna&_nc_gid=AqKr_0Jf9WTcsYfx_mkS_QF&oh=00_AYDs1huNLXtX2G0sg7Me79DqCnexcyyYx87NpSG-zNhp0Q&oe=67CFF8CD'
    },
    {
      titulo: 'Título de la Noticia 2',
      descripcion: 'Descripción breve de la noticia 2.',
      fecha: '2025-03-05',
      imagen: 'url-de-la-imagen-2.jpg'
    }
  ];

  return (
    <div>
      <Navbar />
      <h1 className="title-news">Últimas Novedades</h1>
      <p className="subtitle-news">Bienvenido a la página de noticias del Colegio Le Beau Jour.</p>
      <div className="news-container">
        {noticias.map((noticia, index) => (
          <div className="news-card" key={index}>
            <div className="news-header">
              <h2>{noticia.titulo}</h2>
              <p>{noticia.fecha}</p>
            </div>
            <div className="news-body">
              <p>{noticia.descripcion}</p>
              {noticia.imagen && <img src={noticia.imagen} alt={noticia.titulo} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;
