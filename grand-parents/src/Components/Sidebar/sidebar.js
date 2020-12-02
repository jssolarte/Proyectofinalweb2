import React from 'react';
import './sidebar.css';
function Sidebar(){
    return(
        <div>
            <div class="wrapper">
             <nav id="sidebar">
              <div id="dismiss">
            <i class="fas fa-arrow-left"></i>
        </div>
        <div class="sidebar-header">
            <h3>GrandParent´s Enjoy</h3>
        </div>
        <ul class="list-unstyled components">
            <p>Recreación para personas mayores</p>
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
            </li>
            <li>
                <a href="#">Perfil</a>
            </li>
            <li>
                
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Actividades</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Físicas</a>
                    </li>
                    <li>
                        <a href="#">Lúdicas</a>
                    </li>
                    
                </ul>
            </li>
            
            <li>
                <a href="#">Conócenos</a>
            </li>
        </ul>
    </nav>

   
    {/* <div id="content">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
            </div>
        </nav>
    </div> */}
    
    <div class="overlay"></div>
</div>
        </div>
    );
}
export default Sidebar;