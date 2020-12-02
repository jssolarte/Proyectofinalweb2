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

function App() {
  return (
  
  <Router>
    <Sidebar></Sidebar>

    <Switch>
      <Route>
        <Home></Home>
       {/* <Login></Login>  */}
         {/* <ActividadesF></ActividadesF>  */}

      </Route>
      <Route>
      </Route>
    </Switch>
    
  </Router>
  
  );
}

export default App;
