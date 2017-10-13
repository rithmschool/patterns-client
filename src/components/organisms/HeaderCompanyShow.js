import React, { Component } from 'react';
import PrimarySecondaryButton from '../atoms/PrimarySecondaryButton';
import PropTypes from 'prop-types';
import ModalCompanyContainer from '../../containers/ModalCompanyContainer';
import styled from 'styled-components';
//import './HeaderCompanyShowContainer.css';

const HeaderStyle = styled.div`
.statusToggle {
  border-radius: 2px;
  background-color: #38d682;
  float: left;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase; }

.editActivityButton {
  background-color: #585b60;
  text-align: center;
  color: #ffffff;
  float: right;
  cursor: pointer; }

.addActivityButton {
  background-color: #cb9c59;
  text-align: center;
  color: #ffffff;
  float: right;
  cursor: pointer; }

.row {
  margin-left: 0;
  margin-right: 0; }
  
input {
  border-style: none;
  border-radius: 2px;
  float: right; }

.headerRect {
  display: inline-block; }
  width: 100%;
  background-color: #f8f9fa;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.04); }

  @media (min-width: 768px) {
    height: 144px;
  }
  @media (min-width: 1024px) {
    height: 192px;
  }
`;

const HeaderTopStyle = styled.div`
  @media (min-width: 768px) {
    font-size: 10.5px;
    width: 72px;
    height: 27px;
    line-height: 1.035;
    margin-top: 18px;
    margin-right: 12px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
    width: 96px;
    height: 36px;
    line-height: 1.38;
    margin-top: 24px;
    margin-right: 12px;
  }
`;

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

const HeaderTitleStyle = styled.p`
  font-weight: 600;
  float: left;
  vertical-align: middle;
  line-height: 45px;
  text-align: left;
  margin-left: 20px;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 33.75px;
    margin: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 45px;
    margin: 24px;
  }
`;

const PotentialEmployerStyle = styled.p`
  font-weight: 600;
  text-align: left;
  color: #585b60;

  @media (min-width: 768px) {
    height: 17.25px;
    font-size: 13.5px;
    line-height: 0.9975;
    margin: 9px 18px;
  }
  @media (min-width: 1024px) {
    height: 23px;
    font-size: 18px;
    line-height: 1.33;
    margin: 12px 24px;
  }
`;

const LastUpdatedStyle = styled.p`
  font-weight: bold;
  text-align: left;
  color: #a0a1a5;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 9px;
    margin: 0px 18px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
    margin: 0px 24px;
  }
`;

const LatestUpdatedTextStyle = styled.p`
  text-align: left;
  color: #25272a;

  @media (min-width: 768px) {
    font-size: 12px;
    margin: 0px 24px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
    margin: 0px 24px;
    line-height: 1.5;
  }
`;

class HeaderCompanyShow extends Component {
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

    let pictureStyle = this.props.company.logo
      ? {
          backgroundImage: `url(${this.props.company.logo})`
        }
      : null;
    let date = new Date(this.props.company.updatedAt);
    let dateStr = `${date.getUTCMonth() +
      1}/${date.getUTCDate()}/${date.getUTCFullYear()}`;

    return (
      <HeaderStyle>
        <HeaderTopStyle className="row">
          <CompanyLogoStyle style={pictureStyle} />
          <HeaderTitleStyle> {this.props.company.name} </HeaderTitleStyle>
          <PrimarySecondaryButton>EDIT</PrimarySecondaryButton>
          <PrimarySecondaryButton primary onClick={this.toggleModal}>
            ADD
          </PrimarySecondaryButton>
          {modal}
        </HeaderTopStyle>
        <PotentialEmployerStyle>
          {' '}
          Potential employer: [Blank]{' '}
        </PotentialEmployerStyle>
        <LastUpdatedStyle> LAST UPDATED </LastUpdatedStyle>
        <LatestUpdatedTextStyle> {dateStr} </LatestUpdatedTextStyle>
      </HeaderStyle>
    );
  }
}

HeaderCompanyShow.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      companyId: PropTypes.string.isRequired
    })
  }),
  setActiveCompany: PropTypes.func.isRequired,
  company: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired
  })
};

export default HeaderCompanyShow;
