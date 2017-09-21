import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderActivityShow.css';
import { setActiveActivity, toggleModal } from '../actions/action';

class HeaderActivityShow extends Component {
  componentWillMount() {
    let foundActivity = this.props.activities.find(
      val => val._id === this.props.match.params.activityId
    );
    this.props.setActiveActivity(foundActivity);
  }

  render() {
    return (
      <div className="header">
        <div>
          <div className="headerTop row">
            <p className="headerTitle"> {this.props.activity.name} </p>
            <div className="statusToggle">OPEN</div>
            <input type="submit" className="editActivityButton" value="EDIT" />
            <input
              type="submit"
              className="addActivityButton"
              value="ADD"
              onClick={this.props.toggleModal}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activities: state.activities,
    activity: state.activity
  };
}

export default connect(mapStateToProps, { setActiveActivity, toggleModal })(
  HeaderActivityShow
);
