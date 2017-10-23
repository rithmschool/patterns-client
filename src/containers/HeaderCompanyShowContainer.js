import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCurrentCompanyId } from '../store/actions/actionCreators';
import HeaderCompanyShow from '../components/organisms/HeaderCompanyShow';

class HeaderCompanyShowContainer extends Component {
  componentWillMount() {
    this.props.setCurrentCompanyId(this.props.match.params.companyId);
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
  setCurrentCompanyId: PropTypes.func.isRequired,
  company: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired
  })
};

const mapStateToProps = state => ({
  company: state.companies[state.currentCompanyId]
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentCompanyId: companyId => dispatch(setCurrentCompanyId(companyId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  HeaderCompanyShowContainer
);
