import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './Components/Sidebar/sidebar';
import Login from './Components/Login/login';
import ActividadesF from './Components/Actividades/actividadesF';
<<<<<<< HEAD
import Home from './Components/Home/home';
=======
import ActividadesL from './Components/Actividades/actividadesL';

>>>>>>> master

function App() {
  return (
  
  <Router>
    <Sidebar></Sidebar>

    <Switch>
<<<<<<< HEAD
      <Route>
        <Home></Home>
       {/* <Login></Login>  */}
         {/* <ActividadesF></ActividadesF>  */}

=======
      <Route path="/login">
        <Login></Login> 
      </Route>
      <Route path="/activades-fisicas">
        <ActividadesF></ActividadesF> 
>>>>>>> master
      </Route>
      <Route path="/actividades-ludicas">
        <ActividadesL></ActividadesL>
      </Route>
    </Switch>
    
  </Router>
  
  );
}

export default App;
