import React from 'react';
import ReactPlayer from 'react-player';
import Sidebar from '../Sidebar/sidebar';
import './actividadesL.css';

function ActividadesL(){
    return(
        <>
        <Sidebar></Sidebar>
        <div className="o-container-actividadesL">
            <div>

           <div className="row"><h3>Comenzar Actividad Ludicas</h3></div> 
           <div className="row d-flex justify-content-center mt-5">
            < ReactPlayer url = ' https://www.youtube.com/watch?v=ysz5S6PUM-U ' />  
           </div>
            </div>
        </div>
        </>
    );
}
export default ActividadesL;