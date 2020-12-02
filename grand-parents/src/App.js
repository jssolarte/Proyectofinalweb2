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
import ActividadesL from './Components/Actividades/actividadesL';


function App() {
  return (
  
  <Router>
    <Sidebar></Sidebar>

    <Switch>
      <Route path="/login">
        <Login></Login> 
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
