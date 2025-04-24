import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Reglamentos from './pages/Reglamentos';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import PhotoGaleria from './pages/PhotoGaleria';
import Navbar from './components/Navbar';
import News  from './pages/News';
import Historia from './pages/Historia';
import EquipoDirectivo from './pages/Equipo-Directivo';
import ListadoUtiles from './pages/featured-news/Listado-Utiles';
import NewsTemp from './pages/News-temp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta raíz ("/") */}
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/news" element={<News />} />
        {/* Components */}
        <Route path="/footer" element={<Footer />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Pages */}
        <Route path="/reglamentos" element={<Reglamentos />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/listado-utiles" element={<ListadoUtiles />} />
        <Route path="/equipo-directivo" element={<EquipoDirectivo />} />
        <Route path="/news-temp" element={<NewsTemp />} />
        <Route path="/galeria/:year" element={<PhotoGaleria />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
