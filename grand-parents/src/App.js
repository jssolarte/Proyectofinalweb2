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
import Home from './Components/Home/home';
import ActividadesL from './Components/Actividades/actividadesL';


function App() {
  return (
  
  <Router>
     <Route path="/">
        <Login></Login> 
      </Route>
    {/* <Sidebar></Sidebar> */}

    <Switch>
    <Route>

    {/* <Sidebar></Sidebar> */}
    </Route>
    <Route path="/login">
        <Login></Login> 
      </Route>

      <Route>
        <Home></Home>
      </Route>

      <Route path="/activades-fisicas">
        <ActividadesF></ActividadesF> 
      </Route>
      <Route path="/actividades-ludicas">
        <ActividadesL></ActividadesL>
      </Route>

     
    </Switch>
    
  </Router>
  
  );
}

export default App;
