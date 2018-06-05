import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(<div>
      <form>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" placeholder="username" className="input-calm"/>

        <label htmlFor="password">Password:</label>
        <input id="password" type="text" placeholder="password" className="input-calm"/>

        
      </form>
      <button onClick={() => this.props.logIn()}>Login</button>
    </div>)
  }
}

export default LoginPage;
