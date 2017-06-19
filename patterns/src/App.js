import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import { Route } from 'react-router-dom';
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

          <Route exact path="/" component={Login}></Route>
          <Route path="/callback" component={Main}></Route>

        </div>
      
      </div>
    );
  }
}

export default App;

