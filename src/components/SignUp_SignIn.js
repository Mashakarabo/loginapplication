import React, { Component } from 'react'
import './SignUp_SignIn.css';


export default class SignUp_SignIn extends Component {
  render() {
    return (
        <div class="signupFrm">
        <form action="" class="form">
          <h1 class="title">Sign up</h1>
    
          <div class="inputContainer">
            <input type="text" class="input" placeholder="a" />
            <label for="" class="label">Email</label>
          </div>
    
          <div class="inputContainer">
            <input type="text" class="input" placeholder="a" />
            <label for="" class="label">Username</label>
          </div>
    
          <div class="inputContainer">
            <input type="text" class="input" placeholder="a" />
            <label for="" class="label">Password</label>
          </div>
    
          <div class="inputContainer">
            <input type="text" class="input" placeholder="a" />
            <label for="" class="label">Confirm Password</label>
          </div>
    
          <input type="submit" class="submitBtn" value="Sign up" />
        </form>
      </div>
    )
  }
}
