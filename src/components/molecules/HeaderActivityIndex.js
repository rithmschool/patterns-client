import React, { Component } from 'react';
import './HeaderActivityIndex.css';
import ModalActivityContainer from '../../containers/ModalActivityContainer';

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
      <div className="header-index">
        <div>
          <div className="headerTop row">
            <p className="headerTitle"> Activities </p>
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

export default HeaderActivityIndex;
