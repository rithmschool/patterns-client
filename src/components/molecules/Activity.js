import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import down from '../../images/icon-chevron-right-gray.svg';
import styled from 'styled-components';
import StyleVariables from '../../StyleVariables';

const ActivityBarStyle = styled.div`
  background-color: ${StyleVariables['white']};
  height: 96px;
  border-radius: 2px;
  margin: 10px 24px;
`;

const ActivityBarLogoStyle = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${StyleVariables['pale-grey']};
  margin: 24px auto 24px 24px;
  display: inline-block;
  float: left;
`;

const ActivityBarNameStyle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${StyleVariables['dark-grey']};
  display: inline-block;
  float: left;
  vertical-align: middle;
  line-height: 96px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :hover {
    overflow: visible;
  }

  a {
    color: ${StyleVariables['dark-grey']};
    text-decoration: none;
  }
`;

const ActivityBarDataStyle = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  float: left;
`;

const ActivityBarDataPointStyle = styled.div`
  color: ${StyleVariables['cool-grey']};
  font-weight: bold;
  font-size: 12px;
  margin-top: 30px;
  margin-bottom: 6px;
`;

const ActivityBarDataValueStyle = styled.div`
  color: ${StyleVariables['dark-grey']};
  font-size: 16px;
`;

const ActivityBarDataArrowStyle = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 96px;
  text-align: right;

  .activity-bar-arrow img {
    vertical-align: middle;
  }
`;

const Activity = props => {
  const logo = props.logo || null;
  logo ? <img src={logo} alt={`${props.name}'s logo`} /> : null; // eslint-disable-line
  return (
    <ActivityBarStyle className="row">
      <ActivityBarLogoStyle className="col-xs-1">{logo}</ActivityBarLogoStyle>
      <ActivityBarNameStyle className="col-xs-3">
        <Link to={`/activities/${props.activityId}`}>{props.name}</Link>
      </ActivityBarNameStyle>
      <ActivityBarDataStyle className="activity-bar-data col-xs-7 row">
        <div className="first-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs">
          <ActivityBarDataPointStyle>DATA POINT</ActivityBarDataPointStyle>
          <ActivityBarDataValueStyle>Data</ActivityBarDataValueStyle>
        </div>
        <div className="second-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs">
          <ActivityBarDataPointStyle>DATA POINT</ActivityBarDataPointStyle>
          <ActivityBarDataValueStyle>Data</ActivityBarDataValueStyle>
        </div>
        <div className="third-data-collection col-lg-3 col-md-4 hidden-sm hidden-xs">
          <ActivityBarDataPointStyle>DATA POINT</ActivityBarDataPointStyle>
          <ActivityBarDataValueStyle>Data</ActivityBarDataValueStyle>
        </div>
        <div className="fourth-data-collection col-lg-3 hidden-md hidden-sm hidden-xs">
          <ActivityBarDataPointStyle>DATA POINT</ActivityBarDataPointStyle>
          <ActivityBarDataValueStyle>Data</ActivityBarDataValueStyle>
        </div>
      </ActivityBarDataStyle>
      <ActivityBarDataArrowStyle className="col-xs-1 hidden-sm hidden-xs">
        <Link to={`/activities/${props.activityId}`}>
          <img
            className="activity-barRightArrow"
            src={down}
            alt="Right Arrow"
          />
        </Link>
      </ActivityBarDataArrowStyle>
    </ActivityBarStyle>
  );
};

Activity.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
  activityId: PropTypes.string.isRequired
};

export default Activity;
