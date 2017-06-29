import React, { Component } from 'react';
import './Header.css';

const Header =  (props) => (
    <div className='header'>
      <div>
        <div className='headerTop row'>
          <p className='headerTitle'> Job Search (June 2017) </p>
          <div className='headerRectangle'>
            <div className='headerRecText'>
              OPEN  
            </div>
          </div>
          <div className='editB'>
            <input type='submit' className='editActivityButton' value='EDIT' /> 
          </div>
          <div className='addB'>
            <input type='submit' className='addActivityButton' value='ADD' /> 
          </div>
        </div>
        <p className='potentialEmployer'> Potential employer </p>
        <p className='lastUpdated'> LAST UPDATED </p>
        <p className='latestUpdatedText'> 7/15/2017 </p> 
      </div>
    </div>
  )

export default Header;
