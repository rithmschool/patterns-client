import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ActivityContainer.css'
import BrowseCompanies from './BrowseCompanies';
import Stage from './Stage';

class ActivityContainer extends Component {
  render(){
    let stages = this.props.activity.stages.map(val => {
      return (
        <div key={val._id} className='stage col-lg-3'>
          <Stage
            key={val._id}
            name={val.name}
            assets={val.assets}
          />
        </div>
      );
    });
    return(
      <div className='ActivityContainerHolder row'>
        <BrowseCompanies />
        {stages}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activity: state.activity,
  };
}

export default connect(mapStateToProps)(ActivityContainer);
