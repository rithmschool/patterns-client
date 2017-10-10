import React from 'react';
import PropTypes from 'prop-types';
import down from '../../images/icon-chevron-right-gray.svg';
import './Company.css';
import LongDataDisplay from '../atoms/LongDataDisplay';

const Company = props => {
  let logo = props.logo || null;
  let pictureStyle = `url('${logo}')`;

  return (
    <div>
      <LongDataDisplay
        companyId={props.companyId}
        name={props.name}
        src={down}
        logo={pictureStyle}
      />
    </div>
  );
};

Company.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  companyId: PropTypes.string
};

export default Company;
