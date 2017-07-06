import React from 'react';
import { connect } from 'react-redux';
import './Content.css';
import InnerContent from './InnerContent';
import TopNav from './TopNav';
import Header from './Header';
import { toggleModal } from '../actions/auth';

const Content = props => (
  <div className='content-holder'> 
    <TopNav />
    <Header toggleModal={props.toggleModal} />
    <InnerContent />
  </div>
);

export default connect(undefined, { toggleModal })(Content);
