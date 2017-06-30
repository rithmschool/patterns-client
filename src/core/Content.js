import React from 'react';
import './Content.css';
import InnerContent from './InnerContent';
import TopNav from './TopNav';
import Header from './Header';

const Content = () => (
  <div className='content-holder'> 
    <TopNav />
    <Header />
    <InnerContent />
  </div>
);

export default Content;
