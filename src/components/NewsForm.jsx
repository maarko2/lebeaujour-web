// src/components/NewsForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function NewsForm() {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    tipo_noticia: '',
    imagen: null
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([k,v]) => data.append(k, v));

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/news`,
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      alert('Noticia subida!');
      // Opcional: reset del formulario
      setFormData({ titulo:'', descripcion:'', tipo_noticia:'', imagen:null });
    } catch (err) {
      console.error(err);
      alert('Error al subir la noticia');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
        placeholder="Título"
        required
      />
      <textarea
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        required
      />
      <input
        name="tipo_noticia"
        value={formData.tipo_noticia}
        onChange={handleChange}
        placeholder="Tipo de noticia"
      />
      <input
        type="file"
        name="imagen"
        accept="image/*"
        onChange={handleChange}
        required
      />
      <button type="submit">Publicar Noticia</button>
    </form>
  );
}
