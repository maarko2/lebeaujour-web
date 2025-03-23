// backend/server.js
const express = require('express');
const app = express();
const facebookRoutes = require('./routes/facebook'); // importa tus rutas

// Middleware (por ejemplo, para parsear JSON)
app.use(express.json());

// Usa las rutas en /api
app.use('/api', facebookRoutes);

app.get('/', (req, res) => {
    res.send('Backend funcionando correctamente 🚀');
  });
  

// Arranca el servidor en el puerto 3000 (o el que quieras)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


