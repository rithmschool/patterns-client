import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './HeaderActivityShowContainer.css';
import { setActiveActivity } from '../store/actions/actionCreators';
import ModalActivityContainer from './ModalActivityContainer';
import styled from 'styled-components';
import ModalCompanyContainer from './ModalCompanyContainer';

const HeaderStyle = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.04);
`;

const CompanyLogoStyle = styled.div`
  // width: 48px;
  // height: 48px;
  // background-color: #e7e8ec;
  // margin: 24px auto 24px 24px;
  // display: inline-block;
  // float: left;
  // background-size: contain;
  // background-repeat: no-repeat;
  // background-position-y: center;
`;

const HeaderTitleStyle = styled.p`
  // font-weight: 600;
  // float: left;
  // vertical-align: middle;
  // line-height: 45px;
  // text-align: left;
  // margin-left: 20px;
`;

const StatusToggleStyle = styled.div`
  // border-radius: 2px;
  // background-color: #38d682;
  // float: left;
  // font-weight: 600;
  // text-align: center;
  // color: white;
  // text-transform: uppercase;
`;

const EditActivityButtonStyle = styled.input`
  // background-color: #585b60;
  // text-align: center;
  // color: white;
  // float: right;
  // cursor: pointer;
`;

const AddActivityButtonStyle = styled.input`
  // background-color: #cb9c59;
  // text-align: center;
  // color: white;
  // float: right;
  // cursor: pointer;
`;

class HeaderActivityShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  componentWillMount() {
    let foundActivity = this.props.activities.find(
      val => val._id === this.props.match.params.activityId
    );
    this.props.setActiveActivity(foundActivity);
  }

  render() {
    let modal = null;
    if (this.state.modalOpen) {
      modal = (
        <ModalCompanyContainer
          toggleModal={this.toggleModal}
          name="Edit"
          logo="Replace"
        />
      );
    }

    return (
      <div className="header">
        <div>
          <div className="headerTop row">
            <p className="headerTitle"> {this.props.activity.name} </p>
            <div className="statusToggle">OPEN</div>
            <input type="submit" className="editActivityButton" value="EDIT" />
            <input
              type="submit"
              className="addActivityButton"
              value="ADD"
              onClick={this.toggleModal}
            />
            {modal}
          </div>
        </div>
      </div>
    );
  }
}

HeaderActivityShowContainer.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      activityId: PropTypes.string.isRequired
    })
  }),
  setActiveActivity: PropTypes.func.isRequired,
  activity: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = state => ({
  activities: state.activities,
  activity: state.activity
});

const mapDispatchToProps = dispatch => ({
  setActiveActivity: activity => dispatch(setActiveActivity(activity))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  HeaderActivityShowContainer
);
