import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarLeftContainer from './SidebarLeftContainer';
import Content from '../components/Content';
import SmallerContent from '../components/SmallerContent';
import SidebarRightContainer from './SidebarRightContainer';

class AssetContainer extends Component {
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

export default AssetContainer;
