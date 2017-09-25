import React from "react";
import { connect } from "react-redux";
import "./HeaderCompanyIndexContainer.css";
import { toggleModal } from "../store/actions/action";
import PropTypes from "prop-types";

const HeaderCompanyIndexContainer = props => {
  return (
    <div className="header-index">
      <div>
        <div className="headerTop row">
          <p className="headerTitle"> Companies </p>
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

HeaderCompanyIndexContainer.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default connect(undefined, { toggleModal })(HeaderCompanyIndexContainer);
