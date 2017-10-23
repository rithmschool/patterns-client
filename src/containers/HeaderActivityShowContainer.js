import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setActiveActivity } from "../store/actions/actionCreators";
import styled from "styled-components";
import ModalCompanyContainer from "./ModalCompanyContainer";
import HeaderTitleStyle from "../components/atoms/HeaderTitleStyle";
import HeaderTopStyle from "../components/atoms/HeaderTopStyle";
import HeaderStyle from "../components/atoms/HeaderStyle";
import ModalActivityContainer from "./ModalActivityContainer";

const StatusToggleStyle = styled.div`
  border-radius: 2px;
  background-color: #38d682;
  float: left;
  font-weight: 600;
  text-align: center;
  color: white;
  text-transform: uppercase;
  @media (min-width: 768px) {
    width: 30px;
    height: 15px;
    font-size: 7.5px;
    margin-top: 21px;
    padding: 3px;
  }
  @media (min-width: 1024px) {
    width: 40px;
    height: 20px;
    font-size: 10px;
    margin-top: 28px;
    padding: 4px;
  }
`;

const EditActivityButtonStyle = styled.input`
  background-color: #585b60;
  text-align: center;
  color: white;
  float: right;
  cursor: pointer;
  border-style: none;
  border-radius: 2px;
  float: right;
  @media (min-width: 768px) {
    margin-right: 9px;
  }
  @media (min-width: 1024px) {
    margin-right: 12px;
  }
`;

const AddCompanyButtonStyle = styled.input`
  background-color: #cb9c59;
  text-align: center;
  color: white;
  float: right;
  cursor: pointer;
  border-style: none;
  border-radius: 2px;
`;

class HeaderActivityShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      addCompany: false,
      editActivity: false
    };
    this.addCompany = this.addCompany.bind(this);
    this.editActivity = this.editActivity.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  addCompany(e) {
    this.setState({ modalOpen: true, addCompany: true, editActivity: false });
  }
  editActivity(e) {
    this.setState({ modalOpen: true, addCompany: false, editActivity: true });
  }

  toggleModal(e) {
    this.setState({
      modalOpen: !this.state.modalOpen,
      addCompany: false,
      editActivity: false
    });
  }

  componentWillMount() {
    let foundActivity = this.props.activities.find(
      val => val._id === this.props.match.params.activityId
    );
    this.props.setActiveActivity(foundActivity);
  }

  render() {
    let modal = null;
    if (this.state.addCompany) {
      modal = (
        <ModalCompanyContainer
          toggleModal={this.toggleModal}
          name="Edit"
          logo="Replace"
        />
      );
    }
    if (this.state.editActivity) {
      modal = (
        <ModalActivityContainer
          toggleModal={this.toggleModal}
          name="Edit"
          activity={this.props.activity}
        />
      );
    }

    return (
      <HeaderStyle>
        <div>
          <HeaderTopStyle className="row">
            <HeaderTitleStyle> {this.props.activity.name} </HeaderTitleStyle>
            <StatusToggleStyle>OPEN</StatusToggleStyle>
            <EditActivityButtonStyle
              type="submit"
              value="EDIT"
              onClick={this.editActivity}
            />
            <AddCompanyButtonStyle
              type="submit"
              value="ADD"
              onClick={this.addCompany}
            />
            {modal}
          </HeaderTopStyle>
        </div>
      </HeaderStyle>
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
