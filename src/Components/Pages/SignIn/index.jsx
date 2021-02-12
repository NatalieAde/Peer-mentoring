import React, { usestate } from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core';

import { Route, Redirect } from "react-router-dom";
import ProfilePage from "../Profile";

import MaterialLayout from '../../Layout/layout';
import FormModel from '../Registration/FormModel/formModel';
import { useState } from 'react';
import axios from 'axios';
import { Form } from 'formik';

const { formId, formField } = FormModel;


export default function SignInPage() {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });
  const [isSignedIn, setSignIn] = useState(false)

  const { email, password, textChange } = formFields
  const handleChange = text => e => {
    setFormFields({ ...formFields, [text]: e.target.value });
  };

  const handleSubmit = e => {
    console.log(isSignedIn);
    console.log('http://localhost:5000/app/signin');
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
      }else{
        alert('FAIL')
        setSignIn(false)
      }
    })
  }

  return(
    <div>
      {isSignedIn ? <Redirect to="/profile" /> : null}
      <MaterialLayout>
        <p>Sign In</p>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input 
              type="email"
              name="email" 
              onChange={handleChange('email')}
              value={email}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChange('password')}
              value={password}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </MaterialLayout>
    </div>
  )

};