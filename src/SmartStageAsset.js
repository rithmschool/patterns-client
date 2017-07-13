import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import StageAsset from './StageAsset';

const stageAssetSource = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },
  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert( // eslint-disable-line no-alert
        `You dropped ${props.name} from ${props.stageName} into ${dropResult.id}!`,
      );
    }
  },
};

class SmartStageAsset extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 15,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        <StageAsset {...this.props} />
      </div>
    );
  }
}

export default DragSource('stageAsset', stageAssetSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(SmartStageAsset);
