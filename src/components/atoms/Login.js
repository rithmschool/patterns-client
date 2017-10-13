import React, { Component } from 'react';
import styled from 'styled-components';
import googleButton from '../../images/google-signin-normal.png';
import googleButtonPressed from '../../images/google-signin-pressed.png';
import googleButtonFocus from '../../images/google-signin-focus.png';
import backgroundImg from '../../images/login-bike.png';
import logo from '../../images/logo-light-gray.png';
import { PATTERNS_API_URL } from '../../config';

const LoginImageStyle = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: #edf0f2;
  height: 100vh;
  text-align: center;
`;

const ContentBoxStyle = styled.div`
  height: 100vh;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.06);
`;

const SignInBoxStyle = styled.div`
  border-radius: 4px;
  border: solid 15px #f7f9fa;

  @media (max-height: 900px) {
    padding-top: 5vh;
    padding-bottom: 12.26vh;
    height: 32vh;
    min-height: 350px;
  }
  @media (min-height: 901px) {
    padding-top: 6vh;
    padding-bottom: 12vh;
    height: 32vh;
    min-height: 400px;
  }
`;

const LogoRowStyle = styled.div`
  height: 17.17vh;
  padding-top: 15vh;
  padding-bottom: 19vh;
`;

const SignInStyle = styled.h1`
  font-family: 'Libre Baskerville', serif;
  font-weight: bold;
  font-size: 24px;
  font-weight: bold;
  line-height: 2.5;
  text-align: center;
  color: #1b2431;
  display: block;
`;

const GoogleSignInButton = styled.button`
  background-image: url(${googleButton});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: white;
  border-width: none;
  border-style: none;
  cursor: pointer;
  width: 166px;
  height: 40px;
  padding: 0px;

  :active {
    background-image: url(${googleButtonPressed});
    outline: none;
  }
  :hover {
    background-image: url(${googleButtonFocus});
    border: none;
  }
`;

const HelpText = styled.p`
  margin-top: 4.15vh;
  font-size: 12px;
  line-height: 1;
  color: #7f8fa4;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.location = `${PATTERNS_API_URL}/auth/google`;
  }

  render() {
    return (
      <LoginImageStyle className="container-fluid">
        <div className="row">
          <ContentBoxStyle className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-5 col-md-offset-6">
            <LogoRowStyle>
              <img src={logo} alt="tradecraft logo" />
            </LogoRowStyle>
            <div className="row">
              <SignInBoxStyle className="col-xs-8 col-xs-offset-2">
                <SignInStyle>Sign In</SignInStyle>
                <GoogleSignInButton onClick={this.handleClick} />
                <HelpText>
                  Use your Tradecraft / Rithm School email address
                </HelpText>
              </SignInBoxStyle>
            </div>
          </ContentBoxStyle>
        </div>
      </LoginImageStyle>
    );
  }
}

export default Login;
