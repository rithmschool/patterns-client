import React from 'react';
import { connect } from 'react-redux';
import './HeaderCompanyIndexContainer.css';
import { toggleModal } from '../store/actions/actionCreators';
import PropTypes from 'prop-types';
import AddEditButton from '../components/atoms/AddEditButton';

const HeaderCompanyIndexContainer = props => {
  return (
    <div className="header-index">
      <div>
        <div className="headerTop row">
          <p className="headerTitle"> Companies </p>
          <AddEditButton primary onClick={props.toggleModal}>
            ADD
          </AddEditButton>
        </div>
      </div>
    </div>
  );
};

HeaderCompanyIndexContainer.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  HeaderCompanyIndexContainer
);

// <input
//   type="submit"
//   className="addActivityButton"
//   value="ADD"
//   onClick={props.toggleModal}
// />
