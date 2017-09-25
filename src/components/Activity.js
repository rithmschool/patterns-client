import React from 'react';
import { Link } from 'react-router-dom';
import down from '../images/icon-chevron-right-gray.svg';
import './Activity.css';

const Activity = props => {
  const logo = props.logo || null;
  logo ? <img src={logo} alt={`${props.name}'s logo`} /> : null;
  return (
    <div className="activity-bar row">
      <div className="activity-bar-logo col-xs-1">{logo}</div>
      <div className="activity-bar-name col-xs-3">
        <Link to={`/activities/${props.activityId}`}>{props.name}</Link>
      </div>
      <div className="activity-bar-data col-xs-7 row">
        <div className="first-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs">
          <div className="activity-bar-data-point">DATA POINT</div>
          <div className="activity-bar-data-value">Data</div>
        </div>
        <div className="second-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs">
          <div className="activity-bar-data-point">DATA POINT</div>
          <div className="activity-bar-data-value">Data</div>
        </div>
        <div className="third-data-collection col-lg-3 col-md-4 hidden-sm hidden-xs">
          <div className="activity-bar-data-point">DATA POINT</div>
          <div className="activity-bar-data-value">Data</div>
        </div>
        <div className="fourth-data-collection col-lg-3 hidden-md hidden-sm hidden-xs">
          <div className="activity-bar-data-point">DATA POINT</div>
          <div className="activity-bar-data-value">Data</div>
        </div>
      </div>
      <div className="activity-bar-arrow col-xs-1 hidden-sm hidden-xs">
        <Link to={`/activities/${props.activityId}`}>
          <img
            className="activity-barRightArrow"
            src={down}
            alt="Right Arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default Activity;
