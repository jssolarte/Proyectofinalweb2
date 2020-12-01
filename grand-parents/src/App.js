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

function App() {
  return (
  
  <Router>
    <Sidebar></Sidebar>

    <Switch>
      <Route>
      
      <Login></Login>

      </Route>
    </Switch>
    
  </Router>
  
  );
}

export default App;
