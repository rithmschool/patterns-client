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
      name: '',
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewActivity = this.addNewActivity.bind(this);
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
    this.props.getTypes().then(() => {
      this.setState({ submitted: true });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.submitted &&
      prevState.activityTypeId !== this.props.activityTypeId
    ) {
      this.addNewActivity(this.props.activityTypeId);
    }
  }

  addNewActivity(activityTypeId) {
    let activityInfo = {
      name: this.state.name
    };
    this.props.addActivity(activityTypeId, activityInfo);
    this.setState({
      name: ''
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
  activityTypeId: state.typeId.Activity
});

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal()),
    addActivity: (activityTypeId, activityInfo) =>
      dispatch(addActivityRequest(activityTypeId, activityInfo)),
    getTypes: () => dispatch(getTypes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalActivityContainer
);
