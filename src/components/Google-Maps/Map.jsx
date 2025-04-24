import React from 'react';

const Map = () => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  // Coordenadas del centro del mapa
  const lat = -33.00467;
  const lng = -71.53512;

  // URL de Google Maps Embed (gratuito, sin API Key)
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div style={mapStyles}>
      <iframe
        title="Ubicación en Google Maps"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;