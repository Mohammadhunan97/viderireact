import React, { Component } from 'react';
import NavBar from './NavBar';
import FolderDisplay from './FolderDisplay';

class VideriHome extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <div className="videri-home">
        <NavBar user_email={this.props.user_email} />
        <FolderDisplay />
    
        <a
          className="logout-footer"
          href="#"
          onClick={() => this.props.logOut()}
        >Log Out</a>
      </div>
    )
    
  }
}


export default VideriHome;
