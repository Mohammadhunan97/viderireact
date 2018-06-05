import React, { Component } from 'react';
import NavBar from './NavBar';

class VideriHome extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return(
      <div className="videri-home">
        <a href="#" onClick={() => this.props.logOut()}>Log Out</a>
        <NavBar />
      </div>
    )
    
  }
}


export default VideriHome;
