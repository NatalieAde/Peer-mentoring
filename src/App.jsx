import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import MaterialLayout from './Components/Layout/layout';
import RegistrationPage from './Components/Pages/Registration/registrationPage';
import SignInPage from './Components/Pages/SignIn';
import Home from './Components/Pages/Home/home';
import Navbar from './Components/Header';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/registration" exact component={RegistrationPage} />
        <Route path="/signin" exact component={SignInPage} />
      </div>
    </Router>
  );
}

export default App;