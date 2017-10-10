import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import AuthContainer from '../../containers/AuthContainer';
import Login from '../atoms/Login';
import Asset from './Asset';
import RequireAuth from '../../hocs/RequireAuth';
import './App.css';

const App = () => (
  <div className="App container-fluid" id="app-root">
    <div id="modal-root" />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/auth/google/callback" component={AuthContainer} />
      <Route path="/activities" component={RequireAuth(Main)} />
      <Route path="/assets" component={RequireAuth(Asset)} />
      <Route component={RequireAuth(Main)} />
    </Switch>
  </div>
);

export default App;
