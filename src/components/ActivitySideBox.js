import React, { Component } from "react";
import { Link } from "react-router-dom";
import down from "../images/icon-chevron-right-gray.svg";
import PropTypes from "prop-types";

class ActivitySideBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let status = !this.state.status;
    this.setState({ status });
  }

  render() {
    let toggleStatus = this.state.status ? "active-toggle" : "inactive-toggle";
    let toggleArrow = this.state.status ? "arrow" : "inactive-arrow";
    let menuItems = this.props.data.stages.map(val => {
      return (
        <div key={val._id} className="menu-item">
          <h4>{val.name}</h4>
          <h6 className="count-aside">{val.assets.length}</h6>
        </div>
      );
    });
    let toggleItems = this.state.status ? menuItems : null;
    return (
      <div className="activity">
        <div className="title">
          <div className={toggleStatus} />
          <div className="activity-name">
            <h3>
              <Link to={`/activities/${this.props.data._id}`}>
                {this.props.data.name}
              </Link>
            </h3>
          </div>
          <div className={toggleArrow} onClick={this.handleClick}>
            <img src={down} alt="Activity Toggle Arrow" />
          </div>
        </div>
        {toggleItems}
      </div>
    );
  }
}

ActivitySideBox.propTypes = {
  data: PropTypes.shape({
    stages: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        assets: PropTypes.array.isRequired
      })
    ),
    _id: PropTypes.string.isRequired
  })
};

export default ActivitySideBox;
