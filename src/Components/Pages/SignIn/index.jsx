import React, { useState, useContext } from 'react';
import {
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { AuthContext } from '../../../App';

import { Redirect } from "react-router-dom";

import MaterialLayout from '../../Layout/layout';

export default function SignInPage() {
  const { dispatch } = useContext(AuthContext);
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });
  const [isSignedIn, setSignIn] = useState(false)

  const { email, password} = formFields
  const handleChange = text => e => {
    setFormFields({ ...formFields, [text]: e.target.value });
  };

  const handleSubmit = e => {
    console.log(isSignedIn);
    e.preventDefault();
    fetch('http://localhost:5000/app/signin', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formFields)
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      if(json.success){
        alert('SUCCESS')
        setSignIn(true)
        console.log(isSignedIn);
        localStorage.setItem("users", JSON.stringify(json));
        
        // dispatch({
        //   type: "SIGNIN",
        //   payload: json
        // })
        
      }else{
        alert('FAIL')
        setSignIn(false)
      }
    })
    .then(resJson => {
      dispatch({
        type: "SIGNIN",
        payload: resJson
      })
    })
  }

  return(
    <React.Fragment>
      {isSignedIn ? <Redirect to="/profile" /> : null}
      <MaterialLayout>
          <Typography component="h1" variant="h4" align="center" style={{textAlign:'center'}}>
            Sign In
          </Typography>
            <form onSubmit={handleSubmit} style={{display: 'flex',flexWrap: 'wrap',}}>
              <TextField
                type="email"
                name="email" 
                onChange={handleChange('email')}
                value={email}
                label= "Email"
                style={{width:"100%", marginBottom:"5%" }}
              />
              <TextField
              id="standard-full-width"
              fullWidth
                type="password"
                name="password"
                onChange={handleChange('password')}
                value={password}
                label="Password"
                style={{width:"100%" }}
              />
              <Button
                disabled={!email && !password}
                type="submit"
                variant="contained"
                style={{ 
                  marginTop: "10%",
                  textTransform: 'none',
                  backgroundColor: "#F1960D",
                  color: "#FFFFFF",
                }}
              >
                Sign In
              </Button>
            </form>
      </MaterialLayout>
    </React.Fragment>
  )

};