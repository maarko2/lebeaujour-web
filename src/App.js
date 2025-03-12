import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Noticias from './pages/Noticias';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Reglamentos from './pages/Reglamentos';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz ("/"): Cuando el usuario entre a la URL base, verá el componente Home */}
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/reglamentos" element={<Reglamentos />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
    </Router>
  );
}

export default App;
