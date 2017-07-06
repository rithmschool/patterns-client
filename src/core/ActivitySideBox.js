import React from 'react';
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
        <div className="activity-name"><h3>{props.data.name}</h3></div>
        <div className="arrow"><img src={down} alt="Down Arrow" /></div>
      </div>
      {menuItems}
    </div>
  )
};

export default ActivitySideBox;
