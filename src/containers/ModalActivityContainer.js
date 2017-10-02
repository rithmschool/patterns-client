import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ModalActivityContainer.css';
import Modal from '../components/molecules/Modal';
import AddActivityForm from '../components/molecules/AddActivityForm';
import {
  toggleModal,
  addActivityRequest,
  getTypes
} from '../store/actions/actionCreators';
import PropTypes from 'prop-types';

class ModalActivityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  }

  handleChange(e) {
    console.log(e.target);
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
    let activityInfo = {
      name: this.state.name,
      createdBy: this.state.userId,
      rootAssetType: this.state.companyTypeId
    };
    this.props.addActivity(userId, activityInfo);
    this.setState({
      name: '',
      createdBy: '',
      rootAssetType: ''
    });
    this.props.toggleModal();
  }

  cancelModal() {
    this.setState({
      name: '',
      activityTypeId: ''
    });
    this.props.toggleModal();
  }

  render() {
    return (
      <Modal title="Add Activity">
        <AddActivityForm
          companyTypeId={companyTypeId}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          cancelModal={this.cancelModal}
          {...this.state}
        />
      </Modal>
    );
  }
}

ModalActivityContainer.propTypes = {
  addActivity: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activityTypeId: state.typeId.Activity,
  companyTypeId: state.typeId.Company,
  userId: state.userId
});

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal()),
    addActivity: (userId, activityInfo) =>
      dispatch(addActivityRequest(userId, activityInfo)),
    getTypes: () => dispatch(getTypes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalActivityContainer
);
