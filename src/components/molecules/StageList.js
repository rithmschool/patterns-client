import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StageItem from '../atoms/StageItem';
import StageItemForm from './StageItemForm';

class StageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stageItems: [
        {
          id: 0,
          stageItem: 'Stage A'
        }
      ],
      nextId: 1
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newItem) {
    let newItems = this.state.stageItems.slice();
    newItems.push({
      id: this.state.nextId++,
      stageItem: newItem.stageItem
    });

    this.setState({
      stageItems: newItems,
      nextId: this.state.nextId
    });
  }

  handleDelete(id) {
    let newItems = this.state.stageItems.filter(item => item.id !== id);
    this.setState({
      stageItems: newItems
    });
  }

  render() {
    let stageItems = this.state.stageItems.map(item => (
      <StageItem
        stageItem={item.stageItem}
        key={item.id}
        handleDelete={this.handleDelete.bind(this, item.id)}
      />
    ));

    return (
      <div>
        <label>Activity Stages</label>
        <StageItemForm addStageItem={this.handleAdd} />
        {stageItems}
      </div>
    );
  }
}

export default StageList;
