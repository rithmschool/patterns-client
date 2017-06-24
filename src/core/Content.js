import React, { Component } from 'react';
import './Content.css';
import InnerContent from './InnerContent';
import breadcrumb from '../images/icon-arrow-right-gray@2x.png';

class Content extends Component {

  render() {
  return(
    <div className='content-holder'>  
        <div className="content col-xs-12">   
          {/* <div className="navbar">
            <h2>US Economy</h2>
            <img src={breadcrumb} alt="right arrow"/>
            <select name="Location" id="location">
              <option value="san-francisco">San Francisco</option>
              <option value="new-york">New York</option>
            </select>
          </div> */}
          <InnerContent />
        </div>
    </div>
  )};

}

export default Content;

