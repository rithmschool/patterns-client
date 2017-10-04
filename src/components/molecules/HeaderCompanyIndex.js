import React, { Component } from 'react';
import './HeaderCompanyIndex.css';
import PrimarySecondaryButton from '../atoms/PrimarySecondaryButton';
import ModalCompanyContainer from '../../containers/ModalCompanyContainer';

class HeaderCompanyIndex extends Component {
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
    let modal;
    if (this.state.modalOpen) {
      modal = (
        <ModalCompanyContainer
          toggleModal={this.toggleModal}
          name="Edit"
          logo="Replace"
        />
      );
    } else {
      modal = null;
    }

    return (
      <div className="header-index">
        <div>
          <div className="headerTop row">
            <p className="headerTitle"> Companies </p>
            <PrimarySecondaryButton primary onClick={this.toggleModal}>
              ADD
            </PrimarySecondaryButton>
            {modal}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderCompanyIndex;
