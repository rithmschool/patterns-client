import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './HeaderCompanyShowContainer.css';
import { setActiveCompany } from '../store/actions/actionCreators';
import PrimarySecondaryButton from '../components/atoms/PrimarySecondaryButton';
import ModalCompanyContainer from './ModalCompanyContainer';

class HeaderCompanyShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  componentWillMount() {
    let foundCompany = this.props.companies.find(
      val => val._id === this.props.match.params.companyId
    );
    this.props.setActiveCompany(foundCompany);
  }

  render() {
    let modal;
    if (this.state.modalOpen) {
      modal = (
        <ModalCompanyContainer
          toggleModal={this.toggleModal}
          name="Edit"
          logo="Replace"
        />
      );
    } else {
      modal = null;
    }

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
            <PrimarySecondaryButton>EDIT</PrimarySecondaryButton>
            <PrimarySecondaryButton primary onClick={this.toggleModal}>
              ADD
            </PrimarySecondaryButton>
            {modal}
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
