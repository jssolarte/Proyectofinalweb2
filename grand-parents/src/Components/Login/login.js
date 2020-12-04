import React from 'react';
import './login.css';
import imgLogin from '../../Assets/img/login.png';
import logoLogin from '../../Assets/img/logoG.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Login (){
    return(
        <div className="o-container-login">
            <div className=" row p-0 m-0">
                <div className="col o-container-left">
                 <div>
                  <img src={logoLogin} />
                 </div>
                   <h1 className="mt-4">Inicar Sesión</h1> <br/>
                <form>
  <div class="form-group">
    
    <input type="text" class="form-control o-input-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre Completo"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control o-input-form" id="exampleInputPassword1" placeholder="Cedula"/>
  </div>
  {/* <div class="form-group form-check"> */}
    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/> */}
    {/* <label class="form-check-label" for="exampleCheck1">Aceptar Terminos y Condiciones</label> */}
  {/* </div> */}
  <Link to="/home"><button type="submit" class="btn btn-primary o-button-login">Ingresar</button></Link>
</form>
                
                </div>
                <div className="col o-container-right pr-0">
                    <img className="vh-100 w-100 o-img-login" src={imgLogin} />

                    
                </div>
            </div>
        </div>
    );
}
export default Login;