import React from 'react';
import './Stage.css';
import SmartStageAsset from './SmartStageAsset';

const Stage = props => {
  let allAssets = props.assets.map((val,idx) => (
    <SmartStageAsset 
      key={val._id} 
      stageIdx={props.stageIdx}
      stageName={props.name}
      assetId={val._id} 
      name={val.name}
      logo={val.logo}
      index={idx}
      moveCard={props.moveCard}
      moveAndUpdateCard={props.moveAndUpdateCard}
      dispatchState={props.dispatchState}
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
