import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const StageForm = styled.div`
  input {
    width: 100%;
    height: 30px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.71;
    text-align: left;
    color: #a0a1a5;
    background-color: #e7e8ec;
    margin-top: 6px;
    margin-bottom: 6px;
    padding-bottom: 6px;
  }
  input.stage-line {
    border-bottom: 1px solid rgba(194, 203, 211, 0.5);
    width: 100%;
  }
  input::-webkit-input-placeholder {
    /* Chrome */
    color: #a0a1a5;
  }
  input:-ms-input-placeholder {
    /* IE 10+ */
    color: #a0a1a5;
  }
  input::-moz-placeholder {
    /* Firefox 19+ */
    color: #a0a1a5;
    opacity: 1;
  }
  input:-moz-placeholder {
    /* Firefox 4 - 18 */
    color: #a0a1a5;
    opacity: 1;
  }
`;

class StageItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stageItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onKeyPress(event) {
    if (event.which === 13) {
      event.preventDefault();
      this.props.handleAdd(this.state);
      this.setState({
        stageItem: ''
      });
    }
  }

  render() {
    return (
      <StageForm onKeyPress={this.onKeyPress.bind(this)}>
        <div>
          <input
            className="stage-line"
            onChange={this.handleChange}
            placeholder="Add new stage"
            name="stageItem"
            value={this.state.stageItem}
          />
        </div>
      </StageForm>
    );
  }
}

StageItemForm.propTypes = {
  addStageItem: PropTypes.func
};

export default StageItemForm;
