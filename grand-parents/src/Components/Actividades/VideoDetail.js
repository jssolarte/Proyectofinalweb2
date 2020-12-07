import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       <h1>Haga su consulta</h1>
       <br></br>
       <p style={{fontSize:'25px'}}>
       Use este buscador para mirar actividades fisicas que otras personas han hecho....        

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