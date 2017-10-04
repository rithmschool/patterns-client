import React from 'react';
import SidebarLeftContainer from './SidebarLeftContainer';
import Content from '../components/Content';
import './MainContainer.css';

class MainContainer extends React.Component {
  render() {
    return (
      <div id="app-root" className="main">
        <div id="modal-root" />
        <SidebarLeftContainer />
        <Content />
      </div>
    );
  }
}

export default MainContainer;
