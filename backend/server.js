require('dotenv').config(); // Carga las variables de entorno

const express = require('express');
const cors = require('cors'); // Habilita CORS
const app = express();
const facebookRoutes = require('./routes/facebook'); // Importa las rutas

// Middleware
app.use(cors()); // Evita errores de CORS si el frontend está en otro dominio
app.use(express.json()); // Permite parsear JSON

// Rutas
app.use('/api', facebookRoutes);

app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente 🚀');
});

// Configurar el puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
