import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Main from './Main';
import Auth from './Auth';
import Login from './Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Route exact path="/" component={Login}></Route>
        <Route path="/auth/google/callback" component={Auth}></Route>
        <Route path="/activities" component={Main}></Route>
      { /* <Route path="/assets" component={Asset}></Route> */ }
      </div>
    );
  }
}

export default App;
