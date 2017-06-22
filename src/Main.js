import React, { Component } from 'react';
import SidebarLeft from './core/SidebarLeft';
import Content from './core/Content';
import "./Main.css";

class Main extends Component {

  render() {
    return( 
      <div className="main">   
        <SidebarLeft /> 
        <Content />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-xs-12 green">
              Stuff here
            </div>
            <div className="col-md-3 col-xs-12 red">
              Stuff here
            </div>
          </div>
        </div>
      </div>
  )};
    
}

export default Main;
