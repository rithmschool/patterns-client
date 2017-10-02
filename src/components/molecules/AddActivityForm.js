import React from 'react';

const AddActivityForm = props => (
  <form onSubmit={props.handleSubmit}>
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
      <select name="asset-type" id="asset" onChange={props.dropdownChange}>
        {props.assetDropdownOptions}
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="activity-stages">Activity Stages</label>
      <StageList>{stageItems}</StageList>
    </div>

    <div className="button-wrap">
      <button className="cancel" onClick={props.cancelModal}>
        Cancel
      </button>
      <input type="submit" className="save" value="Save" />
    </div>
  </form>
);

export default AddActivityForm;
