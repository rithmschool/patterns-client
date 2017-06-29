import React from 'react';
import './StageCompany.css';
import down from './images/icon-chevron-right-gray.svg';

const StageCompany = (props) => {
  const logo = props.logo;
  logo ? <img src={logo} alt={`${props.name}'s logo`}/> : null; 
  <div className='stageCompany col xs-12 row '>
    <div className='company-logo col-xs-1'>
     {logo}
    </div>
    <div className='company-name col-xs-3'>
      {props.name}
    </div>
    <div className='company-arrow col-xs-offset-3 col-xs-1 '>
       <img className = 'compRightArrow'src={down} alt="Right Arrow"/>
    </div>
  </div>
};
  
export default StageCompany;
