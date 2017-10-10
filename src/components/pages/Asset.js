import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarLeftContainer from '../../containers/SidebarLeftContainer';
import Content from './Content';
import SmallerContent from './SmallerContent';
import SidebarRightContainer from '../../containers/SidebarRightContainer';

class Asset extends Component {
  render() {
    return (
      <div className="asset row">
        <SidebarLeftContainer />
        <Switch>
          <Route exact path="/assets/companies" component={Content} />
          <Route
            exact
            path="/assets/companies/:companyId"
            component={SmallerContent}
          />
        </Switch>
        <Route
          exact
          path="/assets/companies/:companyId"
          component={SidebarRightContainer}
        />
      </div>
    );
  }
}

export default Asset;
