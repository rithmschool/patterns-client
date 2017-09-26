import React from 'react';
import { connect } from 'react-redux';
import './HeaderActivityIndexContainer.css';
import { toggleModal } from '../store/actions/action';
import PropTypes from 'prop-types';

const HeaderActivityIndexContainer = props => {
  return (
    <div className="header-index">
      <div>
        <div className="headerTop row">
          <p className="headerTitle"> Activities </p>
          <input
            type="submit"
            className="addActivityButton"
            value="ADD"
            onClick={props.toggleModal}
          />
        </div>
      </div>
    </div>
  );
};

HeaderActivityIndexContainer.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default connect(undefined, { toggleModal })(
  HeaderActivityIndexContainer
);
