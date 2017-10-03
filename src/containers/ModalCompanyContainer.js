import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ModalCompanyContainer.css';
import Modal from '../components/molecules/Modal';
import AddCompanyForm from '../components/molecules/AddCompanyForm';
import { addCompanyRequest, getTypes } from '../store/actions/actionCreators';
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
      <Modal title="Add Company">
        <AddCompanyForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleLogo={this.handleLogo}
          cancelModal={this.cancelModal}
          {...this.state}
        />
      </Modal>
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
    addCompany: (companyTypeId, companyInfo) =>
      dispatch(addCompanyRequest(companyTypeId, companyInfo)),
    getTypes: () => dispatch(getTypes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalCompanyContainer
);
