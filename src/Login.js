import React, { Component } from 'react';
import './Login.css';
import logo from './images/logo-light-gray.png';
import {BASE_URL} from './actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   breakpoint: 16,
    //   offset: 8,
    //   width: 7
    // }
    // this.updateBreakpoint = this.updateBreakpoint.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // updateBreakpoint(breakpoint) {
  //   var vals = { breakpoint };
  //   if (breakpoint <= 4) {
  //     vals.offset = 0;
  //     vals.width = 4;
  //   } else if (breakpoint <= 8) {
  //     vals.offset = 2;
  //     vals.width = 5;
  //   } else if (breakpoint <= 12) {
  //     vals.offset = 5;
  //     vals.width = 6;
  //   } else {
  //     vals.offset = 8;
  //     vals.width = 7;
  //   }
  //   this.setState(vals)
  // }

  handleClick() {
    window.location = `${BASE_URL}/auth/google`;
  }

  render() {
    return( 
      <div className="container">
        <div className="row">  
          <div className="content-box col-xs-5 col-xs-offset-6"> 
            <div className="logo-row">
              <div>
                <img src={logo} alt="tradecraft logo"></img> 
              </div>          
            </div>
            <div>   
              <div>
                <div className="sign-in-box">
                  <h1 id="sign-in">Sign In</h1>
                  <button className="google-sign-in" onClick={this.handleClick}/>
                  <p className="aside">Use your Tradecraft / Rithm School email address</p>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
  )};
}

export default Login;
