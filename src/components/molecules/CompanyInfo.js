import React, { Component } from 'react';
import LongDataDisplay from '../atoms/LongDataDisplay';

class CompanyInfo extends Component {
  render() {
    return (
      <div>
        <LongDataDisplay id="xx1" key="xx1" name="Brand" />
        <LongDataDisplay id="xx2" key="xx2" name="Employees" />
        <LongDataDisplay id="xx3" key="xx3" name="Funding" />
      </div>
    );
  }
}

export default CompanyInfo;
