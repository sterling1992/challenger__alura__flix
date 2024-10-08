import React, { useEffect, useState } from "react";
import CardVideos from "./CardVideos";
import "../../src/assets/css/MostrarVideos.css";

const MostrarVideo = () => {
  const [videos, setVideos] = useState([]);

  // Función para obtener los videos desde el servidor

  useEffect(() => {
    const obtenerVideos = async () => {
      try {
        const response = await fetch("http://localhost:5000/videos");
        if (response.ok) {
          const data = await response.json();
          setVideos(data);
        } else {
          console.error("Error al obtener los videos", response.statusText);
        }
      } catch (error) {
        console.error("Error al obtener los videos", error);
      }
    };
    obtenerVideos();
  }, []);

  return (
    <div>
      <div className="videos__container">
        {videos.map((video, index) => (
          <CardVideos
            key={index}
            linkVideo={video.linkVideo}
            tituloVideo= {video.titulo}
            categoriaVideo = {video.categoria}
            autorVideo={video.autor}
            descripcionVideo={video.descripcionVideo}
          />
        ))}
      </div>
    </div>

  )

}


export default MostrarVideo;