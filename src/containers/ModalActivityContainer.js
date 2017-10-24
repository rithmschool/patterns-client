import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import Modal from '../components/molecules/Modal';
import ActivityForm from '../components/molecules/ActivityForm';
import { fetchActivitiesRequest } from '../store/actions/auth';
import {
  updateActivityRequest,
  addActivityRequest,
  addStageRequest,
  getTypes
} from '../store/actions/actionCreators';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ActivityAddedStyle = styled.div`
  padding: 33px;
  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    line-height: 1.71;
    text-align: center;
    color: #585b60;
  }
  a {
  }
`;

class ModalActivityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newActivityId: '',
      name: this.props.activity.name || '',
      stageItems: [],
      nextId: 1,
      submitted: false
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
    const newItems = this.state.stageItems.filter(item => item.id !== id);
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
      var stagesToAdd = this.state.stageItems.map(stage => ({
        name: stage.stageItem,
        activity: nextProps.newActivityId
      }));

      const promises = stagesToAdd.map(stage => this.props.addStage(stage));

      Promise.all(promises).then(() => {
        this.setState({
          name: '',
          createdBy: '',
          rootAssetType: '',
          activityId: '',
          submitted: true,
          saving: false
        });
        this.props.fetchActivitiesRequest(this.props.userId);
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ saving: true });
    let activityInfo = {
      name: this.state.name,
      createdBy: this.props.userId,
      rootAssetType: this.props.companyTypeId
    };

    if (!this.props.activity) {
      this.props.addActivity(this.props.userId, activityInfo);
    } else {
      this.props
        .updateActivity(this.props.activity._id, activityInfo)
        .then(() => {
          console.log('Hit me');
        });
    }
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
        {this.state.submitted ? (
          <ActivityAddedStyle>
            <p>
              Your activity was added successfully.{' '}
              <Link
                to={`/activities/${this.props.newActivityId}`}
                replace={false}
              >
                See it here.
              </Link>
            </p>
          </ActivityAddedStyle>
        ) : (
          <ActivityForm
            companyTypeId={this.props.companyTypeId}
            handleAdd={this.handleAdd}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            cancelModal={this.cancelModal}
            handleDelete={this.handleDelete}
            stageItemComponents={this.state.stageItems}
            activity={this.props.activity}
            name={this.state.name}
            {...this.state}
          />
        )}
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
    updateActivity: (activityId, activityInfo) =>
      dispatch(updateActivityRequest(activityId, activityInfo)),

    getTypes: () => dispatch(getTypes()),
    fetchActivitiesRequest: userId => dispatch(fetchActivitiesRequest(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalActivityContainer
);
