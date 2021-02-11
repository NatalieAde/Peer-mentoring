import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fullName: '',
      email: '',
      password: ''
    }
    this.changeFullName = this.changeFullName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeFullName(event) {
    this.setState ({
      fullName: event.target.value
    })
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

  //when user clicks submit, this will be triggered and it will grab all the details and save it in 'registered'
  onSubmit(event) {
    //prevents the form from acting in the default way
    event.preventDefault()

    const registered = {
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password
    }

    //everything stored in 'registered' is posted to the endpoint(backend)
    axios.post('http://localhost:5000/app/signup', registered)
      .then(response => console.log(response.data))


    // window.location()...

    this.setState ({
      fullName: '',
      email: '',
      password: ''
    })
  }

  render() {
    return(
      <div>
        <div className = 'container'>
          <div className = 'form-div'>
            <form onSubmit = {this.onSubmit}>
              <input type = 'text'
              placeholder = 'Full Name'
              onChange = {this.changeFullName}
              value = {this.state.fullName}
              className = 'form-control form-group'
              />

              <input type = 'text'
              placeholder = 'Email'
              onChange = {this.changeEmail}
              value = {this.state.email}
              className = 'form-control form-group'
              />

              <input type = 'text'
              placeholder = 'Password'
              onChange = {this.changePassword}
              value = {this.state.password}
              className = 'form-control form-group'
              />

              <input 
              type = 'submit'
              className = 'btn btn-danger btn-block'
              value = 'Submit'
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;