import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import PropTypes from 'prop-types';
import HTML5Backend from 'react-dnd-html5-backend';
import { updateStage } from '../services/api';
import SmartStage from '../components/organisms/SmartStage';
import { changeAsset } from '../store/actions/actionCreators';

const ModifiedBackend = (...args) => {
  const instance = new HTML5Backend(...args);

  // Fix Chrome 59 not sending a DragEnd after Drop, which other browsers do and react-dnd expects - issue noted in Github
  // Note: Review issue #789 in React-dnd to see if it has been resolved
  const originalTopDrop = instance.handleTopDrop;
  const originalTopDragEndCapture = instance.handleTopDragEndCapture;
  let dragEndTimeout;
  instance.handleTopDrop = (e, ...args) => {
    dragEndTimeout = setTimeout(() => {
      originalTopDragEndCapture(e, ...args);
    }, 0);
    originalTopDrop(e, ...args);
  };
  instance.handleTopDragEndCapture = (e, ...args) => {
    clearTimeout(dragEndTimeout);
    originalTopDragEndCapture(e, ...args);
  };

  return instance;
};

class StageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stages: this.props.activity.stages
    };
    this.moveCard = this.moveCard.bind(this);
    this.moveAndUpdateCard = this.moveAndUpdateCard.bind(this);
    this.dispatchState = this.dispatchState.bind(this);
  }

  moveCard(dragIndex, hoverIndex, dragListIdx) {
    const allStages = this.state.stages;
    const dummyStageAssets = allStages[dragListIdx].assets;
    const dragStage = dummyStageAssets[dragIndex];
    let newStageAssets = [
      ...dummyStageAssets.slice(0, dragIndex),
      ...dummyStageAssets.slice(dragIndex + 1)
    ];
    newStageAssets.splice(hoverIndex, 0, dragStage);
    let newStage = {
      ...allStages[dragListIdx],
      assets: newStageAssets
    };
    let newStages = [
      ...allStages.slice(0, dragListIdx),
      newStage,
      ...allStages.slice(dragListIdx + 1)
    ];
    this.setState({
      ...this.state,
      stages: newStages
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
      assets: prevStageAssets
    };
    // find next list and add dragged item
    const nextStageAssets = allStages[targetListIdx].assets.slice();
    nextStageAssets.splice(hoverIndex, 0, movingAsset);
    const nextStage = {
      ...allStages[targetListIdx],
      assets: nextStageAssets
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
      stages: newStages
    });
  }

  dispatchState(prevIdx, nextIdx) {
    const prevId = this.state.stages[prevIdx]._id;
    const nextId = this.state.stages[nextIdx]._id;
    const prevBody = { assets: this.state.stages[prevIdx].assets };
    const nextBody = { assets: this.state.stages[nextIdx].assets };
    updateStage(prevId, prevBody)
      .then(prevRes => updateStage(nextId, nextBody))
      .then(nextRes => this.props.changeAsset(this.state.stages))
      .catch(err => console.log(err));
  }

  render() {
    let stages = this.state.stages.map((val, idx) => {
      return (
        <div key={val._id} className="stage col-lg-3">
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
    return <div>{stages}</div>;
  }
}

StageContainer.propTypes = {
  changeAsset: PropTypes.func.isRequired,
  activity: PropTypes.shape({
    stages: PropTypes.array
  })
};

const mapStateToProps = state => ({
  activity: state.activity
});

const mapDispatchToProps = dispatch => {
  return {
    changeAsset: stages => dispatch(changeAsset(stages))
  };
};

export default DragDropContext(ModifiedBackend)(
  connect(mapStateToProps, mapDispatchToProps)(StageContainer)
);
