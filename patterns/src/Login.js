import React, { Component } from 'react';
import './Login.css';
import {Grid, Row, Column} from 'react-cellblock';
import logo from './images/logo-light-gray.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoint: 16,
      offset: 8,
      width: 7
    }
    this.updateBreakpoint = this.updateBreakpoint.bind(this);
  }

  updateBreakpoint(breakpoint) {
    var vals = { breakpoint };
    if (breakpoint <= 4) {
      vals.offset = 0;
      vals.width = 4;
    } else if (breakpoint <= 8) {
      vals.offset = 2;
      vals.width = 5;
    } else if (breakpoint <= 12) {
      vals.offset = 5;
      vals.width = 6;
    } else {
      vals.offset = 8;
      vals.width = 7;
    }
    this.setState(vals)
  }

  render() {
    return( 
      <Grid columnWidth={64.5} gutterWidth={24} flexible={true} onChange={this.updateBreakpoint} className="container">
        <Row>  
          <Column offset={[this.state.offset,this.state.breakpoint].join('/')} width={[this.state.width,this.state.breakpoint].join('/')} className="content-box"> 
            <Row className="logo-row">
              <Column offset="3/7" width="1/7">
                <img src={logo} alt="tradecraft logo"></img> 
              </Column>          
            </Row>
            <Row>   
              <Column offset="1/7" width="5/7">
                <Row className="sign-in-box">
                  <h1>Sign In</h1>
                  <a className="google-sign-in" href='http://localhost:3001/auth/google'/>
                  <p className="aside">Use your Tradecraft / Rithmschool email address</p>
                 </Row>
               </Column>
             </Row>
           </Column>
        </Row>
      </Grid>
  )};
}

export default Login;
