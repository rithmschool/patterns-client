import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderCompanyShow.css';
import { setActiveCompany, toggleModal } from '../actions/action';

class HeaderCompanyShow extends Component {

  componentWillMount() {
    let foundCompany = this.props.companies.find(val => (
      val._id === this.props.match.params.companyId
    ));
    this.props.setActiveCompany(foundCompany);
  }

  render() {
    let date = new Date(this.props.company.updatedAt)
    let dateStr = `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
    return (
      <div className='header'>
        <div>
          <div className='headerTop row'>
            <div className='company-logo'/>
            <p className='headerTitle'> {this.props.company.name} </p>
            <input type='submit' className='editActivityButton' value='EDIT' />
            <input type='submit' className='addActivityButton' value='ADD' onClick={this.props.toggleModal} />
          </div>
          <p className='potentialEmployer'> Potential employer: [Blank] </p>
          <p className='lastUpdated'> LAST UPDATED </p>
          <p className='latestUpdatedText'> {dateStr} </p> 
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies,
    company: state.company,
  }
}

export default connect(mapStateToProps, { setActiveCompany, toggleModal })(HeaderCompanyShow);