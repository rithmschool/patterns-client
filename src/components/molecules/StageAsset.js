import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CompanyNameStyle from '../atoms/CompanyNameStyle';
import CompanyArrowStyle from '../atoms/CompanyArrowStyle';
import down from '../../images/icon-chevron-right-gray.svg';

const StageAssetStyle = styled.div`
  background-color: white;
  margin: 0px;
`;

const CompanyLogoStyle = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  backgroundimage: url(${props => props.logo});
`;

const StageAsset = props => {
  const logo = props.logo || null;
  return (
    <StageAssetStyle className="col xs-12 row ">
      <CompanyLogoStyle className="col-xs-1" logo={logo} />
      <CompanyNameStyle className="col-xs-3">
        <Link to={`/assets/companies/${props.assetId}`}>{props.name}</Link>
      </CompanyNameStyle>
      <CompanyArrowStyle className="col-xs-offset-3 col-xs-1 ">
        <Link to={`/assets/companies/${props.assetId}`}>
          <img src={down} alt="Right Arrow" />
        </Link>
      </CompanyArrowStyle>
    </StageAssetStyle>
  );
};

StageAsset.propTypes = {
  logo: PropTypes.string,
  assetId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default StageAsset;
