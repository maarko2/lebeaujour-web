import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Asegúrate de la ruta correcta
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      
      <Routes>
        {/* Ruta raíz ("/"): Cuando el usuario entre a la URL base, verá el componente Home */}
        <Route path="/" element={<Home />} />
        
        {/* Cualquier otra ruta no definida redirige a la raíz ("/") */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
    </Router>
  );
}

export default App;
