import React, { Component } from 'react';
import './Header.css';

const Header =  (props) => (
    <div className='header'>
        <div className='headerTop row'>
          <p className='headerTitle'> Job Search (June 2017) </p>
          <div className='statusToggle'>Open</div>
          <div className='editB'>
            <input type='submit' className='editActivityButton' value='EDIT' /> 
          </div>
          <div className='addB'>
            <input type='submit' className='addActivityButton' value='ADD' /> 
          </div>
        </div>
        <p className='potentialEmployer'>Potential employer</p>
        <p className='lastUpdated'>Last Updated</p>
        <p className='latestUpdatedText'>7/15/2017</p> 
    </div>
  )

export default Header;
