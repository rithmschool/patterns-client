import React from 'react';
import { Link } from 'react-router-dom';
import down from '../images/icon-chevron-right-gray.svg';
import './Company.css'

const Company = props => {
  let logo = props.logo || null;
  let pictureStyle = {
    backgroundImage: `url(${logo})`,
  }
  return (
    <div className='company row'>
      <div className='company-logo col-xs-1' style={pictureStyle} />
      <div className='company-name col-xs-3'>
        <Link to={`/assets/companies/${props.c_id}`}>{props.name}</Link>
      </div>
      <div className='company-data col-xs-7 row'>
        <div className='first-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs'>
          <div className='company-data-point'>
            DATA POINT
          </div>
          <div className='company-data-value'>
            Data
          </div>
        </div>
        <div className='second-data-collection col-lg-3 col-md-4 col-sm-6 hidden-xs'>
          <div className='company-data-point'>
            DATA POINT
          </div>
          <div className='company-data-value'>
            Data
          </div>
        </div>
        <div className='third-data-collection col-lg-3 col-md-4 hidden-sm hidden-xs'>
          <div className='company-data-point'>
            DATA POINT
          </div>
          <div className='company-data-value'>
            Data
          </div>
        </div>
        <div className='fourth-data-collection col-lg-3 hidden-md hidden-sm hidden-xs'>
          <div className='company-data-point'>
            DATA POINT
          </div>
          <div className='company-data-value'>
            Data
          </div>
        </div>
      </div>
      <div className='company-arrow col-xs-1 hidden-sm hidden-xs'>
        <Link to={`/assets/companies/${props.c_id}`}><img className = 'companyRightArrow'src={down} alt="Right Arrow"/></Link>
      </div>
    </div>
  )
};

export default Company;

