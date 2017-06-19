import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
const BASE_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

class Login extends Component {

    responseGoogle(response) {
      console.log(response);
    }

    render() {
        return( 
            <div>   
                <p>some stuff before the login button</p>

                <GoogleLogin
                    clientId="http://368001541787-s2miejtdk4nkhgp8nj0r1u94ca475fj2.apps.googleusercontent.com/"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                  />

                <p>some stuff after the login button</p>
            </div>
    )};
}

export default Login;
