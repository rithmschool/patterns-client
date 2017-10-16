import React from 'react';
import styled from 'styled-components';
import arrow from '../../images/icon-chevron-right-gray.svg';

const TopNavStyle = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 1px 0 rgba(0, 0, 0, 0.04);
  display: inline-block;
  vertical-align: middle;

  @media (min-width: 768px) {
    height: 54px;
  }

  @media (min-width: 1024px) {
    height: 72px;
  }
`;

const EconomyTextStyle = styled.h1`
  color: #a0a1a5;
  text-align: left;
  font-weight: 500;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 18px;
    margin: 18px 9px 18px 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
    margin: 24px 12px 24px 24px;
  }
`;

const SelectStyle = styled.select`
  border-radius: 4px;
  background-color: white;
  border: solid 1px #c3cbd3;
  margin-left: 12px;
  vertical-align: top;

  @media (min-width: 768px) {
    width: 150px;
    height: 18px;
    margin-top: 18px;
  }

  @media (min-width: 1024px) {
    width: 200px;
    height: 24px;
    margin-top: 24px;
  }
`;

const TopNav = props => (
  <TopNavStyle>
    <EconomyTextStyle>US Economy</EconomyTextStyle>
    <img src={arrow} alt="Arrow breadcrumb" />
    <SelectStyle>
      <option value="value1" selected>
        {' '}
        Lagos
      </option>
      <option value="value2">San Francisco</option>
      <option value="value3">Austin</option>
    </SelectStyle>
  </TopNavStyle>
);

export default TopNav;
