import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { toggleModal } from '../actions/auth';

const Header = props => {
  return(
    <div className='header'>
      <div>
        <div className='headerTop row'>
          <p className='headerTitle'> Job Search (June 2017) </p>
          <div className='statusToggle'>
              OPEN  
          </div>
            <input type='submit' className='editActivityButton' value='EDIT' /> 
            <input type='submit' className='addActivityButton' value='ADD' onClick={props.toggleModal} />
        </div>
        <p className='potentialEmployer'> Potential employer: {props.asset ? props.asset.name : ''} </p>
        <p className='lastUpdated'> LAST UPDATED </p>
        <p className='latestUpdatedText'> {props.asset ? props.asset.updatedAt : ''} </p> 
      </div>
    </div>
  )
}

function mapStateForAddCompany(state){
  return {
    asset: state.currentAsset
  }
}

export default connect (mapStateForAddCompany, { toggleModal })(Header);
