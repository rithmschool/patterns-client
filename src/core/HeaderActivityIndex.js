import React from 'react';
import { connect } from 'react-redux';
import './HeaderActivityIndex.css';
import { toggleModal } from '../actions/auth';

const HeaderActivityIndex = props => {
  return(
    <div className='header-index'>
      <div>
        <div className='headerTop row'>
          <p className='headerTitle'> Activities </p>
          <input type='submit' className='addActivityButton' value='ADD' onClick={props.toggleModal} />
        </div>
      </div>
    </div>
  )
}

export default connect (undefined, { toggleModal })(HeaderActivityIndex);
