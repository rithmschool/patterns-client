import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./SidebarLeftContainer.css";
import logo from "../images/logo-dark-gray.svg";
import hide from "../images/icon-open-collapse-left-gray.svg";
import ActivitySideBox from "../components/ActivitySideBox";
import UserProfileContainer from "./UserProfileContainer";
import PropTypes from "prop-types";
import Button from "../components/atoms/Button";

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
          <Button>ADD NEW ACTIVITY</Button>
          {/* <button>
            <p>ADD NEW ACTIVITY</p>
          </button>*/}
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

SidebarLeftContainer.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => ({
  activities: state.activities
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  SidebarLeftContainer
);
