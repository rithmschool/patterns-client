import React, { Component } from "react";
import { connect } from "react-redux";
import Company from "../components/Company";
import axios from "axios";
import { BASE_URL } from "../store/actions/auth";
import PropTypes from "prop-types";

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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies
  };
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

export default connect(mapStateToProps)(BrowseContainer);
