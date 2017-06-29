import React, { Component } from 'react';
import SidebarLeft from './core/SidebarLeft';
import Content from './core/Content';
import AddCompany from './AddCompany';
import EditCompany from './EditCompany';
// import SidebarRight from './core/SidebarRight';
import "./Main.css";
import { Route } from 'react-router-dom';

class Main extends Component {

  render() {
    return( 
      <div className="main">  
        { /* <EditCompany /> */ }
        { /* <AddCompany /> */ }

        <SidebarLeft /> 
        <Content />
        {/* <SidebarRight /> */}
      </div>
  )};
}

export default Main;
