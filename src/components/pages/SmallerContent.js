import React from 'react';
import './SmallerContent.css';
import InnerContent from '../organisms/InnerContent';
import TopNav from '../atoms/TopNav';
import Header from '../organisms/Header';

const SmallerContent = () => (
  <div className="smaller-content-holder">
    <TopNav />
    <Header />
    <InnerContent />
  </div>
);

export default SmallerContent;
