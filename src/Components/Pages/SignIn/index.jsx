import React, { Component } from 'react';
import {
  Typography,
  Grid
} from '@material-ui/core';
import {
    getFromStorage,
    setInStorage
} from '../../utils/storage';

import MaterialLayout from '../../Layout/layout';
import FormModel from '../Registration/FormModel/formModel';

const { formId, formField } = FormModel;


    class SignInPage extends Component {
        constructor() {
          super()
          this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
            token: '',
            signInError: '',
            isLoading: false
          }
          this.changeEmail = this.changeEmail.bind(this);
          this.changePassword = this.changePassword.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
        }

        changeEmail(event) {
            this.setState ({
              email: event.target.value
            })
          }
        
          changePassword(event) {
            this.setState ({
              password: event.target.value
            })
          }

          componentDidMount() {
            const obj = getFromStorage('the_main_page');
            if (obj && obj.token) {
                const { token } = obj;
                fetch('http://localhost:5000/app/verify?token=' + token)
              .then(response => response.json())
              .then(json => {
                  if (json.success) {
                      this.setState({
                          token: token,
                          isLoading: false
                      });
                  } else {
                      this.setState({
                          isLoading: false
                      })
                  }
              })
            } else {
                this.setState({
                    isLoading: false
                })
            }}

          onSubmit() {
              const {
                email,
                password
              }=this.setState;

              this.setState({
                  isLoading:true,
            });

            fetch('http://localhost:5000/app/signin', {
                  method: 'POST',
                  headers:{
                    'Content-type': 'application/jason'
                  },
                  body: JSON.stringify({
                      email: email,
                      password: password
                  })
              }).then(response => response.json())
              .then(json => {
                    console.log('json', json);
                    if (json.success) {
                        setInStorage('the_main_app', { token: json.token })
                        this.setState({
                            email: 'test',
                            password: '',
                            isLoading: false,
                            token: json.token
                        });
                    } else {
                        this.setState({
                            isloading: false
                        })
                    }
              })
          }

render(){ 
const {
    isLoading,
    token,
    email,
    password
} = this.state;
      
      if (isLoading){
      return (<div><p>Loading... {email}</p></div>)
      } 

      if (!token){
        return (<div>
      <MaterialLayout>
        <Typography component="h1" variant="h4" align="center">
          Sign In
        </Typography>
        <form onSubmit = {this.onSubmit}>
                <Grid container spacing={3}> 
                
                <Grid item xs={12}>
               
                <input type = 'email'
                placeholder = 'Email'
                value = {email}
                className = 'form-control form-group'
                onChange={this.changeEmail}
                />
                </Grid>
                <Grid item xs={12}>

                <input type = 'password'
                placeholder = 'Password'
                value = {password}
                className = 'form-control form-group'
                onChange={this.changePassword}
                />                
                </Grid>
            </Grid>
              <button onClick={this.onSubmit}>SiGN in</button>
            </form>
      </MaterialLayout>
        </div>)
} 

        return(
            <div>
                <p>Success</p>
            </div>
        )
}};


export default SignInPage;