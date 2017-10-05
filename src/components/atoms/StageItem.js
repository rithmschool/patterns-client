import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import remove from '../../images/icon-x-circle-gray.svg';

const Stage = styled.div`
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
  img {
    height: 16px;
    width: 16px;
    float: right;
    margin: 4px;
    cursor: pointer;
  }
`;

class StageItem extends Component {
  constructor(props) {
    super(props);
  }

  // onKeyPress(event) {
  //   if (event.which === 13) {
  //     event.preventDefault();
  //     console.log('inside onKeyPress');
  //   }
  // }

  render() {
    return (
      <Stage /*onKeyPress={this.onKeyPress.bind(this)}*/>
        <p className="add-new-stage">
          {this.props.stageItem}
          <img
            onClick={this.props.handleDelete}
            src={remove}
            alt="Remove Stage"
          />
        </p>
      </Stage>
    );
  }
}

StageItem.propTypes = {
  stageItem: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
};

export default StageItem;
