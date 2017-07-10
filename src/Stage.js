import React from 'react';
import './Stage.css';
import StageAsset from './StageAsset';

const Stage = props => {
  let allAssets = props.assets.map(val => (
    <StageAsset key={val._id} name={val.name}/>
  ));
  return(
    <div className='stageText'>
      <p> {props.name} </p>
      <hr className='line' /> 
    {allAssets}
  </div>
  );
}

export default Stage;
