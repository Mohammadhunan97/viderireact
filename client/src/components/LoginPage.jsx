import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
const emailErrorMessage = "Please enter a proper ID value, a proper ID value is name@emailprovider.extension, for instance: johndoe@protonmail.com";
const passwordErrorMessage = "Please enter a proper password value, a proper password value is contains at least 8 characters, including one uppercase letter, one lowercase character, one number, and one special character";

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginErrors: []
    }
  }
  attemptLogin(){
    let emailValidated = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.username.value); //if email is not in <word>@<domain>.<ext> format, emailValidated will return false
    let passwordValidated = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(this.password.value);


    if(emailValidated && passwordValidated){
      this.props.logIn();
    }else if(emailValidated && !passwordValidated){
      /* email is correct; password is incorrect */
      this.setState({ loginErrors: [passwordErrorMessage] })
    }else if(!emailValidated && passwordValidated){
      /* email is incorrect; password is correct */
      this.setState({ loginErrors: [emailErrorMessage] })
    }else{
      /* neither password or email is correct */
      this.setState({ loginErrors: [emailErrorMessage,passwordErrorMessage] })
    }
    
  }
  render(){
    return(<div>
      {
        this.state.loginErrors.map((error) => {
          return(<ErrorMessage errortext={error}/>)
        })
      }
      <form>
        <label htmlFor="username">ID:</label>
        <input 
          ref={(element) => {this.username = element}}
          id="username"
          type="text"
          placeholder="username"
          className="input-calm"
        />

        <label htmlFor="password">Password:</label>
        <input 
          ref={(element) => {this.password = element}}
          id="password"
          type="password"
          placeholder="password"
          className="input-calm"/>
        
        <button type="button" onClick={() => this.attemptLogin()}>Login</button>
      </form>
    </div>)
  }
}

export default LoginPage;
