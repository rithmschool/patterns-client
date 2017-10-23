import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Company from '../components/molecules/Company';
import sortByUpdatedAt from '../helpers/sortByUpdatedAt';
import styled from 'styled-components';

const InnerContentStyle = styled.div`background-color: #edf0f2;`;

const NumberOfCompanies = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  color: #585b60;
  display: block;
  margin: 24px;
`;

class BrowseContainer extends Component {
  render() {
    let companies = sortByUpdatedAt(this.props.companies).map((company, i) => {
      return (
        <Company
          key={i}
          companyId={company._id}
          name={company.name}
          description={company.description}
          logo={company.logo}
        />
      );
    });
    return (
      <InnerContentStyle>
        <NumberOfCompanies>
          {this.props.companies.length} Potential Employers
        </NumberOfCompanies>
        <div>{companies}</div>
      </InnerContentStyle>
    );
  }
}

BrowseContainer.propTypes = {
  companies: PropTypes.objectOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      logo: PropTypes.string
    })
  )
};

const mapStateToProps = state => ({
  companies: state.companies
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer);
