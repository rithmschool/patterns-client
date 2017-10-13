import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import down from '../../images/icon-chevron-right-gray.svg';

const CompanyLogo = styled.div`
  background-image: ${props => (props.logo ? props.logo : 'none')};
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

const CompanyRow = styled.div`
  background-color: #ffffff;
  height: 96px;
  border-radius: 2px;
  margin: 10px 24px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  :hover {
    overflow: visible;
  }
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

const DataCollectionRow = styled.div``;

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

class LongDataDisplay extends React.Component {
  render() {
    return (
      <CompanyRow>
        <CompanyLogo className="col-xs-1" logo={this.props.logo} />
        <CompanyName className="col-xs-2">
          <Link to={`/assets/companies/${this.props.companyId}`}>
            {this.props.name}
          </Link>
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
          <Link to={`/assets/companies/${this.props.companyId}`}>
            <img src={down} alt="Right Arrow" />
          </Link>
        </CompanyArrow>
      </CompanyRow>
    );
  }
}

LongDataDisplay.propTypes = {
  name: PropTypes.string,
  companyId: PropTypes.string,
  logo: PropTypes.string
};

export default withRouter(LongDataDisplay);
