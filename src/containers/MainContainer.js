import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarLeftContainer from './SidebarLeftContainer';
import Content from '../components/Content';
import ModalCompanyContainer from './ModalCompanyContainer';
import SidebarRightContainer from './SidebarRightContainer';
import './MainContainer.css';
import PropTypes from 'prop-types';

class MainContainer extends Component {
  render() {
    let modal = this.props.modalState ? (
      <ModalCompanyContainer name="Edit" logo="Replace" />
    ) : null;
    return (
      <div className="main">
        {modal}
        <SidebarLeftContainer />
        <Content />
        {/* <SidebarRightContainer /> */}
      </div>
    );
  }
}

function mapModalState(state) {
  return {
    modalState: state.modal
  };
}

MainContainer.propTypes = {
  modalState: PropTypes.bool.isRequired
};

export default connect(mapModalState)(MainContainer);
