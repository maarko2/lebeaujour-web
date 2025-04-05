require('dotenv').config();
console.log("==== Variables de entorno en server.js ====");
console.log("FACEBOOK_PAGE_ID:", process.env.FACEBOOK_PAGE_ID);
console.log("FACEBOOK_ACCESS_TOKEN:", process.env.FACEBOOK_ACCESS_TOKEN);
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);
console.log("PORT:", process.env.PORT);
console.log("===========================================");


const express = require('express');
const cors = require('cors'); // Habilita CORS
const app = express();
const db = require('./db'); // Importa la conexión a la base de datos
const facebookRoutes = require('./routes/facebook'); // Importa las rutas de Facebook
const newsRoutes = require('./routes/news'); // Importa las rutas de noticias

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST'],
    credentials: true
  }));
app.use(express.json()); // Permite parsear JSON

// Rutas
app.use('/api', facebookRoutes); // Rutas de Facebook
app.use('/api', newsRoutes); // Rutas de noticias

// Endpoint raíz
app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente 🚀');
});

// Configurar el puerto y arrancar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
