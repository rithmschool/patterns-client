import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SidebarLeftContainer.css';
import logo from '../images/logo-dark-gray.svg';
import hide from '../images/icon-open-collapse-left-gray.svg';
import ActivitySideBox from '../components/molecules/ActivitySideBox';
import UserProfileContainer from './UserProfileContainer';
import WideButton from '../components/atoms/WideButton';
import ModalActivityContainer from './ModalActivityContainer';
import sortByUpdatedAt from '../helpers/sortByUpdatedAt';

class SidebarLeftContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    let modal = null;
    if (this.state.modalOpen) {
      modal = (
        <ModalActivityContainer
          toggleModal={this.toggleModal}
          name="Edit"
          logo="Replace"
        />
      );
    }

    let allActivities = sortByUpdatedAt(this.props.activities).map(val => (
      <ActivitySideBox
        key={val._id}
        data={val}
        active={this.props.currentActivityId === val._id}
      />
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
          <WideButton onClick={this.toggleModal}>ADD NEW ACTIVITY</WideButton>
          {modal}
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
  activities: PropTypes.objectOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  )
};

const mapStateToProps = state => ({
  activities: state.activities,
  currentActivityId: state.currentActivityId
});

export default connect(mapStateToProps)(SidebarLeftContainer);
