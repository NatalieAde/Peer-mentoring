import React, { usestate } from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core';

import { Route } from "react-router-dom";
import Home from "../Home/home";

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
  const [isSignedIn, setSignIn] = useState('false')

  const { email, password, textChange } = formFields
  const handleChange = text => e => {
    setFormFields({ ...formFields, [text]: e.target.value });
  };

  const handleSubmit = e => {
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
    setSignIn('true')
  }else{
    alert('FAIL')
  }
})

  //   if(email && password) {
  //     setFormFields({ ...formFields, textChange: 'Loading' });
  //     axios.post('http://localhost:5000/app/signin', {
  //       email:email,
  //       password:password
  //     })
  //     // .then(res => {
  //     //     setFormFields({
  //     //       ...formFields,
  //     //       email: '',
  //     //       password: '',
  //     //       textChange: 'Submitted'
  //     //     });
  //     //   })
  //       .then(res => {
  //         if(res.success){
  //           alert('SUCCESS')
  //         }else{
  //           alert('FAIL')
  //         }
  //       })
  //       .catch(err => {
  //         setFormFields({
  //           ...formFields,
  //           email: '',
  //           password: '',
  //           textChange: 'Sign In'
  //         });
  //         console.log(err.response);
  //       });
  //   }
  }

  return(
    <div>
      {isSignedIn ?         <Route path="/" exact component={Home} />
 : null}
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