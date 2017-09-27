import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../helpers/auth';
import signout from '../images/icon-signout-gray.svg';
import PropTypes from 'prop-types';

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: false
    };
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onProfileEnter = this.onProfileEnter.bind(this);
    this.onProfileLeave = this.onProfileLeave.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onProfileClick() {
    this.setState({
      userProfile: !this.state.userProfile
    });
  }

  onProfileEnter() {
    this.setState({
      userProfile: true
    });
  }

  onProfileLeave() {
    this.setState({
      userProfile: false
    });
  }

  onLogout() {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    let pictureStyle = {
      backgroundImage: `url(${this.props.user.picture})`
    };

    let userMenu = (
      <div className="profile-menu" onMouseEnter={this.onProfileEnter}>
        <div className="logout-item" onClick={this.onLogout}>
          <p>
            <img src={signout} alt="Sign Out" />
            <span className="logout-text">Sign Out</span>
          </p>
        </div>
      </div>
    );

    let userDropdown = this.state.userProfile ? userMenu : null;

    return (
      <div className="profile-header" onMouseLeave={this.onProfileLeave}>
        <div
          className="profile-picture"
          style={pictureStyle}
          onClick={this.onProfileClick}
        >
          {userDropdown}
        </div>
        <h2>{this.props.user.name}</h2>
      </div>
    );
  }
}

function mapToUserProfileContainer(state) {
  return {
    user: state.userProfile
  };
}

UserProfileContainer.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  user: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string
  })
};

export default connect(mapToUserProfileContainer, { logout })(
  withRouter(UserProfileContainer)
);
