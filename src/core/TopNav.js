import React from 'react';
import './TopNav.css';

const TopNav =  (props) => (
    <div className='topNav'>
      <p className='topNavTitle'> US Economy > 
        <select name="topNavOptions" className="topNavOptions"> 
          <option value="value1" selected> Lagos</option> 
          <option value="value2" >San Francisco</option>
          <option value="value3">Austin</option>
        </select> 
      </p>
    </div>
);

export default TopNav;
