import React, { Component } from 'react';
import styled from 'styled-components';
import StageItem from '../atoms/StageItem';

class StageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(event) {
    //call handleSubmit somehow?
  }

  render() {
    return <StageItem />;
  }
}

export default StageList;
