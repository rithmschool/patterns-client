import React from 'react';
import './Stage.css';
import StageAsset from './StageAsset';

const Stage = props => {
  let allAssets = props.assets.map(val => (
    <StageAsset key={val._id} assetId={val._id} name={val.name} logo={val.logo} />
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
