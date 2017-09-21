import React, { Component } from 'react';
import './ActivityContainer.css';
import BrowseCompanies from './BrowseCompanies';
import StageContainer from './StageContainer';

const ActivityContainer = props => {
  return (
    <div className="ActivityContainerHolder row">
      <BrowseCompanies />
      <StageContainer />
    </div>
  );
};

export default ActivityContainer;
