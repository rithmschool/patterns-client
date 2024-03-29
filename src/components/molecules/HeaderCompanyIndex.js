import React, { Component } from 'react';
import PrimarySecondaryButton from '../atoms/PrimarySecondaryButton';
import ModalCompanyContainer from '../../containers/ModalCompanyContainer';
import HeaderTitleStyle from '../atoms/HeaderTitleStyle';
import HeaderTopStyle from '../atoms/HeaderTopStyle';
import HeaderIndexStyle from '../atoms/HeaderIndexStyle';

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
      <HeaderIndexStyle>
        <div>
          <HeaderTopStyle className="row">
            <HeaderTitleStyle> Companies </HeaderTitleStyle>
            <PrimarySecondaryButton primary onClick={this.toggleModal}>
              ADD
            </PrimarySecondaryButton>
            {modal}
          </HeaderTopStyle>
        </div>
      </HeaderIndexStyle>
    );
  }
}

export default HeaderCompanyIndex;
