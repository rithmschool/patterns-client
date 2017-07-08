import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SidebarLeft.css';
import logo from '../images/logo-dark-gray.svg';
import hide from '../images/icon-open-collapse-left-gray.svg';
import ActivitySideBox from './ActivitySideBox';
import UserProfile from './UserProfile';

class SidebarLeft extends Component {

render() {
  let allActivities = this.props.activities.map(val => (
    <ActivitySideBox key={val._id} data={val} />
  ));
  return (
    <div className="sidebar">   
      <UserProfile />
      <div className="activity-heading">
        <h1><Link to="/activities">Activities</Link></h1>
      </div>
      <div className="activity-list">
        {allActivities}
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
          <p className="hide">HIDE</p>
          <p className="open">OPEN</p>
        </div>
      </div>

    </div>
  )};

}

function mapStateForActivities(state) {
  return {
    activities: state.activities
  };
}

export default connect(mapStateForActivities)(SidebarLeft);
