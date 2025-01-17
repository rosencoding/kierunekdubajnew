import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 p-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <pre className="text-red-500 whitespace-pre-wrap">
              {this.state.error && this.state.error.toString()}
            </pre>
            <pre className="text-gray-600 mt-4 whitespace-pre-wrap">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null, errorInfo: null });
                window.location.href = '/';
              }}
              className="mt-8 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              Go to Home Page
            </button>
          </div>
        </div>
      );
    }

    try {
      return this.props.children;
    } catch (error) {
      console.error('Render Error:', error);
      return (
        <div className="min-h-screen bg-gray-50 p-8">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Render Error</h1>
          <div className="bg-white rounded-xl shadow-sm p-8">
            <pre className="text-red-500 whitespace-pre-wrap">
              {error.toString()}
            </pre>
            <button
              onClick={() => window.location.href = '/'}
              className="mt-8 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              Go to Home Page
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ErrorBoundary;
