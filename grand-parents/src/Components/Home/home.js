import React from 'react';
import './home.css';
import imghome from '../../Assets/img/img_inicio.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Home(){
    return(
        <div className="o-container-inicio">
            <div className="o-container-body-home">
                <div className="o-container-left">
                    <div className="o-detail-left">
                        <h1>Actividades <br/> lúdicas</h1>
                    <p className="o-paragraph">
                        Nuestra meta es ayudar <br/>  a las personas mayores,<br/>ofreciéndoles distintas <br/> actividades para  <br/> su tiempo en casa.
                    </p>

                   <div><button className="o-btn-login">Iniciar Sesión</button> </div>

                    </div> 
                </div>
        
            <div className="o-container-right">
                <div><img className="o-img-right" src={imghome}/></div>
            </div>
            </div>
            <div className="o-container-texto">
                
                <br/><br/>Nuestra empresa se caracteriza por brindar bienestar emocional y lúdico a las personas mayores,<br/> así como un espacio en el que se pueden divertir y desconectar de la realidad.
                
            </div>
        </div>
        
    );
}

export default Home;