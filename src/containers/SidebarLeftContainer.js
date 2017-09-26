import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SidebarLeftContainer.css';
import logo from '../images/logo-dark-gray.svg';
import hide from '../images/icon-open-collapse-left-gray.svg';
import ActivitySideBox from '../components/ActivitySideBox';
import UserProfileContainer from './UserProfileContainer';
import PropTypes from 'prop-types';

class SidebarLeftContainer extends Component {
  render() {
    let allActivities = this.props.activities.map(val => (
      <ActivitySideBox key={val._id} data={val} />
    ));
    return (
      <div className="sidebar">
        <UserProfileContainer />
        <div className="activity-heading">
          <h1>
            <Link to="/activities">Activities</Link>
          </h1>
        </div>
        <div className="activity-list">{allActivities}</div>

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
    );
  }
}

function mapStateForActivities(state) {
  return {
    activities: state.activities
  };
}

SidebarLeftContainer.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateForActivities)(SidebarLeftContainer);
