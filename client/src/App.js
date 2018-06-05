import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import PseudoAuth from './components/PseudoAuth';


class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={PseudoAuth} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
