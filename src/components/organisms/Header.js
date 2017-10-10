import React from 'react';
import { Route, Switch } from 'react-router';
import HeaderActivityIndex from '../molecules/HeaderActivityIndex';
import HeaderActivityShowContainer from '../../containers/HeaderActivityShowContainer';
import HeaderCompanyIndex from '../molecules/HeaderCompanyIndex';
import HeaderCompanyShowContainer from '../../containers/HeaderCompanyShowContainer';

const Header = () => (
  <Switch>
    <Route exact path="/activities" component={HeaderActivityIndex} />
    <Route
      exact
      path="/activities/:activityId"
      component={HeaderActivityShowContainer}
    />
    <Route exact path="/assets/companies" component={HeaderCompanyIndex} />
    <Route
      exact
      path="/assets/companies/:companyId"
      component={HeaderCompanyShowContainer}
    />
  </Switch>
);

export default Header;
