import React from 'react';
import './login.css';
import imgLogin from '../../Assets/img/login.png';

function Login (){
    return(
        <div className="o-container-login">
            <div className="row">
                <div className="col">
                   <h1>Inicar Sesión</h1> <br/>
                <form>
  <div class="form-group">
    
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre Completo"/>
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Cedula"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Aceptar Terminos y Condiciones</label>
  </div>
  <button type="submit" class="btn-lg btn-primary">Ingresar</button>
</form>
                
                </div>
                <div className="col">
                    <div><img className="img-fluid" src={imgLogin} /></div>

                    
                </div>
            </div>
        </div>
    );
}
export default Login;