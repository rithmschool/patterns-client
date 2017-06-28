import React, { Component } from 'react';
import './Content.css';
import InnerContent from './InnerContent';

class Content extends Component {
  render() {
  return(
    <div className='content-holder'>    
      <InnerContent />
    </div>
  )};
}

export default Content;

