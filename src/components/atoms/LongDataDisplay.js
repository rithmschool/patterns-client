import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import down from '../../images/icon-chevron-right-gray.svg';

const CompanyLogo = styled.div`
  width: 48px;
  height: 48px;
  background-color: #e7e8ec;
  margin: 24px auto 24px 24px;
  display: inline-block;
  float: left;
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
`;

const CompanyName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #25272a;
  display: inline-block;
  float: left;
  vertical-align: middle;
  line-height: 96px;
  text-align: left;
  a {
    color: #25272a;
    text-decoration: none;
  }
`;

const CompanyData = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  float: left;
`;

const DataCollectionRow = styled.div`
  className="company-data-point"
  className="company-data-value`;

const CompanyDataPoint = styled.div`
  color: #a0a1a5;
  font-weight: bold;
  font-size: 12px;
  margin-top: 30px;
  margin-bottom: 6px;
`;

const CompanyDataValue = styled.div`
  color: #25272a;
  font-size: 16px;
`;

const CompanyArrow = styled.div`
  display: inline-block;
  vertical-align: top;
  line-height: 96px;
  text-align: right;
  img: {
    vertical-align: middle;
  }
`;

//how can we populate the data points below instead of hard-coding <DataCollectionRow> 4 times
//loop with a prop of QtyOfData?

//pictureStyle? not populating image
//let logo = props.logo || null;
// let pictureStyle = {
//   backgroundImage: `url(${logo})`
// };

const LongDataDisplay = props => (
  <div>
    <CompanyLogo className="col-xs-1" />
    <CompanyName className="col-xs-2">
      <Link to={`/assets/companies/${props.companyId}`}>{props.name}</Link>
    </CompanyName>
    <CompanyData className="col-xs-7 row">
      <DataCollectionRow className="col-lg-3 col-md-4 col-sm-6 hidden-xs">
        <CompanyDataPoint>DATA POINT</CompanyDataPoint>
        <CompanyDataValue>Data</CompanyDataValue>
      </DataCollectionRow>
      <DataCollectionRow className="col-lg-3 col-md-4 col-sm-6 hidden-xs">
        <CompanyDataPoint>DATA POINT</CompanyDataPoint>
        <CompanyDataValue>Data</CompanyDataValue>
      </DataCollectionRow>
      <DataCollectionRow className="col-lg-3 col-md-4 col-sm-6 hidden-xs">
        <CompanyDataPoint>DATA POINT</CompanyDataPoint>
        <CompanyDataValue>Data</CompanyDataValue>
      </DataCollectionRow>
      <DataCollectionRow className="col-lg-3 col-md-4 col-sm-6 hidden-xs">
        <CompanyDataPoint>DATA POINT</CompanyDataPoint>
        <CompanyDataValue>Data</CompanyDataValue>
      </DataCollectionRow>
    </CompanyData>
    <CompanyArrow className="col-xs-1 hidden-sm hidden-x">
      <Link to={`/assets/companies/${props.companyId}`}>
        <img src={down} alt="Right Arrow" />
      </Link>
    </CompanyArrow>
  </div>
);

export default LongDataDisplay;

