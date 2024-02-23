import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Log the error to an error reporting service
    // Example: sendErrorToService(error, info.componentStack);
    console.error("Error caught by error boundary:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when there's an error
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
