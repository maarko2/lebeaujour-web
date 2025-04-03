// routes/facebook.js
require('dotenv').config(); // Si no lo cargas en tu archivo principal, puedes cargarlo aquí
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/facebook-photos', async (req, res) => {
  try {
    // 1) Obtener el año desde query params (ej: ?year=2025)
    const year = req.query.year;

    // Validar que 'year' sea un número de 4 dígitos
    if (!/^\d{4}$/.test(year)) {
      return res.status(400).json({ error: "Año inválido. Debe tener 4 dígitos." });
    }

    // 2) Obtener el PAGE_ID y ACCESS_TOKEN desde variables de entorno
    const pageId = process.env.PAGE_ID || 'TU_PAGE_ID';
    const accessToken = process.env.ACCESS_TOKEN || 'TU_ACCESS_TOKEN';

    // 3) Construir la URL para la Graph API de Facebook
    const fbUrl = `https://graph.facebook.com/v16.0/${pageId}/photos?fields=images,created_time&access_token=${accessToken}`;

    // 4) Llamar a la Graph API con axios
    const response = await axios.get(fbUrl);
    const allPhotos = response.data.data; // array de objetos con info de las fotos

    // 5) Filtrar las fotos por año
    const filteredPhotos = allPhotos.filter(photo => {
      const photoYear = new Date(photo.created_time).getFullYear().toString();
      return photoYear === year;
    });

    // 6) Extraer la URL principal de cada foto
    const photoUrls = filteredPhotos.map(photo => photo.images[0].source);

    // 7) Devolver las fotos en un JSON
    return res.json({ photos: photoUrls });
  } catch (error) {
    console.error('Error al obtener fotos de Facebook:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
