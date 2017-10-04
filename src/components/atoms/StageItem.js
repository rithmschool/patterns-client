import React, { Component } from 'react';
import styled from 'styled-components';

const Stage = styled.form`
  .add-new-stage {
    width: 100%;
    height: 24px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.71;
    text-align: left;
    color: #a0a1a5;
    background-color: #e7e8ec;
  }
`;

class StageItem extends Component {
  onKeyPress(event) {
    if (event.which === 13) {
      event.preventDefault();
      console.log('inside onKeyPress');
      //append item to the list with a delete x to remove
    }
  }

  render() {
    return (
      <div>
        <Stage onKeyPress={this.onKeyPress.bind(this)}>
          <div className="form-group">
            <label htmlFor="activity-stages">Activity Stages</label>
            <ol />
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
        </Stage>
      </div>
    );
  }
}

export default StageItem;
