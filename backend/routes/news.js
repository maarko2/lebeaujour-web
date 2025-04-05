const express = require('express');
const router = express.Router();
const db = require('../db'); // Importa la conexión a la base de datos

// Endpoint para obtener todas las noticias
router.get('/news', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM noticias ORDER BY fecha_publicacion DESC');
        res.json(rows); // Devuelve las noticias en formato JSON
    } catch (error) {
        console.error('Error al obtener noticias:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router; // Exporta el router para usarlo en server.js
