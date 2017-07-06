import { Route, Switch } from 'react-router';
import React from 'react';
import BrowseContainer from '../BrowseContainer';
import ActivityContainer from '../ActivityContainer';

const InnerContent = () => (
  <Switch>
    <Route path='/activities/browse' component={BrowseContainer} />
    <Route exact path='/activities' component={ActivityContainer} />
  </Switch>
)

export default InnerContent;
