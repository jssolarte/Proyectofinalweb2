import React from 'react';
import './sidebar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import imgProfile from '../../Assets/img/Oval.png';
import imgIconInicio from '../../Assets/icons/inicio.png';
import imgIconPerfil from '../../Assets/icons/perfil.png';
import imgIconActividad from '../../Assets/icons/actividad.png';
import imgIconConocenos from '../../Assets/icons/iconodeprueba.png';


function Sidebar(){
    return(

        
        <div className="o-container-sidebar">
            <div class="wrapper">
             <nav id="sidebar">
              <div id="dismiss">
            <i class="fas fa-arrow-left"></i>
        </div>

        <div className="o-div-profile">
            <div>
            <img src={imgProfile} />
            <h4>Nombre</h4>

            </div>
            
        
            
        </div>
        <div class="sidebar-header">
            <h3>GrandParent´s Enjoy</h3>
        </div>
        <ul class="list-unstyled components">
            <p>Recreación para personas mayores</p>
            <li class="active">
            <img src={imgIconInicio} />   <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
            </li>
            <li>
               <img src={imgIconPerfil} /> <a href="#">Perfil</a>
            </li>
            <li>
                
            <img src={imgIconActividad} /><a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Actividades</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <Link to="/actividades-fisicas"  className="pl-3">
                    <img src={imgIconActividad} /> <a href="#">Físicas</a>
                    </Link>
                    <Link  to="/actividades-ludicas" className="pl-3">
                    <img src={imgIconActividad} /><a href="#">Lúdicas</a>
                    </Link>
                    
                </ul>
            </li>
            
            <Link>
            <img src={imgIconConocenos} /> <a href="#">Conócenos</a>
            </Link>
                </ul>
                 </nav>
    
                <div class="overlay"></div>
            </div>
        </div>
        
    );
}
export default Sidebar;