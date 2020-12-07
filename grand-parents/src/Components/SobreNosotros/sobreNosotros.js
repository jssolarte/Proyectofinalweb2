import React from 'react';
import './sobreNosotros.css';
import imgface from '../../Assets/icons/fb.png';
import imgtwitter from '../../Assets/icons/twi.png';
import imgig from '../../Assets/icons/ig.png';
import imgAbuelos from '../../Assets/img/abuelitos.jpg';
import Sidebar from '../Sidebar/sidebar';



function SobreNosotros(){
    return(
        <>
        <Sidebar></Sidebar>
        <div className="o-container-inicio">
            <div className="o-header">
                <h2 className="o-text-tittle">GrandParents Enjoy</h2>
                <h6 className="o-text-up">¡Actividades para los mayores de la casa!</h6>
                <div><img className="o-img-picture img-fluid" src={imgAbuelos}/></div>

            </div>
            <div className="o-container-text">

                <p>En GrandParents Enjoy nos preocupamos por la salud de nuestros mayores <br></br>
                    Por ello, hemos diseñado una cantidad de lúdicas para entretenerlos. <br></br>
                    

                    Siguenos en nuestras redes sociales:
                
                </p>
            </div>
            <div className="o-container-socialmedia">

            <div><img className="o-img-social " src={imgface}/></div>
            <div><img className="o-img-social" src={imgtwitter}/></div>
            <div><img className="o-img-social" src={imgig}/></div>


            </div>
        </div>
        </>
    );
}

export default SobreNosotros;