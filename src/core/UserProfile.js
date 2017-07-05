import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let pictureStyle = {
      backgroundImage: `url(${this.props.user.picture})`,
      backgroundSize: "cover",
    };

    return (
      <div className="profile-header">
        <div className="profile-picture" style={pictureStyle}></div>
        <h2>{this.props.user.name}</h2>
      </div>
    )
  }
}

function mapToUserProfile(state) {
  return {
    user: state.userProfile,
  };
}

export default connect (mapToUserProfile)(UserProfile);