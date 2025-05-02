import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css';
import colegioIcon from '../assets/images/colegio-icon.png';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        { username, password }
      );

      localStorage.setItem('token', data.token);
      navigate('/news');

      // ⏲️ Expira sesión tras 2 horas (opcional, redundante si el backend ya caduca token)
      setTimeout(() => {
        localStorage.removeItem('token');
      }, 2 * 60 * 60 * 1000); // 2 horas
    } catch (err) {
      setError('Credenciales inválidas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src={colegioIcon} alt="Logo del colegio" />
        </div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Entrando…' : 'Iniciar Sesión'}
          </button>
          {error && <p className="login-error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
