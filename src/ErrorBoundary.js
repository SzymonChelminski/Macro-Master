import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      console.log(error, info);
    }
  
    render() {
      if (this.state.hasError) {
      window.location.reload()
       return alert('Unknown ingredient, please try again.')
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary