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

           <div className="d-flex mt-4 o-text-game"><h3>Actividad lúdica: Ajedrez</h3></div> 
           
           <div>
               
            <div className="o-container-game">
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