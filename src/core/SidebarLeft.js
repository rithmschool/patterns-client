import React, { Component } from 'react';
import './SidebarLeft.css';
import logo from '../images/logo-dark-gray.png';
import settings from '../images/icon-settings-gray@2x.png';
import down from '../images/white@2x.png';

class SidebarLeft extends Component {

render() {
  return( 
    <div>
      <div className="sidebar">   
        <div className="profile-header">
          <div className="profile-picture"></div>
          <h2>Username</h2>
          <img src={settings} alt="Settings" className="settings-icon" />
        </div>
          <div className="sidebar-nav">
            <div className="add-activity">
              <h1>Activities</h1>
            </div>
            <div className="activity-list">
              <div className="activity">
                <div className="title">
                  <div className="active-toggle"></div>
                  <h3>Activity (Month 2017)</h3>
                  <img src={down} alt="Down Arrow"/>
                </div>
                <div className="menu-item browse">
                  <h4>Browse Companies</h4>
                  <h6 className="count-aside">257</h6>
                </div>
                <div className="menu-item stage-1">
                  <h4>Stage 1</h4>
                  <h6 className="count-aside">2</h6>
                </div>
                <div className="menu-item stage-2">
                  <h4>Stage 2</h4>
                  <h6 className="count-aside"></h6>
                </div>
                <div className="menu-item stage-3">
                  <h4>Stage 3</h4>
                  <h6 className="count-aside"></h6>
                </div>
              </div>

              


            </div>
            <div className="logo-footer">
              <img src={logo} alt="Tradecraft Logo" />
            </div>
          </div>
      </div>
    </div>
  
  )};

}

export default SidebarLeft;
