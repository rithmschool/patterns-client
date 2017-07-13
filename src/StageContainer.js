import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SmartStage from './SmartStage';

class StageContainer extends Component {
  render(){
    let stages = this.props.activity.stages.map(val => {
      return (
        <div key={val._id} className='stage col-lg-3'>
          <SmartStage
            key={val._id}
            stageId={val._id}
            name={val.name}
            assets={val.assets}
          />
        </div>
      );
    });
    return(
      <div>
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

export default DragDropContext(HTML5Backend)(connect(mapStateToProps)(StageContainer));
