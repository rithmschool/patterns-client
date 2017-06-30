import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import Auth from './Auth';
import Login from './Login';
import './App.css';


const App = () => (
  <div className="App">
    <Route exact path="/" component={Login}></Route>
    <Route path="/auth/google/callback" component={Auth}></Route>
    <Route path="/activities" component={Main}></Route>
  </div>
)

export default App;
