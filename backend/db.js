const mysql = require('mysql2/promise');
require('dotenv').config();

// conexion usando las credenciales
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function testConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

  const [rows] = await connection.execute('SELECT 1');
  console.log('Conexión exitosa:', rows);
  connection.end();
}

testConnection().catch(err => console.error('Error de conexión:', err));

module.exports = pool;
