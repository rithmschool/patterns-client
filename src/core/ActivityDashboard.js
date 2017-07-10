import React, { Component } from 'react';
import { connect } from 'react-redux';
import Activity from './Activity';

class ActivityDashboard extends Component {
  render () {
    let allActivities = this.props.activities.map(val => (
      <Activity key={val._id} name={val.name} a_id={val._id} />
    ));
    return (
      <div>
        {allActivities}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    activities: state.activities,
  }
}

export default connect(mapStateToProps)(ActivityDashboard);
