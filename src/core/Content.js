import React from 'react';
import './Content.css';
import InnerContent from './InnerContent';
import TopNav from './TopNav';
import Header from './Header';

const Content = (props) => (
  <div className='content-holder'> 
    <TopNav />
    <Header toggleModal={props.toggleModal} />
    <InnerContent />
  </div>
);

export default Content;
