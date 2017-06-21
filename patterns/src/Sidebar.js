import React, { Component } from 'react';
import './Sidebar.css';
import logo from './images/logo-dark-gray.png';
import settings from './images/icon-settings-gray@2x.png';
import down from './images/white@2x.png';

class Sidebar extends Component {

render() {
  return( 
  <div className="sidebar">   
    <div className="profile-header">
      <div className="profile-picture"></div>
      <h1>Username</h1>
      <img src={settings} alt="Settings" className="settings-icon" />
    </div>
      <div className="sidebar-nav">
        <div className="add-activity">
          <h2>Activities</h2>
          <div className="add-new">
            <a href={null}>ADD NEW &nbsp;</a><span>+</span>
          </div>
        </div>
        <div className="activity-list">
          <div className="activity">
            <div className="title">
              <div className="active-toggle"></div>
              <h2>Activity (Month 2017)</h2>
              <img src={down} alt="Down Arrow"/>
            </div>
            <div className="menu-item browse">
              <h2>Browse Companies</h2>
              <p className="count-aside">257</p>
            </div>
            <div className="menu-item stage-1">
              <h2>Stage 1</h2>
              <p className="count-aside">2</p>
            </div>
            <div className="menu-item stage-2">
              <h2>Stage 2</h2>
              <p className="count-aside"></p>
            </div>
            <div className="menu-item stage-3">
              <h2>Stage 3</h2>
              <p className="count-aside"></p>
            </div>
          </div>

          <div className="activity">
            <div className="title">
              <div className="active-toggle">&nbsp;</div>
              <h2>Activity 2 (Month 2017)</h2>
              <img src={down} alt="Down Arrow"/>
            </div>
            <div className="menu-item browse">
              <h2>Browse Companies</h2>
              <p className="count-aside"></p>
            </div>
            <div className="menu-item stage-1">
              <h2>Stage 1</h2>
              <p className="count-aside"></p>
            </div>
            <div className="menu-item stage-2">
              <h2>Stage 2</h2>
              <p className="count-aside"></p>
            </div>
            <div className="menu-item stage-3">
              <h2>Stage 3</h2>
              <p className="count-aside"></p>
            </div>
          </div>


        </div>
        <div className="logo-footer">
          <img src={logo} alt="Tradecraft Logo" />
        </div>
      </div>
  </div>
  )};

}

export default Sidebar;
