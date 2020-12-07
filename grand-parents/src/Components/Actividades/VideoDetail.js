import React from "react";
import './VideoDetail.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
          <br/><h1 className="o-titulo-consulta">Haga su consulta</h1>
       <br/>
       <p style={{fontSize:'25px'}}>
       Recomendamos las siguientes actividades que le ayudarán a estar en mejor forma:<br/>
       - Estiramientos<br/>
       - Zumba básico <br/> 
       - Rutina ejercicios quema grasas<br/>
       - rutina ejercicios para tonificar cuerpo<br/>
       - Estiramientos para finalizar entreno<br/>
       <br/><br/>Después de esta rútina podrá tener un entrenamiento completo.<br/>   

       </p>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      
      <div className="ui embed ">
        <iframe className="o-container-video-youtube" src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;