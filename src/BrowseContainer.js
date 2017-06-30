import axios from 'axios';
import React, { Component } from 'react';
import { BASE_URL } from './actions/auth';
import Company from './core/Company';

class BrowseContainer extends Component {
  constructor(props){
    super(props)
    this.getCompanyId = this.getCompanyId.bind(this);
    this.getAllCompanies = this.getAllCompanies.bind(this);
    this.state = {
      companies : [],
      companyId: ''
    }
  }

  getCompanyId() {
    const companyId = null;
    axios.get(`${BASE_URL}/types`)
    .then(res => {
      this.setState({
        companyId: res.data.find(obj => obj.name ==='Company')._id
      })
    })
    .then((companyId) => this.getAllCompanies(this.state.companyId))
    .catch(error => console.log(error));
  }

  getAllCompanies(companyId){
    axios.get(`${BASE_URL}/types/${companyId}/assets`)
    .then(res => {
      this.setState({
        companies: res.data.assets
      })
    })
    .catch(error => console.log(error));
  }


  componentDidMount(){
    return this.getCompanyId();
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
