import React, { Component } from 'react';
import SidebarLeft from './core/SidebarLeft';
import SmallerContent from './core/SmallerContent';
import SidebarRight from './core/SidebarRight';
// import AddAsset from './AddAsset';
// import EditAsset from './EditAsset';
import "./Asset.css";
import { Route } from 'react-router-dom';

class Asset extends Component {

  render() {
    return( 
      <div className="asset">  
        { /* <EditAsset /> */ }
        { /* <AddAsset /> */ }

        <SidebarLeft /> 
        <SmallerContent />
        <SidebarRight />
      </div>
  )};
}

export default Asset;
