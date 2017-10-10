import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import StageAsset from '../atoms/StageAsset';

const stageAssetSource = {
  beginDrag(props) {
    return {
      assetId: props.assetId,
      stageIdx: props.stageIdx,
      index: props.index
    };
  },
  endDrag(props, monitor) {
    const prevIdx = props.stageIdx;
    const nextIdx = monitor.getItem().stageIdx;
    props.dispatchState(prevIdx, nextIdx);
  }
};

const stageAssetTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    const dragListIdx = monitor.getItem().stageIdx;
    const targetListIdx = props.stageIdx;

    if (dragIndex === hoverIndex && dragListIdx === targetListIdx) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    const hoverIdxLower = dragIndex < hoverIndex && hoverClientY < hoverMiddleY;
    const hoverIdxHigher =
      dragIndex > hoverIndex && hoverClientY > hoverMiddleY;
    if (hoverIdxLower || hoverIdxHigher) return;

    if (dragListIdx === targetListIdx) {
      props.moveCard(dragIndex, hoverIndex, dragListIdx);
      monitor.getItem().index = hoverIndex;
    } else if (dragListIdx !== targetListIdx) {
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

class SmartStageAsset extends Component {
  render() {
    const { connectDragSource, isDragging, connectDropTarget } = this.props;
    return connectDragSource(
      connectDropTarget(
        <div className="isDragging" style={{ opacity: isDragging ? 0.5 : 1 }}>
          <StageAsset {...this.props} />
        </div>
      )
    );
  }
}

export default DropTarget(
  'stageAsset',
  stageAssetTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    item: monitor.getItem()
  })
)(
  DragSource('stageAsset', stageAssetSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))(SmartStageAsset)
);

SmartStageAsset.PropTypes = {
  assetId: PropTypes.string.isRequired,
  stageIdx: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  dispatchState: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  moveAndUpdateCard: PropTypes.func.isRequired
};
