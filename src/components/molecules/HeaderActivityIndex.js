import React, { Component } from 'react';
import ModalActivityContainer from '../../containers/ModalActivityContainer';
import HeaderTitleStyle from '../atoms/HeaderTitleStyle';
import HeaderTopStyle from '../atoms/HeaderTopStyle';
import HeaderIndexStyle from '../atoms/HeaderIndexStyle';
import AddActivityButtonStyle from '../atoms/AddActivityButtonStyle';

class HeaderActivityIndex extends Component {
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
        <ModalActivityContainer
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
            <HeaderTitleStyle> Activities </HeaderTitleStyle>
            <AddActivityButtonStyle value="ADD" onClick={this.toggleModal} />
            {modal}
          </HeaderTopStyle>
        </div>
      </HeaderIndexStyle>
    );
  }
}

export default HeaderActivityIndex;
