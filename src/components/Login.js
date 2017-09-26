import React, { Component } from 'react';
import './Login.css';
import logo from '../images/logo-light-gray.png';
import { BASE_URL } from '../store/actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location = `${BASE_URL}/auth/google`;
  }

  render() {
    return (
      <div className="login-image container-fluid">
        <div className="row">
          <div className="content-box col-xs-12 col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-6">
            <div className="logo-row">
              <div>
                <img className="logo" src={logo} alt="tradecraft logo" />
              </div>
            </div>
            <div className="row">
              <div className="sign-in-box col-xs-8 col-xs-offset-2">
                <h1 id="sign-in">Sign In</h1>
                <button className="google-sign-in" onClick={this.handleClick} />
                <p className="aside">
                  Use your Tradecraft / Rithm School email address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
