import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SidebarLeftContainer from './SidebarLeftContainer';
import Content from '../components/Content';
import SmallerContent from '../components/SmallerContent';
import SidebarRightContainer from './SidebarRightContainer';
import PropTypes from 'prop-types';

class AssetContainer extends Component {
  render() {
    // let modal = this.props.modalState ? (
    //   <ModalCompanyContainer name="Edit" logo="Replace" />
    // ) : null;
    return (
      <div className="asset row">
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

AssetContainer.propTypes = {
  modalState: PropTypes.bool.isRequired
};

// const mapStateToProps = state => ({
//   modalState: state.modal
// });

// const mapDispatchToProps = dispatch => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(AssetContainer);

export default AssetContainer;
