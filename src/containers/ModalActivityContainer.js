import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Modal from "../components/molecules/Modal";
import AddActivityForm from "../components/molecules/AddActivityForm";
import {
  addActivityRequest,
  addStageRequest,
  getTypes
} from "../store/actions/actionCreators";

class ModalActivityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      stages: []
    };

    this.el = document.createElement("div");
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
  }

  //creating a portal
  componentDidMount() {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.removeChild(this.el);
  }

  componentWillReceiveProps(prevProps, nextProps, stagesToAdd) {
    //if newActivityId is added
    if (
      prevProps.newActivityId !== nextProps.newActivityId &&
      nextProps.newActivityId
    ) {
      //how to get stageToAdd (array of objects in format {name:"",activity:""}) from form to post??
      var promises = [];
      for (var i = 0; i < stagesToAdd.length; i++) {
        var promise = this.props.addStage(
          this.props.newActivityId,
          stagesToAdd[i]
        );
        promises.push(promise);
      }
      Promise.all(promises).then(this.props.toggleModal());
      //.then(this.state.activityId = null)
    }
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
    let activityInfo = {
      name: this.state.name,
      createdBy: this.props.userId,
      rootAssetType: this.props.companyTypeId
    };
    //how to get stages names from form?
    this.props.addActivity(this.props.userId, activityInfo);
    this.setState({
      name: "",
      createdBy: "",
      rootAssetType: ""
    });
  }

  cancelModal() {
    this.setState({
      name: "",
      activityTypeId: ""
    });
    this.props.toggleModal();
  }

  render() {
    return createPortal(
      <Modal cancelModal={this.cancelModal} title="Add Activity">
        <AddActivityForm
          companyTypeId={this.props.companyTypeId}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          cancelModal={this.cancelModal}
          {...this.state}
        />
      </Modal>,
      this.el
    );
  }
}

ModalActivityContainer.propTypes = {
  userId: PropTypes.string.isRequired,
  companyTypeId: PropTypes.string.isRequired,
  addActivity: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activityTypeId: state.typeId.Activity,
  newActivityId: state.newActivityId,
  companyTypeId: state.typeId.Company,
  userId: state.userId
});

const mapDispatchToProps = dispatch => {
  return {
    addStage: (activityId, stageInfo) =>
      dispatch(addStageRequest(activityId, stageInfo)),
    addActivity: (userId, activityInfo) =>
      dispatch(addActivityRequest(userId, activityInfo)),
    getTypes: () => dispatch(getTypes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalActivityContainer
);
