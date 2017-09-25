import React, { Component } from "react";
import { connect } from "react-redux";
import Activity from "../components/Activity";
import PropTypes from "prop-types";

class ActivityDashboardContainer extends Component {
	render() {
		let allActivities = this.props.activities.map(val => (
			<Activity key={val._id} name={val.name} activityId={val._id} />
		));
		return <div>{allActivities}</div>;
	}
}

function mapStateToProps(state) {
	return {
		activities: state.activities
	};
}

ActivityDashboardContainer.propTypes = {
	activities: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(ActivityDashboardContainer);
