import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import "url-search-params-polyfill";
import { login, catchLoginErr } from "../store/actions/auth";
import PropTypes from "prop-types";

class AuthContainer extends Component {
  componentWillMount() {
    let params = new URLSearchParams(this.props.location.search);
    this.props.login({ code: params.get("code") });
  }

  render() {
    let redirectUrl = "/activities";
    return (
      <div>
        <div id="content">
          {this.props.userToken ? (
            <Redirect to={redirectUrl} />
          ) : (
            <div>
              <p>Please stand by...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateForAuth(state) {
  return {
    userToken: state.currentUserToken,
    loginError: state.loginError
  };
}

AuthContainer.propTypes = {
  login: PropTypes.func,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }),
  userToken: PropTypes.string.isRequired
};

export default connect(mapStateForAuth, { login, catchLoginErr })(
  AuthContainer
);
