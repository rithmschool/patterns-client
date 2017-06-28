import React from 'react';
import './BrowseCompanies.css'

const BrowseCompanies =  (props) => (
  <div className='browseCompsHolder col-lg-3'>
    <p> Browse Companies ...</p>
    <hr className='line' />
    <div className='browseComps row'>
      <div className='searchIcon col-lg-2'>
      </div>
      <div className='findCompanies col-lg-8'>
        <p> Find Companies </p>
      </div>
    </div>
  </div>
)

export default BrowseCompanies;
