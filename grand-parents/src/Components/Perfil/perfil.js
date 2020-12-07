import React from 'react';
import './perfil.css';
import imgProfile from '../../Assets/icons/profilepic.png';
import imgGraph1 from '../../Assets/icons/graph1.png';
import imgGraph2 from '../../Assets/icons/graph2.png';
import Sidebar from '../Sidebar/sidebar';

function calcularIMC(){
    let edad =document.getElementById('edad').value;
    let estatura= parseInt(document.getElementById('estatura').value);
    let estaturametros = estatura/100;
    let peso =parseInt(document.getElementById('peso').value);
    let imcf = document.getElementById("imcf")
    let imc= Math.round(peso/estaturametros);
    let clasificacion;
    
    if (imc < 18.5) {
        clasificacion = 'estás muy flaco hpta';
    } else if (imc < 25) {
        clasificacion = 'estás bien hpta';
    } else {
        clasificacion = 'estas muy gordo hpta';
    }
    document.getElementById("respuesta").value='Hola, tu IMC ES ' +imc+'y tu'+clasificacion;
    /* Consejo:
    
    */
    // let respuesta = 'Hola, tu IMC es ' + imc + ' y tu ' + clasificacion;
//    respuesta.innerHtml=respuestaIMC;
    // alert(respuesta);
  
}

function Perfil() {
    return (
        <>
        <Sidebar></Sidebar>
        <div className="o-container-inicio mt-0 ">
        {/* <h3 className="o-title-profile-retro">Perfil</h3> */}

            <div className="o-container-up mt-5">
                {/* <div><img className="o-picture" src={imgProfile} /></div> */}
                <div className="o-text">

                    <h2>Hola! Juan José</h2>

                    <p>Por favor ingresa tú información aquí<br></br>
                    Para que puedas compartirla con los demas.</p>

                    <form className=" o-form-profile"> 
                        <div class="form-group mx-sm-3">
                            <label>Ingresa tu edad</label>
                            <input type="text" class="form-control" id="edad"  placeholder="Ingresa tu edad"/>
                        </div>
                        <div class="form-group mx-sm-3">
                        <label>Ingresa tu Peso</label>

                          <input type="text" class="form-control" id="peso" placeholder="Ejemplo 55 kg" required="required"/>
                        </div>
                        <div class="form-group mx-sm-3">
                        <label>Ingresa tu Estatura</label>

                          <input type="text" class="form-control" id="estatura" placeholder="Ejemplo 150 mts"  required="required"/>
                        </div>
                        </form>
                            <button type="submit" onClick={calcularIMC} class="btn btn-primary o-button-profile">Enviar</button>

                            </div>

                            <div className="mt-5">
                                <h1 className="o-text-retro">Tu indice de masa corporal</h1>
                                <input className="o-input-imc" type="text" id="respuesta"></input>

                            </div>
                        </div>
                        <h3 className="o-title-profile-retro">Retroalimentacion</h3>
                        <div className="o-container-down mt-5">
                            <div><img className="o-img" src={imgGraph1} />
                                <p className="o-letra">Videos vistos: 6</p>
                            </div>
                            <div><img className="o-img" src={imgGraph2} />
                                <p className="o-letra">Actividades realizadas: 8</p>
                            </div>
                            <div><img className="o-img" src={imgGraph1} />
                                <p className="o-letra">Ejercicios: 10</p>
                            </div>
                        </div>
        </div>
        </> 
    );
}

export default Perfil;