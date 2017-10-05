import styled from 'styled-components';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StageItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stageItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addStageItem(this.state);
    this.setState({
      stageItem: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            onChange={this.handleChange}
            placeholder="Add a stage"
            name="stageItem"
            value={this.state.stageItem}
          />
        </div>
        <input hidden type="submit" />
      </form>
    );
  }
}

StageItemForm.propTypes = {
  addStageItem: PropTypes.func.isRequired
};

export default StageItemForm;
