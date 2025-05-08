require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const db = require('./db');
const authRoutes = require('./routes/auth.routes');
const verificarToken = require('./middleware/authMiddleware');

const app = express();

// Lista de dominios permitidos
const allowedOrigins = [
  'http://localhost:3000',
  'https://www.colegiocristianolebeaujour.cl',
  'https://colegiocristianolebeaujour.cl'
];

// Middleware de CORS para preflight OPTIONS (debe ir antes de otras rutas)
app.options('*', (req, res) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.status(200).send();
  } else {
    res.status(403).send();
  }
});

// Middleware para todas las rutas que agrega encabezados CORS
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  next();
});

// Ya no necesitamos el middleware cors() porque estamos manejando CORS manualmente
// app.use(cors({...}));

// Middleware JSON y archivos
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuración de imágenes
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// Ruta pública de test
app.get('/', (req, res) => {
  res.send('🔥 Backend funcionando 🔥');
});

// Rutas de login
app.use('/api', authRoutes);

// Noticias públicas
app.get('/api/news', async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT id, titulo, descripcion, tipo_noticia, fecha, imagen
      FROM noticias
      ORDER BY fecha DESC
    `);
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al obtener noticias' });
  }
});

// Subir noticia (protegida)
app.post('/api/news', verificarToken, upload.single('imagen'), async (req, res) => {
  const { titulo, descripcion, tipo_noticia } = req.body;
  const fecha = new Date();
  const imagen = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    await db.execute(
      `INSERT INTO noticias (titulo, descripcion, tipo_noticia, fecha, imagen)
       VALUES (?, ?, ?, ?, ?)`,
      [titulo, descripcion, tipo_noticia, fecha, imagen]
    );
    res.status(201).json({ mensaje: 'Noticia subida correctamente' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al subir la noticia' });
  }
});

// Eliminar noticia (protegida)
app.delete('/api/news/:id', verificarToken, async (req, res) => {
  const { id } = req.params;
  try {
    const [[{ imagen }]] = await db.execute('SELECT imagen FROM noticias WHERE id = ?', [id]);
    if (imagen) {
      const filePath = path.join(__dirname, imagen);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    await db.execute('DELETE FROM noticias WHERE id = ?', [id]);
    res.json({ mensaje: 'Noticia eliminada correctamente' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al eliminar la noticia' });
  }
});

// Puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});
