import React, { useState } from "react";
import Header from "./Header";
import "../assets/css/FormNewVideo.css";
import Boton from "./Boton";
import Footer from "./Footer";

const  FormNewVideo = ({ onAgregarVideo }) => {

  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    autor: "",
    linkVideo: "",
    descriptionVideo: ""
  });

  // Manejo de los eventos para capturar los valores
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejo del envío del formulario
  const manejarEnvio = async (e) => {
    e.preventDefault(); // Prevención de la recarga de la página

    //Coneción con la API 

    try{
      const response = await fetch("http://localhost:5000/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if(response.ok){
        const nuevoVideo = await response.json();
        console.log("Video guardad:",nuevoVideo );
        handleReset(); //se limpia el formulario
      }else{
        console.error("Error al guardar el video:", response.statusText);        
      }
    }catch(error){
      console.error("Error de red al guardar el video:", error);
    }
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      autor: "",
      linkVideo: "",
      descriptionVideo: ""
    });
  };

  return (
    <form onSubmit={manejarEnvio}>
      <Header />
      <section className="container__form">
        <div className="div__container">
          <div className="container__label">
            <label >Título del Vídeo</label>
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
            <label>categoría</label>
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

        {/* Importación de componente Boton y envío de los parámetros "props" de color, nombre y evento */}
        <div className="container__boton__crear__and__limpiar">
          <Boton nombre="Crear" color="#33D7FF" onClick={manejarEnvio} />
          <Boton nombre="Limpiar" color="#94FEEB" onClick={handleReset} />
        </div>
      </section>

      <Footer />
    </form>

    
  );
};

export default FormNewVideo;
