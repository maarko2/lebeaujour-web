// routes/facebook.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Endpoint para obtener fotos de Facebook
router.get('/facebook-photos', async (req, res) => {
  try {
    // 1) Obtener el año desde query params (ej: ?year=2025)
    const year = req.query.year;

    // 2) Configura tu PAGE_ID y ACCESS_TOKEN
    const pageId = 'TU_PAGE_ID';
    const accessToken = 'TU_ACCESS_TOKEN';

    // 3) Construye la URL para la Graph API de Facebook
    //    Ajusta la versión de la API según la más reciente que uses
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
    //    (images[0] suele ser la de mayor resolución, pero revisa la respuesta para elegir la que necesites)
    const photoUrls = filteredPhotos.map(photo => photo.images[0].source);

    // 7) Devolver las fotos en un JSON
    return res.json({ photos: photoUrls });
  } catch (error) {
    console.error('Error al obtener fotos de Facebook:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
