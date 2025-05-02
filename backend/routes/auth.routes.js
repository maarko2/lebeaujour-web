const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const [rows] = await db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
  const user = rows[0];

  if (!user) return res.status(401).json({ message: 'Credenciales inválidas' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ message: 'Credenciales inválidas' });

  const token = jwt.sign(
    { id: user.id, username: user.username, rol: user.rol },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );

  res.json({ token });
});

module.exports = router;
