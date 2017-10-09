import React, { Component } from 'react';
import SidebarLeftContainer from '../../containers/SidebarLeftContainer';
import Content from '../Content';

class Main extends Component {
  render() {
    return (
      <div>
        <SidebarLeftContainer />
        <Content />
      </div>
    );
  }
}

export default Main;
