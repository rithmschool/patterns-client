import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import Content from './Content.js';

class Main extends Component {

  render() {
    return( 
      <div>   
        Login successful!! 

        Main
        <Sidebar /> 
        <Content />
      </div>
  )};
    
}

export default Main;
