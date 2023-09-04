import Home from "./components/Home";
import LogIn from "./components/LogIn"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import {LoginSocialFacebook} from "react-social-login"; 
import {FacebookLoginButton} from "react-social-login-buttons"
import Dashboard from "./components/Dashboard";


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path = "/login" element = {<LogIn/>} />
          <Route path = "/dashboard" element = {<Dashboard/>} />
        </Routes>
    
      </Router>
    </div>
  );
}

export default App;
