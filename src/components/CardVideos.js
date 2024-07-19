import React from "react";


const CardVideos = ({linkVideo, tituloVideo, categoriaVideo, autorVideo, descripcionVideo} ) =>{

  // Estracción del ID del video de Yputube del enlace proporcionado
  const videoId = linkVideo.split('v=')[1];

    return(
      <div className="card__container__video">
        <div className="container__video">
          <iframe
            width="100%" 
            height="200" 
            src = {`https://www.youtube.com/embed/${videoId}`}
            title={tituloVideo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>                      
         <div className="container__title__video">
          {tituloVideo}
         </div>

         <div className="categoria__video">
          {categoriaVideo}
         </div>

         <div className="autor__video">
          {autorVideo}
         </div>
         
         <div className="descripcion__video">
          {descripcionVideo}
         </div>

         <div className="container__like__dont__like">
            <div className="contador__like"></div>
            <div className="like"></div>
            <div className="dont__like"></div>

         </div>
      </div>
    )
}



export default CardVideos;