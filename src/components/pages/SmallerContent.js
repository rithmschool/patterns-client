import React from 'react';
import './SmallerContent.css';
import InnerContent from '../organisms/InnerContent';
import TopNav from '../atoms/TopNav';
import Header from '../organisms/Header';
import styled from 'styled-components';

const SmallerContentHolderStyle = styled.div`
  background-color: #eef0f3;
  display: inline-block;
  min-height: 100vh;
  @media (min-width: 204.8px) {
    width: calc(100% - (0.4 * 360px));
  }
  @media (min-width: 768px) {
    width: calc(100% - (1.5 * 352px));
  }
  @media (min-width: 1024px) {
    width: calc(100% - (2 * 352px));
  }
`;

const SmallerContent = () => (
  <SmallerContentHolderStyle>
    <TopNav />
    <Header />
    <InnerContent />
  </SmallerContentHolderStyle>
);

export default SmallerContent;
