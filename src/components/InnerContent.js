import { Route, Switch } from 'react-router';
import React from 'react';
import ActivityDashboard from './ActivityDashboard';
import ActivityContainer from '../containers/ActivityContainer';
import BrowseContainer from '../containers/BrowseContainer';
import CompanyInfoContainer from '../containers/CompanyInfoContainer';
import './InnerContent.css';

const InnerContent = () => (
  <Switch>
    <Route exact path="/activities" component={ActivityDashboard} />
    <Route exact path="/activities/:activityId" component={ActivityContainer} />
    <Route exact path="/assets/companies" component={BrowseContainer} />
    <Route
      exact
      path="/assets/companies/:companyId"
      component={CompanyInfoContainer}
    />
  </Switch>
);

export default InnerContent;
