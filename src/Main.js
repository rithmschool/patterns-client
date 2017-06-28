import React, { Component } from 'react';
import SidebarLeft from './core/SidebarLeft';
import Content from './core/Content';
import "./Main.css";
import { Route } from 'react-router-dom';

class Main extends Component {

  render() {
    return( 
      <div className="main">   
        <SidebarLeft />
        <Content /> 
      </div>
  )};
}

export default Main;
