import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import Auth from './Auth';
import Login from './Login';
import Asset from './Asset';
import requireAuth from './core/requireAuth';
import './App.css';

const App = () => (
  <div className="App container-fluid">
    <Route exact path="/" component={Login}></Route>
    <Route path="/auth/google/callback" component={Auth}></Route>
    <Route path="/activities" component={requireAuth(Main)}></Route>
    <Route path="/assets" component={requireAuth(Asset)}></Route>
  </div>
)

export default App;
