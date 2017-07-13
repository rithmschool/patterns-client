import React from 'react';
import './Stage.css';
import SmartStageAsset from './SmartStageAsset';

const Stage = props => {
  let allAssets = props.assets.map((val,idx) => (
    <SmartStageAsset 
      key={val._id} 
      stageId={props.stageId}
      stageName={props.name}
      assetId={val._id} 
      name={val.name}
      logo={val.logo}
      position={idx} 
    />
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
