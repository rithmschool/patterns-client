import React from 'react';
import PropTypes from 'prop-types';
import './Stage.css';
import SmartStageAsset from '../molecules/SmartStageAsset';
import styled from 'styled-components';

const StageStyle = styled.div`
  .isDragging {
    font-size: 15;
    font-weight: bold;
    cursor: move;
  }
  color: #354052;
  font-size: 16px;
`;

const LineStyle = styled.hr`
  height: 2px;
  border: solid 1px #ccd3da;
`;

const Stage = props => {
  let allAssets = props.assets.map((val, idx) => (
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
  return (
    <StageStyle>
      <p> {props.name} </p>
      <LineStyle />
      {allAssets}
    </StageStyle>
  );
};

Stage.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string
    })
  ),
  stageIdx: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  moveCard: PropTypes.func.isRequired,
  moveAndUpdateCard: PropTypes.func.isRequired,
  dispatchState: PropTypes.func.isRequired
};

export default Stage;
