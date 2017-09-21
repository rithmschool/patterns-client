import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Auth from './Auth';
import Login from './Login';
import Asset from './Asset';
import requireAuth from './core/requireAuth';
import './App.css';

const App = () => (
  <div className="App container-fluid">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/auth/google/callback" component={Auth} />
      <Route path="/activities" component={requireAuth(Main)} />
      <Route path="/assets" component={requireAuth(Asset)} />
      <Route component={requireAuth(Main)} />
    </Switch>
  </div>
);

export default App;
