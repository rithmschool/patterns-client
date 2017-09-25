import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Auth from './Auth';
import Login from './Login';
import Asset from './Asset';
import RequireAuth from '../hocs/RequireAuth';
import './App.css';

const App = () => (
  <div className="App container-fluid">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/auth/google/callback" component={Auth} />
      <Route path="/activities" component={RequireAuth(Main)} />
      <Route path="/assets" component={RequireAuth(Asset)} />
      <Route component={RequireAuth(Main)} />
    </Switch>
  </div>
);

export default App;
