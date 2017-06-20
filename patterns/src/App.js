import React, { Component } from 'react';
import './App.css';
import Login from './Login.js';
import { Route } from 'react-router-dom';
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login}></Route>
        <Route path="/callback" component={Main}></Route>
      </div>
    );
  }
}

export default App;

