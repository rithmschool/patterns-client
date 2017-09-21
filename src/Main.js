import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarLeft from './core/SidebarLeft';
import Content from './core/Content';
import ModalCompany from './ModalCompany';
import SidebarRight from './core/SidebarRight';
import './Main.css';

class Main extends Component {
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

export default connect(mapModalState)(Main);
