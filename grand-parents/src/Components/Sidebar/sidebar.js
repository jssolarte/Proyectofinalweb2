import React from 'react';
import './sidebar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import imgProfile from '../../Assets/img/profilee.png';
import imgIconInicio from '../../Assets/icons/home.png';
import imgIconPerfil from '../../Assets/icons/usuario.png';
import imgIconActividad from '../../Assets/icons/ejercicio.png';
import imgIconConocenos from '../../Assets/icons/contactanos.png';
import imgIconJuego from '../../Assets/icons/gamepad.png';
import imgEstadisticas from '../../Assets/icons/estadisticas.png';
import imgLogo from '../../Assets/img/logo2.png';

function Sidebar(){
    return( 
           
        <div className="o-container-sidebar">
        <div className="o-barra-horizontal">

        <img className="o-logo-login" src={imgLogo} />
        <li>

       <Link to="/"> <a className="o-logout">Cerrar sesión</a></Link>
        </li>


        </div>
            <div class="wrapper">
             <nav id="sidebar"className="shadow-sm p-3 mb-5 bg-white rounded mt-3 o-nav-sidebar">
              <div id="dismiss">
            <i class="fas fa-arrow-left"></i>
        </div>
        <div className="o-div-profile">
            <div>
            <img className="o-img-profile" src={imgProfile} />
            <h5 className="o-sidebar-header">Juan José</h5>
            </div>           
        </div>
        <div class="o-sidebar-header ">
            <h4>GrandParent´s Enjoy</h4>
        </div>
            <p className="o-sidebar-header border-bottom o-padding-ul ">Recreación para personas mayores</p>
        <ul class="list-unstyled components o-ul-list">
            
            <li class="active mb-2"> <Link to="/home">
            <img className="o-icon-sidebar " src={imgIconInicio} />   <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a></Link>
            </li>
            <li class="mb-2">
              <Link to="/perfil"> <img  className="o-icon-sidebar" src={imgIconPerfil} /> <a>Perfil</a></Link>
            </li>
            <li class="mb-2">    
            <Link to="/actividadesfisicas"><img  className="o-icon-sidebar"  src={imgIconActividad} /><a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Ejercicios</a>
            </Link> </li> 
             <li className="mb-2"> 
                   <Link to="/actividadesludicas"> <img className="o-icon-sidebar" src={imgIconJuego}/> <a>Ajedrez</a></Link>
            </li>           
            <li className=" "><Link to="/nosotros">
            <img className="o-icon-sidebar" src={imgIconConocenos} /> <a>Conócenos</a></Link>
            </li>   
            <hr></hr>        
                </ul>
               
                 </nav>
                {/* <div class="overlay"></div> */}
               
            </div>

        </div>     
           
    );
}
export default Sidebar;