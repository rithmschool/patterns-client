import React, { Component } from 'react';
import './Header.css';

const Header =  (props) => (
    <div className='header'>
      <div>
        <h3 className='headerTitle'> Job Search (June 2017) </h3>
        <span className='headerRectangle'> Open </span> 
        <input type='submit' className='editActivityButton btn btn-warning' value='Edit' /> 
        <input type='submit' className='addActivityButton btn btn-primary' value='Add' /> 
        <p className='potentialEmployer'> Potential employer </p>
        <p className='lastUpdated'> LAST UPDATED </p>
        <p> 7/15/2017 </p> 
      </div>
    </div>
  )

export default Header;
