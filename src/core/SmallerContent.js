import React from 'react';
import './SmallerContent.css';
import InnerContent from './InnerContent';
import TopNav from './TopNav';
import Header from './Header';

const SmallerContent = () => (
  <div className='smaller-content-holder'> 
    <TopNav />
    <Header />
    <InnerContent />
  </div>
);

export default SmallerContent;
