import React, { Component } from 'react';
import axios from 'axios';
import close from './images/icon-x-gray.svg';
import {setCurrentAsset} from './actions/asset';
import { connect } from 'react-redux';

class ModalCompany extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : '',
      url: '',
      logo: '',
      showModal: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.addCompaniesFunc = this.addCompaniesFunc.bind(this);
    this.removeModal = this.removeModal.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.addCompaniesFunc();
  }

  // addCompaniesFunc(){
  //   // This will be updated before we deploy to production

  //   let companyInfo = this.state;
  //   return axios.post("http://localhost:3001/types/594d56183475e0b70b26acaf/assets", companyInfo)
  //   .then(res => {
  //     this.props.setCurrentAsset(res.data)
  //     this.setState({
  //       name : '',
  //       url: '',
  //       logo: '',
  //       showModal: false
  //     })
  //   })
  //   .catch(err => console.log(err))
  // }

  removeModal(){
    this.setState({
      showModal: false
    });
  }

  render(){
    let asset = this.props.asset ? <p> {this.props.asset.name} </p> : null
     var htmlToDisplay = this.state.showModal ?  
      <div className="overlay">
        <div className="modal col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
          <div className="heading">
            Add Company
            {asset}
            <img onClick={this.removeModal}src={close} alt="Close Modal"/>
          </div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="company-name">Company Name</label><br/>
            <input className="text-input" type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>

            <label htmlFor="company-url">Company Url</label><br/>
            <input className="text-input" type="text" name="url" value={this.state.url} onChange={this.handleChange}/><br/>

            <label htmlFor="company-logo">Company Logo</label><br/>
            <input type="file" name="logo" value={this.state.logo} onChange={this.handleChange}/><br/>

            <div className="button-wrap">
              <button className="cancel">Cancel</button>
              <input type='submit' className="save" value="Save" />
            </div>
          </form>
        </div>
      </div>
      : null;
    return htmlToDisplay;
  };
}

function mapStateForAddCompany(state){
  return {
    asset: state.currentAsset
  }
}

export default connect (mapStateForAddCompany, { setCurrentAsset })(ModalCompany);
