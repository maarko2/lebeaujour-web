// React and Router imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SchemaMarkup from './components/SEO/SchemaMarkup';

// Main Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Historia from './pages/Historia';
import News from './pages/News';
import NewsTemp from './pages/News-temp';

// Academic Pages
import EquipoDirectivo from './pages/Equipo-Directivo';
import Reglamentos from './pages/Reglamentos';
import ListadoUtiles from './pages/featured-news/Listado-Utiles';
import HorariosAtencion from './pages/featured-news/Horarios-Atencion';
import Reconocimientos from './pages/featured-news/Reconocimientos';

// Media Pages
import Galeria from './pages/Galeria';
import PhotoGaleria from './pages/PhotoGaleria';

// Contact Pages
import Contacto from './pages/Contacto';

//Auth Page
import Login from './components/Login';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Router>
      {/* SEO & Layout Components */}
      <SchemaMarkup />
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-temp" element={<NewsTemp />} />

        {/* Academic Routes */}
        <Route path="/equipo-directivo" element={<EquipoDirectivo />} />
        <Route path="/reglamentos" element={<Reglamentos />} />
        <Route path="/listado-utiles" element={<ListadoUtiles />} />
        <Route path="/horarios-atencion" element={<HorariosAtencion />} />
        <Route path="/reconocimientos" element={<Reconocimientos />} />

        {/* Media Routes */}
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeria/:year" element={<PhotoGaleria />} />

        {/* Contact Routes */}
        <Route path="/contacto" element={<Contacto />} />

        {/* Login route */}
        <Route path="/adminlbj_" element={<Login />} />

        {/* Redirect for 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
