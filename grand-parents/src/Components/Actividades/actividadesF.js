import React from 'react';
import ReactPlayer from 'react-player';
import Sidebar from '../Sidebar/sidebar';
// import POST from 'react'
import './actividadesF.css';

// const respuestaPOST=(respuesta)=>{
//     console.log(respuesta);
// }

function ActividadesF(){
    return(
        <>    
        <Sidebar></Sidebar>
        <div className="o-container-actividadesF">
            <div>

           <div className="d-flex mt-4"><h3>Comenzar Actividad Fisicas</h3></div> 
           <div className="d-flex justify-content-center mt-5">
            < ReactPlayer url = ' https://www.youtube.com/watch?v=ysz5S6PUM-U ' />  
           </div>
            </div>
        <div>

       {/* <POST   
        http= "localhost: 3000"
        client_id= "xtyMAnxB80"
        client_secret= "9b461fa198b714b75a51e6ff33086117"
        redirect_uri= "http: // localhost: 3000"
        onSuccess={respuestaPOST}
        > </POST>  */}
        </div>

        <div>
            <h1>contenedor para estadisticas</h1>
        </div>
            
        </div>
        
        </>
    );
}


export default ActividadesF;