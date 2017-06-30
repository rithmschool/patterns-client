import React from 'react';
import './Stage.css';
import StageCompany from './StageCompany';

const Stage = (props) => {
  return(
    <div className='stageText'>
      <p> {props.name} </p>
      <hr className='line' /> 
    <StageCompany name={ props.companies[0].name }/>
  </div>
  );
}

export default Stage;
