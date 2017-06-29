import React, { Component } from 'react';
import SidebarLeft from './core/SidebarLeft';
import Content from './core/Content';
import SidebarRight from './core/SidebarRight';
import "./Main.css";

class Main extends Component {

  render() {
    return( 
      <div className="main">   
        <SidebarLeft /> 
        <Content />
        { /* <SidebarRight /> */}
      </div>
  )};
    
}

export default Main;
