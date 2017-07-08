import React from 'react';
import { Link } from 'react-router-dom';
import down from '../images/icon-chevron-right-gray.svg';

const ActivitySideBox = (props) => {
  let menuItems = props.data.stages.map(val => {
    return (
      <div key={val._id} className="menu-item">
        <h4>{val.name}</h4>
        <h6 className="count-aside">{val.assets.length}</h6>
      </div>
    )
  });
  return (
    <div className="activity">
      <div className="title">
        <div className="active-toggle"></div>
        <div className="activity-name">
          <h3><Link to={`/activities/${props.data._id}`}>{props.data.name}</Link></h3>
        </div>
        <div className="arrow"><img src={down} alt="Down Arrow" /></div>
      </div>
      {menuItems}
    </div>
  )
};

export default ActivitySideBox;
