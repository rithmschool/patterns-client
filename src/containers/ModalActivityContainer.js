import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Modal from '../components/molecules/Modal';
import AddActivityForm from '../components/molecules/AddActivityForm';
//import StageItem from "../components/atoms/StageItem";
import {
  addActivityRequest,
  addStageRequest,
  getTypes
} from '../store/actions/actionCreators';

class ModalActivityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newActivityId: '',
      name: '',
      stageItems: [
        {
          id: 0,
          stageItem: 'Stage A'
        }
      ],
      nextId: 1
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.el = document.createElement('div');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(newItem) {
    let newItems = this.state.stageItems.slice();
    newItems.push({
      id: this.state.nextId++,
      stageItem: newItem.stageItem
    });

    this.setState({
      stageItems: newItems,
      nextId: this.state.nextId
    });
  }

  handleDelete(id) {
    let newItems = this.state.stageItems.filter(item => item.id !== id);
    this.setState({
      stageItems: newItems
    });
  }

  //creating a portal
  componentDidMount() {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.removeChild(this.el);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.newActivityId !== nextProps.newActivityId &&
      nextProps.newActivityId
    ) {
      var items = this.state.stageItems;
      var stagesToAdd = items.map(stage => ({
        name: stage.stageItem,
        activity: this.props.newActivityId
      }));
      var promises = [];
      for (var i = 0; i < stagesToAdd.length; i++) {
        var promise = this.props.addStage(stagesToAdd[i]);
        promises.push(promise);
      }
    }

    Promise.all(promises)
      .then()
      .then(
        this.setState({
          name: '',
          createdBy: '',
          rootAssetType: ''
        })
      )
      .then((this.setState.activityId = ''))
      .then(this.props.toggleModal());
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let activityInfo = {
      name: this.state.name,
      createdBy: this.props.userId,
      rootAssetType: this.props.companyTypeId
    };
    this.props.addActivity(this.props.userId, activityInfo);
  }

  cancelModal() {
    this.setState({
      name: '',
      activityTypeId: ''
    });
    this.props.toggleModal();
  }

  render() {
    return createPortal(
      <Modal cancelModal={this.cancelModal} title="Add Activity">
        <AddActivityForm
          companyTypeId={this.props.companyTypeId}
          handleAdd={this.handleAdd}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          cancelModal={this.cancelModal}
          handleDelete={this.handleDelete}
          stageItemComponents={this.state.stageItems}
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
  toggleModal: PropTypes.func.isRequired,
  newActivityId: PropTypes.string
};

const mapStateToProps = state => {
  console.log(state.newActivityId);
  return {
    activityTypeId: state.typeId.Activity,
    newActivityId: state.newActivityId,
    companyTypeId: state.typeId.Company,
    userId: state.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addStage: stageInfo => dispatch(addStageRequest(stageInfo)),
    addActivity: (userId, activityInfo) =>
      dispatch(addActivityRequest(userId, activityInfo)),
    getTypes: () => dispatch(getTypes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalActivityContainer
);
