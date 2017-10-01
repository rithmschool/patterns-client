import React, { Component } from 'react';
import { connect } from 'react-redux';
import Company from '../components/Company';
import PropTypes from 'prop-types';
import LongDataDisplay from '../components/atoms/LongDataDisplay';

class BrowseContainer extends Component {
  render() {
    let companies = null;
    if (this.props.companies.length > 0) {
      companies = this.props.companies.map((company, i) => (
        <Company
          key={i}
          companyId={company._id}
          name={company.name}
          description={company.description}
          logo={company.logo}
        />
      ));
    }
    return (
      <div className="inner-content">
        <div className="number-of-companies">
          {this.props.companies.length} Potential Employers
        </div>
        <div className="company-holder">{companies}</div>
        <div>
          <LongDataDisplay />
        </div>
      </div>
    );
  }
}

BrowseContainer.propTypes = {
  companies: PropTypes.arrayOf(
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
