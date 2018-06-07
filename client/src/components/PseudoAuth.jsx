import React, { Component } from 'react';
import VideriHome from './VideriHome';
import LoginPage from './LoginPage';
let that;

class PseudoAuth extends Component {
  constructor(props){
    super(props);
    that = this;
    this.state = { isAuthenticated: false, user_email: 'sampleemail@gmail.com' }
  }
  logIn(email){ that.setState({ isAuthenticated: true, user_email: email}) }
  logOut(){ that.setState({ isAuthenticated: false }) }

  render(){ 
    const isAuthenticated = this.state.isAuthenticated;
    return(
      <div>
        {
          isAuthenticated? //if not authenticated yet, try to log in; if already logged in view home page
            <VideriHome logOut={this.logOut} user_email={this.state.user_email}/>: <LoginPage logIn={this.logIn} />
        }
      </div>
    )
  }
}


export default PseudoAuth;
