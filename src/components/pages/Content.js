import React from 'react';
import InnerContent from '../organisms/InnerContent';
import TopNav from '../atoms/TopNav';
import Header from '../organisms/Header';
import ContentHolderStyle from '../atoms/ContentHolderStyle';

const Content = props => (
  <ContentHolderStyle>
    <TopNav />
    <Header />
    <InnerContent />
  </ContentHolderStyle>
);

export default Content;
