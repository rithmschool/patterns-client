import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Stage from './Stage';

const stageTarget = {
  drop(props, monitor, component) {
    return {
      id: props.name,
    };
  }
};

class SmartStage extends Component {
  render(){
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div>
        <Stage {...this.props} />
      </div>
    )
  }
}

export default DropTarget('stageAsset', stageTarget, (connectDragSource, monitor) => ({
  connectDropTarget: connectDragSource.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()}))(SmartStage);
