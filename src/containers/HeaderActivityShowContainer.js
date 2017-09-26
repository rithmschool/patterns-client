import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderActivityShowContainer.css';
import { setActiveActivity, toggleModal } from '../store/actions/action';
import PropTypes from 'prop-types';

class HeaderActivityShowContainer extends Component {
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

HeaderActivityShowContainer.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      activityId: PropTypes.string.isRequired
    })
  }),
  setActiveActivity: PropTypes.func.isRequired,
  activity: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  toggleModal: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { setActiveActivity, toggleModal })(
  HeaderActivityShowContainer
);
