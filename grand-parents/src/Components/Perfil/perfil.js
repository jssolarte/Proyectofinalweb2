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
        <div className="o-container-inicio">
            <div className="o-container-up mt-3">
                <div><img className="o-picture" src={imgProfile} /></div>
                <div className="o-text">

                    <p className="o-text-information">¡Hola! <br></br>

                    Por favor ingresa tú información aquí<br></br>
                    Para que puedas compartirla con los demas.</p>

                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                             </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                 </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                            </div>
                        </div>
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