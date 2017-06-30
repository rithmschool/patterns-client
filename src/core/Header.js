import React from 'react';
import './Header.css';
import { connect } from 'react-redux';

const Header =  (props) => {
  return(
    <div className='header'>
      <div>
        <div className='headerTop row'>
          <p className='headerTitle'> Job Search (June 2017) </p>
          <div className='headerRectangle'>
            <div className='headerRecText'>
              OPEN  
            </div>
          </div>
          <div className='editB'>
            <input type='submit' className='editActivityButton' value='EDIT' /> 
          </div>
          <div className='addB'>
            <input type='submit' className='addActivityButton' value='ADD' /> 
          </div>
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


export default connect (mapStateForAddCompany, null)(Header);
