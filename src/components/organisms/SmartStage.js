import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import Stage from './Stage';
import styled from 'styled-components';

const SmartStageStyle = styled.div`height: 200px;`;

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
      //DnD needs native react component
      <div className="dragTarget col-lg-3">
        <SmartStageStyle>
          <Stage {...this.props} />
        </SmartStageStyle>
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

SmartStage.propTypes = {
  name: PropTypes.string.isRequired,
  stageId: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  stageIdx: PropTypes.number.isRequired,
  moveAndUpdateCard: PropTypes.func.isRequired
};
