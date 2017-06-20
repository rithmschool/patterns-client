import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './Login.css';
import {Grid, Row, Column} from 'react-cellblock';
import logo from './images/login-logo.png';

// const BASE_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

class Login extends Component {

    responseGoogle(response) {
      console.log(response);
    }

    render() {
        return( 
            <Grid columnWidth={64.5} gutterWidth={24} flexible={true} className="container">
                <Row>  
                    <Column offset="8/16" width="7/16" className="content-box"> 
                        <Row className="top-padding-row">&nbsp;</Row>
                        <Row className="logo-row">
                            <Column offset="3/7" width="1/7">
                                <img src={logo} alt="tradecraft logo"></img> 
                            </Column>          
                        </Row>
                        <Row>   
                            <Column offset="1/7" width="5/7">
                                <Row className="top-padding-sign-in">&nbsp;</Row>
                                <Row className="sign-in-box">
                                    <h1>Sign In</h1>
                                    <GoogleLogin
                                        clientId="http://368001541787-s2miejtdk4nkhgp8nj0r1u94ca475fj2.apps.googleusercontent.com/"
                                        buttonText=""
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                        tag="button"
                                        className="google-sign-in"
                                      />
                                      <p className="aside">Use your Tradecraft / Rithmschool email address</p>
                                  </Row>
                                  <Row className="bottom-padding-sign-in">&nbsp;</Row>
                              </Column>
                          </Row>
                      </Column>
                </Row>
            </Grid>
    )};
}

export default Login;
