import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SmartStageAsset from '../organisms/SmartStageAsset';
import LineStyle from '../atoms/LineStyle';

const StageStyle = styled.div`
  .isDragging {
    font-size: 15;
    font-weight: bold;
    cursor: move;
  }
  color: #354052;
  font-size: 16px;
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
