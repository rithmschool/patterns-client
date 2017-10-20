import React, { Component } from 'react';
import PrimarySecondaryButton from '../atoms/PrimarySecondaryButton';
import PropTypes from 'prop-types';
import ModalCompanyContainer from '../../containers/ModalCompanyContainer';
import '../../containers/HeaderCompanyShowContainer.css';
import HeaderTitleStyle from '../atoms/HeaderTitleStyle';
import HeaderTopStyle from '../atoms/HeaderTopStyle';
import CompanyLogoStyle from '../atoms/CompanyLogoStyle';
import HeaderStyle from '../atoms/HeaderStyle';
import styled from 'styled-components';

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
    font-size: 12px;
    margin: 0px 18px;
    line-height: 1.125;
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
    font-size: 9px;
    margin: 0px 18px;
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
        <div>
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
        </div>
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
