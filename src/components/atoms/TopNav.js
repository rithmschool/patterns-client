import React from 'react';
import './TopNav.css';
import arrow from '../../images/icon-chevron-right-gray.svg';

const TopNav = props => (
  <div className="topNav">
    <h1>US Economy</h1>
    <img src={arrow} alt="Arrow breadcrumb" />
    <select name="topNavOptions" className="topNavOptions">
      <option value="value1" selected>
        {' '}
        Lagos
      </option>
      <option value="value2">San Francisco</option>
      <option value="value3">Austin</option>
    </select>
  </div>
);

export default TopNav;
