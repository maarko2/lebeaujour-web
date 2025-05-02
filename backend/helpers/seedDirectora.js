// helpers/seedDirectora.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const db = require('../db');
const bcrypt = require('bcrypt');

async function crearOActualizarDirectora() {
  const nuevaPass = '467L_News_BJ!#_';
  const hashedPassword = await bcrypt.hash(nuevaPass, 10);

  await db.execute(
    `INSERT INTO usuarios (username, password, rol)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE
       password = VALUES(password)`,
    ['directora', hashedPassword, 'directora']
  );

  console.log('Usuario directora creado o actualizado');
}

crearOActualizarDirectora().catch(console.error);
