import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Company from '../components/molecules/Company';
import sortByUpdatedAt from '../helpers/sortByUpdatedAt';

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
      <div className="inner-content">
        <div className="number-of-companies">
          {this.props.companies.length} Potential Employers
        </div>
        <div className="company-holder">{companies}</div>
      </div>
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
