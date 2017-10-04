import React from 'react';
import styled from 'styled-components';
import PrimarySecondaryButton from '../atoms/PrimarySecondaryButton';

const ActivityForm = styled.form`
  background-color: #e7e8ec;
  margin: 0px;
  padding: 24px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px; }
  button {
    margin-top: 0px;
  }
  label {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #a0a1a5;
    line-height: 18px; }
  .text-input {
    border: 1px solid #c3cbd3;
    border-radius: 4px;
    height: 36px;
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 18px;
    padding-left: 12px; }
  #asset-type {
    height: 36px;
    width: 100%;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 18px; }
  .uploadcare--widget__button {
    padding-top: 36px;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 5px;
    width: 94px;
    cursor: pointer;
    background-color: #a0a1a5; }
  .uploadcare--widget__button:hover {
    background-color: #cb9c59; }
  .button-wrap {
    padding-top: 36px;
    text-align: right; }
    form .button-wrap .cancel,
    form .button-wrap .save {
      color: #ffffff;
      text-transform: uppercase;
      font-size: 12px;
      padding: 12px;
      width: 94px;
      margin: 0 0 0 12px;
      cursor: pointer; }
`;

const AddActivityForm = props => (
  <ActivityForm>
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
        <option value={props.companyTypeId}>Company</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="activity-stages">Activity Stages</label>
      {/*<StageList>{stageItems}</StageList> 
      <input
        className=""
        type="text"
        name="stage"
        value={props.stage}
        onChange={props.handleChange}
      />*/}
    </div>

    <div className="button-wrap">
      <PrimarySecondaryButton primary onClick={props.handleSubmit}>
        SAVE
      </PrimarySecondaryButton>
      <PrimarySecondaryButton onClick={props.cancelModal}>
        CANCEL
      </PrimarySecondaryButton>
    </div>
  </ActivityForm>
);

export default AddActivityForm;
