// routes/facebook.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/facebook-photos', async (req, res) => {
  try {
    const { year } = req.query;
    
    console.log('Checking environment variables:');
    console.log('PAGE_ID:', process.env.FACEBOOK_PAGE_ID ? 'Configured' : 'Missing');
    console.log('ACCESS_TOKEN:', process.env.FACEBOOK_ACCESS_TOKEN ? 'Configured' : 'Missing');

    const pageId = process.env.FACEBOOK_PAGE_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!pageId || !accessToken) {
      console.error('Missing credentials:', { pageId: !!pageId, accessToken: !!accessToken });
      return res.status(500).json({
        error: true,
        message: 'Credenciales de Facebook no configuradas. Verifique las variables de entorno FACEBOOK_PAGE_ID y FACEBOOK_ACCESS_TOKEN'
      });
    }

    if (!year || !/^\d{4}$/.test(year)) {
      return res.status(400).json({ error: "Año inválido" });
    }

    // 1. Construir la URL y hacer la petición a la Graph API
    const fbUrl = `https://graph.facebook.com/v16.0/${pageId}/photos`;
    const response = await axios.get(fbUrl, {
      params: {
        fields: 'images,created_time',
        type: 'uploaded', // Filtra solo las fotos subidas
        access_token: accessToken,
        limit: 100
      }
    });

    // 2. Log para ver los created_time de cada foto (depuración)
    response.data.data.forEach((photo, idx) => {
      console.log(`Photo #${idx}: created_time =`, photo.created_time);
    });

    // 3. Filtrar las fotos según el año y extraer la URL de la imagen
    const filteredPhotos = response.data.data
      .filter(photo => new Date(photo.created_time).getFullYear().toString() === year)
      .map(photo => photo.images[0].source);

    return res.json({ photos: filteredPhotos });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Error al obtener fotos',
      details: error.message 
    });
  }
});

module.exports = router;
