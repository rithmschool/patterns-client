import React, { Component } from 'react';
import './Content.css';
import InnerContent from './InnerContent';
import TopNav from './TopNav';
import Header from './Header';

class Content extends Component {
  render() {
  return(
    <div className='content-holder'> 
      <TopNav />
      <Header />
      <InnerContent />
    </div>
  )};
}

export default Content;
