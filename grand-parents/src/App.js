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
import Home from './Components/Home/home';
import ActividadesL from './Components/Actividades/actividadesL';
import SobreNosotros from './Components/SobreNosotros/sobreNosotros';
import ActividadesF from './Components/Actividades/actividadesF';


function App() {
  return (

    <Router>
    <Switch>
       <Route component={Login} path="/login" exact/>
      
       {/* <Route component={Sidebar} exact/> */}
       <Route component={Home} path="/home"/>
        <Route component={ActividadesF} path="/actividadesfisicas" exact/>      
       <Route  component={ActividadesL} path="/actividadesludicas" exact/> 
       <Route  component={SobreNosotros} path="/nosotros" exact/>      
     
    </Switch>
    </Router>





  // <Router>
    
  //   <Login></Login>  
   
  //   <Switch>
  //   <Route>

  //  <Sidebar></Sidebar> 
  //   </Route>
   

  //     <Route>
  //       <Home></Home>
  //     </Route>

  //     <Route path="/activades-fisicas">
  //       <ActividadesF></ActividadesF> 
  //     </Route>
  //     <Route path="/actividades-ludicas">
  //       <ActividadesL></ActividadesL>
  //     </Route>

     
  //   </Switch>
    
  // </Router>
  
  );
}

export default App;
