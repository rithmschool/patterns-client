import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import SidebarLeft from './core/SidebarLeft';
import Content from './core/Content';
import SmallerContent from './core/SmallerContent';
import SidebarRight from './core/SidebarRight';
import ModalCompany from './ModalCompany';

class Asset extends Component {
  render() {
    let modal = this.props.modalState
      ? <ModalCompany name="Edit" logo="Replace" />
      : null;
    return( 
      <div className="asset row"> 
        {modal}
        <SidebarLeft /> 
        <Switch>
          <Route exact path="/assets/companies" component={Content} />
          <Route exact path="/assets/companies/:companyId" component={SmallerContent} />
        </Switch>
        <Route exact path="/assets/companies/:companyId" component={SidebarRight} />
      </div>
  )};
}

function mapModalState(state) {
  return {
    modalState: state.modal,
  };
}

export default connect(mapModalState)(Asset);
