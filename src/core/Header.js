import React from 'react';
import { Route, Switch } from 'react-router';
import HeaderActivityIndex from './HeaderActivityIndex';
import HeaderActivityShow from './HeaderActivityShow';
import HeaderCompanyIndex from './HeaderCompanyIndex';
import HeaderCompanyShow from './HeaderCompanyShow';

const Header = () => (
  <Switch>
    <Route exact path='/activities' component={HeaderActivityIndex} />
    <Route exact path='/activities/:activityId' component={HeaderActivityShow} />
    <Route exact path='/assets/companies' component={HeaderCompanyIndex} />
    <Route exact path='/assets/companies/:companyId' component={HeaderCompanyShow} />
  </Switch>
);

export default Header;
