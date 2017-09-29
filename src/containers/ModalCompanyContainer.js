import React, { Component } from 'react';
import { connect } from 'react-redux';
import close from '../images/icon-x-gray.svg';
import './ModalCompanyContainer.css';
import {
  toggleModal,
  addCompanyRequest,
  getTypes
} from '../store/actions/actionCreators';
import UploadCare from '../components/UploadCare';
import PropTypes from 'prop-types';

class ModalCompanyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      logo: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogo = this.handleLogo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewCompany = this.addNewCompany.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogo(e) {
    this.setState({
      logo: e
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getTypes().then(() => {
      this.setState({ submitted: true });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.submitted &&
      prevState.companyTypeId !== this.props.companyTypeId
    ) {
      this.addNewCompany(this.props.companyTypeId);
    }
  }

  addNewCompany(companyTypeId) {
    let companyInfo = {
      name: this.state.name,
      url: this.state.url,
      logo: this.state.logo
    };
    this.props.addCompany(companyTypeId, companyInfo);
    this.setState({
      name: '',
      url: '',
      logo: ''
    });
    this.props.toggleModal();
  }

  cancelModal() {
    this.setState({
      name: '',
      url: '',
      logo: '',
      companyTypeId: ''
    });
    this.props.toggleModal();
  }

  render() {
    return (
      <div className="overlay">
        <div className="modal col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
          <div className="heading">
            Add Company
            <img
              onClick={this.props.toggleModal}
              src={close}
              alt="Close Modal"
            />
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="company-name">Company Name</label>
              <input
                className="text-input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company-url">Company Url</label>
              <input
                className="text-input"
                type="text"
                name="url"
                value={this.state.url}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company-logo">Company Logo</label>
              <p>
                <UploadCare id="logo" name="logo" onChange={this.handleLogo} />
              </p>
            </div>

            <div className="button-wrap">
              <button className="cancel" onClick={this.cancelModal}>
                Cancel
              </button>
              <input type="submit" className="save" value="Save" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ModalCompanyContainer.propTypes = {
  addCompany: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  companyTypeId: state.typeId.Company
});

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal()),
    addCompany: (companyTypeId, companyInfo) =>
      dispatch(addCompanyRequest(companyTypeId, companyInfo)),
    getTypes: () => dispatch(getTypes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalCompanyContainer
);
