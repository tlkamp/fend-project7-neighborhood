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
    if (this.state.error) {
      return (
        <Alert color="warning">
          We couldn't load this resource correctly. Are you offline?
        </Alert>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;