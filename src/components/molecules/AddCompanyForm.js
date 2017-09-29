import React from "react";
import UploadCare from "../../components/UploadCare";

const AddCompanyForm = props => (
  <form onSubmit={props.handleSubmit}>
    <div className="form-group">
      <label htmlFor="company-name">Company Name</label>
      <input
        className="text-input"
        type="text"
        name="name"
        value={props.name}
        onChange={props.handleChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="company-url">Company Url</label>
      <input
        className="text-input"
        type="text"
        name="url"
        value={props.url}
        onChange={props.handleChange}
      />
    </div>

    <div className="form-group">
      <label htmlFor="company-logo">Company Logo</label>
      <p>
        <UploadCare id="logo" name="logo" onChange={props.handleLogo} />
      </p>
    </div>

    <div className="button-wrap">
      <button className="cancel" onClick={props.cancelModal}>
        Cancel
      </button>
      <input type="submit" className="save" value="Save" />
    </div>
  </form>
);

export default AddCompanyForm;
