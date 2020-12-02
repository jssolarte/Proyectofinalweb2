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
            <div className="o-barra-horizontal"></div>
            <div class="wrapper">
             <nav id="sidebar"className="shadow-sm p-3 mb-5 bg-white rounded mt-3">
              <div id="dismiss">
            <i class="fas fa-arrow-left"></i>
        </div>
        <div className="o-div-profile">
            <div>
            <img src={imgProfile} />
            <h5 className="o-sidebar-header">Nombre</h5>
            </div>           
        </div>
        <div class="o-sidebar-header ">
            <h4>GrandParent´s Enjoy</h4>
        </div>
            <p className="o-sidebar-header border-bottom o-padding-ul ">Recreación para personas mayores</p>
        <ul class="list-unstyled components o-ul-list">
            <li class="active"> <Link to="/home">
            <img src={imgIconInicio} />   <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a></Link>
            </li>
            <li>
              <Link to="/perfil"> <img src={imgIconPerfil} /> <a>Perfil</a></Link>
            </li>
            <li>    
            <img src={imgIconActividad} /><a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Actividades</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                   <li className="pl-3"> 
                   <Link to="/actividadesfisicas"> <img src={imgIconActividad}/> <a>Físicas</a></Link>
                    </li>
                    <li className="pl-3"><Link  to="/actividadesludicas">
                    <img src={imgIconActividad} /><a>Lúdicas</a> </Link>
                    </li>  
                </ul>
            </li>            
            <li className="border-bottom o-padding-finish"><Link to="/nosotros">
            <img src={imgIconConocenos} /> <a>Conócenos</a></Link>
            </li>           
                </ul>
                <ul className="o-ul-soporte">
                    <li>
                    <img src={imgIconActividad} /><a>Soporte</a> </li>
                </ul>
                 </nav>
                {/* <div class="overlay"></div> */}
               
            </div>
        </div>     
    );
}
export default Sidebar;