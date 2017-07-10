import { Route, Switch } from 'react-router';
import React from 'react';
import BrowseContainer from '../BrowseContainer';
import ActivityDashboard from './ActivityDashboard';
import ActivityContainer from '../ActivityContainer';

const InnerContent = () => (
  <Switch>
    <Route exact path='/activities' component={ActivityDashboard} />
    <Route exact path='/activities/browse' component={BrowseContainer} />
    <Route exact path='/activities/:activityId' component={ActivityContainer} />
  </Switch>
)

export default InnerContent;
