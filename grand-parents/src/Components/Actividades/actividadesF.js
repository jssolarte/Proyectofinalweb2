import React from 'react';
import ReactPlayer from 'react-player';
import './actividadesF.css';

function ActividadesF(){
    return(
        <div className="o-container-actividades">
            <div>

           <div className="row"><h3>Comenzar Actividad</h3></div> 
           <div className="row d-flex justify-content-center mt-5">
            < ReactPlayer url = ' https://www.youtube.com/watch?v=ysz5S6PUM-U ' />  
           </div>
            </div>
        </div>
    );
}
export default ActividadesF;