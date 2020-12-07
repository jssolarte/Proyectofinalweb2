import React from 'react';
import './login.css';
import imgLogin from '../../Assets/img/login.png';
import logoLogin from '../../Assets/img/logoGrand.png';
import GoogleLogin from 'react-google-login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const respuestaGoogle=(respuesta)=>{
  console.log(respuesta);
  console.log(respuesta.profileObj);
}


function Login (){
    return(
      <>
        <div className="o-container-login">
            <div className=" row p-0 m-0">
                <div className="col o-container-left">
                 <div>
                  <img className="o-img-login-g" src={logoLogin} />
                 </div>
                   <h1 className="mt-4">Iniciar Sesión</h1> <br/>
                <form>
  <div class="form-group">
    
    <input type="text" class="form-control o-input-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre Completo"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control o-input-form" id="exampleInputPassword1" placeholder="Cedula"/>
  </div>

  <Link to="/home"><button type="submit" class="btn btn-primary o-button-login">Ingresar</button></Link>
<br></br>

</form>
<div>
<Link  to="/home"><GoogleLogin
    clientId="158721313277-he1r8b2a578b58nh2ip74n3dptb18ur0.apps.googleusercontent.com"
    buttonText="Iniciar Sesión"
    onSuccess={respuestaGoogle}
    onFailure={respuestaGoogle}
    cookiePolicy={'single_host_origin'}/></Link>
    </div>
                </div>
                <div className="col o-container-right pr-0">
                    <img className="vh-100 w-100 o-img-login" src={imgLogin} />

                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;