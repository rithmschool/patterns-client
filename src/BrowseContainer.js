import React, { Component } from 'react';
import { connect } from 'react-redux';
import Company from './core/Company';
import axios from 'axios';
import { BASE_URL, setCompanies } from './actions/auth';

class BrowseContainer extends Component {
  constructor(props){
    super(props)
    this.getCompanyId = this.getCompanyId.bind(this);
    this.getAllCompanies = this.getAllCompanies.bind(this);
    this.state = {
      companyId: ''
    }
  }

  getCompanyId() {
    const companyId = null;
    axios.get(`${BASE_URL}/types`)
    .then(res => {
      this.setState({
        companyId: res.data.find(obj => obj.name ==='Company')._id
      });
    })
    .then((companyId) => this.getAllCompanies(this.state.companyId))
    .catch(error => console.log(error));
  }

  getAllCompanies(companyId){
    axios.get(`${BASE_URL}/types/${companyId}/assets`)
    .then(res => {
      this.props.setCompanies(res.data.assets)
    })
    .catch(error => console.log(error));
  }


  componentDidMount(){
    this.getCompanyId();
  }

  render() {
    let companies = null;
    if(this.props.companies.length >0){
      companies = this.props.companies.map((company, i) =>(
        <Company 
          key={i}
          c_id={company._id}
          name={company.name}
          description={company.description}
        />
      ) 
    )} 
     return( 
      <div className="inner-content">
        <div className='number-of-companies'>
          {this.props.companies.length} Potential Employers
        </div>
        <div className='company-holder'>   
          {companies}
        </div>
      </div>
    ) 
  };  
}

function mapStateToProps(state) {
  return {
    companies: state.companies,
  }
}

export default connect(mapStateToProps, { setCompanies })(BrowseContainer);
