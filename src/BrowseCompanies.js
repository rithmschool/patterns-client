import React from 'react';
import { Link, Route } from 'react-router-dom';
import './BrowseCompanies.css'

const BrowseCompanies =  (props) => (
  <div className='browseCompsHolder col-lg-3'>
    <p> Browse Companies ...</p>
    <hr className='line' />
    <div className='browseComps row'>
      <div className='searchIcon col-lg-1'>
      </div>
      <div className='findCompanies col-lg-8'>
        <p className='findCompaniesText'> <Link to='/activities/browse'>Find Companies </Link> </p>
      </div>
    </div>
  </div>
);

export default BrowseCompanies;