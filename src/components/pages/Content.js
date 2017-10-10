import React from 'react';
import './Content.css';
import InnerContent from '../organisms/InnerContent';
import TopNav from '../atoms/TopNav';
import Header from '../organisms/Header';

const Content = props => (
  <div className="content-holder">
    <TopNav />
    <Header />
    <InnerContent />
  </div>
);

export default Content;
