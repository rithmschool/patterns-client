import React from 'react';
import { Route, Switch } from 'react-router';
import HeaderActivityIndex from './HeaderActivityIndex';
import HeaderActivityShow from './HeaderActivityShow';

const Header = () => (
  <Switch>
    <Route exact path='/activities' component={HeaderActivityIndex} />
    <Route exact path='/activities/:activities' component={HeaderActivityShow} />
  </Switch>
);

export default Header;
