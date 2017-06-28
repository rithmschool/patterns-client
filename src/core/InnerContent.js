import axios from 'axios';
import { Route, Switch } from 'react-router';
import React, { Component } from 'react';
import { BASE_URL } from '../actions/auth';
import BrowseContainer from '../BrowseContainer';
import ActivityContainer from '../ActivityContainer';

const InnerContent = () => (
  <Switch>
    <Route exact path='/activities/browse' component ={BrowseContainer} />
    <Route exact path='/activities' component ={ActivityContainer} />
  </Switch>
  )

export default InnerContent;
