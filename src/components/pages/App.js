import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Main from './Main';
import AuthContainer from '../../containers/AuthContainer';
import Login from '../atoms/Login';
import Asset from './Asset';
import RequireAuth from '../../hocs/RequireAuth';

const AppStyle = styled.div`
  padding: 0;
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  min-height: 1vh;
  box-sizing: border-box;
`;

const App = () => (
  <AppStyle className="container-fluid" id="app-root">
    <div id="modal-root" />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/auth/google/callback" component={AuthContainer} />
      <Route path="/activities" component={RequireAuth(Main)} />
      <Route path="/assets" component={RequireAuth(Asset)} />
      <Route component={RequireAuth(Main)} />
    </Switch>
  </AppStyle>
);

export default App;
