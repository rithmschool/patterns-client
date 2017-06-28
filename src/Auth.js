import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import 'url-search-params-polyfill';
import { login, catchLoginErr } from './actions/auth';

class Auth extends Component {

  componentWillMount() {
    let params = new URLSearchParams(this.props.location.search);
    this.props.login({code: params.get('code')});
  }

  render() {
    let redirectUrl = '/activities';
    return (
      <div>
        <div id="content">
          {
            this.props.userToken ? 
            <Redirect to={redirectUrl}/> : 
            <div>
              <p>Please stand by...</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

function mapStateForAuth(state){
  return {
    userToken: state.currentUserToken,
    loginError: state.loginError
  }
}

export default connect(mapStateForAuth, { login, catchLoginErr })(Auth);
