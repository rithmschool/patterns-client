import { Route, Switch } from 'react-router';
import React from 'react';
import BrowseContainer from '../BrowseContainer';
import ActivityDashboard from './ActivityDashboard';
import ActivityContainer from '../ActivityContainer';
import CompanyInfoContainer from './CompanyInfoContainer';
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
