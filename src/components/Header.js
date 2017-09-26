import React from 'react';
import { Route, Switch } from 'react-router';
import HeaderActivityIndexContainer from '../containers/HeaderActivityIndexContainer';
import HeaderActivityShowContainer from '../containers/HeaderActivityShowContainer';
import HeaderCompanyIndexContainer from '../containers/HeaderCompanyIndexContainer';
import HeaderCompanyShowContainer from '../containers/HeaderCompanyShowContainer';

const Header = () => (
  <Switch>
    <Route exact path="/activities" component={HeaderActivityIndexContainer} />
    <Route
      exact
      path="/activities/:activityId"
      component={HeaderActivityShowContainer}
    />
    <Route
      exact
      path="/assets/companies"
      component={HeaderCompanyIndexContainer}
    />
    <Route
      exact
      path="/assets/companies/:companyId"
      component={HeaderCompanyShowContainer}
    />
  </Switch>
);

export default Header;
