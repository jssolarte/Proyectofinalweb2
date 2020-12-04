import React from 'react';
import './perfil.css';
import imgProfile from '../../Assets/icons/profilepic.png';
import imgGraph1 from '../../Assets/icons/graph1.png';
import imgGraph2 from '../../Assets/icons/graph2.png';
import Sidebar from '../Sidebar/sidebar';



function Perfil() {
    return (
        <>
        <Sidebar></Sidebar>
        <div className="o-container-inicio ">
        {/* <h3 className="o-title-profile-retro">Perfil</h3> */}

            <div className="o-container-up mt-5">
                {/* <div><img className="o-picture" src={imgProfile} /></div> */}
                <div className="o-text">

                    <p className="o-text-information">¡Hola! Nombre <br></br>

                    Por favor ingresa tú información aquí<br></br>
                    Para que puedas compartirla con los demas.</p>

                    <form className=" o-form-profile"> 
                        <div class="form-group mx-sm-3">
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu edad"/>
                        </div>
                        <div class="form-group mx-sm-3">
                          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Ingresa tu Peso"/>
                        </div>
                        <div class="form-group mx-sm-3">
                          <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Ingresa tu Estatura"/>
                        </div>
                        </form>
                            <button type="submit" class="btn btn-primary o-button-profile">Enviar</button>

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