import React, { Component } from 'react';
import StageItemForm from '../molecules/StageItemForm';
import StageItem from '../atoms/StageItem';

class StageList extends Component {
  render() {
    let stageItems = this.props.stageItemComponents.map(item => (
      <StageItem
        stageItem={item.stageItem}
        key={item.id}
        id={item.id}
        handleDelete={this.props.handleDelete}
      />
    ));

    return (
      <div>
        <label>Activity Stages</label>
        {stageItems}
        <StageItemForm handleAdd={this.props.handleAdd} />
      </div>
    );
  }
}

export default StageList;
