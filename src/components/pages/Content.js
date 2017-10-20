import React from 'react';
import InnerContent from '../organisms/InnerContent';
import TopNav from '../atoms/TopNav';
import Header from '../organisms/Header';
import ContentHolderStyle from '../atoms/ContentHolderStyle';
import styled from 'styled-components';

const NavbarStyle = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
`;

const ContentNavbarStyle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  color: #a0a1a5;
  margin: 0;
  text-align: left;
`;

const Content = props => (
  <ContentHolderStyle>
    <TopNav />
    <Header />
    <InnerContent />
  </ContentHolderStyle>
);

export default Content;
