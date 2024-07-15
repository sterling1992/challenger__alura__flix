import React from "react";


const CardVideos = ({linkVideo, tituloVideo, categoriaVideo, autorVideo, descripcionVideo} ) =>{

  const [getData, setGetData] = useState({



  });


    return(
      <div className="card__container__video">
         <div className="container__video">
         <iframe src={linkVideo} title={tituloVideo} width="100%" height="200" frameBorder="0" allowFullScreen></iframe>
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