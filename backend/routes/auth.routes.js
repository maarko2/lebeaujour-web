const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Lista de dominios permitidos (mantener sincronizada con server.js)
const allowedOrigins = [
  'http://localhost:3000',
  'https://www.colegiocristianolebeaujour.cl',
  'https://colegiocristianolebeaujour.cl'
];

// Middleware CORS específico para las rutas de autenticación
router.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  
  // Responder a las solicitudes OPTIONS inmediatamente
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Ruta de login mejorada con mejor manejo de errores
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log('Intento de login:', username);

    const [rows] = await db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
    const user = rows[0];

    if (!user) {
      console.log('Usuario no encontrado:', username);
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Contraseña incorrecta para usuario:', username);
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    console.log('Login exitoso para:', username);
    res.json({ token });
  } catch (err) {
    console.error('Error en autenticación:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
