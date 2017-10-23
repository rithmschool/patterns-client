import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PrimarySecondaryButton from "../atoms/PrimarySecondaryButton";
import StageList from "../organisms/StageList";
import selectArrow from "../../images/icon-chevron-down-gray.svg";

const ActivityFormStyle = styled.form`
  background-color: #e7e8ec;
  margin: 0px;
  padding: 24px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  button {
    margin-top: 24px;
  }
  label {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #a0a1a5;
    line-height: 18px;
  }
  .text-input {
    border: 1px solid #c3cbd3;
    border-radius: 4px;
    height: 36px;
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 18px;
    padding-left: 12px;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    color: #a0a1a5;
  }
  #asset-type {
    height: 36px;
    width: 100%;
    display: block;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 18px;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    color: #585b60;
    padding-left: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${selectArrow}) no-repeat #ffffff;
    background-position: 96%;
  }
  .button-wrap {
    padding-top: 24px;
    text-align: right;
  }
`;

const ActivityForm = props => (
  <ActivityFormStyle>
    <div className="form-group">
      <label htmlFor="activity-name">Activity Name</label>
      <input
        className="text-input"
        type="text"
        name="name"
        value={props.name}
        onChange={props.handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="asset-type">Asset Type</label>
      <select name="asset-type" id="asset-type" onChange={props.dropdownChange}>
        <option value={props.companyTypeId}> Company</option>
      </select>
    </div>
    <StageList
      handleDelete={props.handleDelete}
      handleAdd={props.handleAdd}
      stageItemComponents={props.stageItemComponents}
    />
    <div className="button-wrap">
      <PrimarySecondaryButton
        primary
        onClick={props.handleSubmit}
        disabled={props.saving}
      >
        SAVE
      </PrimarySecondaryButton>
      <PrimarySecondaryButton onClick={props.cancelModal}>
        CANCEL
      </PrimarySecondaryButton>
    </div>
  </ActivityFormStyle>
);

ActivityForm.propTypes = {
  name: PropTypes.string,
  companyTypeId: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  dropdownChange: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  cancelModal: PropTypes.func.isRequired
};

export default ActivityForm;
