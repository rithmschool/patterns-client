import React, { Component } from "react";
import { connect } from "react-redux";
import SidebarLeft from "../components/SidebarLeft";
import Content from "../components/Content";
import ModalCompany from "../components/ModalCompany";
import SidebarRight from "../components/SidebarRight";
import "./MainContainer.css";
import PropTypes from "prop-types";

class MainContainer extends Component {
  render() {
    let modal = this.props.modalState ? (
      <ModalCompany name="Edit" logo="Replace" />
    ) : null;
    return (
      <div className="main">
        {modal}
        <SidebarLeft />
        <Content />
        {/* <SidebarRight /> */}
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
