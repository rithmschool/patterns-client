import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import remove from '../../images/icon-x-circle-gray.svg';

const Stage = styled.div`
  p.stage-item {
    width: 100px;
    height: 24px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.71;
    text-align: left;
    color: #25272a;
    margin-top: 6px;
    margin-bottom: 6px;
    display: inline-block;
  }
  img {
    height: 16px;
    width: 16px;
    float: right;
    margin: 10px 0px 10px 0px;
    cursor: pointer;
  }
  .stage-line {
    border-bottom: 1px solid rgba(194, 203, 211, 0.5);
    width: 100%;
  }
`;

class StageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stage className="stage-line">
        <p className="stage-item">{this.props.stageItem}</p>
        <img
          onClick={this.props.handleDelete}
          src={remove}
          alt="Remove Stage"
        />
        <div className="stage-line" />
      </Stage>
    );
  }
}

StageItem.propTypes = {
  stageItem: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
};

export default StageItem;
