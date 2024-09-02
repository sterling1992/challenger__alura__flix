import React, { useState, useEffect } from "react";
import "../assets/css/FormNewVideo.css";
import Boton from "./Boton";

function EditVideoForm({ video, onSave, onCancel }) {
  const [formData, setFormData] = useState(video);

  useEffect(() => {
    setFormData(video);
  }, [video]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/videos/${video.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const updatedVideo = await response.json();
        onSave(updatedVideo);
      } else {
        console.error("Error al actualizar el video:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red al actualizar el video:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h2>Editar Video</h2>
      <div className="div__container">
        <div className="container__label">
          <label>Título del Vídeo</label>
        </div>
        <div>
          <input
            className="container__input"
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="div__container">
        <div className="container__label">
          <label>Categoría</label>
        </div>
        <div>
          <select
            className="container__input"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          >
            <option value="" className="title__options">Seleccione la categoría del video</option>
            <option value="Front-end">Front end</option>
            <option value="Backend">Backend</option>
            <option value="IoT">IoT</option>
            <option value="Data-Base">Data Base</option>
            <option value="Arquitectura-Nube">Arquitectura en la nube</option>
            <option value="Testing">Testing</option>
            <option value="Data-Science">Ciencia de Datos</option>
          </select>
        </div>
      </div>

      <div className="div__container">
        <div className="container__label">
          <label>Autor</label>
        </div>
        <div>
          <input
            className="container__input"
            type="text"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="div__container">
        <div className="container__label">
          <label>Enlace del video</label>
        </div>
        <div>
          <input
            className="container__input"
            type="text"
            name="linkVideo"
            value={formData.linkVideo}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="div__container">
        <div className="container__label">
          <label>Descripción:</label>
        </div>
        <div>
          <input
            type="text"
            className="container__input"
            name="descriptionVideo"
            value={formData.descriptionVideo}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="container__boton__crear__and__limpiar">
        <Boton nombre="Guardar" color="#33D7FF" onClick={handleSubmit} />
        <Boton nombre="Cancelar" color="#94FEEB" onClick={onCancel} />
      </div>
    </form>
  );
}

export default EditVideoForm;