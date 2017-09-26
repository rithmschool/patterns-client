import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import SidebarLeftContainer from "./SidebarLeftContainer";
import Content from "../components/Content";
import SmallerContent from "../components/SmallerContent";
import SidebarRightContainer from "./SidebarRightContainer";
import ModalCompanyContainer from "./ModalCompanyContainer";
import PropTypes from "prop-types";

class AssetContainer extends Component {
  render() {
    let modal = this.props.modalState ? (
      <ModalCompanyContainer name="Edit" logo="Replace" />
    ) : null;
    return (
      <div className="asset row">
        {modal}
        <SidebarLeftContainer />
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
          component={SidebarRightContainer}
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
