import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SmartStage from './SmartStage';
import { setActiveActivity, changeAsset } from './actions/action';
import { BASE_URL } from './actions/auth';

class StageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stages: this.props.activity.stages,
    };
    this.moveCard = this.moveCard.bind(this);
    this.moveAndUpdateCard = this.moveAndUpdateCard.bind(this);
    this.dispatchState = this.dispatchState.bind(this);
  }

  moveCard(dragIndex, hoverIndex, dragListIdx) {
    const allStages = this.state.stages;
    const dummyStageAssets = allStages[dragListIdx].assets;
    const dragStage = dummyStageAssets[dragIndex];
    let newStageAssets = [...dummyStageAssets.slice(0, dragIndex), ...dummyStageAssets.slice(dragIndex + 1)];
    newStageAssets.splice(hoverIndex, 0, dragStage);
    let newStage = {
      ...allStages[dragListIdx],
      assets: newStageAssets,
    };
    let newStages = [...allStages.slice(0, dragListIdx), newStage, ...allStages.slice(dragListIdx + 1)];
    this.setState({
      ...this.state,
      stages: newStages,
    });
  }

  moveAndUpdateCard(dragIndex, hoverIndex, dragListIdx, targetListIdx) {
    const allStages = this.state.stages;
    // find previous list and remove dragged item
    const prevStageAssets = allStages[dragListIdx].assets.slice();
    const movingAsset = prevStageAssets[dragIndex];
    prevStageAssets.splice(dragIndex, 1);
    const prevStage = {
      ...allStages[dragListIdx],
      assets: prevStageAssets,
    };
    // find next list and add dragged item
    const nextStageAssets = allStages[targetListIdx].assets.slice();
    nextStageAssets.length !== 0 ? nextStageAssets.splice(hoverIndex, 0, movingAsset) : nextStageAssets.push(movingAsset);
    const nextStage = {
      ...allStages[targetListIdx],
      assets: nextStageAssets,
    };
    // create new array and pass through stages in order
    const modObj = {};
    modObj[dragListIdx] = prevStage;
    modObj[targetListIdx] = nextStage;
    const newStages = [];
    for (let i = 0; i < allStages.length; i++) {
      if (modObj.hasOwnProperty(i)) {
        newStages.push(modObj[i]);
      } else {
        newStages.push(allStages[i]);
      }
    }
    this.setState({
      ...this.state,
      stages: newStages,
    });
  }

  dispatchState(prevIdx, nextIdx) {
    const prevId = this.state.stages[prevIdx]._id;
    const nextId = this.state.stages[nextIdx]._id;
    const prevBody = {assets: this.state.stages[prevIdx].assets};
    const nextBody = {assets: this.state.stages[nextIdx].assets};
    axios.patch(`${BASE_URL}/stages/${prevId}`, prevBody)
      .then(prevRes => {
        return axios.patch(`${BASE_URL}/stages/${nextId}`, nextBody)
      })
      .then(nextRes => {
        this.props.changeAsset(this.state.stages);
      })
      .catch(err => console.log(err));
  }

  render(){
    let stages = this.state.stages.map((val,idx) => {
      return (
        <div key={val._id} className='stage col-lg-3'>
          <SmartStage
            key={val._id}
            stageId={val._id}
            stageIdx={idx}
            name={val.name}
            assets={val.assets}
            items={val.assets.length}
            moveCard={this.moveCard}
            moveAndUpdateCard={this.moveAndUpdateCard}
            dispatchState={this.dispatchState}
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

export default DragDropContext(HTML5Backend)(connect(mapStateToProps, { setActiveActivity, changeAsset })(StageContainer));
