import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderCompanyShowContainer.css';
import { setActiveCompany, toggleModal } from '../store/actions/actionCreators';
import PropTypes from 'prop-types';
import AddEditButton from '../components/atoms/AddEditButton';

//<input
//  type="submit"
//  className="addActivityButton"
//  value="ADD"
//  onClick={this.props.toggleModal}
///>
//<input type="submit" className="editActivityButton" value="EDIT" />

class HeaderCompanyShowContainer extends Component {
  componentWillMount() {
    let foundCompany = this.props.companies.find(
      val => val._id === this.props.match.params.companyId
    );
    this.props.setActiveCompany(foundCompany);
  }

  render() {
    let logo = this.props.company.logo || null;
    let pictureStyle = {
      backgroundImage: `url(${logo})`
    };
    let date = new Date(this.props.company.updatedAt);
    let dateStr = `${date.getUTCMonth() +
      1}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
    return (
      <div className="header">
        <div>
          <div className="headerTop row">
            <div className="company-logo" style={pictureStyle} />
            <p className="headerTitle"> {this.props.company.name} </p>
            <AddEditButton>EDIT</AddEditButton>
            <AddEditButton primary onClick={this.props.toggleModal}>
              ADD
            </AddEditButton>
          </div>
          <p className="potentialEmployer"> Potential employer: [Blank] </p>
          <p className="lastUpdated"> LAST UPDATED </p>
          <p className="latestUpdatedText"> {dateStr} </p>
        </div>
      </div>
    );
  }
}

HeaderCompanyShowContainer.propTypes = {
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  match: PropTypes.shape({
    params: PropTypes.shape({
      companyId: PropTypes.string.isRequired
    })
  }),
  setActiveCompany: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
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
    toggleModal: () => dispatch(toggleModal()),
    setActiveCompany: company => dispatch(setActiveCompany(company))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  HeaderCompanyShowContainer
);
