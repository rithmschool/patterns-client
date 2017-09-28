import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarLeftContainer from './SidebarLeftContainer';
import Content from '../components/Content';
import ModalCompanyContainer from './ModalCompanyContainer';
// import SidebarRightContainer from './SidebarRightContainer';
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

MainContainer.propTypes = {
  modalState: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  modalState: state.modal
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
