import React from 'react';
import '../assets/styles/FormularioNews.css';

export default function FormularioNews({ formData, onChange, onSubmit, onClose, mensaje }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>📰 Publicar Nueva Noticia</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={onSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="titulo">Título de la Noticia</label>
            <input 
              id="titulo"
              name="titulo" 
              placeholder="Escribe un título llamativo para tu noticia..." 
              value={formData.titulo} 
              onChange={onChange} 
              required 
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea 
              id="descripcion"
              name="descripcion" 
              placeholder="Describe tu noticia de manera detallada. Aquí puedes incluir toda la información relevante que quieras compartir con la comunidad..." 
              value={formData.descripcion} 
              onChange={onChange} 
              required 
              className="form-textarea"
              rows="6"
            />
            <div className="char-counter">
              {formData.descripcion.length} caracteres
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tipo_noticia">Categoría</label>
            <select 
              id="tipo_noticia"
              name="tipo_noticia" 
              value={formData.tipo_noticia} 
              onChange={onChange} 
              required 
              className="form-select"
            >
              <option value="">Selecciona una categoría</option>
              <option value="Académico">📚 Académico</option>
              <option value="Deportes">⚽ Deportes</option>
              <option value="Cultural">🎭 Cultural</option>
              <option value="Administrativo">📋 Administrativo</option>
              <option value="Eventos">🎉 Eventos</option>
              <option value="Comunicados">📢 Comunicados</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="imagen">Imagen de la Noticia</label>
            <div className="file-input-container">
              <input 
                type="file" 
                id="imagen"
                name="imagen" 
                accept="image/*" 
                onChange={onChange} 
                required 
                className="file-input"
              />
              <label htmlFor="imagen" className="file-label">
                📷 Seleccionar imagen
              </label>
            </div>
            <small className="file-hint">
              Formatos permitidos: JPG, PNG, WebP. Tamaño máximo: 5MB
            </small>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancelar
            </button>
            <button type="submit" className="btn-publish">
              🚀 Publicar Noticia
            </button>
          </div>

          {mensaje && (
            <div className={`mensaje ${mensaje.includes('éxito') ? 'success' : 'error'}`}>
              {mensaje.includes('éxito') ? '✅' : '❌'} {mensaje}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
