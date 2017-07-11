import React from 'react';
import { connect } from 'react-redux';
import './HeaderCompanyIndex.css';
import { toggleModal } from '../actions/auth';

const HeaderCompanyIndex = props => {
  return(
    <div className='header-index'>
      <div>
        <div className='headerTop row'>
          <p className='headerTitle'> Companies </p>
          <input type='submit' className='addActivityButton' value='ADD' onClick={props.toggleModal} />
        </div>
      </div>
    </div>
  )
}

export default connect (undefined, { toggleModal })(HeaderCompanyIndex);
