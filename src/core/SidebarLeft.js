import React, { Component } from 'react';
import './SidebarLeft.css';
import logo from '../images/logo-dark-gray.svg';
import down from '../images/icon-chevron-right-gray.svg';
import hide from '../images/icon-open-collapse-left-gray.svg';

class SidebarLeft extends Component {

render() {
  return(
    <div className="sidebar">   
      <div className="profile-header">
        <div className="profile-picture"></div>
        <h2>Username</h2>
      </div>
      <div className="activity-heading">
        <h1>Activities</h1>
      </div>
      <div className="activity-list">
        <div className="activity">
          <div className="title">
            <div className="active-toggle"></div>
            <div className="activity-name"><h3>Job Search (Month 2017)</h3></div>
            <div className="arrow"><img src={down} alt="Down Arrow"/></div>
          </div>
          <div className="menu-item">
            <h4>Browse Companies</h4>
            <h6 className="count-aside">257</h6>
          </div>
          <div className="menu-item">
            <h4>My Funnel</h4>
            <h6 className="count-aside">2</h6>
          </div>
        </div>
        <div className="activity">
          <div className="title">
            <div className="active-toggle"></div>
            <div className="activity-name"><h3>Job Search (Month 2017)</h3></div>
            <div className="arrow"><img src={down} alt="Down Arrow"/></div>
          </div>
          <div className="menu-item">
            <h4>Browse Companies</h4>
            <h6 className="count-aside">257</h6>
          </div>
          <div className="menu-item">
            <h4>My Funnel</h4>
            <h6 className="count-aside">2</h6>
          </div>
        </div>
      </div>

      <div className="button-holder">
        <button>
          <p>ADD NEW ACTIVITY</p>
        </button>
      </div>

      <div className="footer">
        <div className="logo-holder">
          <img src={logo} alt="Tradecraft Logo" />
        </div>
        <div className="hide-holder">
          <img src={hide} alt="Hide sidebar" />
          <p>HIDE</p>
        </div>
      </div>
    </div>
  )};

}

export default SidebarLeft;
