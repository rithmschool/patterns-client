import React, { Component } from 'react';
import SidebarLeft from './core/SidebarLeft';
import SmallerContent from './core/SmallerContent';
import SidebarRight from './core/SidebarRight';

class Asset extends Component {

  render() {
    return( 
      <div className="asset"> 
        <SidebarLeft /> 
        <SmallerContent />
        <SidebarRight />
      </div>
  )};
}

export default Asset;
