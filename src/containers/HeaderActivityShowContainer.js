import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveActivity } from '../store/actions/actionCreators';
import styled from 'styled-components';
import ModalCompanyContainer from './ModalCompanyContainer';
import HeaderTitleStyle from '../components/atoms/HeaderTitleStyle';
import HeaderTopStyle from '../components/atoms/HeaderTopStyle';

const HeaderStyle = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  @media (min-width: 768px) {
    height: 144px;
  }
  @media (min-width: 1024px) {
    height: 192px;
  }
`;
// const HeaderTopStyle = styled.div`
//   @media (min-width: 768px) {
//     input {
//       font-size: 10.5px;
//       width: 72px;
//       height: 27px;
//       line-height: 1.035;
//       margin-top: 18px;
//       margin-right: 12px;
//     }
//   }
//   @media (min-width: 1024px) {
//     input {
//       font-size: 14px;
//       width: 96px;
//       height: 36px;
//       line-height: 1.38;
//       margin-top: 24px;
//       margin-right: 12px;
//     }
//   }
// `;

const CompanyLogoStyle = styled.div`
  width: 48px;
  height: 48px;
  background-color: #e7e8ec;
  margin: 24px auto 24px 24px;
  display: inline-block;
  float: left;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
`;

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

const AddActivityButtonStyle = styled.input`
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
      <HeaderStyle>
        <div>
          <HeaderTopStyle className="row">
            <HeaderTitleStyle> {this.props.activity.name} </HeaderTitleStyle>
            <StatusToggleStyle>OPEN</StatusToggleStyle>
            <EditActivityButtonStyle type="submit" value="EDIT" />
            <AddActivityButtonStyle
              type="submit"
              value="ADD"
              onClick={this.toggleModal}
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
