import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: true });
  }

  render() {
    return this.state.error ? (
      <Alert color="warning">
        We couldn't load the map correctly. Are you offline?
      </Alert>
    ) : this.props.children;
  }
}

export default ErrorBoundary;