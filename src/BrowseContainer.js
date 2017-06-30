import axios from 'axios';
import React, { Component } from 'react';
import { BASE_URL } from './actions/auth';
import Company from './core/Company';

class BrowseContainer extends Component {
  constructor(props){
    super(props)
    this.getAllCompanies = this.getAllCompanies.bind(this);
    this.state = {
      companies : []
    }
  }

  getAllCompanies() {
    // NEED TO FIGURE THIS OUT 

    // Will update this when server route exists

    // var companyId = '594d56183475e0b70b26acaf';

    // axios.get(`${BASE_URL}/types/${companyId}/assets`).then(res => {
    //   this.setState({
    //     companies: res.data.assets
    //   });
    // })
    // .catch(error => console.log(error));
  }

  componentDidMount(){
    return this.getAllCompanies()
  }

  render() {
    let companies = null;
    if(this.state.companies.length >0){
      companies = this.state.companies.map((company, i) =>(
        <Company 
          key={i}
          name={company.name}
          description={company.description}
        />
      ) 
    )} 
     return( 
      <div className="inner-content">
        <div className='number-of-companies'>
          {this.state.companies.length} Potential Employers
        </div>
        <div className='company-holder'>   
          {companies}
        </div>
      </div>
    ) 
  };  
}

export default BrowseContainer;
