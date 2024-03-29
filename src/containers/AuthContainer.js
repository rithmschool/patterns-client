import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import 'url-search-params-polyfill';
import PropTypes from 'prop-types';
import { login } from '../store/actions/auth';

class AuthContainer extends Component {
  componentWillMount() {
    let params = new URLSearchParams(this.props.location.search);
    this.props.login({ code: params.get('code') });
  }

  render() {
    let redirectUrl = '/activities';
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

AuthContainer.propTypes = {
  login: PropTypes.func,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }),
  userToken: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  userToken: state.currentUserToken
});

const mapDispatchToProps = dispatch => {
  return {
    login: code => dispatch(login(code))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
