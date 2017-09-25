import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SidebarLeft from "../components/SidebarLeft";
import Content from "../components/Content";
import SmallerContent from "../components/SmallerContent";
import SidebarRight from "../components/SidebarRight";
import ModalCompany from "../components/ModalCompany";
import PropTypes from "prop-types";

class AssetContainer extends Component {
  render() {
    let modal = this.props.modalState ? (
      <ModalCompany name="Edit" logo="Replace" />
    ) : null;
    return (
      <div className="asset row">
        {modal}
        <SidebarLeft />
        <Switch>
          <Route exact path="/assets/companies" component={Content} />
          <Route
            exact
            path="/assets/companies/:companyId"
            component={SmallerContent}
          />
        </Switch>
        <Route
          exact
          path="/assets/companies/:companyId"
          component={SidebarRight}
        />
      </div>
    );
  }
}

function mapModalState(state) {
  return {
    modalState: state.modal
  };
}

AssetContainer.propTypes = {
  modalState: PropTypes.bool.isRequired
};

export default connect(mapModalState)(AssetContainer);
