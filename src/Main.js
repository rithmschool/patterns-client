import React, { Component } from 'react';
import SidebarLeft from './core/SidebarLeft';
import Content from './core/Content';
import ModalCompany from './ModalCompany';
import SidebarRight from './core/SidebarRight';
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    let modalStatus = !this.state.modal;
    this.setState({
      modal: modalStatus,
    });
  }

  render() {
    return (
      <div className="main">
        {this.state.modal ? <ModalCompany name="Edit" logo="Replace" toggleModal={this.toggleModal} /> : null}
        <SidebarLeft />
        <Content toggleModal={this.toggleModal} />
        { /* <SidebarRight /> */}
      </div>
  )};
}

export default Main;
