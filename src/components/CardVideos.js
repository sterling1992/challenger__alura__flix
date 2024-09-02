import React, {useState} from "react";
import "../assets/css/cardVideos.css"



import meGusta from "../assets/img/me-gusta.png";
import noMeGusta from "../assets/img/disgusto.png";
import editInformation from "../assets/img/editar.png";
import EditVideoForm from "./EditVideoForm";

const CardVideos = ({linkVideo, tituloVideo, categoriaVideo, autorVideo, descripcionVideo} ) =>{

  // Estracción del ID del video de Yputube del enlace proporcionado
  const videoId = linkVideo.split('v=')[1];

  // Estado para el contador de likes
  const [likes, setLikes] = useState(0);
  const [dontLikes, setDontLikes] = useState(0);
  

  // Función para incrementar el contador de likes
  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleDontLikeClick = () => {
    setDontLikes(dontLikes + 1);
  };


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
          <div>
            
          </div>
        </div>                      
         <div className="container__title__video">
          {tituloVideo}
         </div>


         <div className="categoria__video">{categoriaVideo} </div>

         <div className="autor__video"> {autorVideo} </div>
         
        <div className="descripcion__video"> {descripcionVideo} </div>

        <div className="container__like__dont__like">
          <div className="contador__like__dont__like" onClick={handleLikeClick}>
            {likes}
            <img src={meGusta} alt="Like" />
          </div>

          <div className="contador__like__dont__like" onClick={EditVideoForm}>
            <img src={editInformation} alt="Icono de edición de información" />
          </div>

          <div className="contador__like__dont__like" onClick={handleDontLikeClick}>
            {dontLikes}
            <img src={noMeGusta} alt="Don't Like" />
          </div>
        </div>
      </div>
    )
}



export default CardVideos;