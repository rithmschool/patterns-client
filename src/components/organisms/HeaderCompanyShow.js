import React, { Component } from 'react';
import PrimarySecondaryButton from '../atoms/PrimarySecondaryButton';
import PropTypes from 'prop-types';
import ModalCompanyContainer from '../../containers/ModalCompanyContainer';
import styled from 'styled-components';
//import './HeaderCompanyShowContainer.css';

const HeaderStyle = styled.div``;

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
      <div className="header">
        <div>
          <div className="headerTop row">
            <div className="company-logo" style={pictureStyle} />
            <p className=""> {this.props.company.name} </p>
            <PrimarySecondaryButton>EDIT</PrimarySecondaryButton>
            <PrimarySecondaryButton primary onClick={this.toggleModal}>
              ADD
            </PrimarySecondaryButton>
            {modal}
          </div>
          <p className="potentialEmployer"> Potential employer: [Blank] </p>
          <p className="lastUpdated"> LAST UPDATED </p>
          <p className="latestUpdatedText"> {dateStr} </p>
        </div>
      </div>
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
