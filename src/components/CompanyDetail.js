import React from 'react';
import down from '../images/icon-chevron-right-gray.svg';
import './CompanyDetail.css';
import PropTypes from 'prop-types';

const CompanyDetail = props => {
  return (
    <div className="company-bar row">
      <div className="company-bar-logo col-xs-1" />
      <div className="company-bar-name col-xs-3">{props.name}</div>
      <div className="company-bar-data col-xs-7 row">
        <div className="first-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs">
          <div className="company-bar-data-point">DATA POINT</div>
          <div className="company-bar-data-value">Data</div>
        </div>
        <div className="second-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs">
          <div className="company-bar-data-point">DATA POINT</div>
          <div className="company-bar-data-value">Data</div>
        </div>
        <div className="third-data-collection col-lg-3 col-md-4 hidden-sm hidden-xs">
          <div className="company-bar-data-point">DATA POINT</div>
          <div className="company-bar-data-value">Data</div>
        </div>
        <div className="fourth-data-collection col-lg-3 hidden-md hidden-sm hidden-xs">
          <div className="company-bar-data-point">DATA POINT</div>
          <div className="company-bar-data-value">Data</div>
        </div>
      </div>
      <div className="company-bar-arrow col-xs-1 hidden-sm hidden-xs">
        <img className="company-barRightArrow" src={down} alt="Right Arrow" />
      </div>
    </div>
  );
};

CompanyDetail.propTypes = {
  name: PropTypes.string.isRequired
};

export default CompanyDetail;
