import React from "react";
import { Link } from "react-router-dom";
import "./StageAsset.css";
import down from "../images/icon-chevron-right-gray.svg";
import PropTypes from "prop-types";

const StageAsset = props => {
  let logo = props.logo || null;
  let pictureStyle = {
    backgroundImage: `url(${logo})`
  };
  return (
    <div className="stageAsset col xs-12 row ">
      <div className="company-logo col-xs-1" style={pictureStyle} />
      <div className="company-name col-xs-3">
        <Link to={`/assets/companies/${props.assetId}`}>{props.name}</Link>
      </div>
      <div className="company-arrow col-xs-offset-3 col-xs-1 ">
        <Link to={`/assets/companies/${props.assetId}`}>
          <img className="compRightArrow" src={down} alt="Right Arrow" />
        </Link>
      </div>
    </div>
  );
};

StageAsset.propTypes = {
  logo: PropTypes.string,
  assetId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default StageAsset;
