import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentActivityId } from '../store/actions/actionCreators';
import styled from 'styled-components';
import ModalCompanyContainer from './ModalCompanyContainer';
import HeaderTitleStyle from '../components/atoms/HeaderTitleStyle';
import HeaderTopStyle from '../components/atoms/HeaderTopStyle';
import HeaderStyle from '../components/atoms/HeaderStyle';
import AddActivityButtonStyle from '../components/atoms/AddActivityButtonStyle';

const StatusToggleStyle = styled.div`
  border-radius: 2px;
  background-color: #38d682;
  float: left;
  font-weight: 300;
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
    font-size: 12px;
    margin-top: 28px;
    padding: 2px 4px 4px 4px;
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
    this.props.setCurrentActivityId(this.props.match.params.activityId);
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
  setCurrentActivityId: PropTypes.func.isRequired,
  activity: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = state => ({
  activity: state.activities[state.currentActivityId],
  currentActivityId: state.activity
});

const mapDispatchToProps = dispatch => ({
  setCurrentActivityId: activityId => dispatch(setCurrentActivityId(activityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  HeaderActivityShowContainer
);
