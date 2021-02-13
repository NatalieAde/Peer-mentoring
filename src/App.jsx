import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import MaterialLayout from './Components/Layout/layout';
import RegistrationPage from './Components/Pages/Registration/registrationPage';
import SignInPage from './Components/Pages/SignIn';
import Home from './Components/Pages/Home/home';
import Navbar from './Components/Header';
import NavbarSignedOut from './Components/Header/navBarSignedOut';
import ProfilePage from "./Components/Pages/Profile";
import { isNull } from 'lodash';

export const AuthContext = createContext();

const initialState = {
  isSignedIn: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("user", JSON.stringify(action.user));
      localStorage.setItem("token", JSON.stringify(action.token));
      return {
        ...state,
        isSignedIn: true,
        user: action.user,
        token: action.token
      };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isSignedIn: false,
          user: isNull
        };
      default:
        return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <Router>
        <div>
          {state.isSignedIn ? <Navbar /> : <NavbarSignedOut/>}
          <br/>
          <Route path="/" exact component={Home} />
          <Route path="/registration" exact component={RegistrationPage} />
          <Route path="/signin" exact component={SignInPage} />
          <Route path="/profile" exact component={ProfilePage} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;