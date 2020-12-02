import React from 'react';
import './sobreNosotros.css';
import imgface from '../../Assets/icons/fb.png';
import imgtwitter from '../../Assets/icons/twi.png';
import imgig from '../../Assets/icons/ig.png';



function SobreNosotros(){
    return(
        <div className="o-container-inicio">
            <div className="o-header">
                <h2 className="mt-2">GrandParents Enjoy</h2>
                <h6>¡Actividades para los mayores de la casa!</h6>
            </div>
            <div className="o-container-text">

                <p>En GrandParents Enjoy nos preocupamos por la salud de nuestros mayores <br></br>
                    Por ello, hemos diseñado una cantidad de lúdicas para entretenerlos. <br></br>
                    <br></br>
                    Siguenos en nuestras redes sociales:
                
                </p>
            </div>
            <div className="o-container-socialmedia">

            <div><img className="o-img" src={imgface}/></div>
            <div><img className="o-img" src={imgtwitter}/></div>
            <div><img className="o-img" src={imgig}/></div>


            </div>
        </div>
        
    );
}

export default SobreNosotros;