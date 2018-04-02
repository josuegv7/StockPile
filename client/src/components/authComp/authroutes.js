// Routes which should not be available for authenticated user, like Sign In, Sign Up
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/stockpile');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/stockpile');
      }
    }

    PropTypes = {
      router: PropTypes.object,
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(NotAuthentication);
}