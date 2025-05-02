import React from 'react';
import '../assets/styles/FormularioNews.css';

export default function FormularioNews({ formData, onChange, onSubmit, onClose, mensaje }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Subir Noticia</h2>
        <form onSubmit={onSubmit} className="modal-form">
          <input name="titulo" placeholder="Título" value={formData.titulo} onChange={onChange} required />
          <textarea name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={onChange} required />
          <input name="tipo_noticia" placeholder="Tipo de Noticia" value={formData.tipo_noticia} onChange={onChange} required />
          <input type="file" name="imagen" accept="image/*" onChange={onChange} required />
          <button type="submit">Publicar</button>
          {mensaje && <p className="mensaje">{mensaje}</p>}
        </form>
      </div>
    </div>
  );
}
