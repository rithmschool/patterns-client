import React, { Component } from 'react';
import './Content.css';
import Activities from './Activities.js';
import breadcrumb from './images/icon-arrow-right-gray@2x.png';

class Content extends Component {

  render() {
  return( 
    <div className="content">   
      {/* <div className="navbar">
        <h2>US Economy</h2>
        <img src={breadcrumb} alt="right arrow"/>
        <select name="Location" id="location">
          <option value="san-francisco">San Francisco</option>
          <option value="new-york">New York</option>
        </select>
      </div> */}
      <Activities />
    </div>
  )};

}

export default Content;

