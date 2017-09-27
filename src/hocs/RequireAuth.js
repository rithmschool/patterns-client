import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (this.props.isAuthenticated === '') {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated === '') {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  };

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.string.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUserToken
    };
  }

  return connect(mapStateToProps)(Authenticate);
}


