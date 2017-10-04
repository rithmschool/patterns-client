import React, { Component } from 'react';
import SidebarLeftContainer from '../../containers/SidebarLeftContainer';
import Content from '../Content';
import './Main.css';

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
