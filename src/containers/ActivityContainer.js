import React from 'react';
import './ActivityContainer.css';
import BrowseCompanies from '../components/BrowseCompanies';
import StageContainer from '../containers/StageContainer';

const ActivityContainer = props => {
  return (
    <div className="ActivityContainerHolder row">
      <BrowseCompanies />
      <StageContainer />
    </div>
  );
};

export default ActivityContainer;
