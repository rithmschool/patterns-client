import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import close from './images/icon-x-gray.svg';
import './ModalCompany.css'
import { BASE_URL, toggleModal } from './actions/auth'

class ModalCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      logo: '',
      companyId: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCompanies = this.addCompanies.bind(this);
    this.getCompanyId = this.getCompanyId.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getCompanyId();
  }


  getCompanyId() {
    // This should be refactored to use Redux by saving Activity (and companyId) in the store.

    const companyId = null;
    axios.get(`${BASE_URL}/types`)
      .then(res => {
        this.setState({
          companyId: res.data.find(obj => obj.name === 'Company')._id
        });
      })
      .then(companyId => this.addCompanies(this.state.companyId))
      .catch(error => console.log(error));
  }

  addCompanies(companyId) {

    let companyInfo = {
      name: this.state.name,
      url: this.state.url,
      logo: this.state.logo
    }
    return axios.post(`${BASE_URL}/types/${this.state.companyId}/assets`, companyInfo)
      .then(res => {
        this.setState({
          name: '',
          url: '',
          logo: '',
        })
      })
      .then(() => this.props.toggleModal())
      .catch(err => console.log(err))
  }

  cancelModal() {
    this.setState({
      name: '',
      url: '',
      logo: '',
      companyId: '',
    });
    this.props.toggleModal();
  }

  render() {
    return (
      <div className="overlay">
        <div className="modal col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
          <div className="heading">
            Add Company
            <img onClick={this.props.toggleModal} src={close} alt="Close Modal" />
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="company-name">Company Name</label>
              <input className="text-input" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="company-url">Company Url</label>
              <input className="text-input" type="text" name="url" value={this.state.url} onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="company-logo">Company Logo</label>
              <p><input className="file-input" type="file" name="logo" value={this.state.logo} onChange={this.handleChange} /></p>
            </div>

            <div className="button-wrap">
              <button className="cancel" onClick={this.cancelModal}>Cancel</button>
              <input type='submit' className="save" value="Save" />
            </div>
          </form>
        </div>
      </div>
    )
  };
}

export default connect(undefined, { toggleModal })(ModalCompany);
