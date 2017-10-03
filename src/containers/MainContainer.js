import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarLeftContainer from './SidebarLeftContainer';
import Content from '../components/Content';
import ModalCompanyContainer from './ModalCompanyContainer';
// import SidebarRightContainer from './SidebarRightContainer';
import './MainContainer.css';
import PropTypes from 'prop-types';

class MainContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modalOpen: false
  //   };
  //   this.toggleModal = this.toggleModal.bind(this);
  // }

  // toggleModal(e) {
  //   this.setState({ modalOpen: !this.state.modalOpen });
  // }

  render() {
    // let modal;
    // if (this.state.modalOpen) {
    //   modal = (
    //     <ModalCompanyContainer
    //       toggleModal={this.toggleModal}
    //       name="Edit"
    //       logo="Replace"
    //     />
    //   );
    // } else {
    //   modal = null;
    // }

    // let modal = this.props.modalState ? (
    //   <ModalCompanyContainer name="Edit" logo="Replace" />
    // ) : null;

    return (
      <div className="main">
        {/* {modal} */}
        <SidebarLeftContainer />
        <Content />
        {/* <SidebarRightContainer /> */}
      </div>
    );
  }
}

// MainContainer.propTypes = {
//   modalState: PropTypes.bool.isRequired
// };

// const mapStateToProps = state => ({
//   modalState: state.modal
// });

// const mapDispatchToProps = dispatch => ({});

//export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default MainContainer;
