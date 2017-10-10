import { Route, Switch } from 'react-router';
import React from 'react';
import ActivityDashboardContainer from '../../containers/ActivityDashboardContainer';
import ActivityContainer from '../../containers/ActivityContainer';
import BrowseContainer from '../../containers/BrowseContainer';
import CompanyInfo from '../molecules/CompanyInfo';
import './InnerContent.css';

const InnerContent = () => (
  <Switch>
    <Route exact path="/activities" component={ActivityDashboardContainer} />
    <Route exact path="/activities/:activityId" component={ActivityContainer} />
    <Route exact path="/assets/companies" component={BrowseContainer} />
    <Route exact path="/assets/companies/:companyId" component={CompanyInfo} />
  </Switch>
);

export default InnerContent;
