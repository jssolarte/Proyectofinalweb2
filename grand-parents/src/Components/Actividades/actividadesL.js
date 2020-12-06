import React from 'react';
import ReactPlayer from 'react-player';
import Sidebar from '../Sidebar/sidebar';
import Chessground from 'react-chessground';
import './actividadesL.css';
import Demo from './chess';

function ActividadesL(){
    return(
        <>
        <Sidebar></Sidebar>
        <div className="o-container-actividadesL">
            <div>

           <div className="d-flex mt-4"><h3>Comenzar Actividad Ludicas</h3></div> 
           <div className="d-flex justify-content-center mt-5">
            < ReactPlayer url ='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls/>  
           </div>
           <div>
               <h1>Contenedor para estadisticas</h1>
            <div>

           {/* <Demo></Demo> */}
            <iframe className="o-juego" src="https://fritz.chessbase.com" ></iframe> 
            </div>
           </div>
            </div>
        </div>
        </>
    );
}
export default ActividadesL;