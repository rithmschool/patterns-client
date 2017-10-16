import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setActiveCompany } from '../store/actions/actionCreators';
import HeaderCompanyShow from '../components/organisms/HeaderCompanyShow';

class HeaderCompanyShowContainer extends Component {
  componentWillMount() {
    let foundCompany = this.props.companies.find(
      val => val._id === this.props.match.params.companyId
    );
    this.props.setActiveCompany(foundCompany);
  }

  render() {
    return <HeaderCompanyShow company={this.props.company} />;
  }
}

HeaderCompanyShowContainer.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      companyId: PropTypes.string.isRequired
    })
  }),
  setActiveCompany: PropTypes.func.isRequired,
  company: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired
  })
};

const mapStateToProps = state => ({
  companies: state.companies,
  company: state.company
});

const mapDispatchToProps = dispatch => {
  return {
    setActiveCompany: company => dispatch(setActiveCompany(company))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  HeaderCompanyShowContainer
);
