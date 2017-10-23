import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StyleVariables from '../../StyleVariables';
import LineStyle from '../atoms/LineStyle';

const BrowseCompaniesStyle = styled.div`
  color: #354052;
  font-size: 16px;
`;
const FindCompaniesStyle = styled.div`
  height: 96px;
  background-color: white;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  text-align: left;
  color: #354052;
`;

const BrowseCompsStyle = styled.div`
  margin: 0px;
  background-color: white;
`;

const SearchIconStyle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background-color: ${StyleVariables['pale-grey']};
  margin: 24px 12px 12px 12px;
`;

const FindCompaniesTextStyle = styled.p`margin: 24px 12px 12px 12px;`;

const BrowseCompanies = props => (
  <BrowseCompaniesStyle className="col-lg-3">
    <p> Browse Companies ...</p>
    <LineStyle />
    <BrowseCompsStyle className="row">
      <SearchIconStyle className="col-lg-1" />
      <FindCompaniesStyle className="col-lg-8">
        <FindCompaniesTextStyle>
          {' '}
          <Link to="/assets/companies">Find Companies </Link>{' '}
        </FindCompaniesTextStyle>
      </FindCompaniesStyle>
    </BrowseCompsStyle>
  </BrowseCompaniesStyle>
);

export default BrowseCompanies;
