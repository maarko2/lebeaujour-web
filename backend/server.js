require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const path    = require('path');
const fs      = require('fs');
const multer  = require('multer');
const db      = require('./db');
const facebookRoutes = require('./routes/facebook');

const app = express();

// —————————————————————————————
// Multer: configuración para guardar imágenes en /uploads
// —————————————————————————————
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  filename:    (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// —————————————————————————————
// Middlewares
// —————————————————————————————
app.use(cors({
  origin:      process.env.FRONTEND_URL,
  methods:     ['GET','POST','DELETE'],
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// —————————————————————————————
// Rutas
// —————————————————————————————

// Rutas de Facebook
app.use('/api', facebookRoutes);

// 1. Comprobación de que el servidor está arriba
app.get('/', (req, res) => {
  res.send('🔥 Backend funcionando 🔥');
});

// 2. Listar todas las noticias
app.get('/api/news', async (req, res) => {
  try {
    const [rows] = await db.execute(
      `SELECT id, titulo, descripcion, tipo_noticia, fecha_publicacion, imagen
         FROM noticias
       ORDER BY fecha_publicacion DESC`
    );
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al obtener noticias' });
  }
});

// 3. Crear una noticia (con imagen)
app.post('/api/news', upload.single('imagen'), async (req, res) => {
  const { titulo, descripcion, tipo_noticia } = req.body;
  const fecha_publicacion = new Date();
  const imagen = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    await db.execute(
      `INSERT INTO noticias
        (titulo, descripcion, tipo_noticia, fecha_publicacion, imagen)
       VALUES (?, ?, ?, ?, ?)`,
      [titulo, descripcion, tipo_noticia, fecha_publicacion, imagen]
    );
    res.status(201).json({ mensaje: 'Noticia subida correctamente' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al subir la noticia' });
  }
});

// 4. Borrar una noticia por id
app.delete('/api/news/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // 1) Obtener la ruta de la imagen
    const [[{ imagen }]] = await db.execute(
      'SELECT imagen FROM noticias WHERE id = ?',
      [id]
    );
    // 2) Borrar el fichero si existe
    if (imagen) {
      const filePath = path.join(__dirname, imagen);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    // 3) Borrar el registro de la BD
    await db.execute('DELETE FROM noticias WHERE id = ?', [id]);
    res.json({ mensaje: 'Noticia eliminada correctamente' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error al eliminar la noticia' });
  }
});

// Levantar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
