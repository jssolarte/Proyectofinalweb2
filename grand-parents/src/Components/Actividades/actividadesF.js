import React from 'react';
import ReactPlayer from 'react-player';
import Sidebar from '../Sidebar/sidebar';
import './actividadesF.css';

function ActividadesF(){
    return(
        <>    
        <Sidebar></Sidebar>
        <div className="o-container-actividadesF">
            <div>

           <div className="d-flex mt-4"><h3>Comenzar Actividad</h3></div> 
           <div className="d-flex justify-content-center mt-5">
            < ReactPlayer url = ' https://www.youtube.com/watch?v=ysz5S6PUM-U ' />  
           </div>
            </div>
        </div>
        </>
    );
}
export default ActividadesF;