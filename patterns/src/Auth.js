import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { login, catchLoginErr } from './actions/auth';
import { connect } from 'react-redux';
import 'url-search-params-polyfill';


class Auth extends Component {

  componentWillMount() {
    let params = new URLSearchParams(this.props.location.search)
    this.props.login({code: params.get('code')})
  }

  render() {
    let redirectUrl = '/home';
    return (
      <div>
        <div id="content">
          {
            this.props.user.googleId ? 
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
    user: state.currentUser,
    loginError: state.loginError
  }
}

export default connect(mapStateForAuth, { login, catchLoginErr })(Auth);