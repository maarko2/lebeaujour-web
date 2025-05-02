require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const db = require('./db');

const facebookRoutes = require('./routes/facebook');
const authRoutes = require('./routes/auth.routes');
const verificarToken = require('./middleware/authMiddleware');


const app = express();

const storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas públicas
app.use('/api', facebookRoutes);
app.use('/api', authRoutes);

// Ping de prueba
app.get('/', (req, res) => {
  res.send('🔥 Backend funcionando 🔥');
});

// Obtener todas las noticias (público)
app.get('/api/news', async (req, res) => {
  try {
    const [rows] = await db.execute(
      `SELECT id, titulo, descripcion, tipo_noticia, fecha, imagen
         FROM noticias
       ORDER BY fecha DESC`
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al obtener noticias' });
  }
});

// Crear noticia (PROTEGIDO)
app.post('/api/news', verificarToken, upload.single('imagen'), async (req, res) => {
  const { titulo, descripcion, tipo_noticia } = req.body;
  const fecha = new Date();
  const imagen = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    await db.execute(
      `INSERT INTO noticias
        (titulo, descripcion, tipo_noticia, fecha, imagen)
       VALUES (?, ?, ?, ?, ?)`,
      [titulo, descripcion, tipo_noticia, fecha, imagen]
    );
    res.status(201).json({ mensaje: 'Noticia subida correctamente' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al subir la noticia' });
  }
});

// Eliminar noticia (PROTEGIDO)
app.delete('/api/news/:id', verificarToken, async (req, res) => {
  const { id } = req.params;
  try {
    const [[{ imagen }]] = await db.execute(
      'SELECT imagen FROM noticias WHERE id = ?',
      [id]
    );
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
