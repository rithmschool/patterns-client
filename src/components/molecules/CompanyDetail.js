import React from 'react';
import PropTypes from 'prop-types';
import down from '../../images/icon-chevron-right-gray.svg';
// import './CompanyDetail.css';
import LongDataDisplay from '../atoms/LongDataDisplay';

const CompanyDetail = props => {
  return (
    <div>
      <LongDataDisplay
        companyId={props.companyId}
        name={props.name}
        src={down}
      />
    </div>
  );
};

CompanyDetail.propTypes = {
  name: PropTypes.string.isRequired,
  companyId: PropTypes.string.isRequired
};

export default CompanyDetail;
