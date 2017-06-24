import React, { Component } from 'react';
import down from '../images/icon-chevron-right-gray.svg';
import './Company.css'

const Company =  (props) => (
  <div className='company row'>
    <div className='company-logo col-xs-1'>
     &nbsp;
    </div>
    <div className='company-name col-xs-3'>
      {props.name}
    </div>
    <div className='company-data col-xs-7 row'>
      <div className='first-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs'>
        <div className='company-data-point'>
          DATA POINT
        </div>
        <div className='company-data-value'>
          Data
        </div>
      </div>
      <div className='second-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs'>
        <div className='company-data-point'>
          DATA POINT
        </div>
        <div className='company-data-value'>
          Data
        </div>
      </div>
      <div className='third-data-collection col-lg-3 col-md-4 hidden-sm hidden-xs'>
        <div className='company-data-point'>
          DATA POINT
        </div>
        <div className='company-data-value'>
          Data
        </div>
      </div>
      <div className='fourth-data-collection col-lg-3 hidden-md hidden-sm hidden-xs'>
        <div className='company-data-point'>
          DATA POINT
        </div>
        <div className='company-data-value'>
          Data
        </div>
      </div>
    </div>
    <div className='company-arrow col-xs-1'>
       <img src={down} alt="Down Arrow"/>
    </div>
  </div>
);

export default Company;

