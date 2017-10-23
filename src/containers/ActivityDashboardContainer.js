import React, { Component } from 'react';
import Activity from '../components/molecules/Activity';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import sortByUpdatedAt from '../helpers/sortByUpdatedAt';

class ActivityDashboardContainer extends Component {
  render() {
    let allActivities = sortByUpdatedAt(this.props.activities).map(val => (
      <Activity key={val._id} name={val.name} activityId={val._id} />
    ));
    return allActivities;
  }
}

ActivityDashboardContainer.propTypes = {
  activities: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ activities: state.activities });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  ActivityDashboardContainer
);
