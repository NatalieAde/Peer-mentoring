import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import MaterialLayout from './Components/Layout/layout';
import RegistrationPage from './Components/Pages/Registration/registrationPage';
import SignInPage from './Components/Pages/SignIn';
import Home from './Components/Pages/Home/home';
import Navbar from './Components/Header';
import NavbarSignedOut from './Components/Header/navBarSignedOut';
import ProfilePage from "./Components/Pages/Profile";
import MyMatchPage from "./Components/Pages/MyMatch";
import MessagesPage from "./Components/Pages/Messages";
import GoalsPage from "./Components/Pages/Goals";
import CalendarPage from "./Components/Pages/Calendar";
import ResourcesPage from "./Components/Pages/Resources";
import TestimonialsPage from "./Components/Pages/Testimonials";
import EditProfilePage from "./Components/Pages/EditProfile";
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
      console.log(state);
      return {
        ...state,
        isSignedIn: true,
        user: action.user,
        token: action.token,
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
console.log(initialState.isSignedIn);

// for (var i = 0; i < localStorage.length; i++) {
//   var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
//   console.log(obj.user.email);
//   console.log(obj.user.email);
// }

console.log(localStorage.getItem("users"));
console.log(localStorage.getItem("token"));

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
          {localStorage.getItem("users") ? <Navbar /> : <NavbarSignedOut/>}
          <br/>
          <Route path="/" exact component={Home} />
          <Route path="/registration" exact component={RegistrationPage} />
          <Route path="/signin" exact component={SignInPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/editprofile" exact component={EditProfilePage} />
          <Route path="/myMatch" exact component={MyMatchPage} />
          <Route path="/messages" exact component={MessagesPage} />
          <Route path="/goals" exact component={GoalsPage} />
          <Route path="/calendar" exact component={CalendarPage} />
          <Route path="/resources" exact component={ResourcesPage} />
          <Route path="/testimonials" exact component={TestimonialsPage} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;