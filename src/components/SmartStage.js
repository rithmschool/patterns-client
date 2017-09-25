import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Stage from './Stage';

const stageTarget = {
  drop(props, monitor, component) {
    return {
      id: props.name,
      stage: props.stageId,
      stageIdx: props.stageIdx,
      items: props.items
    };
  },
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = 0;
    const dragListIdx = monitor.getItem().stageIdx;
    const targetListIdx = props.stageIdx;

    if (props.items === 0) {
      props.moveAndUpdateCard(
        dragIndex,
        hoverIndex,
        dragListIdx,
        targetListIdx
      );
      monitor.getItem().index = hoverIndex;
      monitor.getItem().stageIdx = targetListIdx;
    }
  }
};

class SmartStage extends Component {
  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="dragTarget">
        <Stage {...this.props} />
      </div>
    );
  }
}

export default DropTarget(
  'stageAsset',
  stageTarget,
  (connectDragSource, monitor) => ({
    connectDropTarget: connectDragSource.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)(SmartStage);
