import React from "react";
import "./Stage.css";
import SmartStageAsset from "./SmartStageAsset";
import PropTypes from "prop-types";

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
    <div className="stageText">
      <p> {props.name} </p>
      <hr className="line" />
      {allAssets}
    </div>
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
