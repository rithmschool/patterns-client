import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from '../atoms/ListItem';

class StageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onKeyPress(event) {
    if (event.which === 13) {
      event.preventDefault();
      console.log('inside onKeyPress');
      //append item to the list with a delete x to remove
    }
  }

  handleChange(event) {
    //call handleSubmit somehow?
  }

  render() {
    return (
      <ListItem onKeyPress={this.onKeyPress}>
        <div className="form-group">
          <label htmlFor="activity-stages">Activity Stages</label>
          <input
            className="add-new-stage"
            type="text"
            name="stage"
            placeholder="Add new stage"
            value={this.props.stage}
            onChange={this.props.handleChange}
          />
          <div className="stage-line" />
        </div>
      </ListItem>
    );
  }
}

export default StageList;
