import React, { Component } from 'react';
import CompanyDetail from './CompanyDetail';

class CompanyInfo extends Component {
  render() {
    return (
      <div>
        <CompanyDetail key="1" name="Brand" />
        <CompanyDetail key="2" name="Employees" />
        <CompanyDetail key="3" name="Funding" />
      </div>
    );
  }
}

export default CompanyInfo;
