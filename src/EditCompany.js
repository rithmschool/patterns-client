import React, { Component } from 'react';
import './EditCompany.css';
import close from './images/icon-x-gray.svg'

class EditCompany extends Component {
  render() {
    return(
      <div className="row">
        <div className="overlay">
          <div className="modal 
          col-xs-10 col-xs-offset-1 
          col-sm-6 col-sm-offset-3 
          col-md-4 col-md-offset-4">
            <div className="heading">
              Edit Company
              <img src={close} alt="Close Modal"/>
            </div>
            <form>
              <label htmlFor="companyName">Company Name</label><br/>
              <input className="text-input" type="text" name="companyName" value="Existing Name" /><br/>

              <label htmlFor="companyUrl">Company Url</label><br/>
              <input className="text-input" type="text" name="companyUrl" value="Existing URL" /><br/>

              <label htmlFor="companyLogo">Replace Logo</label><br/>
              <input type="file" name="companyLogo" /><br/>

              <div className="button-wrap">
                <button className="cancel">Cancel</button>
                <button className="save">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )};
}

export default EditCompany;
