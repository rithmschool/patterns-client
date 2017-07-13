import React, { Component } from 'react';
import './ActivityContainer.css'
import BrowseCompanies from './BrowseCompanies';
import StageContainer from './StageContainer';

class ActivityContainer extends Component {
  render(){
    return(
      <div className='ActivityContainerHolder row'>
        <BrowseCompanies />
        <StageContainer />
      </div>
    )
  }
}

export default ActivityContainer;
